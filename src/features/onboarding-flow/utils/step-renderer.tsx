import React from "react";
import { NameIntroduction } from "@/widgets/name-introduction";
import { MultipleChoiceWidget } from "@/widgets/multiple-choice/ui/multiple-choice-widget";
import { SingleChoiceWidget } from "@/widgets/single-choice/ui/single-choice-widget";
import { InputAnswerWidget } from "@/widgets/input-answer/ui/input-answer-widget";
import { AlertWidget } from "@/widgets/alert/ui/alert-widget";
import { DocumentUploadWidget } from "@/widgets/document-upload/ui/document-upload-widget";
import { MoodAssessment } from "@/widgets/mood-assessment";
import { LocationVerificationWidget } from "@/widgets/location-verification/ui/location-verification-widget";
import { LocationSuccessAge } from "@/widgets/location-success-age";
import { PersonalGreeting } from "@/widgets/personal-greeting";
import { MedicalHistoryIntroduction } from "@/widgets/medical-history-introduction";
import { HeightQuestion } from "@/widgets/height-question";
import { LastNameIntroduction } from "@/widgets/last-name-introduction";
import { NextStepsPreview } from "@/widgets/next-steps-preview";
import { MedicationEligibilityPricingWidget } from "@/widgets/medication-eligibility-pricing/ui/medication-eligibility-pricing-widget";
import { ShippingDetailsWidget } from "@/widgets/shipping-form/ui/shipping-details-widget";
import { SexAssignment } from "@/widgets/sex-assignment/ui/sex-assignment";
import { BMIDisplay } from "@/widgets/bmi-display/ui/bmi-display";
import { PaymentDetailsWidget } from "@/widgets/payment-details/ui/payment-details";
import { GoalWeightQuestion } from "@/widgets/goal-weight-question/ui/goal-weight-question";
import { TreatmentPreviewHeader } from "@/widgets/treatment-preview-header/ui/treatment-preview-header";

import { OnboardingStep } from "@/entities/onboarding/model/types";

interface StepRendererProps {
  step: OnboardingStep;
  stepLogic: any;
}

export const renderStep = ({ step, stepLogic }: StepRendererProps): React.ReactNode => {

  // Direct component mappings
  const directComponents: Record<string, React.ReactNode> = {
    "mood-assessment": <MoodAssessment />,
    "name-introduction": <NameIntroduction />,
    "last-name-introduction": <LastNameIntroduction />,
    "personal-greeting": <PersonalGreeting />,
    "location-verification": <LocationVerificationWidget />,
    "location-success-age": <LocationSuccessAge />,
    "sex-assignment": <SexAssignment />,
    "medical-history-introduction": <MedicalHistoryIntroduction />,
    "height-question": <HeightQuestion />,
    "goal-weight-question": <GoalWeightQuestion />,
    "next-steps-preview": <NextStepsPreview />,
    "bmi-display": <BMIDisplay />,
    "medication-eligibility-pricing": <MedicationEligibilityPricingWidget />,
    "shipping-details": <ShippingDetailsWidget />,
    "payment-details": <PaymentDetailsWidget />,
    "treatment-preview-header": <TreatmentPreviewHeader />,
  };

  // Check for direct component mapping first
  if (directComponents[step.id]) {
    return directComponents[step.id];
  }

  // Handle special cases with custom logic
  if (step.id === "medical-history-questions") {
    return (
      <MultipleChoiceWidget
        title={step.title}
        question={step.question || ""}
        description={step.description || ""}
        formType={step.formType}
        minSelections={step.minSelections}
        continueButtonText="Continue"
        options={step.options || []}
        fieldName={step.fieldName || ""}
        navigateTo={stepLogic.handleMedicalHistoryQuestions}
      />
    );
  }

  if (step.id === "medical-history-questions-4") {
    return (
      <SingleChoiceWidget
        title={step.title}
        question={step.question || ""}
        options={step.options || []}
        fieldName={step.fieldName || ""}
        formType={step.formType}
        navigateTo={({ value }: { value: string }) => stepLogic.handleMedicalHistoryQuestions4(value)}
      />
    );
  }

  if (step.id === "medical-history-questions-4a") {
    return (
      <InputAnswerWidget
        title={step.title}
        question={step.question || ""}
        fieldName={step.fieldName || ""}
        formType={step.formType}
        as="textarea"
        canSkip={!!step.conditions?.canSkip}
        navigateTo={stepLogic.handleMedicalHistoryQuestions4a}
      />
    );
  }

  if (step.id === "medical-history-questions-4c-i") {
    return (
      <SingleChoiceWidget
        title={step.title}
        question={step.question || ""}
        options={step.options || []}
        fieldName={step.fieldName || ""}
        formType={step.formType}
        navigateTo={({ value }: { value: string }) => stepLogic.handleMedicalHistoryQuestions4cI(value)}
      />
    );
  }

  if (step.id === "medical-history-questions-4d-i") {
    return (
      <SingleChoiceWidget
        title={step.title}
        question={step.question || ""}
        options={step.options || []}
        fieldName={step.fieldName || ""}
        formType={step.formType}
        navigateTo={({ value }: { value: string }) => stepLogic.handleMedicalHistoryQuestions4dI(value)}
      />
    );
  }

  if (step.id === "medical-history-questions-4d") {
    return (
      <SingleChoiceWidget
        title={step.title}
        question={step.question || ""}
        options={step.options || []}
        fieldName={step.fieldName || ""}
        formType={step.formType}
        navigateTo={({ value }: { value: string }) => stepLogic.handleMedicalHistoryQuestions4d(value)}
      />
    );
  }

  if (step.id === "medical-history-questions-4e") {
    return (
      <SingleChoiceWidget
        title={step.title}
        question={step.question || ""}
        options={step.options || []}
        fieldName={step.fieldName || ""}
        formType={step.formType}
        navigateTo={({ value }: { value: string }) => stepLogic.handleMedicalHistoryQuestions4e(value)}
      />
    );
  }

  if (step.id === "medical-history-questions-6") {
    return (
      <SingleChoiceWidget
        title={step.title}
        question={step.question || ""}
        options={step.options || []}
        fieldName={step.fieldName || ""}
        formType={step.formType}
        navigateTo={({ value }: { value: string }) => stepLogic.handleMedicalHistoryQuestions6(value)}
      />
    );
  }

  if (step.id === "medical-history-questions-7") {
    return (
      <MultipleChoiceWidget
        title={step.title}
        question={step.question || ""}
        description={step.description || ""}
        options={step.options || []}
        fieldName={step.fieldName || ""}
        formType={step.formType}
        minSelections={step.minSelections}
        continueButtonText="Continue"
        navigateTo={stepLogic.handleMedicalHistoryQuestions7}
      />
    );
  }

  // Generic type-based rendering
  if (step.type === "multiple-choice") {
    return (
      <MultipleChoiceWidget
        title={step.title}
        question={step.question || ""}
        description={step.description || ""}
        options={step.options || []}
        fieldName={step.fieldName || ""}
        formType={step.formType}
        minSelections={step.minSelections}
        continueButtonText="Continue"
      />
    );
  }

  if (step.type === "single-choice") {
    return (
      <SingleChoiceWidget
        title={step.title}
        question={step.question || ""}
        options={step.options || []}
        fieldName={step.fieldName || ""}
        formType={step.formType}
      />
    );
  }

  if (step.type === "input") {
    return (
      <InputAnswerWidget
        title={step.title}
        question={step.question || ""}
        fieldName={step.fieldName || ""}
        formType={step.formType}
        as="input"
        canSkip={!!step.conditions?.canSkip}
      />
    );
  }

  if (step.type === "textarea") {
    return (
      <InputAnswerWidget
        title={step.title}
        question={step.question || ""}
        fieldName={step.fieldName || ""}
        formType={step.formType}
        as="textarea"
        canSkip={!!step.conditions?.canSkip}
      />
    );
  }

  if (step.type === "alert") {
    return (
      <AlertWidget title={step.title || ""} message={step.description || ""} />
    );
  }

  if (step.type === "document-upload") {
    return (
      <DocumentUploadWidget title={step.title} question={step.question || ""} />
    );
  }

  return null;
}; 