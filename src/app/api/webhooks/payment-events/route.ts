import { NextRequest, NextResponse } from 'next/server';
import { PaymentWebhookPayload } from '@/shared/api/healthie/types';

interface APIResponse {
  success: boolean;
  data?: any;
  error?: string;
  details?: any;
}

/**
 * POST /api/webhooks/payment-events

/*
 {
  resource_id: 592866,
  resource_id_event_type: 'BillingItem',
  event_event_type: 'billing_item.created',
  changed_fields: []
}
*/

export async function POST(request: NextRequest) {
  const payload: PaymentWebhookPayload = await request.json();

  console.log('[PaymentWebhook] Received payment event:', payload);

  // Basic validation - structure varies by payment provider
  if (!payload.event_event_type) {
    return NextResponse.json(
      {
        success: false,
        error: 'Invalid payment webhook payload',
        details: 'Missing required field: event_type'
      } as APIResponse,
      { status: 400 }
    );
  }

  const response = {
    success: true,
    data: payload
  } as APIResponse;

  return NextResponse.json(response);
}