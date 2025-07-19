import InternalPageTemplate from '@/shared/ui/templates/internal-page-template';
import Link from 'next/link';

export default function TestPublicAccessPage() {
  return (
    <InternalPageTemplate requireAuth={false}>
      <div className="flex flex-col items-center justify-center min-h-[80vh] py-12">
        <h1 className="text-5xl font-bold text-center mb-12 text-blue-600">
          🌍 Public Access Test
        </h1>
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded">
            <h2 className="text-xl font-semibold mb-2">ℹ️ Public Page</h2>
            <p>
              This page is accessible without authentication:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>No login required</li>
              <li>Uses InternalPageTemplate with requireAuth={false}</li>
              <li>Available to all visitors</li>
            </ul>
          </div>
          
          <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded">
            <h3 className="font-semibold">Test Authentication</h3>
            <p className="text-sm mt-1 mb-3">
              Try accessing a protected page to test the authentication system:
            </p>
            <Link 
              href="/test-auth-protection"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
            >
              🔒 Go to Protected Page
            </Link>
          </div>

          <div className="bg-gray-100 border border-gray-400 text-gray-700 px-4 py-3 rounded">
            <h3 className="font-semibold">Other Test Pages</h3>
            <div className="flex flex-wrap justify-center gap-2 mt-3">
              <Link 
                href="/profile"
                className="bg-purple-600 text-white px-3 py-1 rounded text-sm hover:bg-purple-700"
              >
                Profile (Protected)
              </Link>
              <Link 
                href="/dashboard"
                className="bg-indigo-600 text-white px-3 py-1 rounded text-sm hover:bg-indigo-700"
              >
                Dashboard (Protected)
              </Link>
              <Link 
                href="/payment-error"
                className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
              >
                Payment Error (Public)
              </Link>
            </div>
          </div>

          <div className="text-sm text-gray-600">
            <p>Accessed at: {new Date().toLocaleString()}</p>
          </div>
        </div>
      </div>
    </InternalPageTemplate>
  );
} 