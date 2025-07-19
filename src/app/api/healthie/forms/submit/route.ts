import { NextRequest, NextResponse } from 'next/server';
import { getOLHClient } from '@/shared/api/healthie/olh-client';
import {
  OLHSubmissionRequest,
  getOLHFormType,
  getOLHFormName
} from '@/shared/api/healthie/olh-types';
import { FORM_IDS } from '@/shared/api/healthie';

interface APIResponse {
  success: boolean;
  data?: Record<string, unknown>;
  error?: string;
  details?: string;
}

/**
 * POST /api/healthie/forms/submit
 * Submit form directly to OLH API in correct format
 * 
 * Expected body format:
 * {
 *   "data": {
 *     "patient_id": "healthie_patient_id",
 *     "mwl_modality": "async_visit",
 *     "shipping_address_line_1": "address",
 *     "shipping_city": "city",
 *     "shipping_state": "state", 
 *     "shipping_zip": "zip",
 *     "q1_patient_blood_pressure_range": ["value"],
 *     ... other OLH fields in arrays
 *   }
 * }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    console.log('[FormSubmit] Received OLH submission request');

    // Validate that body has the correct OLH format
    if (!body.data) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid request format',
          details: 'Expected OLH format with "data" wrapper: { "data": { "patient_id": "...", "formReferenceId": 1172921, ... } }'
        } as APIResponse,
        { status: 400 }
      );
    }

    const olhData = body.data;

    // Validate required OLH fields
    if (!olhData.patient_id) {
      return NextResponse.json(
        {
          success: false,
          error: 'Missing required field: patient_id',
          details: 'patient_id is required for OLH submission'
        } as APIResponse,
        { status: 400 }
      );
    }

    const intakeType = olhData.intake_type;
    const formReferenceId = intakeType === 'initial'
      ? process.env.NEXT_PUBLIC_ENV === 'production' ? FORM_IDS.production.initialIntake : FORM_IDS.staging.initialIntake
      : process.env.NEXT_PUBLIC_ENV === 'production' ? FORM_IDS.production.refillIntake : FORM_IDS.staging.refillIntake;

    olhData.formReferenceId = formReferenceId;

    if(!olhData.formReferenceId) {
      return NextResponse.json(
        {
          success: false,
          error: 'Missing required field: formReferenceId',
          details: 'formReferenceId is required for OLH submission'
        } as APIResponse,
        { status: 400 }
      );
    }

    // Validate shipping address (required for OLH)
    const requiredShippingFields = [
      'shipping_address_line_1',
      'shipping_city',
      'shipping_state',
      'shipping_zip'
    ];

    for (const field of requiredShippingFields) {
      if (!olhData[field]) {
        return NextResponse.json(
          {
            success: false,
            error: `Missing required shipping field: ${field}`,
            details: 'All shipping address fields are required for OLH submission'
          } as APIResponse,
          { status: 400 }
        );
      }
    }

    // Set default mwl_modality if not provided
    if (!olhData.mwl_modality) {
      olhData.mwl_modality = 'async_visit';
    }

    const formType = getOLHFormType(formReferenceId);
    const formName = getOLHFormName(formReferenceId);

    console.log('[FormSubmit] Form details:', {
      type: formType,
      name: formName,
      patient_id: olhData.patient_id,
      formReferenceId: olhData.formReferenceId,
      mwl_modality: olhData.mwl_modality,
      has_shipping: !!(olhData.shipping_address_line_1)
    });

    // Create OLH request in correct format
    const olhRequest: OLHSubmissionRequest = {
      data: olhData
    };

    // Submit to OLH API
    const olhClient = getOLHClient();
    const result = await olhClient.submitForm(olhRequest);

    console.log('[FormSubmit] Submission successful:', {
      id: result.id,
      success: result.success
    });

    const response: APIResponse = {
      success: true,
      data: {
        id: result.id,
        message: result.message,
        form_type: formType,
        form_name: formName,
        patient_id: olhData.patient_id,
        formReferenceId: formReferenceId,
        olh_response: result
      }
    };

    return NextResponse.json(response);

  } catch (error: unknown) {
    console.error('[FormSubmit] Submission failed:', error);

    const response: APIResponse = {
      success: false,
      error: 'Form submission failed',
      details: error instanceof Error ? error.message : 'Unknown error occurred'
    };

    // Return appropriate status code based on error type
    const statusCode = (error as { statusCode?: number }).statusCode || 500;
    return NextResponse.json(response, { status: statusCode });
  }
}

// OPTIONS handler for CORS preflight
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
} 