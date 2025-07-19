"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter, useParams } from "next/navigation";
import {
  ONBOARDING_STEPS,
  getStepById,
  getNextStep as getNextStepOnboarding,
} from "@/entities/onboarding/model/config";

// Repository interfaces and implementations
interface OnboardingState {
  currentStepId: string;
  completedSteps: string[];
  stepData: Record<string, any>;
  sessionId?: string;
}

interface OnboardingRepository {
  createSession(): Promise<string>;
  save(state: OnboardingState): Promise<void>;
  load(): Promise<OnboardingState | null>;
  clear(): Promise<void>;
}

// API Repository
class ApiRepository implements OnboardingRepository {
  private sessionId: string | null = null;

  async createSession(): Promise<string> {
    try {
      const response = await fetch("/api/progress/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          currentStepId: "mood-assessment",
        }),
      });

      if (!response.ok) {
        throw new Error(`Session creation failed: ${response.status}`);
      }

      const data = await response.json();
      this.sessionId = data.data.sessionToken;

      // Save to localStorage immediately
      localStorage.setItem("onboarding_session_token", this.sessionId!);

      return this.sessionId!;
    } catch (error) {
      console.error("Failed to create session:", error);
      throw error;
    }
  }

  async save(state: OnboardingState): Promise<void> {
    // Use sessionId from state, not from instance
    const sessionToken = state.sessionId || this.sessionId;

    if (!sessionToken) {
      throw new Error("No session token available for saving progress");
    }

    try {
      const response = await fetch("/api/progress", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Session-Token": sessionToken,
        },
        body: JSON.stringify({
          currentStepId: state.currentStepId,
          completedSteps: state.completedSteps,
          stepData: state.stepData,
        }),
      });

      if (!response.ok) {
        throw new Error(`Progress save failed: ${response.status}`);
      }
    } catch (error) {
      console.error("Failed to save progress:", error);
      throw error;
    }
  }

  async load(): Promise<OnboardingState | null> {
    try {
      const savedSessionToken = localStorage.getItem(
        "onboarding_session_token"
      );
      if (savedSessionToken) {
        this.sessionId = savedSessionToken;
      }

      if (!this.sessionId) {
        return null;
      }

      const response = await fetch("/api/progress", {
        method: "GET",
        headers: { "X-Session-Token": this.sessionId },
      });

      if (!response.ok) {
        if (response.status === 404) {
          return null;
        }
        throw new Error(`Progress load failed: ${response.status}`);
      }

      const data = await response.json();
      localStorage.setItem("onboarding_session_token", this.sessionId);

      return {
        currentStepId: data.data.currentStepId,
        completedSteps: data.data.completedSteps || [],
        stepData: data.data.stepData || {},
        sessionId: this.sessionId,
      };
    } catch (error) {
      console.error("Failed to load progress:", error);
      return null;
    }
  }

  async clear(): Promise<void> {
    try {
      if (this.sessionId) {
        await fetch("/api/progress/session", {
          method: "DELETE",
          headers: { "X-Session-Token": this.sessionId },
        });
      }
    } catch (error) {
      console.error("Failed to clear session:", error);
    } finally {
      this.sessionId = null;
      localStorage.removeItem("onboarding_session_token");
    }
  }
}

// Local Repository (fallback)
class LocalRepository implements OnboardingRepository {
  private readonly STORAGE_KEY = "onboarding_state";

  async createSession(): Promise<string> {
    const sessionId = `local_${Date.now()}_${Math.random()
      .toString(36)
      .substr(2, 9)}`;
    return sessionId;
  }

  async save(state: OnboardingState): Promise<void> {
    try {
      if (typeof window !== "undefined") {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(state));
      }
    } catch (error) {
      console.error("Failed to save to localStorage:", error);
    }
  }

  async load(): Promise<OnboardingState | null> {
    try {
      if (typeof window === "undefined") return null;
      const stored = localStorage.getItem(this.STORAGE_KEY);
      return stored ? JSON.parse(stored) : null;
    } catch (error) {
      console.error("Failed to load from localStorage:", error);
      return null;
    }
  }

  async clear(): Promise<void> {
    try {
      if (typeof window !== "undefined") {
        localStorage.removeItem(this.STORAGE_KEY);
      }
    } catch (error) {
      console.error("Failed to clear localStorage:", error);
    }
  }
}

// Repository factory
function createRepository(): OnboardingRepository {
  if (
    process.env.NODE_ENV === "development" &&
    process.env.NEXT_PUBLIC_USE_LOCAL_STORAGE === "true"
  ) {
    return new LocalRepository();
  }
  return new ApiRepository();
}

// Simple state for the hook
interface SimpleState {
  currentStepId: string;
  completedSteps: string[];
  stepData: Record<string, any>;
  progress: number;
  isLoading: boolean;
  sessionId?: string;
}

/**
 * Main simplified hook for onboarding functionality
 */
export function useOnboarding() {
  const router = useRouter();
  const params = useParams();
  const [repository] = useState(() => createRepository());

  const [state, setState] = useState<SimpleState>({
    currentStepId: ONBOARDING_STEPS[0]?.id || "",
    completedSteps: [],
    stepData: {},
    progress: 0,
    isLoading: true,
  });

  // Load initial state from repository
  useEffect(() => {
    let isMounted = true;

    async function initializeState() {
      try {
        console.log("🔄 Initializing onboarding state...");
        const saved = await repository.load();

        if (!isMounted) return; // Prevent state update if component unmounted

        if (saved) {
          console.log("✅ Found existing session:", saved.sessionId);
          setState((prev) => ({
            ...prev,
            currentStepId: saved.currentStepId,
            completedSteps: saved.completedSteps,
            stepData: saved.stepData,
            sessionId: saved.sessionId,
            progress: Math.round(
              (saved.completedSteps.length / ONBOARDING_STEPS.length) * 100
            ),
            isLoading: false,
          }));
        } else {
          console.log("🆕 Creating new session...");
          const sessionId = await repository.createSession();

          if (!isMounted) return; // Prevent state update if component unmounted

          console.log("✅ New session created:", sessionId);
          setState((prev) => ({
            ...prev,
            sessionId,
            isLoading: false,
          }));
        }
      } catch (error) {
        console.error("❌ Failed to initialize onboarding:", error);
        if (isMounted) {
          setState((prev) => ({ ...prev, isLoading: false }));
        }
      }
    }

    // Only initialize once
    if (state.isLoading && !state.sessionId) {
      initializeState();
    }

    return () => {
      isMounted = false;
    };
  }, [repository, state.isLoading, state.sessionId]);

  // Helper functions
  const getCurrentStep = useCallback(() => {
    return ONBOARDING_STEPS.find((step) => step.id === state.currentStepId);
  }, [state.currentStepId]);

  const getNextStep = useCallback(() => {
    // If no completed steps, return first step
    if (state.completedSteps.length === 0) {
      return ONBOARDING_STEPS[0] || null;
    }

    // Get the last completed step
    const lastCompletedStepId =
      state.completedSteps[state.completedSteps.length - 1];
    const lastCompletedStep = getStepById(lastCompletedStepId);

    if (!lastCompletedStep) return null;

    // Use conditions.nextStep from configuration
    if (lastCompletedStep.conditions?.nextStep) {
      const nextStepId =
        typeof lastCompletedStep.conditions.nextStep === "function"
          ? lastCompletedStep.conditions.nextStep(
              state.stepData[lastCompletedStepId]
            )
          : lastCompletedStep.conditions.nextStep;
      return getStepById(nextStepId);
    }

    return null;
  }, [state.completedSteps, state.stepData]);

  const getPrevStep = useCallback(() => {
    // If no completed steps, can't go back
    if (state.completedSteps.length === 0) {
      return null;
    }

    // If only one completed step, return it
    if (state.completedSteps.length === 1) {
      return getStepById(state.completedSteps[0]);
    }

    // Return second to last completed step
    const prevCompletedStepId =
      state.completedSteps[state.completedSteps.length - 2];
    return getStepById(prevCompletedStepId);
  }, [state.completedSteps]);

  // Core actions with simple API
  const save = useCallback(
    async (data?: any) => {
      const newStepData = {
        ...state.stepData,
        [state.currentStepId]: {
          ...state.stepData[state.currentStepId],
          ...data,
        },
      };

      const newState: OnboardingState = {
        currentStepId: state.currentStepId,
        completedSteps: state.completedSteps,
        stepData: newStepData,
        sessionId: state.sessionId,
      };

      try {
        await repository.save(newState);
        setState((prev) => ({ ...prev, stepData: newStepData }));
      } catch (error) {
        console.error("Failed to save step data:", error);
        setState((prev) => ({ ...prev, stepData: newStepData }));
      }
    },
    [repository, state]
  );

  const next = useCallback(async () => {
    const currentStepId = params[":step"] as string;
    const nextStep = getNextStepOnboarding(currentStepId);
    if (!nextStep) return;

    // Add current step to completedSteps if not already present
    const newCompletedSteps = [...state.completedSteps];
    if (!newCompletedSteps.includes(currentStepId)) {
      newCompletedSteps.push(currentStepId);
    }

    const newState: OnboardingState = {
      currentStepId: nextStep.id,
      completedSteps: newCompletedSteps,
      stepData: state.stepData,
      sessionId: state.sessionId,
    };

    try {
      await repository.save(newState);
      setState((prev) => ({
        ...prev,
        currentStepId: nextStep.id,
        completedSteps: newCompletedSteps,
        progress: Math.round(
          (newCompletedSteps.length / ONBOARDING_STEPS.length) * 100
        ),
      }));
      router.push(nextStep.path);
    } catch (error) {
      console.error("Failed to save progress:", error);
      setState((prev) => ({
        ...prev,
        currentStepId: nextStep.id,
        completedSteps: newCompletedSteps,
        progress: Math.round(
          (newCompletedSteps.length / ONBOARDING_STEPS.length) * 100
        ),
      }));
      router.push(nextStep.path);
    }
  }, [repository, state, router, params]);

  const markAsCompleted = useCallback(async () => {
    const newCompletedSteps = [...state.completedSteps];
    if (!newCompletedSteps.includes(state.currentStepId)) {
      newCompletedSteps.push(state.currentStepId);
    }

    const lastCompletedStepId = newCompletedSteps[newCompletedSteps.length - 1];
    const lastCompletedStep = getStepById(lastCompletedStepId);

    if (!lastCompletedStep) return;

    let nextStep = null;
    if (lastCompletedStep.conditions?.nextStep) {
      const nextStepId =
        typeof lastCompletedStep.conditions.nextStep === "function"
          ? lastCompletedStep.conditions.nextStep(
              state.stepData[lastCompletedStepId]
            )
          : lastCompletedStep.conditions.nextStep;
      nextStep = getStepById(nextStepId);
    }

    if (!nextStep) return;

    const newState: OnboardingState = {
      currentStepId: nextStep.id,
      completedSteps: newCompletedSteps,
      stepData: state.stepData,
      sessionId: state.sessionId,
    };

    try {
      await repository.save(newState);
      setState((prev) => ({
        ...prev,
        currentStepId: nextStep.id,
        completedSteps: newCompletedSteps,
        progress: Math.round(
          (newCompletedSteps.length / ONBOARDING_STEPS.length) * 100
        ),
      }));
    } catch (error) {
      console.error("Failed to save progress:", error);
      setState((prev) => ({
        ...prev,
        currentStepId: nextStep.id,
        completedSteps: newCompletedSteps,
        progress: Math.round(
          (newCompletedSteps.length / ONBOARDING_STEPS.length) * 100
        ),
      }));
    }
  }, [repository, state]);

  const back = useCallback(async () => {
    router.back();
  }, [router]);

  const goTo = useCallback(
    async (stepId: string) => {
      const step = ONBOARDING_STEPS.find((s) => s.id === stepId);
      if (!step) return;

      const newState: OnboardingState = {
        currentStepId: stepId,
        completedSteps: state.completedSteps,
        stepData: state.stepData,
        sessionId: state.sessionId,
      };

      try {
        await repository.save(newState);
        setState((prev) => ({ ...prev, currentStepId: stepId }));
        router.push(step.path);
      } catch (error) {
        console.error("Failed to save navigation:", error);
        setState((prev) => ({ ...prev, currentStepId: stepId }));
        router.push(step.path);
      }
    },
    [repository, state, router]
  );

  const reset = useCallback(async () => {
    try {
      await repository.clear();
      const sessionId = await repository.createSession();
      setState({
        currentStepId: ONBOARDING_STEPS[0]?.id || "",
        completedSteps: [],
        stepData: {},
        progress: 0,
        isLoading: false,
        sessionId,
      });
    } catch (error) {
      console.error("Failed to reset:", error);
      setState({
        currentStepId: ONBOARDING_STEPS[0]?.id || "",
        completedSteps: [],
        stepData: {},
        progress: 0,
        isLoading: false,
      });
    }
  }, [repository]);

  // Step data getter
  const getStepData = useCallback(
    (stepId?: string) => {
      console.log("🔍 Getting step data for stepId:", stepId);
      console.log("🔍 Current stepId:", state.currentStepId);
      console.log("🔍 Step data:", state.stepData);
      const id = stepId || state.currentStepId;
      return state.stepData[id] || {};
    },
    [state.stepData, state.currentStepId]
  );

  const current = getCurrentStep();

  return {
    // State
    currentStep: current,
    progress: state.progress,
    isLoading: state.isLoading,
    sessionId: state.sessionId,
    isCompleted: (stepId: string) => state.completedSteps.includes(stepId),

    // Data
    getData: getStepData,

    // Actions - simple and clear API
    save,
    next,
    back,
    goTo,
    reset,

    markAsCompleted,
    completedSteps: state.completedSteps,

    // // Legacy compatibility (mapped to new API)
    // goNext: next,
    // goBack: back,
    // goToStep: goTo,
    // getStepData,
    // updateStepData: async (stepId: string, data: any) => await save(data),
    // save: async (stepId: string, data: any, markAsCompleted?: boolean) => {
    //   await save(data);
    //   if (markAsCompleted) {
    //     await next();
    //   }
    // },
    // clearProgress: reset,

    // // Validation placeholder (for compatibility)
    // validateStep: (stepId: string, data: any) => ({ isValid: true, errors: [] }),
    // canProceedToStep: (stepId: string) => true,

    // // API placeholders (for compatibility)
    // callApi: async (apiId: string, data?: any) => ({ success: true, data: null }),
    // getCachedResponse: (apiId: string) => null,

    // // Additional legacy compatibility
    // getProgressPercentage: () => state.progress,
    // getCurrentStepOrder: () => getCurrentStep()?.order || 0,
    // getTotalStepsCount: () => ONBOARDING_STEPS.length,

    // // Navigation state
    canGoNext: !!getNextStep(),
    canGoBack: !!getPrevStep(),

    // // Utils
    totalSteps: ONBOARDING_STEPS.length,
    completedCount: state.completedSteps.length,
  };
}
