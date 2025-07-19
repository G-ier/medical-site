import { HealthieConfig } from './config';
import { HealthieError } from './errors';
import { OLHSubmissionRequest, OLHSubmissionResponse } from './olh-types';

export class OLHClient {
  private baseUrl: string;
  private apiKey: string;

  constructor() {
    const config = HealthieConfig.getInstance();
    this.baseUrl = config.getOLHBaseUrl();
    this.apiKey = config.getApiKey();
  }

  private getHeaders(): Record<string, string> {
    return {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${this.apiKey}`,
      'AuthorizationSource': 'API',
      'Accept': 'application/json',
    };
  }

  async submitForm(formData: OLHSubmissionRequest): Promise<OLHSubmissionResponse> {
    const url = `${this.baseUrl}/create-form`;
    
    console.log('[OLHClient] Submitting form to:', url);
    console.log('[OLHClient] Form data:', formData);

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify(formData),
      });

      console.log('[OLHClient] Response status:', response.status);
      console.log('[OLHClient] Response headers:', Object.fromEntries(response.headers.entries()));

      const responseText = await response.text();
      console.log('[OLHClient] Response body:', responseText);

      if (!response.ok) {
        let errorMessage = `HTTP ${response.status}: ${response.statusText}`;
        
        try {
          const errorData = JSON.parse(responseText);
          errorMessage = errorData.message || errorData.error || errorMessage;
        } catch {
          // Response is not JSON, use status text
        }

        throw new HealthieError(errorMessage, {
          statusCode: response.status,
          response: responseText
        });
      }

      let responseData: any;
      try {
        responseData = JSON.parse(responseText);
      } catch {
        throw new HealthieError('Invalid JSON response from OLH API', {
          response: responseText,
          statusCode: response.status
        });
      }

      console.log('[OLHClient] Form submission successful:', responseData);
      
      // OLH API returns different response structure - adapt it
      console.log('[OLHClient] Processing OLH response');
      
      // Check if OLH API indicates failure
      const isSuccess = responseData.status !== 'FAILURE' && responseData.success !== false;
      
      // Ensure we return a consistent response structure
      const standardResponse: OLHSubmissionResponse = {
        success: isSuccess,
        message: responseData.message || (isSuccess ? 'Form submitted successfully' : 'Form submission failed'),
        status: responseData.status,
        ...responseData // Include any additional fields from OLH
      };
      
      console.log('[OLHClient] Standardized response:', standardResponse);
      
      // If OLH indicates failure, throw an error
      if (!isSuccess) {
        throw new HealthieError(standardResponse.message, {
          statusCode: 400,
          response: responseText,
        });
      }
      
      return standardResponse;

    } catch (error) {
      if (error instanceof HealthieError) {
        throw error;
      }

      // Handle network errors, timeouts, etc.
      const message = error instanceof Error ? error.message : 'Unknown error occurred';
      throw new HealthieError(`OLH API request failed: ${message}`, {
        statusCode: undefined,
        response: undefined
      });
    }
  }

  async testConnection(): Promise<boolean> {
    try {
      // Try a simple request to test connectivity
      const response = await fetch(this.baseUrl, {
        method: 'HEAD',
        headers: {
          'Authorization': `Basic ${this.apiKey}`,
          'AuthorizationSource': 'API',
        },
      });

      return response.status < 500; // Any non-server error is considered "connected"
    } catch (error) {
      console.error('[OLHClient] Connection test failed:', error);
      return false;
    }
  }
}

// Singleton instance
let olhClientInstance: OLHClient | null = null;

export const getOLHClient = (): OLHClient => {
  if (!olhClientInstance) {
    olhClientInstance = new OLHClient();
  }
  return olhClientInstance;
}; 