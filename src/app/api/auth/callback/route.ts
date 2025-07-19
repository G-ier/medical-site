import { NextRequest, NextResponse } from 'next/server';
import { AuthService } from '@/shared/lib/database/auth-service';
import { UserService } from '@/shared/lib/database/user-service';
import { JWTUtils } from '@/shared/lib/auth/jwt';
import { ProgressService } from '@/shared/lib/database';

/**
 * Smart Auth0 Callback Handler
 * Handles user creation, progress checking, and intelligent routing
 * Updated to create backend JWT tokens for complete authentication
 */
export async function GET(request: NextRequest) {
  const host = request.headers.get('host');
  const forwardedHost = request.headers.get('x-forwarded-host');
  const actualHost = forwardedHost || host;
  const protocol = request.headers.get('x-forwarded-proto') || 'https';
  const baseUrl = `${protocol}://${actualHost}`;

  console.log('request.url', request.url)
  console.log('🌐 protocol:', protocol);
  console.log('🌐 Actual host:', actualHost);
  console.log('🌐 Original host:', host);
  console.log('🌐 Base URL:', baseUrl);

  try {
    // Step 1: Get user profile from Auth0
    // NOTE: This is a special case where we need /auth/profile during the Auth0 callback flow
    // This is the initial authentication process, not a regular API call


    const profileResponse = await fetch(new URL('/auth/profile', baseUrl), {
      headers: {
        'cookie': request.headers.get('cookie') || ''
      }
    });

    if (!profileResponse.ok) {
      console.error('❌ Failed to get Auth0 profile');
      return NextResponse.redirect(new URL('/auth/failed?error=profile_failed', request.url));
    }

    const userProfile = await profileResponse.json();
    console.log('👤 User profile retrieved:', userProfile.email);

    // Step 2: Check if user already exists
    const user = await UserService.findUserByAuth0Id(userProfile.sub);

    if (user) {      
      // --- Associate userId with progressSession if session token exists ---
      // Try to get session token from cookie or query
      const sessionToken = request.cookies.get('migration_token')?.value ||
        request.nextUrl.searchParams.get('session_id') ||
        undefined;
      if (sessionToken) {
        try {
          const migrationResult = await ProgressService.migrateAnonymousToUser(sessionToken, user.id);
          if (migrationResult.success) {
            console.log('🔗 Associated userId with progressSession:', sessionToken);
          } else {
            console.warn('⚠️ Could not associate userId with progressSession:', migrationResult.error);
          }
        } catch (err) {
          console.error('❌ Error associating userId with progressSession:', err);
        }
      }
      
      // Check user's onboarding status
      const userProfileData = await UserService.getUserProfile(user.id);
      
      console.log('🔍 User profile data:', userProfileData)
      if (userProfileData) {        
        // Create backend JWT tokens for existing user
        const tokens = await JWTUtils.generateTokenPair(
          user.id,
          user.email,
          user.auth0UserId
        );

        let redirectUrl = '/onboarding';
        
        if (userProfileData.progressSummary.isCompleted) {
          redirectUrl = '/dashboard';
        } else {
          redirectUrl = '/onboarding';
        }

        // Create response with JWT tokens
        const response = NextResponse.redirect(new URL(redirectUrl, baseUrl));
        
        // Set authentication cookies
        
        const cookieSecureEnv = process.env.COOKIE_SECURE;
        const isCookieSecure = typeof cookieSecureEnv === 'string' ? cookieSecureEnv === 'true' : process.env.NODE_ENV === 'production';
        response.cookies.set('access_token', tokens.accessToken, {
          httpOnly: true,
          secure: isCookieSecure,
          sameSite: 'lax',
          maxAge: tokens.expiresIn,
          path: '/'
        });

        response.cookies.set('refresh_token', tokens.refreshToken, {
          httpOnly: true,
          secure: isCookieSecure,
          sameSite: 'lax',
          maxAge: 30 * 24 * 60 * 60, // 30 days
          path: '/'
        });

        console.log('✅ Backend JWT tokens created for existing user');
        return response;
      } else {
        // Fallback if we can't get user profile data
        console.log('⚠️ Could not get user profile data, redirecting to onboarding');
        
        // Still create JWT tokens
        const tokens = await JWTUtils.generateTokenPair(
          user.id,
          user.email,
          user.auth0UserId
        );

        const response = NextResponse.redirect(new URL('/onboarding', baseUrl));
        
        // Set authentication cookies
        
        const cookieSecureEnv = process.env.COOKIE_SECURE;
        const isCookieSecure = typeof cookieSecureEnv === 'string' ? cookieSecureEnv === 'true' : process.env.NODE_ENV === 'production';
        response.cookies.set('access_token', tokens.accessToken, {
          httpOnly: true,
          secure: isCookieSecure,
          sameSite: 'lax',
          maxAge: tokens.expiresIn,
          path: '/'
        });

        response.cookies.set('refresh_token', tokens.refreshToken, {
          httpOnly: true,
          secure: isCookieSecure,
          sameSite: 'lax',
          maxAge: 30 * 24 * 60 * 60, // 30 days
          path: '/'
        });

        return response;
      }
    }

    // Step 3: New user - handle migration token for anonymous session
    console.log('🆕 New user, handling migration token...');
    
    const migrationToken = request.cookies.get('migration_token')?.value ||
      request.nextUrl.searchParams.get('session_id') ||
      undefined;
    console.log('🔑 Migration token:', migrationToken ? 'Found' : 'Not found');
    console.log('📍 Source:', request.cookies.get('migration_token')?.value ? 'Cookie' : 'Query parameter');

    if (!migrationToken) {
      console.log('⚠️ No migration token found for new user, creating user without migration');
      
      // Create user without migration
      const result = await AuthService.handleAuth0Callback(
        {
          sub: userProfile.sub,
          email: userProfile.email,
          name: userProfile.name,
          picture: userProfile.picture
        }
      );

      if (!result.success) {
        console.error('❌ User creation failed:', result.error);
        return NextResponse.redirect(new URL('/auth/failed?error=user_creation_failed', baseUrl));
      }

      console.log('✅ New user created successfully:', result.user?.email);
      
      // Create JWT tokens for new user
      const tokens = await JWTUtils.generateTokenPair(
        result.user!.id,
        result.user!.email,
        result.user!.auth0UserId!
      );

      const response = NextResponse.redirect(new URL('/onboarding', baseUrl));
      
      // Set authentication cookies
      
      const cookieSecureEnv = process.env.COOKIE_SECURE;
      const isCookieSecure = typeof cookieSecureEnv === 'string' ? cookieSecureEnv === 'true' : process.env.NODE_ENV === 'production';
      response.cookies.set('access_token', tokens.accessToken, {
        httpOnly: true,
        secure: isCookieSecure,
        sameSite: 'lax',
        maxAge: tokens.expiresIn,
        path: '/'
      });

      response.cookies.set('refresh_token', tokens.refreshToken, {
        httpOnly: true,
        secure: isCookieSecure,
        sameSite: 'lax',
        maxAge: 30 * 24 * 60 * 60, // 30 days
        path: '/'
      });

      return response;
    }

    // Step 4: New user with migration token
    const result = await AuthService.handleAuth0Callback(
      {
        sub: userProfile.sub,
        email: userProfile.email,
        name: userProfile.name,
        picture: userProfile.picture
      },
      migrationToken
    );

    if (!result.success) {
      console.error('❌ User processing failed:', result.error);
      return NextResponse.redirect(new URL('/auth/failed?error=user_processing_failed', baseUrl));
    }

    console.log('✅ User processed successfully:', result.user?.email);

    if (result.migrationResult?.success) {
      console.log('🔄 Anonymous session migrated successfully');
    }

    // Create JWT tokens for new user with migration
    const tokens = await JWTUtils.generateTokenPair(
      result.user!.id,
      result.user!.email,
      result.user!.auth0UserId!
    );

    const response = NextResponse.redirect(new URL('/onboarding', baseUrl));

    // Set authentication cookies
    
    const cookieSecureEnv = process.env.COOKIE_SECURE;
    const isCookieSecure = typeof cookieSecureEnv === 'string' ? cookieSecureEnv === 'true' : process.env.NODE_ENV === 'production';
    response.cookies.set('access_token', tokens.accessToken, {
      httpOnly: true,
      secure: isCookieSecure,
      sameSite: 'lax',
      maxAge: tokens.expiresIn,
      path: '/'
    });

    response.cookies.set('refresh_token', tokens.refreshToken, {
      httpOnly: true,
      secure: isCookieSecure,
      sameSite: 'lax',
      maxAge: 30 * 24 * 60 * 60, // 30 days
      path: '/'
    });

    // Clear migration token cookie if it was used
    if (migrationToken) {
      response.cookies.delete('migration_token');
      console.log('🧹 Migration token cleared');
    }

    console.log('✅ Backend JWT tokens created for new user with migration');
    console.log('➡️ Redirecting to:', '/onboarding');
    return response;

  } catch (error) {
    console.error('❌ Smart callback error:', error);
    return NextResponse.redirect(new URL('/auth/failed?error=callback_failed', baseUrl));
  }
}