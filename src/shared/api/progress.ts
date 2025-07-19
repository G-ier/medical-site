/**
 * Progress API Service
 * Handles anonymous session creation and progress management
 */

export interface ProgressApiResponse {
  success: boolean;
  data?: {
    sessionToken?: string;
    currentStepId?: string;
    completedSteps?: string[];
    stepData?: Record<string, any>;
    progressPercentage?: number;
    isCompleted?: boolean;
    lastUpdated?: string;
    expiresAt?: string;
    sessionType?: 'anonymous' | 'authenticated';
  };
  error?: string;
  details?: string;
}

export interface CreateSessionResponse {
  success: boolean;
  data?: {
    sessionToken: string;
    currentStepId: string;
    completedSteps: string[];
    stepData: Record<string, any>;
    expiresAt: string;
    progressPercentage: number;
    isCompleted: boolean;
  };
  error?: string;
  details?: string;
}

export class ProgressApiService {
  private sessionToken: string | null = null;

  constructor() {
    // Try to load session token from localStorage on initialization
    if (typeof window !== 'undefined') {
      this.sessionToken = localStorage.getItem('onboarding_session_token');
    }
  }

  /**
   * Create new anonymous session
   */
  async createAnonymousSession(currentStepId?: string): Promise<CreateSessionResponse> {
    try {
      const response = await fetch('/api/progress/session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ currentStepId }),
      });

      const result: CreateSessionResponse = await response.json();

      if (result.success && result.data?.sessionToken) {
        // Store session token
        this.sessionToken = result.data.sessionToken;
        if (typeof window !== 'undefined') {
          localStorage.setItem('onboarding_session_token', result.data.sessionToken);
        }
        console.log('✅ Anonymous session created with token');
      }

      return result;
    } catch (error) {
      console.error('❌ Failed to create anonymous session:', error);
      return {
        success: false,
        error: 'Failed to create session',
        details: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  /**
   * Get current progress
   */
  async getProgress(): Promise<ProgressApiResponse> {
    if (!this.sessionToken) {
      return {
        success: false,
        error: 'No session token available'
      };
    }

    try {
      const response = await fetch('/api/progress', {
        method: 'GET',
        headers: {
          'X-Session-Token': this.sessionToken,
        },
      });

      const result: ProgressApiResponse = await response.json();
      return result;
    } catch (error) {
      console.error('❌ Failed to get progress:', error);
      return {
        success: false,
        error: 'Failed to get progress',
        details: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  /**
   * Update progress
   */
  async updateProgress(data: {
    currentStepId?: string;
    completedSteps?: string[];
    stepData?: Record<string, any>;
  }): Promise<ProgressApiResponse> {
    if (!this.sessionToken) {
      return {
        success: false,
        error: 'No session token available'
      };
    }

    try {
      const response = await fetch('/api/progress', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Session-Token': this.sessionToken,
        },
        body: JSON.stringify(data),
      });

      const result: ProgressApiResponse = await response.json();
      return result;
    } catch (error) {
      console.error('❌ Failed to update progress:', error);
      return {
        success: false,
        error: 'Failed to update progress',
        details: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  /**
   * Update step data specifically (optimized - no extra GET request)
   */
  async updateStepData(stepId: string, stepData: any): Promise<ProgressApiResponse> {
    if (!this.sessionToken) {
      return {
        success: false,
        error: 'No session token available'
      };
    }

    try {
      // Send partial step data update - server will merge it
      const result = await this.updateProgress({ 
        stepData: { [stepId]: stepData } 
      });
      
      if (result.success) {
        console.log('✅ Step data updated via API for step:', stepId);
      }
      
      return result;
    } catch (error) {
      console.error('❌ Failed to update step data:', error);
      return {
        success: false,
        error: 'Failed to update step data',
        details: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  /**
   * Get step data for specific step
   */
  async getStepData(stepId: string): Promise<any> {
    try {
      const progress = await this.getProgress();
      
      if (progress.success && progress.data?.stepData) {
        return progress.data.stepData[stepId] || {};
      }
      
      return {};
    } catch (error) {
      console.error('❌ Failed to get step data:', error);
      return {};
    }
  }

  /**
   * Clear session (logout)
   */
  clearSession(): void {
    this.sessionToken = null;
    if (typeof window !== 'undefined') {
      localStorage.removeItem('onboarding_session_token');
      localStorage.removeItem('rejuve_session_token'); // Clean up old token
      localStorage.removeItem('rejuve_onboarding_progress'); // Also clear old localStorage progress
    }
  }

  /**
   * Check if session exists
   */
  hasSession(): boolean {
    return !!this.sessionToken;
  }

  /**
   * Get current session token
   */
  getSessionToken(): string | null {
    return this.sessionToken;
  }
}

// Export singleton instance
export const progressApiService = new ProgressApiService(); 