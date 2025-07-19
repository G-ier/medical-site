/**
 * Stripe Webhooks API
 * Handles Stripe webhook events for payment processing
 */

import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/shared/lib/stripe';
import { PaymentService } from '@/shared/lib/database/payment-service';
import { SubscriptionService } from '@/shared/lib/database/subscription-service';
import Stripe from 'stripe';
import { prisma } from '@/shared/lib/database/client';

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

/**
 * POST /api/stripe/webhooks
 * Handles incoming Stripe webhook events
 */
export async function POST(request: NextRequest) {
  try {
    console.log('🔔 POST /api/stripe/webhooks - Processing webhook');

    if (!webhookSecret) {
      console.error('❌ Webhook secret not configured');
      return NextResponse.json(
        { error: 'Webhook secret not configured' },
        { status: 500 }
      );
    }

    // Get the raw body and signature
    const body = await request.text();
    const signature = request.headers.get('stripe-signature');

    if (!signature) {
      console.error('❌ No Stripe signature found');
      return NextResponse.json(
        { error: 'No Stripe signature found' },
        { status: 400 }
      );
    }

    let event: Stripe.Event;

    try {
      // Verify the webhook signature
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err) {
      console.error('❌ Webhook signature verification failed:', err);
      return NextResponse.json(
        { error: 'Webhook signature verification failed' },
        { status: 400 }
      );
    }

    console.log('✅ Webhook verified, processing event:', event.type);

    // Handle different event types
    switch (event.type) {
      // Core subscription flow
      case 'setup_intent.succeeded':
        await handleSetupIntentSucceeded(event.data.object as Stripe.SetupIntent);
        break;
      case 'invoice.payment_succeeded':
        await handleInvoicePaymentSucceeded(event.data.object as Stripe.Invoice);
        break;
      
      // One-time payments
      case 'payment_intent.succeeded':
        await handlePaymentIntentSucceeded(event.data.object as Stripe.PaymentIntent);
        break;
      
      // Subscription management
      case 'customer.subscription.deleted':
        await handleSubscriptionDeleted(event.data.object as Stripe.Subscription);
        break;
      case 'customer.subscription.updated':
        await handleSubscriptionUpdated(event.data.object as Stripe.Subscription);
        break;
      
      // Error handling
      case 'invoice.payment_failed':
        await handleInvoicePaymentFailed(event.data.object as Stripe.Invoice);
        break;
      
      default:
        console.log(`🤷‍♂️ Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });

  } catch (error) {
    console.error('❌ Error processing webhook:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}

// Event handlers
async function handleSubscriptionUpdated(subscription: Stripe.Subscription) {
  console.log('🔄 Subscription updated:', subscription.id);
  
  try {
    // Find the subscription record first
    const subscriptionRecord = await SubscriptionService.findByStripeId(subscription.id);
    
    if (subscriptionRecord) {
      // Update subscription record with proper null checks
      const updateData: any = {
        status: subscription.status,
        canceledAt: subscription.status === 'canceled' ? new Date() : undefined
      };
      
      // Only update period dates if they exist and are valid
      if ((subscription as any).current_period_start) {
        updateData.currentPeriodStart = new Date((subscription as any).current_period_start * 1000);
      }
      if ((subscription as any).current_period_end) {
        updateData.currentPeriodEnd = new Date((subscription as any).current_period_end * 1000);
      }
      
      await SubscriptionService.updateSubscription(subscriptionRecord.id, updateData);
      
      // Also update payment records for backward compatibility
      const paymentUpdateData: any = {
        subscriptionStatus: subscription.status,
        status: subscription.status === 'active' ? 'SUCCEEDED' : 
                subscription.status === 'canceled' ? 'CANCELLED' : 'PENDING'
      };
      
      // Only update period dates if they exist and are valid
      if ((subscription as any).current_period_start) {
        paymentUpdateData.currentPeriodStart = new Date((subscription as any).current_period_start * 1000);
      }
      if ((subscription as any).current_period_end) {
        paymentUpdateData.currentPeriodEnd = new Date((subscription as any).current_period_end * 1000);
      }
      
      await PaymentService.updateSubscriptionPayment(subscription.id, paymentUpdateData);
      
      console.log('✅ Updated subscription:', {
        id: subscription.id,
        status: subscription.status,
        current_period_start: updateData.currentPeriodStart || 'null',
        current_period_end: updateData.currentPeriodEnd || 'null'
      });
    } else {
      console.log('ℹ️ No subscription record found for update:', subscription.id);
    }
  } catch (error) {
    console.error('❌ Error handling subscription updated:', error);
  }
}

async function handleSubscriptionDeleted(subscription: Stripe.Subscription) {
  console.log('🔄 Subscription deleted:', subscription.id);
  
  try {
    // Find the subscription record first
    const subscriptionRecord = await SubscriptionService.findByStripeId(subscription.id);
    
    if (subscriptionRecord) {
      // Mark subscription as cancelled
      await SubscriptionService.updateSubscription(subscriptionRecord.id, {
        status: 'canceled',
        canceledAt: new Date()
      });
      
      // Also update payment records for backward compatibility
      await PaymentService.updateSubscriptionPayment(subscription.id, {
        subscriptionStatus: 'canceled',
        status: 'CANCELLED'
      });
      
      console.log('✅ Marked subscription as cancelled:', subscription.id);
    } else {
      console.log('ℹ️ No subscription record found for deletion:', subscription.id);
    }
    
    // TODO: Handle cancellation logic (send cancellation email, etc.)
  } catch (error) {
    console.error('❌ Error handling subscription deleted:', error);
  }
}

async function handleInvoicePaymentSucceeded(invoice: Stripe.Invoice) {
  console.log('🧾 Invoice payment succeeded:', invoice);
  
  try {
    // Get healthie_user_id from metadata or DB
    const metadata = invoice.metadata as any;
    let subscriptionId = (invoice as any).subscription as string | undefined;
    
    // If subscription is not directly available, try to get it from the parent object
    if (!subscriptionId && (invoice as any).parent?.subscription_details?.subscription) {
      subscriptionId = (invoice as any).parent.subscription_details.subscription;
    }
    
    const { userId, patientId, healthieUserId } = await getUserPatientAndHealthieIdFromStripeCustomer(invoice.customer as string);
    console.log('subscriptionId', subscriptionId)
    
    // Check if this is a recurring billing cycle (not the first payment)
    const isFirstInvoice = invoice.billing_reason === 'subscription_create';
    const isRecurringBilling = !isFirstInvoice;
    
    console.log('🔍 Invoice analysis:', {
      billing_reason: invoice.billing_reason,
      isFirstInvoice,
      isRecurringBilling,
      hasSubscriptionId: !!subscriptionId,
      hasHealthieUserId: !!healthieUserId,
      hasUserData: !!(userId && patientId)
    });
    
    // FOR RECURRING BILLING: Create payment record and Healthie invoice
    if (isRecurringBilling) {
      console.log('🔄 Processing recurring billing cycle...');
      
      // 1. Create payment record (even if no subscription found - for manual invoices)
      if (userId && patientId) {
        console.log('💰 Creating payment record for recurring billing cycle');
        
        // Try to find subscription record if subscriptionId exists
        let subscriptionRecord = null;
        if (subscriptionId) {
          subscriptionRecord = await SubscriptionService.findByStripeId(subscriptionId);
        }
        
        // Get payment method from invoice or subscription
        let paymentMethod = null;
        if (invoice.default_payment_method) {
          paymentMethod = invoice.default_payment_method;
        } else if (subscriptionRecord) {
          // Try to get payment method from Stripe subscription
          try {
            const stripeSubscription = await stripe.subscriptions.retrieve(subscriptionId);
            paymentMethod = stripeSubscription.default_payment_method;
          } catch (err) {
            console.warn('⚠️ Could not retrieve payment method from subscription:', err);
          }
        }
        
        const newPayment = await PaymentService.createPayment({
          userId,
          patientId,
          subscriptionId: subscriptionRecord?.id || null,
          stripeSubscriptionId: subscriptionId || null,
          stripeInvoiceId: invoice.id,
          amount: invoice.amount_paid || invoice.amount_due,
          currency: invoice.currency,
          status: 'SUCCEEDED',
          metadata: invoice.metadata,
          productType: subscriptionRecord?.productType || 'subscription',
          planType: subscriptionRecord?.planType || 'recurring',
          planName: subscriptionRecord?.planName || metadata?.plan_name || 'Recurring Service',
          servicesProvided: `Recurring billing - Invoice: ${invoice.id}`,
          stripeCustomerId: invoice.customer as string,
          paymentMethod: paymentMethod
        });
        
        console.log('✅ Created recurring payment record:', newPayment.id);
      } else {
        console.warn('⚠️ Cannot create payment record: missing userId or patientId');
      }
      
      // 2. Create Healthie invoice and update payment record
      if (healthieUserId) {
        try {
          console.log('🏥 Creating Healthie invoice for recurring billing cycle:', invoice.id);
          const amount = invoice.amount_paid || invoice.amount_due;
          const notes = `Recurring billing - Invoice: ${invoice.id}`;
          const servicesProvided = metadata?.plan_name || 'Recurring Service';
          
          const healthieInvoiceId = await PaymentService.createHealthieInvoice({
            recipientId: healthieUserId,
            price: (amount / 100).toString(),
            invoiceType: 'offering',
            status: 'Paid',
            notes,
            servicesProvided
          });
          console.log('✅ Healthie invoice created for recurring billing:', healthieInvoiceId);
          
          // Update payment record with Healthie invoice ID
          if (userId && patientId) {
            try {
              const paymentRecord = await prisma.payment.findFirst({
                where: {
                  stripeInvoiceId: invoice.id,
                  userId: userId,
                  patientId: patientId
                },
                orderBy: { createdAt: 'desc' }
              });
              
              if (paymentRecord) {
                await PaymentService.updatePaymentWithHealthieInvoice(paymentRecord.id, healthieInvoiceId, 'PAID', {
                  amount: amount,
                  paidDate: new Date(),
                  notes: notes
                });
                console.log('✅ Updated payment record with Healthie invoice ID:', paymentRecord.id);
              }
            } catch (updateErr) {
              console.error('❌ Failed to update payment with Healthie invoice ID:', updateErr);
            }
          }
        } catch (err) {
          console.error('❌ Failed to create Healthie invoice for recurring billing:', invoice.id, err);
        }
      } else {
        console.warn('⚠️ Cannot create Healthie invoice: healthie_user_id missing for invoice', invoice.id);
      }
    } else {
      console.log('ℹ️ Skipping recurring billing processing - first payment (subscription_create) handled by setup_intent.succeeded');
    }
    
  } catch (error) {
    console.error('❌ Error processing invoice payment:', error);
  }
}

async function handleInvoicePaymentFailed(invoice: Stripe.Invoice) {
  console.log('🧾 Invoice payment failed:', invoice.id);
  
  // TODO: Handle failed recurring payment
  // TODO: Dunning management
}

// Removed handleSubscriptionCreated - not needed, creates duplicate logic

async function handlePaymentIntentSucceeded(paymentIntent: Stripe.PaymentIntent) {
  console.log('💳 Payment intent succeeded:', paymentIntent.id);
  
  try {
    // Check if this is a one-time payment (has stripePaymentIntentId in our DB)
    const existingPayment = await prisma.payment.findFirst({
      where: { stripePaymentIntentId: paymentIntent.id }
    });
    
    if (existingPayment) {
      // This is a one-time payment - update it
      console.log('💰 Updating one-time payment record:', existingPayment.id);
      await PaymentService.updatePayment(paymentIntent.id, { 
        status: 'SUCCEEDED' 
      });
    } else {
      // This might be a subscription payment - check metadata
      const metadata = paymentIntent.metadata;
      if (metadata?.subscription_id) {
        console.log('🔗 Payment intent linked to subscription:', metadata.subscription_id);
        
        // Update subscription payment record
        await PaymentService.updateSubscriptionPayment(metadata.subscription_id, {
          status: 'SUCCEEDED'
        });
      } else {
        console.log('ℹ️ Payment intent not found in database, might be handled by setup_intent.succeeded');
      }
    }
    
    console.log('✅ Updated payment records for payment intent:', paymentIntent.id);
  } catch (error) {
    console.error('❌ Error handling payment intent succeeded:', error);
  }
}

async function handleSetupIntentSucceeded(setupIntent: Stripe.SetupIntent) {
  console.log('🔧 Setup intent succeeded:', setupIntent.id);
  
  try {
    // Setup intent succeeded means payment method was added successfully for subscription
    const metadata = setupIntent.metadata;
    let subscriptionRecord = null;
    
    // Try to find subscription by temporary subscription ID first
    const tempSubscriptionId = `temp_${setupIntent.id}`;
    console.log('🔍 Looking for subscription by temp ID:', tempSubscriptionId);
    subscriptionRecord = await prisma.subscription.findFirst({
      where: {
        stripeSubscriptionId: tempSubscriptionId
      }
    });
    
    // Fallback: try to find by setup_intent_id in metadata
    if (!subscriptionRecord && setupIntent.id) {
      console.log('🔍 Fallback: Looking for subscription by setup_intent_id in metadata:', setupIntent.id);
      subscriptionRecord = await prisma.subscription.findFirst({
        where: {
          metadata: {
            path: ['setup_intent_id'],
            equals: setupIntent.id
          }
        }
      });
    }
    
    // Fallback: try to find by subscription_id in metadata (legacy)
    if (!subscriptionRecord && metadata?.subscription_id) {
      console.log('🔍 Fallback: looking for subscription by stripe subscription_id:', metadata.subscription_id);
      subscriptionRecord = await SubscriptionService.findByStripeId(metadata.subscription_id);
    }
    
    if (subscriptionRecord) {
      console.log('✅ Found subscription record:', subscriptionRecord.id);
      
      // Now we need to create the actual Stripe subscription
      console.log('🔄 Creating actual Stripe subscription...');
      const stripeSubscription = await stripe.subscriptions.create({
        customer: setupIntent.customer as string,
        items: [{ price: subscriptionRecord.stripePriceId }],
        default_payment_method: setupIntent.payment_method as string,
        metadata: {
          ...metadata,
          subscription_db_id: subscriptionRecord.id.toString(),
          setup_intent_id: setupIntent.id
        }
      });
      
      console.log('✅ Created Stripe subscription:', stripeSubscription.id);
      
      // Update subscription record with Stripe subscription ID and activate it
      const updateData: any = {
        stripeSubscriptionId: stripeSubscription.id,
        status: 'active',
        updatedAt: new Date()
      };
      
      // Only add period dates if they're valid
      if ((stripeSubscription as any).current_period_start) {
        updateData.currentPeriodStart = new Date((stripeSubscription as any).current_period_start * 1000);
      }
      if ((stripeSubscription as any).current_period_end) {
        updateData.currentPeriodEnd = new Date((stripeSubscription as any).current_period_end * 1000);
      }
      
      await prisma.subscription.update({
        where: { id: subscriptionRecord.id },
        data: updateData
      });
      
      // Find and update associated payment status to succeeded
      const paymentRecords = await prisma.payment.findMany({
        where: { 
          subscriptionId: subscriptionRecord.id,
          status: 'PENDING'
        },
        orderBy: { createdAt: 'desc' }
      });
      
      if (paymentRecords.length > 0) {
        const latestPayment = paymentRecords[0];
        
        // Update payment record with complete information
        const paymentUpdateData: any = {
          status: 'SUCCEEDED',
          stripeSubscriptionId: stripeSubscription.id,
          paymentMethod: setupIntent.payment_method as string,
          subscriptionStatus: stripeSubscription.status,
          paidAt: new Date(),
          updatedAt: new Date()
        };
        
        // Add period dates if available
        if ((stripeSubscription as any).current_period_start) {
          paymentUpdateData.currentPeriodStart = new Date((stripeSubscription as any).current_period_start * 1000);
        }
        if ((stripeSubscription as any).current_period_end) {
          paymentUpdateData.currentPeriodEnd = new Date((stripeSubscription as any).current_period_end * 1000);
        }
        
        await prisma.payment.update({
          where: { id: latestPayment.id },
          data: paymentUpdateData
        });
        console.log('✅ Updated payment record with complete setup information:', latestPayment.id);
        
        // **CRITICAL: Create Healthie Invoice for subscription setup**
        if (subscriptionRecord.healthieUserId) {
          try {
            console.log('🏥 Creating Healthie invoice for subscription setup:', stripeSubscription.id);
            
            const amount = subscriptionRecord.amount;
            const notes = `Subscription setup - Setup Intent: ${setupIntent.id}`;
            const servicesProvided = subscriptionRecord.planName || 'Subscription Service';
            
            const healthieInvoiceId = await PaymentService.createHealthieInvoice({
              recipientId: subscriptionRecord.healthieUserId,
              price: (amount / 100).toString(),
              invoiceType: 'offering',
              status: 'Paid',
              notes,
              servicesProvided
            });
            
            // Update payment record with Healthie invoice ID
            await PaymentService.updatePaymentWithHealthieInvoice(latestPayment.id, healthieInvoiceId, 'PAID', {
              amount: amount,
              paidDate: new Date(),
              notes: notes
            });
            
            console.log('✅ Healthie invoice created for subscription setup:', healthieInvoiceId);
          } catch (healthieError) {
            console.error('❌ Failed to create Healthie invoice for subscription setup:', healthieError);
          }
        } else {
          console.warn('⚠️ No healthieUserId found for subscription, skipping Healthie invoice creation');
        }
      }
      
      console.log('✅ Subscription activated after setup intent success:', stripeSubscription.id);
    } else {
      console.warn('⚠️ No subscription record found for setup intent:', setupIntent.id);
    }
    
  } catch (error) {
    console.error('❌ Error handling setup intent succeeded:', error);
  }
}

// Helper functions
// Helper to get userId, patientId, and healthie_user_id from Stripe customer ID
async function getUserPatientAndHealthieIdFromStripeCustomer(stripeCustomerId: string): Promise<{ userId: number | null, patientId: number | null, healthieUserId: string | null }> {
  if (!stripeCustomerId) return { userId: null, patientId: null, healthieUserId: null };
  try {
    // 1. Try to find the most recent payment with this Stripe customer ID
    const payment = await prisma.payment.findFirst({
      where: { stripeCustomerId },
      orderBy: { createdAt: 'desc' }
    });
    if (payment) {
      const patient = payment.patientId
        ? await prisma.patient.findUnique({ where: { id: payment.patientId } })
        : null;
      return {
        userId: payment.userId,
        patientId: payment.patientId,
        healthieUserId: patient?.healthiePatientId || null
      };
    }
    // 2. If not found, try the most recent subscription
    const subscription = await prisma.subscription.findFirst({
      where: { stripeCustomerId },
      orderBy: { createdAt: 'desc' }
    });
    if (subscription) {
      const patient = subscription.patientId
        ? await prisma.patient.findUnique({ where: { id: subscription.patientId } })
        : null;
      return {
        userId: subscription.userId,
        patientId: subscription.patientId,
        healthieUserId: patient?.healthiePatientId || null
      };
    }
    // Not found
    return { userId: null, patientId: null, healthieUserId: null };
  } catch (err) {
    console.error('❌ Error looking up user/patient/healthie ID from Stripe customer:', err);
    return { userId: null, patientId: null, healthieUserId: null };
  }
} 