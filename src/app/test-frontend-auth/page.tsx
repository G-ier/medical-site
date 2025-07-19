'use client';

import { useState, useEffect } from 'react';
import { BackendAuthProvider, useBackendAuthContext } from '@/shared/contexts/backend-auth-context';
import { BackendAuthGuard } from '@/shared/components/backend-auth-guard';
import { 
  loginWithAuth0Integration, 
  getMigrationToken,
  clearMigrationToken,
  isAuth0Authenticated,
  getAuth0UserEmail,
  autoLogin,
  enhancedLogout
} from '@/shared/utils/auth-integration';

interface TestState {
  auth0Status: 'checking' | 'authenticated' | 'not_authenticated';
  auth0User?: { email?: string; name?: string; sub?: string };
  backendStatus: 'checking' | 'authenticated' | 'not_authenticated';
  backendUser?: any;
  migrationToken?: string | null;
  anonymousSession?: any;
}

function TestContent() {
  const {
    isAuthenticated,
    user,
    loading,
    error,
    login,
    logout,
    refresh,
    checkAuth,
    clearError
  } = useBackendAuthContext();

  const [testResults, setTestResults] = useState<string[]>([]);
  const [testLoading, setTestLoading] = useState(false);
  const [testState, setTestState] = useState<TestState>({
    auth0Status: 'checking',
    backendStatus: 'checking'
  });

  const addTestResult = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setTestResults(prev => [...prev, `${timestamp}: ${message}`]);
  };

  // Comprehensive status check
  const checkAllStatus = async () => {
    setTestLoading(true);
    try {
      addTestResult('🔍 Checking comprehensive authentication status...');

      // Check Auth0 status
      const isAuth0Auth = await isAuth0Authenticated();
      let auth0User;
      
      if (isAuth0Auth) {
        const email = await getAuth0UserEmail();
        auth0User = { email };
        addTestResult(`✅ Auth0: Authenticated (${email})`);
      } else {
        addTestResult('❌ Auth0: Not authenticated');
      }

      // Check backend status
      const backendResponse = await fetch('/api/auth/backend/me', {
        credentials: 'include'
      });
      
      let backendUser;
      if (backendResponse.ok) {
        backendUser = await backendResponse.json();
        addTestResult(`✅ Backend: Authenticated (${backendUser.user?.email})`);
      } else {
        addTestResult('❌ Backend: Not authenticated');
      }

      // Check migration token
      const migrationToken = getMigrationToken();
      if (migrationToken) {
        addTestResult(`🔑 Migration token: Found (${migrationToken.substring(0, 8)}...)`);
      } else {
        addTestResult('🔑 Migration token: Not found');
      }

      // Check anonymous session
      let anonymousSession;
      if (migrationToken) {
        try {
          const sessionResponse = await fetch('/api/progress', {
            headers: {
              'X-Session-Token': migrationToken
            }
          });
          
          if (sessionResponse.ok) {
            anonymousSession = await sessionResponse.json();
            addTestResult(`📋 Anonymous session: Found (${anonymousSession.data?.completedSteps?.length || 0} steps completed)`);
          } else {
            addTestResult('📋 Anonymous session: Not found or invalid');
          }
        } catch {
          addTestResult('📋 Anonymous session: Error checking');
        }
      }

      // Update test state
      setTestState({
        auth0Status: isAuth0Auth ? 'authenticated' : 'not_authenticated',
        auth0User,
        backendStatus: backendResponse.ok ? 'authenticated' : 'not_authenticated',
        backendUser,
        migrationToken,
        anonymousSession
      });

    } catch (error) {
      addTestResult('❌ Status check failed: ' + (error instanceof Error ? error.message : 'Unknown error'));
    } finally {
      setTestLoading(false);
    }
  };

  // Create anonymous session
  const createAnonymousSession = async () => {
    setTestLoading(true);
    try {
      addTestResult('🆕 Creating anonymous session...');
      
      const response = await fetch('/api/progress/session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ currentStepId: 'test-step' })
      });

      if (response.ok) {
        const data = await response.json();
        const sessionToken = data.data.sessionToken;
        
        // Store in localStorage
        localStorage.setItem('onboarding_session_token', sessionToken);
        
        addTestResult(`✅ Anonymous session created: ${sessionToken.substring(0, 8)}...`);
        
        // Add some test data
        const progressResponse = await fetch('/api/progress', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Session-Token': sessionToken
          },
          body: JSON.stringify({
            currentStepId: 'height-question',
            completedSteps: ['name-introduction', 'age-verification'],
            stepData: {
              'name-introduction': { name: 'Test User' },
              'age-verification': { age: 25 }
            }
          })
        });

        if (progressResponse.ok) {
          addTestResult('✅ Test data added to anonymous session');
        }
        
        await checkAllStatus();
      } else {
        addTestResult('❌ Failed to create anonymous session');
      }
    } catch (error) {
      addTestResult('❌ Error creating anonymous session: ' + (error instanceof Error ? error.message : 'Unknown error'));
    } finally {
      setTestLoading(false);
    }
  };

  // Test Auth0 login
  const testAuth0Login = async () => {
    setTestLoading(true);
    try {
      addTestResult('🔐 Redirecting to Auth0 login...');
      window.location.href = '/auth/login';
    } catch (error) {
      addTestResult('❌ Auth0 login error: ' + (error instanceof Error ? error.message : 'Unknown error'));
      setTestLoading(false);
    }
  };

  // Test Auth0 signup
  const testAuth0Signup = async () => {
    setTestLoading(true);
    try {
      addTestResult('📝 Redirecting to Auth0 signup...');
      window.location.href = '/auth/login?screen_hint=signup';
    } catch (error) {
      addTestResult('❌ Auth0 signup error: ' + (error instanceof Error ? error.message : 'Unknown error'));
      setTestLoading(false);
    }
  };

  // Test existing user login flow
  const testExistingUserLogin = async () => {
    setTestLoading(true);
    try {
      addTestResult('👤 Testing existing user login flow...');
      
      // First check if already authenticated
      const backendAuth = await fetch('/api/auth/backend/me', { credentials: 'include' });
      
      if (backendAuth.ok) {
        addTestResult('✅ Already authenticated with backend');
        await checkAllStatus();
        setTestLoading(false);
        return;
      }

      // Check Auth0 authentication
      const auth0Response = await fetch('/auth/profile');
      
      if (auth0Response.ok) {
        addTestResult('🔄 Authenticated with Auth0, redirecting to callback...');
        window.location.href = '/api/auth/callback';
      } else {
        addTestResult('❌ Not authenticated with Auth0, redirecting to login...');
        window.location.href = '/auth/login';
      }
      
    } catch (error) {
      addTestResult('❌ Existing user login error: ' + (error instanceof Error ? error.message : 'Unknown error'));
      setTestLoading(false);
    }
  };

  // Test dashboard access
  const testDashboardAccess = async () => {
    setTestLoading(true);
    try {
      addTestResult('🏠 Testing dashboard access...');
      
      const response = await fetch('/dashboard', {
        method: 'HEAD',
        credentials: 'include'
      });
      
      if (response.ok) {
        addTestResult('✅ Dashboard accessible, redirecting...');
        window.location.href = '/dashboard';
      } else {
        addTestResult('❌ Dashboard not accessible, status: ' + response.status);
      }
      
    } catch (error) {
      addTestResult('❌ Dashboard access error: ' + (error instanceof Error ? error.message : 'Unknown error'));
    } finally {
      setTestLoading(false);
    }
  };

  // Test user profile check
  const testUserProfileCheck = async () => {
    setTestLoading(true);
    try {
      addTestResult('👤 Checking user profile and onboarding status...');
      
      const response = await fetch('/api/auth/backend/profile', { 
        credentials: 'include' 
      });
      
      if (!response.ok) {
        if (response.status === 401) {
          addTestResult('❌ Not authenticated - please login first');
        } else {
          addTestResult(`❌ Profile check failed with status: ${response.status}`);
        }
        setTestLoading(false);
        return;
      }

      const data = await response.json();
      const profile = data.profile;
      
      if (profile) {
        addTestResult(`✅ User: ${profile.user.email}`);
        addTestResult(`📊 Onboarding Status: ${profile.onboardingStatus}`);
        
        if (profile.progressSummary) {
          addTestResult(`📋 Progress: ${profile.progressSummary.progressPercentage}% complete`);
          addTestResult(`📍 Current Step: ${profile.progressSummary.currentStepId || 'None'}`);
          addTestResult(`✅ Completed Steps: ${profile.progressSummary.completedSteps.length}`);
        }
        
        // Suggest next action based on status
        if (profile.onboardingStatus === 'completed') {
          addTestResult('💡 Suggestion: User should be redirected to dashboard');
        } else if (profile.onboardingStatus === 'in_progress') {
          addTestResult('💡 Suggestion: User should continue onboarding');
        } else {
          addTestResult('💡 Suggestion: User should start onboarding');
        }
      } else {
        addTestResult('❌ No profile data received');
      }
      
    } catch (error) {
      addTestResult('❌ User profile check error: ' + (error instanceof Error ? error.message : 'Unknown error'));
    } finally {
      setTestLoading(false);
    }
  };

  // Test integrated login
  const testIntegratedLogin = async () => {
    setTestLoading(true);
    try {
      addTestResult('🔐 Testing integrated login...');
      
      const result = await loginWithAuth0Integration();
      
      if (result.success) {
        addTestResult('✅ Integrated login successful');
        await checkAuth();
        await checkAllStatus();
      } else {
        addTestResult('❌ Integrated login failed: ' + (result.error || 'Unknown error'));
      }
      
    } catch (error) {
      addTestResult('❌ Integrated login error: ' + (error instanceof Error ? error.message : 'Unknown error'));
    } finally {
      setTestLoading(false);
    }
  };

  // Test auto login
  const testAutoLogin = async () => {
    setTestLoading(true);
    try {
      addTestResult('🤖 Testing auto login...');
      
      const result = await autoLogin();
      
      if (result.success) {
        addTestResult(`✅ Auto login successful (method: ${result.method})`);
        await checkAuth();
        await checkAllStatus();
      } else {
        addTestResult(`❌ Auto login failed: ${result.error} (suggested method: ${result.method})`);
      }
      
    } catch (error) {
      addTestResult('❌ Auto login error: ' + (error instanceof Error ? error.message : 'Unknown error'));
    } finally {
      setTestLoading(false);
    }
  };

  // Test direct backend login with mock token
  const testDirectLogin = async () => {
    setTestLoading(true);
    try {
      addTestResult('🔐 Testing direct backend login with mock token...');
      
      const success = await login('mock-auth0-token', 'test@example.com');
      
      if (success) {
        addTestResult('✅ Direct backend login successful');
        await checkAllStatus();
      } else {
        addTestResult('❌ Direct backend login failed');
      }
      
    } catch (error) {
      addTestResult('❌ Direct login error: ' + (error instanceof Error ? error.message : 'Unknown error'));
    } finally {
      setTestLoading(false);
    }
  };

  // Test enhanced logout
  const testEnhancedLogout = async () => {
    setTestLoading(true);
    try {
      addTestResult('🚪 Testing enhanced logout...');
      
      await enhancedLogout();
      addTestResult('✅ Enhanced logout initiated (redirecting...)');
      
    } catch (error) {
      addTestResult('❌ Enhanced logout error: ' + (error instanceof Error ? error.message : 'Unknown error'));
      setTestLoading(false);
    }
  };

  // Test backend logout only
  const testBackendLogout = async () => {
    setTestLoading(true);
    try {
      addTestResult('🚪 Testing backend logout only...');
      
      await logout();
      addTestResult('✅ Backend logout successful');
      await checkAllStatus();
      
    } catch (error) {
      addTestResult('❌ Backend logout error: ' + (error instanceof Error ? error.message : 'Unknown error'));
    } finally {
      setTestLoading(false);
    }
  };

  // Test token refresh
  const testRefresh = async () => {
    setTestLoading(true);
    try {
      addTestResult('🔄 Testing token refresh...');
      
      const success = await refresh();
      
      if (success) {
        addTestResult('✅ Token refresh successful');
      } else {
        addTestResult('❌ Token refresh failed');
      }
      
    } catch (error) {
      addTestResult('❌ Refresh error: ' + (error instanceof Error ? error.message : 'Unknown error'));
    } finally {
      setTestLoading(false);
    }
  };

  // Test migration token operations
  const testClearMigrationToken = () => {
    addTestResult('🧹 Clearing migration token...');
    clearMigrationToken();
    addTestResult('✅ Migration token cleared');
    checkAllStatus();
  };

  // Test marking onboarding as completed
  const testMarkAsCompleted = async () => {
    setTestLoading(true);
    try {
      addTestResult('✅ Testing mark onboarding as completed...');
      
      const migrationToken = getMigrationToken();
      if (!migrationToken) {
        addTestResult('❌ No session token found - create an anonymous session first');
        setTestLoading(false);
        return;
      }

      const response = await fetch('/api/progress', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Session-Token': migrationToken
        },
        body: JSON.stringify({
          markAsCompleted: true
        })
      });

      if (response.ok) {
        const data = await response.json();
        addTestResult('✅ Onboarding marked as completed successfully');
        addTestResult(`📊 Completion status: ${data.data.isCompleted}`);
        addTestResult(`📋 Progress: ${data.data.progressPercentage}%`);
        
        // Check updated status
        await checkAllStatus();
      } else {
        const error = await response.json();
        addTestResult('❌ Failed to mark as completed: ' + (error.error || 'Unknown error'));
      }
      
    } catch (error) {
      addTestResult('❌ Mark as completed error: ' + (error instanceof Error ? error.message : 'Unknown error'));
    } finally {
      setTestLoading(false);
    }
  };

  // Test middleware endpoints
  const testMiddlewareEndpoints = async () => {
    setTestLoading(true);
    try {
      addTestResult('🛡️ Testing middleware-protected endpoints...');

      const endpoints = [
        { url: '/api/auth/backend/me', name: 'Backend Auth Endpoint' },
        { url: '/api/patients/my', name: 'Protected API' },
        { url: '/api/progress', name: 'Flexible API', headers: { 'X-Session-Token': getMigrationToken() || 'test' } }
      ];

      for (const endpoint of endpoints) {
        try {
          const response = await fetch(endpoint.url, {
            credentials: 'include',
            headers: endpoint.headers || {}
          });
          
          if (response.ok) {
            addTestResult(`✅ ${endpoint.name}: Accessible`);
          } else {
            addTestResult(`❌ ${endpoint.name}: ${response.status} ${response.statusText}`);
          }
        } catch {
          addTestResult(`❌ ${endpoint.name}: Network error`);
        }
      }

    } catch (error) {
      addTestResult('❌ Middleware test error: ' + (error instanceof Error ? error.message : 'Unknown error'));
    } finally {
      setTestLoading(false);
    }
  };

  // Test Auth0 to Backend sync
  const testAuth0ToBackendSync = async () => {
    setTestLoading(true);
    try {
      addTestResult('🔄 Testing Auth0 to Backend sync...');
      
      // Check if Auth0 is authenticated
      const auth0Response = await fetch('/auth/profile');
      
      if (!auth0Response.ok) {
        addTestResult('❌ Not authenticated with Auth0');
        setTestLoading(false);
        return;
      }

      const auth0User = await auth0Response.json();
      addTestResult(`✅ Auth0 authenticated: ${auth0User.email}`);

      // Check backend auth
      const backendResponse = await fetch('/api/auth/backend/me', {
        credentials: 'include'
      });

      if (backendResponse.ok) {
        addTestResult('✅ Already synced with backend');
        await checkAllStatus();
        setTestLoading(false);
        return;
      }

      addTestResult('🔄 Auth0 authenticated but not backend - redirecting to callback...');
      
      // Redirect to callback to sync
      window.location.href = '/api/auth/callback';
      
    } catch (error) {
      addTestResult('❌ Auth0 to Backend sync error: ' + (error instanceof Error ? error.message : 'Unknown error'));
      setTestLoading(false);
    }
  };

  // Clear test results
  const clearTestResults = () => {
    setTestResults([]);
  };

  // Initialize status check
  useEffect(() => {
    checkAllStatus();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Complete Authentication Flow Test</h1>
        
        {/* Status Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Auth0 Status */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Auth0 Status</h2>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-medium">Status:</span>
                <span className={`px-2 py-1 rounded text-sm ${
                  testState.auth0Status === 'authenticated' 
                    ? 'bg-green-100 text-green-800' 
                    : testState.auth0Status === 'checking'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {testState.auth0Status === 'checking' ? 'Checking...' : 
                   testState.auth0Status === 'authenticated' ? 'Authenticated' : 'Not Authenticated'}
                </span>
              </div>
              {testState.auth0User && (
                <div className="text-sm text-gray-600">
                  Email: {testState.auth0User.email}
                </div>
              )}
            </div>
          </div>

          {/* Backend Status */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Backend Status</h2>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-medium">Status:</span>
                <span className={`px-2 py-1 rounded text-sm ${
                  isAuthenticated 
                    ? 'bg-green-100 text-green-800' 
                    : loading
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {loading ? 'Loading...' : isAuthenticated ? 'Authenticated' : 'Not Authenticated'}
                </span>
              </div>
              {user && (
                <div className="text-sm text-gray-600 space-y-1">
                  <div>User ID: {user.userId}</div>
                  <div>Email: {user.email}</div>
                  {user.name && <div>Name: {user.name}</div>}
                </div>
              )}
              {error && (
                <div className="flex items-center gap-2">
                  <span className="text-red-600 text-sm">Error: {error}</span>
                  <button
                    onClick={clearError}
                    className="px-2 py-1 text-xs bg-red-100 text-red-700 rounded hover:bg-red-200"
                  >
                    Clear
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Session Information */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Session Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <span className="font-medium">Migration Token:</span>
              <span className="ml-2 text-sm text-gray-600">
                {testState.migrationToken ? `${testState.migrationToken.substring(0, 12)}...` : 'None'}
              </span>
            </div>
            <div>
              <span className="font-medium">Anonymous Session:</span>
              <span className="ml-2 text-sm text-gray-600">
                {testState.anonymousSession ? 
                  `${testState.anonymousSession.data?.completedSteps?.length || 0} steps completed` : 
                  'None'}
              </span>
            </div>
          </div>
        </div>

        {/* Test Controls */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Session Management */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Session Management</h2>
            <div className="space-y-3">
              <button
                onClick={checkAllStatus}
                disabled={testLoading}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 transition-colors"
              >
                Check All Status
              </button>
              
              <button
                onClick={createAnonymousSession}
                disabled={testLoading}
                className="w-full px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 disabled:opacity-50 transition-colors"
              >
                Create Anonymous Session
              </button>
              
              <button
                onClick={testClearMigrationToken}
                disabled={testLoading}
                className="w-full px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 disabled:opacity-50 transition-colors"
              >
                Clear Migration Token
              </button>
            </div>
          </div>

          {/* Authentication Tests */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Authentication Tests</h2>
            <div className="space-y-3">
              <button
                onClick={testAuth0Login}
                disabled={testLoading}
                className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50 transition-colors"
              >
                Auth0 Login
              </button>
              
              <button
                onClick={testAuth0Signup}
                disabled={testLoading}
                className="w-full px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800 disabled:opacity-50 transition-colors"
              >
                Auth0 Signup
              </button>

              <button
                onClick={testExistingUserLogin}
                disabled={testLoading}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 transition-colors"
              >
                Existing User Login
              </button>
              
              <button
                onClick={testIntegratedLogin}
                disabled={testLoading}
                className="w-full px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 disabled:opacity-50 transition-colors"
              >
                Integrated Login
              </button>
              
              <button
                onClick={testAutoLogin}
                disabled={testLoading}
                className="w-full px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700 disabled:opacity-50 transition-colors"
              >
                Auto Login
              </button>
              
              <button
                onClick={testDirectLogin}
                disabled={testLoading}
                className="w-full px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 disabled:opacity-50 transition-colors"
              >
                Direct Backend Login
              </button>
            </div>
          </div>

          {/* Logout & Advanced Tests */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Logout & Advanced</h2>
            <div className="space-y-3">
              <button
                onClick={testDashboardAccess}
                disabled={testLoading}
                className="w-full px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 disabled:opacity-50 transition-colors"
              >
                Test Dashboard Access
              </button>

              <button
                onClick={testUserProfileCheck}
                disabled={testLoading}
                className="w-full px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 disabled:opacity-50 transition-colors"
              >
                Check User Profile
              </button>
              
              <button
                onClick={testEnhancedLogout}
                disabled={testLoading}
                className="w-full px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 disabled:opacity-50 transition-colors"
              >
                Enhanced Logout
              </button>
              
              <button
                onClick={testBackendLogout}
                disabled={testLoading}
                className="w-full px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 disabled:opacity-50 transition-colors"
              >
                Backend Logout Only
              </button>
              
              <button
                onClick={testRefresh}
                disabled={testLoading}
                className="w-full px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 disabled:opacity-50 transition-colors"
              >
                Test Token Refresh
              </button>
              
              <button
                onClick={testMarkAsCompleted}
                disabled={testLoading}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 transition-colors"
              >
                Mark Onboarding as Completed
              </button>

              <button
                onClick={testMiddlewareEndpoints}
                disabled={testLoading}
                className="w-full px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 disabled:opacity-50 transition-colors"
              >
                Test Middleware
              </button>

              <button
                onClick={testAuth0ToBackendSync}
                disabled={testLoading}
                className="w-full px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 disabled:opacity-50 transition-colors"
              >
                Sync Auth0 to Backend
              </button>
            </div>
          </div>
        </div>

        {/* Test Results */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Test Results</h2>
            <button
              onClick={clearTestResults}
              className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors text-sm"
            >
              Clear
            </button>
          </div>
          
          <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm max-h-96 overflow-y-auto">
            {testResults.length === 0 ? (
              <div className="text-gray-500">No test results yet. Use the buttons above to test the authentication flow.</div>
            ) : (
              testResults.map((result, index) => (
                <div key={index} className="mb-1">
                  {result}
                </div>
              ))
            )}
          </div>
        </div>

        {/* Flow Guide */}
        <div className="bg-white rounded-lg shadow-md p-6 mt-6">
          <h2 className="text-xl font-semibold mb-4">Complete Authentication Flow Guide</h2>
          
          <div className="space-y-4 text-sm">
            <div>
              <h3 className="font-medium mb-2">1. Anonymous User Flow (New Users)</h3>
              <p className="text-gray-600 mb-2">Test the complete anonymous to authenticated user journey:</p>
              <ol className="list-decimal list-inside text-gray-600 space-y-1 ml-4">
                <li>Click &quot;Create Anonymous Session&quot; to simulate onboarding</li>
                <li>Click &quot;Mark Onboarding as Completed&quot; to test completion logic</li>
                <li>Click &quot;Auth0 Signup&quot; to register</li>
                <li>Complete Auth0 registration</li>
                <li>Return to this page and check that session data is preserved</li>
                <li>Should now redirect to dashboard (not onboarding) due to completion status</li>
              </ol>
            </div>
            
            <div>
              <h3 className="font-medium mb-2">2. Existing User Flow (Completed Onboarding)</h3>
              <p className="text-gray-600 mb-2">Test existing user authentication with completed onboarding:</p>
              <ol className="list-decimal list-inside text-gray-600 space-y-1 ml-4">
                <li>Click &quot;Existing User Login&quot; to test smart login detection</li>
                <li>If already authenticated, should redirect to dashboard</li>
                <li>If not authenticated, should redirect to Auth0 login</li>
                <li>After Auth0 login, should auto-redirect to dashboard (not onboarding)</li>
                <li>Click &quot;Test Dashboard Access&quot; to verify access</li>
              </ol>
            </div>

            <div>
              <h3 className="font-medium mb-2">3. Existing User Flow (Incomplete Onboarding)</h3>
              <p className="text-gray-600 mb-2">Test existing user with partial onboarding progress:</p>
              <ol className="list-decimal list-inside text-gray-600 space-y-1 ml-4">
                <li>Use &quot;Auth0 Login&quot; if you have an account with incomplete onboarding</li>
                <li>Should redirect to current onboarding step (not start from beginning)</li>
                <li>Click &quot;Check User Profile&quot; to see onboarding status</li>
                <li>Complete remaining onboarding steps to reach dashboard</li>
              </ol>
            </div>
            
            <div>
              <h3 className="font-medium mb-2">4. Smart Login Detection</h3>
              <p className="text-gray-600 mb-2">Test automatic authentication detection:</p>
              <ol className="list-decimal list-inside text-gray-600 space-y-1 ml-4">
                <li>Use &quot;Auto Login&quot; to detect current authentication state</li>
                <li>Should work for both backend JWT and Auth0 sessions</li>
                <li>Should redirect appropriately based on user status</li>
              </ol>
            </div>
            
            <div>
              <h3 className="font-medium mb-2">5. Middleware Testing</h3>
              <p className="text-gray-600 mb-2">Test protection of different route types:</p>
              <ol className="list-decimal list-inside text-gray-600 space-y-1 ml-4">
                <li>Click &quot;Test Middleware&quot; to check endpoint protection</li>
                <li>Try accessing protected pages: /dashboard, /profile</li>
                <li>Test API endpoints with different auth states</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Protected content example
function ProtectedContent() {
  const { user } = useBackendAuthContext();
  
  return (
    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
      <h3 className="text-green-800 font-medium mb-2">🛡️ Protected Content</h3>
      <p className="text-green-700">
        This content is only visible to authenticated users.
        Welcome, {user?.name || user?.email}!
      </p>
      <div className="mt-2 text-sm text-green-600">
        User ID: {user?.userId} | Auth Type: Backend JWT
      </div>
    </div>
  );
}

export default function TestFrontendAuth() {
  return (
    <BackendAuthProvider>
      <TestContent />
      
      {/* Example of Auth Guard */}
      <div className="max-w-7xl mx-auto px-4 pb-8">
        <BackendAuthGuard requireAuth={true}>
          <ProtectedContent />
        </BackendAuthGuard>
      </div>
    </BackendAuthProvider>
  );
} 