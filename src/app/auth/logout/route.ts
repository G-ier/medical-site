import { NextRequest, NextResponse } from 'next/server';
import { auth0Config } from '@/shared/lib/auth0';

/**
 * Auth0 Logout Route
 * GET /auth/logout
 * 
 * Clears session and redirects to Auth0 logout
 */
export async function GET(request: NextRequest) {
  try {
    console.log('🚪 Auth0 logout request received');

    const { searchParams } = new URL(request.url);
    const returnTo = searchParams.get('returnTo') || auth0Config.baseURL;

    // Build Auth0 logout URL
    const logoutUrl = new URL('/v2/logout', auth0Config.issuerBaseURL!);
    logoutUrl.searchParams.append('client_id', auth0Config.clientID!);
    logoutUrl.searchParams.append('returnTo', returnTo!);

    // Create response that redirects to Auth0 logout
    const response = NextResponse.redirect(logoutUrl.toString());

    // Clear any local session cookies
    response.cookies.delete('auth0_session');
    response.cookies.delete('access_token');
    response.cookies.delete('refresh_token');
    response.cookies.delete('migration_token');

    console.log('➡️ Redirecting to Auth0 logout:', logoutUrl.toString());
    
    return response;

  } catch (error) {
    console.error('❌ Auth0 logout error:', error);
    // Fallback: redirect to home
    return NextResponse.redirect(new URL('/', request.url));
  }
} 