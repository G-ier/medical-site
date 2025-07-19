import { NextRequest, NextResponse } from 'next/server';
import { healthieClient } from '@/shared/api/healthie';

const UPDATE_PATIENT_MUTATION = `
  mutation UpdateClient($input: updateClientInput!) {
    updateClient(input: $input) {
      user {
        id
        email
        first_name
        last_name
        phone_number
        dob
        height
        gender
        location {
          id
          city
          state
          zip
          line1
          line2
          country
        }
        locations {
          id
          city
          state
          zip
          line1
          line2
          country
        }
      }
      messages {
        field
        message
      }
    }
  }
`;

interface UpdatePatientRequest {
  first_name?: string;
  last_name?: string;
  email?: string;
  phone_number?: string;
  dob?: string;
  height?: string;
  gender?: string;
  location?: {
    state?: string;
    city?: string;
    zip?: string;
    line1?: string;
    line2?: string;
    country?: string;
  };
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params;
    const patientId = resolvedParams.id;

    const body: UpdatePatientRequest = await request.json();

    if (!patientId) {
      return NextResponse.json(
        { error: 'Patient ID is required' },
        { status: 400 }
      );
    }

    // Email validation if provided
    if (body.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(body.email)) {
        return NextResponse.json(
          { error: 'Invalid email format' },
          { status: 400 }
        );
      }
    }

    // Date validation if provided (expecting MM/DD/YYYY format as in Postman)
    if (body.dob) {
      const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
      if (!dateRegex.test(body.dob)) {
        return NextResponse.json(
          { error: 'Invalid date format. Use MM/DD/YYYY format' },
          { status: 400 }
        );
      }
    }

    // Build update input - convert height to string if it's a number
    const updateInput: any = {
      id: patientId,
      ...body
    };

    // Convert height to string if it's provided as a number
    if (updateInput.height && typeof updateInput.height === 'number') {
      updateInput.height = updateInput.height.toString();
    }

    const variables = {
      input: updateInput
    };

    const result = await healthieClient.mutate(UPDATE_PATIENT_MUTATION, variables);
    const data: any = result.data;

    // Check for GraphQL errors in response
    if (data.updateClient.messages && data.updateClient.messages.length > 0) {
      return NextResponse.json(
        { 
          error: 'Patient update failed',
          messages: data.updateClient.messages
        },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      data: {
        patient: data.updateClient.user,
        updated: true
      }
    });

  } catch (error: any) {
    console.error('Error updating patient:', error);
    
    // Handle specific GraphQL errors
    if (error.message.includes('not found') || error.message.includes('does not exist')) {
      return NextResponse.json(
        { 
          error: 'Patient not found',
          details: error.message
        },
        { status: 404 }
      );
    }
    
    return NextResponse.json(
      { 
        error: 'Failed to update patient',
        details: error.message || 'Unknown error'
      },
      { status: 500 }
    );
  }
} 