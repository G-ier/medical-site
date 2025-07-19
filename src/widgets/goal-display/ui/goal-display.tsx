'use client';

import { GoalCard } from '@/shared/ui/molecules/goal-card';
import { Button } from '@/shared/ui/button';
import { useOnboarding } from '@/features/onboarding-flow/hooks/use-onboarding';

export interface GoalDisplayProps {
  className?: string;
}

export function GoalDisplay({ }: GoalDisplayProps) {
  const { next, isLoading } = useOnboarding();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-8">
      <div className="w-full max-w-2xl flex flex-col items-center">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-black">rejuve</h1>
        </div>

        {/* Title */}
        <h2 className="text-[40px] font-normal text-black text-center mb-12">
          Your Weight Goal
        </h2>

        {/* Goal Card */}
        <div className="mb-12">
          <GoalCard
            goalWeight="120 lbs"
            currentBMI={41}
            goodBMI={23}
            description="BMI is a key data point that doctors use to assess your overall health as well as any health risks"
          />
        </div>

        {/* Next Button */}
        <Button
          onClick={next}
          disabled={isLoading}
          className="w-full max-w-md bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors"
        >
          Next
        </Button>
      </div>
    </div>
  );
} 