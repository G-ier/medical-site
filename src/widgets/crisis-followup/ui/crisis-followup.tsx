'use client';

import { FormType } from "@/shared/types/form-types";
import { GradientText } from "@/shared/ui/atoms";
import { QuestionAssessment } from "@/widgets/question-assessment";

export interface CrisisFollowupProps {
  className?: string;
}

export function CrisisFollowup({ className }: CrisisFollowupProps) {
    return (
        <QuestionAssessment
            title={<GradientText gradient="purple-blue">
                Medical Profile
            </GradientText>}
            question="Would you describe these thoughts recently as:"
            options={[
                { id: '1', label: 'A vague or general thought or feeling (I have had the occasional thought about death, but have no real desire or plan to hurt myself)', value: 'vague-general' },
                { id: '2', label: 'Something I have some intent to carry out (I have started thinking more actively about harming myself)', value: 'intent-to-carry-out' },
            ]}
            fieldName="crisis-followup"
            formType={FormType.OHL_INITIAL_INTAKE}
            className={className}
        />
    )
}