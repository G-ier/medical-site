import { NextRequest, NextResponse } from 'next/server';
import { SubscriptionService } from '@/shared/lib/database/subscription-service';

/**
 * GET /api/subscriptions/[id]
 * Get a specific subscription by ID
 */
export async function GET(
  _: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const subscriptionId = parseInt(id);
    
    if (isNaN(subscriptionId)) {
      return NextResponse.json(
        { error: 'Invalid subscription ID' },
        { status: 400 }
      );
    }

    const subscription = await SubscriptionService.getSubscriptionById(subscriptionId);
    
    if (!subscription) {
      return NextResponse.json(
        { error: 'Subscription not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: subscription
    });

  } catch (error) {
    console.error('❌ Error fetching subscription:', error);
    return NextResponse.json(
      { error: 'Failed to fetch subscription' },
      { status: 500 }
    );
  }
}

/**
 * PATCH /api/subscriptions/[id]
 * Update a subscription (cancel, reactivate, etc.)
 */
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const subscriptionId = parseInt(id);
    const body = await request.json();
    
    if (isNaN(subscriptionId)) {
      return NextResponse.json(
        { error: 'Invalid subscription ID' },
        { status: 400 }
      );
    }

    const { action, ...updateData } = body;

    let result;

    switch (action) {
      case 'cancel':
        result = await SubscriptionService.cancelSubscription(subscriptionId);
        break;
      case 'reactivate':
        result = await SubscriptionService.reactivateSubscription(subscriptionId);
        break;
      default:
        // Generic update
        result = await SubscriptionService.updateSubscription(subscriptionId, updateData);
        break;
    }

    return NextResponse.json({
      success: true,
      data: result
    });

  } catch (error) {
    console.error('❌ Error updating subscription:', error);
    return NextResponse.json(
      { error: 'Failed to update subscription' },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/subscriptions/[id]
 * Cancel a subscription (same as PATCH with action: 'cancel')
 */
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const subscriptionId = parseInt(id);
    
    if (isNaN(subscriptionId)) {
      return NextResponse.json(
        { error: 'Invalid subscription ID' },
        { status: 400 }
      );
    }

    const result = await SubscriptionService.cancelSubscription(subscriptionId);

    return NextResponse.json({
      success: true,
      data: result
    });

  } catch (error) {
    console.error('❌ Error canceling subscription:', error);
    return NextResponse.json(
      { error: 'Failed to cancel subscription' },
      { status: 500 }
    );
  }
} 