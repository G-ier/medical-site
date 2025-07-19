import { NextRequest } from 'next/server';

// JWT Configuration
const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-in-production';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';
const JWT_REFRESH_EXPIRES_IN = process.env.JWT_REFRESH_EXPIRES_IN || '30d';

export interface JWTPayload {
  userId: number;
  email: string;
  auth0UserId?: string;
  type: 'access' | 'refresh';
  iat?: number;
  exp?: number;
}

export interface TokenPair {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

/**
 * JWT Utility Class - Edge Runtime Compatible
 * Uses Web Crypto API instead of Node.js crypto
 */
export class JWTUtils {
  
  /**
   * Generate access and refresh token pair
   */
  static async generateTokenPair(userId: number, email: string, auth0UserId?: string): Promise<TokenPair> {
    const now = Math.floor(Date.now() / 1000);
    const accessExpiry = now + this.getExpirationTime(JWT_EXPIRES_IN);
    const refreshExpiry = now + this.getExpirationTime(JWT_REFRESH_EXPIRES_IN);

    const accessPayload: JWTPayload = {
      userId,
      email,
      auth0UserId,
      type: 'access',
      iat: now,
      exp: accessExpiry
    };

    const refreshPayload: JWTPayload = {
      userId,
      email,
      auth0UserId,
      type: 'refresh',
      iat: now,
      exp: refreshExpiry
    };

    const [accessToken, refreshToken] = await Promise.all([
      this.signToken(accessPayload),
      this.signToken(refreshPayload)
    ]);

    return {
      accessToken,
      refreshToken,
      expiresIn: this.getExpirationTime(JWT_EXPIRES_IN)
    };
  }

  /**
   * Sign JWT token using Web Crypto API
   */
  private static async signToken(payload: JWTPayload): Promise<string> {
    const header = {
      alg: 'HS256',
      typ: 'JWT'
    };

    const encodedHeader = this.base64UrlEncode(JSON.stringify(header));
    const encodedPayload = this.base64UrlEncode(JSON.stringify(payload));
    const data = `${encodedHeader}.${encodedPayload}`;

    const signature = await this.hmacSign(data, JWT_SECRET);
    const encodedSignature = this.base64UrlEncode(signature);

    return `${data}.${encodedSignature}`;
  }

  /**
   * Verify and decode JWT token using Web Crypto API
   */
  static async verifyToken(token: string): Promise<JWTPayload | null> {
    try {
      const parts = token.split('.');
      if (parts.length !== 3) {
        return null;
      }

      const [encodedHeader, encodedPayload, encodedSignature] = parts;
      const data = `${encodedHeader}.${encodedPayload}`;

      // Verify signature
      const expectedSignature = await this.hmacSign(data, JWT_SECRET);
      const expectedEncodedSignature = this.base64UrlEncode(expectedSignature);

      if (encodedSignature !== expectedEncodedSignature) {
        return null;
      }

      // Decode payload
      const payload = JSON.parse(this.base64UrlDecode(encodedPayload)) as JWTPayload;

      // Check expiration
      if (payload.exp && Date.now() >= payload.exp * 1000) {
        return null;
      }

      return payload;
    } catch (error) {
      console.error('JWT verification failed:', error);
      return null;
    }
  }

  /**
   * HMAC sign using Web Crypto API
   */
  private static async hmacSign(data: string, secret: string): Promise<string> {
    const encoder = new TextEncoder();
    const keyData = encoder.encode(secret);
    const messageData = encoder.encode(data);

    const key = await crypto.subtle.importKey(
      'raw',
      keyData,
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['sign']
    );

    const signature = await crypto.subtle.sign('HMAC', key, messageData);
    return String.fromCharCode(...new Uint8Array(signature));
  }

  /**
   * Base64 URL encode
   */
  private static base64UrlEncode(str: string): string {
    const base64 = btoa(str);
    return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
  }

  /**
   * Base64 URL decode
   */
  private static base64UrlDecode(str: string): string {
    // Add padding if needed
    const padded = str + '==='.slice((str.length + 3) % 4);
    const base64 = padded.replace(/-/g, '+').replace(/_/g, '/');
    return atob(base64);
  }

  /**
   * Extract token from Authorization header
   */
  static extractTokenFromHeader(authHeader: string | null): string | null {
    if (!authHeader) return null;
    
    const parts = authHeader.split(' ');
    if (parts.length !== 2 || parts[0] !== 'Bearer') {
      return null;
    }
    
    return parts[1];
  }

  /**
   * Extract token from NextRequest
   */
  static extractTokenFromRequest(request: NextRequest): string | null {
    // Try Authorization header first
    const authHeader = request.headers.get('authorization');
    const headerToken = this.extractTokenFromHeader(authHeader);
    if (headerToken) return headerToken;

    // Try cookie as fallback
    const cookieToken = request.cookies.get('access_token')?.value;
    if (cookieToken) return cookieToken;

    return null;
  }

  /**
   * Validate request and extract user info
   */
  static async validateRequest(request: NextRequest): Promise<{
    isValid: boolean;
    user?: {
      userId: number;
      email: string;
      auth0UserId?: string;
    };
    error?: string;
  }> {
    const token = this.extractTokenFromRequest(request);
    
    if (!token) {
      return {
        isValid: false,
        error: 'No token provided'
      };
    }

    const payload = await this.verifyToken(token);
    
    if (!payload) {
      return {
        isValid: false,
        error: 'Invalid token'
      };
    }

    if (payload.type !== 'access') {
      return {
        isValid: false,
        error: 'Invalid token type'
      };
    }

    return {
      isValid: true,
      user: {
        userId: payload.userId,
        email: payload.email,
        auth0UserId: payload.auth0UserId
      }
    };
  }

  /**
   * Convert time string to seconds
   */
  private static getExpirationTime(timeString: string): number {
    const unit = timeString.slice(-1);
    const value = parseInt(timeString.slice(0, -1));
    
    switch (unit) {
      case 's': return value;
      case 'm': return value * 60;
      case 'h': return value * 60 * 60;
      case 'd': return value * 60 * 60 * 24;
      default: return 7 * 24 * 60 * 60; // Default 7 days
    }
  }

  /**
   * Check if token is expired
   */
  static isTokenExpired(token: string): boolean {
    try {
      const parts = token.split('.');
      if (parts.length !== 3) return true;
      
      const payload = JSON.parse(this.base64UrlDecode(parts[1])) as JWTPayload;
      if (!payload || !payload.exp) return true;
      
      return Date.now() >= payload.exp * 1000;
    } catch {
      return true;
    }
  }

  /**
   * Refresh access token using refresh token
   */
  static async refreshAccessToken(refreshToken: string): Promise<{
    success: boolean;
    accessToken?: string;
    expiresIn?: number;
    error?: string;
  }> {
    const payload = await this.verifyToken(refreshToken);
    
    if (!payload || payload.type !== 'refresh') {
      return {
        success: false,
        error: 'Invalid refresh token'
      };
    }

    // Generate new access token
    const now = Math.floor(Date.now() / 1000);
    const accessExpiry = now + this.getExpirationTime(JWT_EXPIRES_IN);

    const newAccessPayload: JWTPayload = {
      userId: payload.userId,
      email: payload.email,
      auth0UserId: payload.auth0UserId,
      type: 'access',
      iat: now,
      exp: accessExpiry
    };

    try {
      const accessToken = await this.signToken(newAccessPayload);
      
      return {
        success: true,
        accessToken,
        expiresIn: this.getExpirationTime(JWT_EXPIRES_IN)
      };
    } catch {
      return {
        success: false,
        error: 'Failed to generate new access token'
      };
    }
  }
} 