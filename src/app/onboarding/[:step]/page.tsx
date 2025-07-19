"use client";

import React, { useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import { getStepById } from "@/entities/onboarding/model/config";
import { useStepLogic } from "@/features/onboarding-flow/hooks/use-step-logic";
import { useEligibilityCheck } from "@/features/onboarding-flow/hooks/use-eligibility-check";
import { useFormSubmission } from "@/features/onboarding-flow/hooks/use-form-submission";
import { renderStep } from "@/features/onboarding-flow/utils/step-renderer";
import { LoadingSpinner } from "@/shared/ui/atoms/loading-spinner/loading-spinner";

export default function OnboardingStepPage() {
  const params = useParams();
  const stepLogic = useStepLogic();
  const { checkEligibility, loading: eligibilityLoading } = useEligibilityCheck();
  const { submitForm, loading: submissionLoading } = useFormSubmission();
  const eligibilityTriggered = useRef(false);
  const submissionTriggered = useRef(false);

  const stepId = params[":step"] as string;
  const step = getStepById(stepId);

  // Reset refs when step changes
  useEffect(() => {
    eligibilityTriggered.current = false;
    submissionTriggered.current = false;
  }, [stepId]);

  // Handle special async steps with useEffect
  useEffect(() => {
    if (step?.id === "check-eligibility" && !eligibilityTriggered.current) {
      eligibilityTriggered.current = true;
      checkEligibility();
    }
  }, [step?.id, checkEligibility]);

  useEffect(() => {
    if (step?.id === "submit-form" && !submissionTriggered.current) {
      submissionTriggered.current = true;
      submitForm();
    }
  }, [step?.id, submitForm]);

  // Show loading if step is not found yet (during initial load)
  if (!step) {
    return <LoadingSpinner message="Loading step..." />;
  }

  // Show loading for async operations or special async steps
  if (
    eligibilityLoading.status === "pending" || 
    submissionLoading.status === "pending" ||
    step.id === "check-eligibility" ||
    step.id === "submit-form"
  ) {
    const message = eligibilityLoading.status === "pending" 
      ? eligibilityLoading.message 
      : submissionLoading.status === "pending"
      ? submissionLoading.message
      : step.id === "check-eligibility"
      ? "Checking eligibility..."
      : "Submitting form...";
      
    return <LoadingSpinner message={message} />;
  }

  // Show error state if needed
  if (eligibilityLoading.status === "error" || submissionLoading.status === "error") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600">
            {eligibilityLoading.status === "error" ? eligibilityLoading.message : submissionLoading.message}
          </p>
        </div>
      </div>
    );
  }

  // Render the step using the extracted renderer
  const renderedStep = renderStep({ step, stepLogic });
  
  if (renderedStep) {
    return <>{renderedStep}</>;
  }

  return <div>Not found</div>;
}
