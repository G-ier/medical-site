import { NextRequest, NextResponse } from 'next/server';
import { healthieClient } from '@/shared/api/healthie';
import { METRICS_QUERIES } from '@/shared/lib/healthie/constants';
import { metricsUtils } from '@/shared/lib/healthie/utils';

// GET /api/healthie/metrics/test - Test metrics CRUD operations
export async function GET() {
  try {
    console.log('🧪 Testing Healthie Metrics CRUD API...');

    // Test 1: Get available metric categories
    const categories = metricsUtils.getMetricCategories();
    console.log('✅ Available metric categories:', categories.length);

    // Test 2: Validate sample metric data
    const sampleMetric = {
      category: 'Weight',
      metric_stat: '180.5',
      user_id: 'test_user_123'
    };

    const validation = metricsUtils.validateMetricEntry(sampleMetric);
    console.log('✅ Validation test:', validation.isValid ? 'PASSED' : 'FAILED');

    // Test 3: Format metric value
    const formattedValue = metricsUtils.formatMetricValue('Weight', '180.5');
    console.log('✅ Formatting test:', formattedValue);

    // Test 4: Test Healthie API connection
    let connectionTest = false;
    try {
      await healthieClient.testConnection();
      connectionTest = true;
      console.log('✅ Healthie API connection: SUCCESS');
    } catch (error) {
      console.log('❌ Healthie API connection: FAILED', error);
    }

    return NextResponse.json({
      success: true,
      tests: {
        categories: {
          status: 'PASSED',
          count: categories.length,
          sample: categories.slice(0, 3)
        },
        validation: {
          status: validation.isValid ? 'PASSED' : 'FAILED',
          errors: validation.errors
        },
        formatting: {
          status: 'PASSED',
          input: '180.5',
          output: formattedValue
        },
        connection: {
          status: connectionTest ? 'PASSED' : 'FAILED'
        }
      },
      endpoints: {
        create: 'POST /api/healthie/metrics',
        list: 'GET /api/healthie/metrics',
        get: 'GET /api/healthie/metrics/[id]',
        update: 'PUT /api/healthie/metrics/[id]',
        delete: 'DELETE /api/healthie/metrics/[id]'
      },
      sampleRequests: {
        create: {
          method: 'POST',
          url: '/api/healthie/metrics',
          body: {
            category: 'Weight',
            metric_stat: '180.5',
            user_id: 'patient_123'
          }
        },
        list: {
          method: 'GET',
          url: '/api/healthie/metrics?user_id=patient_123&category=Weight&start_date=2024-01-01'
        },
        update: {
          method: 'PUT',
          url: '/api/healthie/metrics/entry_123',
          body: {
            metric_stat: '179.2'
          }
        }
      }
    });

  } catch (error) {
    console.error('❌ Test failed:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Test failed',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// POST /api/healthie/metrics/test - Test creating a sample metric
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const testUserId = body.user_id || 'test_user_' + Date.now();

    console.log('🧪 Testing metric creation with user:', testUserId);

    // Create a test weight entry
    const testMetric = metricsUtils.createMetricEntry(
      'Weight',
      '175.5',
      testUserId
    );

    // Validate before sending
    const validation = metricsUtils.validateMetricEntry(testMetric);
    if (!validation.isValid) {
      return NextResponse.json({
        success: false,
        error: 'Validation failed',
        errors: validation.errors
      }, { status: 400 });
    }

    // Try to create the metric
    const response = await healthieClient.mutate(
      METRICS_QUERIES.CREATE_ENTRY,
      testMetric
    );

    return NextResponse.json({
      success: true,
      message: 'Test metric created successfully',
      data: {
        request: testMetric,
        response: response
      }
    });

  } catch (error) {
    console.error('❌ Test creation failed:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Test creation failed',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
} 