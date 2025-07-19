// Backend Authentication Hook
export { useBackendAuth } from '@/shared/hooks/use-backend-auth';

// Auth Integration Utilities
export {
  getAuth0Token,
  isAuth0Authenticated,
  getAuth0UserEmail,
  getAuth0UserProfile,
  getMigrationToken,
  setMigrationToken,
  clearMigrationToken,
  isBackendAuthenticated,
  checkAuthSynchronization,
  autoLogin,
  loginWithAuth0Integration,
  enhancedLogout,
  backendOnlyLogout,
  auth0OnlyLogout,
  redirectToLogin,
  redirectToSignup,
  getPostLoginRedirect
} from '@/shared/utils/auth-integration'; 

// Auth Components
export { BackendAuthProvider } from '@/shared/contexts/backend-auth-context';
export { BackendAuthGuard } from '@/shared/components/backend-auth-guard';
export { ProtectedInternalContent } from '@/shared/ui/templates/protected-internal-content';

// Auth Context Hook
export { useBackendAuthContext } from '@/shared/contexts/backend-auth-context'; 