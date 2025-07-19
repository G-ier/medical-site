'use client';

import { useCallback, useState } from 'react';
import { QAPageTemplate } from '@/shared/ui/templates';
import { GradientText, ContinueButton } from '@/shared/ui/atoms';
import { NameInput } from '@/shared/ui/molecules';
import { useOnboarding } from '@/features/onboarding-flow/hooks/use-onboarding';
import { useFormData } from '@/shared/hooks';
import { FormType } from '@/shared/types/form-types';



export interface NameIntroductionProps {
  className?: string;
}

/**
 * Name Introduction Component
 * Page for collecting user's first name
 */
export function NameIntroduction({ className }: NameIntroductionProps) {
  const { next } = useOnboarding();
  const { save: saveFormData } = useFormData();
  const [firstName, setFirstName] = useState('');
  const [error, setError] = useState<string>('');

  const handleContinue = useCallback(async () => {
    try {
      console.log('Name introduction - continuing to next step');
      await saveFormData(FormType.CREATE_PATIENT, { first_name: firstName });
      await next();
      console.log('Successfully navigated to next step');
    } catch (error) {
      console.error('Error navigating to next step:', error);
    }
  }, [next, saveFormData, firstName]);



  return (
    <QAPageTemplate
      title={
        <GradientText gradient="pink-yellow">
          Getting started
        </GradientText>
      }
      titleClassName="block w-auto text-lg sm:text-[24px] font-semibold"
      question="Next, let's get acquainted-tell us a bit about yourself."
      questionClassName="text-base sm:text-[24px] font-light text-black"
      actions={
        <ContinueButton onClick={handleContinue} />
      }
      className={className}
    >
      <div className="space-y-1">
        <NameInput
          value={firstName}
          onChange={(value) => {
            setFirstName(value);
            // Clear error when user starts typing
            if (error) setError('');
          }}
          placeholder="first name"
        />
        {error && (
          <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
        )}
      </div>
    </QAPageTemplate>
  );
} 