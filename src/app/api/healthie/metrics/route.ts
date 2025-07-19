import { NextRequest, NextResponse } from 'next/server';
import { healthieClient } from '@/shared/api/healthie';
import { METRICS_QUERIES } from '@/shared/lib/healthie/constants';
import type { 
  CreateMetricInput, 
  CreateMetricResponse,
  MetricsResponse 
} from '@/shared/api/healthie/types';

// POST /api/healthie/metrics - Create new metric entry
// curl -X POST http://localhost:3004/api/healthie/metrics -H "Content-Type: application/json" -d '{"category": "Weight", "metric_stat": "70", "user_id": "1"}'
export async function POST(request: NextRequest) {
  console.log('🚀 POST /api/healthie/metrics - Starting request');
  
  try {
    const body: CreateMetricInput = await request.json();
    console.log('📋 Request body:', JSON.stringify(body, null, 2));
    
    // Validation
    if (!body.category || !body.metric_stat || !body.user_id) {
      console.log('❌ Validation failed - missing required fields');
      return NextResponse.json(
        { error: 'Missing required fields: category, metric_stat, user_id' },
        { status: 400 }
      );
    }

    // Set default type if not provided
    const input = {
      ...body,
      type: body.type || 'MetricEntry',
      created_at: body.created_at || new Date().toISOString()
    };
    
    console.log('📤 Sending to Healthie API:', JSON.stringify(input, null, 2));
    console.log('🔍 GraphQL Query:', METRICS_QUERIES.CREATE_ENTRY);

    const response = await healthieClient.mutate<{ createEntry: CreateMetricResponse }>(
      METRICS_QUERIES.CREATE_ENTRY,
      input
    );

    console.log('📥 Healthie API response:', JSON.stringify(response, null, 2));

    if (!response.success || !response.data) {
      console.log('❌ Healthie API failed:', response.error);
      return NextResponse.json(
        { error: 'Failed to create metric entry', details: response.error },
        { status: 400 }
      );
    }

    if (response.data.createEntry.messages?.length > 0) {
      console.log('⚠️ Healthie API messages:', response.data.createEntry.messages);
      return NextResponse.json(
        { 
          error: 'Failed to create metric entry',
          messages: response.data.createEntry.messages 
        },
        { status: 400 }
      );
    }

    console.log('✅ Metric created successfully:', response.data.createEntry.entry);
    return NextResponse.json({
      success: true,
      data: response.data.createEntry.entry
    });

  } catch (error) {
    console.error('💥 Error creating metric entry:', error);
    console.error('Stack trace:', error instanceof Error ? error.stack : 'No stack trace');
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

// GET /api/healthie/metrics - Get metric entries with filters
export async function GET(request: NextRequest) {
  console.log('🚀 GET /api/healthie/metrics - Starting request');
  
  try {
    const { searchParams } = new URL(request.url);
    console.log('🔍 Search params:', Object.fromEntries(searchParams.entries()));
    
    const userId = searchParams.get('user_id') || searchParams.get('userId');
    const category = searchParams.get('category');
    
    console.log('📋 Query parameters:', { userId, category });

    if (!userId) {
      console.log('❌ Missing userId parameter');
      return NextResponse.json(
        { error: 'user_id or userId parameter is required' },
        { status: 400 }
      );
    }

    // Prepare GraphQL variables
    const variables: Record<string, unknown> = {
      client_id: userId,  // Use client_id as per Healthie documentation
      type: 'MetricEntry'
    };

    if (category) {
      variables.category = category;
    }

    console.log('🔍 GraphQL variables:', variables);
    console.log('🔍 GraphQL Query:', METRICS_QUERIES.GET_ENTRIES);

    const response = await healthieClient.query<{ entries: Array<Record<string, unknown>> }>(
      METRICS_QUERIES.GET_ENTRIES,
      variables
    );

    console.log('📥 Healthie API response:', JSON.stringify(response, null, 2));

    if (!response.success || !response.data) {
      console.log('❌ Healthie API failed:', response.error);
      return NextResponse.json(
        { error: 'Failed to fetch metric entries', details: response.error },
        { status: 500 }
      );
    }

    const entries = response.data.entries || [];
    console.log(`📊 Found ${entries.length} entries for user ${userId}${category ? ` in category ${category}` : ''}`);
    
    const result: MetricsResponse = {
      entries: entries as any,
      total_count: entries.length,
      has_more: false // No pagination support for now
    };

    console.log('✅ Returning result:', JSON.stringify(result, null, 2));
    return NextResponse.json({
      success: true,
      data: result
    });

  } catch (error) {
    console.error('💥 Error fetching metric entries:', error);
    console.error('Stack trace:', error instanceof Error ? error.stack : 'No stack trace');
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
} 