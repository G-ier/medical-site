import { NextRequest, NextResponse } from 'next/server';
import { OrderTrackingWebhookPayload } from '@/shared/api/healthie/types';

// Order tracking webhook event types based on documentation


interface APIResponse {
  success: boolean;
  data?: any;
  error?: string;
  details?: any;
}

/**
 * POST /api/webhooks/order-tracking-events
 * Handle order tracking webhook events from pharmacy
 * 
 * Expected payload formats:
 * 
 * Order Confirmation:
 * {
 *   "patient_id": "string",
 *   "pharmacy": "string", 
 *   "medication_instructions": "string",
 *   "shipping_address": "string",
 *   "order_number": "string",
 *   "type": "order_confirmation"
 * }
 * 
 * Shipping Confirmation:
 * {
 *   "patient_id": "string",
 *   "pharmacy": "string",
 *   "shipped_date": "YYYY-MM-DD",
 *   "track_number": "string", 
 *   "status": "string",
 *   "type": "order_shipped",
 *   "order_date": "YYYY-MM-DD",
 *   "order_number": "string"
 * }
 * 
 * After Visit Summary (Optional):
 * {
 *   "type": "after_visit_summary",
 *   "patient_id": "string",
 *   "general_avs": "string",
 *   "injectable_sema": "string",
 *   "injectable_tirz": "string", 
 *   "oral_tirz": "string",
 *   "oral_sema": "string",
 *   "patient_dq": "string"
 * }
 */
export async function POST(request: NextRequest) {
  try {
    const payload: OrderTrackingWebhookPayload = await request.json();

    console.log('[OrderTrackingWebhook] Received webhook event:', {
      type: payload.type,
      patient_id: payload.patient_id,
      pharmacy: payload.pharmacy
    });

    // Validate required fields
    if (!payload.patient_id || !payload.type) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid webhook payload',
          details: 'Missing required fields: patient_id or type'
        } as APIResponse,
        { status: 400 }
      );
    }

    const actions: string[] = [];
    const eventType = payload.type;

    // Process different event types
    switch (payload.type) {
      case 'order_confirmation':
        await processOrderConfirmation(payload, actions);
        break;
        
      case 'order_shipped':
        await processShippingConfirmation(payload, actions);
        break;
        
      case 'after_visit_summary':
        await processAfterVisitSummary(payload, actions);
        break;
        
      default:
        actions.push(`Unknown order tracking event type: ${payload.type}`);
        console.warn('[OrderTrackingWebhook] Unknown event type:', payload.type);
    }

    console.log('[OrderTrackingWebhook] Processing completed:', {
      event_type: eventType,
      patient_id: payload.patient_id,
      actions_count: actions.length
    });

    // Store order tracking event for audit trail (optional)
    // await storeOrderTrackingEvent(payload, actions);

    const response: APIResponse = {
      success: true,
      data: {
        event_type: eventType,
        patient_id: payload.patient_id,
        actions_taken: actions,
        timestamp: new Date().toISOString(),
        webhook_payload: payload
      }
    };

    return NextResponse.json(response);

  } catch (error: any) {
    console.error('[OrderTrackingWebhook] Processing failed:', error);

    const response: APIResponse = {
      success: false,
      error: 'Order tracking webhook processing failed',
      details: error.message || 'Unknown error occurred'
    };

    return NextResponse.json(response, { status: 500 });
  }
}

async function processOrderConfirmation(payload: OrderTrackingWebhookPayload, actions: string[]) {
  console.log('[OrderTrackingWebhook] Processing order confirmation for patient:', payload.patient_id);
  
  // Validate order confirmation specific fields
  if (!payload.order_number || !payload.pharmacy) {
    throw new Error('Missing required fields for order confirmation: order_number or pharmacy');
  }

  actions.push('Order confirmation received');
  actions.push('Update patient portal with order confirmation');
  actions.push('Send patient notification about order placement');
  
  if (payload.medication_instructions) {
    actions.push('Display medication instructions in portal');
  }
  
  if (payload.shipping_address) {
    actions.push('Confirm shipping address with patient');
  }

  // TODO: Implement actual portal updates and notifications
  // - Update patient record with order information
  // - Send email/SMS notification to patient
  // - Update portal UI with order status
  
  console.log(`[OrderTrackingWebhook] Order ${payload.order_number} confirmed for patient ${payload.patient_id}`);
}

async function processShippingConfirmation(payload: OrderTrackingWebhookPayload, actions: string[]) {
  console.log('[OrderTrackingWebhook] Processing shipping confirmation for patient:', payload.patient_id);
  
  // Validate shipping confirmation specific fields
  if (!payload.order_number || !payload.track_number || !payload.shipped_date) {
    throw new Error('Missing required fields for shipping confirmation: order_number, track_number, or shipped_date');
  }

  actions.push('Shipping confirmation received');
  actions.push('Update patient portal with shipping information');
  actions.push('Send patient notification with tracking details');
  
  if (payload.status) {
    actions.push(`Order status updated to: ${payload.status}`);
  }

  // TODO: Implement actual portal updates and notifications
  // - Update patient record with tracking information
  // - Send email/SMS with tracking number
  // - Update portal UI with shipping status
  // - Set up delivery notifications
  
  console.log(`[OrderTrackingWebhook] Order ${payload.order_number} shipped for patient ${payload.patient_id}, tracking: ${payload.track_number}`);
}

async function processAfterVisitSummary(payload: OrderTrackingWebhookPayload, actions: string[]) {
  console.log('[OrderTrackingWebhook] Processing after visit summary for patient:', payload.patient_id);
  
  actions.push('After visit summary received');
  actions.push('Update patient portal with visit summary');
  
  // Process different AVS types
  if (payload.general_avs) {
    actions.push('General AVS available');
  }
  
  if (payload.injectable_sema) {
    actions.push('Injectable Semaglutide instructions available');
  }
  
  if (payload.injectable_tirz) {
    actions.push('Injectable Tirzepatide instructions available');
  }
  
  if (payload.oral_tirz) {
    actions.push('Oral Tirzepatide instructions available');
  }
  
  if (payload.oral_sema) {
    actions.push('Oral Semaglutide instructions available');
  }
  
  if (payload.patient_dq) {
    actions.push('Patient disqualification information available');
    actions.push('Display DQ information to patient');
  }

  // TODO: Implement actual AVS processing
  // - Store AVS content in patient record
  // - Update portal with visit summary
  // - Send AVS to patient if applicable
  
  console.log(`[OrderTrackingWebhook] AVS processed for patient ${payload.patient_id}`);
}

// OPTIONS handler for CORS preflight
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Signature',
    },
  });
}

// GET handler for webhook verification (optional)
export async function GET() {
  return NextResponse.json({
    message: 'Order Tracking Events Webhook Endpoint',
    status: 'active',
    supported_events: [
      'order_confirmation',
      'order_shipped',
      'after_visit_summary'
    ],
    timestamp: new Date().toISOString()
  });
} 