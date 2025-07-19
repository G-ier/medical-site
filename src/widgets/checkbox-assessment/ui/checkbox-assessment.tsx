'use client';

import { useState, useCallback } from 'react';
import { QAPageTemplate } from '@/shared/ui/templates';
import { CheckboxList, CheckboxOption } from '@/shared/ui/molecules/checkbox-list';
import { Button } from '@/shared/ui/button';
import { useOnboarding } from '@/features/onboarding-flow/hooks/use-onboarding';
import { useFormData } from '@/shared/hooks';
import { FormType } from '@/shared/types/form-types';

export interface CheckboxAssessmentProps {
  title: string | React.ReactNode;
  question: string;
  description?: string;
  options: CheckboxOption[];
  fieldName: string;
  formType: FormType;
  titleClassName?: string;
  questionClassName?: string;
  descriptionClassName?: string;
  className?: string;
  continueButtonText?: string;
  minSelections?: number;
  maxSelections?: number;
  showProgressBar?: boolean;
  progress?: number;
  totalSegments?: number;
  completedSegments?: number;
  currentSegment?: number;
  dataTransformer?: (selectedValues: string[], options: CheckboxOption[]) => string[];
  navigateTo?: (selectedValues: string[]) => void;
  // onDataSave?: (data: Record<string, unknown>) => void; // Currently unused
}

export function CheckboxAssessment({
  title,
  question,
  description,
  options,
  fieldName,
  formType,
  titleClassName = "font-[500] tracking-wide text-[24px]",
  questionClassName = "text-[40px] font-light text-black",
  descriptionClassName = "text-gray-600 text-center max-w-2xl text-lg leading-relaxed",
  className,
  continueButtonText = "Continue",
  minSelections = 0,
  maxSelections,
  showProgressBar = false,
  progress = 0,
  totalSegments = 3,
  completedSegments = 0,
  currentSegment = 1,
  dataTransformer,
  navigateTo,
}: CheckboxAssessmentProps) {
  const { currentStep } = useOnboarding();
  const { next, isLoading } = useOnboarding();
  const { save: saveFormData } = useFormData();

  const [localSelectedValues, setLocalSelectedValues] = useState<string[]>();

  console.log('🎯 CheckboxAssessment component state:', {
    stepId: currentStep?.id,
    fieldName,
    localSelectedValues
  });

  const handleSelectionChange = useCallback((newSelection: string[], value: string) => {
    console.log(`${fieldName} local selection changed:`, newSelection);
    console.log('value', value);

    const noneOfTheAbove = 'PATIENT SELECTED NONE OF THE ABOVE';
    let updatedSelection: string[];

    if (value === noneOfTheAbove) {
      // If 'None of the above' was clicked, always keep only it
      updatedSelection = [noneOfTheAbove];
    } else if (newSelection.includes(noneOfTheAbove)) {
      // If another option was clicked and 'None of the above' is in the selection, remove it
      updatedSelection = newSelection.filter(option => option !== noneOfTheAbove);
    } else {
      // Otherwise, use the new selection as is
      updatedSelection = newSelection;
    }

    // Check max selections limit
    if (maxSelections && updatedSelection.length > maxSelections) {
      console.log(`Selection limited to ${maxSelections} items`);
      return;
    }

    setLocalSelectedValues(updatedSelection);
    console.log(`${fieldName} local state updated to:`, updatedSelection);
  }, [fieldName, maxSelections]);

  const canContinue = localSelectedValues && localSelectedValues?.length >= minSelections;

  const handleContinue = useCallback(async () => {
    if (!canContinue) {
      console.log(`Minimum ${minSelections} selections required`);
      return;
    }

    console.log(`💾 Saving ${fieldName} data:`, localSelectedValues);

    try {
      let dataToSave;
      const noneOfTheAbove = 'PATIENT SELECTED NONE OF THE ABOVE';
      // If only 'None of the above' is selected, save in special format
      if (
        localSelectedValues &&
        localSelectedValues.length === 1 &&
        localSelectedValues[0] === noneOfTheAbove
      ) {
        // Collect all other options except 'None of the above'
        const otherOptions = options
          .map(opt => (typeof opt === 'string' ? opt : opt.value))
          .filter(opt => opt !== noneOfTheAbove)
          .join(', ');
        dataToSave = `${noneOfTheAbove} - ${otherOptions}`;
      } else {
        // Transform data if transformer is provided
        dataToSave = dataTransformer
          ? dataTransformer(localSelectedValues, options)
          : localSelectedValues;
      }

      console.log(`${fieldName} transformed data:`, dataToSave);

      await saveFormData(formType, { [fieldName]: dataToSave });
      if (navigateTo) {
        await navigateTo(localSelectedValues);
      } else {
        await next();
      }
      console.log('Successfully navigated to next step');
    } catch (error) {
      console.error('Error saving selection or navigating:', error);
    }
  }, [navigateTo, next,canContinue, minSelections, fieldName, localSelectedValues, saveFormData, formType, dataTransformer, options]);



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
      <div className="flex flex-col items-center space-y-8">
        {description && (
          <p className={descriptionClassName}>
            {description}
          </p>
        )}

        <CheckboxList
          options={options}
          selectedValues={localSelectedValues}
          onSelectionChange={handleSelectionChange}
          className="mt-8"
        />

        <Button
          onClick={handleContinue}
          disabled={isLoading || !canContinue}
          className={`
            px-8 py-3 rounded-full font-medium transition-colors
            ${canContinue
              ? 'bg-black text-white hover:bg-gray-800'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }
          `}
        >
          {continueButtonText}
        </Button>
      </div>
    </QAPageTemplate>
  );
} 