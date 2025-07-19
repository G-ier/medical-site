import { NextRequest, NextResponse } from 'next/server';
import { healthieClient } from '@/shared/api/healthie';
import { METRICS_QUERIES } from '@/shared/lib/healthie/constants';
import { metricsUtils } from '@/shared/lib/healthie/utils';
import type { 
  CreateMetricInput, 
  MetricEntry
} from '@/shared/api/healthie/types';

interface BulkCreateMetricsInput {
  metrics: CreateMetricInput[];
}

interface BulkCreateMetricsResponse {
  success: boolean;
  data: {
    created: MetricEntry[];
    failed: Array<{
      input: CreateMetricInput;
      error: string;
      messages?: any[];
    }>;
    summary: {
      total: number;
      successful: number;
      failed: number;
    };
  };
}

// POST /api/healthie/metrics/bulk - Create multiple metric entries
export async function POST(request: NextRequest) {
  try {
    const body: BulkCreateMetricsInput = await request.json();
    
    // Validation
    if (!body.metrics || !Array.isArray(body.metrics) || body.metrics.length === 0) {
      return NextResponse.json(
        { error: 'Metrics array is required and must not be empty' },
        { status: 400 }
      );
    }

    if (body.metrics.length > 50) {
      return NextResponse.json(
        { error: 'Maximum 50 metrics can be created at once' },
        { status: 400 }
      );
    }

    console.log(`🔄 Creating ${body.metrics.length} metrics in bulk using single GraphQL request...`);

    // Validate all metrics first
    const validMetrics: CreateMetricInput[] = [];
    const failed: Array<{
      input: CreateMetricInput;
      error: string;
      messages?: any[];
    }> = [];

    for (const metricInput of body.metrics) {
      const validation = metricsUtils.validateMetricEntry(metricInput);
      if (!validation.isValid) {
        failed.push({
          input: metricInput,
          error: `Validation failed: ${validation.errors.join(', ')}`
        });
        continue;
      }

      // Set default type and timestamp if not provided
      const input: CreateMetricInput = {
        ...metricInput,
        type: 'MetricEntry',
        created_at: metricInput.created_at || new Date().toISOString()
      };

      validMetrics.push(input);
    }

    let created: MetricEntry[] = [];

    // If we have valid metrics, send them in bulk
    if (validMetrics.length > 0) {
      try {
        // Prepare entries for bulk creation (convert to BulkEntryInput format)
        const entries = validMetrics.map(metric => ({
          category: metric.category,
          metric_stat: metric.metric_stat,
          user_id: metric.user_id,
          type: metric.type,
          created_at: metric.created_at
        }));

        console.log(`📊 Sending ${entries.length} entries to bulkCreateEntries mutation`);

        const response = await healthieClient.mutate(
          METRICS_QUERIES.BULK_CREATE_ENTRIES,
          { entries }
        );

        if (!response.success || !response.data) {
          console.error('❌ Bulk API request failed:', response.error);
          // If bulk fails, mark all valid metrics as failed
          for (const metric of validMetrics) {
            failed.push({
              input: metric,
              error: `Bulk API request failed: ${response.error || 'Unknown error'}`
            });
          }
        } else {
          const data: any = response.data;
          const bulkResult: any = data?.bulkCreateEntries;
          
          if (bulkResult.messages?.length > 0) {
            console.warn('⚠️ Bulk creation returned messages:', bulkResult.messages);
            // If there are messages, it might indicate partial failure
            for (const metric of validMetrics) {
              failed.push({
                input: metric,
                error: 'Bulk creation returned error messages',
                messages: bulkResult.messages
              });
            }
          } else if (bulkResult.entries) {
            created = bulkResult.entries;
            console.log(`✅ Successfully created ${created.length} metrics in bulk`);
          } else {
            console.error('❌ No entries returned from bulk creation');
            for (const metric of validMetrics) {
              failed.push({
                input: metric,
                error: 'No entries returned from bulk API'
              });
            }
          }
        }

      } catch (error) {
        console.error('❌ Error in bulk metric creation:', error);
        // If bulk fails, mark all valid metrics as failed
        for (const metric of validMetrics) {
          failed.push({
            input: metric,
            error: error instanceof Error ? error.message : 'Unknown bulk creation error'
          });
        }
      }
    }

    const summary = {
      total: body.metrics.length,
      successful: created.length,
      failed: failed.length
    };

    console.log(`📊 Bulk creation summary:`, summary);

    const result: BulkCreateMetricsResponse = {
      success: summary.successful > 0,
      data: {
        created,
        failed,
        summary
      }
    };

    // Return 207 Multi-Status if there were partial failures
    const statusCode = summary.failed > 0 && summary.successful > 0 ? 207 : 
                      summary.failed === 0 ? 200 : 400;

    return NextResponse.json(result, { status: statusCode });

  } catch (error) {
    console.error('Error in bulk metric creation:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// GET /api/healthie/metrics/bulk - Get bulk operation documentation
export async function GET() {
  return NextResponse.json({
    endpoint: '/api/healthie/metrics/bulk',
    description: 'Create multiple metric entries in bulk using single GraphQL request',
    methods: ['POST'],
    limits: {
      maxMetrics: 50,
      bulkOperation: 'Single GraphQL mutation for all metrics'
    },
    requestFormat: {
      metrics: [
        {
          category: 'Weight',
          metric_stat: '180.5',
          user_id: '3305738',
          created_at: '2024-01-15T10:30:00Z' // optional
        }
      ]
    },
    supportedCategories: metricsUtils.getMetricCategories().map(cat => ({
      category: cat.category,
      unit: cat.unit,
      type: cat.type
    })),
    example: {
      url: 'POST /api/healthie/metrics/bulk',
      body: {
        metrics: [
          { category: 'Weight', metric_stat: '180.5', user_id: '3305738' },
          { category: 'Height', metric_stat: '72', user_id: '3305738' },
          { category: 'Blood Pressure', metric_stat: '120/80', user_id: '3305738' },
          { category: 'Heart Rate', metric_stat: '72', user_id: '3305738' }
        ]
      }
    }
  });
} 