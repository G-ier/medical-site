'use client';

import { useCallback, useState } from 'react';
import { useOnboarding } from '@/features/onboarding-flow/hooks/use-onboarding';
import { QAPageTemplate } from '@/shared/ui/templates';
import { QuestionList } from '@/shared/ui/molecules/question-list';
import { useFormData } from '@/shared/hooks';
import { FormType } from '@/shared/types/form-types';
import { GradientText } from '@/shared/ui/atoms';

const BLOOD_PRESSURE_OPTIONS = [
  { id: 'normal', value: 'normal', label: '<120/<80 (Normal)' },
  { id: 'elevated', value: 'elevated', label: '120-129/<80 (Elevated)' },
  { id: 'stage1', value: 'stage1', label: '130-139/80-89 (Stage 1 High)' },
  { id: 'stage2', value: 'stage2', label: '140+/90+ (Stage 2 High)' },
  { id: 'unknown', value: 'unknown', label: 'I don\'t know' },
  { id: 'another', value: 'another', label: 'Another measurement' }
];

export interface BloodPressureAssessmentProps {
  className?: string;
}

export function BloodPressureAssessment({ className }: BloodPressureAssessmentProps) {
  const { next } = useOnboarding();
  const { save: saveFormData } = useFormData();
  const [selectedValue, setSelectedValue] = useState<string>('');



  const handleOptionSelect = useCallback(async (value: string) => {
    console.log('Blood pressure selected:', value);
    setSelectedValue(value);

    try {
      const selectedOption = BLOOD_PRESSURE_OPTIONS.find(opt => opt.value === value);
      const formData: any = {};

      if (value === 'another') {
        // Handle "another measurement" case - send to both fields
        formData.q1_patient_blood_pressure_range_2 = ['another measurement'];
        formData.q1_patient_blood_pressure_range = ['Another measurement'];
      } else {
        // Handle normal blood pressure ranges - send exact label
        formData.q1_patient_blood_pressure_range = [selectedOption?.label || value];
      }

      await saveFormData(FormType.OHL_INITIAL_INTAKE, formData);

      // Auto-navigate after 500ms
      setTimeout(async () => {
        await next();
      }, 500);
    } catch (error) {
      console.error('Error saving blood pressure data:', error);
    }
  }, [saveFormData, next]);

  return (
    <QAPageTemplate
      title={<GradientText gradient="purple-blue">Medical History</GradientText>}
      titleClassName="font-[500] tracking-wide text-[24px] text-black"
      question="What is your blood pressure range?"
      questionClassName="text-[40px] font-light text-black"
      className={className}
    >
      <QuestionList
        options={BLOOD_PRESSURE_OPTIONS}
        selectedValue={selectedValue}
        onSelect={handleOptionSelect}
        className="mt-8"
        showArrows={true}
      />
    </QAPageTemplate>
  );
} 