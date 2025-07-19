import { PrismaClient } from '@prisma/client';
import { stripe } from '../stripe';

// Temporary type definition - will be replaced when Prisma types are working
type Subscription = any;

const prisma = new PrismaClient() as any;

export interface CreateSubscriptionInput {
  userId: number;
  patientId?: number;
  stripeSubscriptionId: string;
  stripeCustomerId: string;
  stripePriceId: string;
  stripeProductId: string;
  status: string;
  currentPeriodStart: Date;
  currentPeriodEnd: Date;
  cancelAtPeriodEnd?: boolean;
  productType: string;
  planType: string;
  planName?: string;
  planDescription?: string;
  billingInterval: string;
  billingIntervalCount?: number;
  amount: number;
  currency?: string;
  healthieOfferingId?: string;
  healthieUserId?: string;
  metadata?: any;
}

export interface UpdateSubscriptionInput {
  status?: string;
  currentPeriodStart?: Date;
  currentPeriodEnd?: Date;
  cancelAtPeriodEnd?: boolean;
  canceledAt?: Date;
  metadata?: any;
}

export class SubscriptionService {
  /**
   * Create a new subscription
   */
  static async createSubscription(data: CreateSubscriptionInput): Promise<Subscription> {
    try {
      console.log('🔄 SubscriptionService.createSubscription - Starting...');
      console.log('📋 Subscription data:', JSON.stringify(data, null, 2));

      const subscription = await prisma.subscription.create({
        data: {
          userId: data.userId,
          patientId: data.patientId,
          stripeSubscriptionId: data.stripeSubscriptionId,
          stripeCustomerId: data.stripeCustomerId,
          stripePriceId: data.stripePriceId,
          stripeProductId: data.stripeProductId,
          status: data.status,
          currentPeriodStart: data.currentPeriodStart,
          currentPeriodEnd: data.currentPeriodEnd,
          cancelAtPeriodEnd: data.cancelAtPeriodEnd || false,
          productType: data.productType,
          planType: data.planType,
          planName: data.planName,
          planDescription: data.planDescription,
          billingInterval: data.billingInterval,
          billingIntervalCount: data.billingIntervalCount || 1,
          amount: data.amount,
          currency: data.currency || 'usd',
          healthieOfferingId: data.healthieOfferingId,
          healthieUserId: data.healthieUserId,
          metadata: data.metadata || {}
        },
        include: {
          user: true,
          patient: true,
          payments: true
        }
      });

      console.log('✅ SubscriptionService.createSubscription - Success:', {
        id: subscription.id,
        stripeSubscriptionId: subscription.stripeSubscriptionId,
        status: subscription.status,
        amount: subscription.amount
      });

      return subscription;
    } catch (error) {
      console.error('❌ SubscriptionService.createSubscription - Failed:', error);
      throw error;
    }
  }

  /**
   * Get subscription by ID
   */
  static async getSubscriptionById(id: number): Promise<Subscription | null> {
    try {
      console.log('🔍 SubscriptionService.getSubscriptionById - Searching for ID:', id);
      
      const subscription = await prisma.subscription.findUnique({
        where: { id },
        include: {
          user: true,
          patient: true,
          payments: {
            orderBy: { createdAt: 'desc' },
            take: 10
          },
          _count: {
            select: { payments: true }
          }
        }
      });

      console.log('🔍 SubscriptionService.getSubscriptionById - Result:', subscription ? {
        id: subscription.id,
        status: subscription.status,
        paymentsCount: subscription._count.payments
      } : 'Not found');

      return subscription;
    } catch (error) {
      console.error('❌ SubscriptionService.getSubscriptionById - Failed:', error);
      return null;
    }
  }

  /**
   * Get subscriptions by status
   */
  static async getSubscriptionsByStatus(status: string): Promise<Subscription[]> {
    try {
      console.log('🔍 SubscriptionService.getSubscriptionsByStatus - Status:', status);
      
      const subscriptions = await prisma.subscription.findMany({
        where: { status },
        include: {
          user: true,
          patient: true,
          payments: {
            orderBy: { createdAt: 'desc' },
            take: 5
          },
          _count: {
            select: { payments: true }
          }
        },
        orderBy: { createdAt: 'desc' }
      });

      console.log('🔍 SubscriptionService.getSubscriptionsByStatus - Found:', subscriptions.length);
      return subscriptions;
    } catch (error) {
      console.error('❌ SubscriptionService.getSubscriptionsByStatus - Failed:', error);
      return [];
    }
  }

  /**
   * Get subscriptions by user
   */
  static async getSubscriptionsByUser(userId: number): Promise<Subscription[]> {
    try {
      console.log('🔍 SubscriptionService.getSubscriptionsByUser - User ID:', userId);
      
      const subscriptions = await prisma.subscription.findMany({
        where: { userId },
        include: {
          user: true,
          patient: true,
          payments: {
            orderBy: { createdAt: 'desc' },
            take: 5
          },
          _count: {
            select: { payments: true }
          }
        },
        orderBy: { createdAt: 'desc' }
      });

      console.log('🔍 SubscriptionService.getSubscriptionsByUser - Found:', subscriptions.length);
      return subscriptions;
    } catch (error) {
      console.error('❌ SubscriptionService.getSubscriptionsByUser - Failed:', error);
      return [];
    }
  }

  /**
   * Get recent subscriptions with pagination
   */
  static async getRecentSubscriptions(limit: number = 10, offset: number = 0): Promise<Subscription[]> {
    try {
      console.log('🔍 SubscriptionService.getRecentSubscriptions - Limit:', limit, 'Offset:', offset);
      
      const subscriptions = await prisma.subscription.findMany({
        include: {
          user: true,
          patient: true,
          payments: {
            orderBy: { createdAt: 'desc' },
            take: 5
          },
          _count: {
            select: { payments: true }
          }
        },
        orderBy: { createdAt: 'desc' },
        take: limit,
        skip: offset
      });

      console.log('🔍 SubscriptionService.getRecentSubscriptions - Found:', subscriptions.length);
      return subscriptions;
    } catch (error) {
      console.error('❌ SubscriptionService.getRecentSubscriptions - Failed:', error);
      return [];
    }
  }

  /**
   * Find subscription by Stripe subscription ID
   */
  static async findByStripeId(stripeSubscriptionId: string): Promise<Subscription | null> {
    try {
      console.log('🔍 SubscriptionService.findByStripeId - Searching for:', stripeSubscriptionId);
      
      const subscription = await prisma.subscription.findUnique({
        where: { stripeSubscriptionId },
        include: {
          user: true,
          patient: true,
          payments: {
            orderBy: { createdAt: 'desc' },
            take: 10 // Last 10 payments
          }
        }
      });

      console.log('🔍 SubscriptionService.findByStripeId - Result:', subscription ? {
        id: subscription.id,
        status: subscription.status,
        paymentsCount: subscription.payments.length
      } : 'Not found');

      return subscription;
    } catch (error) {
      console.error('❌ SubscriptionService.findByStripeId - Failed:', error);
      return null;
    }
  }

  /**
   * Update subscription by ID
   */
  static async updateSubscription(
    id: number,
    updates: UpdateSubscriptionInput
  ): Promise<Subscription | null> {
    try {
      console.log('🔄 SubscriptionService.updateSubscription - Starting...');
      console.log('📋 Subscription ID:', id);
      console.log('📋 Updates:', JSON.stringify(updates, null, 2));

      const subscription = await prisma.subscription.update({
        where: { id },
        data: {
          ...updates,
          updatedAt: new Date()
        },
        include: {
          user: true,
          patient: true,
          payments: true,
          _count: {
            select: { payments: true }
          }
        }
      });

      console.log('✅ SubscriptionService.updateSubscription - Success:', {
        id: subscription.id,
        status: subscription.status,
        updatedAt: subscription.updatedAt
      });

      return subscription;
    } catch (error) {
      console.error('❌ SubscriptionService.updateSubscription - Failed:', error);
      return null;
    }
  }

  /**
   * Update subscription by Stripe ID
   */
  static async updateSubscriptionByStripeId(
    stripeSubscriptionId: string,
    updates: UpdateSubscriptionInput
  ): Promise<Subscription | null> {
    try {
      console.log('🔄 SubscriptionService.updateSubscriptionByStripeId - Starting...');
      console.log('📋 Stripe Subscription ID:', stripeSubscriptionId);
      console.log('📋 Updates:', JSON.stringify(updates, null, 2));

      const subscription = await prisma.subscription.update({
        where: { stripeSubscriptionId },
        data: {
          ...updates,
          updatedAt: new Date()
        },
        include: {
          user: true,
          patient: true,
          payments: true
        }
      });

      console.log('✅ SubscriptionService.updateSubscriptionByStripeId - Success:', {
        id: subscription.id,
        status: subscription.status,
        updatedAt: subscription.updatedAt
      });

      return subscription;
    } catch (error) {
      console.error('❌ SubscriptionService.updateSubscriptionByStripeId - Failed:', error);
      return null;
    }
  }

  /**
   * Cancel subscription by ID
   */
  static async cancelSubscription(id: number): Promise<Subscription | null> {
    try {
      console.log('🔄 SubscriptionService.cancelSubscription - Canceling subscription ID:', id);
      // First get the subscription to find the Stripe ID
      const subscription = await this.getSubscriptionById(id);
      if (!subscription) {
        console.error('❌ Subscription not found:', id);
        return null;
      }
      console.log('🔍 Found subscription with Stripe ID:', subscription.stripeSubscriptionId);
      // Cancel in Stripe first
      try {
        console.log('🔄 Canceling subscription in Stripe...');
        await stripe.subscriptions.cancel(subscription.stripeSubscriptionId);
        console.log('✅ Successfully canceled subscription in Stripe');
      } catch (stripeError) {
        console.error('❌ Failed to cancel subscription in Stripe:', stripeError);
        return null;
      }
      // Update in database only if Stripe succeeded
      return await this.updateSubscription(id, {
        status: 'canceled',
        canceledAt: new Date(),
        cancelAtPeriodEnd: false
      });
    } catch (error) {
      console.error('❌ SubscriptionService.cancelSubscription - Failed:', error);
      return null;
    }
  }

  /**
   * Cancel subscription by Stripe ID
   */
  static async cancelSubscriptionByStripeId(stripeSubscriptionId: string): Promise<Subscription | null> {
    try {
      console.log('🔄 SubscriptionService.cancelSubscriptionByStripeId - Canceling:', stripeSubscriptionId);
      // Cancel in Stripe first
      try {
        console.log('🔄 Canceling subscription in Stripe...');
        await stripe.subscriptions.cancel(stripeSubscriptionId);
        console.log('✅ Successfully canceled subscription in Stripe');
      } catch (stripeError) {
        console.error('❌ Failed to cancel subscription in Stripe:', stripeError);
        return null;
      }
      // Update in database only if Stripe succeeded
      return await this.updateSubscriptionByStripeId(stripeSubscriptionId, {
        status: 'canceled',
        canceledAt: new Date()
      });
    } catch (error) {
      console.error('❌ Failed to cancel subscription:', error);
      return null;
    }
  }

  /**
   * Reactivate subscription by ID
   */
  static async reactivateSubscription(id: number): Promise<Subscription | null> {
    try {
      console.log('🔄 SubscriptionService.reactivateSubscription - Reactivating subscription ID:', id);
      
      return await this.updateSubscription(id, {
        status: 'active',
        cancelAtPeriodEnd: false,
        canceledAt: null
      });
    } catch (error) {
      console.error('❌ SubscriptionService.reactivateSubscription - Failed:', error);
      return null;
    }
  }

  /**
   * Get active subscriptions for a user
   */
  static async getActiveSubscriptions(userId: number): Promise<Subscription[]> {
    try {
      return await prisma.subscription.findMany({
        where: { 
          userId,
          status: { in: ['active', 'trialing'] }
        },
        include: {
          user: true,
          patient: true,
          payments: {
            orderBy: { createdAt: 'desc' },
            take: 5 // Last 5 payments per subscription
          }
        },
        orderBy: { createdAt: 'desc' }
      });
    } catch (error) {
      console.error('❌ Failed to get active subscriptions:', error);
      return [];
    }
  }

  /**
   * Get all subscriptions for a user
   */
  static async getUserSubscriptions(userId: number): Promise<Subscription[]> {
    try {
      return await prisma.subscription.findMany({
        where: { userId },
        include: {
          user: true,
          patient: true,
          payments: {
            orderBy: { createdAt: 'desc' },
            take: 5
          }
        },
        orderBy: { createdAt: 'desc' }
      });
    } catch (error) {
      console.error('❌ Failed to get user subscriptions:', error);
      return [];
    }
  }

  /**
   * Mark subscription for cancellation at period end
   */
  static async cancelAtPeriodEnd(stripeSubscriptionId: string): Promise<Subscription | null> {
    try {
      return await this.updateSubscriptionByStripeId(stripeSubscriptionId, {
        cancelAtPeriodEnd: true
      });
    } catch (error) {
      console.error('❌ Failed to mark subscription for cancellation:', error);
      return null;
    }
  }

  /**
   * Get subscription statistics
   */
  static async getSubscriptionStats(userId?: number): Promise<{
    total: number;
    active: number;
    canceled: number;
    pastDue: number;
    totalMRR: number;
    averageAmount: number;
  }> {
    try {
      const where = userId ? { userId } : {};
      
      const [total, active, canceled, pastDue, subscriptions] = await Promise.all([
        prisma.subscription.count({ where }),
        prisma.subscription.count({ where: { ...where, status: 'active' } }),
        prisma.subscription.count({ where: { ...where, status: 'canceled' } }),
        prisma.subscription.count({ where: { ...where, status: 'past_due' } }),
        prisma.subscription.findMany({
          where: { ...where, status: 'active' },
          select: { amount: true, billingInterval: true, billingIntervalCount: true }
        })
      ]);

      // Calculate Monthly Recurring Revenue (MRR)
      let totalMRR = 0;
      let totalAmount = 0;
      
      subscriptions.forEach(sub => {
        totalAmount += sub.amount;
        
        // Convert to monthly amount
        const intervalCount = sub.billingIntervalCount || 1;
        if (sub.billingInterval === 'month') {
          totalMRR += sub.amount / intervalCount;
        } else if (sub.billingInterval === 'year') {
          totalMRR += (sub.amount / intervalCount) / 12;
        } else if (sub.billingInterval === 'week') {
          totalMRR += (sub.amount / intervalCount) * 4.33; // Average weeks per month
        }
      });

      const averageAmount = active > 0 ? totalAmount / active : 0;

      return { 
        total, 
        active, 
        canceled, 
        pastDue, 
        totalMRR: Math.round(totalMRR),
        averageAmount: Math.round(averageAmount)
      };
    } catch (error) {
      console.error('❌ Failed to get subscription stats:', error);
      return { total: 0, active: 0, canceled: 0, pastDue: 0, totalMRR: 0, averageAmount: 0 };
    }
  }

  /**
   * Get subscriptions expiring soon (within next 7 days)
   */
  static async getExpiringSoon(): Promise<Subscription[]> {
    try {
      const sevenDaysFromNow = new Date();
      sevenDaysFromNow.setDate(sevenDaysFromNow.getDate() + 7);

      return await prisma.subscription.findMany({
        where: {
          status: 'active',
          currentPeriodEnd: {
            lte: sevenDaysFromNow
          }
        },
        include: {
          user: true,
          patient: true
        },
        orderBy: { currentPeriodEnd: 'asc' }
      });
    } catch (error) {
      console.error('❌ Failed to get expiring subscriptions:', error);
      return [];
    }
  }
} 