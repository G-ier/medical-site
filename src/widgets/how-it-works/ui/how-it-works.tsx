'use client';

import { QAPageTemplate } from '@/shared/ui/templates';
import { Button } from '@/shared/ui/button';
import { GradientText } from '@/shared/ui/atoms/gradient-text';
import { useOnboarding } from '@/features/onboarding-flow/hooks/use-onboarding';

export interface HowItWorksProps {
  className?: string;
}

export function HowItWorks({ className }: HowItWorksProps) {
  const { next, isLoading } = useOnboarding();

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
          onClick={next}
          disabled={isLoading}
          className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
        >
          Continue
        </Button>
      </div>
    </QAPageTemplate>
  );
} 