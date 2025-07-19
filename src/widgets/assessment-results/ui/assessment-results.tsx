import { ResultsDisplay } from '@/widgets/results-display';
import { GradientText } from '@/shared/ui/atoms/gradient-text';

export interface AssessmentResultsProps {
  className?: string;
}

const ASSESSMENT_RESULTS = [
  {
    title: 'Moderate Depression',
    score: '12/24',
    titleColor: 'text-pink-300',
    scoreColor: 'text-pink-300',
    symptoms: [
      'Moving slowly',
      'Feeling down',
      'Sleeping too much'
    ],
    symptomsTitle: 'Depression can feel like:'
  },
  {
    title: 'Moderate Anxiety',
    score: '14/24',
    titleColor: 'text-pink-300',
    scoreColor: 'text-pink-300',
    symptoms: [
      'Feeling irritable',
      'Feeling anxious/on edge',
      "Can't help worrying"
    ],
    symptomsTitle: 'Anxiety can feel like:'
  }
];

export function AssessmentResults({ className }: AssessmentResultsProps) {
  return (
    <ResultsDisplay
      title={
        <GradientText gradient="pink-yellow">
          Anxiety & Depression Symptoms
        </GradientText>
      }
      subtitle="ilda's Results"
      description="Now that you've set the baseline, you're one step closer to getting support to help you feel your best."
      results={ASSESSMENT_RESULTS}
      className={className}
      continueButtonText="Continue"
    />
  );
} 