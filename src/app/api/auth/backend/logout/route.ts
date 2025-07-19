import { NextRequest, NextResponse } from 'next/server';
import { BackendAuthService } from '@/shared/lib/auth/backend-auth-service';

/**
 * Backend Logout API
 * POST /api/auth/backend/logout
 * 
 * Handles user logout by clearing authentication cookies and ending backend session
 * Enhanced to handle Auth0 logout synchronization
 */
export async function POST(request: NextRequest) {
  try {
    console.log('🚪 Backend logout request received');

    // Get return URL from query params or default to home
    const { searchParams } = new URL(request.url);
    const returnTo = searchParams.get('returnTo') || '/';

    // Create response
    const response = NextResponse.json({
      success: true,
      message: 'Logged out successfully',
      redirectTo: returnTo
    });

    // Clear authentication cookies
    BackendAuthService.clearAuthCookies(response);

    console.log('✅ Backend logout successful');
    return response;

  } catch (error) {
    console.error('❌ Backend logout error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * GET /api/auth/backend/logout
 * Handles logout with redirect (for Auth0 logout URL configuration)
 */
export async function GET(request: NextRequest) {
  try {
    console.log('🚪 Backend logout GET request received');

    // Get return URL from query params or default to home
    const { searchParams } = new URL(request.url);
    const returnTo = searchParams.get('returnTo') || '/';

    // Create redirect response
    const response = NextResponse.redirect(new URL(returnTo, request.url));

    // Clear authentication cookies
    BackendAuthService.clearAuthCookies(response);

    console.log('✅ Backend logout successful, redirecting to:', returnTo);
    return response;

  } catch (error) {
    console.error('❌ Backend logout error:', error);
    return NextResponse.redirect(new URL('/', request.url));
  }
} 