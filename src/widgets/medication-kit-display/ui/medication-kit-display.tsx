'use client';

import { Button } from '@/shared/ui/button';
import { MedicationKit } from '@/shared/ui/molecules/medication-kit';
import { useOnboarding } from '@/features/onboarding-flow/hooks/use-onboarding';

export interface MedicationKitDisplayProps {
  className?: string;
}

export function MedicationKitDisplay({ }: MedicationKitDisplayProps) { // className is currently unused
  const { next, isLoading } = useOnboarding();

  return (
    <div className="min-h-screen bg-[#F7F7F7] flex flex-col items-center justify-center px-6 py-8">
      <div className="w-full max-w-2xl flex flex-col items-center">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-black">rejuve</h1>
        </div>

        {/* Title */}
        <h2 className="text-[40px] font-normal text-black text-center mb-12">
          Your Treatment Plan
        </h2>

        {/* Medication Kit */}
        <div className="mb-12">
          <MedicationKit
            price="From $69/mo."
            title="Medication Kit 1"
            description="Comes with a behavioral program tailored to your weight loss profile"
            fsaEligible={true}
            imageSrc="/drugs.png"
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