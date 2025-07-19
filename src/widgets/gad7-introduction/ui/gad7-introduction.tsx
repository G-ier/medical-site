'use client';

import { QAPageTemplate } from '@/shared/ui/templates';
import { Button } from '@/shared/ui/button';
import { useOnboarding } from '@/features/onboarding-flow/hooks/use-onboarding';
import { GradientText } from '@/shared/ui/atoms/gradient-text';
import { useCallback } from 'react';

export interface Gad7IntroductionProps {
  className?: string;
}

export function Gad7Introduction({ className }: Gad7IntroductionProps) {
  const { next} = useOnboarding();

  const handleContinue = useCallback(async () => {
    try {
      console.log('GAD7 introduction - continuing to next step');
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
        <GradientText gradient="pink-yellow">
          Anxiety & Depression Symptoms
        </GradientText>
      }
      titleClassName="text-red-500 font-[500] tracking-wide text-[24px]"
      question="How it works"
      questionClassName="text-[40px] font-light text-black"
      className={className}
    >
      <div className="flex flex-col items-center space-y-8">
        <p className="text-gray-600 text-center max-w-2xl text-lg leading-relaxed">
          These two simple questions can help quantify your symptoms, so your healthcare 
          provider has a baseline for diagnosis.
        </p>
        
        <Button
          onClick={handleContinue}
          className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
        >
          Continue
        </Button>
      </div>
    </QAPageTemplate>
  );
} 