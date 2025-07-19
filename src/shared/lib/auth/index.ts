// JWT utilities
export { JWTUtils, type JWTPayload, type TokenPair } from './jwt';

// Backend authentication service
export { 
  BackendAuthService,
  type AuthenticatedUser,
  type LoginRequest,
  type LoginResponse,
  type RegisterRequest,
  type RegisterResponse
} from './backend-auth-service';

// Re-export existing Auth0 utilities for backward compatibility
export { auth0 } from '../auth0'; 