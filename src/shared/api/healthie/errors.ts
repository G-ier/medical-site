/**
 * Healthie API Error Handling
 */

import { GraphQLError, HealthieAPIError } from './types';

export class HealthieError extends Error implements HealthieAPIError {
  public code?: string;
  public statusCode?: number;
  public response?: any;
  public graphQLErrors?: GraphQLError[];

  constructor(
    message: string,
    options?: {
      code?: string;
      statusCode?: number;
      response?: any;
      graphQLErrors?: GraphQLError[];
    }
  ) {
    super(message);
    this.name = 'HealthieError';
    this.code = options?.code;
    this.statusCode = options?.statusCode;
    this.response = options?.response;
    this.graphQLErrors = options?.graphQLErrors;

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, HealthieError);
    }
  }

  // Create error from GraphQL response
  static fromGraphQLErrors(errors: GraphQLError[]): HealthieError {
    const primaryError = errors[0];
    const message = primaryError?.message || 'GraphQL request failed';
    
    return new HealthieError(message, {
      code: primaryError?.extensions?.code,
      graphQLErrors: errors,
    });
  }

  // Create error from HTTP response
  static fromResponse(response: Response, data?: any): HealthieError {
    const message = `HTTP ${response.status}: ${response.statusText}`;
    
    return new HealthieError(message, {
      statusCode: response.status,
      response: data,
    });
  }

  // Create error for missing environment variables
  static missingEnvironment(variables: string[]): HealthieError {
    const message = `Missing required environment variables: ${variables.join(', ')}`;
    
    return new HealthieError(message, {
      code: 'MISSING_ENV_VARS',
    });
  }

  // Create error for authentication issues
  static authenticationFailed(details?: string): HealthieError {
    const message = `Healthie authentication failed${details ? `: ${details}` : ''}`;
    
    return new HealthieError(message, {
      code: 'AUTH_FAILED',
      statusCode: 401,
    });
  }

  // Get user-friendly error message
  getUserMessage(): string {
    switch (this.code) {
      case 'MISSING_ENV_VARS':
        return 'Configuration error. Please check environment variables.';
      case 'AUTH_FAILED':
        return 'Authentication failed. Please check your API credentials.';
      default:
        if (this.statusCode === 429) {
          return 'Too many requests. Please try again later.';
        }
        if (this.statusCode && this.statusCode >= 500) {
          return 'Service temporarily unavailable. Please try again later.';
        }
        return this.message || 'An unexpected error occurred.';
    }
  }

  // Log error with proper context
  log(context?: string): void {
    const prefix = context ? `[${context}]` : '[HealthieAPI]';
    console.error(prefix, {
      message: this.message,
      code: this.code,
      statusCode: this.statusCode,
      graphQLErrors: this.graphQLErrors,
      stack: this.stack,
    });
  }
}

// Error handler for async operations
export const handleAsyncError = async <T>(
  operation: () => Promise<T>,
  context?: string
): Promise<T> => {
  try {
    return await operation();
  } catch (error) {
    if (error instanceof HealthieError) {
      error.log(context);
      throw error;
    }
    
    // Convert unknown errors to HealthieError
    const healthieError = new HealthieError(
      error instanceof Error ? error.message : 'Unknown error occurred',
      { response: error }
    );
    
    healthieError.log(context);
    throw healthieError;
  }
};

// Utility to check if response has GraphQL errors
export const hasGraphQLErrors = (response: any): boolean => {
  return response?.errors && Array.isArray(response.errors) && response.errors.length > 0;
};

// Utility to extract errors from GraphQL response
export const extractGraphQLErrors = (response: any): GraphQLError[] => {
  if (hasGraphQLErrors(response)) {
    return response.errors;
  }
  return [];
}; 