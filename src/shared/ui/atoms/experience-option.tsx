'use client';

import { cn } from '@/shared/lib/utils';

export interface ExperienceOptionProps {
  id: string;
  label: string;
  icon: string;
  isSelected?: boolean;
  onClick?: (id: string) => void;
  className?: string;
}

export function ExperienceOption({
  id,
  label,
  icon,
  isSelected = false,
  onClick,
  className
}: ExperienceOptionProps) {
  return (
    <button
      type="button"
      onClick={() => {
        console.log('ExperienceOption clicked:', id);
        onClick?.(id);
      }}
      className={cn(
        // Base styles
        'flex flex-col items-center justify-center',
        'min-h-[140px] p-6 rounded-lg',
        'transition-all duration-200 ease-in-out',
        'border border-gray-200 bg-white',
        'hover:border-gray-300 hover:shadow-sm',
        'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
        
        // Selected state
        isSelected && [
          'border-blue-500 bg-blue-50',
          'shadow-md'
        ],
        
        className
      )}
    >
      {/* Experience Icon */}
      <div className="mb-4">
        <span className="text-4xl">
          {icon}
        </span>
      </div>
      
      {/* Experience Label */}
      <span className={cn(
        'text-base font-medium text-center whitespace-pre-line',
        isSelected ? 'text-blue-700' : 'text-gray-700'
      )}>
        {label}
      </span>
    </button>
  );
} 