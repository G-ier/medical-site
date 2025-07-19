import { NextRequest, NextResponse } from 'next/server';

/**
 * Set Migration Token API
 * Sets anonymous session token in cookie before Auth0 login
 */
export async function POST(request: NextRequest) {
  try {
    const { migrationToken } = await request.json();
    
    if (!migrationToken) {
      return NextResponse.json(
        { error: 'Migration token is required' },
        { status: 400 }
      );
    }
    
    // Create response with cookie
    const response = NextResponse.json({ success: true });
    
    const cookieSecureEnv = process.env.COOKIE_SECURE;
    const isCookieSecure = typeof cookieSecureEnv === 'string' ? cookieSecureEnv === 'true' : process.env.NODE_ENV === 'production';
    
    // Set migration token in cookie for 10 minutes (enough for Auth0 flow)
    response.cookies.set('migration_token', migrationToken, {
      httpOnly: true,
      secure: isCookieSecure,
      sameSite: 'lax',
      maxAge: 10 * 60, // 10 minutes
      path: '/'
    });
    
    console.log('🔑 Migration token set in cookie:', migrationToken.substring(0, 8) + '...');
    
    return response;
    
  } catch (error) {
    console.error('❌ Failed to set migration token:', error);
    return NextResponse.json(
      { error: 'Failed to set migration token' },
      { status: 500 }
    );
  }
} 