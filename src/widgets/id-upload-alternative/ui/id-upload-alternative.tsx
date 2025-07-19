'use client';

import { useCallback } from 'react';
import { QAPageTemplate } from '@/shared/ui/templates';
import { ContinueButton } from '@/shared/ui/atoms';
import { useOnboarding } from '@/features/onboarding-flow/hooks/use-onboarding';

export interface IdUploadAlternativeProps {
  className?: string;
}

export function IdUploadAlternative({ className }: IdUploadAlternativeProps) {
  const { next } = useOnboarding();

  const handleContinue = useCallback(async () => {
                ;
    await next();
  }, [next]);



  return (
    <QAPageTemplate
      title="IdUploadAlternative - Coming Soon"
      titleClassName="text-[32px] font-light text-black"
      question="This page will be implemented with specific content from the design document."
      questionClassName="text-[18px] text-gray-600"
      actions={<ContinueButton onClick={handleContinue} />}
      className={className}
    >
      <div className="text-center p-8">
        <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4"></div>
        <p className="text-gray-500">Page: id-upload-alternative</p>
        <p className="text-gray-400 text-sm mt-2">Component: IdUploadAlternative</p>
      </div>
    </QAPageTemplate>
  );
}