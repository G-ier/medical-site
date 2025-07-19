import { UserService } from './user-service'
import { ProgressService } from './progress-service'
import { type User } from './client'

/**
 * Auth Service - Orchestrates Auth0 Integration
 * Combines user creation with anonymous session migration
 * Level 4 Implementation: Auth0 + User in DB
 */
export class AuthService {
  
  /**
   * Main callback handler - processes Auth0 callback with optional migration
   * Called from /api/auth/callback route
   */
  static async handleAuth0Callback(
    auth0User: {
      sub: string
      email: string
      name?: string
      picture?: string
    },
    anonymousSessionToken?: string
  ): Promise<{
    success: boolean
    user?: User
    migrationResult?: {
      success: boolean
      error?: string
    }
    error?: string
  }> {
    try {
      console.log('🔄 Processing Auth0 callback for:', auth0User.email)
      
      // Step 1: Find or create user from Auth0 data
      const user = await UserService.findOrCreateUser(auth0User)
      
      // Step 2: Migrate anonymous session if token provided
      let migrationResult
      if (anonymousSessionToken) {
        console.log('🔀 Migrating anonymous session...', anonymousSessionToken)
        migrationResult = await ProgressService.migrateAnonymousToUser(
          anonymousSessionToken,
          user.id
        )
        
        if (migrationResult.success) {
          console.log('✅ Anonymous session migrated successfully')
        } else {
          console.log('⚠️ Anonymous session migration failed:', migrationResult.error)
        }
      }
      
      return {
        success: true,
        user,
        migrationResult
      }
      
    } catch (error) {
      console.error('❌ Auth0 callback processing failed:', error)
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      }
    }
  }
  
  /**
   * Get user session identifier for API calls
   */
  static getUserSessionIdentifier(userId: number): {
    type: 'authenticated'
    userId: number
  } {
    return {
      type: 'authenticated',
      userId
    }
  }
  
  /**
   * Get anonymous session identifier for API calls
   */
  static getAnonymousSessionIdentifier(sessionToken: string): {
    type: 'anonymous'
    sessionToken: string
  } {
    return {
      type: 'anonymous',
      sessionToken
    }
  }
  
  /**
   * Create new anonymous session for onboarding start
   */
  static async startAnonymousOnboarding(
    initialStepId?: string,
    initialData?: Record<string, any>
  ): Promise<{
    success: boolean
    sessionToken?: string
    error?: string
  }> {
    try {
      const result = await ProgressService.createAnonymousSession(
        initialStepId,
        initialData
      )
      
      return {
        success: true,
        sessionToken: result.sessionToken
      }
      
    } catch (error) {
      console.error('❌ Failed to start anonymous onboarding:', error)
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      }
    }
  }
  
  /**
   * Get user profile with onboarding status
   * Used by dashboard
   */
  static async getUserDashboardData(userId: number): Promise<{
    success: boolean
    profile?: {
      user: User
      progressSummary?: {
        currentStepId: string | null
        completedSteps: string[]  
        lastUpdated: Date
      }
    }
    error?: string
  }> {
    try {
      const profile = await UserService.getUserProfile(userId)
      
      if (!profile) {
        return {
          success: false,
          error: 'User not found'
        }
      }
      
      return {
        success: true,
        profile: {
          user: profile as unknown as User,
          progressSummary: {
            currentStepId: null,
            completedSteps: [],
            lastUpdated: new Date(),
          }
        }
      }
      
    } catch (error) {
      console.error('❌ Failed to get user dashboard data:', error)
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      }
    }
  }
  
  /**
   * Validate and get session type from headers
   * Used by API routes to determine session type
   */
  static parseSessionFromHeaders(headers: {
    'x-session-token'?: string
    authorization?: string
  }): {
    type: 'anonymous' | 'authenticated' | 'none'
    identifier?: {
      type: 'anonymous'
      sessionToken: string
    } | {
      type: 'authenticated'
      userId: number
    }
  } {
    // Check for anonymous session token
    if (headers['x-session-token']) {
      return {
        type: 'anonymous',
        identifier: {
          type: 'anonymous',
          sessionToken: headers['x-session-token']
        }
      }
    }
    
    // Check for Auth0 authorization (this would be handled by Auth0 middleware)
    // For now, just return structure - actual Auth0 user ID extraction
    // would be done in the API route using getSession()
    if (headers.authorization) {
      return {
        type: 'authenticated'
        // identifier will be set by API route after Auth0 validation
      }
    }
    
    return { type: 'none' }
  }
  
  /**
   * Cleanup expired sessions (should be called periodically)
   */
  static async cleanupExpiredSessions(): Promise<{
    success: boolean
    cleanedCount?: number
    error?: string
  }> {
    try {
      const cleanedCount = await ProgressService.cleanupExpiredSessions()
      
      return {
        success: true,
        cleanedCount
      }
      
    } catch (error) {
      console.error('❌ Failed to cleanup expired sessions:', error)
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      }
    }
  }
  
  /**
   * Helper to extract Auth0 user data from Auth0 profile
   */
  static extractAuth0UserData(auth0Profile: any): {
    sub: string
    email: string
    name?: string
    picture?: string
  } {
    return {
      sub: auth0Profile.sub,
      email: auth0Profile.email,
      name: auth0Profile.name || auth0Profile.nickname,
      picture: auth0Profile.picture
    }
  }
} 