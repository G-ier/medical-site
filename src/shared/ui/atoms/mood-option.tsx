'use client';

import { cn } from '@/shared/lib/utils';
import Image from 'next/image';

export interface MoodOptionProps {
  id: string;
  label: string;
  iconPath: string;
  onClick?: (id: string) => void;
  className?: string;
}

export function MoodOption({
  id,
  label,
  iconPath,
  onClick,
  className
}: MoodOptionProps) {
  return (
    <button
      type="button"
      onClick={() => {
        console.log('MoodOption clicked:', id);
        onClick?.(id);
      }}
      className={cn(
        // Base styles
        'flex flex-col items-center justify-center',
        'min-h-[64px] sm:min-h-[100px] p-2 sm:p-4 rounded-lg',
        'transition-all duration-200 ease-in-out',
        'hover:border-gray-300 hover:shadow-sm',
        'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
        'bg-white',
        
        // Selected state
        'hover:border-blue-500 hover:bg-blue-50',
        'shadow-md',
        className
      )}
    >
      {/* Mood Icon */}
      <div className="mb-2">
        <Image
          src={iconPath}
          alt={`${label} mood`}
          width={48}
          height={48}
          className="w-8 h-8 sm:w-12 sm:h-12"
        />
      </div>
      
      {/* Mood Label */}
      <span className={cn(
        'text-sm font-medium text-center',
        'text-gray-700'
      )}>
        {label}
      </span>
    </button>
  );
} 