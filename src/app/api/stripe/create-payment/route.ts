/**
 * Smart Payment Creation API
 * Automatically creates Customer and determines payment type based on Healthie offering
 */

import { NextRequest, NextResponse } from 'next/server';
import { stripe, STRIPE_CONFIG, SubscriptionHelpers } from '@/shared/lib/stripe';
import { PaymentService } from '@/shared/lib/database/payment-service';
import { SubscriptionService } from '@/shared/lib/database/subscription-service';
import { getAuthenticatedUserWithPatient } from '@/shared/lib/auth/api-auth-helpers';

// Helper function to calculate period end date based on billing frequency
function calculatePeriodEnd(startDate: Date, billingFrequency: string): Date {
  const start = new Date(startDate);
  
  switch (billingFrequency.toLowerCase()) {
    case 'week':
    case 'weekly':
      return new Date(start.getTime() + 7 * 24 * 60 * 60 * 1000);
    case 'month':
    case 'monthly':
      const monthlyEnd = new Date(start);
      monthlyEnd.setMonth(monthlyEnd.getMonth() + 1);
      return monthlyEnd;
    case 'year':
    case 'yearly':
    case 'annual':
      const yearlyEnd = new Date(start);
      yearlyEnd.setFullYear(yearlyEnd.getFullYear() + 1);
      return yearlyEnd;
    case 'day':
    case 'daily':
      return new Date(start.getTime() + 24 * 60 * 60 * 1000);
    case 'minute': // For testing
      return new Date(start.getTime() + 5 * 60 * 1000); // 5 minutes
    default:
      // Default to monthly if unknown
      console.warn('⚠️ Unknown billing frequency, defaulting to monthly:', billingFrequency);
      const defaultEnd = new Date(start);
      defaultEnd.setMonth(defaultEnd.getMonth() + 1);
      return defaultEnd;
  }
}

export interface CreatePaymentRequest {
  amount: number; // Amount in cents
  currency?: string;
  productId?: string; // Stripe product ID
  priceId?: string; // Stripe price ID
  interval?: string; // e.g., 'month', 'year', undefined for one-time
  metadata?: Record<string, string>;
}

export interface CreatePaymentResponse {
  success: boolean;
  data?: {
    client_secret?: string; // For Payment Intent
    subscription_id?: string; // For Subscription
    customer_id: string;
    payment_type: 'one-time' | 'subscription';
    billing_frequency?: string;
  };
  error?: string;
}

/**
 * POST /api/stripe/create-payment
 * Smart payment creation with automatic Customer creation and type detection
 */
//curl -X POST http://localhost:3004/api/stripe/create-payment -H "Content-Type: application/json" -d '{"amount": 1000, "currency": "usd", "healthie_offering_id": "123"}'
export async function POST(request: NextRequest): Promise<NextResponse<CreatePaymentResponse>> {
  const requestId = Math.random().toString(36).substring(7);
  try {
    console.log(`🧠 [${requestId}] POST /api/stripe/create-payment - Smart payment creation`);

    // Get authenticated user with patient data via JWT cookies
    const authResult = await getAuthenticatedUserWithPatient(request);
    if (!authResult.success) {
      return NextResponse.json({
        success: false,
        error: authResult.error || 'Authentication required'
      }, { status: authResult.statusCode || 401 });
    }

    if (!authResult.patient) {
      return NextResponse.json({
        success: false,
        error: 'No patient record found for user in smart payment'
      }, { status: 404 });
    }

    const userId = authResult.dbUser!.id;
    const patientId = authResult.patient.id;
    const patient = authResult.patient;

    console.log('🔍 User ID:', userId);
    console.log('🔍 Patient ID:', patientId);
    console.log('👤 Found patient ID for smart payment:', patientId);
    console.log('🏥 Found Healthie Patient ID:', patient.healthiePatientId);

    // Parse request body with error handling
    let body: CreatePaymentRequest;
    try {
      const rawBody = await request.text();
      console.log(`📝 [${requestId}] Raw request body:`, rawBody || '[EMPTY]');

      if (!rawBody || rawBody.trim() === '') {
        console.error(`❌ [${requestId}] Empty request body received`);
        return NextResponse.json({
          success: false,
          error: 'Request body is empty'
        }, { status: 400 });
      }

      body = JSON.parse(rawBody);
      console.log(`📝 [${requestId}] Parsed smart payment request:`, JSON.stringify(body, null, 2));
    } catch (error) {
      console.error(`❌ [${requestId}] Failed to parse request body:`, error);
      return NextResponse.json({
        success: false,
        error: 'Invalid JSON in request body'
      }, { status: 400 });
    }

    const {
      amount,
      currency = STRIPE_CONFIG.currency,
      productId,
      priceId,
      interval,
      metadata = {}
    } = body;



    // Validate required fields
    if (!amount || amount <= 0) {
      return NextResponse.json({
        success: false,
        error: 'Valid amount is required'
      }, { status: 400 });
    }
    if (!productId) {
      return NextResponse.json({
        success: false,
        error: 'Stripe productId is required'
      }, { status: 400 });
    }

    // Remove all Healthie offering logic and replace with Stripe product logic
    let billingFrequency = interval || 'one_time';
    let productName = 'Unknown Product';
    let stripeProduct;
    let stripePrice;
    try {
      stripeProduct = await stripe.products.retrieve(productId);
      productName = stripeProduct.name;
      if (priceId) {
        stripePrice = await stripe.prices.retrieve(priceId);
        billingFrequency = stripePrice.recurring?.interval || 'one_time';
      }
    } catch {
      return NextResponse.json({
        success: false,
        error: 'Invalid Stripe product or price'
      }, { status: 400 });
    }

    // Create or find Stripe Customer
    console.log('👤 Creating/finding Stripe Customer...');
    let customer;

    if (authResult.user?.email) {
      // Try to find existing customer by email
      const existingCustomers = await stripe.customers.list({
        email: authResult.user.email,
        limit: 1
      });

      if (existingCustomers.data.length > 0) {
        customer = existingCustomers.data[0];
        console.log('✅ Found existing Stripe Customer:', customer.id);
      } else {
        // Create new customer
        customer = await stripe.customers.create({
          email: authResult.user.email,
          name: authResult.user.name || undefined,
          metadata: {
            auth0_user_id: authResult.user.auth0UserId || '',
            healthie_user_id: patient?.healthiePatientId || '',
            internal_user_id: userId?.toString() || ''
          }
        });
        console.log('✅ Created new Stripe Customer:', customer.id);
      }
    } else {
      // Anonymous customer
      customer = await stripe.customers.create({
        metadata: {
          healthie_user_id: patient?.healthiePatientId || '',
          anonymous: 'true'
        }
      });
      console.log('✅ Created anonymous Stripe Customer:', customer.id);
    }

    // Enhanced metadata
    const enhancedMetadata = {
      ...metadata,
      user_id: authResult.user?.auth0UserId || '',
      user_email: authResult.user?.email || '',
      stripe_product_id: productId,
      stripe_price_id: priceId || '',
      billing_frequency: billingFrequency,
      product_name: productName,
      created_at: new Date().toISOString(),
      ...(patient?.healthiePatientId ? { healthie_user_id: patient.healthiePatientId } : {}),
    };

    // Enforce healthie_user_id for all payments
    if (!enhancedMetadata.healthie_user_id) {
      return NextResponse.json({
        success: false,
        error: 'Healthie integration required: patient must have healthie_user_id.'
      }, { status: 400 });
    }

    console.log('🔧 Enhanced metadata:', JSON.stringify(enhancedMetadata, null, 2));

    // Determine payment type based on billing frequency
    const isSubscription = billingFrequency !== 'one_time';
    console.log(`💡 Payment type determined: ${isSubscription ? 'SUBSCRIPTION' : 'ONE-TIME'} (${billingFrequency})`);



    if (isSubscription) {
      // For subscriptions, always create a Setup Intent first
      // This ensures proper payment method collection and subscription setup
      console.log('🔄 Creating Setup Intent for subscription...');

      try {
        const setupIntent = await stripe.setupIntents.create({
          customer: customer.id,
          usage: 'off_session',
          confirm: false,
          metadata: {
            ...enhancedMetadata,
            setup_for: 'subscription',
            stripe_price_id: priceId,
            stripe_product_id: productId
          }
        });

        console.log('✅ Created Setup Intent for subscription:', setupIntent.id);

        // Create subscription record in database (in incomplete state)
        if (userId) {
          // Use a temporary unique ID until webhook creates the actual Stripe subscription
          const tempSubscriptionId = `temp_${setupIntent.id}`;
          
          const subscriptionData = {
            userId,
            patientId,
            stripeSubscriptionId: tempSubscriptionId, // Temporary ID to avoid unique constraint violation
            stripeCustomerId: customer.id,
            stripePriceId: priceId,
            stripeProductId: productId,
            status: 'incomplete', // Will be updated by webhook
            currentPeriodStart: new Date(),
            currentPeriodEnd: calculatePeriodEnd(new Date(), billingFrequency),
            cancelAtPeriodEnd: false,
            productType: 'weight_loss',
            planType: billingFrequency.toLowerCase(),
            planName: productName,
            planDescription: `${productName} - ${billingFrequency} billing`,
            billingInterval: SubscriptionHelpers.mapBillingFrequencyToInterval(billingFrequency),
            billingIntervalCount: 1,
            amount,
            currency,
            healthieUserId: patient?.healthiePatientId,
            metadata: {
              ...enhancedMetadata,
              setup_intent_id: setupIntent.id
            }
          };
          
          console.log('🔧 Creating subscription record with Setup Intent:', setupIntent.id);
          const subscriptionRecord = await SubscriptionService.createSubscription(subscriptionData);

          // Create initial payment record
          await PaymentService.createPayment({
            userId,
            patientId,
            subscriptionId: subscriptionRecord.id,
            stripePriceId: priceId,
            stripeProductId: productId,
            amount,
            currency,
            status: 'PENDING',
            metadata: {
              ...enhancedMetadata,
              setup_intent_id: setupIntent.id
            },
            productType: 'weight_loss',
            planType: billingFrequency.toLowerCase(),
            planName: productName,
            servicesProvided: `${productName} - ${billingFrequency} billing`,
            stripeCustomerId: customer.id
          });
        }

        console.log(`✅ [${requestId}] Setup Intent created for subscription`);
        return NextResponse.json({
          success: true,
          data: {
            client_secret: setupIntent.client_secret,
            customer_id: customer.id,
            payment_type: 'subscription',
            billing_frequency: billingFrequency,
            setup_intent_id: setupIntent.id,
            requires_action: true
          }
        });

      } catch (subscriptionError) {
        console.error('❌ Failed to create Setup Intent for subscription:', subscriptionError);
        return NextResponse.json({
          success: false,
          error: 'Failed to create Setup Intent for subscription'
        }, { status: 500 });
      }
    } else {
      // Create One-Time Payment Intent
      console.log('💰 Creating one-time Payment Intent...');

      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency,
        customer: customer.id,
        metadata: {
          ...enhancedMetadata,
          payment_type: 'one_time'
        },
        automatic_payment_methods: STRIPE_CONFIG.automatic_payment_methods,
      });

      console.log('✅ Payment Intent created:', paymentIntent.id);

      // Save to database
      if (userId) {
        await PaymentService.createPayment({
          userId,
          patientId, // Add patientId for one-time payment
          stripePaymentIntentId: paymentIntent.id,
          amount,
          currency,
          status: 'PENDING',
          metadata: enhancedMetadata,
          productType: 'weight_loss',
          planType: 'one_time',
          planName: productName,
          servicesProvided: `${productName} - One-time payment`,
          stripeCustomerId: customer.id
        });
      }

      console.log(`✅ [${requestId}] One-time payment created successfully`);
      return NextResponse.json({
        success: true,
        data: {
          client_secret: paymentIntent.client_secret,
          customer_id: customer.id,
          payment_type: 'one-time',
          billing_frequency: billingFrequency
        }
      });
    }

  } catch (error) {
    console.error(`❌ [${requestId}] Error in smart payment creation:`, error);

    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Internal server error'
    }, { status: 500 });
  }
} 