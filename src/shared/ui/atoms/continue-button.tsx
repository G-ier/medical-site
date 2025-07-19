'use client';

import { ButtonHTMLAttributes } from 'react';
import { cn } from '@/shared/lib/utils';

export interface ContinueButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

const variantClasses = {
  primary: 'bg-black text-white hover:bg-gray-800 focus:ring-black',
  secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500'
};

const sizeClasses = {
  sm: 'px-6 py-2 text-sm',
  md: 'px-8 py-3 text-base',
  lg: 'px-10 py-4 text-lg'
};

/**
 * Continue Button Component
 * Reusable button for onboarding navigation
 */
export function ContinueButton({
  children = 'Continue',
  variant = 'primary',
  size = 'md',
  className,
  disabled,
  ...props
}: ContinueButtonProps) {
  return (
    <button
      className={cn(
        'rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
        variantClasses[variant],
        sizeClasses[size],
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
} 