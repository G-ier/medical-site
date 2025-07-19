/**
 * Healthie API Configuration
 * Based on docs/onboarding/Heathie/API-integration.md
 */

export interface HealthieConfigData {
  url: string;
  authorizationShard: string;
  dietitianId?: string;
  olhCreateFormUrl: string;
  initialIntakeFormId: string;
  refillIntakeFormId: string;
}

// Use NEXT_PUBLIC_ENV to distinguish between staging and production deployments
const isProduction = process.env.NEXT_PUBLIC_ENV === 'production';

// Configuration based on environment
export const healthieConfig: HealthieConfigData = {
  // Staging vs Production URLs
  url: isProduction 
    ? 'https://api.gethealthie.com/graphql'
    : 'https://staging-api.gethealthie.com/graphql',
  
  // AuthorizationShard (new requirement for 2025)
  authorizationShard: isProduction
    ? '01962647-4fdc-742c-88e6-f36fd01bcc2f'  // Production
    : '0196266f-0c59-792c-ad8e-b55b030b50c6', // Staging
  
  // Dietitian ID (TBD - to be configured per organization)
  dietitianId: process.env.HEALTHIE_DIETITIAN_ID,
  
  // OLH Create Form URLs
  olhCreateFormUrl: isProduction
    ? 'https://api.questionnaire.solutions.openloophealth.com'
    : 'https://api.questionnaire.solutions-staging.openloophealth.com',
  
  // Form IDs for Initial and Refill intake
  initialIntakeFormId: isProduction ? '1975412' : '1172921',
  refillIntakeFormId: isProduction ? '1975413' : '1172922',
};

// API Headers for GraphQL requests
export const getHealthieHeaders = (apiKey?: string) => {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    'AuthorizationSource': 'API',
    'AuthorizationShard': healthieConfig.authorizationShard,
  };

  if (apiKey) {
    headers.Authorization = `Basic ${apiKey}`;
  }

  return headers;
};

// Environment variables validation
export const validateEnvironment = () => {
  const requiredVars = [
    'HEALTHIE_API_KEY',
  ];

  const missing = requiredVars.filter(varName => !process.env[varName]);
  
  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
  }
};

// Singleton config class for OLH client compatibility
export class HealthieConfig {
  private static instance: HealthieConfig;
  private isProduction: boolean;

  private constructor() {
    // Use NEXT_PUBLIC_ENV to distinguish between staging and production deployments
    this.isProduction = process.env.NEXT_PUBLIC_ENV === 'production';
  }

  static getInstance(): HealthieConfig {
    if (!HealthieConfig.instance) {
      HealthieConfig.instance = new HealthieConfig();
    }
    return HealthieConfig.instance;
  }

  getApiKey(): string {
    const apiKey = process.env.HEALTHIE_API_KEY;
    if (!apiKey) {
      throw new Error('HEALTHIE_API_KEY environment variable is required');
    }
    return apiKey;
  }

  getAuthorizationShard(): string {
    return healthieConfig.authorizationShard;
  }

  getBaseUrl(): string {
    return this.isProduction 
      ? 'https://api.gethealthie.com'
      : 'https://staging-api.gethealthie.com';
  }

  getOLHBaseUrl(): string {
    return this.isProduction 
      ? 'https://api.questionnaire.solutions.openloophealth.com'
      : 'https://api.questionnaire.solutions-staging.openloophealth.com';
  }

  getFormIds() {
    return {
      initialIntake: healthieConfig.initialIntakeFormId,
      refillIntake: healthieConfig.refillIntakeFormId,
    };
  }
} 