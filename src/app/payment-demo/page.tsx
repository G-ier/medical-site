'use client';

import { PaymentCheckoutWidget } from '@/widgets/payment-checkout/ui';

export default function PaymentDemoPage() {
  const handlePaymentSuccess = () => {
    console.log('Payment completed successfully!');
    // You can add additional success logic here
  };

  const handlePaymentError = (error: string) => {
    console.error('Payment failed:', error);
    // You can add additional error handling here
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Stripe Payment Demo
          </h1>
          <p className="text-gray-600">
            Test the payment integration with Stripe. Use test card: 4242 4242 4242 4242
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* One-time Payment */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">One-time Payment</h2>
            <PaymentCheckoutWidget
              title="Weight Loss Program"
              subtitle="Start your journey today"
              amount={6900} // $69.00 in cents
              planName="One-Time Payment"
              planDescription="Access to medications and ongoing support"
              onSuccess={handlePaymentSuccess}
              onError={handlePaymentError}
              metadata={{
                plan_type: 'one_time',
                product: 'weight_loss',
              }}
            />
          </div>

          {/* Higher Amount Payment */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Premium Plan</h2>
            <PaymentCheckoutWidget
              title="Premium Weight Loss Program"
              subtitle="Complete care package"
              amount={19600} // $196.00 in cents
              planName="Premium One-Time Payment"
              planDescription="Includes priority support and advanced medications"
              onSuccess={handlePaymentSuccess}
              onError={handlePaymentError}
              redirectOnSuccess="/dashboard"
              metadata={{
                plan_type: 'premium_one_time',
                product: 'weight_loss_premium',
              }}
            />
          </div>
        </div>

        {/* Test Instructions */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="font-semibold text-blue-800 mb-2">Test Card Numbers</h3>
          <div className="text-sm text-blue-600 space-y-1">
            <p><strong>Success:</strong> 4242 4242 4242 4242</p>
            <p><strong>Decline:</strong> 4000 0000 0000 0002</p>
            <p><strong>Requires Auth:</strong> 4000 0025 0000 3155</p>
            <p><strong>Expiry:</strong> Any future date (e.g., 12/25)</p>
            <p><strong>CVC:</strong> Any 3 digits (e.g., 123)</p>
          </div>
        </div>
      </div>
    </div>
  );
} 