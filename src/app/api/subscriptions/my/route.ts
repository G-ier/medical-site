import { NextRequest, NextResponse } from 'next/server';
import { SubscriptionService } from '@/shared/lib/database/subscription-service';
import { getAuthenticatedUser } from '@/shared/lib/auth/api-auth-helpers';

export async function GET(request: NextRequest) {
  try {
    // Get authenticated user via JWT cookies
    const authResult = await getAuthenticatedUser(request);
    if (!authResult.success) {
      return NextResponse.json(
        { error: authResult.error || 'Authentication required' },
        { status: authResult.statusCode || 401 }
      );
    }

    const user = authResult.dbUser!;
    console.log(user)

    // Fetch subscriptions for this user only
    const subscriptions = await SubscriptionService.getActiveSubscriptions(user.id);

    console.log('subscriptions', subscriptions)
    return NextResponse.json({
      success: true,
      data: {
        subscriptions
      }
    });
  } catch (error) {
    console.error('❌ Error fetching user subscriptions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch user subscriptions' },
      { status: 500 }
    );
  }
} 