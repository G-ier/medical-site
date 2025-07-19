'use client';

import { cn } from '@/shared/lib/utils';

export interface ProgressBarProps {
  progress: number; // 0-100
  className?: string;
  barClassName?: string;
  fillClassName?: string;
  showPercentage?: boolean;
  height?: 'sm' | 'md' | 'lg';
  // Segmented progress bar
  totalSegments?: number;
  completedSegments?: number; // Fully completed segments
  currentSegment?: number; // Current segment in progress
  segmented?: boolean;
}

const heightClasses = {
  sm: 'h-2',
  md: 'h-3', 
  lg: 'h-4'
};

export function ProgressBar({
  progress,
  className,
  barClassName,
  fillClassName,
  showPercentage = false,
  height = 'sm',
  totalSegments = 3,
  completedSegments = 0,
  currentSegment = 1,
  segmented = true,
}: ProgressBarProps) {
  const clampedProgress = Math.min(Math.max(progress, 0), 100);
  const clampedCompletedSegments = Math.min(Math.max(completedSegments, 0), totalSegments);
  const clampedCurrentSegment = Math.min(Math.max(currentSegment, 1), totalSegments);

  console.log('🎯 ProgressBar:', {
    progress,
    clampedProgress,
    completedSegments,
    clampedCompletedSegments,
    currentSegment,
    clampedCurrentSegment,
    totalSegments
  });

  // Render segmented progress bar
  if (segmented) {
    return (
      <div className={cn('w-full', className)}>
        <div className="flex w-full gap-2">
          {Array.from({ length: totalSegments }, (_, index) => {
            const segmentIndex = index + 1;
            
            // Determine segment state
            let segmentState: 'completed' | 'current' | 'empty';
            if (segmentIndex <= clampedCompletedSegments) {
              segmentState = 'completed';
            } else if (segmentIndex === clampedCurrentSegment) {
              segmentState = 'current';
            } else {
              segmentState = 'empty';
            }
            
            return (
              <div
                key={segmentIndex}
                className={cn(
                  'flex-1 rounded-full transition-all duration-300 ease-out relative overflow-hidden',
                  heightClasses[height],
                  'bg-gray-200',
                  barClassName
                )}
              >
                {/* Completed segment - fully black */}
                {segmentState === 'completed' && (
                  <div className={cn('w-full h-full bg-black', fillClassName)} />
                )}
                
                {/* Current segment - partial progress */}
                {segmentState === 'current' && (
                  <div 
                    className={cn('h-full bg-black transition-all duration-300 ease-out', fillClassName)}
                    style={{ width: `${clampedProgress}%` }}
                  />
                )}
                
                {/* Empty segment - stays gray (no additional content needed) */}
              </div>
            );
          })}
        </div>
        {showPercentage && (
          <div className="text-center text-sm text-gray-600 mt-1">
            Segment {clampedCurrentSegment}: {Math.round(clampedProgress)}%
          </div>
        )}
      </div>
    );
  }

  // Render continuous progress bar (original behavior)
  return (
    <div className={cn('w-full', className)}>
      <div className={cn(
        'w-full bg-gray-200 rounded-full overflow-hidden',
        heightClasses[height],
        barClassName
      )}>
        <div
          className={cn(
            'h-full bg-black transition-all duration-300 ease-out',
            fillClassName
          )}
          style={{ width: `${clampedProgress}%` }}
        />
      </div>
      {showPercentage && (
        <div className="text-center text-sm text-gray-600 mt-1">
          {Math.round(clampedProgress)}%
        </div>
      )}
    </div>
  );
} 