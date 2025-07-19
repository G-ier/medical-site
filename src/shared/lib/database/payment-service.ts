import { PrismaClient, PaymentStatus, Payment } from '@prisma/client';
import { healthieClient } from '../../api/healthie';

const prisma = new PrismaClient();

export interface CreatePaymentInput {
  userId: number;
  patientId?: number; // Add patientId field
  subscriptionId?: number; // Add for linking to subscription table
  stripePaymentIntentId?: string; // Make optional for subscriptions
  stripeSubscriptionId?: string; // Add for subscriptions
  stripeInvoiceId?: string; // Add for Stripe invoice ID
  stripePriceId?: string;
  stripeProductId?: string;
  subscriptionStatus?: string;
  currentPeriodStart?: Date;
  currentPeriodEnd?: Date;
  amount: number;
  currency: string;
  status: PaymentStatus;
  metadata?: any;
  productType: string;
  planType: string;
  planName?: string;
  servicesProvided?: string;
  stripeCustomerId?: string;
  paymentMethod?: string;
  healthieOfferingId?: string; // Add for Healthie offering ID
}

export interface UpdatePaymentInput {
  status?: PaymentStatus;
  paymentMethod?: string;
  paidAt?: Date;
  metadata?: any;
  stripeCustomerId?: string;
  stripeInvoiceId?: string;
  subscriptionStatus?: string;
  currentPeriodStart?: Date;
  currentPeriodEnd?: Date;
}

export interface HealthieCardData {
  token: string;
  cardTypeLabel?: string;
  userId: string;
  isDefault: boolean;
}

export interface HealthieBillingData {
  amountPaid: string;
  senderId: string;
  requestedPaymentId?: string;
  stripeIdempotencyKey: string;
  stripeCustomerDetailId: string;
  offeringId: string;
  shouldCharge: boolean;
}

export class PaymentService {
  /**
   * Create a new payment record
   */
  static async createPayment(data: CreatePaymentInput): Promise<Payment> {
    try {
      console.log('💾 PaymentService.createPayment - Starting...');
      console.log('📋 Input data:', JSON.stringify({
        ...data,
        metadata: data.metadata || null
      }, null, 2));

      const payment = await prisma.payment.create({
        data: {
          userId: data.userId,
          patientId: data.patientId, // Add patientId to create data
          subscriptionId: data.subscriptionId, // Add subscriptionId
          stripePaymentIntentId: data.stripePaymentIntentId,
          stripeSubscriptionId: data.stripeSubscriptionId,
          stripeInvoiceId: data.stripeInvoiceId, // Add stripe invoice ID
          stripePriceId: data.stripePriceId,
          stripeProductId: data.stripeProductId,
          subscriptionStatus: data.subscriptionStatus,
          currentPeriodStart: data.currentPeriodStart,
          currentPeriodEnd: data.currentPeriodEnd,
          amount: data.amount,
          currency: data.currency,
          status: data.status,
          metadata: data.metadata || {},
          productType: data.productType,
          planType: data.planType,
          planName: data.planName,
          servicesProvided: data.servicesProvided,
          stripeCustomerId: data.stripeCustomerId,
          paymentMethod: data.paymentMethod,
          healthieOfferingId: data.healthieOfferingId, // Add Healthie offering ID
          paidAt: data.status === 'SUCCEEDED' ? new Date() : null
        },
        include: {
          user: true,
          patient: true
        }
      });

      console.log('✅ PaymentService.createPayment - Success:', {
        id: payment.id,
        stripePaymentIntentId: payment.stripePaymentIntentId,
        amount: payment.amount,
        status: payment.status,
        userId: payment.userId,
        patientId: payment.patientId // Add patientId to logs
      });
      return payment;
    } catch (error) {
      console.error('❌ PaymentService.createPayment - Failed:', error);
      console.error('❌ Error details:', error instanceof Error ? error.message : error);
      throw new Error('Failed to create payment record');
    }
  }

  /**
   * Find payment by Stripe Payment Intent ID
   */
  static async findPaymentByStripeId(stripePaymentIntentId: string): Promise<Payment | null> {
    try {
      console.log('🔍 PaymentService.findPaymentByStripeId - Searching for:', stripePaymentIntentId);
      
      const payment = await prisma.payment.findUnique({
        where: { stripePaymentIntentId },
        include: {
          user: true,
          patient: true
        }
      });

      console.log('🔍 PaymentService.findPaymentByStripeId - Result:', payment ? {
        id: payment.id,
        status: payment.status,
        amount: payment.amount
      } : 'Not found');

      return payment;
    } catch (error) {
      console.error('❌ PaymentService.findPaymentByStripeId - Failed:', error);
      console.error('❌ Error details:', error instanceof Error ? error.message : error);
      return null;
    }
  }

  /**
   * Update payment status and details
   */
  static async updatePayment(
    stripePaymentIntentId: string, 
    updates: UpdatePaymentInput
  ): Promise<Payment | null> {
    try {
      console.log('🔄 PaymentService.updatePayment - Starting...');
      console.log('📋 Stripe Payment Intent ID:', stripePaymentIntentId);
      console.log('📋 Updates:', JSON.stringify(updates, null, 2));

      const updateData: any = {
        ...updates,
        updatedAt: new Date()
      };

      // Set paidAt if status is SUCCEEDED
      if (updates.status === 'SUCCEEDED') {
        updateData.paidAt = new Date();
        console.log('💰 Setting paidAt timestamp for SUCCEEDED status');
      }

      console.log('🔄 Executing payment update with data:', JSON.stringify(updateData, null, 2));

      const payment = await prisma.payment.update({
        where: { stripePaymentIntentId },
        data: updateData,
        include: {
          user: true,
          patient: true
        }
      });

      console.log('✅ PaymentService.updatePayment - Success:', {
        id: payment.id,
        status: payment.status,
        amount: payment.amount,
        paidAt: payment.paidAt
      });
      return payment;
    } catch (error) {
      console.error('❌ PaymentService.updatePayment - Failed:', error);
      console.error('❌ Error details:', error instanceof Error ? error.message : error);
      return null;
    }
  }

  /**
   * Get payments by user ID
   */
  static async getPaymentsByUser(userId: number): Promise<Payment[]> {
    try {
      return await prisma.payment.findMany({
        where: { userId },
        include: {
          user: true,
          patient: true
        },
        orderBy: { createdAt: 'desc' }
      });
    } catch (error) {
      console.error('❌ Failed to get user payments:', error);
      return [];
    }
  }

  /**
   * Get payment by ID
   */
  static async getPaymentById(id: number): Promise<Payment | null> {
    try {
      return await prisma.payment.findUnique({
        where: { id },
        include: {
          user: true,
          patient: true
        }
      });
    } catch (error) {
      console.error('❌ Failed to get payment by ID:', error);
      return null;
    }
  }

  /**
   * Get payment statistics
   */
  static async getPaymentStats(userId?: number) {
    try {
      const where = userId ? { userId } : {};
      
      const [total, succeeded, failed, pending] = await Promise.all([
        prisma.payment.count({ where }),
        prisma.payment.count({ where: { ...where, status: 'SUCCEEDED' } }),
        prisma.payment.count({ where: { ...where, status: 'FAILED' } }),
        prisma.payment.count({ where: { ...where, status: 'PENDING' } })
      ]);

      const totalAmount = await prisma.payment.aggregate({
        where: { ...where, status: 'SUCCEEDED' },
        _sum: { amount: true }
      });

      return {
        total,
        succeeded,
        failed,
        pending,
        totalAmount: totalAmount._sum.amount || 0
      };
    } catch (error) {
      console.error('❌ Failed to get payment stats:', error);
      return {
        total: 0,
        succeeded: 0,
        failed: 0,
        pending: 0,
        totalAmount: 0
      };
    }
  }

  /**
   * Get recent payments with pagination
   */
  static async getRecentPayments(limit: number = 10, offset: number = 0): Promise<Payment[]> {
    try {
      return await prisma.payment.findMany({
        include: {
          user: true,
          patient: true
        },
        orderBy: { createdAt: 'desc' },
        take: limit,
        skip: offset
      });
    } catch (error) {
      console.error('❌ Failed to get recent payments:', error);
      return [];
    }
  }

  /**
   * Update payment with Healthie invoice data
   */
  static async updatePaymentWithHealthieInvoice(
    paymentId: number, 
    healthieInvoiceId: string,
    status: 'PENDING' | 'SENT' | 'VIEWED' | 'PAID' | 'PARTIALLY_PAID' | 'OVERDUE' | 'CANCELLED' | 'REFUNDED' | 'FAILED' | 'DISPUTED' = 'PENDING',
    additionalData?: {
      amount?: number;
      dueDate?: Date;
      paidDate?: Date;
      notes?: string;
      url?: string;
    }
  ): Promise<Payment | null> {
    try {
      const updateData: any = {
        healthieInvoiceId,
        healthieInvoiceStatus: status,
        healthieLastSyncAt: new Date(),
        updatedAt: new Date()
      };

      if (additionalData) {
        if (additionalData.amount) updateData.healthieInvoiceAmount = additionalData.amount;
        if (additionalData.dueDate) updateData.healthieInvoiceDueDate = additionalData.dueDate;
        if (additionalData.paidDate) updateData.healthieInvoicePaidDate = additionalData.paidDate;
        if (additionalData.notes) updateData.healthieInvoiceNotes = additionalData.notes;
        if (additionalData.url) updateData.healthieInvoiceUrl = additionalData.url;
      }

      const payment = await prisma.payment.update({
        where: { id: paymentId },
        data: updateData,
        include: {
          user: true,
          patient: true
        }
      });

      console.log('✅ Payment updated with Healthie invoice:', {
        paymentId: payment.id,
        healthieInvoiceId,
        status,
        lastSyncAt: payment.healthieLastSyncAt
      });
      return payment;
    } catch (error) {
      console.error('❌ Failed to update payment with Healthie invoice:', error);
      return null;
    }
  }

  /**
   * Store card in Healthie and return customer detail ID
   */
  static async storeCardInHealthie(cardData: HealthieCardData): Promise<string> {
    try {
      console.log('💳 Storing card in Healthie for user:', cardData.userId);
      
      const result = await healthieClient.storeCardInHealthie({
        token: cardData.token,
        card_type_label: cardData.cardTypeLabel || 'personal',
        user_id: cardData.userId,
        is_default: cardData.isDefault
      });

      if (!result.success || !result.data) {
        throw new Error('Failed to store card in Healthie');
      }

      // Fix: Healthie returns createStripeCustomerDetail.stripe_customer_detail.id
      const responseData = result.data as any;
      const customerDetailId = responseData?.createStripeCustomerDetail?.stripe_customer_detail?.id;
      if (!customerDetailId) {
        console.error('❌ No customer detail ID in response:', result.data);
        console.error('❌ Expected path: createStripeCustomerDetail.stripe_customer_detail.id');
        console.error('❌ Full response structure:', JSON.stringify(result, null, 2));
        throw new Error('No customer detail ID returned from Healthie');
      }

      console.log('✅ Card stored in Healthie, customer detail ID:', customerDetailId);
      return customerDetailId;
    } catch (error) {
      console.error('❌ Error storing card in Healthie:', error);
      throw error;
    }
  }

  /**
   * Create billing item in Healthie
   */
  static async createHealthieBillingItem(billingData: HealthieBillingData): Promise<string> {
    try {
      console.log('💰 PaymentService.createHealthieBillingItem - Starting...');
      console.log('📋 Billing data:', JSON.stringify(billingData, null, 2));
      
      console.log('🚀 Calling Healthie API to charge patient...');
      const result = await healthieClient.chargePatientInHealthie({
        amountPaid: billingData.amountPaid,
        senderId: billingData.senderId,
        requestedPaymentId: billingData.requestedPaymentId,
        stripeIdempotencyKey: billingData.stripeIdempotencyKey,
        stripeCustomerDetailId: billingData.stripeCustomerDetailId,
        offering_id: billingData.offeringId,
        shouldCharge: billingData.shouldCharge
      });

      console.log('📨 Healthie charge response:', JSON.stringify(result, null, 2));

      if (!result.success || !result.data) {
        console.error('❌ Healthie billing item creation failed:', result.error);
        throw new Error('Failed to create billing item in Healthie');
      }

      // Fix: Healthie returns createBillingItem.billingItem.id
      const responseData = result.data as any;
      const billingItemId = responseData?.createBillingItem?.billingItem?.id;
      if (!billingItemId) {
        console.error('❌ No billing item ID in response:', result.data);
        console.error('❌ Expected path: createBillingItem.billingItem.id');
        console.error('❌ Full response structure:', JSON.stringify(result, null, 2));
        throw new Error('No billing item ID returned from Healthie');
      }

      console.log('✅ PaymentService.createHealthieBillingItem - Success with ID:', billingItemId);
      return billingItemId;
    } catch (error) {
      console.error('❌ Error creating billing item in Healthie:', error);
      throw error;
    }
  }

  /**
   * Update payment with Healthie data
   */
  static async updatePaymentWithHealthieData(
    paymentId: number,
    healthieData: {
      customerDetailId?: string;
      billingItemId?: string;
      offeringId?: string;
    }
  ): Promise<Payment | null> {
    try {
      console.log('🔄 PaymentService.updatePaymentWithHealthieData - Starting...');
      console.log('📋 Payment ID:', paymentId);
      console.log('📋 Healthie data:', JSON.stringify(healthieData, null, 2));
      
      console.log('💾 Executing database update...');
      const payment = await prisma.payment.update({
        where: { id: paymentId },
        data: {
          healthieCustomerDetailId: healthieData.customerDetailId,
          healthieBillingItemId: healthieData.billingItemId,
          healthieOfferingId: healthieData.offeringId,
          healthieInvoiceStatus: healthieData.billingItemId ? 'PENDING' : undefined,
        },
        include: {
          user: true,
          patient: true
        }
      });

      console.log('✅ PaymentService.updatePaymentWithHealthieData - Success:', {
        paymentId: payment.id,
        healthieCustomerDetailId: payment.healthieCustomerDetailId,
        healthieBillingItemId: payment.healthieBillingItemId,
        healthieOfferingId: payment.healthieOfferingId,
        healthieInvoiceStatus: payment.healthieInvoiceStatus
      });
      return payment;
    } catch (error) {
      console.error('❌ PaymentService.updatePaymentWithHealthieData - Failed:', error);
      console.error('❌ Error details:', error instanceof Error ? error.message : error);
      return null;
    }
  }

  /**
   * Complete payment flow with Healthie integration
   */
  static async processPaymentWithHealthie({
    paymentId,
    stripeToken,
    healthieUserId,
    offeringId,
    shouldCharge = true
  }: {
    paymentId: number;
    stripeToken: string;
    healthieUserId: string;
    offeringId: string;
    shouldCharge?: boolean;
  }): Promise<{
    customerDetailId: string;
    billingItemId: string;
  }> {
    try {
      console.log('🔄 Processing payment with Healthie integration:', paymentId);
      
      // Get payment details
      const payment = await PaymentService.getPaymentById(paymentId);
      if (!payment) {
        throw new Error('Payment not found');
      }

      // Store card in Healthie
      const customerDetailId = await PaymentService.storeCardInHealthie({
        token: stripeToken,
        userId: healthieUserId,
        isDefault: true
      });

      // Create billing item in Healthie
      const billingItemId = await PaymentService.createHealthieBillingItem({
        amountPaid: (payment.amount / 100).toString(), // Convert cents to dollars
        senderId: healthieUserId,
        stripeIdempotencyKey: payment.stripePaymentIntentId,
        stripeCustomerDetailId: customerDetailId,
        offeringId: offeringId,
        shouldCharge
      });

      // Update payment with Healthie data
      await PaymentService.updatePaymentWithHealthieData(paymentId, {
        customerDetailId,
        billingItemId,
        offeringId
      });

      console.log('✅ Payment processed with Healthie integration');
      return { customerDetailId, billingItemId };
    } catch (error) {
      console.error('❌ Error processing payment with Healthie:', error);
      throw error;
    }
  }

  /**
   * Create invoice in Healthie
   */
  static async createHealthieInvoice({
    recipientId,
    offeringId,
    price,
    invoiceType = 'offering',
    status = 'Paid',
    notes,
    servicesProvided
  }: {
    recipientId: string;
    offeringId?: string;
    price: string;
    invoiceType?: string;
    status?: string;
    notes?: string;
    servicesProvided?: string;
  }): Promise<string> {
    try {
      console.log('🏥 PaymentService.createHealthieInvoice - Starting...');
      console.log('📋 Invoice data:', JSON.stringify({
        recipientId,
        offeringId,
        price,
        invoiceType,
        status,
        notes,
        servicesProvided
      }, null, 2));
      console.log('📄 Creating invoice in Healthie:', { 
        recipientId, 
        offeringId, 
        price, 
        invoiceType, 
        status, 
        servicesProvided 
      });
      // Set default services_provided if not provided
      const defaultServicesProvided = servicesProvided || 'Medical Weight Loss Program';
      console.log('🚀 Calling Healthie API to create invoice...');
      const result = await healthieClient.createInvoice({
        recipient_id: recipientId,
        offering_id: offeringId || null,
        price: price,
        invoice_type: invoiceType,
        status: status,
        notes: notes,
        services_provided: defaultServicesProvided
      });

      console.log('📨 Healthie API response:', JSON.stringify(result, null, 2));

      if (!result.success || !result.data) {
        console.error('❌ Healthie invoice creation failed:', result.error);
        throw new Error('Failed to create invoice in Healthie');
      }

      console.log('🔄 Healthie result data:', result.data);

      // Fix: Healthie returns createRequestedPayment.requestedPayment.id
      const responseData = result.data as any;
      const invoiceId = responseData?.createRequestedPayment?.requestedPayment?.id;
      if (!invoiceId) {
        console.error('❌ No invoice ID in response:', result.data);
        console.error('❌ Expected path: createRequestedPayment.requestedPayment.id');
        console.error('❌ Full response structure:', JSON.stringify(result, null, 2));
        throw new Error('No invoice ID returned from Healthie');
      }

      console.log('✅ PaymentService.createHealthieInvoice - Success with ID:', invoiceId);
      return invoiceId;
    } catch (error) {
      console.error('❌ Error creating invoice in Healthie:', error);
      throw error;
    }
  }

  /**
   * Get user's payment cards from Healthie
   */
  static async getUserPaymentCards(healthieUserId: string): Promise<Array<{
    id: string;
    card_type_label?: string;
  }>> {
    try {
      console.log('💳 Getting payment cards from Healthie for user:', healthieUserId);
      
      const result = await healthieClient.getPaymentCardsFromHealthie({
        user_id: healthieUserId
      });

      if (!result.success) {
        throw new Error('Failed to get payment cards from Healthie');
      }

      console.log('✅ Retrieved payment cards from Healthie:', result.data?.length || 0);
      return result.data || [];
    } catch (error) {
      console.error('❌ Error getting payment cards from Healthie:', error);
      throw error;
    } 
  }

  /**
   * Get user's package selections from Healthie
   */
  static async getUserPackageSelections({
    healthieUserId,
    offeringId,
    offset = 0
  }: {
    healthieUserId: string;
    offeringId?: string;
    offset?: number;
  }): Promise<{
    count: number;
    selections: Array<{
      id: string;
      offering: {
        id: string;
        name: string;
        description: string;
        price: string;
        billing_frequency: string;
      };
      created_at: string;
    }>;
  }> {
    try {
      console.log('📦 Getting package selections from Healthie for user:', healthieUserId);
      
      const result = await healthieClient.getUserPackageSelections({
        user_id: healthieUserId,
        offering_id: offeringId || null,
        offset
      });

      if (!result.success || !result.data) {
        throw new Error('Failed to get package selections from Healthie');
      }

      console.log('✅ Retrieved package selections from Healthie:', result.data.userPackageSelectionsCount);
      return {
        count: result.data.userPackageSelectionsCount,
        selections: result.data.userPackageSelections
      };
    } catch (error) {
      console.error('❌ Error getting package selections from Healthie:', error);
      throw error;
    }
  }

  /**
   * Enhanced payment flow with invoice creation
   */
  static async processPaymentWithInvoice({
    paymentId,
    healthieUserId,
    offeringId,
    price,
    invoiceType = 'standard'
  }: {
    paymentId: number;
    healthieUserId: string;
    offeringId: string;
    price: string;
    invoiceType?: string;
  }): Promise<{
    invoiceId: string;
    billingItemId?: string;
  }> {
    try {
      console.log('🔄 Processing payment with invoice creation:', paymentId);
      
      // Create invoice first
      const invoiceId = await PaymentService.createHealthieInvoice({
        recipientId: healthieUserId,
        offeringId,
        price,
        invoiceType
      });

      // Get payment details
      const payment = await PaymentService.getPaymentById(paymentId);
      if (!payment) {
        throw new Error('Payment not found');
      }

      // Create billing item with invoice reference
      const billingItemId = await PaymentService.createHealthieBillingItem({
        amountPaid: price,
        senderId: healthieUserId,
        requestedPaymentId: invoiceId, // Link to invoice
        stripeIdempotencyKey: payment.stripePaymentIntentId,
        stripeCustomerDetailId: '', // Will be set when card is stored
        offeringId: offeringId,
        shouldCharge: false // Already charged via Stripe
      });

      // Update payment with Healthie data
      await PaymentService.updatePaymentWithHealthieData(paymentId, {
        billingItemId,
        offeringId
      });

      console.log('✅ Payment processed with invoice creation');
      return { invoiceId, billingItemId };
    } catch (error) {
      console.error('❌ Error processing payment with invoice:', error);
      throw error;
    }
  }

  /**
   * Delete payment (soft delete by updating status)
   */
  static async cancelPayment(stripePaymentIntentId: string): Promise<Payment | null> {
    try {
      return await this.updatePayment(stripePaymentIntentId, {
        status: 'CANCELLED'
      });
    } catch (error) {
      console.error('❌ Failed to cancel payment:', error);
      return null;
    }
  }

  /**
   * Find payments by status
   */
  static async getPaymentsByStatus(status: PaymentStatus): Promise<Payment[]> {
    try {
      return await prisma.payment.findMany({
        where: { status },
        include: {
          user: true,
          patient: true
        },
        orderBy: { createdAt: 'desc' }
      });
    } catch (error) {
      console.error('❌ Failed to get payments by status:', error);
      return [];
    }
  }

  /**
   * Find payment by Stripe Subscription ID
   */
  static async findPaymentBySubscriptionId(stripeSubscriptionId: string): Promise<Payment | null> {
    try {
      if (!stripeSubscriptionId) {
        console.error('❌ PaymentService.findPaymentBySubscriptionId - Invalid argument: stripeSubscriptionId is null or undefined');
        return null;
      }
      console.log('🔍 PaymentService.findPaymentBySubscriptionId - Searching for:', stripeSubscriptionId);
      
      const payment = await prisma.payment.findFirst({
        where: { stripeSubscriptionId },
        include: {
          user: true,
          patient: true
        },
        orderBy: { createdAt: 'desc' } // Get the most recent payment for this subscription
      });

      console.log('🔍 PaymentService.findPaymentBySubscriptionId - Result:', payment ? {
        id: payment.id,
        status: payment.status,
        subscriptionStatus: payment.subscriptionStatus,
        amount: payment.amount
      } : 'Not found');

      return payment;
    } catch (error) {
      console.error('❌ PaymentService.findPaymentBySubscriptionId - Failed:', error);
      console.error('❌ Error details:', error instanceof Error ? error.message : error);
      return null;
    }
  }

  /**
   * Update subscription payment
   */
  static async updateSubscriptionPayment(
    stripeSubscriptionId: string,
    updates: UpdatePaymentInput
  ): Promise<Payment | null> {
    try {
      console.log('🔄 PaymentService.updateSubscriptionPayment - Starting...');
      console.log('📋 Stripe Subscription ID:', stripeSubscriptionId);
      console.log('📋 Updates:', JSON.stringify(updates, null, 2));

      const updateData: any = {
        ...updates,
        updatedAt: new Date()
      };

      // Set paidAt if status is SUCCEEDED
      if (updates.status === 'SUCCEEDED') {
        updateData.paidAt = new Date();
        console.log('💰 Setting paidAt timestamp for SUCCEEDED status');
      }

      console.log('🔄 Executing subscription payment update with data:', JSON.stringify(updateData, null, 2));

      // First find the payment, then update it
      const existingPayment = await prisma.payment.findFirst({
        where: { stripeSubscriptionId },
        orderBy: { createdAt: 'desc' }
      });
      
      if (!existingPayment) {
        console.error('❌ PaymentService.updateSubscriptionPayment - Payment not found for subscription:', stripeSubscriptionId);
        return null;
      }
      
      const payment = await prisma.payment.update({
        where: { id: existingPayment.id },
        data: updateData,
        include: {
          user: true,
          patient: true
        }
      });

      console.log('✅ PaymentService.updateSubscriptionPayment - Success:', {
        id: payment.id,
        status: payment.status,
        subscriptionStatus: payment.subscriptionStatus,
        amount: payment.amount,
        paidAt: payment.paidAt
      });
      return payment;
    } catch (error) {
      console.error('❌ PaymentService.updateSubscriptionPayment - Failed:', error);
      console.error('❌ Error details:', error instanceof Error ? error.message : error);
      return null;
    }
  }

  /**
   * Get active subscriptions for a user
   */
  static async getActiveSubscriptions(userId: number): Promise<Payment[]> {
    try {
      return await prisma.payment.findMany({
        where: { 
          userId,
          stripeSubscriptionId: { not: null },
          subscriptionStatus: { in: ['active', 'trialing'] }
        },
        include: {
          user: true,
          patient: true
        },
        orderBy: { createdAt: 'desc' }
      });
    } catch (error) {
      console.error('❌ Failed to get active subscriptions:', error);
      return [];
    }
  }

  /**
   * Cancel subscription
   */
  static async cancelSubscription(stripeSubscriptionId: string): Promise<Payment | null> {
    try {
      return await this.updateSubscriptionPayment(stripeSubscriptionId, {
        subscriptionStatus: 'canceled',
        status: 'CANCELLED'
      });
    } catch (error) {
      console.error('❌ Failed to cancel subscription:', error);
      return null;
    }
  }

  /**
   * Sync Healthie invoice status from Healthie API
   */
  static async syncHealthieInvoiceStatus(paymentId: number): Promise<Payment | null> {
    try {
      const payment = await PaymentService.getPaymentById(paymentId);
      if (!payment || !payment.healthieInvoiceId) {
        console.warn('⚠️ Payment not found or no Healthie invoice ID:', paymentId);
        return null;
      }

      console.log('🔄 Syncing Healthie invoice status for payment:', paymentId);
      
      // TODO: Add Healthie API call to get invoice status
      // For now, we'll just update the sync timestamp
      const updatedPayment = await prisma.payment.update({
        where: { id: paymentId },
        data: {
          healthieLastSyncAt: new Date(),
          updatedAt: new Date()
        },
        include: {
          user: true,
          patient: true
        }
      });

      console.log('✅ Healthie invoice status synced for payment:', paymentId);
      return updatedPayment;
    } catch (error) {
      console.error('❌ Failed to sync Healthie invoice status:', error);
      return null;
    }
  }

  /**
   * Get payments with Healthie invoice tracking
   */
  static async getPaymentsWithHealthieStatus(
    filters?: {
      userId?: number;
      healthieInvoiceStatus?: string;
      limit?: number;
      offset?: number;
    }
  ): Promise<Payment[]> {
    try {
      const whereClause: any = {};
      
      if (filters?.userId) {
        whereClause.userId = filters.userId;
      }
      
      if (filters?.healthieInvoiceStatus) {
        whereClause.healthieInvoiceStatus = filters.healthieInvoiceStatus;
      }

      // Only include payments that have Healthie invoices
      whereClause.healthieInvoiceId = { not: null };

      const payments = await prisma.payment.findMany({
        where: whereClause,
        include: {
          user: true,
          patient: true,
          subscription: true
        },
        orderBy: { createdAt: 'desc' },
        take: filters?.limit || 50,
        skip: filters?.offset || 0
      });

      return payments;
    } catch (error) {
      console.error('❌ Failed to get payments with Healthie status:', error);
      return [];
    }
  }
} 