'use client';

import { CheckboxAssessment } from '@/widgets/checkbox-assessment';
import { FormType } from '@/shared/types/form-types';
import { CheckboxOption } from '@/shared/ui/molecules/checkbox-list';
import { GradientText } from '@/shared/ui/atoms';

const COMORBIDITIES_PART_A_OPTIONS = [
  { id: 'gerd', value: 'gerd', label: 'Acid reflux/gastroesophageal reflux disease (GERD)' },
  { id: 'asthma', value: 'asthma', label: 'Asthma reactive airway disease' },
  { id: 'incontinence', value: 'incontinence', label: 'Urinary stress incontinence' },
  { id: 'pcos', value: 'pcos', label: 'Polycystic ovarian syndrome (PCOS)' },
  { id: 'low_testosterone', value: 'low_testosterone', label: 'Clinically proven low testosterone (male hypogonadism)' },
  { id: 'osteoarthritis', value: 'osteoarthritis', label: 'Osteoarthritis' },
  { id: 'none', value: 'none', label: 'None of the above' }
];

const NONE_OF_ABOVE_OLH_VALUE = 'PATIENT SELECTED NONE OF THE ABOVE - Acid reflux/gastroesophageal reflux disease (GERD), Asthma reactive airway disease, Urinary stress incontinence, Polycystic ovarian syndrome (PCOS), Clinically proven low testosterone (male hypogonadism), Osteoarthritis';

export interface DetailedComorbiditiesPartAProps {
  className?: string;
}

const transformData = (selectedValues: string[], options: CheckboxOption[]): string[] => {
  if (selectedValues.includes('none')) {
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

export function DetailedComorbiditiesPartA({ className }: DetailedComorbiditiesPartAProps) {
  return (
    <CheckboxAssessment
      title={<GradientText gradient="purple-blue">Medical History</GradientText>}
      question="Do you have any of these medical conditions?"
      description="Please select all that apply. This helps your provider understand your complete health profile."
      options={COMORBIDITIES_PART_A_OPTIONS}
      fieldName="q2_patient_comorbidities_part_a"
      formType={FormType.OHL_INITIAL_INTAKE}
      minSelections={1}
      continueButtonText="Continue"
      dataTransformer={transformData}
      className={className}
    />
  );
} 