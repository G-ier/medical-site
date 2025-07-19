'use client';

import { CheckboxAssessment } from '@/widgets/checkbox-assessment';
import { FormType } from '@/shared/types/form-types';
import { CheckboxOption } from '@/shared/ui/molecules/checkbox-list';
import { GradientText } from '@/shared/ui/atoms';

const DISQUALIFYING_CONDITIONS_PART_A_OPTIONS = [
  { id: 'cancer', value: 'cancer', label: 'Cancer (active diagnosis or treatment)' },
  { id: 'pregnant', value: 'pregnant', label: 'Currently or possibly pregnant, or actively trying to become pregnant' },
  { id: 'breastfeeding', value: 'breastfeeding', label: 'Breastfeeding or bottle-feeding with breastmilk' },
  { id: 'kidney_disease', value: 'kidney_disease', label: 'End-stage kidney disease (on or about to be on dialysis)' },
  { id: 'liver_disease', value: 'liver_disease', label: 'End-stage liver disease (cirrhosis)' },
  { id: 'opiates', value: 'opiates', label: 'Taking or plan to consume opiate based drugs within the last 3 months' },
  { id: 'none_dq_a', value: 'none_dq_a', label: 'None of the above' }
];

const NONE_OF_ABOVE_OLH_VALUE = 'PATIENT SELECTED NONE OF THE ABOVE FOR THESE -  Cancer (active diagnosis or treatment) Currently or possibly pregnant, or actively trying to become pregnant Breastfeeding or bottle-feeding with breastmilk, End-stage kidney disease (on or about to be on dialysis), End-stage liver disease (cirrhosis), Taking or plan to consume opiate based drugs within the last 3 months';

export interface DisqualifyingConditionsPartAProps {
  className?: string;
}

const transformData = (selectedValues: string[], options: CheckboxOption[]): string[] => {
  if (selectedValues.includes('none_dq_a')) {
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

export function DisqualifyingConditionsPartA({ className }: DisqualifyingConditionsPartAProps) {
  return (
    <CheckboxAssessment
      title={<GradientText gradient="purple-blue">Medical History</GradientText>}
      question="Do you have any of these serious medical conditions?"
      description="These conditions may affect your eligibility for certain treatments. Please be honest for your safety."
      options={DISQUALIFYING_CONDITIONS_PART_A_OPTIONS}
      fieldName="q1_patient_dq_information_part_a"
      formType={FormType.OHL_INITIAL_INTAKE}
      minSelections={1}
      continueButtonText="Continue"
      dataTransformer={transformData}
      className={className}
    />
  );
} 