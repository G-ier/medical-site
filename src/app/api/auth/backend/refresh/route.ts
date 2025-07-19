import { NextRequest, NextResponse } from 'next/server';
import { BackendAuthService } from '@/shared/lib/auth/backend-auth-service';

/**
 * Backend Refresh Token API
 * POST /api/auth/backend/refresh
 * 
 * Handles token refresh for backend authentication
 */
export async function POST(request: NextRequest) {
  try {
    console.log('🔄 Backend refresh token request received');

    // Get refresh token from cookie
    const refreshToken = request.cookies.get('refresh_token')?.value;

    if (!refreshToken) {
      return NextResponse.json(
        { error: 'Refresh token not found' },
        { status: 401 }
      );
    }

    // Refresh the access token
    const refreshResult = await BackendAuthService.refreshToken(refreshToken);

    if (!refreshResult.success) {
      return NextResponse.json(
        { error: refreshResult.error },
        { status: 401 }
      );
    }

    // Create response with new access token
    const response = NextResponse.json({
      success: true,
      accessToken: refreshResult.accessToken,
      expiresIn: refreshResult.expiresIn
    });

    // Update access token cookie
    const cookieSecureEnv = process.env.COOKIE_SECURE;
    const isCookieSecure = typeof cookieSecureEnv === 'string' ? cookieSecureEnv === 'true' : process.env.NODE_ENV === 'production';
    response.cookies.set('access_token', refreshResult.accessToken!, {
      httpOnly: true,
      secure: isCookieSecure,
      sameSite: 'lax',
      maxAge: refreshResult.expiresIn!,
      path: '/',
    });

    console.log('✅ Backend token refresh successful');
    return response;

  } catch (error) {
    console.error('❌ Backend refresh token error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * GET /api/auth/backend/refresh
 * Returns refresh endpoint information
 */
export async function GET() {
  return NextResponse.json({
    available: true,
    methods: ['POST'],
    description: 'Backend authentication refresh token endpoint'
  });
} 