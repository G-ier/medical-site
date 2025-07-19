'use client';

import { useCallback, useState } from 'react';
import { QAPageTemplate } from '@/shared/ui/templates';
import { ExperienceGrid, ExperienceType } from '@/shared/ui/molecules/experience-grid';
import { useOnboarding } from '@/features/onboarding-flow/hooks/use-onboarding';
import { useFormData } from '@/shared/hooks';
import { FormType } from '@/shared/types/form-types';

export interface MedicationExperienceProps {
  className?: string;
}

interface MedicationExperienceData {
  experience?: ExperienceType;
}

export function MedicationExperienceWidget({ className }: MedicationExperienceProps) {
  const { next } = useOnboarding();
  const { save: saveFormData } = useFormData();

  const [data] = useState<MedicationExperienceData>({});

  const handleExperienceSelect = useCallback(async (experience: ExperienceType) => {
    console.log('Experience selected:', experience);

    try {
      // Save data to current step
      ;
      console.log('Experience saved successfully');

      // Automatically go to next step after selection (AFTER data is saved)
      setTimeout(async () => {
        console.log('Attempting to go to next step...');
        try {
          saveFormData(FormType.OHL_INITIAL_INTAKE, {
            experience: experience
          });
          await next();
          console.log('Successfully navigated to next step');
        } catch (error) {
          console.error('Error navigating to next step:', error);
        }
      }, 500); // Small delay for better UX
    } catch (error) {
      console.error('Error in handleExperienceSelect:', error);
    }
  }, [saveFormData, next]);



  return (
    <QAPageTemplate
      title=" Getting started"
      titleClassName="text-[24px] font-semibold"
      question="How much experience do you have with medication?"
      questionClassName="text-[40px] font-light text-black"
      className={className}
    >
      <ExperienceGrid
        selectedExperience={data.experience}
        onExperienceSelect={handleExperienceSelect}
      />
    </QAPageTemplate>
  );
} 