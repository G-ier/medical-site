/**
 * Healthie API - Main Export
 * Re-exports all Healthie API functionality
 */

// Core client and configuration
export { HealthieClient, createHealthieClient, healthieClient } from './client';
export { healthieConfig, getHealthieHeaders, validateEnvironment, HealthieConfig } from './config';
export { getOLHClient } from './olh-client';

// Types
export type {
  GraphQLResponse,
  GraphQLError,
  HealthieUser,
  SignInResponse,
  CurrentUserResponse,
  OrganizationResponse,
  CustomModuleForm,
  CustomModule,
  MetricEntry,
  CreatePatientInput,
  CreateMetricInput,
  HealthieAPIError,
  APIResponse,
  HealthieOffering,
  GetOfferingsInput,
  GetOfferingsResponse,
  HealthieWebhookPayload,
  FormAnswerGroupData,
  AppointmentData,
  OrderTrackingWebhookPayload,
  PaymentWebhookPayload,
  WebhookProcessingResult,
} from './types';

// Form submission types (legacy GraphQL format)
export type {
  FormAnswer,
  FormSubmissionRequest,
  FormSubmissionResponse,
  FormType,
  FieldType,
} from './form-types';

export {
  FORM_TYPE_MAP,
  getFormType,
  isValidFormId,
  getFormName,
  validateAnswerForFieldType,
} from './form-types';

// OLH API types (new correct format)
export type {
  OLHFormData,
  OLHSubmissionRequest,
  OLHSubmissionResponse,
  OLHFormType,
  HealthieToOLHFieldMapping,
} from './olh-types';

export {
  OLH_FORM_TYPE_MAP,
  getOLHFormType,
  isValidOLHFormId,
  getOLHFormName,
  validateOLHFormData,
  getOLHFieldName,
  HEALTHIE_TO_OLH_FIELD_MAPPING,
} from './olh-types';

// Conversion utilities
export {
  convertGraphQLToOLH,
  convertSimpleToOLH,
  validateAndCleanOLHData,
  createSampleOLHFormData,
  createMinimalOLHFormData,
} from './olh-converter';

export type {
  GraphQLStyleFormData,
  SimpleFormData,
} from './olh-converter';

// Error handling
export {
  HealthieError,
  handleAsyncError,
  hasGraphQLErrors,
  extractGraphQLErrors,
} from './errors';

// Constants and utilities from shared/lib/healthie
export {
  FORM_IDS,
  GRAPHQL_FRAGMENTS,
  GRAPHQL_QUERIES,
  GRAPHQL_MUTATIONS,
  SPLIT_VISITS,
  METRIC_CATEGORIES,
  GENDER_OPTIONS,
  API_LIMITS,
  OLH_CONSTANTS,
} from '../../lib/healthie/constants';

export {
  formatDateForHealthie,
  formatDateTimeForHealthie,
  isValidEmail,
  isValidPhoneNumber,
  formatPhoneNumber,
  isValidGender,
  isValidDateOfBirth,
  sanitizePatientData,
  transformHealthieUser,
  isValidMetricCategory,
  formatMetricValue,
  generateFormAnswers,
  getCurrentEnvironment,
  getFormIdForEnvironment,
  getErrorMessage,
  isHealthieError,
  isSuccessResponse,
  isErrorResponse,
  getTimezoneFromLocation,
  logHealthieRequest,
  logHealthieResponse,
} from '../../lib/healthie/utils'; 