import { NextResponse, type NextRequest } from 'next/server';
import { auth0 } from '@/shared/lib/auth0';
import { AuthMiddleware } from '@/shared/lib/auth/auth-middleware';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip middleware for static files and assets
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon') ||
    pathname.includes('.') ||
    pathname.startsWith('/api/_')
  ) {
    return NextResponse.next();
  }

  // Handle custom callback route separately
  if (pathname === '/api/auth/callback') {
    return NextResponse.next();
  }

  // Let Auth0 middleware handle Auth0 routes
  if (pathname.startsWith('/auth')) {
    return await auth0.middleware(request);
  }

  // Protected pages that require authentication
  // Note: These are now also protected by InternalPageTemplate, 
  // but middleware provides additional server-side protection
  const protectedPages = [
    '/dashboard',
    '/profile', 
    '/subscriptions',
    '/appointments',
    '/test-auth-protection',
    '/test-scenarios/protected',
    '/test-scenarios/dashboard-test'
  ];

  if (protectedPages.some(page => pathname.startsWith(page))) {
    return await AuthMiddleware.protectedRoute(request);
  }

  // Backend-only routes (require backend JWT)
  const backendOnlyRoutes = [
    '/api/auth/backend/',
    '/test-scenarios/backend-only'
  ];

  if (backendOnlyRoutes.some(route => pathname.startsWith(route))) {
    return await AuthMiddleware.backendOnly(request);
  }

  // Auth0-only routes (require Auth0 session)
  const auth0OnlyRoutes = [
    '/test-scenarios/auth0-only'
  ];

  if (auth0OnlyRoutes.some(route => pathname.startsWith(route))) {
    return await AuthMiddleware.auth0Only(request);
  }

  // Protected API routes
  const protectedAPIRoutes = [
    '/api/patients/my',
    '/api/subscriptions/my',
    '/api/payments',
    '/api/complete-patient-flow',
    '/api/check-eligibility'
  ];

  if (protectedAPIRoutes.some(route => pathname.startsWith(route))) {
    return await AuthMiddleware.protectedAPI(request);
  }

  // Flexible routes (anonymous or authenticated) - for testing and onboarding
  const flexibleRoutes = [
    '/api/progress',
    '/api/form-data',
    '/onboarding',
    '/test-scenarios/flexible',
    '/test-scenarios/progress-test',
    '/test-scenarios/anonymous-onboarding',
    '/test-frontend-auth',
    '/test-auth-sync'
  ];

  if (flexibleRoutes.some(route => pathname.startsWith(route))) {
    return await AuthMiddleware.flexible(request);
  }

  // Default: pass through
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
} 