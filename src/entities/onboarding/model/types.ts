import { FormType } from "@/shared/types/form-types";

// Core Onboarding Types
export type StepId = string;
export type ApiEndpoint = string;

// Removed OnboardingProgress - now handled by Repository Pattern in useOnboarding

// Navigation behavior types
export type NavigationBehavior = 'auto' | 'manual';

// Step configuration
export interface OnboardingStep {
  id: StepId;
  title: string;
  eyebrow?: string;
  path: string;
  component: string;
  order: number;
  isRequired: boolean;
  navigationBehavior?: NavigationBehavior; // auto: proceed immediately, manual: show next button
  validation?: StepValidation;
  apis?: ApiConfig[];
  conditions?: StepConditions;
  options?: StepOption[];
  type?: 'multiple-choice' | 'single-choice' | 'input' | 'textarea' | 'alert' | 'document-upload';
  question?: string;
  description?: string;
  minSelections?: number;
  fieldName?: string;
  formType?: FormType;
  
}

export interface StepOption {
  id: string;
  label: string;
  value: string;
}

// API configuration for steps
export interface ApiConfig {
  id: string;
  endpoint: ApiEndpoint;
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  trigger: 'onEnter' | 'onSubmit' | 'onExit' | 'conditional';
  condition?: (data: Record<string, unknown>) => boolean;
  payload?: (data: Record<string, unknown>) => Record<string, unknown>;
  headers?: Record<string, string>;
  retries?: number;
  timeout?: number;
}

// Step validation
export interface StepValidation {
  required?: boolean;
  schema?: unknown; // Zod schema
  custom?: (data: Record<string, unknown>) => boolean | string;
}

// Step conditions for navigation
export interface StepConditions {
  canSkip?: boolean | ((data: Record<string, unknown>) => boolean);
  nextStep?: StepId | ((data: Record<string, unknown>) => StepId);
  previousStep?: StepId | ((data: Record<string, unknown>) => StepId);
  showIf?: (data: Record<string, unknown>) => boolean;
  alternativeNextSteps?: {
    condition: (data: Record<string, unknown>) => boolean;
    nextStep: StepId;
  }[];
}

// API response types
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  code?: string;
}

// Removed OnboardingEngineState and OnboardingEngine - replaced by useOnboarding hook 