'use client';

import { GradientText } from "@/shared/ui/atoms";
import { QAPageTemplate } from "@/shared/ui/templates";
import { useEffect } from "react";

export function FinalStep() {

    useEffect(() => {
        const completePatientFlow = async () => {
            const response = await fetch('/api/complete-patient-flow', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({})
            });
            const data = await response.json();
            console.log(data);
            alert('Patient flow completed');
        }
        completePatientFlow();
    }, []);

    return <QAPageTemplate
        title={<GradientText gradient="purple-blue">
            Final
        </GradientText>}
        question=""
    >
        <div>
            <p>
                Final Step
            </p>
        </div>
    </QAPageTemplate>;
}