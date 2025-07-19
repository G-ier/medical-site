'use client';

import { cn } from '@/shared/lib/utils';
import { StepItem, StepItemProps } from '../step-item';

export interface StepListProps {
  steps: Omit<StepItemProps, 'showBorder'>[];
  className?: string;
}

export function StepList({
  steps,
  className
}: StepListProps) {
  return (
    <div className={cn('w-full', className)}>
      {steps.map((step, index) => (
        <StepItem
          key={index}
          {...step}
        />
      ))}
    </div>
  );
} 