import { NextRequest, NextResponse } from 'next/server';
import { SubscriptionService } from '@/shared/lib/database/subscription-service';

/**
 * GET /api/subscriptions
 * Get subscriptions with optional filtering and pagination
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    const status = searchParams.get('status');
    const limit = parseInt(searchParams.get('limit') || '10');
    const offset = parseInt(searchParams.get('offset') || '0');

    let subscriptions;

    if (status) {
      subscriptions = await SubscriptionService.getSubscriptionsByStatus(status as any);
    } else if (userId) {
      subscriptions = await SubscriptionService.getSubscriptionsByUser(parseInt(userId));
    } else {
      subscriptions = await SubscriptionService.getRecentSubscriptions(limit, offset);
    }

    // Get subscription statistics
    const stats = await SubscriptionService.getSubscriptionStats(userId ? parseInt(userId) : undefined);

    return NextResponse.json({
      success: true,
      data: {
        subscriptions,
        stats,
        pagination: {
          limit,
          offset,
          total: subscriptions.length
        }
      }
    });

  } catch (error) {
    console.error('❌ Error fetching subscriptions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch subscriptions' },
      { status: 500 }
    );
  }
}

/**
 * POST /api/subscriptions
 * Create a test subscription (for development/testing)
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.userId || !body.stripeSubscriptionId || !body.amount) {
      return NextResponse.json(
        { error: 'Missing required fields: userId, stripeSubscriptionId, amount' },
        { status: 400 }
      );
    }

    const subscription = await SubscriptionService.createSubscription({
      userId: body.userId,
      stripeSubscriptionId: body.stripeSubscriptionId,
      stripeCustomerId: body.stripeCustomerId,
      stripeProductId: body.stripeProductId,
      stripePriceId: body.stripePriceId,
      status: body.status || 'active',
      productType: body.productType || 'medication',
      planType: body.planType || 'subscription',
      planName: body.planName || 'Test Subscription',
      planDescription: body.planDescription,
      amount: body.amount,
      currency: body.currency || 'usd',
      billingInterval: body.billingInterval || 'month',
      billingIntervalCount: body.billingIntervalCount || 1,
      currentPeriodStart: body.currentPeriodStart || new Date(),
      currentPeriodEnd: body.currentPeriodEnd || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
      cancelAtPeriodEnd: body.cancelAtPeriodEnd || false,
      metadata: body.metadata || {},
      healthieOfferingId: body.healthieOfferingId,
      healthieUserId: body.healthieUserId
    });

    return NextResponse.json({
      success: true,
      data: subscription
    });

  } catch (error) {
    console.error('❌ Error creating subscription:', error);
    return NextResponse.json(
      { error: 'Failed to create subscription' },
      { status: 500 }
    );
  }
} 