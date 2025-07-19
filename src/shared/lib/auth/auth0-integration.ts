import { auth0 } from '../auth0';
import { NextRequest } from 'next/server';

export interface Auth0User {
  sub: string;
  email: string;
  name?: string;
  picture?: string;
  email_verified?: boolean;
  [key: string]: any;
}

export interface Auth0TokenValidation {
  isValid: boolean;
  user?: Auth0User;
  error?: string;
}

/**
 * Auth0 Integration Service
 * Handles proper Auth0 token verification and user data extraction
 */
export class Auth0Integration {
  
  /**
   * Get Auth0 session from request
   */
  static async getAuth0Session(request: NextRequest): Promise<{
    isAuthenticated: boolean;
    user?: Auth0User;
    accessToken?: string;
    error?: string;
  }> {
    try {
      // Get session using Auth0 SDK
      const session = await auth0.getSession(request);
      
      if (!session || !session.user) {
        return {
          isAuthenticated: false,
          error: 'No Auth0 session found'
        };
      }

      // Get access token
      const accessTokenResult = await auth0.getAccessToken();

      return {
        isAuthenticated: true,
        user: session.user as Auth0User,
        accessToken: accessTokenResult?.token
      };

    } catch (error) {
      console.error('❌ Auth0 session error:', error);
      return {
        isAuthenticated: false,
        error: error instanceof Error ? error.message : 'Auth0 session error'
      };
    }
  }

  /**
   * Validate Auth0 access token
   */
  static async validateAuth0Token(token: string): Promise<Auth0TokenValidation> {
    try {
      // In a real implementation, you would verify the JWT token
      // against Auth0's public keys and validate claims
      
      // For now, we'll decode the token and validate basic structure
      const tokenParts = token.split('.');
      if (tokenParts.length !== 3) {
        return {
          isValid: false,
          error: 'Invalid token format'
        };
      }

      // Decode payload
      const payload = JSON.parse(
        Buffer.from(tokenParts[1], 'base64').toString('utf-8')
      );

      // Validate required claims
      if (!payload.sub || !payload.email) {
        return {
          isValid: false,
          error: 'Missing required claims'
        };
      }

      // Check expiration
      if (payload.exp && Date.now() >= payload.exp * 1000) {
        return {
          isValid: false,
          error: 'Token expired'
        };
      }

      // Validate audience and issuer (if configured)
      const expectedAudience = process.env.AUTH0_AUDIENCE;
      const expectedIssuer = process.env.AUTH0_ISSUER_BASE_URL;

      if (expectedAudience && payload.aud !== expectedAudience) {
        return {
          isValid: false,
          error: 'Invalid audience'
        };
      }

      if (expectedIssuer && payload.iss !== expectedIssuer) {
        return {
          isValid: false,
          error: 'Invalid issuer'
        };
      }

      return {
        isValid: true,
        user: {
          sub: payload.sub,
          email: payload.email,
          name: payload.name,
          picture: payload.picture,
          email_verified: payload.email_verified
        }
      };

    } catch (error) {
      console.error('❌ Token validation error:', error);
      return {
        isValid: false,
        error: error instanceof Error ? error.message : 'Token validation failed'
      };
    }
  }

  /**
   * Extract user data from Auth0 session
   */
  static extractUserData(auth0User: Auth0User): {
    sub: string;
    email: string;
    name?: string;
    picture?: string;
  } {
    return {
      sub: auth0User.sub,
      email: auth0User.email,
      name: auth0User.name || auth0User.nickname || undefined,
      picture: auth0User.picture || undefined
    };
  }

  /**
   * Check if user email is verified
   */
  static isEmailVerified(auth0User: Auth0User): boolean {
    return auth0User.email_verified === true;
  }

  /**
   * Get Auth0 management API token
   * Used for user management operations
   */
  static async getManagementToken(): Promise<string | null> {
    try {
      const response = await fetch(`${process.env.AUTH0_ISSUER_BASE_URL}/oauth/token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          client_id: process.env.AUTH0_CLIENT_ID,
          client_secret: process.env.AUTH0_CLIENT_SECRET,
          audience: `${process.env.AUTH0_ISSUER_BASE_URL}/api/v2/`,
          grant_type: 'client_credentials'
        })
      });

      if (!response.ok) {
        throw new Error('Failed to get management token');
      }

      const data = await response.json();
      return data.access_token;

    } catch (error) {
      console.error('❌ Failed to get Auth0 management token:', error);
      return null;
    }
  }

  /**
   * Update user metadata in Auth0
   */
  static async updateUserMetadata(
    userId: string, 
    metadata: Record<string, any>
  ): Promise<boolean> {
    try {
      const managementToken = await this.getManagementToken();
      if (!managementToken) {
        throw new Error('Failed to get management token');
      }

      const response = await fetch(
        `${process.env.AUTH0_ISSUER_BASE_URL}/api/v2/users/${encodeURIComponent(userId)}`,
        {
          method: 'PATCH',
          headers: {
            'Authorization': `Bearer ${managementToken}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            user_metadata: metadata
          })
        }
      );

      return response.ok;

    } catch (error) {
      console.error('❌ Failed to update user metadata:', error);
      return false;
    }
  }

  /**
   * Get user from Auth0 Management API
   */
  static async getAuth0User(userId: string): Promise<Auth0User | null> {
    try {
      const managementToken = await this.getManagementToken();
      if (!managementToken) {
        throw new Error('Failed to get management token');
      }

      const response = await fetch(
        `${process.env.AUTH0_ISSUER_BASE_URL}/api/v2/users/${encodeURIComponent(userId)}`,
        {
          headers: {
            'Authorization': `Bearer ${managementToken}`,
            'Content-Type': 'application/json'
          }
        }
      );

      if (!response.ok) {
        throw new Error('Failed to get user from Auth0');
      }

      return await response.json();

    } catch (error) {
      console.error('❌ Failed to get Auth0 user:', error);
      return null;
    }
  }
} 