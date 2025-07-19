'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PaymentForm } from '@/shared/ui/molecules/payment-form';
import { cn } from '@/shared/lib/utils';

export interface PaymentCheckoutWidgetProps {
  className?: string;
  title?: string;
  subtitle?: string;
  amount: number; // Amount in cents
  currency?: string;
  planName?: string;
  planDescription?: string;
  onSuccess?: () => void;
  onError?: (error: string) => void;
  redirectOnSuccess?: string;
  metadata?: Record<string, string>;
  productId?: string;
  priceId?: string;
}

export function PaymentCheckoutWidget({
  className,
  title = "Complete Your Purchase",
  subtitle = "Secure payment powered by Stripe",
  amount,
  currency = 'usd',
  planName,
  planDescription,
  onSuccess,
  onError,
  redirectOnSuccess,
  metadata = {},
  productId,
  priceId,
}: PaymentCheckoutWidgetProps) {
  const router = useRouter();
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const formatAmount = (cents: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency.toUpperCase(),
    }).format(cents / 100);
  };

  const handlePaymentSuccess = (paymentResult: any) => {
    console.log('✅ PaymentCheckoutWidget: Payment successful!');
    console.log('📋 Payment details:', {
      id: paymentResult.id,
      status: paymentResult.status,
      type: paymentResult.type || 'payment',
      setupIntentId: paymentResult.setupIntentId
    });
    
    setPaymentStatus('success');
    
    // Call custom success handler
    console.log('🎯 Calling success handler...');
    onSuccess?.();
    
    // Redirect if specified
    if (redirectOnSuccess) {
      console.log('🔄 Redirecting to:', redirectOnSuccess);
      setTimeout(() => {
        router.push(redirectOnSuccess);
      }, 2000);
    }
  };

  const handlePaymentError = (error: string) => {
    console.error('❌ PaymentCheckoutWidget: Payment error occurred');
    console.error('📋 Error details:', error);
    console.error('💰 Failed payment amount:', formatAmount(amount));
    console.error('🔧 Payment metadata:', metadata);
    
    setPaymentStatus('error');
    setErrorMessage(error);
    
    console.log('🎯 Calling error handler...');
    onError?.(error);
  };

  if (paymentStatus === 'success') {
    const isSubscription = metadata?.billingFrequency !== 'one_time' && metadata?.billingFrequency !== undefined;
    
    return (
      <div className={cn('max-w-md mx-auto text-center space-y-6', className)}>
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <div className="text-green-600 text-4xl mb-4">✅</div>
          <h2 className="text-xl font-semibold text-green-800 mb-2">
            {isSubscription ? 'Subscription Activated!' : 'Payment Successful!'}
          </h2>
          <p className="text-green-600">
            {isSubscription 
              ? `Your ${metadata?.billingFrequency || 'subscription'} subscription for ${formatAmount(amount)} has been set up successfully.`
              : `Your payment of ${formatAmount(amount)} has been processed successfully.`
            }
          </p>
          {redirectOnSuccess && (
            <p className="text-sm text-green-500 mt-4">
              Redirecting you to the next step...
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={cn('max-w-md mx-auto space-y-6', className)}>
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
        <p className="text-gray-600">{subtitle}</p>
      </div>

      {/* Plan Summary */}
      {(planName || planDescription) && (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-2">
          {planName && (
            <h3 className="font-semibold text-gray-900">{planName}</h3>
          )}
          {planDescription && (
            <p className="text-sm text-gray-600">{planDescription}</p>
          )}
          <div className="text-lg font-bold text-gray-900">
            {formatAmount(amount)}
          </div>
        </div>
      )}

      {/* Error Message */}
      {paymentStatus === 'error' && errorMessage && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-center space-x-2">
            <div className="text-red-500">❌</div>
            <div>
              <p className="text-sm font-medium text-red-800">Payment Failed</p>
              <p className="text-sm text-red-600">{errorMessage}</p>
            </div>
          </div>
        </div>
      )}

      {/* Payment Form */}
      <PaymentForm
        amount={amount}
        currency={currency}
        onSuccess={handlePaymentSuccess}
        onError={handlePaymentError}
        buttonText={`Pay ${formatAmount(amount)}`}
        metadata={{
          ...metadata,
          plan_name: planName || '',
          plan_description: planDescription || '',
        }}
        productId={productId}
        priceId={priceId}
      />

      {/* Trust Indicators */}
      <div className="text-center space-y-2">
        <div className="flex justify-center items-center space-x-4 text-xs text-gray-500">
          <span>🔒 SSL Encrypted</span>
          <span>💳 Stripe Secure</span>
          <span>🛡️ PCI Compliant</span>
        </div>
        <p className="text-xs text-gray-400">
          We never store your payment information
        </p>
      </div>
    </div>
  );
} 