(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/[root-of-the-server]__e093a6de._.js", {

"[externals]/node:buffer [external] (node:buffer, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}}),
"[project]/src/shared/lib/auth/jwt.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "JWTUtils": (()=>JWTUtils)
});
// JWT Configuration
const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-in-production';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';
const JWT_REFRESH_EXPIRES_IN = process.env.JWT_REFRESH_EXPIRES_IN || '30d';
class JWTUtils {
    /**
   * Generate access and refresh token pair
   */ static async generateTokenPair(userId, email, auth0UserId) {
        const now = Math.floor(Date.now() / 1000);
        const accessExpiry = now + this.getExpirationTime(JWT_EXPIRES_IN);
        const refreshExpiry = now + this.getExpirationTime(JWT_REFRESH_EXPIRES_IN);
        const accessPayload = {
            userId,
            email,
            auth0UserId,
            type: 'access',
            iat: now,
            exp: accessExpiry
        };
        const refreshPayload = {
            userId,
            email,
            auth0UserId,
            type: 'refresh',
            iat: now,
            exp: refreshExpiry
        };
        const [accessToken, refreshToken] = await Promise.all([
            this.signToken(accessPayload),
            this.signToken(refreshPayload)
        ]);
        return {
            accessToken,
            refreshToken,
            expiresIn: this.getExpirationTime(JWT_EXPIRES_IN)
        };
    }
    /**
   * Sign JWT token using Web Crypto API
   */ static async signToken(payload) {
        const header = {
            alg: 'HS256',
            typ: 'JWT'
        };
        const encodedHeader = this.base64UrlEncode(JSON.stringify(header));
        const encodedPayload = this.base64UrlEncode(JSON.stringify(payload));
        const data = `${encodedHeader}.${encodedPayload}`;
        const signature = await this.hmacSign(data, JWT_SECRET);
        const encodedSignature = this.base64UrlEncode(signature);
        return `${data}.${encodedSignature}`;
    }
    /**
   * Verify and decode JWT token using Web Crypto API
   */ static async verifyToken(token) {
        try {
            const parts = token.split('.');
            if (parts.length !== 3) {
                return null;
            }
            const [encodedHeader, encodedPayload, encodedSignature] = parts;
            const data = `${encodedHeader}.${encodedPayload}`;
            // Verify signature
            const expectedSignature = await this.hmacSign(data, JWT_SECRET);
            const expectedEncodedSignature = this.base64UrlEncode(expectedSignature);
            if (encodedSignature !== expectedEncodedSignature) {
                return null;
            }
            // Decode payload
            const payload = JSON.parse(this.base64UrlDecode(encodedPayload));
            // Check expiration
            if (payload.exp && Date.now() >= payload.exp * 1000) {
                return null;
            }
            return payload;
        } catch (error) {
            console.error('JWT verification failed:', error);
            return null;
        }
    }
    /**
   * HMAC sign using Web Crypto API
   */ static async hmacSign(data, secret) {
        const encoder = new TextEncoder();
        const keyData = encoder.encode(secret);
        const messageData = encoder.encode(data);
        const key = await crypto.subtle.importKey('raw', keyData, {
            name: 'HMAC',
            hash: 'SHA-256'
        }, false, [
            'sign'
        ]);
        const signature = await crypto.subtle.sign('HMAC', key, messageData);
        return String.fromCharCode(...new Uint8Array(signature));
    }
    /**
   * Base64 URL encode
   */ static base64UrlEncode(str) {
        const base64 = btoa(str);
        return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
    }
    /**
   * Base64 URL decode
   */ static base64UrlDecode(str) {
        // Add padding if needed
        const padded = str + '==='.slice((str.length + 3) % 4);
        const base64 = padded.replace(/-/g, '+').replace(/_/g, '/');
        return atob(base64);
    }
    /**
   * Extract token from Authorization header
   */ static extractTokenFromHeader(authHeader) {
        if (!authHeader) return null;
        const parts = authHeader.split(' ');
        if (parts.length !== 2 || parts[0] !== 'Bearer') {
            return null;
        }
        return parts[1];
    }
    /**
   * Extract token from NextRequest
   */ static extractTokenFromRequest(request) {
        // Try Authorization header first
        const authHeader = request.headers.get('authorization');
        const headerToken = this.extractTokenFromHeader(authHeader);
        if (headerToken) return headerToken;
        // Try cookie as fallback
        const cookieToken = request.cookies.get('access_token')?.value;
        if (cookieToken) return cookieToken;
        return null;
    }
    /**
   * Validate request and extract user info
   */ static async validateRequest(request) {
        const token = this.extractTokenFromRequest(request);
        if (!token) {
            return {
                isValid: false,
                error: 'No token provided'
            };
        }
        const payload = await this.verifyToken(token);
        if (!payload) {
            return {
                isValid: false,
                error: 'Invalid token'
            };
        }
        if (payload.type !== 'access') {
            return {
                isValid: false,
                error: 'Invalid token type'
            };
        }
        return {
            isValid: true,
            user: {
                userId: payload.userId,
                email: payload.email,
                auth0UserId: payload.auth0UserId
            }
        };
    }
    /**
   * Convert time string to seconds
   */ static getExpirationTime(timeString) {
        const unit = timeString.slice(-1);
        const value = parseInt(timeString.slice(0, -1));
        switch(unit){
            case 's':
                return value;
            case 'm':
                return value * 60;
            case 'h':
                return value * 60 * 60;
            case 'd':
                return value * 60 * 60 * 24;
            default:
                return 7 * 24 * 60 * 60; // Default 7 days
        }
    }
    /**
   * Check if token is expired
   */ static isTokenExpired(token) {
        try {
            const parts = token.split('.');
            if (parts.length !== 3) return true;
            const payload = JSON.parse(this.base64UrlDecode(parts[1]));
            if (!payload || !payload.exp) return true;
            return Date.now() >= payload.exp * 1000;
        } catch  {
            return true;
        }
    }
    /**
   * Refresh access token using refresh token
   */ static async refreshAccessToken(refreshToken) {
        const payload = await this.verifyToken(refreshToken);
        if (!payload || payload.type !== 'refresh') {
            return {
                success: false,
                error: 'Invalid refresh token'
            };
        }
        // Generate new access token
        const now = Math.floor(Date.now() / 1000);
        const accessExpiry = now + this.getExpirationTime(JWT_EXPIRES_IN);
        const newAccessPayload = {
            userId: payload.userId,
            email: payload.email,
            auth0UserId: payload.auth0UserId,
            type: 'access',
            iat: now,
            exp: accessExpiry
        };
        try {
            const accessToken = await this.signToken(newAccessPayload);
            return {
                success: true,
                accessToken,
                expiresIn: this.getExpirationTime(JWT_EXPIRES_IN)
            };
        } catch  {
            return {
                success: false,
                error: 'Failed to generate new access token'
            };
        }
    }
}
}}),
"[project]/src/shared/lib/auth0.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// This file exports a simple auth0 config for the custom implementation
// The app doesn't use standard Auth0 SDK routes
__turbopack_context__.s({
    "auth0Config": (()=>auth0Config)
});
const auth0Config = {
    secret: process.env.AUTH0_SECRET,
    baseURL: process.env.AUTH0_BASE_URL,
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
    clientID: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    authorizationParams: {
        response_type: 'code',
        audience: process.env.AUTH0_AUDIENCE,
        scope: process.env.AUTH0_SCOPE || 'openid profile email'
    }
};
}}),
"[project]/src/shared/lib/auth/auth0-integration.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Auth0Integration": (()=>Auth0Integration)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:buffer [external] (node:buffer, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$auth0$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/auth0.ts [middleware-edge] (ecmascript)");
;
class Auth0Integration {
    /**
   * Get Auth0 session from request
   * Note: This is a simplified implementation for the custom Auth0 setup
   */ static async getAuth0Session(request) {
        try {
            // This application uses custom Auth0 implementation
            // Auth0 session is handled through custom callback and JWT tokens
            // For direct Auth0 session checking, we'd need to call the profile endpoint
            const baseUrl = `${request.headers.get('x-forwarded-proto') || 'https'}://${request.headers.get('x-forwarded-host') || request.headers.get('host')}`;
            try {
                const profileResponse = await fetch(new URL('/auth/profile', baseUrl), {
                    headers: {
                        'cookie': request.headers.get('cookie') || ''
                    }
                });
                if (!profileResponse.ok) {
                    return {
                        isAuthenticated: false,
                        error: 'No Auth0 session found'
                    };
                }
                const userProfile = await profileResponse.json();
                return {
                    isAuthenticated: true,
                    user: userProfile
                };
            } catch (fetchError) {
                return {
                    isAuthenticated: false,
                    error: 'Failed to fetch Auth0 profile'
                };
            }
        } catch (error) {
            console.error('❌ Auth0 session error:', error);
            return {
                isAuthenticated: false,
                error: error instanceof Error ? error.message : 'Auth0 session error'
            };
        }
    }
    /**
   * Validate Auth0 access token
   */ static async validateAuth0Token(token) {
        try {
            // In a real implementation, you would verify the JWT token
            // against Auth0's public keys and validate claims
            // For now, we'll decode the token and validate basic structure
            const tokenParts = token.split('.');
            if (tokenParts.length !== 3) {
                return {
                    isValid: false,
                    error: 'Invalid token format'
                };
            }
            // Decode payload
            const payload = JSON.parse(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].from(tokenParts[1], 'base64').toString('utf-8'));
            // Validate required claims
            if (!payload.sub || !payload.email) {
                return {
                    isValid: false,
                    error: 'Missing required claims'
                };
            }
            // Check expiration
            if (payload.exp && Date.now() >= payload.exp * 1000) {
                return {
                    isValid: false,
                    error: 'Token expired'
                };
            }
            // Validate audience and issuer (if configured)
            const expectedAudience = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$auth0$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["auth0Config"].authorizationParams?.audience;
            const expectedIssuer = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$auth0$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["auth0Config"].issuerBaseURL;
            if (expectedAudience && payload.aud !== expectedAudience) {
                return {
                    isValid: false,
                    error: 'Invalid audience'
                };
            }
            if (expectedIssuer && payload.iss !== expectedIssuer) {
                return {
                    isValid: false,
                    error: 'Invalid issuer'
                };
            }
            return {
                isValid: true,
                user: {
                    sub: payload.sub,
                    email: payload.email,
                    name: payload.name,
                    picture: payload.picture,
                    email_verified: payload.email_verified
                }
            };
        } catch (error) {
            console.error('❌ Token validation error:', error);
            return {
                isValid: false,
                error: error instanceof Error ? error.message : 'Token validation failed'
            };
        }
    }
    /**
   * Extract user data from Auth0 session
   */ static extractUserData(auth0User) {
        return {
            sub: auth0User.sub,
            email: auth0User.email,
            name: auth0User.name || auth0User.nickname || undefined,
            picture: auth0User.picture || undefined
        };
    }
    /**
   * Check if user email is verified
   */ static isEmailVerified(auth0User) {
        return auth0User.email_verified === true;
    }
    /**
   * Get Auth0 management API token
   * Used for user management operations
   */ static async getManagementToken() {
        try {
            const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$auth0$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["auth0Config"].issuerBaseURL}/oauth/token`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    client_id: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$auth0$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["auth0Config"].clientID,
                    client_secret: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$auth0$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["auth0Config"].clientSecret,
                    audience: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$auth0$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["auth0Config"].issuerBaseURL}/api/v2/`,
                    grant_type: 'client_credentials'
                })
            });
            if (!response.ok) {
                throw new Error('Failed to get management token');
            }
            const data = await response.json();
            return data.access_token;
        } catch (error) {
            console.error('❌ Failed to get Auth0 management token:', error);
            return null;
        }
    }
    /**
   * Update user metadata in Auth0
   */ static async updateUserMetadata(userId, metadata) {
        try {
            const managementToken = await this.getManagementToken();
            if (!managementToken) {
                throw new Error('Failed to get management token');
            }
            const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$auth0$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["auth0Config"].issuerBaseURL}/api/v2/users/${encodeURIComponent(userId)}`, {
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${managementToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user_metadata: metadata
                })
            });
            return response.ok;
        } catch (error) {
            console.error('❌ Failed to update user metadata:', error);
            return false;
        }
    }
    /**
   * Get user from Auth0 Management API
   */ static async getAuth0User(userId) {
        try {
            const managementToken = await this.getManagementToken();
            if (!managementToken) {
                throw new Error('Failed to get management token');
            }
            const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$auth0$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["auth0Config"].issuerBaseURL}/api/v2/users/${encodeURIComponent(userId)}`, {
                headers: {
                    'Authorization': `Bearer ${managementToken}`,
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Failed to get user from Auth0');
            }
            return await response.json();
        } catch (error) {
            console.error('❌ Failed to get Auth0 user:', error);
            return null;
        }
    }
}
}}),
"[project]/src/shared/lib/auth/auth-middleware.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AuthMiddleware": (()=>AuthMiddleware)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$auth$2f$jwt$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/auth/jwt.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$auth$2f$auth0$2d$integration$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/auth/auth0-integration.ts [middleware-edge] (ecmascript)");
;
;
;
class AuthMiddleware {
    /**
   * Main middleware function with synchronization support
   */ static async authenticate(request, config = {}) {
        const { requireAuth = false, allowAnonymous = true, allowAuth0Only = false, allowBackendOnly = false, redirectTo, checkSync = true } = config;
        // Try different authentication methods in order of preference
        const authResults = await Promise.allSettled([
            this.tryBackendAuth(request),
            this.tryAuth0Auth(request),
            allowAnonymous ? this.tryAnonymousAuth(request) : Promise.resolve(null)
        ]);
        // Extract results
        const backendAuth = authResults[0].status === 'fulfilled' ? authResults[0].value : null;
        const auth0Auth = authResults[1].status === 'fulfilled' ? authResults[1].value : null;
        const anonymousAuth = authResults[2].status === 'fulfilled' ? authResults[2].value : null;
        // Check for synchronization issues if enabled
        let syncIssue;
        if (checkSync && (backendAuth || auth0Auth)) {
            syncIssue = this.checkAuthSynchronization(backendAuth, auth0Auth);
        }
        // Handle synchronization issues
        if (syncIssue) {
            console.log('⚠️ Auth synchronization issue detected:', syncIssue);
            if (syncIssue.action === 'clear_backend') {
                // Clear backend cookies and redirect to login
                const response = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL(redirectTo || '/auth/login', request.url));
                response.cookies.delete('access_token');
                response.cookies.delete('refresh_token');
                return {
                    context: {
                        isAuthenticated: false,
                        authType: 'none',
                        error: 'Authentication cleared due to Auth0 logout',
                        syncIssue
                    },
                    response
                };
            } else if (syncIssue.action === 'redirect_to_auth0') {
                // Redirect to Auth0 callback to sync
                const response = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL('/api/auth/callback', request.url));
                return {
                    context: {
                        isAuthenticated: false,
                        authType: 'none',
                        error: 'Redirecting to sync authentication',
                        syncIssue
                    },
                    response
                };
            } else if (syncIssue.action === 'logout_all') {
                // Clear everything and redirect to login
                const response = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL(redirectTo || '/auth/login', request.url));
                response.cookies.delete('access_token');
                response.cookies.delete('refresh_token');
                return {
                    context: {
                        isAuthenticated: false,
                        authType: 'none',
                        error: 'Authentication error - logged out',
                        syncIssue
                    },
                    response
                };
            }
        }
        // Find the first successful authentication (prioritize backend, then Auth0, then anonymous)
        let context = {
            isAuthenticated: false,
            authType: 'none'
        };
        if (backendAuth && !syncIssue) {
            context = backendAuth;
        } else if (auth0Auth && !syncIssue) {
            context = auth0Auth;
        } else if (anonymousAuth && !syncIssue) {
            context = anonymousAuth;
        }
        // Apply restrictions
        if (allowAuth0Only && context.authType !== 'auth0') {
            context = {
                isAuthenticated: false,
                authType: 'none',
                error: 'Auth0 authentication required'
            };
        }
        if (allowBackendOnly && context.authType !== 'backend') {
            context = {
                isAuthenticated: false,
                authType: 'none',
                error: 'Backend authentication required'
            };
        }
        // Check if authentication is required
        if (requireAuth && !context.isAuthenticated) {
            if (redirectTo) {
                return {
                    context,
                    response: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL(redirectTo, request.url))
                };
            }
            return {
                context,
                response: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: context.error || 'Authentication required'
                }, {
                    status: 401
                })
            };
        }
        // Add auth context to request headers
        const response = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
        if (context.isAuthenticated && context.user) {
            response.headers.set('x-auth-type', context.authType);
            response.headers.set('x-user-id', context.user.userId.toString());
            response.headers.set('x-user-email', context.user.email);
            if (context.sessionToken) {
                response.headers.set('x-session-token', context.sessionToken);
            }
        }
        return {
            context,
            response
        };
    }
    /**
   * Check for authentication synchronization issues
   */ static checkAuthSynchronization(backendAuth, auth0Auth) {
        const hasBackend = backendAuth?.isAuthenticated || false;
        const hasAuth0 = auth0Auth?.isAuthenticated || false;
        console.log('checkAuthSynchronization, hasBackend', hasBackend, 'hasAuth0', hasAuth0);
        // Both authenticated or both not authenticated - in sync
        if (hasBackend === hasAuth0) {
            return undefined;
        }
        // Backend authenticated but Auth0 not - Auth0 session expired/logged out
        if (hasBackend && !hasAuth0) {
            return {
                type: 'auth0_missing',
                action: 'clear_backend'
            };
        }
        // Auth0 authenticated but backend not - need to sync to backend
        if (!hasBackend && hasAuth0) {
            return {
                type: 'backend_missing',
                action: 'redirect_to_auth0'
            };
        }
        // Should not reach here, but handle edge case
        return {
            type: 'both_missing',
            action: 'logout_all'
        };
    }
    /**
   * Try backend JWT authentication - token validation only
   */ static async tryBackendAuth(request) {
        try {
            const validation = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$auth$2f$jwt$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["JWTUtils"].validateRequest(request);
            if (!validation.isValid || !validation.user) {
                return null;
            }
            // Return user data from JWT token (no database lookup)
            return {
                isAuthenticated: true,
                authType: 'backend',
                user: {
                    userId: validation.user.userId,
                    email: validation.user.email,
                    auth0UserId: validation.user.auth0UserId
                }
            };
        } catch (error) {
            console.error('❌ Backend auth error:', error);
            return null;
        }
    }
    /**
   * Try Auth0 authentication - session validation only
   */ static async tryAuth0Auth(request) {
        try {
            const auth0Session = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$auth$2f$auth0$2d$integration$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Auth0Integration"].getAuth0Session(request);
            if (!auth0Session.isAuthenticated || !auth0Session.user) {
                return null;
            }
            // Return Auth0 user data (no database lookup)
            // Note: userId will be 0 as we don't have it from Auth0 session
            return {
                isAuthenticated: true,
                authType: 'auth0',
                user: {
                    userId: 0,
                    email: auth0Session.user.email,
                    name: auth0Session.user.name,
                    picture: auth0Session.user.picture,
                    auth0UserId: auth0Session.user.sub
                }
            };
        } catch (error) {
            console.error('❌ Auth0 auth error:', error);
            return null;
        }
    }
    /**
   * Try anonymous authentication - session token validation only
   */ static async tryAnonymousAuth(request) {
        try {
            // Check for session token in headers or cookies
            const sessionToken = request.headers.get('x-session-token') || request.cookies.get('session_token')?.value;
            if (!sessionToken) {
                return null;
            }
            // For edge runtime, we can't validate the session token against database
            // We'll trust that it exists and let API routes handle validation
            return {
                isAuthenticated: true,
                authType: 'anonymous',
                sessionToken,
                user: {
                    userId: 0,
                    email: 'anonymous@example.com' // Placeholder
                }
            };
        } catch (error) {
            console.error('❌ Anonymous auth error:', error);
            return null;
        }
    }
    /**
   * Create middleware for specific routes
   */ static createMiddleware(config) {
        return async (request)=>{
            const { context, response } = await this.authenticate(request, config);
            // If there's a response (redirect or error), return it
            if (response) {
                console.log(`🔒 Auth middleware: ${request.nextUrl.pathname} - ${context.isAuthenticated ? 'Authenticated' : 'Not authenticated'}`, {
                    authType: context.authType,
                    hasResponse: !!response,
                    status: response.status,
                    syncIssue: context.syncIssue
                });
                return response;
            }
            // Continue to the page
            console.log(`✅ Auth middleware: ${request.nextUrl.pathname} - Access granted`, {
                authType: context.authType,
                isAuthenticated: context.isAuthenticated
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
        };
    }
    /**
   * Middleware for protected routes (requires authentication with sync check)
   */ static protectedRoute = this.createMiddleware({
        requireAuth: true,
        redirectTo: '/auth/login',
        checkSync: true
    });
    /**
   * Middleware for API routes (requires authentication, returns JSON)
   */ static protectedAPI = this.createMiddleware({
        requireAuth: true,
        checkSync: true
    });
    /**
   * Middleware for Auth0-only routes
   */ static auth0Only = this.createMiddleware({
        requireAuth: true,
        allowAuth0Only: true,
        redirectTo: '/auth/login',
        checkSync: false // Don't check sync for Auth0-only routes
    });
    /**
   * Middleware for backend-only routes
   */ static backendOnly = this.createMiddleware({
        requireAuth: true,
        allowBackendOnly: true,
        checkSync: false // Don't check sync for backend-only routes
    });
    /**
   * Middleware for anonymous or authenticated routes
   */ static flexible = this.createMiddleware({
        requireAuth: false,
        allowAnonymous: true,
        checkSync: true
    });
}
}}),
"[project]/src/middleware.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "config": (()=>config),
    "middleware": (()=>middleware)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$auth$2f$auth$2d$middleware$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/auth/auth-middleware.ts [middleware-edge] (ecmascript)");
;
;
async function middleware(request) {
    const { pathname } = request.nextUrl;
    // Skip middleware for static files and assets
    if (pathname.startsWith('/_next') || pathname.startsWith('/favicon') || pathname.includes('.') || pathname.startsWith('/api/_')) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
    // Handle custom callback route separately
    if (pathname === '/api/auth/callback') {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
    // Allow Auth0 routes to function
    if (pathname.startsWith('/auth/')) {
        console.log('🔐 Auth0 route accessed:', pathname);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
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
    if (protectedPages.some((page)=>pathname.startsWith(page))) {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$auth$2f$auth$2d$middleware$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["AuthMiddleware"].protectedRoute(request);
    }
    // Backend-only routes (require backend JWT)
    const backendOnlyRoutes = [
        '/api/auth/backend/',
        '/test-scenarios/backend-only'
    ];
    if (backendOnlyRoutes.some((route)=>pathname.startsWith(route))) {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$auth$2f$auth$2d$middleware$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["AuthMiddleware"].backendOnly(request);
    }
    // Auth0-only routes (require Auth0 session)
    const auth0OnlyRoutes = [
        '/test-scenarios/auth0-only'
    ];
    if (auth0OnlyRoutes.some((route)=>pathname.startsWith(route))) {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$auth$2f$auth$2d$middleware$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["AuthMiddleware"].auth0Only(request);
    }
    // Protected API routes
    const protectedAPIRoutes = [
        '/api/patients/my',
        '/api/subscriptions/my',
        '/api/payments',
        '/api/complete-patient-flow',
        '/api/check-eligibility'
    ];
    if (protectedAPIRoutes.some((route)=>pathname.startsWith(route))) {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$auth$2f$auth$2d$middleware$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["AuthMiddleware"].protectedAPI(request);
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
    if (flexibleRoutes.some((route)=>pathname.startsWith(route))) {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$auth$2f$auth$2d$middleware$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["AuthMiddleware"].flexible(request);
    }
    // Default: pass through
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
}
const config = {
    matcher: [
        /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */ '/((?!_next/static|_next/image|favicon.ico).*)'
    ]
};
}}),
}]);

//# sourceMappingURL=%5Broot-of-the-server%5D__e093a6de._.js.map