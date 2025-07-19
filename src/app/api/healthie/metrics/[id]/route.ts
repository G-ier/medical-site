import { NextRequest, NextResponse } from 'next/server';
import { healthieClient } from '@/shared/api/healthie';
import { METRICS_QUERIES } from '@/shared/lib/healthie/constants';
import type { 
  UpdateMetricInput,
  UpdateMetricResponse,
  DeleteMetricResponse,
  MetricEntry
} from '@/shared/api/healthie/types';

// GET /api/healthie/metrics/[id] - Get single metric entry
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json(
        { error: 'Metric ID is required' },
        { status: 400 }
      );
    }

    const response = await healthieClient.query<{ entry: MetricEntry }>(
      METRICS_QUERIES.GET_ENTRY,
      { id }
    );

    if (!response.success || !response.data) {
      return NextResponse.json(
        { error: 'Failed to fetch metric entry', details: response.error },
        { status: 500 }
      );
    }

    if (!response.data.entry) {
      return NextResponse.json(
        { error: 'Metric entry not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: response.data.entry
    });

  } catch (error) {
    console.error('Error fetching metric entry:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// PUT /api/healthie/metrics/[id] - Update metric entry
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body: Omit<UpdateMetricInput, 'id'> = await request.json();

    if (!id) {
      return NextResponse.json(
        { error: 'Metric ID is required' },
        { status: 400 }
      );
    }

    const updateInput: UpdateMetricInput = {
      id,
      ...body
    };

    const response = await healthieClient.mutate<{ updateEntry: UpdateMetricResponse }>(
      METRICS_QUERIES.UPDATE_ENTRY,
      updateInput as any
    );

    if (!response.success || !response.data) {
      return NextResponse.json(
        { error: 'Failed to update metric entry', details: response.error },
        { status: 500 }
      );
    }

    if (response.data.updateEntry.messages?.length > 0) {
      return NextResponse.json(
        { 
          error: 'Failed to update metric entry',
          messages: response.data.updateEntry.messages 
        },
        { status: 400 }
      );
    }

    if (!response.data.updateEntry.entry) {
      return NextResponse.json(
        { error: 'Metric entry not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: response.data.updateEntry.entry
    });

  } catch (error) {
    console.error('Error updating metric entry:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// DELETE /api/healthie/metrics/[id] - Delete metric entry
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json(
        { error: 'Metric ID is required' },
        { status: 400 }
      );
    }

    const response = await healthieClient.mutate<{ deleteEntry: DeleteMetricResponse }>(
      METRICS_QUERIES.DELETE_ENTRY,
      { id }
    );

    if (!response.success || !response.data) {
      return NextResponse.json(
        { error: 'Failed to delete metric entry', details: response.error },
        { status: 500 }
      );
    }

    if (response.data.deleteEntry.messages?.length > 0) {
      const hasErrors = response.data.deleteEntry.messages.some(msg => 
        msg.message.toLowerCase().includes('error') || 
        msg.message.toLowerCase().includes('failed')
      );
      
      if (hasErrors) {
        return NextResponse.json(
          { 
            error: 'Failed to delete metric entry',
            messages: response.data.deleteEntry.messages 
          },
          { status: 400 }
        );
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Metric entry deleted successfully'
    });

  } catch (error) {
    console.error('Error deleting metric entry:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 