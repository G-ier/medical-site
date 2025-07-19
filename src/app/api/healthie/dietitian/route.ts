import { NextResponse } from 'next/server';
import { healthieClient } from '@/shared/api/healthie';

const GET_DIETITIAN_QUERY = `
  query {
    organization {
      id
      name
      organization_memberships(keywords: "OpenLoop") {
        user {
          id
          email
          full_name
        }
      }
    }
    appointmentTypes(keywords: "Weight") {
      id
      name 
    }
  }
`;

export async function GET() {
  try {
    const result = await healthieClient.query(GET_DIETITIAN_QUERY);
    const data: any = result.data;

    // Extract dietitian ID from organization memberships
    const dietitianId = data.organization?.organization_memberships?.[0]?.user?.id;
    
    if (!dietitianId) {
      return NextResponse.json(
        { 
          error: 'Dietitian not found in organization',
          organization: data.organization 
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: {
        dietitianId,
        dietitianInfo: data.organization.organization_memberships[0].user,
        organization: {
          id: data.organization.id,
          name: data.organization.name
        },
        appointmentTypes: data.appointmentTypes
      }
    });

  } catch (error: unknown) {
    console.error('Error fetching dietitian:', error);
    
          return NextResponse.json(
        { 
          error: 'Failed to fetch dietitian information',
          details: error instanceof Error ? error.message : 'Unknown error'
        },
        { status: 500 }
      );
  }
} 