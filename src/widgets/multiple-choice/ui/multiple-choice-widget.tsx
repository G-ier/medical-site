'use client';

import { CheckboxAssessment } from '@/widgets/checkbox-assessment';
import { FormType } from '@/shared/types/form-types';
import { CheckboxOption } from '@/shared/ui/molecules/checkbox-list';
import { GradientText } from '@/shared/ui/atoms';


export interface MultipleChoiceWidgetProps {
  className?: string;
  title: string;
  question: string;
  description: string;
  options: CheckboxOption[];
  fieldName: string;
  formType: FormType;
  minSelections: number;
  continueButtonText: string;
  dataTransformer?: (selectedValues: string[], options: CheckboxOption[]) => string[];
  navigateTo?: (selectedValues: string[]) => void;
}


export function MultipleChoiceWidget({ className, title, question, description, options, fieldName, formType, minSelections, continueButtonText, dataTransformer, navigateTo }: MultipleChoiceWidgetProps) {
  console.log('MultipleChoiceWidget navigateTo', navigateTo);
  console.log('MultipleChoiceWidget title', options);
  return (
    <CheckboxAssessment
      title={<GradientText gradient="purple-blue">{title}</GradientText>}
      question={question}
      description={description}
      options={options}
      fieldName={fieldName}
      formType={formType}
      minSelections={minSelections}
      continueButtonText={continueButtonText}
      dataTransformer={dataTransformer}
      className={className}
      navigateTo={navigateTo}
    />
  );
} 