import { NextRequest, NextResponse } from 'next/server';
import { healthieClient } from '@/shared/api/healthie';
import { HealthieWebhookPayload } from '@/shared/api/healthie/types';
import { webhookProcessor } from '@/shared/lib/webhooks/processors';

interface APIResponse {
  success: boolean;
  data?: any;
  error?: string;
  details?: any;
}

/**
 * POST /api/webhooks/healthie-events
 * Handle Healthie webhook events for forms and appointments
 * 
 * Expected payload format:
 * {
 *   "resource_id": 20349530,
 *   "resource_id_type": "FormAnswerGroup" | "Appointment",
 *   "event_type": "form_answer_group.locked" | "appointment.created" | "appointment.updated"
 * }
 */
export async function POST(request: NextRequest) {
  try {
    const payload: HealthieWebhookPayload = await request.json();

    console.log('[HealthieWebhook] Received webhook event:', payload);

    // Validate webhook payload
    if (!payload.resource_id || !payload.resource_id_type || !payload.event_type) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid webhook payload',
          details: 'Missing required fields: resource_id, resource_id_type, or event_type'
        } as APIResponse,
        { status: 400 }
      );
    }

    let processingResult;

    // Handle FormAnswerGroup events
    if (payload.resource_id_type === 'FormAnswerGroup' && payload.event_type === 'form_answer_group.locked') {
      console.log('[HealthieWebhook] Processing FormAnswerGroup event');
      
      // Enrich webhook data by querying Healthie
      const formResult = await healthieClient.getFormAnswerGroup(payload.resource_id.toString());
      
      if (!formResult.success || !formResult.data) {
        throw new Error('Failed to fetch FormAnswerGroup data from Healthie');
      }

      // Process the enriched form data
      processingResult = await webhookProcessor.processFormAnswerGroup(formResult.data);
    }
    
    // Handle Appointment events
    else if (payload.resource_id_type === 'Appointment' && 
             (payload.event_type === 'appointment.created' || payload.event_type === 'appointment.updated')) {
      console.log('[HealthieWebhook] Processing Appointment event');
      
      // Enrich webhook data by querying Healthie
      const appointmentResult = await healthieClient.getAppointment(payload.resource_id.toString());
      
      if (!appointmentResult.success || !appointmentResult.data) {
        throw new Error('Failed to fetch Appointment data from Healthie');
      }

      // Process the enriched appointment data
      processingResult = await webhookProcessor.processAppointment(appointmentResult.data);
    }
    
    // Handle unknown event types
    else {
      console.log('[HealthieWebhook] Unknown event type:', payload.event_type);
      
      processingResult = {
        success: true,
        event_type: payload.event_type,
        actions_taken: [`Received unknown event type: ${payload.event_type}`],
        details: payload
      };
    }

    console.log('[HealthieWebhook] Processing completed:', {
      success: processingResult.success,
      event_type: processingResult.event_type,
      actions_count: processingResult.actions_taken.length,
      patient_id: processingResult.patient_id
    });

    // Store webhook event for audit trail (optional - implement based on needs)
    // await storeWebhookEvent(payload, processingResult);

    const response: APIResponse = {
      success: true,
      data: {
        webhook_received: payload,
        processing_result: processingResult,
        timestamp: new Date().toISOString()
      }
    };

    return NextResponse.json(response);

  } catch (error: any) {
    console.error('[HealthieWebhook] Processing failed:', error);

    const response: APIResponse = {
      success: false,
      error: 'Webhook processing failed',
      details: error.message || 'Unknown error occurred'
    };

    return NextResponse.json(response, { status: 500 });
  }
}

// OPTIONS handler for CORS preflight
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Healthie-Signature',
    },
  });
}

// GET handler for webhook verification (optional)
export async function GET() {
  return NextResponse.json({
    message: 'Healthie Events Webhook Endpoint',
    status: 'active',
    supported_events: [
      'form_answer_group.locked',
      'appointment.created',
      'appointment.updated'
    ],
    timestamp: new Date().toISOString()
  });
} 