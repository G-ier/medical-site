import { QuestionAssessment } from '@/widgets/question-assessment';
import { QuestionOption } from '@/shared/ui/molecules/question-list';
import { GradientText } from '@/shared/ui/atoms/gradient-text';
import { FormType } from '@/shared/types/form-types';

export interface AnxietyAssessmentProps {
  className?: string;
}

const ANXIETY_OPTIONS: QuestionOption[] = [
  {
    id: 'not-at-all',
    label: 'Not at all',
    value: 'not-at-all'
  },
  {
    id: 'several-days',
    label: 'Several days',
    value: 'several-days'
  },
  {
    id: 'more-than-half',
    label: 'More than half the days',
    value: 'more-than-half'
  },
  {
    id: 'nearly-every-day',
    label: 'Nearly every day',
    value: 'nearly-every-day'
  }
];

export function AnxietyAssessment({ className }: AnxietyAssessmentProps) {
  return (
    <QuestionAssessment
      title={
        <GradientText gradient="pink-yellow">
          Anxiety & Depression Symptoms
        </GradientText>
      }
      question="Over the last 2 weeks, how often have you been bothered by feeling nervous, anxious, or on edge?"
      options={ANXIETY_OPTIONS}
      fieldName="anxietyLevel"
      className={className}
      autoNavigate={true}
      navigationDelay={500}
      formType={FormType.OHL_INITIAL_INTAKE}
    />
  );
} 