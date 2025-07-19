import { NextRequest, NextResponse } from 'next/server';
import { BackendAuthService } from '@/shared/lib/auth/backend-auth-service';

/**
 * Backend Login API
 * POST /api/auth/backend/login
 * 
 * Handles user login through NextJS backend with Auth0 integration
 */
export async function POST(request: NextRequest) {
  try {
    console.log('🔐 Backend login request received');

    const body = await request.json();
    const { email, auth0Token, migrationToken } = body;

    // Validate required fields
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    if (!auth0Token) {
      return NextResponse.json(
        { error: 'Auth0 token is required' },
        { status: 400 }
      );
    }

    // Process login
    const loginResult = await BackendAuthService.loginWithAuth0Token({
      email,
      auth0Token,
      migrationToken
    });

    if (!loginResult.success) {
      return NextResponse.json(
        { error: loginResult.error },
        { status: 401 }
      );
    }

    // Create response with tokens
    const response = NextResponse.json({
      success: true,
      user: loginResult.user,
      migrationResult: loginResult.migrationResult
    });

    // Set authentication cookies
    if (loginResult.tokens) {
      BackendAuthService.setAuthCookies(response, loginResult.tokens);
    }

    console.log('✅ Backend login successful for:', email);
    return response;

  } catch (error) {
    console.error('❌ Backend login error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * GET /api/auth/backend/login
 * Returns login status and available methods
 */
export async function GET() {
  return NextResponse.json({
    available: true,
    methods: ['POST'],
    description: 'Backend authentication login endpoint',
    requiredFields: ['email', 'auth0Token'],
    optionalFields: ['migrationToken']
  });
} 