'use client';

import { useState, useEffect } from 'react';
import { PaymentCheckoutWidget } from '@/widgets/payment-checkout/ui';

interface StripeProduct {
  id: string;
  name: string;
  description?: string;
  price: number; // in cents
  currency: string;
  interval?: string; // e.g., 'month', 'year', undefined for one-time
  priceId?: string; // Added for one-time payments
}

interface Payment {
  id: number;
  stripePaymentIntentId: string;
  amount: number;
  currency: string;
  status: string;
  productType: string;
  planType: string;
  planName?: string;
  paidAt?: string;
  createdAt: string;
  subscriptionId?: number;
  healthieInvoiceId?: string;
  healthieInvoiceStatus?: string;
  healthieInvoicePaidDate?: string;
  user: {
    email: string;
    name?: string;
  };
}

interface Subscription {
  id: number;
  stripeSubscriptionId: string;
  status: string;
  planName: string;
  amount: number;
  currency: string;
  billingInterval: string;
  billingIntervalCount: number;
  currentPeriodStart: string;
  currentPeriodEnd: string;
  cancelAtPeriodEnd: boolean;
  createdAt: string;
  healthieOfferingId?: string;
  user: {
    email: string;
    name?: string;
  };
}

export default function PaymentTestPage() {
  // Products state
  const [products, setProducts] = useState<StripeProduct[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<StripeProduct | null>(null);
  const [productsLoading, setProductsLoading] = useState(false);
  
  // Payment state
  const [payments, setPayments] = useState<Payment[]>([]);
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [loading, setLoading] = useState(false);
  
  // Manual subscription testing state
  const [manualSubscriptionMode, setManualSubscriptionMode] = useState(false);
  const [manualSubscriptionData, setManualSubscriptionData] = useState({
    planName: 'Custom Test Plan',
    amount: 2900, // $29.00
    billingInterval: 'month' as 'minute' | 'week' | 'month' | 'year',
    billingIntervalCount: 1,
    productType: 'weight_loss'
  });

  // Fetch Stripe products
  const fetchStripeProducts = async () => {
    setProductsLoading(true);
    try {
      const response = await fetch('/api/stripe/products');
      const data = await response.json();
      if (data.success && data.data?.products) {
        setProducts(data.data.products);
      } else {
        setProducts([]);
      }
    } catch {
      setProducts([]);
    } finally {
      setProductsLoading(false);
    }
  };

  // Fetch payments and subscriptions
  const fetchPaymentData = async () => {
    setLoading(true);
    try {
      const [paymentsResponse, subscriptionsResponse] = await Promise.all([
        fetch('/api/payments'),
        fetch('/api/subscriptions')
      ]);
      
      const paymentsData = await paymentsResponse.json();
      const subscriptionsData = await subscriptionsResponse.json();
      
      if (paymentsData.success) {
        setPayments(paymentsData.data.payments || []);
      }
      
      if (subscriptionsData.success) {
        setSubscriptions(subscriptionsData.data.subscriptions || []);
      }
    } catch (error) {
      console.error('Error fetching payment data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancelSubscription = async (subscriptionId: number, planName: string) => {
    if (!confirm(`Are you sure you want to cancel the subscription ${planName}? This action cannot be undone.`)) {
      return;
    }

    try {
      console.log('🔄 Canceling subscription:', subscriptionId);
      
      const response = await fetch(`/api/subscriptions/${subscriptionId}`, {
        method: 'DELETE'
      });
      
      const data = await response.json();
      
      if (data.success) {
        console.log('✅ Subscription canceled successfully');
        // Refresh the data
        await fetchPaymentData();
        alert('Subscription canceled successfully!');
      } else {
        console.error('❌ Failed to cancel subscription:', data.error);
        alert(`Failed to cancel subscription: ${data.error}`);
      }
    } catch (error) {
      console.error('❌ Error canceling subscription:', error);
      alert('Error canceling subscription. Please try again.');
    }
  };

  useEffect(() => {
    fetchStripeProducts();
    fetchPaymentData();
  }, []);

  const handleProductSelect = (product: StripeProduct) => {
    setSelectedProduct(product);
    setManualSubscriptionMode(false);
  };

  const handlePaymentSuccess = () => {
    console.log('Payment completed successfully!');
    // Refresh payment data
    setTimeout(() => {
      fetchPaymentData();
    }, 2000);
  };

  const handlePaymentError = (error: string) => {
    console.error('Payment failed:', error);
  };

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount / 100);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'succeeded':
      case 'active':
        return 'text-green-600 bg-green-100';
      case 'failed':
        return 'text-red-600 bg-red-100';
      case 'pending':
        return 'text-yellow-600 bg-yellow-100';
      case 'cancelled':
      case 'canceled':
        return 'text-gray-600 bg-gray-100';
      case 'past_due':
        return 'text-orange-600 bg-orange-100';
      default:
        return 'text-blue-600 bg-blue-100';
    }
  };

  const isSubscriptionProduct = (product: StripeProduct) => {
    return product.interval && product.interval !== 'one_time';
  };

  const getPaymentMetadata = () => {
    if (manualSubscriptionMode) {
      return {
        product: manualSubscriptionData.productType,
        productType: manualSubscriptionData.productType,
        planType: `${manualSubscriptionData.billingInterval}ly`,
        billingFrequency: manualSubscriptionData.billingInterval,
        test: 'true',
        plan_description: 'Manual subscription test',
        subscription_test: 'true',
        billing_interval: manualSubscriptionData.billingInterval,
        billing_interval_count: manualSubscriptionData.billingIntervalCount.toString()
      };
    }
    
    if (selectedProduct) {
      return {
        product: 'weight_loss',
        productType: 'weight_loss',
        planType: isSubscriptionProduct(selectedProduct) ? selectedProduct.interval : 'one_time',
        billingFrequency: selectedProduct.interval,
        test: 'true',
        plan_description: selectedProduct.description || selectedProduct.name,
        subscription_test: isSubscriptionProduct(selectedProduct) ? 'true' : 'false',
        stripe_product_id: selectedProduct.id
      };
    }
    
    return {
      product: 'weight_loss',
      productType: 'weight_loss',
      planType: 'one_time',
      test: 'true',
      plan_description: 'Test payment'
    };
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Payment Testing</h1>
          <p className="text-gray-600 mt-2">Realistic payment flow testing with Stripe products</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Test Configuration */}
          <div className="space-y-6">
            {/* Step 1: Products */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Step 1: Select Product</h2>
                <button
                  onClick={fetchStripeProducts}
                  disabled={productsLoading}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
                >
                  {productsLoading ? 'Loading...' : 'Refresh Products'}
                </button>
              </div>
              
              <div className="space-y-3">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                      selectedProduct?.id === product.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => handleProductSelect(product)}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">{product.name}</h3>
                        <p className="text-sm text-gray-600 mt-1">{product.description}</p>
                        <div className="flex items-center gap-4 mt-2">
                          <span className="text-lg font-semibold text-green-600">
                            {product.price > 0 ? formatAmount(product.price) : '$1.00 (Test min)'}
                          </span>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            isSubscriptionProduct(product)
                              ? 'bg-purple-100 text-purple-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {isSubscriptionProduct(product) ? 'Subscription' : 'One-time'}
                          </span>
                          <span className="text-sm text-gray-500">
                            {product.interval}
                          </span>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">
                        ID: {product.id}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 2: Manual Subscription Testing */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Step 2: Manual Subscription Test</h2>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={manualSubscriptionMode}
                    onChange={(e) => {
                      setManualSubscriptionMode(e.target.checked);
                      if (e.target.checked) {
                        setSelectedProduct(null);
                      }
                    }}
                    className="mr-2"
                  />
                  <span className="text-sm">Enable Manual Mode</span>
                </label>
              </div>
              
              {manualSubscriptionMode && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Plan Name
                    </label>
                    <input
                      type="text"
                      value={manualSubscriptionData.planName}
                      onChange={(e) => setManualSubscriptionData(prev => ({
                        ...prev,
                        planName: e.target.value
                      }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Amount (cents)
                      </label>
                      <input
                        type="number"
                        value={manualSubscriptionData.amount}
                        onChange={(e) => setManualSubscriptionData(prev => ({
                          ...prev,
                          amount: parseInt(e.target.value) || 0
                        }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Billing Interval
                      </label>
                      <select
                        value={manualSubscriptionData.billingInterval}
                        onChange={(e) => setManualSubscriptionData(prev => ({
                          ...prev,
                          billingInterval: e.target.value as 'minute' | 'week' | 'month' | 'year'
                        }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      >
                        <option value="minute">Every 5 Minutes (Testing)</option>
                        <option value="week">Weekly</option>
                        <option value="month">Monthly</option>
                        <option value="year">Yearly</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Interval Count
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={manualSubscriptionData.billingIntervalCount}
                      onChange={(e) => setManualSubscriptionData(prev => ({
                        ...prev,
                        billingIntervalCount: parseInt(e.target.value) || 1
                      }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  
                  <div className="text-sm text-blue-600 bg-blue-100 p-3 rounded">
                    💡 Manual mode allows you to test subscription functionality with custom parameters
                  </div>
                  
                  {manualSubscriptionData.billingInterval === 'minute' && (
                    <div className="text-sm text-orange-600 bg-orange-100 p-3 rounded">
                      ⚠️ 5-minute billing is for testing only. Stripe doesn&apos;t support intervals shorter than daily, so this will create a daily subscription for testing purposes.
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Payment Widget */}
          <div className="space-y-6">
            {/* Step 3: Payment */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Step 3: Payment</h2>
              
              {(selectedProduct || manualSubscriptionMode) ? (
                <div className="space-y-4">
                  {/* Payment Summary */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Payment Summary</h3>
                    {selectedProduct ? (
                      <div>
                        <p className="text-sm text-gray-600">Product: {selectedProduct.name}</p>
                        <p className="text-sm text-gray-600">
                          Amount: {selectedProduct.price > 0 ? formatAmount(selectedProduct.price) : '$1.00 (Test minimum)'}
                        </p>
                        <p className="text-sm text-gray-600">
                          Type: {isSubscriptionProduct(selectedProduct) ? 'Subscription' : 'One-time'}
                        </p>
                        <p className="text-sm text-gray-600">Frequency: {selectedProduct.interval}</p>
                      </div>
                    ) : (
                      <div>
                        <p className="text-sm text-gray-600">Plan: {manualSubscriptionData.planName}</p>
                        <p className="text-sm text-gray-600">Amount: {formatAmount(manualSubscriptionData.amount / 100)}</p>
                        <p className="text-sm text-gray-600">Type: Subscription</p>
                        <p className="text-sm text-gray-600">
                          Frequency: {manualSubscriptionData.billingInterval === 'minute' 
                            ? 'Every 5 minutes (Testing)' 
                            : `Every ${manualSubscriptionData.billingIntervalCount} ${manualSubscriptionData.billingInterval}(s)`
                          }
                        </p>
                      </div>
                    )}
                  </div>
                  
                  {/* Payment Widget */}
                  <PaymentCheckoutWidget
                    title="Complete Payment"
                    subtitle={
                      selectedProduct 
                        ? `${selectedProduct.name} - ${isSubscriptionProduct(selectedProduct) ? 'Subscription' : 'One-time'}`
                        : `${manualSubscriptionData.planName} - Subscription`
                    }
                    amount={
                      selectedProduct 
                        ? Math.max(Math.round(selectedProduct.price), 100) // Minimum $1.00 for testing
                        : manualSubscriptionData.amount
                    }
                    currency="usd"
                    planName={
                      selectedProduct 
                        ? selectedProduct.name
                        : manualSubscriptionData.planName
                    }
                    planDescription={
                      selectedProduct 
                        ? selectedProduct.description
                        : `Custom ${manualSubscriptionData.billingInterval}ly subscription`
                    }
                    metadata={getPaymentMetadata()}
                    productId={selectedProduct?.id}
                    priceId={selectedProduct?.priceId}
                    onSuccess={handlePaymentSuccess}
                    onError={handlePaymentError}
                  />
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <p>Please select a product or enable manual subscription mode to proceed</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Payments */}
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-xl font-semibold">Recent Payments</h2>
              <button
                onClick={fetchPaymentData}
                disabled={loading}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
              >
                {loading ? 'Loading...' : 'Refresh'}
              </button>
            </div>
            
            <div className="max-h-96 overflow-y-auto">
              {payments.length > 0 ? (
                <div className="divide-y divide-gray-200">
                  {payments.slice(0, 10).map((payment) => (
                    <div key={payment.id} className="p-4">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">#{payment.id}</span>
                            <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(payment.status)}`}>
                              {payment.status}
                            </span>
                            {payment.subscriptionId && (
                              <span className="px-2 py-1 text-xs bg-purple-100 text-purple-800 rounded">
                                Subscription
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{payment.planName}</p>
                          <div className="flex items-center gap-4 mt-2">
                            <span className="text-sm font-medium">{formatAmount(payment.amount / 100)}</span>
                            <span className="text-xs text-gray-500">{formatDate(payment.createdAt)}</span>
                          </div>
                          {payment.healthieInvoiceId && (
                            <div className="mt-2">
                              <span className="text-xs text-gray-500">Healthie Invoice: </span>
                              <span className="text-xs font-mono">#{payment.healthieInvoiceId}</span>
                              <span className={`ml-2 px-2 py-1 text-xs rounded-full ${
                                payment.healthieInvoiceStatus === 'PAID' ? 'bg-green-100 text-green-800' :
                                payment.healthieInvoiceStatus === 'PENDING' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-gray-100 text-gray-800'
                              }`}>
                                {payment.healthieInvoiceStatus}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center text-gray-500">
                  No payments found
                </div>
              )}
            </div>
          </div>

          {/* Recent Subscriptions */}
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold">Recent Subscriptions</h2>
            </div>
            
            <div className="max-h-96 overflow-y-auto">
              {subscriptions.length > 0 ? (
                <div className="divide-y divide-gray-200">
                  {subscriptions.slice(0, 10).map((subscription) => (
                    <div key={subscription.id} className="p-4">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">#{subscription.id}</span>
                            <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(subscription.status)}`}>
                              {subscription.status}
                            </span>
                            {subscription.cancelAtPeriodEnd && (
                              <span className="px-2 py-1 text-xs bg-orange-100 text-orange-800 rounded">
                                Cancelling
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{subscription.planName}</p>
                          <div className="flex items-center gap-4 mt-2">
                            <span className="text-sm font-medium">{formatAmount(subscription.amount / 100)}</span>
                            <span className="text-xs text-gray-500">
                              {subscription.billingInterval} ({subscription.billingIntervalCount}x)
                            </span>
                          </div>
                          <div className="text-xs text-gray-500 mt-1">
                            Next billing: {formatDate(subscription.currentPeriodEnd)}
                          </div>
                        </div>
                        <div className="ml-4">
                          {subscription.status === 'active' && !subscription.cancelAtPeriodEnd && (
                            <button
                              onClick={() => handleCancelSubscription(subscription.id, subscription.planName)}
                              className="px-3 py-1 text-xs bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                              title="Cancel subscription"
                            >
                              Cancel
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center text-gray-500">
                  No subscriptions found
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Test Instructions */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-semibold text-blue-800 mb-2">Test Instructions</h3>
          <div className="text-sm text-blue-600 space-y-1">
            <p><strong>Success:</strong> Use card number 4242 4242 4242 4242</p>
            <p><strong>Decline:</strong> Use card number 4000 0000 0000 0002</p>
            <p><strong>Expiry:</strong> Any future date (e.g., 12/25)</p>
            <p><strong>CVC:</strong> Any 3 digits (e.g., 123)</p>
            <p><strong>Flow:</strong> 1) Select product → 2) Payment automatically detects type → 3) Complete payment</p>
            <p><strong>Manual Mode:</strong> Enable to test custom subscription parameters</p>
          </div>
        </div>
      </div>
    </div>
  );
} 