'use client';

import { FormType } from "@/shared/types/form-types";
import { GradientText } from "@/shared/ui/atoms";
import { QuestionAssessment } from "@/widgets/question-assessment";

export interface EpisodesHistoryProps {
  className?: string;
}

export function EpisodesHistory({ className }: EpisodesHistoryProps) {
    return (
        <QuestionAssessment
            title={<GradientText gradient="purple-blue">
                Medical Profile
            </GradientText>}
            question="How many total episodes of anxiety or depression - including this one - do you believe you have experienced in your lifetime?"
            options={[
                { id: '1', label: '1', value: '1' },
                { id: '2', label: '2', value: '2' },
                { id: '3', label: '3', value: '3' },
                { id: '4', label: 'More than 3', value: 'more-than-3' },
                { id: '5', label: "I don't experience episodes of anxiety or depression. My symptoms are chronic and persistent.", value: 'chronic-persistent' },
            ]}
            fieldName="episodes-history"
            formType={FormType.OHL_INITIAL_INTAKE}
            className={className}
        />
    )
}