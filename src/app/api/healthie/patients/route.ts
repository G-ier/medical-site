import { NextRequest, NextResponse } from 'next/server';
import { healthieClient } from '@/shared/api/healthie';


// curl -X POST "http://localhost:3004/api/healthie/patients" -H "Content-Type: application/json" -d '{"first_name": "John", "last_name": "Doe", "email": "john.doe@example.com", "dietitian_id": "1234567890"}'
const CREATE_PATIENT_MUTATION = `
  mutation CreateClient($input: createClientInput!) {
    createClient(input: $input) {
      user {
        id
        first_name
        last_name
        email
        skipped_email
        phone_number
        dietitian_id
        user_group_id
        record_identifier
        additional_record_identifier
        height
      }
      messages {
        field
        message
      }
    }
  }
`;

interface CreatePatientRequest {
  first_name: string;
  last_name: string;
  email: string;
  phone_number?: string;
  dietitian_id: string;
  skipped_email?: boolean;
  dont_send_welcome?: boolean;
  user_group_id?: string;
  additional_record_identifier?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: CreatePatientRequest = await request.json();

    // Basic validation
    if (!body.first_name || !body.last_name || !body.email || !body.dietitian_id) {
      return NextResponse.json(
        { 
          error: 'Missing required fields',
          required: ['first_name', 'last_name', 'email', 'dietitian_id']
        },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    const variables = {
      input: {
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        phone_number: body.phone_number || '',
        dietitian_id: body.dietitian_id,
        skipped_email: body.skipped_email || false,
        dont_send_welcome: body.dont_send_welcome || false,
        user_group_id: body.user_group_id || '',
        additional_record_identifier: body.additional_record_identifier || ''
      }
    };

    console.log('🔍 Patient creation variables:', variables);

    const result = await healthieClient.mutate(CREATE_PATIENT_MUTATION, variables);
    const data:any = result.data;

    console.log('🔍 Patient creation result:', data.createClient.messages);
    // Check for GraphQL errors in response
    if (data.createClient.messages && data.createClient.messages.length > 0) {
      return NextResponse.json(
        { 
          error: 'Patient creation failed',
          messages: data.createClient.messages
        },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      data: {
        patient: data.createClient.user,
        patientId: data.createClient.user.id
      }
    });

  } catch (error: any) {
    console.error('Error creating patient:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to create patient',
        details: error.message || 'Unknown error'
      },
      { status: 500 }
    );
  }
} 