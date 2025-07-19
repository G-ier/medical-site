'use client';

import { FormType } from '@/shared/types/form-types';
import { GradientText } from '@/shared/ui/atoms';
import { CheckboxAssessment } from '@/widgets/checkbox-assessment';

export interface EthnicitySelectionProps {
  className?: string;
}

export function EthnicitySelection({ className }: EthnicitySelectionProps) {
  return (
    <CheckboxAssessment
      title={<GradientText gradient="purple-blue">
        Rejuve
      </GradientText>}
      question="How would you describe your ethnicity?"
      description="We ask this to better tailor treatment options to you. Please select all that apply."
      options={[
        { id: '1', label: 'Asian', value: 'asian' },
        { id: '2', label: 'South Asian', value: 'south-asian' },
        { id: '3', label: 'Black or African American', value: 'black-or-african-american' },
        { id: '4', label: 'Hispanic or Latino', value: 'hispanic-or-latino' },
        { id: '5', label: 'Native American', value: 'native-american' },
        { id: '6', label: 'Middle Eastern', value: 'middle-eastern' },
        { id: '7', label: 'Pacific Islander', value: 'pacific-islander' },
        { id: '8', label: 'White', value: 'white' },
        { id: '9', label: 'Native Hawaiian or Other Pacific Islander', value: 'native-hawaiian-or-other-pacific-islander' },
        { id: '10', label: 'American Indian or Alaska Native', value: 'american-indian-or-alaska-native' },
        { id: '11', label: 'Other', value: 'other' },
        { id: '12', label: 'I prefer not to say', value: 'prefer-not-to-say' },
      ]}
      fieldName="ethnicity"
      formType={FormType.OHL_INITIAL_INTAKE}
      className={className}
    />
  );
} 