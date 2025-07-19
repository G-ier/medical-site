'use client';

import React, { ReactNode } from 'react';
import { BackendAuthGuard } from '../../components/backend-auth-guard';
import { BackendAuthProvider } from '../../contexts/backend-auth-context';

interface ProtectedInternalContentProps {
  children: ReactNode;
  requireAuth?: boolean;
  redirectTo?: string;
}

/**
 * Protected Internal Content Wrapper
 * Provides authentication context and guards for internal pages
 */
export function ProtectedInternalContent({ 
  children, 
  requireAuth = true, 
  redirectTo = '/auth/login' 
}: ProtectedInternalContentProps) {
  return (
    <BackendAuthProvider>
      <BackendAuthGuard 
        requireAuth={requireAuth} 
        redirectTo={redirectTo}
      >
        {children}
      </BackendAuthGuard>
    </BackendAuthProvider>
  );
} 