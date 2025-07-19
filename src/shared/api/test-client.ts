/**
 * Test API Client - Phase 3 Frontend Testing
 * Simple client for testing backend API endpoints
 */

export interface SessionData {
  sessionToken: string
  currentStepId?: string
  completedSteps: string[]
  stepData: Record<string, any>
  progressPercentage: number
  isCompleted: boolean
  expiresAt?: string
}

export interface UserProfile {
  id: number
  email: string
  name?: string
  picture?: string
  createdAt: string
  updatedAt: string
}

export interface DashboardData {
  user: UserProfile
  onboardingStatus: 'not_started' | 'in_progress' | 'completed'
  progress?: {
    currentStepId?: string
    completedSteps: string[]
    progressPercentage: number
    lastUpdated: string
  }
}

export class TestAPIClient {
  private baseUrl = '/api'
  private sessionToken: string | null = null
  private tokenLoaded = false

  constructor() {
    // Session token will be loaded on first request to avoid hydration issues
  }

  private loadSessionToken(): void {
    if (typeof window !== 'undefined' && !this.tokenLoaded) {
      this.sessionToken = localStorage.getItem('test-session-token')
      this.tokenLoaded = true
    }
  }

  private async makeRequest(endpoint: string, options: RequestInit = {}) {
    // Load session token on first request to avoid hydration issues
    this.loadSessionToken()
    
    const url = `${this.baseUrl}${endpoint}`
    
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...options.headers as Record<string, string>
    }

    // Check if user is authenticated via Auth0
    const isAuthenticated = await this.checkAuth0Session()
    
    // Only add session token for anonymous requests
    if (!isAuthenticated && this.sessionToken && !headers.Authorization) {
      headers['X-Session-Token'] = this.sessionToken
    }

    const response = await fetch(url, {
      ...options,
      headers,
      credentials: 'include' // Include Auth0 cookies for authenticated requests
    })

    const data = await response.json()
    
    if (!response.ok) {
      throw new Error(data.error || `HTTP ${response.status}`)
    }

    return data
  }

  private async checkAuth0Session(): Promise<boolean> {
    try {
      // Check if user is authenticated by calling Auth0 user endpoint
      const response = await fetch('/api/auth/user', {
        credentials: 'include'
      })
      return response.ok
    } catch {
      return false
    }
  }

  // Anonymous Session Management
  async createAnonymousSession(currentStepId?: string): Promise<SessionData> {
    const data = await this.makeRequest('/progress/session', {
      method: 'POST',
      body: JSON.stringify({ currentStepId })
    })

    this.sessionToken = data.data.sessionToken
    
    // Save to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('test-session-token', this.sessionToken!)
    }

    return data.data
  }

  async getProgress(): Promise<SessionData> {
    const data = await this.makeRequest('/progress')
    return data.data
  }

  async updateProgress(progressData: {
    currentStepId?: string
    completedSteps?: string[]
    stepData?: Record<string, any>
  }): Promise<SessionData> {
    const data = await this.makeRequest('/progress', {
      method: 'POST',
      body: JSON.stringify(progressData)
    })
    return data.data
  }

  // Authentication & User Management
  async syncUserToDB(sessionToken?: string): Promise<{
    user: UserProfile
    migrationResult?: { success: boolean; error?: string }
  }> {
    const tokenToMigrate = sessionToken || this.sessionToken
    
    const data = await this.makeRequest('/auth/user', {
      method: 'POST',
      body: JSON.stringify({ sessionToken: tokenToMigrate })
    })

    // After successful auth, clear anonymous session
    this.clearAnonymousSession()

    return data.data
  }

  async getCurrentUser(): Promise<UserProfile> {
    const data = await this.makeRequest('/auth/user')
    return data.data.user
  }

  // Dashboard Data
  async getDashboardProfile(): Promise<DashboardData> {
    const data = await this.makeRequest('/dashboard/profile')
    return data.data
  }

  async updateUserProfile(profileData: {
    name?: string
    picture?: string
  }): Promise<UserProfile> {
    const data = await this.makeRequest('/dashboard/profile', {
      method: 'POST',
      body: JSON.stringify(profileData)
    })
    return data.data.user
  }

  // Utility methods
  hasAnonymousSession(): boolean {
    this.loadSessionToken()
    return !!this.sessionToken
  }

  clearAnonymousSession(): void {
    this.sessionToken = null
    this.tokenLoaded = false
    if (typeof window !== 'undefined') {
      localStorage.removeItem('test-session-token')
    }
  }

  getSessionToken(): string | null {
    this.loadSessionToken()
    return this.sessionToken
  }
}

export const testAPI = new TestAPIClient() 