'use client';

import React, { ReactNode } from 'react';
import { useBackendAuthContext } from '../contexts/backend-auth-context';
import { LoadingSpinner } from '../ui/atoms/loading-spinner/loading-spinner';

interface BackendAuthGuardProps {
  children: ReactNode;
  fallback?: ReactNode;
  redirectTo?: string;
  requireAuth?: boolean;
}

/**
 * Backend Authentication Guard
 * Protects routes and components from unauthorized access
 */
export function BackendAuthGuard({ 
  children, 
  fallback,
  redirectTo,
  requireAuth = true 
}: BackendAuthGuardProps) {
  const { isAuthenticated, loading, error } = useBackendAuthContext();

  // Show loading spinner while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner message="" />
      </div>
    );
  }

  // Show error state if authentication check failed
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
          <div className="text-center">
            <div className="text-red-600 text-xl mb-4">Authentication Error</div>
            <p className="text-gray-600 mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  // If authentication is required but user is not authenticated
  if (requireAuth && !isAuthenticated) {
    // Redirect if redirectTo is specified
    if (redirectTo) {
      if (typeof window !== 'undefined') {
        window.location.href = redirectTo;
      }
      return null;
    }

    // Show custom fallback or default login prompt
    if (fallback) {
      return <>{fallback}</>;
    }

    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Authentication Required
            </h2>
            <p className="text-gray-600 mb-6">
              Please log in to access this content.
            </p>
            <div className="space-y-3">
              <a
                href="/auth/login?screen_hint=signup"
                className="block w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Sign Up
              </a>
              <a
                href="/auth/login"
                className="block w-full px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-colors"
              >
                Log In
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // If authentication is not required or user is authenticated, show children
  return <>{children}</>;
}

/**
 * Simple loading component for authentication checks
 */
export function BackendAuthLoading({ message = "Loading..." }: { message?: string }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <LoadingSpinner message={message} />
    </div>
  );
}

/**
 * Simple error component for authentication errors
 */
export function BackendAuthError({ 
  error, 
  onRetry 
}: { 
  error: string; 
  onRetry?: () => void; 
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <div className="text-red-600 text-xl mb-4">Error</div>
          <p className="text-gray-600 mb-4">{error}</p>
          {onRetry && (
            <button
              onClick={onRetry}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Retry
            </button>
          )}
        </div>
      </div>
    </div>
  );
} 