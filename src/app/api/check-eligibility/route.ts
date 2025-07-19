import { NextRequest, NextResponse } from 'next/server';
import { FormDataService } from '@/shared/lib/database/form-data-service';
import { FormType } from '@/shared/types/form-types';
import { getAuthenticatedUser } from '@/shared/lib/auth/api-auth-helpers';

export async function GET(request: NextRequest) {
  try {
    console.log('🔍 Checking eligibility...');

    // Step 1: Get authenticated user via JWT cookies
    const authResult = await getAuthenticatedUser(request);
    if (!authResult.success) {
      return NextResponse.json({
        isEligible: false,
        reason: authResult.error || 'Authentication required'
      }, { status: authResult.statusCode || 401 });
    }

    const user = authResult.dbUser!;
    console.log('🔍 User found in DB:', user.email);

    
    // Step 3: Fetch form data directly from database
    const [metricsData, intakeData] = await Promise.all([
      FormDataService.getFormDataByType(user.id, FormType.HEALTHIE_METRICS),
      FormDataService.getFormDataByType(user.id, FormType.OHL_INITIAL_INTAKE),
    ]);

    console.log('📋 Metrics data:', metricsData);
    console.log('📋 Intake data:', intakeData);

    // Extract form data
    const metrics = metricsData.length > 0 ? metricsData[0].formData as Record<string, any> : {};
    const intake = intakeData.length > 0 ? intakeData[0].formData as Record<string, any> : {};

    // Step 4: Calculate BMI
    const heightInches = parseFloat(metrics?.height ?? 0);
    const weightInLbs = parseFloat(metrics?.weight ?? 0);

    if (!heightInches || !weightInLbs) {
      return NextResponse.json({ 
        isEligible: false, 
        reason: 'Missing height or weight data' 
      });
    }

    const heightInMeters = heightInches / 39.37;

    const weightInKg = weightInLbs * 0.453592;

    const bmi = weightInKg / (heightInMeters * heightInMeters);

    // Step 5: Check for comorbidities
    const q3Responses = Array.isArray(intake?.q3_medical_history_questions) 
      ? intake.q3_medical_history_questions : [];
    
    const comorbidities = [
      'Hypertension (high blood pressure)',
      'Sleep apnea',
      'Prediabetes',
      'Type 2 diabetes (not on insulin)',
      'High cholesterol or triglycerides',
      'Acid reflux',
      'Asthma/reactive airway disease',
      'Urinary stress incontinence',
      'Polycystic ovarian syndrome (PCOS)',
      'Clinically proven low testosterone (male hypogonadism)',
      'Osteoporosis',
      'Coronary artery disease or heart attack/stroke in last 2 years',
      'Congestive heart failure',
      'Liver disease, including fatty liver',
    ];
    
    const hasComorbidity = q3Responses.some((response: string) => 
      comorbidities.includes(response)
    );

    // Step 6: Check medication history from question 4
    const q4Response = intake?.q4_medical_history_questions || '';
    
    // Step 7: Apply eligibility rules
    let isEligible = false;
    let reason = '';

    if (q4Response.includes('currently take') || q4Response.includes('recently')) {
      // Current or recent medication users: BMI ≥ 22
      if (bmi >= 22) {
        isEligible = true;
      } else {
        reason = `BMI (${bmi.toFixed(1)}) must be ≥ 22 for current/recent medication users`;
      }
    } else {
      // No recent medication: BMI ≥ 25 with comorbidity OR BMI ≥ 27
      if (bmi >= 27) {
        isEligible = true;
      } else if (bmi >= 25 && hasComorbidity) {
        isEligible = true;
      } else {
        if (bmi < 25) {
          reason = `BMI (${bmi.toFixed(1)}) must be ≥ 25 with weight-related comorbidity or ≥ 27`;
        } else {
          reason = `BMI (${bmi.toFixed(1)}) is ≥ 25 but no weight-related comorbidity found. BMI ≥ 27 required without comorbidity`;
        }
      }
    }

    console.log(`✅ Eligibility check complete: ${isEligible ? 'ELIGIBLE' : 'NOT ELIGIBLE'}`);

    return NextResponse.json({
      isEligible,
      reason: isEligible ? 'Meets eligibility criteria' : reason,
      data: {
        bmi: parseFloat(bmi.toFixed(1)),
        hasComorbidity,
        medicationHistory: q4Response,
      }
    });

  } catch (error) {
    console.error('❌ Eligibility check error:', error);
    return NextResponse.json({
      isEligible: false,
      reason: 'Failed to check eligibility'
    }, { status: 500 });
  }
} 