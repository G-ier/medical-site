'use client';

import { QAPageTemplate } from '@/shared/ui/templates';
import { ResultCard, ResultCardProps } from '@/shared/ui/molecules/result-card';
import { Button } from '@/shared/ui/button';
import { useOnboarding } from '@/features/onboarding-flow/hooks/use-onboarding';
import { useCallback } from 'react';

export interface ResultsDisplayProps {
  title: string | React.ReactNode;
  subtitle: string;
  description: string;
  results: Omit<ResultCardProps, 'className'>[];
  titleClassName?: string;
  subtitleClassName?: string;
  descriptionClassName?: string;
  className?: string;
  continueButtonText?: string;
  showProgressBar?: boolean;
  progress?: number;
  totalSegments?: number;
  completedSegments?: number;
  currentSegment?: number;
  stepId?: string;
}

export function ResultsDisplay({
  title,
  subtitle,
  description,
  results,
  titleClassName = "font-[500] tracking-wide text-[24px]",
  subtitleClassName = "text-[36px] font-bold text-black mb-4",
  descriptionClassName = "text-gray-600 text-center text-[20px] leading-relaxed mb-12",
  className,
  continueButtonText = "Continue",
  showProgressBar = false,
  progress = 0,
  totalSegments = 3,
  completedSegments = 0,
  currentSegment = 1,
  stepId = 'assessment-results'
}: ResultsDisplayProps) {
  const { next } = useOnboarding();

  const handleContinue = useCallback(async () => {
    try {
      console.log(`${stepId} - continuing to next step`);
      ;
      await next();
      console.log('Successfully navigated to next step');
    } catch (error) {
      console.error('Error navigating to next step:', error);
    }
  }, [next, stepId]);

  return (
    <QAPageTemplate
      title={title}
      titleClassName={titleClassName}
      className={className}
      showProgressBar={showProgressBar}
      progress={progress}
      totalSegments={totalSegments}
      completedSegments={completedSegments}
      currentSegment={currentSegment}
      maxWidth='5xl'
    >
      <div className="flex flex-col items-center w-full">
        {/* Subtitle */}
        <h2 className={subtitleClassName}>
          {subtitle}
        </h2>
        
        {/* Description */}
        <p className={descriptionClassName}>
          {description}
        </p>
        
        {/* Results Cards */}
        <div className="w-full flex flex-col justify-between items-center mb-12">
          {results.map((result, index) => (
            <ResultCard
              key={index}
              {...result}
            />
          ))}
        </div>
        
        {/* Continue Button */}
        <Button
          onClick={handleContinue}
          className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
        >
          {continueButtonText}
        </Button>
      </div>
    </QAPageTemplate>
  );
} 