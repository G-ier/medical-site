import InternalPageTemplate from '@/shared/ui/templates/internal-page-template';

export default function TestAuthProtectionPage() {
  return (
    <InternalPageTemplate>
      <div className="flex flex-col items-center justify-center min-h-[80vh] py-12">
        <h1 className="text-5xl font-bold text-center mb-12 text-green-600">
          🔒 Authentication Protection Test
        </h1>
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
            <h2 className="text-xl font-semibold mb-2">✅ Success!</h2>
            <p>
              If you can see this page, it means:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>You are properly authenticated</li>
              <li>The InternalPageTemplate protection is working</li>
              <li>Backend JWT authentication is functioning</li>
            </ul>
          </div>
          
          <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded">
            <h3 className="font-semibold">Authentication Details</h3>
            <p className="text-sm mt-1">
              This page is protected by BackendAuthGuard integrated into InternalPageTemplate
            </p>
          </div>

          <div className="text-sm text-gray-600">
            <p>Test completed at: {new Date().toLocaleString()}</p>
          </div>
        </div>
      </div>
    </InternalPageTemplate>
  );
} 