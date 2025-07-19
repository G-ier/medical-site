import { NextRequest, NextResponse } from 'next/server';
import { requireAuthWithPatient } from '@/shared/lib/auth/api-auth-helpers';

export async function GET(request: NextRequest) {
  try {
    // Get authenticated user with patient data via JWT cookies
    const { authResult, errorResponse } = await requireAuthWithPatient(request);
    if (errorResponse) {
      return errorResponse;
    }

    return NextResponse.json({ patient: authResult.patient });
  } catch (error) {
    console.error('❌ Error fetching patient:', error);
    return NextResponse.json(
      { error: 'Failed to fetch patient' },
      { status: 500 }
    );
  }
} 