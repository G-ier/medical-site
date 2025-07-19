import { NextRequest, NextResponse } from 'next/server'
import {
  ProgressService,
  type SessionIdentifier
} from '@/shared/lib/database'
import { getAuthenticatedUser } from '@/shared/lib/auth/api-auth-helpers'

/**
 * Unified Progress API - Level 4 Implementation
 * Handles progress for both anonymous and authenticated users
 * Headers: X-Session-Token (anonymous) | Cookie with Auth0 session (authenticated)
 */

// GET /api/progress - Retrieve current progress
// curl -X GET http://localhost:3004/api/progress -H "X-Session-Token: e6444cc740b6542defc3d5f5f522c79a175ed05b33880edae55a3093f6b49a83"
export async function GET(request: NextRequest) {
  try {
    console.log('📊 GET /api/progress - Retrieving progress')

    let identifier: SessionIdentifier | null = null
    // Try anonymous session
    const sessionToken = request.headers.get('x-session-token');
    console.log('🔑 Session token:', sessionToken);
    if (sessionToken) {
      console.log('🔑 Anonymous session detected');
      identifier = {
        sessionToken
      };
    } else {
      return NextResponse.json(
        { error: 'No valid session found' },
        { status: 401 }
      );
    }

    const progressSummary = await ProgressService.getProgressSummary(identifier);
    if (!progressSummary) {
      return NextResponse.json(
        { error: 'Progress session not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: {
        currentStepId: progressSummary.currentStepId,
        completedSteps: progressSummary.completedSteps,
        stepData: progressSummary.stepData,
        progressPercentage: progressSummary.progressPercentage,
        isCompleted: progressSummary.isCompleted,
        lastUpdated: progressSummary.lastUpdated,
        isAnonymous: progressSummary.isAnonymous
      }
    });

  } catch (error) {
    console.error('❌ GET /api/progress error:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to retrieve progress',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}

// POST /api/progress - Update progress
export async function POST(request: NextRequest) {
  try {
    console.log('📝 POST /api/progress - Updating progress')

    // Parse request body
    const body = await request.json()
    const { currentStepId, completedSteps, stepData, markAsCompleted } = body

    // Validate required fields
    if (!currentStepId && !completedSteps && !stepData && !markAsCompleted) {
      return NextResponse.json(
        { error: 'At least one progress field is required' },
        { status: 400 }
      )
    }

    // Step 1: Try to get authenticated user via JWT cookies
    const authResult = await getAuthenticatedUser(request);
    if (authResult.success) {
      console.log('🔐 Updating authenticated user progress:', authResult.user?.email);
    } else {
      console.log('⚠️ No authenticated user found via JWT cookies:', authResult.error);
    }

    let identifier: SessionIdentifier | null = null

    // Try anonymous session
    const sessionToken = request.headers.get('x-session-token');
    if (sessionToken) {
      console.log('🔑 Updating anonymous session progress');
      identifier = {
        sessionToken
      };
    } else {
      return NextResponse.json(
        { error: 'No valid session found' },
        { status: 401 }
      );
    }

    // Handle completion marking separately if requested
    if (markAsCompleted) {
      console.log('✅ Marking onboarding as completed...');
      const completionResult = await ProgressService.markOnboardingCompleted(identifier);
      
      if (!completionResult.success) {
        return NextResponse.json(
          { error: completionResult.error || 'Failed to mark as completed' },
          { status: 500 }
        );
      }
    }

    // Update progress (including completion status)
    const updatedSession = await ProgressService.updateProgress(identifier, {
      currentStepId,
      completedSteps,
      stepData,
      markAsCompleted
    })

    if (!updatedSession) {
      return NextResponse.json(
        { error: 'Failed to update progress - session not found' },
        { status: 404 }
      )
    }

    const progressSummary = await ProgressService.getProgressSummary(identifier)

    console.log('✅ Progress updated successfully')
    return NextResponse.json({
      success: true,
      data: {
        currentStepId: progressSummary?.currentStepId,
        completedSteps: progressSummary?.completedSteps,
        stepData: progressSummary?.stepData,
        progressPercentage: progressSummary?.progressPercentage,
        isCompleted: progressSummary?.isCompleted,
        lastUpdated: progressSummary?.lastUpdated,
        isAnonymous: false
      }
    })

  } catch (error) {
    console.error('❌ POST /api/progress error:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to update progress',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}

// OPTIONS /api/progress - CORS preflight
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Session-Token',
    },
  })
} 