'use client';

import { useCallback, useState } from 'react';
import { QAPageTemplate } from '@/shared/ui/templates';
import { ContinueButton, GradientText } from '@/shared/ui/atoms';
import { TextInput } from '@/shared/ui/text-input';
import { useOnboarding } from '@/features/onboarding-flow/hooks/use-onboarding';
import { FormType } from '@/shared/types/form-types';
import { useFormData } from '@/shared/hooks';

export interface GoalWeightQuestionProps {
  className?: string;
}

export function GoalWeightQuestion({ className }: GoalWeightQuestionProps) {
  const { next } = useOnboarding();
  const { save: saveFormData } = useFormData();
  const [goalWeight, setGoalWeight] = useState('');

  const handleContinue = useCallback(async () => {
    await saveFormData(FormType.HEALTHIE_METRICS, {
      goalWeight: +goalWeight || 0
    });

    await next();
  }, [next, goalWeight, saveFormData]);



  const isFormValid = goalWeight;


  return (
    <QAPageTemplate
      title={<GradientText gradient="purple-blue">Getting started</GradientText>}
      actions={
        <ContinueButton
          onClick={handleContinue}
          disabled={!isFormValid}
        />
      }
      className={className}
      maxWidth="xl"
    >
      <div className="max-w-[720px] w-full mx-auto space-y-12">
        {/* Goal Weight Section */}
        <div className="space-y-6">
          <h2 className="text-xl sm:text-[40px] font-bold text-black text-center">
            What is your goal weight?
          </h2>
          <p className="text-base sm:text-[20px] text-gray-600 text-center">
            Please enter your desired weight in pounds (lbs).
          </p>
          <div>
            <TextInput
              type="text"
              placeholder="Pounds"
              value={goalWeight}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, '');
                if (parseInt(value) <= 1000 || value === '') {
                  setGoalWeight(value);
                }
              }}
              variant="white"
              height="64px"
              fontSize="20px"
              textAlign="center"
              borderRadius="8px"
            />
          </div>
        </div>
      </div>
    </QAPageTemplate>
  );
} 