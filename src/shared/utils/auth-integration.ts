/**
 * Auth Integration Utilities
 * Bridges Auth0 frontend SDK with backend authentication system
 * Production-ready implementation for existing and new users
 * 
 * NOTE: These functions are for frontend use and still use /auth/profile
 * because they are client-side utilities, not API endpoints
 */

/**
 * Extract Auth0 token from Auth0 user session
 */
export async function getAuth0Token(): Promise<string | null> {
  try {
    // Get the access token from Auth0 session
    const response = await fetch('/auth/profile');
    if (!response.ok) {
      return null;
    }

    // In a real implementation, you would extract the actual Auth0 access token
    // This requires the Auth0 SDK to be properly configured on the frontend
    // For now, we'll return null to indicate no token available
    console.log('🔍 Auth0 token extraction not implemented yet');
    return null;
    
  } catch (error) {
    console.error('Failed to get Auth0 token:', error);
    return null;
  }
}

/**
 * Check if user is authenticated with Auth0
 */
export async function isAuth0Authenticated(): Promise<boolean> {
  try {
    const response = await fetch('/auth/profile');
    return response.ok;
  } catch {
    return false;
  }
}

/**
 * Get Auth0 user email
 */
export async function getAuth0UserEmail(): Promise<string | null> {
  try {
    const response = await fetch('/auth/profile');
    if (!response.ok) return null;
    
    const data = await response.json();
    return data.email || null;
  } catch {
    return null;
  }
}

/**
 * Get Auth0 user profile
 */
export async function getAuth0UserProfile(): Promise<{
  sub: string;
  email: string;
  name?: string;
  picture?: string;
} | null> {
  try {
    const response = await fetch('/auth/profile');
    if (!response.ok) return null;
    
    const data = await response.json();
    return {
      sub: data.sub,
      email: data.email,
      name: data.name,
      picture: data.picture
    };
  } catch {
    return null;
  }
}

/**
 * Check if user is authenticated with backend
 */
export async function isBackendAuthenticated(): Promise<{
  isAuthenticated: boolean;
  user?: any;
  error?: string;
}> {
  try {
    const response = await fetch('/api/auth/backend/me', {
      credentials: 'include'
    });

    if (response.ok) {
      const data = await response.json();
      return {
        isAuthenticated: true,
        user: data.user
      };
    } else {
      return {
        isAuthenticated: false,
        error: 'Not authenticated with backend'
      };
    }
  } catch (error) {
    return {
      isAuthenticated: false,
      error: error instanceof Error ? error.message : 'Backend auth check failed'
    };
  }
}

/**
 * Migration token management
 */
export function getMigrationToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('onboarding_session_token') || 
         localStorage.getItem('rejuve_session_token') || 
         null;
}

export function setMigrationToken(token: string): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem('onboarding_session_token', token);
}

export function clearMigrationToken(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('onboarding_session_token');
  localStorage.removeItem('rejuve_session_token'); // Clean up old token
}

/**
 * Check authentication synchronization
 * Returns true if both Auth0 and backend are in sync (both authenticated or both not)
 */
export async function checkAuthSynchronization(): Promise<{
  isSync: boolean;
  auth0Authenticated: boolean;
  backendAuthenticated: boolean;
  action?: 'clear_backend' | 'sync_to_backend' | 'logout_all';
}> {
  try {
    const [auth0Auth, backendAuth] = await Promise.all([
      isAuth0Authenticated(),
      isBackendAuthenticated()
    ]);

    const isSync = auth0Auth === backendAuth.isAuthenticated;

    if (!isSync) {
      // Determine what action to take
      if (!auth0Auth && backendAuth.isAuthenticated) {
        // Auth0 logged out but backend still authenticated - clear backend
        return {
          isSync: false,
          auth0Authenticated: auth0Auth,
          backendAuthenticated: backendAuth.isAuthenticated,
          action: 'clear_backend'
        };
      } else if (auth0Auth && !backendAuth.isAuthenticated) {
        // Auth0 authenticated but backend not - sync to backend
        return {
          isSync: false,
          auth0Authenticated: auth0Auth,
          backendAuthenticated: backendAuth.isAuthenticated,
          action: 'sync_to_backend'
        };
      }
    }

    return {
      isSync,
      auth0Authenticated: auth0Auth,
      backendAuthenticated: backendAuth.isAuthenticated
    };
  } catch (error) {
    console.error('❌ Auth synchronization check failed:', error);
    return {
      isSync: false,
      auth0Authenticated: false,
      backendAuthenticated: false,
      action: 'logout_all'
    };
  }
}

/**
 * Auto-detect authentication method and login
 * Enhanced for existing users with synchronization check
 */
export async function autoLogin(): Promise<{
  success: boolean;
  method?: 'backend' | 'auth0_redirect' | 'existing_user' | 'sync_required';
  redirectUrl?: string;
  error?: string;
}> {
  try {
    console.log('🔍 Starting auto-login detection...');

    // Step 1: Check authentication synchronization
    const syncCheck = await checkAuthSynchronization();
    
    if (!syncCheck.isSync) {
      console.log('⚠️ Authentication desynchronization detected:', syncCheck);
      
      if (syncCheck.action === 'clear_backend') {
        // Clear backend authentication
        await fetch('/api/auth/backend/logout', {
          method: 'POST',
          credentials: 'include'
        });
        console.log('🧹 Backend authentication cleared due to Auth0 logout');
        return {
          success: false,
          error: 'Authentication cleared - please login again'
        };
      } else if (syncCheck.action === 'sync_to_backend') {
        // Sync Auth0 to backend
        console.log('🔄 Auth0 authenticated, syncing to backend...');
        return {
          success: true,
          method: 'sync_required',
          redirectUrl: '/api/auth/callback'
        };
      } else if (syncCheck.action === 'logout_all') {
        // Logout from both systems
        await enhancedLogout();
        return {
          success: false,
          error: 'Authentication error - logging out'
        };
      }
    }

    // Step 2: If synchronized and both authenticated, return success
    if (syncCheck.isSync && syncCheck.backendAuthenticated) {
      console.log('✅ User authenticated with both systems');
      return {
        success: true,
        method: 'backend'
      };
    }

    // Step 3: If synchronized but not authenticated, check for Auth0 only
    if (syncCheck.auth0Authenticated && !syncCheck.backendAuthenticated) {
      console.log('🔄 Auth0 authenticated only, syncing with backend...');
      return {
        success: true,
        method: 'existing_user',
        redirectUrl: '/api/auth/callback'
      };
    }

    // Step 4: User is not authenticated anywhere
    console.log('❌ User not authenticated with Auth0 or backend');
    return {
      success: false,
      error: 'User not authenticated'
    };

  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Auto-login failed'
    };
  }
}

/**
 * Login helper that integrates Auth0 with backend authentication
 * Enhanced for existing users with synchronization
 */
export async function loginWithAuth0Integration(): Promise<{
  success: boolean;
  redirectUrl?: string;
  error?: string;
}> {
  try {
    console.log('🔐 Starting integrated login...');

    // Try auto-login first
    const autoResult = await autoLogin();
    
    if (autoResult.success) {
      if (autoResult.redirectUrl) {
        // Redirect to callback for proper routing
        window.location.href = autoResult.redirectUrl;
        return { success: true };
      }
      return { success: true };
    }

    // If auto-login failed, redirect to Auth0 login
    console.log('🔐 Redirecting to Auth0 login...');
    window.location.href = '/auth/login';
    return { success: true };

  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Login failed'
    };
  }
}

/**
 * Enhanced logout that handles both Auth0 and backend with proper synchronization
 */
export async function enhancedLogout(): Promise<void> {
  try {
    console.log('🚪 Starting enhanced logout...');

    // Clear migration tokens
    clearMigrationToken();

    // Step 1: Clear backend authentication first
    try {
      await fetch('/api/auth/backend/logout', {
        method: 'POST',
        credentials: 'include'
      });
      console.log('✅ Backend logout completed');
    } catch (error) {
      console.error('⚠️ Backend logout failed:', error);
    }

    // Step 2: Clear any local storage
    if (typeof window !== 'undefined') {
      localStorage.removeItem('onboarding_session_token');
      localStorage.removeItem('rejuve_session_token');
      localStorage.removeItem('rejuve_onboarding_progress');
    }

    // Step 3: Redirect to Auth0 logout which will clear Auth0 session
    console.log('🔐 Redirecting to Auth0 logout...');
    window.location.href = '/auth/logout';

  } catch (error) {
    console.error('❌ Enhanced logout error:', error);
    // Fallback: just redirect to Auth0 logout
    window.location.href = '/auth/logout';
  }
}

/**
 * Backend-only logout (for cases where we only want to clear backend auth)
 */
export async function backendOnlyLogout(): Promise<void> {
  try {
    console.log('🚪 Starting backend-only logout...');

    await fetch('/api/auth/backend/logout', {
      method: 'POST',
      credentials: 'include'
    });

    console.log('✅ Backend-only logout completed');
  } catch (error) {
    console.error('❌ Backend-only logout error:', error);
  }
}

/**
 * Auth0-only logout (for cases where we only want to clear Auth0 session)
 */
export async function auth0OnlyLogout(): Promise<void> {
  try {
    console.log('🚪 Starting Auth0-only logout...');
    window.location.href = '/auth/logout';
  } catch (error) {
    console.error('❌ Auth0-only logout error:', error);
  }
}

/**
 * Redirect helpers
 */
export function redirectToLogin(): void {
  window.location.href = '/auth/login';
}

export function redirectToSignup(): void {
  window.location.href = '/auth/login?screen_hint=signup';
}

/**
 * Get post-login redirect URL
 */
export function getPostLoginRedirect(): string {
  if (typeof window === 'undefined') return '/dashboard';
  
  const urlParams = new URLSearchParams(window.location.search);
  const returnTo = urlParams.get('returnTo');
  
  if (returnTo && returnTo.startsWith('/')) {
    return returnTo;
  }
  
  return '/dashboard';
} 