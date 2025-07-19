import { NextRequest, NextResponse } from 'next/server'
import { ProgressService } from '@/shared/lib/database'

/**
 * Progress Session API - Level 4 Implementation
 * Creates new anonymous sessions for onboarding
 * 
 * Authentication: Not required (for anonymous users)
 * Returns: Session token for anonymous progress tracking
 */

// POST /api/progress/session - Create new anonymous session
export async function POST(request: NextRequest) {
  try {
    console.log('🆕 POST /api/progress/session - Creating new anonymous session')
    
    // Parse optional request body
    let body: { currentStepId?: string } = {}
    try {
      body = await request.json()
    } catch {
      // No body provided, that's fine
    }
    
    const { currentStepId } = body
    
    // Create new anonymous session
    const sessionResult = await ProgressService.createAnonymousSession(currentStepId)
    
    if (!sessionResult.session) {
      console.error('❌ Failed to create anonymous session')
      return NextResponse.json(
        { 
          success: false,
          error: 'Failed to create session'
        },
        { status: 500 }
      )
    }
    
    console.log('✅ Anonymous session created successfully')
    console.log('🔑 Session token generated')
    
    return NextResponse.json({
      success: true,
      data: {
        sessionToken: sessionResult.session.sessionToken,
        currentStepId: sessionResult.session.currentStepId,
        completedSteps: sessionResult.session.completedSteps,
        stepData: sessionResult.session.stepData,
        expiresAt: sessionResult.session.expiresAt,
        progressPercentage: 0,
        isCompleted: false
      }
    })
    
  } catch (error) {
    console.error('❌ POST /api/progress/session error:', error)
    return NextResponse.json(
      { 
        success: false,
        error: 'Failed to create session',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}


// OPTIONS /api/progress/session - CORS preflight
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
} 