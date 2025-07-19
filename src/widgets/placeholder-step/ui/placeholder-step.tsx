'use client';

import { QAPageTemplate } from '@/shared/ui/templates/qa-page-template';
import { GradientText } from '@/shared/ui/atoms';

export interface PlaceholderStepProps {
  className?: string;
}

export function PlaceholderStep({ className }: PlaceholderStepProps) {



  return (
    <QAPageTemplate
      title={
        <GradientText gradient="purple-blue">
          Next Step
        </GradientText>
      }
      titleClassName="text-[24px] font-semibold"
      question="This is a placeholder step"
      questionClassName="text-[40px] font-medium text-black"
      className={className}
    >
      <div className="text-center">
        <div className="bg-gray-100 rounded-lg p-8 mb-6">
          <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">
            This is a placeholder for the next onboarding step.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Replace this component with actual content when ready.
          </p>
        </div>
      </div>
    </QAPageTemplate>
  );
} 