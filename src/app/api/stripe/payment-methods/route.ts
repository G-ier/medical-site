import { NextRequest, NextResponse } from 'next/server';
import { SubscriptionService } from '@/shared/lib/database/subscription-service';
import { getAuthenticatedUser } from '@/shared/lib/auth/api-auth-helpers';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2025-05-28.basil' });

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

    // Fetch subscriptions for this user only
    const subscriptions = await SubscriptionService.getSubscriptionsByUser(user.id);
    if (!subscriptions || subscriptions.length === 0) {
      return NextResponse.json({ paymentMethods: [] });
    }

    // Get the first available stripeCustomerId from subscriptions
    const customerId = subscriptions.find(sub => sub.stripeCustomerId)?.stripeCustomerId;
    if (!customerId) {
      return NextResponse.json({ paymentMethods: [] });
    }

    // Fetch payment methods from Stripe
    const paymentMethods = await stripe.paymentMethods.list({
      customer: customerId,
      type: 'card',
    });

    return NextResponse.json({ paymentMethods: paymentMethods.data });
  } catch (error) {
    console.error('❌ Error fetching payment methods:', error);
    return NextResponse.json(
      { error: 'Failed to fetch payment methods' },
      { status: 500 }
    );
  }
} 