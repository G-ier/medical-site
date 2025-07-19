'use client';

import { useCallback, useState } from 'react';
import { QAPageTemplate } from '@/shared/ui/templates';
import { ContinueButton, GradientText } from '@/shared/ui/atoms';
import { TextInput } from '@/shared/ui/text-input';
import { useOnboarding } from '@/features/onboarding-flow/hooks/use-onboarding';
import { FormType } from '@/shared/types/form-types';
import { useFormData } from '@/shared/hooks';

export interface HeightQuestionProps {
  className?: string;
}

export function HeightQuestion({ className }: HeightQuestionProps) {
  const { next } = useOnboarding();
  const { save: saveFormData } = useFormData();
  const [height, setHeight] = useState({ feet: '', inches: '' });
  const [weight, setWeight] = useState('');

  const handleContinue = useCallback(async () => {
    // Save both height and weight data
    await saveFormData(FormType.UPDATE_PATIENT, {
      height: (+height.feet * 12) + (+height.inches || 0),
    });

    await saveFormData(FormType.HEALTHIE_METRICS, {
      height: (+height.feet * 12) + (+height.inches || 0),
      weight: +weight || 0
    });

    await next();
  }, [next, height, weight, saveFormData]);



  const isFormValid = height.feet && height.inches && weight;


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

    >
      <div className="max-w-[720px] w-full mx-auto space-y-12">
        {/* Height Section */}
        <div className="space-y-6">
          <h2 className="text-xl sm:text-[40px] font-bold text-black text-center">
            What is your height?
          </h2>
          <div className="flex flex-col sm:flex-row sm:space-x-4 gap-4">
            <div className="flex-1">
              <TextInput
                type="text"
                placeholder="Feet"
                value={height.feet}
                onChange={(e) => {
                  const value = e.target.value;
                  setHeight(prev => ({ ...prev, feet: value }));
                }}
                variant="white"
                height="64px"
                fontSize="20px"
                textAlign="center"
                borderRadius="8px"
              />
            </div>
            <div className="flex-1">
              <TextInput
                type="text"
                placeholder="Inches"
                value={height.inches}
                onChange={(e) => {
                  const value = e.target.value
                  setHeight(prev => ({ ...prev, inches: value }));
                }}
                variant="default"
                height="64px"
                fontSize="20px"
                textAlign="center"
                borderRadius="8px"
              />
            </div>
          </div>
        </div>

        {/* Weight Section */}
        <div className="space-y-6">
          <h2 className="text-xl sm:text-[40px] font-bold text-black text-center">
            What is your weight?
          </h2>
          <div>
            <TextInput
              type="text"
              placeholder="Pounds"
              value={weight}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, '');
                if (parseInt(value) <= 1000 || value === '') {
                  setWeight(value);
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