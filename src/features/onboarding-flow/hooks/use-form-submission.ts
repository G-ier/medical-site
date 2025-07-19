import { useState, useCallback, useRef } from "react";
import { useOnboarding } from "./use-onboarding";
import { useRouter } from "next/navigation";

interface LoadingState {
  status: "idle" | "pending" | "error";
  message: string;
}

export const useFormSubmission = () => {
  const [loading, setLoading] = useState<LoadingState>({
    status: "idle",
    message: "Loading...",
  });
  const { goTo } = useOnboarding();
  const router = useRouter();
  const submissionInProgress = useRef(false);

  const submitForm = useCallback(async () => {
    // Prevent multiple submissions
    if (submissionInProgress.current) {
      console.log("🔄 Form submission already in progress, skipping...");
      return;
    }

    try {
      submissionInProgress.current = true;
      setLoading({ status: "pending", message: "Submitting form..." });
      
      const response = await fetch("/api/complete-patient-flow", {
        method: "POST"
      });

      if(response.status === 401) {
        router.push("/auth/login");
        return;
      }

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.success) {
        await goTo("medication-eligibility-pricing");
      } else {
        throw new Error("Form submission failed");
      }
      
      setLoading({ status: "idle", message: "Loading..." });
    } catch (error) {
      console.error("Error submitting form:", error);
      setLoading({ status: "error", message: "Error submitting form" });
      router.push("/error?message=Error submitting form");
    } finally {
      submissionInProgress.current = false;
    }
  }, [goTo, router]);

  return { submitForm, loading };
}; 