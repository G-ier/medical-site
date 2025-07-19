import { NextRequest, NextResponse } from 'next/server';
import { healthieClient } from '@/shared/api/healthie';

const CREATE_DOCUMENT_MUTATION = `
  mutation CreateDocument($input: createDocumentInput!) {
    createDocument(input: $input) {
      document {
        id
        file_content_type
        include_in_charting
      }
      currentUser {
        id
      }
      messages {
        field
        message
      }
    }
  }
`;

interface UploadDocumentRequest {
  file_string: string;  // Base64 encoded file with data: prefix
  display_name: string;
  include_in_charting?: boolean;
}

// curl -X POST http://localhost:3004/api/healthie/patients/3317577/documents -H "Content-Type: application/json" -d '{"file_string": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/BQYH/8QAtRABAAIB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5Pj/3", "display_name": "test", "include_in_charting": true}'
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: patientId } = await params;
    const body: UploadDocumentRequest = await request.json();

    console.log('body', body);
    if (!patientId) {
      return NextResponse.json(
        { error: 'Patient ID is required' },
        { status: 400 }
      );
    }

    // Basic validation
    if (!body.file_string || !body.display_name) {
      return NextResponse.json(
        { 
          error: 'Missing required fields',
          required: ['file_string', 'display_name']
        },
        { status: 400 }
      );
    }

    // Validate base64 format
    if (!body.file_string.startsWith('data:')) {
      return NextResponse.json(
        { 
          error: 'file_string must be a valid base64 data URL (e.g., data:image/jpeg;base64,...)' 
        },
        { status: 400 }
      );
    }

    // Validate display name
    if (body.display_name.trim().length < 3) {
      return NextResponse.json(
        { error: 'display_name must be at least 3 characters long' },
        { status: 400 }
      );
    }

    const variables = {
      input: {
        file_string: body.file_string,
        display_name: body.display_name.trim(),
        rel_user_id: patientId,
        include_in_charting: body.include_in_charting ?? false
      }
    };

    const result = await healthieClient.mutate(CREATE_DOCUMENT_MUTATION, variables);
    const data: any = result.data;

    console.log('data', data);

    // Check for GraphQL errors in response
    if (data.createDocument.messages && data.createDocument.messages.length > 0) {
      return NextResponse.json(
        { 
          error: 'Document upload failed',
          messages: data.createDocument.messages
        },
        { status: 400 }
      );
    }

    // Return the structure as in the GraphQL example
    return NextResponse.json({
      document: data.createDocument.document,
      currentUser: data.createDocument.currentUser,
      messages: data.createDocument.messages
    });

  } catch (error: any) {
    console.error('Error uploading document:', error);
    
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
        error: 'Failed to upload document',
        details: error.message || 'Unknown error'
      },
      { status: 500 }
    );
  }
} 