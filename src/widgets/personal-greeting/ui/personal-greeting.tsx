'use client';

import { useCallback, useEffect, useState } from 'react';
import { QAPageTemplate } from '@/shared/ui/templates';
import { GradientText, ContinueButton } from '@/shared/ui/atoms';
import { useOnboarding } from '@/features/onboarding-flow/hooks/use-onboarding';
import { useFormData } from '@/shared/hooks';
import { FormType } from '@/shared/types/form-types';

export interface PersonalGreetingProps {
    className?: string;
}

/**
 * Personal Greeting Component
 * Page showing personalized greeting "Nice to meet you [name]"
 */
export function PersonalGreeting({ className }: PersonalGreetingProps) {
  const { next } = useOnboarding();

  const {get} = useFormData();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const formData: any = await get(FormType.CREATE_PATIENT);
      console.log('🎯 PersonalGreeting: Form data:', formData);
      setFirstName(formData?.data?.formData.first_name || '');
      setLastName(formData?.data?.formData.last_name || '');
    };  
    fetchData();
  }, [get]);
 

  const handleContinue = useCallback(async () => {
    try {
      // Mark personal-greeting step as completed before proceeding
      console.log('🎯 PersonalGreeting: Marking step as completed');
                  ;
      console.log('🎯 PersonalGreeting: Step marked as completed, proceeding to next');
      
      await next();
      console.log('🎯 PersonalGreeting: Successfully navigated to next step');
    } catch (error) {
      console.error('🎯 PersonalGreeting: Error navigating to next step:', error);
    }
  }, [next]);



  // Note: Removed auto-navigation to let users see their name

    return (
        <QAPageTemplate
            title={
                <GradientText gradient="purple-blue">
                    Getting started
                </GradientText>
            }
            titleClassName="block w-auto text-lg sm:text-[24px] font-semibold"
            question={
                <div className="flex flex-wrap items-center justify-center gap-2">
                    Nice to meet you
                    <GradientText gradient="purple-blue">
                        {firstName} {lastName}
                    </GradientText>
                </div>
            }
            questionClassName="text-xl sm:text-[40px] font-medium"
            actions={
                <ContinueButton onClick={handleContinue} />
            }
            className={className}
        />
    );
} 