import { prisma, type CreateUserData, type User } from './client'

/**
 * User Service - Auth0 Integration
 * Handles user creation and management from Auth0 data
 * Level 4 Implementation: Auth0 + User in DB
 */
export class UserService {
  
  /**
   * Create user from Auth0 data
   */
  static async createUser(auth0Data: {
    sub: string
    email: string
    name?: string
    picture?: string
  }): Promise<User> {
    try {
      const userData: CreateUserData = {
        auth0UserId: auth0Data.sub,
        email: auth0Data.email,
        name: auth0Data.name || undefined,
        picture: auth0Data.picture || undefined
      }

      const user = await prisma.user.create({
        data: userData
      })

      console.log('✅ User created:', user.id, user.email)
      return user
    } catch (error) {
      console.error('❌ Failed to create user:', error)
      throw new Error('Failed to create user')
    }
  }
  
  /**
   * Find user by Auth0 ID
   */
  static async findUserByAuth0Id(auth0UserId: string): Promise<User | null> {
    try {
      return await prisma.user.findUnique({
        where: { auth0UserId }
      })
    } catch (error) {
      console.error('❌ Failed to find user by Auth0 ID:', error)
      return null
    }
  }
  
  /**
   * Find user by email
   */
  static async findUserByEmail(email: string): Promise<User | null> {
    try {
      return await prisma.user.findUnique({
        where: { email }
      })
    } catch (error) {
      console.error('❌ Failed to find user by email:', error)
      return null
    }
  }
  
  /**
   * Find user by ID
   */
  static async findUserById(id: number): Promise<User | null> {
    try {
      return await prisma.user.findUnique({
        where: { id }
      })
    } catch (error) {
      console.error('❌ Failed to find user by ID:', error)
      return null
    }
  }
  
  /**
   * Find or create user from Auth0 data
   * Main method used during Auth0 callback
   */
  static async findOrCreateUser(auth0Data: {
    sub: string
    email: string
    name?: string
    picture?: string
  }): Promise<User> {
    try {
      // First try to find existing user
      let user = await this.findUserByAuth0Id(auth0Data.sub)
      
      if (user) {
        console.log('👤 Existing user found:', user.email)
        
        // Update user data if changed
        const hasChanges = 
          user.name !== auth0Data.name || 
          user.picture !== auth0Data.picture
        
        if (hasChanges) {
          user = await this.updateUser(user.id, {
            name: auth0Data.name,
            picture: auth0Data.picture
          })
          console.log('🔄 User data updated:', user.email)
        }
        
        return user
      }
      
      // Create new user if not found
      console.log('🆕 Creating new user:', auth0Data.email)
      return await this.createUser(auth0Data)
      
    } catch (error) {
      console.error('❌ Failed to find or create user:', error)
      throw new Error('Failed to find or create user')
    }
  }
  
  /**
   * Update user profile data
   */
  static async updateUser(
    userId: number, 
    data: Partial<Pick<User, 'name' | 'picture'>>
  ): Promise<User> {
    try {
      return await prisma.user.update({
        where: { id: userId },
        data: {
          ...data,
          updatedAt: new Date()
        }
      })
    } catch (error) {
      console.error('❌ Failed to update user:', error)
      throw new Error('Failed to update user')
    }
  }
  
  /**
   * Get user profile with progress summary for dashboard
   */
  static async getUserProfile(userId: number): Promise<{
    user: User
    progressSummary?: {
      currentStepId: string | null
      completedSteps: string[]
      lastUpdated: Date
      isCompleted: boolean
    }
  } | null> {
    try {
      const user = await prisma.user.findUnique({
        where: { id: userId },
        include: {
          progressSessions: {
            orderBy: { updatedAt: 'desc' },
            take: 1
          }
        }
      })
      
      if (!user) return null
      
      const progressSession = user.progressSessions[0]
      
      if (!progressSession) {
        return {
          user,   
          progressSummary: {
            currentStepId: null,
            completedSteps: [],
            lastUpdated: new Date(),
            isCompleted: false
          }
        }
      }
      
      const completedSteps = progressSession.completedSteps as string[]
      
      
      // Use the completed field from the database instead of calculating
      const isCompleted = progressSession.completed
      
      return {
        user,
        progressSummary: {
          currentStepId: progressSession.currentStepId,
          completedSteps,
          lastUpdated: progressSession.updatedAt,
          isCompleted
        }
      }
      
    } catch (error) {
      console.error('❌ Failed to get user profile:', error)
      return null
    }
  }
  
  /**
   * Delete user (for GDPR compliance)
   */
  static async deleteUser(userId: number): Promise<boolean> {
    try {
      await prisma.user.delete({
        where: { id: userId }
      })
      console.log('🗑️ User deleted:', userId)
      return true
    } catch (error) {
      console.error('❌ Failed to delete user:', error)
      return false
    }
  }
} 