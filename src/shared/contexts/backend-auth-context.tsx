'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { useBackendAuth, BackendAuthState, BackendAuthActions } from '../hooks/use-backend-auth';

type BackendAuthContextType = BackendAuthState & BackendAuthActions;

const BackendAuthContext = createContext<BackendAuthContextType | undefined>(undefined);

interface BackendAuthProviderProps {
  children: ReactNode;
}

/**
 * Backend Authentication Context Provider
 * Provides backend authentication state and actions to the entire app
 */
export function BackendAuthProvider({ children }: BackendAuthProviderProps) {
  const auth = useBackendAuth();

  return (
    <BackendAuthContext.Provider value={auth}>
      {children}
    </BackendAuthContext.Provider>
  );
}

/**
 * Hook to use backend authentication context
 * Must be used within BackendAuthProvider
 */
export function useBackendAuthContext(): BackendAuthContextType {
  const context = useContext(BackendAuthContext);
  
  if (context === undefined) {
    throw new Error('useBackendAuthContext must be used within a BackendAuthProvider');
  }
  
  return context;
}

/**
 * HOC to wrap components that require backend authentication
 */
export function withBackendAuth<P extends object>(
  Component: React.ComponentType<P>
): React.ComponentType<P> {
  return function BackendAuthWrappedComponent(props: P) {
    return (
      <BackendAuthProvider>
        <Component {...props} />
      </BackendAuthProvider>
    );
  };
} 