'use client';

import { FormType } from '@/shared/types/form-types';
import { QuestionAssessment } from '@/widgets/question-assessment';
import { GradientText } from '@/shared/ui/atoms/gradient-text';

export interface SingleChoiceWidgetProps {
    className?: string;
    title?: string;
    question: string;
    options: { id: string; label: string; value: string }[];
    fieldName: string;
    formType: FormType;
    navigateTo?: ({value}: {value: string}) => Promise<void>;
}

export function SingleChoiceWidget({ title, className, question, options, fieldName, navigateTo, formType }: SingleChoiceWidgetProps) {
    return (
        <QuestionAssessment
            title={<GradientText gradient='purple-blue'>{title}</GradientText>}
            question={question}
            options={options}
            fieldName={fieldName}
            formType={formType}
            className={className}
            navigateTo={navigateTo}
        />
    );
} 