/**
 * Healthie Invoice Status API
 * Provides endpoints to check and sync Healthie invoice statuses
 */

import { NextRequest, NextResponse } from 'next/server';
import { PaymentService } from '@/shared/lib/database/payment-service';

/**
 * GET /api/payments/healthie-status
 * Get payments with their Healthie invoice status
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('user_id');
    const status = searchParams.get('status');
    const limit = parseInt(searchParams.get('limit') || '50');
    const offset = parseInt(searchParams.get('offset') || '0');

    console.log('🏥 GET /api/payments/healthie-status - Fetching payments with Healthie status');

    const payments = await PaymentService.getPaymentsWithHealthieStatus({
      userId: userId ? parseInt(userId) : undefined,
      healthieInvoiceStatus: status || undefined,
      limit,
      offset
    });

    return NextResponse.json({
      success: true,
      data: {
        payments,
        count: payments.length,
        hasMore: payments.length === limit
      }
    });

  } catch (error) {
    console.error('❌ Error fetching Healthie invoice status:', error);
    return NextResponse.json(
      { 
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

/**
 * POST /api/payments/healthie-status
 * Sync Healthie invoice status for a specific payment
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { paymentId, action } = body;

    if (!paymentId) {
      return NextResponse.json(
        { error: 'paymentId is required' },
        { status: 400 }
      );
    }

    console.log('🏥 POST /api/payments/healthie-status - Syncing payment:', paymentId);

    switch (action) {
      case 'sync':
        const syncedPayment = await PaymentService.syncHealthieInvoiceStatus(paymentId);
        
        if (!syncedPayment) {
          return NextResponse.json(
            { error: 'Failed to sync payment or payment not found' },
            { status: 404 }
          );
        }

        return NextResponse.json({
          success: true,
          data: { payment: syncedPayment }
        });

      default:
        return NextResponse.json(
          { error: 'Invalid action. Use: sync' },
          { status: 400 }
        );
    }

  } catch (error) {
    console.error('❌ Error syncing Healthie invoice status:', error);
    return NextResponse.json(
      { 
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
} 