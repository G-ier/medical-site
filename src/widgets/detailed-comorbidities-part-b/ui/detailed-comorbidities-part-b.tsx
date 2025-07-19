'use client';

import { CheckboxAssessment } from '@/widgets/checkbox-assessment';
import { FormType } from '@/shared/types/form-types';
import { CheckboxOption } from '@/shared/ui/molecules/checkbox-list';
import { GradientText } from '@/shared/ui/atoms';

const COMORBIDITIES_PART_B_OPTIONS = [
  { id: 'gerd_b', value: 'gerd_b', label: 'Acid reflux/gastroesophageal reflux disease (GERD)' },
  { id: 'asthma_b', value: 'asthma_b', label: 'Asthma reactive airway disease' },
  { id: 'incontinence_b', value: 'incontinence_b', label: 'Urinary stress incontinence' },
  { id: 'pcos_b', value: 'pcos_b', label: 'Polycystic ovarian syndrome (PCOS)' },
  { id: 'low_testosterone_b', value: 'low_testosterone_b', label: 'Clinically proven low testosterone (male hypogonadism)' },
  { id: 'osteoarthritis_b', value: 'osteoarthritis_b', label: 'Osteoarthritis' },
  { id: 'none_b', value: 'none_b', label: 'None of the above' }
];

const NONE_OF_ABOVE_OLH_VALUE = 'PATIENT SELECTED NONE OF THE ABOVE - Acid reflux/gastroesophageal reflux disease (GERD), Asthma reactive airway disease, Urinary stress incontinence, Polycystic ovarian syndrome (PCOS), Clinically proven low testosterone (male hypogonadism), Osteoarthritis';

export interface DetailedComorbiditiesPartBProps {
  className?: string;
}

const transformData = (selectedValues: string[], options: CheckboxOption[]): string[] => {
  if (selectedValues.includes('none_b')) {
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

export function DetailedComorbiditiesPartB({ className }: DetailedComorbiditiesPartBProps) {
  return (
    <CheckboxAssessment
      title={<GradientText gradient="purple-blue">Medical History</GradientText>}
      question="Do you have any of these additional medical conditions?"
      description="Please select all that apply. This is a continuation of your medical history assessment."
      options={COMORBIDITIES_PART_B_OPTIONS}
      fieldName="q2_patient_comorbidities_part_b"
      formType={FormType.OHL_INITIAL_INTAKE}
      minSelections={1}
      continueButtonText="Continue"
      dataTransformer={transformData}
      className={className}
    />
  );
} 