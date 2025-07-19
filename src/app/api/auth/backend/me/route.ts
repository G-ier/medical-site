import { NextRequest, NextResponse } from 'next/server';
import { BackendAuthService } from '@/shared/lib/auth/backend-auth-service';

/**
 * Backend Me API
 * GET /api/auth/backend/me
 * 
 * Returns current authenticated user information using backend authentication
 */
export async function GET(request: NextRequest) {
  try {
    console.log('👤 Backend me request received');

    // Validate request and get user
    const validation = await BackendAuthService.validateRequest(request);

    if (!validation.isAuthenticated) {
      return NextResponse.json(
        { error: validation.error || 'Not authenticated' },
        { status: 401 }
      );
    }

    console.log('✅ Backend me successful for:', validation.user?.email);
    return NextResponse.json({
      success: true,
      user: validation.user
    });

  } catch (error) {
    console.error('❌ Backend me error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 