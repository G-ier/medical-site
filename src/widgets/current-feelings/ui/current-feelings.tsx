'use client';

import { GradientText } from "@/shared/ui/atoms";
import { CheckboxAssessment } from "@/widgets/checkbox-assessment";
import { FormType } from "@/shared/types/form-types";

export interface CurrentFeelingsProps {
    className?: string;
}

export function CurrentFeelings({ className }: CurrentFeelingsProps) {
    return (
        <CheckboxAssessment
            title={<GradientText gradient="purple-blue">
                Medical Profile
            </GradientText>}
            question="How have you been feeling for the past few weeks?"
            description="Select all that apply."
            options={[
                { id: '1', label: 'Sad', value: 'sad' },
                { id: '2', label: 'Emotional', value: 'emotional' },
                { id: '3', label: 'Stressed', value: 'stressed' },
                { id: '4', label: 'Afraid', value: 'afraid' },
                { id: '5', label: 'Worried', value: 'worried' },
                { id: '6', label: 'Apathetic', value: 'apathetic' },
                { id: '7', label: 'Unmotivated', value: 'unmotivated' },
                { id: '8', label: 'Tired', value: 'tired' },
                { id: '9', label: 'Hypervigilant', value: 'hypervigilant' },
            ]}
            fieldName="current-feelings"
            className={className}
            formType={FormType.OHL_INITIAL_INTAKE}
        />
    )
}