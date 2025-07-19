import { useState, useCallback } from "react";
import { useOnboarding } from "./use-onboarding";
import { useRouter } from "next/navigation";

interface LoadingState {
  status: "idle" | "pending" | "error";
  message: string;
}

export const useEligibilityCheck = () => {
  const [loading, setLoading] = useState<LoadingState>({
    status: "idle",
    message: "Loading...",
  });
  const { goTo } = useOnboarding();
  const router = useRouter();

  const checkEligibility = useCallback(async () => {
    try {
      setLoading({ status: "pending", message: "Checking eligibility..." });
      const response = await fetch("/api/check-eligibility");
      
      if(response.status === 401) {
        router.push("/auth/login");
        return;
      }
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.isEligible) {
        await goTo("submit-form");
      } else {
        router.push("/refused");
      }
      
      setLoading({ status: "idle", message: "Loading..." });
    } catch (error) {
      console.error("Error checking eligibility:", error);
      setLoading({ status: "error", message: "Error checking eligibility" });
      router.push("/error?message=Error checking eligibility");
    }
  }, [goTo, router]);

  return { checkEligibility, loading };
}; 