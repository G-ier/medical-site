'use client';

import { useCallback } from 'react';
import { QAPageTemplate } from '@/shared/ui/templates';
import { GradientText, ContinueButton } from '@/shared/ui/atoms';
import { useOnboarding } from '@/features/onboarding-flow/hooks/use-onboarding';

export interface UnderstandingResultsProps {
  className?: string;
}

/**
 * Understanding Results Component
 * Educational page explaining assessment results to users
 */
export function UnderstandingResults({ className }: UnderstandingResultsProps) {
  const { next } = useOnboarding();

  const handleContinue = useCallback(async () => {
    try {
      console.log('Understanding results - continuing to next step');
      ;
      await next();
      console.log('Successfully navigated to next step');
    } catch (error) {
      console.error('Error navigating to next step:', error);
    }
  }, [next]);



  return (
    <QAPageTemplate
      title={
        <GradientText gradient="purple-blue">
          Understanding Your Results
        </GradientText>
      }
      titleClassName="block w-auto text-[24px] font-semibold"
      question=""
      questionClassName="text-[40px] font-medium text-black mb-8"
      className={className}
    >
      <div className="text-center mb-8">
        <p className="text-[24px] font-light text-black">
          While these results aren&apos;t a diagnosis, they can help you and your provider make a plan to help you feel your best.
        </p>
      </div>
      
      <div className="flex justify-center">
        <ContinueButton onClick={handleContinue} />
      </div>
    </QAPageTemplate>
  );
}