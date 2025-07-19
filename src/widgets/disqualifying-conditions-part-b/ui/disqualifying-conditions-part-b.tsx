'use client';

import { CheckboxAssessment } from '@/widgets/checkbox-assessment';
import { FormType } from '@/shared/types/form-types';
import { CheckboxOption } from '@/shared/ui/molecules/checkbox-list';
import { GradientText } from '@/shared/ui/atoms';

const DISQUALIFYING_CONDITIONS_PART_B_OPTIONS = [
  { id: 'diabetes_insulin', value: 'diabetes_insulin', label: 'Type 2 diabetes (on insulin)' },
  { id: 'diabetes_type1', value: 'diabetes_type1', label: 'Type 1 diabetes' },
  { id: 'diabetic_retinopathy', value: 'diabetic_retinopathy', label: 'Diabetic retinopathy (eye condition related to diabetes)' },
  { id: 'pancreatitis', value: 'pancreatitis', label: 'History of or current pancreatitis' },
  { id: 'suicidal_thoughts', value: 'suicidal_thoughts', label: 'Current suicidal thoughts and/or prior suicidal attempt' },
  { id: 'eating_disorder', value: 'eating_disorder', label: 'Current or prior eating disorder (anorexia/bulimia)' },
  { id: 'none_dq_b', value: 'none_dq_b', label: 'None of the above' }
];

const NONE_OF_ABOVE_OLH_VALUE = 'PATIENT SELECTED NONE OF THE ABOVE - Type 2 diabetes (on insulin), Type 1 diabetes, Diabetic retinopathy (eye condition related to diabetes), History of or current pancreatitis, Current suicidal thoughts and/or prior suicidal attempt, Current or prior eating disorder (anorexia/bulimia)';

export interface DisqualifyingConditionsPartBProps {
  className?: string;
}

const transformData = (selectedValues: string[], options: CheckboxOption[]): string[] => {
  if (selectedValues.includes('none_dq_b')) {
    // If "None of the above" is selected, send the specific OLH format
    return [NONE_OF_ABOVE_OLH_VALUE];
  } else {
    // Send the actual selected labels
    return selectedValues.map(value => {
      const option = options.find(opt => opt.value === value);
      return option?.label || value;
    });
  }
};

export function DisqualifyingConditionsPartB({ className }: DisqualifyingConditionsPartBProps) {
  return (
    <CheckboxAssessment
      title={<GradientText gradient="purple-blue">Medical History</GradientText>}
      question="Do you have any of these additional serious conditions?"
      description="These conditions may also affect your treatment eligibility. Your honesty helps ensure your safety."
      options={DISQUALIFYING_CONDITIONS_PART_B_OPTIONS}
      fieldName="q1_patient_dq_information_part_b"
      formType={FormType.OHL_INITIAL_INTAKE}
      minSelections={1}
      continueButtonText="Continue"
      dataTransformer={transformData}
      className={className}
    />
  );
} 