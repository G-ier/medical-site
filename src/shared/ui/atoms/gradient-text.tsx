'use client';

import { ReactNode } from 'react';
import { cn } from '@/shared/lib/utils';

export interface GradientTextProps {
  children: ReactNode;
  className?: string;
  gradient?: 'pink-yellow' | 'purple-blue' | 'custom';
  customGradient?: string;
}

/**
 * Gradient Text Component
 * Reusable component for gradient text styling
 */
export function GradientText({ 
  children, 
  className,
  gradient = 'pink-yellow',
  customGradient
}: GradientTextProps) {
  const gradientClasses = {
    'pink-yellow': 'bg-gradient-to-r from-[#FF8AAE] to-[#FFF89A]',
    'purple-blue': 'bg-gradient-to-r from-[#CAB8FF] to-[#6F69AC]'
  };

  return (
    <span 
      className={cn(
        'bg-clip-text text-transparent',
        gradient === 'custom' ? customGradient : gradientClasses[gradient],
        className
      )}
    >
      {children}
    </span>
  );
} 