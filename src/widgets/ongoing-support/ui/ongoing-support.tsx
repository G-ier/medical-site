'use client';

import { useCallback } from 'react';
import { QAPageTemplate } from '@/shared/ui/templates';
import { ContinueButton, GradientText } from '@/shared/ui/atoms';
import { useOnboarding } from '@/features/onboarding-flow/hooks/use-onboarding';
import Image from 'next/image';

export interface OngoingSupportProps {
  className?: string;
}

export function OngoingSupport({ className }: OngoingSupportProps) {
  const { next } = useOnboarding();

  const handleContinue = useCallback(async () => {
                ;
    await next();
  }, [next]);



  return (
    <QAPageTemplate
      maxWidth="2xl"
      title={
        <div className="text-[48px] font-light text-black flex flex-col items-start">
          <div className="mr-1">Ongoing support from</div>
          <GradientText gradient="purple-blue">
            medical experts
          </GradientText>
        </div>
      }
      titleClassName="text-[48px] font-light text-black"
      question="Got questions? A team of licensed medical providers can help whenever you want and as much as you want, at no extra cost."
      questionClassName="text-[24px] text-left"
      actions={<ContinueButton onClick={handleContinue} className='w-full' />}
      className={className}
    >
      <div className="">
        <Image src="/onboarding-3.jpg" alt="Ongoing support" width={1000} height={1000} className="w-full h-auto rounded-[36px]" />
      </div>
    </QAPageTemplate>
  );
}