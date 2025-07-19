'use client';

import { useState } from 'react';

interface SmartPaymentTestData {
  amount: number;
  healthie_offering_id: string;
  healthie_user_id: string;
}

interface SmartPaymentResponse {
  success: boolean;
  data?: {
    client_secret?: string;
    subscription_id?: string;
    customer_id: string;
    payment_type: 'one-time' | 'subscription';
    billing_frequency?: string;
  };
  error?: string;
}

export default function SmartPaymentTestPage() {
  const [testData, setTestData] = useState<SmartPaymentTestData>({
    amount: 6900, // $69.00 in cents
    healthie_offering_id: '47213', // Default to one-time payment
    healthie_user_id: '123456'
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SmartPaymentResponse | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      console.log('🧠 Testing smart payment with data:', testData);
      
      const response = await fetch('/api/stripe/create-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testData),
      });

      const result: SmartPaymentResponse = await response.json();
      console.log('📊 Smart payment result:', result);
      
      setResult(result);
    } catch (error) {
      console.error('❌ Smart payment test failed:', error);
      setResult({
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    } finally {
      setLoading(false);
    }
  };

  const testOfferings = [
    {
      id: '47213',
      name: 'Example Package',
      type: 'One-Time',
      description: 'Single payment, Customer ID optional'
    },
    {
      id: '47214', 
      name: '10-Week Program weight losse',
      type: 'Weekly Subscription',
      description: 'Recurring weekly, Customer ID required'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            🧠 Smart Payment API Test
          </h1>
          <p className="text-gray-600">
            Test automatic Customer creation and payment type detection
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Test Form */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Test Configuration</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Amount (in cents)
                </label>
                <input
                  type="number"
                  min="100"
                  max="100000"
                  value={testData.amount}
                  onChange={(e) => setTestData(prev => ({ 
                    ...prev, 
                    amount: parseInt(e.target.value) || 0 
                  }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
                <div className="text-xs text-gray-500 mt-1">
                  ${(testData.amount / 100).toFixed(2)} USD
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Healthie Offering
                </label>
                <select
                  value={testData.healthie_offering_id}
                  onChange={(e) => setTestData(prev => ({ 
                    ...prev, 
                    healthie_offering_id: e.target.value 
                  }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                  {testOfferings.map(offering => (
                    <option key={offering.id} value={offering.id}>
                      {offering.id} - {offering.name} ({offering.type})
                    </option>
                  ))}
                </select>
                <div className="text-xs text-gray-500 mt-1">
                  {testOfferings.find(o => o.id === testData.healthie_offering_id)?.description}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Healthie User ID
                </label>
                <input
                  type="text"
                  value={testData.healthie_user_id}
                  onChange={(e) => setTestData(prev => ({ 
                    ...prev, 
                    healthie_user_id: e.target.value 
                  }))}
                  placeholder="Enter test user ID"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50"
              >
                {loading ? '🔄 Testing...' : '🧠 Test Smart Payment'}
              </button>
            </form>
          </div>

          {/* Results */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Test Results</h2>
            
            {!result && (
              <div className="text-gray-500 text-center py-8">
                No test results yet. Configure test data and click &quot;Test Smart Payment&quot;.
              </div>  
            )}

            {result && (
              <div className={`p-4 rounded-lg ${
                result.success ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
              }`}>
                <div className="flex items-center mb-3">
                  <span className="text-lg mr-2">
                    {result.success ? '✅' : '❌'}
                  </span>
                  <span className="font-medium">
                    {result.success ? 'Success' : 'Error'}
                  </span>
                </div>

                {result.success && result.data && (
                  <div className="space-y-2 text-sm">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="font-medium">Payment Type:</div>
                      <div className={`font-mono px-2 py-1 rounded text-xs ${
                        result.data.payment_type === 'subscription' 
                          ? 'bg-purple-100 text-purple-700' 
                          : 'bg-green-100 text-green-700'
                      }`}>
                        {result.data.payment_type}
                      </div>
                      
                      <div className="font-medium">Billing Frequency:</div>
                      <div className="font-mono text-xs">
                        {result.data.billing_frequency || 'N/A'}
                      </div>
                      
                      <div className="font-medium">Customer ID:</div>
                      <div className="font-mono text-xs break-all">
                        {result.data.customer_id}
                      </div>
                      
                      <div className="font-medium">Client Secret:</div>
                      <div className="font-mono text-xs">
                        {result.data.client_secret ? '[GENERATED]' : 'N/A'}
                      </div>
                    </div>

                    <div className="mt-4 p-3 bg-white rounded border">
                      <div className="font-medium text-xs mb-2">Full Response:</div>
                      <pre className="text-xs overflow-auto max-h-32">
                        {JSON.stringify(result.data, null, 2)}
                      </pre>
                    </div>
                  </div>
                )}

                {!result.success && (
                  <div className="text-red-700 text-sm">
                    {result.error}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* API Documentation */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">📚 API Documentation</h2>
          
          <div className="space-y-4 text-sm">
            <div>
              <h3 className="font-medium text-blue-700 mb-2">🎯 What Smart Payment Does:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Automatically creates or finds Stripe Customer by email</li>
                <li>Fetches Healthie offering details to determine billing frequency</li>
                <li>Creates appropriate payment type (one-time vs subscription)</li>
                <li>Saves payment record to database with enhanced metadata</li>
                <li>Returns unified response regardless of payment type</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-purple-700 mb-2">🔄 Payment Type Detection:</h3>
              <div className="bg-gray-50 p-3 rounded">
                <div className="font-mono text-xs">
                  billing_frequency === &quot;One-Time&quot; → Payment Intent<br/>
                  billing_frequency !== &quot;One-Time&quot; → Subscription (placeholder)
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-green-700 mb-2">✅ Benefits:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>No manual Customer ID management</li>
                <li>Automatic payment type selection</li>
                <li>Consistent API interface</li>
                <li>Future-ready for subscriptions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 