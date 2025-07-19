'use client';

import { useCallback, useState } from 'react';
import { QAPageTemplate } from '@/shared/ui/templates';
import { QuestionList, QuestionOption } from '@/shared/ui/molecules/question-list';
import { useOnboarding } from '@/features/onboarding-flow/hooks/use-onboarding';
import { FormType } from '@/shared/types/form-types';
import { useFormData } from '@/shared/hooks';

export interface QuestionAssessmentProps {
  title: string | React.ReactNode;
  question: string;
  options: QuestionOption[];
  fieldName: string;
  formType: FormType;
  titleClassName?: string;
  questionClassName?: string;
  className?: string;
  autoNavigate?: boolean;
  navigationDelay?: number;
  showArrows?: boolean;
  showProgressBar?: boolean;
  progress?: number;
  totalSegments?: number;
  completedSegments?: number;
  currentSegment?: number;
  navigateTo?: ({ value }: { value: string }) => Promise<void>;
}

export function QuestionAssessment({
  title,
  question,
  options,
  fieldName,
  formType,
  titleClassName = "font-[500] tracking-wide text-[24px]",
  questionClassName = "text-[40px] font-light text-black",
  className,
  autoNavigate = true,
  showArrows = true,
  showProgressBar = false,
  progress = 0,
  totalSegments = 3,
  completedSegments = 0,
  currentSegment = 1,
  navigateTo
}: QuestionAssessmentProps) {
  const { next } = useOnboarding();
  const { save: saveFormData } = useFormData();
  const [selectedValue] = useState<string>();

  const handleOptionSelect = useCallback(async (value: string) => {
    console.log(`${fieldName} selected:`, value);

    try {
      await saveFormData(formType, { [fieldName]: value });
      if (navigateTo) {
        await navigateTo({ value });
      } else {
        if (autoNavigate) {
          try {
            await next();
          } catch (error) {
            console.error('Error navigating to next step:', error);
          }
        }
      }
    } catch (error) {
      console.error('Error in handleOptionSelect:', error);
    }
  }, [next, fieldName, autoNavigate, formType, saveFormData, navigateTo]);

  return (
    <QAPageTemplate
      title={title}
      titleClassName={titleClassName}
      question={question}
      questionClassName={questionClassName}
      className={className}
      showProgressBar={showProgressBar}
      progress={progress}
      totalSegments={totalSegments}
      completedSegments={completedSegments}
      currentSegment={currentSegment}
    >
      <QuestionList
        options={options}
        selectedValue={selectedValue}
        onSelect={handleOptionSelect}
        className="mt-8"
        showArrows={showArrows}
      />
    </QAPageTemplate>
  );
} 