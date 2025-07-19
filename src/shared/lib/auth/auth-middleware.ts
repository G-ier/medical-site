import { NextRequest, NextResponse } from 'next/server';
import { JWTUtils } from './jwt';
import { Auth0Integration } from './auth0-integration';

export interface AuthContext {
  isAuthenticated: boolean;
  authType: 'none' | 'auth0' | 'backend' | 'anonymous';
  user?: {
    userId: number;
    email: string;
    name?: string;
    picture?: string;
    auth0UserId?: string;
  };
  sessionToken?: string;
  error?: string;
  syncIssue?: {
    type: 'auth0_missing' | 'backend_missing' | 'both_missing';
    action: 'clear_backend' | 'redirect_to_auth0' | 'logout_all';
  };
}

export interface MiddlewareConfig {
  requireAuth?: boolean;
  allowAnonymous?: boolean;
  allowAuth0Only?: boolean;
  allowBackendOnly?: boolean;
  redirectTo?: string;
  checkSync?: boolean; // New option to enable synchronization checking
}

/**
 * Authentication Middleware - Edge Runtime Compatible
 * Enhanced with Auth0/Backend synchronization checking
 */
export class AuthMiddleware {
  
  /**
   * Main middleware function with synchronization support
   */
  static async authenticate(
    request: NextRequest,
    config: MiddlewareConfig = {}
  ): Promise<{
    context: AuthContext;
    response?: NextResponse;
  }> {
    const {
      requireAuth = false,
      allowAnonymous = true,
      allowAuth0Only = false,
      allowBackendOnly = false,
      redirectTo,
      checkSync = true
    } = config;

    // Try different authentication methods in order of preference
    const authResults = await Promise.allSettled([
      this.tryBackendAuth(request),
      this.tryAuth0Auth(request),
      allowAnonymous ? this.tryAnonymousAuth(request) : Promise.resolve(null)
    ]);


    // Extract results
    const backendAuth = authResults[0].status === 'fulfilled' ? authResults[0].value : null;
    const auth0Auth = authResults[1].status === 'fulfilled' ? authResults[1].value : null;
    const anonymousAuth = authResults[2].status === 'fulfilled' ? authResults[2].value : null;

    // Check for synchronization issues if enabled
    let syncIssue: AuthContext['syncIssue'] | undefined;
    if (checkSync && (backendAuth || auth0Auth)) {
      syncIssue = this.checkAuthSynchronization(backendAuth, auth0Auth);
    }

    // Handle synchronization issues
    if (syncIssue) {
      console.log('⚠️ Auth synchronization issue detected:', syncIssue);
      
      if (syncIssue.action === 'clear_backend') {
        // Clear backend cookies and redirect to login
        const response = NextResponse.redirect(new URL(redirectTo || '/auth/login', request.url));
        response.cookies.delete('access_token');
        response.cookies.delete('refresh_token');
        
        return {
          context: {
            isAuthenticated: false,
            authType: 'none',
            error: 'Authentication cleared due to Auth0 logout',
            syncIssue
          },
          response
        };
      } else if (syncIssue.action === 'redirect_to_auth0') {
        // Redirect to Auth0 callback to sync
        const response = NextResponse.redirect(new URL('/api/auth/callback', request.url));
        return {
          context: {
            isAuthenticated: false,
            authType: 'none',
            error: 'Redirecting to sync authentication',
            syncIssue
          },
          response
        };
      } else if (syncIssue.action === 'logout_all') {
        // Clear everything and redirect to login
        const response = NextResponse.redirect(new URL(redirectTo || '/auth/login', request.url));
        response.cookies.delete('access_token');
        response.cookies.delete('refresh_token');
        
        return {
          context: {
            isAuthenticated: false,
            authType: 'none',
            error: 'Authentication error - logged out',
            syncIssue
          },
          response
        };
      }
    }

    // Find the first successful authentication (prioritize backend, then Auth0, then anonymous)
    let context: AuthContext = {
      isAuthenticated: false,
      authType: 'none'
    };

    if (backendAuth && !syncIssue) {
      context = backendAuth;
    } else if (auth0Auth && !syncIssue) {
      context = auth0Auth;
    } else if (anonymousAuth && !syncIssue) {
      context = anonymousAuth;
    }

    // Apply restrictions
    if (allowAuth0Only && context.authType !== 'auth0') {
      context = {
        isAuthenticated: false,
        authType: 'none',
        error: 'Auth0 authentication required'
      };
    }

    if (allowBackendOnly && context.authType !== 'backend') {
      context = {
        isAuthenticated: false,
        authType: 'none',
        error: 'Backend authentication required'
      };
    }

    // Check if authentication is required
    if (requireAuth && !context.isAuthenticated) {
      if (redirectTo) {
        return {
          context,
          response: NextResponse.redirect(new URL(redirectTo, request.url))
        };
      }

      return {
        context,
        response: NextResponse.json(
          { error: context.error || 'Authentication required' },
          { status: 401 }
        )
      };
    }

    // Add auth context to request headers
    const response = NextResponse.next();
    
    if (context.isAuthenticated && context.user) {
      response.headers.set('x-auth-type', context.authType);
      response.headers.set('x-user-id', context.user.userId.toString());
      response.headers.set('x-user-email', context.user.email);
      
      if (context.sessionToken) {
        response.headers.set('x-session-token', context.sessionToken);
      }
    }

    return { context, response };
  }

  /**
   * Check for authentication synchronization issues
   */
  private static checkAuthSynchronization(
    backendAuth: AuthContext | null,
    auth0Auth: AuthContext | null
  ): AuthContext['syncIssue'] | undefined {
    const hasBackend = backendAuth?.isAuthenticated || false;
    const hasAuth0 = auth0Auth?.isAuthenticated || false;

    console.log('checkAuthSynchronization, hasBackend', hasBackend, 'hasAuth0', hasAuth0)

    // Both authenticated or both not authenticated - in sync
    if (hasBackend === hasAuth0) {
      return undefined;
    }

    // Backend authenticated but Auth0 not - Auth0 session expired/logged out
    if (hasBackend && !hasAuth0) {
      return {
        type: 'auth0_missing',
        action: 'clear_backend'
      };
    }

    // Auth0 authenticated but backend not - need to sync to backend
    if (!hasBackend && hasAuth0) {
      return {
        type: 'backend_missing',
        action: 'redirect_to_auth0'
      };
    }

    // Should not reach here, but handle edge case
    return {
      type: 'both_missing',
      action: 'logout_all'
    };
  }

  /**
   * Try backend JWT authentication - token validation only
   */
  private static async tryBackendAuth(request: NextRequest): Promise<AuthContext | null> {
    try {
      const validation = await JWTUtils.validateRequest(request);
      
      if (!validation.isValid || !validation.user) {
        return null;
      }

      // Return user data from JWT token (no database lookup)
      return {
        isAuthenticated: true,
        authType: 'backend',
        user: {
          userId: validation.user.userId,
          email: validation.user.email,
          auth0UserId: validation.user.auth0UserId
        }
      };

    } catch (error) {
      console.error('❌ Backend auth error:', error);
      return null;
    }
  }

  /**
   * Try Auth0 authentication - session validation only
   */
  private static async tryAuth0Auth(request: NextRequest): Promise<AuthContext | null> {
    try {
      const auth0Session = await Auth0Integration.getAuth0Session(request);
      
      if (!auth0Session.isAuthenticated || !auth0Session.user) {
        return null;
      }

      // Return Auth0 user data (no database lookup)
      // Note: userId will be 0 as we don't have it from Auth0 session
      return {
        isAuthenticated: true,
        authType: 'auth0',
        user: {
          userId: 0, // Placeholder - will be resolved in API routes
          email: auth0Session.user.email,
          name: auth0Session.user.name,
          picture: auth0Session.user.picture,
          auth0UserId: auth0Session.user.sub
        }
      };

    } catch (error) {
      console.error('❌ Auth0 auth error:', error);
      return null;
    }
  }

  /**
   * Try anonymous authentication - session token validation only
   */
  private static async tryAnonymousAuth(request: NextRequest): Promise<AuthContext | null> {
    try {
      // Check for session token in headers or cookies
      const sessionToken = request.headers.get('x-session-token') || 
                          request.cookies.get('session_token')?.value;
      
      if (!sessionToken) {
        return null;
      }

      // For edge runtime, we can't validate the session token against database
      // We'll trust that it exists and let API routes handle validation
      return {
        isAuthenticated: true,
        authType: 'anonymous',
        sessionToken,
        user: {
          userId: 0, // Anonymous user has no userId
          email: 'anonymous@example.com' // Placeholder
        }
      };

    } catch (error) {
      console.error('❌ Anonymous auth error:', error);
      return null;
    }
  }

  /**
   * Create middleware for specific routes
   */
  static createMiddleware(config: MiddlewareConfig) {
    return async (request: NextRequest) => {
      const { context, response } = await this.authenticate(request, config);
      
      // If there's a response (redirect or error), return it
      if (response) {
        console.log(`🔒 Auth middleware: ${request.nextUrl.pathname} - ${context.isAuthenticated ? 'Authenticated' : 'Not authenticated'}`, {
          authType: context.authType,
          hasResponse: !!response,
          status: response.status,
          syncIssue: context.syncIssue
        });
        return response;
      }

      // Continue to the page
      console.log(`✅ Auth middleware: ${request.nextUrl.pathname} - Access granted`, {
        authType: context.authType,
        isAuthenticated: context.isAuthenticated
      });
      return NextResponse.next();
    };
  }

  /**
   * Middleware for protected routes (requires authentication with sync check)
   */
  static protectedRoute = this.createMiddleware({
    requireAuth: true,
    redirectTo: '/auth/login',
    checkSync: true
  });

  /**
   * Middleware for API routes (requires authentication, returns JSON)
   */
  static protectedAPI = this.createMiddleware({
    requireAuth: true,
    checkSync: true
  });

  /**
   * Middleware for Auth0-only routes
   */
  static auth0Only = this.createMiddleware({
    requireAuth: true,
    allowAuth0Only: true,
    redirectTo: '/auth/login',
    checkSync: false // Don't check sync for Auth0-only routes
  });

  /**
   * Middleware for backend-only routes
   */
  static backendOnly = this.createMiddleware({
    requireAuth: true,
    allowBackendOnly: true,
    checkSync: false // Don't check sync for backend-only routes
  });

  /**
   * Middleware for anonymous or authenticated routes
   */
  static flexible = this.createMiddleware({
    requireAuth: false,
    allowAnonymous: true,
    checkSync: true
  });
} 