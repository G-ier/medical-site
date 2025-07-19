'use client';

import { GradientText } from "@/shared/ui/atoms";
import { CheckboxAssessment } from "@/widgets/checkbox-assessment";
import { FormType } from "@/shared/types/form-types";
export interface EatingDisorderSymptomsProps {
  className?: string;
}

export function EatingDisorderSymptoms({ className }: EatingDisorderSymptomsProps) {
    return (
        <CheckboxAssessment
            title={<GradientText gradient="purple-blue">
                Rejevu
            </GradientText>}
            question="Have you ever experienced any of these symptoms?"
            description="This helps your provider better understand your current health so they can recommend the best treatment for you."
            options={[
                { id: '1', label: 'Causing yourself to vomit in order to lose weight.', value: 'vomiting-to-lose-weight' },
                { id: '2', label: 'Frequently eating very large amounts of food and feeling like you can not stop eating.', value: 'binge-eating' },
                { id: '3', label: 'Severely limiting the amount of food you eat due to the fear of gaining weight.', value: 'severely-limiting-food' },
                { id: '4', label: 'No i haven\'t experienced any of these', value: 'no-symptoms' },
            ]}
            fieldName="eating-disorder-symptoms"
            formType={FormType.OHL_INITIAL_INTAKE}
            className={className}
        />
    )
}