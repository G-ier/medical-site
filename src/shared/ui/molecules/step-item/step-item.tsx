'use client';

import { cn } from '@/shared/lib/utils';
import { CheckIcon } from 'lucide-react';
import { ReactNode } from 'react';

export interface StepItemProps {
  title: string;
  description?: string;
  state: 'completed' | 'active' | 'inactive';
  content?: ReactNode;
  className?: string;
}

export function StepItem({
  title,
  description,
  state,
  content,
  className,
}: StepItemProps) {
  const isCompleted = state === 'completed';
  const isActive = state === 'active';
  const isInactive = state === 'inactive';

  return (
    <div className={cn('flex items-start gap-4 py-4', className)}>
      {/* Left side - Icon/Indicator */}
      <div className="flex flex-col items-center mt-2">
        {/* Icon */}
        {isCompleted && (
            <CheckIcon className="w-3 h-3 text-black" />
        )}

        {isActive && (
            <div className="w-[9px] h-[9px] rounded-full flex items-center justify-center bg-black" />
        )}

        {isInactive && (
            <div className="w-[9px] h-[9px] rounded-full flex items-center justify-center bg-white border-[2px] border-black" />
        )}

        {/* Vertical line (only show if there's content or if not the last item) */}
        {isActive && (
          <div className={cn(
            'w-0.5 h-24 mt-2 bg-gradient-to-b from-black to-white'
          )} />
        )}
      </div>


      {/* Right side - Content */}
      <div className="flex-1 min-w-0">
        {/* Title */}
        {isInactive || isCompleted ? <h3 className={cn(
          'text-base font-normal mb-1',
          isCompleted && 'text-[#A9A5A5 text-[16px] font-bold]',
          isActive && 'text-black font-medium',
          isInactive && 'text-[#A9A5A5] text-[16px] font-bold'
        )}>
          {title}
        </h3>
          : null}
        {/* Description (if provided) */}
        {description && (
          <p className={cn(
            'text-sm mb-3',
            isCompleted && 'text-gray-400',
            isActive && 'text-gray-600',
            isInactive && 'text-gray-300'
          )}>
            {description}
          </p>
        )}

        {/* Expandable content (only for active state) */}
        {isActive && content && (
          <div className="bg-white rounded-lg p-6  mt-2">
            {content}
          </div>
        )}
      </div>
    </div>
  );
} 