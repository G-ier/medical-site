'use client';

import { useCallback } from 'react';
import { QAPageTemplate } from '@/shared/ui/templates';
import { ContinueButton } from '@/shared/ui/atoms';
import { useOnboarding } from '@/features/onboarding-flow/hooks/use-onboarding';

export interface CrisisResourcesProps {
  className?: string;
}

export function CrisisResources({ className }: CrisisResourcesProps) {
  const { next} = useOnboarding();

  const handleContinue = useCallback(async () => {
    await next();
  }, [next]);



  return (
    <QAPageTemplate
      title="CrisisResources"
      titleClassName="text-[32px] font-light text-black"
      question="This page will be implemented with specific content from the design document."
      questionClassName="text-[18px] text-gray-600"
      actions={<ContinueButton onClick={handleContinue} />}
      className={className}
      maxWidth="4xl"
    >
      <div className="mb-8 text-center">
        <p className="">Need messaging here</p>
      </div>
    </QAPageTemplate>
  );
}