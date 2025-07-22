import { NextRequest, NextResponse } from 'next/server';
import { auth0Config } from '@/shared/lib/auth0';

/**
 * Auth0 Login Route
 * GET /auth/login
 * 
 * Redirects user to Auth0 Universal Login page
 */
export async function GET(request: NextRequest) {
  try {
    console.log('🔐 Auth0 login request received');

    const { searchParams } = new URL(request.url);
    const returnTo = searchParams.get('returnTo') || '/api/auth/callback';
    const screenHint = searchParams.get('screen_hint'); // 'signup' for registration

    // Build Auth0 authorization URL
    const authUrl = new URL('/authorize', auth0Config.issuerBaseURL!);
    
    authUrl.searchParams.append('response_type', 'code');
    authUrl.searchParams.append('client_id', auth0Config.clientID!);
    authUrl.searchParams.append('redirect_uri', `${auth0Config.baseURL}/api/auth/callback`);
    authUrl.searchParams.append('scope', auth0Config.authorizationParams?.scope || 'openid profile email');
    
    if (auth0Config.authorizationParams?.audience) {
      authUrl.searchParams.append('audience', auth0Config.authorizationParams.audience);
    }
    
    if (screenHint) {
      authUrl.searchParams.append('screen_hint', screenHint);
    }

    // Add state parameter for security (optional but recommended)
    const state = Buffer.from(JSON.stringify({ returnTo })).toString('base64');
    authUrl.searchParams.append('state', state);

    console.log('➡️ Redirecting to Auth0:', authUrl.toString());
    
    return NextResponse.redirect(authUrl.toString());

  } catch (error) {
    console.error('❌ Auth0 login error:', error);
    return NextResponse.json(
      { error: 'Login failed' },
      { status: 500 }
    );
  }
} 