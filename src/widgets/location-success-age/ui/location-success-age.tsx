'use client';

import { AgeVerificationWidget } from '@/widgets/age-verification/ui/age-verification-widget';

export interface LocationSuccessAgeProps {
  className?: string;
}

export function LocationSuccessAge({ className }: LocationSuccessAgeProps) {
  return (
    <AgeVerificationWidget className={className} />
  );
} 