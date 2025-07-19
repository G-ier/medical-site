import { NextRequest, NextResponse } from 'next/server';
import { BackendAuthService, type AuthenticatedUser } from './backend-auth-service';
import { UserService } from '../database/user-service';
import { PatientService } from '../database/patient-service';

/**
 * API Authentication Helper Results
 */
export interface AuthResult {
  success: boolean;
  user?: AuthenticatedUser;
  dbUser?: any;
  error?: string;
  statusCode?: number;
}

export interface AuthWithPatientResult extends AuthResult {
  patient?: any;
}

/**
 * Get authenticated user from JWT cookies
 * Replaces the /auth/profile fetch pattern
 */
export async function getAuthenticatedUser(request: NextRequest): Promise<AuthResult> {
  try {
    // Validate JWT token from cookies
    const validation = await BackendAuthService.validateRequest(request);
    
    if (!validation.isAuthenticated || !validation.user) {
      return {
        success: false,
        error: 'Authentication required',
        statusCode: 401
      };
    }

    // Get full user data from database
    const dbUser = await UserService.findUserById(validation.user.userId);
    if (!dbUser) {
      return {
        success: false,
        error: 'User not found in database',
        statusCode: 404
      };
    }

    return {
      success: true,
      user: validation.user,
      dbUser
    };

  } catch (error) {
    console.error('❌ getAuthenticatedUser failed:', error);
    return {
      success: false,
      error: 'Authentication failed',
      statusCode: 500
    };
  }
}

/**
 * Get authenticated user with patient data
 * Common pattern for APIs that need patient information
 */
export async function getAuthenticatedUserWithPatient(request: NextRequest): Promise<AuthWithPatientResult> {
  try {
    const authResult = await getAuthenticatedUser(request);
    
    if (!authResult.success) {
      return authResult;
    }

    // Get patient data for the user
    const patient = await PatientService.getPatientByUserId(authResult.dbUser!.id);
    
    return {
      ...authResult,
      patient
    };

  } catch (error) {
    console.error('❌ getAuthenticatedUserWithPatient failed:', error);
    return {
      success: false,
      error: 'Failed to get user with patient data',
      statusCode: 500
    };
  }
}

/**
 * Middleware-style authentication checker
 * Returns NextResponse with error if not authenticated
 */
export async function requireAuth(request: NextRequest): Promise<{
  authResult: AuthResult;
  errorResponse?: NextResponse;
}> {
  const authResult = await getAuthenticatedUser(request);
  
  if (!authResult.success) {
    const errorResponse = NextResponse.json({
      error: authResult.error || 'Authentication required'
    }, { status: authResult.statusCode || 401 });
    
    return { authResult, errorResponse };
  }
  
  return { authResult };
}

/**
 * Middleware-style authentication checker with patient data
 * Returns NextResponse with error if not authenticated or no patient found
 */
export async function requireAuthWithPatient(request: NextRequest): Promise<{
  authResult: AuthWithPatientResult;
  errorResponse?: NextResponse;
}> {
  const authResult = await getAuthenticatedUserWithPatient(request);
  
  if (!authResult.success) {
    const errorResponse = NextResponse.json({
      error: authResult.error || 'Authentication required'
    }, { status: authResult.statusCode || 401 });
    
    return { authResult, errorResponse };
  }
  
  if (!authResult.patient) {
    const errorResponse = NextResponse.json({
      error: 'Patient not found'
    }, { status: 404 });
    
    return { authResult, errorResponse };
  }
  
  return { authResult };
}

/**
 * Handle authentication errors consistently
 */
export function handleAuthError(error: any, context: string): NextResponse {
  console.error(`❌ ${context} authentication error:`, error);
  
  const errorMessage = error instanceof Error ? error.message : 'Authentication failed';
  
  return NextResponse.json({
    error: errorMessage,
    context
  }, { status: 500 });
}

/**
 * Legacy compatibility helper for gradual migration
 * Tries JWT first, falls back to /auth/profile if needed
 */
export async function getAuthenticatedUserLegacy(request: NextRequest): Promise<AuthResult> {
  try {
    // Try new JWT method first
    const jwtResult = await getAuthenticatedUser(request);
    if (jwtResult.success) {
      return jwtResult;
    }

    // Fallback to /auth/profile method
    console.log('⚠️ Falling back to /auth/profile method');
    
    const profileResponse = await fetch(new URL('/auth/profile', request.url), {
      headers: {
        'cookie': request.headers.get('cookie') || ''
      }
    });

    if (!profileResponse.ok) {
      return {
        success: false,
        error: 'User not authenticated via legacy method',
        statusCode: 401
      };
    }

    const userProfile = await profileResponse.json();
    const dbUser = await UserService.findUserByAuth0Id(userProfile.sub);
    
    if (!dbUser) {
      return {
        success: false,
        error: 'User not found in database',
        statusCode: 404
      };
    }

    return {
      success: true,
      user: {
        userId: dbUser.id,
        email: dbUser.email,
        name: dbUser.name || undefined,
        picture: dbUser.picture || undefined,
        auth0UserId: dbUser.auth0UserId
      },
      dbUser
    };

  } catch (error) {
    console.error('❌ getAuthenticatedUserLegacy failed:', error);
    return {
      success: false,
      error: 'Authentication failed',
      statusCode: 500
    };
  }
}

/**
 * Migration helper - logs when legacy method is used
 */
export function logAuthMethodUsage(method: 'jwt' | 'legacy', endpoint: string): void {
  if (method === 'legacy') {
    console.warn(`⚠️ API ${endpoint} is using legacy /auth/profile method`);
  } else {
    console.log(`✅ API ${endpoint} is using modern JWT cookie method`);
  }
} 