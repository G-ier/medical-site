'use client';

import { CheckboxAssessment } from '@/widgets/checkbox-assessment';
import { FormType } from '@/shared/types/form-types';
import { CheckboxOption } from '@/shared/ui/molecules/checkbox-list';
import { GradientText } from '@/shared/ui/atoms';

const ADDITIONAL_COMORBIDITIES_PART_B_OPTIONS = [
  { id: 'head_injury', value: 'head_injury', label: 'Head injury' },
  { id: 'brain_tumor', value: 'brain_tumor', label: 'Tumor/infection in brain/spinal cord' },
  { id: 'low_sodium', value: 'low_sodium', label: 'Low sodium' },
  { id: 'tachycardia', value: 'tachycardia', label: 'Elevated resting heart rate (tachycardia)' },
  { id: 'hospitalization', value: 'hospitalization', label: 'Hospitalization within the last 1 year' },
  { id: 'hiv', value: 'hiv', label: 'Human immunodeficiency virus (HIV)' },
  { id: 'none_add_b', value: 'none_add_b', label: 'None of the above' }
];

const NONE_OF_ABOVE_OLH_VALUE = 'PATIENT SELECTED NONE OF THE ABOVE - Head injury, Tumor/infection in brain/spinal cord, Low sodium, Elevated resting heart rate (tachycardia), Hospitalization within the last 1 year, Human immunodeficiency virus (HIV)';

export interface AdditionalComorbiditiesPartBProps {
  className?: string;
}

const transformData = (selectedValues: string[], options: CheckboxOption[]): string[] => {
  if (selectedValues.includes('none_add_b')) {
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

export function AdditionalComorbiditiesPartB({ className }: AdditionalComorbiditiesPartBProps) {
  return (
    <CheckboxAssessment
      title={<GradientText gradient="purple-blue">Medical History</GradientText>}
      question="Do you have any of these additional conditions?"
      description="Please select all that apply. This completes your comprehensive medical history assessment."
      options={ADDITIONAL_COMORBIDITIES_PART_B_OPTIONS}
      fieldName="q4_patient_comorbidities_white_part_b"
      formType={FormType.OHL_INITIAL_INTAKE}
      minSelections={1}
      continueButtonText="Continue"
      dataTransformer={transformData}
      className={className}
    />
  );
} 