import { NextRequest, NextResponse } from 'next/server';
import { healthieClient } from '@/shared/api/healthie';



/**
 * GET /api/healthie/offerings
 * Get offerings from Healthie with filtering support
 * 
 * Query parameters:
 * - offset: number (default: 0)
 * - should_paginate: boolean (default: true)
 * - keywords: string
 * - sort_by: string
 * - provider_id: string
 * - offering_id: string
 * - offering_ids: string[] (comma-separated)
 * - only_client_visible: boolean
 * - status: string
 * - client_visibility: string
 * - offering_user_group_id: string
 * - show_only_visible: boolean
 */

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const offeringId = searchParams.get('offering_id');

    console.log('🏥 GET /api/healthie/offerings - Fetching offerings');

    const result = await healthieClient.getOfferings({
      offering_id: offeringId || undefined
    });

    if (!result.success) {
      console.error('❌ Failed to fetch offerings from Healthie:', result.error);
      return NextResponse.json(
        { 
          success: false,
          error: result.error || 'Failed to fetch offerings'
        },
        { status: 500 }
      );
    }

    console.log('✅ Successfully fetched offerings:', result.data?.offerings?.length || 0);

    return NextResponse.json({
      success: true,
      data: {
        offerings: result.data?.offerings || []
      }
    });

  } catch (error) {
    console.error('❌ Error in Healthie offerings API:', error);
    return NextResponse.json(
      { 
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// OPTIONS handler for CORS preflight
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
} 