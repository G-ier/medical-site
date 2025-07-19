'use client';

import { useCallback, useEffect, useState } from 'react';
import { useOnboarding } from '@/features/onboarding-flow/hooks/use-onboarding';
import { BMICard } from '@/shared/ui/molecules/bmi-card';
import { GoalCard } from '@/shared/ui/molecules/goal-card';
import { QAPageTemplate } from '@/shared/ui/templates';
import { ContinueButton, GradientText } from '@/shared/ui/atoms';
import { useFormData } from '@/shared/hooks';
import { FormType } from '@/shared/types/form-types';

export interface BMIDisplayProps {
  className?: string;
}

interface UserHealthData {
  height: number; // in inches
  weight: number; // in pounds
  goalWeight: number; // in pounds
}

interface BMICalculations {
  currentBMI: number;
  goalBMI: number;
  goodBMI: number;
  weightToLose: number;
  bmiCategory: string;
  isEligibleForMedication: boolean;
  medicationZoneStart: number;
  medicationZoneEnd: number;
}

export function BMIDisplay({ }: BMIDisplayProps) {
  const { sessionId, markAsCompleted } = useOnboarding();
  const { get: getFormData } = useFormData();

  // Real user health data - loaded from form data
  const [healthData, setHealthData] = useState<UserHealthData>({
    height: 68, // Default fallback
    weight: 180, // Default fallback
    goalWeight: 150 // Default fallback
  });

  const [bmiCalculations, setBmiCalculations] = useState<BMICalculations>({
    currentBMI: 22,
    goalBMI: 20,
    goodBMI: 22,
    weightToLose: 30,
    bmiCategory: 'Normal weight',
    isEligibleForMedication: false,
    medicationZoneStart: 25,
    medicationZoneEnd: 60
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setIsLoading] = useState(true); // Loading real data

  // BMI Calculation Functions
  const calculateBMI = useCallback((weightLbs: number, heightInches: number): number => {
    return Math.round((weightLbs / (heightInches * heightInches)) * 703);
  }, []);

  const calculateGoalBMI = useCallback((goalWeightLbs: number, heightInches: number): number => {
    return Math.round((goalWeightLbs / (heightInches * heightInches)) * 703);
  }, []);

  const calculateGoodBMI = useCallback((): number => {
    return 22; // Standard healthy BMI target (middle of 18.5-24.9 range)
  }, []);

  const calculateWeightToLose = useCallback((currentWeight: number, goalWeight: number): number => {
    return Math.max(0, currentWeight - goalWeight);
  }, []);

  const getBMICategory = useCallback((bmi: number): string => {
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 25) return 'Normal weight';
    if (bmi < 30) return 'Overweight';
    if (bmi < 35) return 'Obesity Class I';
    if (bmi < 40) return 'Obesity Class II';
    return 'Obesity Class III';
  }, []);

  const isEligibleForMedication = useCallback((bmi: number): boolean => {
    return bmi >= 25; // BMI 25+ typically qualifies for weight loss medication
  }, []);

  const getMedicationZone = useCallback(() => {
    return {
      start: 25, // BMI 25 - start of overweight
      end: 40    // BMI 40 - severe obesity threshold
    };
  }, []);

  // Format height for display
  const formatHeight = useCallback((heightInches: number): string => {
    const feet = Math.floor(heightInches / 12);
    const inches = heightInches % 12;
    return `${feet}'${inches}"`;
  }, []);

  // Calculate all BMI-related values
  const calculateAllBMIValues = useCallback((data: UserHealthData): BMICalculations => {
    const currentBMI = calculateBMI(data.weight, data.height);
    const goalBMI = calculateGoalBMI(data.goalWeight, data.height);
    const goodBMI = calculateGoodBMI();
    const weightToLose = calculateWeightToLose(data.weight, data.goalWeight);
    const bmiCategory = getBMICategory(currentBMI);
    const eligible = isEligibleForMedication(currentBMI);
    const medicationZone = getMedicationZone();

    return {
      currentBMI,
      goalBMI,
      goodBMI,
      weightToLose,
      bmiCategory,
      isEligibleForMedication: eligible,
      medicationZoneStart: medicationZone.start,
      medicationZoneEnd: medicationZone.end
    };
  }, [calculateBMI, calculateGoalBMI, calculateGoodBMI, calculateWeightToLose, getBMICategory, isEligibleForMedication, getMedicationZone]);

  // Calculate BMI values whenever health data changes
  useEffect(() => {
    console.log('🧮 Calculating BMI values for:', healthData);

    // Calculate all BMI-related values based on current health data
    const calculations = calculateAllBMIValues(healthData);
    setBmiCalculations(calculations);


  }, [healthData, calculateAllBMIValues]);

  useEffect(() => {
    const fetchHealthData = async () => {
      try {
        setIsLoading(true);
        
        // Get goal weight from goal-weight-question step  
        const healthieMetrics: any = await getFormData(FormType.HEALTHIE_METRICS);
        
        if (healthieMetrics?.data && (healthieMetrics.data as any)?.formData) {
          const formData = (healthieMetrics.data as any).formData;
          const height = formData.height || 68;
          const weight = formData.weight;
          const goalWeight = formData.goalWeight || 150;
          
          setHealthData({
            height,
            weight,
            goalWeight
          });
        }
      } catch (error) {
        console.error('Error fetching health data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHealthData();
  }, [getFormData]);



  const handleContinue = useCallback(async () => {
    try {
      console.log('BMI Display - triggering registration');

      await markAsCompleted();

      // Set migration token for Auth0 callback
      const response = await fetch('/api/auth/set-migration-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ migrationToken: sessionId })
      });

      if (response.ok) {
        console.log('✅ Migration token set in cookie');
      } else {
        console.error('❌ Failed to set migration token');
      }

      // Redirect to Auth0 signup with session ID (no next() call here)
      window.location.href = `/auth/login?screen_hint=signup&returnTo=${encodeURIComponent('/api/auth/callback?session_id=' + sessionId)}`;
    } catch (error) {
      console.error('❌ Error setting migration token:', error);
    }
  }, [sessionId, markAsCompleted]);

  const formattedHeight = formatHeight(healthData.height);

  return (
    <QAPageTemplate
      maxWidth="4xl"
      title=""
      actions={
        <ContinueButton
          className="w-full"
          onClick={handleContinue}
        />
      }
    >
      <div className="mb-4 mt-8">
        <p className="text-xl sm:text-[64px] font-light text-black text-center">
          Medication <GradientText gradient="purple-blue">may be a good fit</GradientText> based on what you&apos;ve shared. Here&apos;s why:
        </p>
      </div>

      {/* BMI Information Card */}
      <div className="w-full max-w-[875px] mx-auto mb-4">
        <BMICard
          bmi={bmiCalculations.currentBMI}
          weight={`${healthData.weight} lbs`}
          height={formattedHeight}
          currentBMI={bmiCalculations.currentBMI}
          goalBMI={bmiCalculations.goalBMI}
          medicationZoneStart={bmiCalculations.medicationZoneStart}
          medicationZoneEnd={bmiCalculations.medicationZoneEnd}
          description={`Your BMI of ${bmiCalculations.currentBMI} falls in the "${bmiCalculations.bmiCategory}" category. ${bmiCalculations.isEligibleForMedication ? 'This falls within the range where doctors may prescribe medication to get back to a healthy weight.' : 'This is in the healthy range.'}`}
        />
      </div>

      {/* Goal Information Card */}
      <div className="w-full max-w-[875px] mx-auto">
        <GoalCard
          goalWeight={`${healthData.goalWeight} lbs`}
          currentBMI={bmiCalculations.currentBMI}
          goodBMI={bmiCalculations.goodBMI}
          description={`BMI is a key data point that doctors use to assess your overall health as well as any health risks. Your goal BMI would be ${bmiCalculations.goalBMI}.`}
        />
      </div>

      <p className="text-[#A9A5A5] text-[14px] font-normal">
        This isn&apos;t a clinical diagnosis. It&apos;s just a helpful starting point for our doctors to understand your health goals.
      </p>

    </QAPageTemplate>
  );
} 