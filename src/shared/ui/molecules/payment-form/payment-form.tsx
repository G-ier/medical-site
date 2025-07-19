'use client';

import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js';
import { PaymentButton } from '@/shared/ui/atoms/payment-button';
import { cn } from '@/shared/lib/utils';

// Load Stripe outside of component to avoid recreating on every render
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export interface PaymentFormProps {
  amount: number; // Amount in cents
  currency?: string;
  onSuccess?: (paymentIntent: any) => void;
  onError?: (error: string) => void;
  className?: string;
  buttonText?: string;
  metadata?: Record<string, string>;
  productId?: string;
  priceId?: string;
}

// Card styling to match your design system
const cardElementOptions = {
  style: {
    base: {
      fontSize: '16px',
      color: '#1f2937', // gray-800
      fontFamily: 'Inter, system-ui, sans-serif',
      '::placeholder': {
        color: '#9ca3af', // gray-400
      },
      padding: '12px',
    },
    invalid: {
      color: '#ef4444', // red-500
      iconColor: '#ef4444',
    },
  },
  hidePostalCode: false,
};

function PaymentFormContent({
  amount,
  currency = 'usd',
  onSuccess,
  onError,
  buttonText = 'Complete Payment',
  metadata = {},
  productId,
  priceId,
}: Omit<PaymentFormProps, 'className'>) {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async () => {
    console.log('💳 PaymentForm: Starting payment process...');
    
    if (!stripe || !elements) {
      console.error('❌ PaymentForm: Stripe system not ready:', {
        stripe: !!stripe,
        elements: !!elements
      });
      onError?.('Payment system not ready');
      return;
    }

    setIsProcessing(true);
    console.log('🔄 PaymentForm: Processing payment...');

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      console.error('❌ PaymentForm: Card element not found');
      onError?.('Card element not found');
      setIsProcessing(false);
      return;
    }

    try {
      // Step 1: Create payment intent or setup intent
      console.log('🧠 PaymentForm: Creating payment intent or setup intent...');
      let clientSecret = null;
      let paymentType = null;
      let subscriptionId = null;
      let subscriptionStatus = null;

      // First call to backend
      const requestBody = {
        amount,
        currency,
        productId,
        priceId,
        metadata,
      };
      const response = await fetch('/api/stripe/create-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
      
      if(response.status === 401) {
        onError?.('Unauthorized');
        return;
      }
      const data = await response.json();
      if (!data.success) {
        throw new Error(data.error || 'Failed to create payment');
      }
      clientSecret = data.data?.client_secret;
      paymentType = data.data?.payment_type;
      subscriptionId = data.data?.subscription_id;
      subscriptionStatus = data.data?.subscription_status;

      // Remove duplicate Setup Intent logic - handle it in the main flow below

      // Handle one-time payment or subscription confirmation
      if (clientSecret) {
        const isSetupIntent = clientSecret.startsWith('seti_');
        if (isSetupIntent) {
          // Setup Intent for subscription
          console.log('🔧 Confirming Setup Intent for subscription...');
          const { error, setupIntent } = await stripe.confirmCardSetup(clientSecret, {
            payment_method: {
              card: cardElement,
            },
          });
          if (error) {
            onError?.(error.message || 'Payment setup failed');
            setIsProcessing(false);
            return;
          }
          if (setupIntent?.status === 'succeeded') {
            console.log('✅ Setup Intent confirmed successfully');
            
            // For subscriptions, the setup intent success means payment method is attached
            // Stripe will automatically activate the subscription via webhooks
            if (paymentType === 'subscription' && subscriptionId) {
              console.log('📊 Subscription setup completed:', subscriptionId);
              onSuccess?.({ 
                id: subscriptionId, 
                status: 'subscription_active',
                type: 'subscription',
                setupIntentId: setupIntent.id
              });
            } else {
              onSuccess?.({ id: setupIntent.id, status: 'succeeded', type: 'setup' });
            }
            setIsProcessing(false);
            return;
          } else {
            onError?.('Unexpected setup status: ' + setupIntent?.status);
            setIsProcessing(false);
            return;
          }
        } else {
          // PaymentIntent flow
          console.log('💳 Confirming Payment Intent for one-time payment...');
          const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
              card: cardElement,
            },
          });
          if (error) {
            onError?.(error.message || 'Payment failed');
            setIsProcessing(false);
            return;
          }
          if (paymentIntent?.status === 'succeeded') {
            console.log('✅ Payment Intent confirmed successfully');
            onSuccess?.(paymentIntent);
            setIsProcessing(false);
            return;
          } else {
            onError?.('Unexpected payment status: ' + paymentIntent?.status);
            setIsProcessing(false);
            return;
          }
        }
      } else if (paymentType === 'subscription' && subscriptionStatus === 'active') {
        // Subscription is already active, consider it successful
        onSuccess?.({ id: subscriptionId || 'subscription_active', status: 'succeeded' });
        setIsProcessing(false);
        return;
      } else {
        onError?.('No client secret provided for payment confirmation. Please try again or contact support.');
        setIsProcessing(false);
        return;
      }
    } catch (error: any) {
      onError?.(error.message || 'Payment error');
      setIsProcessing(false);
    }
  };

  const formatAmount = (cents: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency.toUpperCase(),
    }).format(cents / 100);
  };

  return (
    <div className="space-y-6">
      {/* Card Input */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Card Information
        </label>
        <div className="border border-gray-300 rounded-md p-3 bg-white focus-within:ring-2 focus-within:ring-black focus-within:border-black transition-all">
          <CardElement options={cardElementOptions} />
        </div>
      </div>

      {/* Payment Button */}
      <PaymentButton
        onPayment={handlePayment}
        isProcessing={isProcessing}
        processingText="Processing Payment..."
        amount={formatAmount(amount)}
        disabled={!stripe || isProcessing}
      >
        {buttonText}
      </PaymentButton>

      {/* Security Note */}
      <div className="text-xs text-gray-500 text-center">
        🔒 Your payment information is secure and encrypted
      </div>
    </div>
  );
}

export function PaymentForm({ className, ...props }: PaymentFormProps) {
  return (
    <div className={cn('max-w-md mx-auto', className)}>
      <Elements stripe={stripePromise}>
        <PaymentFormContent {...props} />
      </Elements>
    </div>
  );
} 