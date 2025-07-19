import { CheckboxAssessment } from '@/widgets/checkbox-assessment';
import { CheckboxOption } from '@/shared/ui/molecules/checkbox-list';
import { GradientText } from '@/shared/ui/atoms/gradient-text';
import { FormType } from '@/shared/types/form-types';

export interface MedicalProfileProps {
  className?: string;
}

const MEDICAL_PROFILE_OPTIONS: CheckboxOption[] = [
  {
    id: 'persistent-worry',
    label: 'Persistent or excessive worry',
    value: 'persistent-worry'
  },
  {
    id: 'depressed-mood',
    label: 'Depressed mood or loss of interest in activities',
    value: 'depressed-mood'
  },
  {
    id: 'panic-attacks',
    label: 'Panic attacks',
    value: 'panic-attacks'
  },
  {
    id: 'insomnia',
    label: 'Insomnia',
    value: 'insomnia'
  },
  {
    id: 'stress-burnout',
    label: 'Stress or burnout',
    value: 'stress-burnout'
  },
  {
    id: 'other',
    label: 'Other',
    value: 'other'
  },
  {
    id: 'not-sure',
    label: "I'm not sure",
    value: 'not-sure'
  }
];

export function MedicalProfile({ className }: MedicalProfileProps) {
  return (
    <CheckboxAssessment
      title={
        <GradientText gradient="pink-yellow">
          Medical Profile
        </GradientText>
      }
      question="Which of the following best describes why you are seeking service today?"
      description="If you're unsure, pick the ones that feel closest to what you're experiencing."
      options={MEDICAL_PROFILE_OPTIONS}
      fieldName="medicalProfile"
      className={className}
      continueButtonText="Continue"
      minSelections={1}
      showProgressBar={true}
      progress={50}
      totalSegments={2}
      currentSegment={1}
      formType={FormType.OHL_INITIAL_INTAKE}
    />
  );
} 