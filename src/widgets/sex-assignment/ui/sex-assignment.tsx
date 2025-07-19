'use client';

import { FormType } from '@/shared/types/form-types';
import { QuestionAssessment } from '@/widgets/question-assessment';
import { GradientText } from '@/shared/ui/atoms';

export interface SexAssignmentProps {
  className?: string;
}

export function SexAssignment({ className }: SexAssignmentProps) {
  return (
    <QuestionAssessment
      title={<GradientText gradient="purple-blue">Getting started</GradientText>}
      question="What was your sex assigned at birth?"
      options={[
        { id: '1', label: 'Male', value: 'male' },
        { id: '2', label: 'Female', value: 'female' },
      ]}
      fieldName="gender"
      formType={FormType.UPDATE_PATIENT}
      className={className}
    />
  );
} 