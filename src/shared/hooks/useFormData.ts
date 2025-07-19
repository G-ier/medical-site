'use client';

import { useState, useCallback } from 'react';
import { FormType } from '../types/form-types';

interface FormDataResponse<T = unknown> {
  success: boolean;
  data?: {
    formData: T;
  };
  message?: string;
  error?: string;
  summary?: {
    totalForms: number;
    formTypes: Array<{
      type: string;
      name: string;
      count: number;
    }>;
  };
}

interface UseFormDataReturn {
  save: (formType: FormType, formData?: Record<string, unknown>, validate?: boolean, stepId?: string) => Promise<FormDataResponse>;
  get: (formType?: FormType, stepId?: string) => Promise<FormDataResponse>;
  update: (formType: FormType, formData?: Record<string, unknown>, validate?: boolean, stepId?: string) => Promise<FormDataResponse>;
  delete: (formType: FormType, stepId?: string) => Promise<FormDataResponse>;
  getByField: (field: string, formType: FormType) => Promise<FormDataResponse>;
  isLoading: boolean;
  error: string | null;
}

/**
 * Hook for working with /api/form-data endpoint
 * Provides CRUD operations for form data storage
 */
export function useFormData(): UseFormDataReturn {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);


  const getSessionToken = useCallback(() => {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem('onboarding_session_token');
  }, []);
  

  const makeRequest = useCallback(async (
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    params?: {
      formType?: FormType;
      formData?: Record<string, unknown>;
      validate?: boolean;
      stepId?: string;
    }
  ): Promise<FormDataResponse> => {
    setIsLoading(true);
    setError(null);

    try {
      const sessionToken = getSessionToken();
      if (!sessionToken) {
        throw new Error('Session token not found');
      }

      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
        'x-session-token': sessionToken,
      };

      let url = '/api/form-data';
      let body: string | undefined;

      // Handle GET request with query parameters
      if (method === 'GET' && params) {
        const searchParams = new URLSearchParams();
        if (params.formType) searchParams.set('formType', params.formType);
        if (params.stepId) searchParams.set('stepId', params.stepId);
        if (searchParams.toString()) {
          url += `?${searchParams.toString()}`;
        }
      }

      // Handle request body for POST, PUT, DELETE
      if (method !== 'GET' && params) {
        body = JSON.stringify({
          formType: params.formType,
          stepId: params.stepId,
          formData: params.formData,
          validate: params.validate,
        });
      }

      const response = await fetch(url, {
        method,
        headers,
        body,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || `Request failed with status ${response.status}`);
      }

      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, [getSessionToken]);

  const save = useCallback(async (
    formType: FormType,
    formData?: Record<string, unknown>,
    validate: boolean = true,
    stepId?: string,
  ): Promise<FormDataResponse> => {
    return makeRequest('POST', { formType, stepId, formData, validate });
  }, [makeRequest]);

  const get = useCallback(async (
    formType?: FormType,
    stepId?: string
  ): Promise<FormDataResponse> => {
    return makeRequest('GET', { formType, stepId });
  }, [makeRequest]);

  const update = useCallback(async (
    formType: FormType,
    formData?: Record<string, unknown>,
    validate: boolean = true,
    stepId?: string,
  ): Promise<FormDataResponse> => {
    return makeRequest('PUT', { formType, stepId, formData, validate });
  }, [makeRequest]);

  const deleteFormData = useCallback(async (
    formType: FormType,
    stepId?: string
  ): Promise<FormDataResponse> => {
    return makeRequest('DELETE', { formType, stepId });
  }, [makeRequest]);

  const getByField = useCallback(async (
    field: string,
    formType: FormType
  ): Promise<FormDataResponse> => {
    const response = await makeRequest('GET', { formType: formType});
    return (response.data as Record<string, unknown>)?.[field] as FormDataResponse;
  }, [makeRequest]);

  return {
    save,
    get,
    update,
    delete: deleteFormData,
    isLoading,
    error,
    getByField,
  };
} 