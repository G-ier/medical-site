'use client';

import { useCallback } from 'react';
import { QAPageTemplate } from '@/shared/ui/templates';
import { MoodGrid } from '@/shared/ui/molecules/mood-grid';
import { useOnboarding } from '@/features/onboarding-flow/hooks/use-onboarding';

export interface MoodAssessmentProps {
  className?: string;
}


export function MoodAssessment({ className }: MoodAssessmentProps) {
  const { next } = useOnboarding(); // currentStep is currently unused
  // Always use "mood-assessment" as the step ID for this component
  const stepId = "mood-assessment";


  const handleMoodSelect = useCallback(async () => {
    if (!stepId) {
      console.error('No stepId available');
      return;
    }
    
    try {
      setTimeout(async () => {
        try {
          await next();
        } catch (error) {
          console.error('🎯 Error navigating to next step:', error);
        } 
      }, 500);
    } catch (error) {
      console.error('🎯 Error in handleMoodSelect:', error);
    }
  }, [next, stepId]);

  return (
    <QAPageTemplate
      title="Getting started"
      titleClassName="text-red-500 font-[500] tracking-wide text-lg sm:text-[24px]"
      question="Before we get started - how are you feeling today?"
      questionClassName="text-xl sm:text-[40px] font-light text-black"
      className={className}
      showBackButton={false}
    >
      <MoodGrid
        onMoodSelect={handleMoodSelect}
      />
    </QAPageTemplate>
  );
} 