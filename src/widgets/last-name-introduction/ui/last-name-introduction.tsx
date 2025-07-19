'use client';

import { useCallback, useState } from 'react';
import { QAPageTemplate } from '@/shared/ui/templates';
import { GradientText, ContinueButton } from '@/shared/ui/atoms';
import { NameInput } from '@/shared/ui/molecules';
import { useOnboarding } from '@/features/onboarding-flow/hooks/use-onboarding';
import { useFormData } from '@/shared/hooks';
import { FormType } from '@/shared/types/form-types';

export interface LastNameIntroductionProps {
  className?: string;
}

/**
 * Last Name Introduction Component
 * Page for collecting user's last name
 */
export function LastNameIntroduction({ className }: LastNameIntroductionProps) {
  const { next } = useOnboarding();
  const { save: saveFormData } = useFormData();
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState<string>('');

  const handleContinue = useCallback(async () => {
    try {
      console.log('Last name introduction - continuing to next step');
      await saveFormData(FormType.CREATE_PATIENT, { last_name: lastName });
      await next();
      console.log('Successfully navigated to next step');
    } catch (error) {
      console.error('Error navigating to next step:', error);
    }
  }, [next, saveFormData, lastName]);



  return (
    <QAPageTemplate
      title={
        <GradientText gradient="pink-yellow">
          Getting started
        </GradientText>
      }
      titleClassName="block w-auto text-[24px] font-semibold"
      question="And what's your last name?"
      questionClassName="text-[24px] font-light text-black"
      actions={
        <ContinueButton onClick={handleContinue} />
      }
      className={className}
    >
      <div className="space-y-1">
        <NameInput
          value={lastName}
          onChange={(value) => {
            setLastName(value);
            // Clear error when user starts typing
            if (error) setError('');
          }}
          placeholder="last name"
        />
        {error && (
          <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
        )}
      </div>
    </QAPageTemplate>
  );
} 