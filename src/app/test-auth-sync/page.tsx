'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { 
  checkAuthSynchronization, 
  enhancedLogout, 
  backendOnlyLogout, 
  auth0OnlyLogout,
  isAuth0Authenticated,
  isBackendAuthenticated
} from '@/shared/lib/frontend-auth';

interface SyncStatus {
  isSync: boolean;
  auth0Authenticated: boolean;
  backendAuthenticated: boolean;
  action?: 'clear_backend' | 'sync_to_backend' | 'logout_all';
}

export default function TestAuthSyncPage() {
  const [syncStatus, setSyncStatus] = useState<SyncStatus | null>(null);
  const [testResults, setTestResults] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const addResult = (message: string) => {
    setTestResults(prev => [...prev, `${new Date().toLocaleTimeString()}: ${message}`]);
  };

  const checkSync = useCallback(async () => {
    try {
      addResult('🔍 Checking authentication synchronization...');
      const status = await checkAuthSynchronization();
      setSyncStatus(status);
      
      if (status.isSync) {
        addResult('✅ Authentication is synchronized');
      } else {
        addResult(`⚠️ Authentication desynchronized - Action: ${status.action}`);
      }
      
      addResult(`Auth0: ${status.auth0Authenticated ? '✅' : '❌'}, Backend: ${status.backendAuthenticated ? '✅' : '❌'}`);
    } catch (error) {
      addResult(`❌ Sync check failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }, []);

  const testAuth0Only = async () => {
    try {
      addResult('🔍 Testing Auth0 authentication status...');
      const isAuth0 = await isAuth0Authenticated();
      addResult(`Auth0 authenticated: ${isAuth0 ? '✅' : '❌'}`);
    } catch (error) {
      addResult(`❌ Auth0 check failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  const testBackendOnly = async () => {
    try {
      addResult('🔍 Testing backend authentication status...');
      const backendResult = await isBackendAuthenticated();
      addResult(`Backend authenticated: ${backendResult.isAuthenticated ? '✅' : '❌'}`);
      if (backendResult.error) {
        addResult(`Backend error: ${backendResult.error}`);
      }
    } catch (error) {
      addResult(`❌ Backend check failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  const testEnhancedLogout = async () => {
    if (!confirm('This will log you out from both Auth0 and backend. Continue?')) return;
    
    setLoading(true);
    try {
      addResult('🚪 Testing enhanced logout...');
      await enhancedLogout();
      addResult('✅ Enhanced logout initiated (should redirect)');
    } catch (error) {
      addResult(`❌ Enhanced logout failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setLoading(false);
    }
  };

  const testBackendLogout = async () => {
    if (!confirm('This will log you out from backend only. Continue?')) return;
    
    setLoading(true);
    try {
      addResult('🚪 Testing backend-only logout...');
      await backendOnlyLogout();
      addResult('✅ Backend logout completed');
      await checkSync();
    } catch (error) {
      addResult(`❌ Backend logout failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setLoading(false);
    }
  };

  const testAuth0Logout = async () => {
    if (!confirm('This will log you out from Auth0 only. Continue?')) return;
    
    setLoading(true);
    try {
      addResult('🚪 Testing Auth0-only logout...');
      await auth0OnlyLogout();
      addResult('✅ Auth0 logout initiated (should redirect)');
    } catch (error) {
      addResult(`❌ Auth0 logout failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setLoading(false);
    }
  };

  const testProfileAccess = async () => {
    try {
      addResult('🔍 Testing /profile access...');
      const response = await fetch('/profile', { 
        method: 'HEAD',
        credentials: 'include'
      });
      
      if (response.ok || response.status === 200) {
        addResult('✅ /profile accessible');
      } else if (response.status === 302 || response.status === 307) {
        addResult('🔄 /profile redirected (likely to login)');
      } else {
        addResult(`❌ /profile access failed: ${response.status}`);
      }
    } catch (error) {
      addResult(`❌ Profile access test failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  const clearResults = () => {
    setTestResults([]);
  };

  useEffect(() => {
    checkSync();
  }, [checkSync]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Authentication Synchronization Test
          </h1>
          <p className="text-gray-600 mb-6">
            This page tests the synchronization between Auth0 and backend authentication systems.
          </p>

          {/* Current Status */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h2 className="text-lg font-semibold mb-2">Current Status</h2>
            {syncStatus ? (
              <div className="space-y-2">
                <div className={`flex items-center gap-2 ${syncStatus.isSync ? 'text-green-600' : 'text-red-600'}`}>
                  <span>{syncStatus.isSync ? '✅' : '⚠️'}</span>
                  <span>{syncStatus.isSync ? 'Synchronized' : 'Desynchronized'}</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className={`flex items-center gap-2 ${syncStatus.auth0Authenticated ? 'text-green-600' : 'text-red-600'}`}>
                    <span>{syncStatus.auth0Authenticated ? '✅' : '❌'}</span>
                    <span>Auth0</span>
                  </div>
                  <div className={`flex items-center gap-2 ${syncStatus.backendAuthenticated ? 'text-green-600' : 'text-red-600'}`}>
                    <span>{syncStatus.backendAuthenticated ? '✅' : '❌'}</span>
                    <span>Backend</span>
                  </div>
                </div>
                {syncStatus.action && (
                  <div className="text-sm text-orange-600">
                    Recommended action: {syncStatus.action}
                  </div>
                )}
              </div>
            ) : (
              <div className="text-gray-500">Loading...</div>
            )}
          </div>

          {/* Test Controls */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <button
              onClick={checkSync}
              disabled={loading}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 transition-colors"
            >
              Check Sync Status
            </button>
            
            <button
              onClick={testAuth0Only}
              disabled={loading}
              className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 disabled:opacity-50 transition-colors"
            >
              Test Auth0 Status
            </button>
            
            <button
              onClick={testBackendOnly}
              disabled={loading}
              className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 disabled:opacity-50 transition-colors"
            >
              Test Backend Status
            </button>
            
            <button
              onClick={testProfileAccess}
              disabled={loading}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50 transition-colors"
            >
              Test /profile Access
            </button>
            
            <button
              onClick={testBackendLogout}
              disabled={loading}
              className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 disabled:opacity-50 transition-colors"
            >
              Backend Logout Only
            </button>
            
            <button
              onClick={testAuth0Logout}
              disabled={loading}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 disabled:opacity-50 transition-colors"
            >
              Auth0 Logout Only
            </button>
            
            <button
              onClick={testEnhancedLogout}
              disabled={loading}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 disabled:opacity-50 transition-colors"
            >
              Enhanced Logout
            </button>
            
            <button
              onClick={clearResults}
              disabled={loading}
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 disabled:opacity-50 transition-colors"
            >
              Clear Results
            </button>
          </div>

          {/* Test Results */}
          <div className="bg-gray-900 text-green-400 rounded-lg p-4 font-mono text-sm">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-white font-semibold">Test Results</h3>
              <span className="text-gray-400">{testResults.length} entries</span>
            </div>
            <div className="max-h-96 overflow-y-auto space-y-1">
              {testResults.length === 0 ? (
                <div className="text-gray-500">No test results yet. Run some tests to see output here.</div>
              ) : (
                testResults.map((result, index) => (
                  <div key={index} className="whitespace-pre-wrap">
                    {result}
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Testing Instructions</h3>
            <ol className="list-decimal list-inside text-blue-800 space-y-1 text-sm">
              <li>First, check the current sync status to see if Auth0 and backend are synchronized</li>
              <li>Test individual authentication systems to verify their status</li>
              <li>Try accessing /profile to see if protected routes work correctly</li>
              <li>Test different logout scenarios to verify synchronization fixes</li>
              <li>After any logout test, refresh the page and check sync status again</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
} 