import { prisma, type ProgressSession, type UpdateProgressData, type SessionIdentifier } from './client'

/**
 * Progress Service - Unified Session Management
 * Handles progress for both anonymous and authenticated users
 * Level 4 Implementation: Auth0 + User in DB
 */
export class ProgressService {

  /**
   * Generate cryptographically secure session token using Web Crypto API
   */
  static generateSessionToken(): string {
    // Use Web Crypto API for Edge Runtime compatibility
    const array = new Uint8Array(32)
    crypto.getRandomValues(array)
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('')
  }

  /**
   * Create anonymous progress session
   */
  static async createAnonymousSession(
    stepId?: string,
    stepData?: Record<string, any>
  ): Promise<{
    session: ProgressSession
    sessionToken: string
  }> {
    try {
      const sessionToken = this.generateSessionToken()
      const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days

      const session = await prisma.progressSession.create({
        data: {
          sessionToken,
          currentStepId: stepId || null,
          completedSteps: [],
          stepData: stepData || {},
          isAnonymous: true,
          expiresAt
        }
      })

      console.log('🔑 Anonymous session created:', sessionToken.slice(0, 8) + '...')
      return { session, sessionToken }

    } catch (error) {
      console.error('❌ Failed to create anonymous session:', error)
      throw new Error('Failed to create anonymous session')
    }
  }

  /**
   * Create authenticated user session
   */
  static async createUserSession(
    userId: number,
    stepId?: string,
    stepData?: Record<string, any>
  ): Promise<ProgressSession> {
    try {
      const session = await prisma.progressSession.create({
        data: {
          userId,
          currentStepId: stepId || null,
          completedSteps: [],
          stepData: stepData || {},
          isAnonymous: false
        }
      })

      console.log('👤 User session created for user:', userId)
      return session

    } catch (error) {
      console.error('❌ Failed to create user session:', error)
      throw new Error('Failed to create user session')
    }
  }

  /**
   * Find progress session by identifier
   */
  static async findSession(identifier: SessionIdentifier): Promise<ProgressSession | null> {
    try {
      return await prisma.progressSession.findUnique({
        where: {
          sessionToken: identifier.sessionToken,
        }
      })
    } catch (error) {
      console.error('❌ Failed to find session:', error)
      return null
    }
  }

  /**
   * Update progress session
   */
  static async updateProgress(
    identifier: SessionIdentifier,
    data: UpdateProgressData & { markAsCompleted?: boolean }
  ): Promise<ProgressSession | null> {
    try {
      const session = await this.findSession(identifier)
      if (!session) return null

      // Merge step data if provided
      const mergedStepData = data.stepData
        ? { ...(session.stepData as Record<string, any>), ...data.stepData }
        : session.stepData

      const updatedSession = await prisma.progressSession.update({
        where: { id: session.id },
        data: {
          currentStepId: data.currentStepId ?? session.currentStepId,
          completedSteps: data.completedSteps ?? (session.completedSteps as any),
          stepData: mergedStepData as any,
          completed: data.markAsCompleted ?? session.completed,
          updatedAt: new Date()
        }
      })

      console.log(`📝 Progress updated for session ${session.id}${data.markAsCompleted ? ' - marked as completed' : ''}`)
      return updatedSession

    } catch (error) {
      console.error('❌ Failed to update progress:', error)
      return null
    }
  }

  /**
   * Mark onboarding as completed
   */
  static async markOnboardingCompleted(identifier: SessionIdentifier): Promise<{
    success: boolean
    session?: ProgressSession
    error?: string
  }> {
    try {
      console.log('✅ Marking onboarding as completed...')
      
      const session = await this.findSession(identifier)
      if (!session) {
        return { success: false, error: 'Session not found' }
      }

      const updatedSession = await prisma.progressSession.update({
        where: { id: session.id },
        data: {
          completed: true,
          updatedAt: new Date()
        }
      })

      console.log('✅ Onboarding marked as completed for session:', session.id)
      return { success: true, session: updatedSession }

    } catch (error) {
      console.error('❌ Failed to mark onboarding as completed:', error)
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to mark as completed'
      }
    }
  }

  /**
   * Migrate anonymous session to authenticated user
   * Main method called during Auth0 callback
   */
  static async migrateAnonymousToUser(
    sessionToken: string,
    userId: number
  ): Promise<{
    success: boolean
    userSession?: ProgressSession
    error?: string
  }> {
    try {
      console.log('🔀 Starting migration process...')
      console.log('📝 Session token:', sessionToken?.slice(0, 8) + '...')
      console.log('👤 User ID:', userId)

      // Find session by sessionToken (could be anonymous or already migrated)
      const existingSession = await prisma.progressSession.findUnique({
        where: {
          sessionToken: sessionToken
        }
      })

      console.log('🔍 Session search result:', {
        found: !!existingSession,
        sessionId: existingSession?.id,
        isAnonymous: existingSession?.isAnonymous,
        currentUserId: existingSession?.userId,
        stepData: existingSession?.stepData ? Object.keys(existingSession.stepData).length : 0,
        completedSteps: existingSession?.completedSteps ? (existingSession.completedSteps as string[]).length : 0
      })

      if (!existingSession) {
        console.log('❌ No session found with this token')
        return { success: false, error: 'Session not found' }
      }

      // Check if session is already migrated to this user
      if (!existingSession.isAnonymous && existingSession.userId === userId) {
        console.log('✅ Session already migrated to this user')
        return { success: true, userSession: existingSession }
      }

      // Check if session is already migrated to a different user
      if (!existingSession.isAnonymous && existingSession.userId !== userId) {
        console.log('⚠️ Session already migrated to different user:', existingSession.userId)
        return { success: false, error: 'Session belongs to different user' }
      }

      // Only migrate if session is still anonymous
      if (existingSession.isAnonymous) {
        console.log('🔄 Session is anonymous, proceeding with migration...')
      } else {
        console.log('❌ Session is not anonymous and not owned by user')
        return { success: false, error: 'Session is not anonymous' }
      }

      // Prepare migration data
      const mergedStepData = {
        ...(existingSession.stepData as Record<string, any>)
      }

      const anonymousCompleted = existingSession.completedSteps as string[]
      const mergedCompleted = Array.from(new Set([...anonymousCompleted]))

      console.log('🔄 Performing migration update...')
      console.log('📊 Data to migrate:', {
        currentStepId: existingSession.currentStepId,
        completedStepsCount: mergedCompleted.length,
        stepDataKeys: Object.keys(mergedStepData)
      })

      // Update session to be associated with user
      const userSession = await prisma.progressSession.update({
        where: {
          id: existingSession.id  // Use ID instead of sessionToken for more reliable update
        },
        data: {
          userId: userId,
          isAnonymous: false,
          currentStepId: existingSession.currentStepId,
          completedSteps: mergedCompleted as any,
          stepData: mergedStepData as any,
          updatedAt: new Date()
        }
      })

      console.log('✅ Migration completed successfully!')
      console.log('📋 Final session state:', {
        sessionId: userSession.id,
        userId: userSession.userId,
        isAnonymous: userSession.isAnonymous,
        sessionToken: userSession.sessionToken?.slice(0, 8) + '...',
        completedSteps: (userSession.completedSteps as string[]).length
      })

      return { success: true, userSession }

    } catch (error) {
      console.error('❌ Migration failed with error:', error)
      console.error('🔍 Error details:', {
        message: error instanceof Error ? error.message : 'Unknown error',
        sessionToken: sessionToken?.slice(0, 8) + '...',
        userId
      })
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Migration failed'
      }
    }
  }

  /**
   * Check if user has a progress session
   */
  static async getUserSession(userId: number): Promise<ProgressSession | null> {
    try {
      console.log('🔍 Looking for user session, userId:', userId)

      const userSession = await prisma.progressSession.findFirst({
        where: {
          userId: userId,
          isAnonymous: false
        },
        orderBy: {
          updatedAt: 'desc'
        }
      })

      console.log('📋 User session result:', {
        found: !!userSession,
        sessionId: userSession?.id,
        sessionToken: userSession?.sessionToken?.slice(0, 8) + '...',
        completedSteps: userSession?.completedSteps ? (userSession.completedSteps as string[]).length : 0
      })

      return userSession

    } catch (error) {
      console.error('❌ Failed to get user session:', error)
      return null
    }
  }

  /**
   * Clean up expired anonymous sessions
   */
  static async cleanupExpiredSessions(): Promise<number> {
    try {
      const result = await prisma.progressSession.deleteMany({
        where: {
          isAnonymous: true,
          expiresAt: {
            lt: new Date()
          }
        }
      })

      console.log(`🧹 Cleaned up ${result.count} expired sessions`)
      return result.count

    } catch (error) {
      console.error('❌ Failed to cleanup expired sessions:', error)
      return 0
    }
  }

  /**
   * Get progress summary
   */
  static async getProgressSummary(identifier: SessionIdentifier): Promise<{
    currentStepId: string | null
    completedSteps: string[]
    stepData: Record<string, any>
    progressPercentage: number
    isCompleted: boolean
    lastUpdated: Date | null
    isAnonymous: boolean
  } | null> {
    try {
      const session = await this.findSession(identifier)
      if (!session) return null

      const completedSteps = session.completedSteps as string[]
      const totalSteps = 17 // From onboarding config
      const progressPercentage = Math.round((completedSteps.length / totalSteps) * 100)
      
      // Use the completed field from the database
      const isCompleted = session.completed

      return {
        currentStepId: session.currentStepId,
        completedSteps,
        stepData: session.stepData as Record<string, any>,
        progressPercentage,
        isCompleted,
        lastUpdated: session.updatedAt,
        isAnonymous: !!session.isAnonymous
      }

    } catch (error) {
      console.error('❌ Failed to get progress summary:', error)
      return null
    }
  }

  /**
   * Reset progress session
   */
  static async resetProgress(identifier: SessionIdentifier): Promise<boolean> {
    try {
      const session = await this.findSession(identifier)
      if (!session) return false

      await prisma.progressSession.update({
        where: { id: session.id },
        data: {
          currentStepId: null,
          completedSteps: [] as any,
          stepData: {} as any,
          completed: false,
          updatedAt: new Date()
        }
      })

      return true

    } catch (error) {
      console.error('❌ Failed to reset progress:', error)
      return false
    }
  }

  /**
   * Delete progress session
   */
  static async deleteSession(identifier: SessionIdentifier): Promise<boolean> {
    try {
      const session = await this.findSession(identifier)
      if (!session) return false

      await prisma.progressSession.delete({
        where: { id: session.id }
      })

      return true

    } catch (error) {
      console.error('❌ Failed to delete session:', error)
      return false
    }
  }
} 