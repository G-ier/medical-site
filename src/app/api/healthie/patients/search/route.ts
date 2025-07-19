import { NextRequest, NextResponse } from 'next/server';
import { healthieClient } from '@/shared/api/healthie';


const SEARCH_PATIENTS_QUERY = `
  query Users($keywords: String) {
    users(keywords: $keywords) {
      id
      name
      email
      first_name
      last_name
      phone_number
      dietitian_id
      record_identifier
      additional_record_identifier
    }
  }
`;

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const keywords = searchParams.get('keywords') || searchParams.get('q');

    if (!keywords) {
      return NextResponse.json(
        { 
          error: 'Search keywords are required',
          usage: 'Use ?keywords=search_term or ?q=search_term'
        },
        { status: 400 }
      );
    }

    // Basic validation for search keywords
    if (keywords.length < 2) {
      return NextResponse.json(
        { error: 'Search keywords must be at least 2 characters long' },
        { status: 400 }
      );
    }

    const variables = {
      keywords: keywords.trim()
    };

    const result = await healthieClient.query(SEARCH_PATIENTS_QUERY, variables);
    const data: any = result.data;

    return NextResponse.json({
      success: true,
      data: {
        patients: data.users || [],
        searchTerm: keywords,
        totalFound: data.users?.length || 0
      }
    });

  } catch (error: any) {
    console.error('Error searching patients:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to search patients',
        details: error.message || 'Unknown error'
      },
      { status: 500 }
    );
  }
} 