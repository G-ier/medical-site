'use client';

import { ChevronLeft } from 'lucide-react';
import { cn } from '@/shared/lib/utils';

interface BackButtonProps {
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  color?: 'white' | 'black';
}

export function BackButton({ onClick, className, disabled = false, color = 'black' }: BackButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'flex items-center justify-center w-11 h-11 rounded-full',
        'bg-transparent border-0',
        'hover:bg-white hover:border hover:border-gray-200 hover:shadow-sm',
        'transition-all duration-200 ease-in-out',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
        className
      )}
      aria-label="Go back"
    >
      <ChevronLeft className={cn("w-5 h-5", color === 'white' ? 'text-white' : 'text-black')} />
    </button>
  );
} 