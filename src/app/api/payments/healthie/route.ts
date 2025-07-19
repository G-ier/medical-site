/**
 * Healthie Payment Integration API
 * Handles Healthie-specific payment operations
 */

import { NextRequest, NextResponse } from 'next/server';
import { PaymentService } from '@/shared/lib/database/payment-service';

/**
 * GET /api/payments/healthie
 * Get user's payment cards and package selections from Healthie
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const healthieUserId = searchParams.get('user_id');
    const offeringId = searchParams.get('offering_id');
    const action = searchParams.get('action') || 'cards';

    if (!healthieUserId) {
      return NextResponse.json(
        { error: 'healthie_user_id is required' },
        { status: 400 }
      );
    }

    console.log(`🏥 GET /api/payments/healthie - ${action} for user:`, healthieUserId);

    switch (action) {
      case 'cards':
        const cards = await PaymentService.getUserPaymentCards(healthieUserId);
        return NextResponse.json({
          success: true,
          data: { cards }
        });

      case 'packages':
        const packages = await PaymentService.getUserPackageSelections({
          healthieUserId,
          offeringId: offeringId || undefined
        });
        return NextResponse.json({
          success: true,
          data: packages
        });

      default:
        return NextResponse.json(
          { error: 'Invalid action. Use: cards, packages' },
          { status: 400 }
        );
    }

  } catch (error) {
    console.error('❌ Error in Healthie API:', error);
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
 * POST /api/payments/healthie
 * Create invoices or process enhanced payment flows
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action, ...params } = body;

    console.log('🏥 POST /api/payments/healthie - action:', action);

    switch (action) {
      case 'create_invoice':
        const { recipientId, offeringId, price, invoiceType, status, notes, servicesProvided } = params;
        
        if (!recipientId || !offeringId || !price) {
          return NextResponse.json(
            { error: 'recipientId, offeringId, and price are required' },
            { status: 400 }
          );
        }

        const invoiceId = await PaymentService.createHealthieInvoice({
          recipientId,
          offeringId,
          price,
          invoiceType,
          status,
          notes,
          servicesProvided
        });

        return NextResponse.json({
          success: true,
          data: { invoiceId }
        });

      case 'process_with_invoice':
        const { paymentId, healthieUserId, offeringId: offeringIdForPayment, price: priceForPayment } = params;
        
        if (!paymentId || !healthieUserId || !offeringIdForPayment || !priceForPayment) {
          return NextResponse.json(
            { error: 'paymentId, healthieUserId, offeringId, and price are required' },
            { status: 400 }
          );
        }

        const result = await PaymentService.processPaymentWithInvoice({
          paymentId,
          healthieUserId,
          offeringId: offeringIdForPayment,
          price: priceForPayment
        });

        return NextResponse.json({
          success: true,
          data: result
        });

      default:
        return NextResponse.json(
          { error: 'Invalid action. Use: create_invoice, process_with_invoice' },
          { status: 400 }
        );
    }

  } catch (error) {
    console.error('❌ Error in Healthie API:', error);
    return NextResponse.json(
      { 
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
} 