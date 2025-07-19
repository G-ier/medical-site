'use client';

import { useState, useEffect, useCallback } from 'react';

export interface BackendAuthState {
  isAuthenticated: boolean;
  user: {
  userId: number;
  email: string;
  name?: string;
  picture?: string;
  auth0UserId?: string;
  } | null;
  loading: boolean;
  error: string | null;
}

export interface BackendAuthActions {
  login: (auth0Token: string, email: string, migrationToken?: string) => Promise<boolean>;
  register: (auth0Token: string, email: string, name?: string, migrationToken?: string) => Promise<boolean>;
  logout: () => Promise<void>;
  enhancedLogout: () => Promise<void>;
  refresh: () => Promise<boolean>;
  checkAuth: () => Promise<void>;
  clearError: () => void;
  checkSynchronization: () => Promise<{
    isSync: boolean;
    auth0Authenticated: boolean;
    backendAuthenticated: boolean;
  }>;
}

/**
 * Backend Authentication Hook
 * Manages authentication state using the backend authentication system
 * Enhanced with synchronization checking
 */
export function useBackendAuth(): BackendAuthState & BackendAuthActions {
  const [state, setState] = useState<BackendAuthState>({
    isAuthenticated: false,
    user: null,
    loading: true,
    error: null
  });

  // Check authentication status
  const checkAuth = useCallback(async () => {
    try {
      setState(prev => ({ ...prev, loading: true, error: null }));

      const response = await fetch('/api/auth/backend/me', {
        credentials: 'include'
      });

      if (response.ok) {
        const data = await response.json();
        setState({
          isAuthenticated: true,
          user: data.user,
          loading: false,
          error: null
        });
      } else {
        setState({
          isAuthenticated: false,
          user: null,
          loading: false,
          error: null
        });
      }
    } catch (error) {
      setState({
        isAuthenticated: false,
        user: null,
        loading: false,
        error: error instanceof Error ? error.message : 'Authentication check failed'
      });
    }
  }, []);

  // Check synchronization between Auth0 and backend
  const checkSynchronization = useCallback(async () => {
    try {
      const [auth0Response, backendResponse] = await Promise.all([
        fetch('/auth/profile').catch(() => ({ ok: false })),
        fetch('/api/auth/backend/me', { credentials: 'include' }).catch(() => ({ ok: false }))
      ]);

      const auth0Authenticated = auth0Response.ok;
      const backendAuthenticated = backendResponse.ok;
      const isSync = auth0Authenticated === backendAuthenticated;

      return {
        isSync,
        auth0Authenticated,
        backendAuthenticated
      };
    } catch (error) {
      console.error('Synchronization check failed:', error);
      return {
        isSync: false,
        auth0Authenticated: false,
        backendAuthenticated: false
      };
    }
  }, []);

  // Login with Auth0 token
  const login = useCallback(async (
    auth0Token: string, 
    email: string, 
    migrationToken?: string
  ): Promise<boolean> => {
    try {
      setState(prev => ({ ...prev, loading: true, error: null }));

      const response = await fetch('/api/auth/backend/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          auth0Token,
          migrationToken
        }),
        credentials: 'include'
      });

      const data = await response.json();

      if (response.ok) {
        setState({
          isAuthenticated: true,
          user: data.user,
          loading: false,
          error: null
        });
        return true;
      } else {
        setState(prev => ({
          ...prev,
          loading: false,
          error: data.error || 'Login failed'
        }));
        return false;
      }
    } catch (error) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'Login failed'
      }));
      return false;
    }
  }, []);

  // Register with Auth0 token
  const register = useCallback(async (
    auth0Token: string, 
    email: string, 
    name?: string, 
    migrationToken?: string
  ): Promise<boolean> => {
    try {
      setState(prev => ({ ...prev, loading: true, error: null }));

      const response = await fetch('/api/auth/backend/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          name,
          auth0Token,
          migrationToken
        }),
        credentials: 'include'
      });

      const data = await response.json();

      if (response.ok) {
        setState({
          isAuthenticated: true,
          user: data.user,
          loading: false,
          error: null
        });
        return true;
      } else {
        setState(prev => ({
          ...prev,
          loading: false,
          error: data.error || 'Registration failed'
        }));
        return false;
      }
    } catch (error) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'Registration failed'
      }));
      return false;
    }
  }, []);

  // Backend-only logout
  const logout = useCallback(async (): Promise<void> => {
    try {
      await fetch('/api/auth/backend/logout', {
        method: 'POST',
        credentials: 'include'
      });

      setState({
        isAuthenticated: false,
        user: null,
        loading: false,
        error: null
      });
    } catch (error) {
      console.error('Logout error:', error);
      // Still clear local state even if API call fails
      setState({
        isAuthenticated: false,
        user: null,
        loading: false,
        error: null
      });
    }
  }, []);

  // Enhanced logout that handles both Auth0 and backend
  const enhancedLogout = useCallback(async (): Promise<void> => {
    try {
      // Clear local state immediately
      setState({
        isAuthenticated: false,
        user: null,
        loading: false,
        error: null
      });

      // Clear migration tokens
      if (typeof window !== 'undefined') {
        localStorage.removeItem('onboarding_session_token');
        localStorage.removeItem('rejuve_session_token');
        localStorage.removeItem('rejuve_onboarding_progress');
      }

      // Clear backend authentication first
      try {
        await fetch('/api/auth/backend/logout', {
          method: 'POST',
          credentials: 'include'
        });
      } catch (error) {
        console.error('Backend logout failed:', error);
      }

      // Redirect to Auth0 logout
      if (typeof window !== 'undefined') {
        window.location.href = '/auth/logout';
      }
    } catch (error) {
      console.error('Enhanced logout error:', error);
      // Fallback: just redirect to Auth0 logout
      if (typeof window !== 'undefined') {
        window.location.href = '/auth/logout';
      }
    }
  }, []);

  // Refresh token
  const refresh = useCallback(async (): Promise<boolean> => {
    try {
      const response = await fetch('/api/auth/backend/refresh', {
        method: 'POST',
        credentials: 'include'
      });

      if (response.ok) {
        return true;
      } else {
        // If refresh fails, user needs to login again
        setState({
          isAuthenticated: false,
          user: null,
          loading: false,
          error: 'Session expired'
        });
        return false;
      }
    } catch (error) {
      console.error('Token refresh error:', error);
      setState({
        isAuthenticated: false,
        user: null,
        loading: false,
        error: 'Session expired'
      });
      return false;
    }
  }, []);

  // Clear error
  const clearError = useCallback(() => {
    setState(prev => ({ ...prev, error: null }));
  }, []);

  // Check auth on mount and handle synchronization
  useEffect(() => {
    const initAuth = async () => {
      await checkAuth();
      
      // Check synchronization after initial auth check
      const syncStatus = await checkSynchronization();
      if (!syncStatus.isSync) {
        console.log('⚠️ Auth synchronization issue detected on mount:', syncStatus);
        
        // If Auth0 is logged out but backend is authenticated, clear backend
        if (!syncStatus.auth0Authenticated && syncStatus.backendAuthenticated) {
          console.log('🧹 Clearing backend auth due to Auth0 logout');
          await logout();
        }
        // If Auth0 is authenticated but backend is not, redirect to callback
        else if (syncStatus.auth0Authenticated && !syncStatus.backendAuthenticated) {
          console.log('🔄 Redirecting to callback to sync Auth0 with backend');
          if (typeof window !== 'undefined') {
            window.location.href = '/api/auth/callback';
          }
        }
      }
    };

    initAuth();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Auto-refresh token every 6 hours
  useEffect(() => {
    if (!state.isAuthenticated) return;

    const interval = setInterval(() => {
      refresh();
    }, 6 * 60 * 60 * 1000); // 6 hours

    return () => clearInterval(interval);
  }, [state.isAuthenticated, refresh]);

  // Periodic synchronization check (every 5 minutes)
  useEffect(() => {
    if (!state.isAuthenticated) return;

    const interval = setInterval(async () => {
      const syncStatus = await checkSynchronization();
      if (!syncStatus.isSync) {
        console.log('⚠️ Periodic sync check failed:', syncStatus);
        
        // If Auth0 is logged out but backend is authenticated, clear backend
        if (!syncStatus.auth0Authenticated && syncStatus.backendAuthenticated) {
          console.log('🧹 Clearing backend auth due to Auth0 logout (periodic check)');
          await logout();
        }
      }
    }, 5 * 60 * 1000); // 5 minutes

    return () => clearInterval(interval);
  }, [state.isAuthenticated, checkSynchronization, logout]);

  return {
    ...state,
    login,
    register,
    logout,
    enhancedLogout,
    refresh,
    checkAuth,
    clearError,
    checkSynchronization
  };
} 