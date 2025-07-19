'use client';

import { useCallback } from 'react';
import { Button } from '@/shared/ui/button';
import { StepList } from '@/shared/ui/molecules/step-list';
import { useOnboarding } from '@/features/onboarding-flow/hooks/use-onboarding';
import Image from 'next/image';
import { Logo } from '@/shared/ui/logo';

export interface NextStepsPreviewProps {
  className?: string;
}

export function NextStepsPreview({ }: NextStepsPreviewProps) {
  const { next, isLoading } = useOnboarding();

  const handleNext = useCallback(async () => {
    try {
      console.log('Next steps preview - continuing to next step');
      ;
      await next();
      console.log('Successfully navigated to next step');
    } catch (error) {
      console.error('Error navigating to next step:', error);
    }
  }, [next]);

  const steps = [
    {
      title: 'Weight loss profile',
      state: 'completed' as const,
    },
    {
      title: 'Health history',
      state: 'active' as const,
      content: (
        <div>
          <h4 className="font-semibold text-black mb-2">Health history</h4>
          <p className="text-gray-600 text-sm">
            A licensed medical provider will review this to build a treatment plan tailored to your goals.
          </p>
        </div>
      )
    },
    {
      title: 'Treatment preview',
      state: 'inactive' as const,
    }
  ];

  return (
    <div className="min-h-screen bg-[#F7F7F7] flex flex-col items-center justify-center px-6 py-8">
      <div className="w-full max-w-2xl flex flex-col">
        {/* Logo */}
        <div className="mb-4">
          <Logo />
        </div>

        {/* Avatar */}
        <div className="mb-1">
          <div className="w-16 h-16 rounded-full bg-gray-300 overflow-hidden">
            <Image
              src="/doctor.png"
              alt="User avatar"
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-[40px] font-normal text-black mb-12">
          Up next, complete your health history
        </h2>

        {/* Steps List */}
        <div className="w-full mb-12">
          <StepList steps={steps} />
        </div>

        {/* Next Button */}
        <Button
          onClick={handleNext}
          disabled={isLoading}
          className="w-full  bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors"
        >
          Next
        </Button>
      </div>
    </div>
  );
} 