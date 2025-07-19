import { NextRequest, NextResponse } from 'next/server';
import { JWTUtils, type TokenPair } from './jwt';
import { UserService } from '../database/user-service';
import { ProgressService } from '../database/progress-service';
import { Auth0Integration } from './auth0-integration';

export interface AuthenticatedUser {
  userId: number;
  email: string;
  name?: string;
  picture?: string;
  auth0UserId?: string;
}

export interface LoginRequest {
  email: string;
  password?: string;
  auth0Token?: string;
  migrationToken?: string;
}

export interface LoginResponse {
  success: boolean;
  user?: AuthenticatedUser;
  tokens?: TokenPair;
  migrationResult?: {
    success: boolean;
    error?: string;
  };
  error?: string;
}

export interface RegisterRequest {
  email: string;
  password?: string;
  name?: string;
  auth0Token?: string;
  migrationToken?: string;
}

export interface RegisterResponse {
  success: boolean;
  user?: AuthenticatedUser;
  tokens?: TokenPair;
  migrationResult?: {
    success: boolean;
    error?: string;
  };
  error?: string;
}

/**
 * Backend Authentication Service
 * Handles authentication logic on the NextJS backend
 * Integrates with Auth0 for user verification while maintaining backend control
 */
export class BackendAuthService {
  
  /**
   * Login user with Auth0 token
   * Main login method that accepts Auth0 token and creates backend session
   */
  static async loginWithAuth0Token(request: LoginRequest): Promise<LoginResponse> {
    try {
      console.log('🔐 Backend login with Auth0 token for:', request.email);

      if (!request.auth0Token) {
        return {
          success: false,
          error: 'Auth0 token is required'
        };
      }

      // Verify Auth0 token (this would be implemented based on your Auth0 setup)
      const auth0UserData = await this.verifyAuth0Token(request.auth0Token);
      if (!auth0UserData) {
        return {
          success: false,
          error: 'Invalid Auth0 token'
        };
      }

      // Find or create user in database
      const user = await UserService.findOrCreateUser({
        sub: auth0UserData.sub,
        email: auth0UserData.email,
        name: auth0UserData.name,
        picture: auth0UserData.picture
      });

      // Generate JWT tokens
      const tokens = await JWTUtils.generateTokenPair(
        user.id,
        user.email,
        user.auth0UserId
      );

      // Handle session migration if token provided
      let migrationResult;
      if (request.migrationToken) {
        console.log('🔀 Migrating anonymous session...');
        migrationResult = await ProgressService.migrateAnonymousToUser(
          request.migrationToken,
          user.id
        );
      }

      return {
        success: true,
        user: {
          userId: user.id,
          email: user.email,
          name: user.name || undefined,
          picture: user.picture || undefined,
          auth0UserId: user.auth0UserId
        },
        tokens,
        migrationResult
      };

    } catch (error) {
      console.error('❌ Backend login failed:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Login failed'
      };
    }
  }

  /**
   * Register user with Auth0 token
   * Similar to login but explicitly for new users
   */
  static async registerWithAuth0Token(request: RegisterRequest): Promise<RegisterResponse> {
    try {
      console.log('📝 Backend register with Auth0 token for:', request.email);

      if (!request.auth0Token) {
        return {
          success: false,
          error: 'Auth0 token is required'
        };
      }

      // Verify Auth0 token
      const auth0UserData = await this.verifyAuth0Token(request.auth0Token);
      if (!auth0UserData) {
        return {
          success: false,
          error: 'Invalid Auth0 token'
        };
      }

      // Check if user already exists
      const existingUser = await UserService.findUserByAuth0Id(auth0UserData.sub);
      if (existingUser) {
        return {
          success: false,
          error: 'User already exists'
        };
      }

      // Create new user
      const user = await UserService.createUser({
        sub: auth0UserData.sub,
        email: auth0UserData.email,
        name: auth0UserData.name || request.name,
        picture: auth0UserData.picture
      });

      // Generate JWT tokens
      const tokens = await JWTUtils.generateTokenPair(
        user.id,
        user.email,
        user.auth0UserId
      );

      // Handle session migration if token provided
      let migrationResult;
      if (request.migrationToken) {
        console.log('🔀 Migrating anonymous session...');
        migrationResult = await ProgressService.migrateAnonymousToUser(
          request.migrationToken,
          user.id
        );
      }

      return {
        success: true,
        user: {
          userId: user.id,
          email: user.email,
          name: user.name || undefined,
          picture: user.picture || undefined,
          auth0UserId: user.auth0UserId
        },
        tokens,
        migrationResult
      };

    } catch (error) {
      console.error('❌ Backend register failed:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Registration failed'
      };
    }
  }

  /**
   * Validate request and get authenticated user
   * Used by API routes to check authentication
   */
  static async validateRequest(request: NextRequest): Promise<{
    isAuthenticated: boolean;
    user?: AuthenticatedUser;
    error?: string;
  }> {
    try {
      const validation = await JWTUtils.validateRequest(request);
      
      if (!validation.isValid) {
        return {
          isAuthenticated: false,
          error: validation.error
        };
      }

      // Get full user data from database
      const user = await UserService.findUserById(validation.user!.userId);
      if (!user) {
        return {
          isAuthenticated: false,
          error: 'User not found'
        };
      }

      return {
        isAuthenticated: true,
        user: {
          userId: user.id,
          email: user.email,
          name: user.name || undefined,
          picture: user.picture || undefined,
          auth0UserId: user.auth0UserId
        }
      };

    } catch (error) {
      console.error('❌ Request validation failed:', error);
      return {
        isAuthenticated: false,
        error: 'Authentication validation failed'
      };
    }
  }

  /**
   * Refresh access token
   */
  static async refreshToken(refreshToken: string): Promise<{
    success: boolean;
    accessToken?: string;
    expiresIn?: number;
    error?: string;
  }> {
    return await JWTUtils.refreshAccessToken(refreshToken);
  }

  /**
   * Set authentication cookies in response
   */
  static setAuthCookies(response: NextResponse, tokens: TokenPair): void {
    const cookieSecureEnv = process.env.COOKIE_SECURE;
    const isCookieSecure = typeof cookieSecureEnv === 'string' ? cookieSecureEnv === 'true' : process.env.NODE_ENV === 'production';
    
    // Set access token cookie
    response.cookies.set('access_token', tokens.accessToken, {
      httpOnly: true,
      secure: isCookieSecure,
      sameSite: 'lax',
      maxAge: tokens.expiresIn,
      path: '/'
    });

    // Set refresh token cookie
    response.cookies.set('refresh_token', tokens.refreshToken, {
      httpOnly: true,
      secure: isCookieSecure,
      sameSite: 'lax',
      maxAge: 30 * 24 * 60 * 60, // 30 days
      path: '/'
    });
  }

  /**
   * Clear authentication cookies
   */
  static clearAuthCookies(response: NextResponse): void {
    response.cookies.delete('access_token');
    response.cookies.delete('refresh_token');
  }

  /**
   * Verify Auth0 token using proper Auth0 integration
   */
  private static async verifyAuth0Token(token: string): Promise<{
    sub: string;
    email: string;
    name?: string;
    picture?: string;
  } | null> {
    try {
      console.log('🔍 Verifying Auth0 token...');
      
      const validation = await Auth0Integration.validateAuth0Token(token);
      
      if (!validation.isValid || !validation.user) {
        console.error('❌ Auth0 token validation failed:', validation.error);
        return null;
      }

      // Check if email is verified
      if (!Auth0Integration.isEmailVerified(validation.user)) {
        console.error('❌ Auth0 email not verified');
        return null;
      }

      return Auth0Integration.extractUserData(validation.user);
      
    } catch (error) {
      console.error('❌ Auth0 token verification failed:', error);
      return null;
    }
  }

  /**
   * Create authentication middleware for API routes
   */
  static createAuthMiddleware() {
    return async (request: NextRequest) => {
      const validation = await this.validateRequest(request);
      
      if (!validation.isAuthenticated) {
        return NextResponse.json(
          { error: validation.error || 'Authentication required' },
          { status: 401 }
        );
      }

      // Add user info to request headers for downstream handlers
      const response = NextResponse.next();
      response.headers.set('x-user-id', validation.user!.userId.toString());
      response.headers.set('x-user-email', validation.user!.email);
      
      return response;
    };
  }
} 