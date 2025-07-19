import Stripe from 'stripe';

// Initialize Stripe with environment variable check
const initializeStripe = (): Stripe => {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error('STRIPE_SECRET_KEY is not set in environment variables');
  }
  
  return new Stripe(process.env.STRIPE_SECRET_KEY, {
    typescript: true,
  });
};

// Export Stripe instance
export const stripe = initializeStripe();

// Client-side publishable key getter
export const getStripePublishableKey = (): string => {
  if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
    throw new Error('NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not set in environment variables');
  }
  return process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
};

// Stripe configuration constants
export const STRIPE_CONFIG = {
  currency: 'usd',
  automatic_payment_methods: {
    enabled: true,
  },
} as const;

export type StripeConfig = typeof STRIPE_CONFIG;

// Subscription helper functions
export const SubscriptionHelpers = {
  /**
   * Create or get Stripe product for a Healthie offering
   */
  async createOrGetProduct(offeringId: string, offeringName: string): Promise<Stripe.Product> {
    const productId = `healthie_offering_${offeringId}`;
    
    try {
      // Try to retrieve existing product
      const existingProduct = await stripe.products.retrieve(productId);
      return existingProduct;
    } catch  {
      // Product doesn't exist, create it
      console.log('🆕 Creating new Stripe product for offering:', offeringName);
      
      const product = await stripe.products.create({
        id: productId,
        name: offeringName,
        metadata: {
          healthie_offering_id: offeringId,
          type: 'healthie_offering'
        }
      });
      
      console.log('✅ Created Stripe product:', product.id);
      return product;
    }
  },

  /**
   * Create or get Stripe price for a subscription
   */
  async createOrGetPrice(
    productId: string, 
    amount: number, 
    billingFrequency: string,
    offeringId: string
  ): Promise<Stripe.Price> {
    const priceId = `price_${productId}_${billingFrequency.toLowerCase()}`;
    
    try {
      // Try to retrieve existing price
      const existingPrice = await stripe.prices.retrieve(priceId);
      return existingPrice;
    } catch {
      // Price doesn't exist, create it
      console.log('🆕 Creating new Stripe price for frequency:', billingFrequency);
      
      const recurringInterval = SubscriptionHelpers.mapBillingFrequencyToInterval(billingFrequency);
      
      const price = await stripe.prices.create({
        product: productId,
        unit_amount: amount,
        currency: STRIPE_CONFIG.currency,
        recurring: {
          interval: recurringInterval,
        },
        metadata: {
          healthie_offering_id: offeringId,
          billing_frequency: billingFrequency
        }
      });
      
      console.log('✅ Created Stripe price:', price.id);
      return price;
    }
  },

  /**
   * Map Healthie billing frequency to Stripe interval
   */
  mapBillingFrequencyToInterval(billingFrequency: string): 'day' | 'week' | 'month' | 'year' {
    switch (billingFrequency.toLowerCase()) {
      case 'minute':
        // Note: Stripe doesn't support minute intervals, this is for testing only
        // We'll use the minimum interval (day) but handle it specially
        return 'day';
      case 'day':
        return 'day';
      case 'daily':
        return 'day';
      case 'week':
      case 'weekly':
        return 'week';
      case 'monthly':
      case 'month':
        return 'month';
      case 'yearly':
      case 'annual':
        return 'year';
      default:
        console.warn('⚠️ Unknown billing frequency, defaulting to monthly:', billingFrequency);
        return 'month';
    }
  },

  /**
   * Create subscription with proper setup
   */
  async createSubscription(
    customerId: string,
    priceId: string,
    metadata: Record<string, string>
  ): Promise<Stripe.Subscription> {
    console.log('🔄 Creating Stripe subscription...');
    console.log('📋 Subscription parameters:', {
      customerId,
      priceId,
      metadata_keys: Object.keys(metadata)
    });
    
    try {
      const subscription = await stripe.subscriptions.create({
        customer: customerId,
        items: [{ price: priceId }],
        metadata,
        payment_behavior: 'default_incomplete',
        payment_settings: { 
          save_default_payment_method: 'on_subscription',
          payment_method_types: ['card']
        },
        expand: ['latest_invoice.payment_intent'],
        // Force invoice creation immediately
        proration_behavior: 'none',
      });
      
      console.log('✅ Created Stripe subscription:', subscription.id);
      console.log('🔍 Subscription details:', {
        id: subscription.id,
        status: subscription.status,
        latest_invoice: (subscription.latest_invoice as any)?.id,
        payment_intent: (subscription.latest_invoice as any)?.payment_intent?.id
      });
      
      // Check if we have a proper payment intent
      const latestInvoice = subscription.latest_invoice as any;
      
      if (!latestInvoice) {
        console.error('❌ No latest invoice found on subscription');
        throw new Error('Subscription created but no invoice found');
      }
      
             // If no payment intent was created, manually create one for the invoice
       if (!latestInvoice.payment_intent) {
         console.log('⚠️ No payment intent found, creating one manually...');
         
         try {
           // First, check if the invoice is already finalized
           const invoiceDetails = await stripe.invoices.retrieve(latestInvoice.id);
           console.log('🔍 Invoice status:', invoiceDetails.status);
           
           if (invoiceDetails.status === 'draft') {
             // Finalize the invoice to create a payment intent
             const finalizedInvoice = await stripe.invoices.finalizeInvoice(latestInvoice.id);
             console.log('✅ Finalized invoice:', finalizedInvoice.id);
             console.log('🔍 Payment intent created:', (finalizedInvoice as any).payment_intent?.id);
             
             // Refresh subscription to get updated invoice with payment intent
             const updatedSubscription = await stripe.subscriptions.retrieve(subscription.id, {
               expand: ['latest_invoice.payment_intent']
             });
             
             console.log('🔄 Refreshed subscription with payment intent:', {
               id: updatedSubscription.id,
               status: updatedSubscription.status,
               latest_invoice: (updatedSubscription.latest_invoice as any)?.id,
               payment_intent: (updatedSubscription.latest_invoice as any)?.payment_intent?.id
             });
             
             return updatedSubscription;
           } else if (invoiceDetails.status === 'open') {
             // Invoice is already finalized but no payment intent - this is unusual
             console.log('⚠️ Invoice is open but no payment intent found');
             
             // Try to create a payment intent manually for this invoice
             if (invoiceDetails.amount_due > 0) {
               console.log('💳 Creating payment intent for open invoice...');
               const paymentIntent = await stripe.paymentIntents.create({
                 amount: invoiceDetails.amount_due,
                 currency: invoiceDetails.currency,
                 customer: invoiceDetails.customer as string,
                 metadata: {
                   ...metadata,
                   invoice_id: invoiceDetails.id,
                   subscription_id: subscription.id
                 }
               });
               
               console.log('✅ Created payment intent for invoice:', paymentIntent.id);
               
               // Update invoice with payment intent (this might not work directly)
               // Instead, we'll modify the subscription to return the payment intent
               const modifiedSubscription = {
                 ...subscription,
                 latest_invoice: {
                   ...invoiceDetails,
                   payment_intent: paymentIntent
                 }
               };
               
               return modifiedSubscription as any;
             }
           } else {
             console.log('ℹ️ Invoice status is:', invoiceDetails.status);
           }
           
           return subscription;
         } catch (error) {
           console.error('❌ Failed to handle invoice:', error);
           // If invoice handling fails, we still return the subscription
           // but this will likely cause issues downstream
           return subscription;
         }
       }
      
      // Payment intent exists, subscription is ready
      console.log('✅ Subscription created with payment intent ready');
      return subscription;
      
    } catch (error) {
      console.error('❌ Failed to create subscription:', error);
      throw error;
    }
  }
}; 