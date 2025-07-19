import { NextRequest, NextResponse } from 'next/server';
import { BackendAuthService } from '@/shared/lib/auth/backend-auth-service';

/**
 * Backend Register API
 * POST /api/auth/backend/register
 * 
 * Handles user registration through NextJS backend with Auth0 integration
 */
export async function POST(request: NextRequest) {
  try {
    console.log('📝 Backend register request received');

    const body = await request.json();
    const { email, name, auth0Token, migrationToken } = body;

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

    // Process registration
    const registerResult = await BackendAuthService.registerWithAuth0Token({
      email,
      name,
      auth0Token,
      migrationToken
    });

    if (!registerResult.success) {
      return NextResponse.json(
        { error: registerResult.error },
        { status: 400 }
      );
    }

    // Create response with tokens
    const response = NextResponse.json({
      success: true,
      user: registerResult.user,
      migrationResult: registerResult.migrationResult
    });

    // Set authentication cookies
    if (registerResult.tokens) {
      BackendAuthService.setAuthCookies(response, registerResult.tokens);
    }

    console.log('✅ Backend registration successful for:', email);
    return response;

  } catch (error) {
    console.error('❌ Backend register error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * GET /api/auth/backend/register
 * Returns registration status and available methods
 */
export async function GET() {
  return NextResponse.json({
    available: true,
    methods: ['POST'],
    description: 'Backend authentication register endpoint',
    requiredFields: ['email', 'auth0Token'],
    optionalFields: ['name', 'migrationToken']
  });
} 