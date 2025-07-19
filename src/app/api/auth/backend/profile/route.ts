import { NextRequest, NextResponse } from 'next/server';
import { BackendAuthService } from '@/shared/lib/auth/backend-auth-service';
import { AuthService } from '@/shared/lib/database/auth-service';

/**
 * Get User Profile API
 * GET /api/auth/backend/profile
 * 
 * Returns user profile data including onboarding status
 */
export async function GET(request: NextRequest) {
  try {
    console.log('👤 Profile request received');

    // Validate user authentication
    const userContext = await BackendAuthService.validateRequest(request);
    
    if (!userContext.isAuthenticated || !userContext.user) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    // Get detailed user profile with onboarding status
    const profileResult = await AuthService.getUserDashboardData(userContext.user.userId);

    if (!profileResult.success) {
      return NextResponse.json(
        { error: profileResult.error || 'Failed to get profile' },
        { status: 500 }
      );
    }

    console.log('✅ Profile retrieved for:', userContext.user.email);
    
    return NextResponse.json({
      success: true,
      profile: profileResult.profile
    });

  } catch (error) {
    console.error('❌ Profile error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 