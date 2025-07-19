import { NextRequest, NextResponse } from 'next/server';
import { PaymentService } from '@/shared/lib/database/payment-service';

/**
 * GET /api/payments
 * Get payments for the authenticated user or all payments (admin)
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    const status = searchParams.get('status');
    const limit = parseInt(searchParams.get('limit') || '10');
    const offset = parseInt(searchParams.get('offset') || '0');

    let payments;

    if (status) {
      payments = await PaymentService.getPaymentsByStatus(status as any);
    } else if (userId) {
      payments = await PaymentService.getPaymentsByUser(parseInt(userId));
    } else {
      payments = await PaymentService.getRecentPayments(limit, offset);
    }

    // Get payment statistics
    const stats = await PaymentService.getPaymentStats(userId ? parseInt(userId) : undefined);

    return NextResponse.json({
      success: true,
      data: {
        payments,
        stats,
        pagination: {
          limit,
          offset,
          total: payments.length
        }
      }
    });

  } catch (error) {
    console.error('❌ Error fetching payments:', error);
    return NextResponse.json(
      { error: 'Failed to fetch payments' },
      { status: 500 }
    );
  }
}

/**
 * POST /api/payments
 * Create a test payment (for development/testing)
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.userId || !body.stripePaymentIntentId || !body.amount) {
      return NextResponse.json(
        { error: 'Missing required fields: userId, stripePaymentIntentId, amount' },
        { status: 400 }
      );
    }

    const payment = await PaymentService.createPayment({
      userId: body.userId,
      stripePaymentIntentId: body.stripePaymentIntentId,
      amount: body.amount,
      currency: body.currency || 'usd',
      status: body.status || 'PENDING',
      metadata: body.metadata || {},
      productType: body.productType || 'weight_loss',
      planType: body.planType || 'monthly',
      planName: body.planName,
      servicesProvided: body.servicesProvided,
      stripeCustomerId: body.stripeCustomerId,
      paymentMethod: body.paymentMethod
    });

    return NextResponse.json({
      success: true,
      data: payment
    });

  } catch (error) {
    console.error('❌ Error creating payment:', error);
    return NextResponse.json(
      { error: 'Failed to create payment' },
      { status: 500 }
    );
  }
} 