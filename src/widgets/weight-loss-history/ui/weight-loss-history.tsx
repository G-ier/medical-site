'use client';

import { useCallback, useState } from 'react';
import { useOnboarding } from '@/features/onboarding-flow/hooks/use-onboarding';
import { QAPageTemplate } from '@/shared/ui/templates';
import { QuestionList } from '@/shared/ui/molecules/question-list';
import { useFormData } from '@/shared/hooks';
import { FormType } from '@/shared/types/form-types';
import { GradientText } from '@/shared/ui/atoms';

const WEIGHT_LOSS_OPTIONS = [
  { 
    id: 'no_attempts',
    value: 'no_attempts', 
    label: 'No, I have not attempted weight loss',
    olhValue: 'PATIENT DOES NOT HAVE DOCUMENTED ATTEMPTS TO LOSE WEIGHT'
  },
  { 
    id: 'diet_exercise',
    value: 'diet_exercise', 
    label: 'Yes, through diet and exercise',
    olhValue: 'PATIENT HAS DOCUMENTED ATTEMPTS TO LOSE WEIGHT THROUGH DIET AND EXERCISE'
  },
  { 
    id: 'medication',
    value: 'medication', 
    label: 'Yes, with weight loss medication',
    olhValue: 'PATIENT HAS DOCUMENTED ATTEMPTS TO LOSE WEIGHT WITH MEDICATION'
  },
  { 
    id: 'surgery',
    value: 'surgery', 
    label: 'Yes, with bariatric surgery',
    olhValue: 'PATIENT HAS DOCUMENTED ATTEMPTS TO LOSE WEIGHT WITH BARIATRIC SURGERY'
  },
  { 
    id: 'other',
    value: 'other', 
    label: 'Yes, through other methods',
    olhValue: 'PATIENT HAS DOCUMENTED ATTEMPTS TO LOSE WEIGHT THROUGH OTHER METHODS'
  }
];

export interface WeightLossHistoryProps {
  className?: string;
}

export function WeightLossHistory({ className }: WeightLossHistoryProps) {
  const { next } = useOnboarding();
  const { save: saveFormData } = useFormData();
  const [selectedValue, setSelectedValue] = useState<string>('');


  const handleOptionSelect = useCallback(async (value: string) => {
    console.log('Weight loss history selected:', value);
    setSelectedValue(value);
    
    try {
      const selectedOption = WEIGHT_LOSS_OPTIONS.find(opt => opt.value === value);
      
      await saveFormData(FormType.OHL_INITIAL_INTAKE, {
        q5_weight_loss_attempt_history: [selectedOption?.olhValue || selectedOption?.label || value]
      });
      
      // Auto-navigate after 500ms
      setTimeout(async () => {
        await next();
      }, 500);
    } catch (error) {
      console.error('Error saving weight loss history data:', error);
    }
  }, [saveFormData, next]);

  return (
    <QAPageTemplate
      title={<GradientText gradient="purple-blue">Medical History</GradientText>}
      titleClassName="font-[500] tracking-wide text-[24px]"
      question="Have you attempted weight loss in the past?"
      questionClassName="text-[40px] font-light text-black"
      className={className}
    >
      <QuestionList
        options={WEIGHT_LOSS_OPTIONS}
        selectedValue={selectedValue}
        onSelect={handleOptionSelect}
        className="mt-8"
        showArrows={true}
      />
    </QAPageTemplate>
  );
} 