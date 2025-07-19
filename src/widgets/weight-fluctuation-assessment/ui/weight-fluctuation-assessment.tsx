'use client';

import { useCallback, useState } from 'react';
import { useOnboarding } from '@/features/onboarding-flow/hooks/use-onboarding';
import { QAPageTemplate } from '@/shared/ui/templates';
import { QuestionList } from '@/shared/ui/molecules/question-list';
import { useFormData } from '@/shared/hooks';
import { FormType } from '@/shared/types/form-types';
import { GradientText } from '@/shared/ui/atoms';

const WEIGHT_FLUCTUATION_OPTIONS = [
  { id: 'none', value: 'none', label: 'No fluctuation' },
  { id: 'little', value: 'little', label: 'A little' },
  { id: 'moderate', value: 'moderate', label: 'Moderate amount' },
  { id: 'significant', value: 'significant', label: 'Significant amount' },
  { id: 'extreme', value: 'extreme', label: 'Extreme fluctuation' }
];

export interface WeightFluctuationAssessmentProps {
  className?: string;
}

export function WeightFluctuationAssessment({ className }: WeightFluctuationAssessmentProps) {
  const { next } = useOnboarding();
  const { save: saveFormData } = useFormData();
  const [selectedValue, setSelectedValue] = useState<string>('');



  const handleOptionSelect = useCallback(async (value: string) => {
    console.log('Weight fluctuation selected:', value);
    setSelectedValue(value);
    
    try {
      const selectedOption = WEIGHT_FLUCTUATION_OPTIONS.find(opt => opt.value === value);
      
      await saveFormData(FormType.OHL_INITIAL_INTAKE, {
        q8_patient_weight_fluctuation_over_last_12_months: [selectedOption?.label || value]
      });
      
      // Auto-navigate after 500ms
      setTimeout(async () => {
        await next();
      }, 500);
    } catch (error) {
      console.error('Error saving weight fluctuation data:', error);
    }
  }, [saveFormData, next]);

  return (
    <QAPageTemplate
      title={<GradientText gradient="purple-blue">Medical History</GradientText>}
      titleClassName="font-[500] tracking-wide text-[24px]"
      question="How much has your weight fluctuated over the last 12 months?"
      questionClassName="text-[40px] font-light text-black"
      className={className}
    >
      <QuestionList
        options={WEIGHT_FLUCTUATION_OPTIONS}
        selectedValue={selectedValue}
        onSelect={handleOptionSelect}
        className="mt-8"
        showArrows={true}
      />
    </QAPageTemplate>
  );
} 