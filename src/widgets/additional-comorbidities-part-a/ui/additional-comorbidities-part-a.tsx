'use client';

import { CheckboxAssessment } from '@/widgets/checkbox-assessment';
import { FormType } from '@/shared/types/form-types';
import { CheckboxOption } from '@/shared/ui/molecules/checkbox-list';
import { GradientText } from '@/shared/ui/atoms';

const ADDITIONAL_COMORBIDITIES_PART_A_OPTIONS = [
  { id: 'gallbladder', value: 'gallbladder', label: 'Gallbladder disease' },
  { id: 'alcohol_disorder', value: 'alcohol_disorder', label: 'Alcohol substance use disorder' },
  { id: 'seizures', value: 'seizures', label: 'Seizures' },
  { id: 'glaucoma', value: 'glaucoma', label: 'Glaucoma' },
  { id: 'gout', value: 'gout', label: 'Gout' },
  { id: 'depression', value: 'depression', label: 'Depression' },
  { id: 'none_add_a', value: 'none_add_a', label: 'None of the above' }
];

const NONE_OF_ABOVE_OLH_VALUE = 'PATIENT SELECTED NONE OF THE ABOVE - Gallbladder disease, Alcohol substance use disorder, Seizures, Glaucoma, Gout, Depression';

export interface AdditionalComorbiditiesPartAProps {
  className?: string;
}

const transformData = (selectedValues: string[], options: CheckboxOption[]): string[] => {
  if (selectedValues.includes('none_add_a')) {
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

export function AdditionalComorbiditiesPartA({ className }: AdditionalComorbiditiesPartAProps) {
  return (
    <CheckboxAssessment
      title={<GradientText gradient="purple-blue">Medical History</GradientText>}
      question="Do you have any of these conditions?"
      description="Please select all that apply. This information helps your provider create the safest treatment plan."
      options={ADDITIONAL_COMORBIDITIES_PART_A_OPTIONS}
      fieldName="q4_patient_comorbidities_white_a"
      formType={FormType.OHL_INITIAL_INTAKE}
      minSelections={1}
      continueButtonText="Continue"
      dataTransformer={transformData}
      className={className}
    />
  );
} 