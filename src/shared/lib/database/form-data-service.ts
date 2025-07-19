/**
 * FormData Service - Universal Form System
 * Handles CRUD operations for all form types
 * Supports onboarding steps and Healthie OLH forms
 */

import { prisma } from './client'
import type { FormData } from './client'
import {
  FormType,
  type SessionIdentifier
} from '@/shared/types/form-types'

export class FormDataService {
  /**
   * Save form data for any form type
   */
  static async saveFormData(
    identifier: SessionIdentifier,
    input: any,
    validate: boolean = true
  ): Promise<FormData> {
    // First, get the progress session
    const progressSession = await this.getProgressSession(identifier)
    if (!progressSession) {
      throw new Error('Progress session not found')
    }

    // Validate form data if requested
    let isValid = false
    let validationErrors: string[] = []

    if (validate) {
      const validation = this.validateFormData(input.formType, input.stepId, input.formData)
      isValid = validation.isValid
      validationErrors = validation.errors
    } else {
      isValid = true
    }

    // Normalize stepId for consistent behavior (null -> '', undefined -> '', string -> string)
    const normalizedStepId = input.stepId || '';

    // Upsert form data (create or update)
    const savedFormData = await prisma.formData.upsert({
      where: {
        progressSessionId_formType_stepId: {
          progressSessionId: progressSession.id,
          formType: input.formType,
          stepId: normalizedStepId
        }
      },
      update: {
        formData: input.formData,
        isValid,
        validationErrors: validationErrors.length > 0 ? validationErrors : undefined,
        updatedAt: new Date()
      },
      create: {
        progressSessionId: progressSession.id,
        formType: input.formType,
        stepId: normalizedStepId,
        formData: input.formData,
        isValid,
        validationErrors: validationErrors.length > 0 ? validationErrors : undefined
      }
    })

    console.log(`✅ Form data saved for ${input.formType}${input.stepId ? ` step ${input.stepId}` : ''}, valid: ${isValid}`)
    return savedFormData
  }

  /**
   * Get form data for a specific form type and step
   */
  static async getFormData(
    identifier: SessionIdentifier,
    formType: FormType,
    stepId?: string
  ): Promise<FormData | null> {
    const progressSession = await this.getProgressSession(identifier)
    if (!progressSession) {
      return null
    }

    // Normalize stepId for consistent behavior
    const normalizedStepId = stepId || '';

    return await prisma.formData.findUnique({
      where: {
        progressSessionId_formType_stepId: {
          progressSessionId: progressSession.id,
          formType: formType,
          stepId: normalizedStepId
        }
      }
    })
  }

  /**
   * Get all form data for a session (optionally filtered by form type)
   */
  static async getAllFormData(
    identifier: SessionIdentifier,
    formType?: FormType
  ): Promise<FormData[]> {
    const progressSession = await this.getProgressSession(identifier)
    if (!progressSession) {
      return []
    }

    return await prisma.formData.findMany({
      where: {
        progressSessionId: progressSession.id,
        ...(formType && { formType })
      },
      orderBy: {
        createdAt: 'asc'
      }
    })
  }

  /**
   * Delete form data for a specific form type and step
   */
  static async deleteFormData(
    identifier: SessionIdentifier,
    formType: FormType,
    stepId?: string
  ): Promise<boolean> {
    const progressSession = await this.getProgressSession(identifier)
    if (!progressSession) {
      return false
    }

    // Normalize stepId for consistent behavior
    const normalizedStepId = stepId || '';

    try {
      await prisma.formData.delete({
        where: {
          progressSessionId_formType_stepId: {
            progressSessionId: progressSession.id,
            formType: formType,
            stepId: normalizedStepId
          }
        }
      })
      console.log(`🗑️ Form data deleted for ${formType}${stepId ? ` step ${stepId}` : ''}`)
      return true
    } catch (error) {
      console.error(`Failed to delete form data for ${formType}${stepId ? ` step ${stepId}` : ''}:`, error)
      return false
    }
  }

  /**
   * Get form data by user ID and form type (for authenticated users)
   */
  static async getFormDataByType(
    userId: number,
    formType: FormType
  ): Promise<FormData[]> {
    // Find user's progress session
    const progressSession = await prisma.progressSession.findFirst({
      where: {
        userId,
      },
      orderBy: {
        updatedAt: 'desc'
      }
    })


    if (!progressSession) {
      return []
    }

    return await prisma.formData.findMany({
      where: {
        progressSessionId: progressSession.id,
        formType
      },
      orderBy: {
        createdAt: 'asc'
      }
    })
  }

  /**
   * Get form data summary (validation status, counts, etc.)
   */
  static async getFormDataSummary(
    identifier: SessionIdentifier
  ): Promise<{
    totalSteps: number
    validSteps: number
    invalidSteps: number
    completionPercentage: number
    lastUpdated: Date | null
    validationErrors: Record<string, string[]>
  }> {
    const formDataList = await this.getAllFormData(identifier)

    const totalSteps = formDataList.length
    const validSteps = formDataList.filter(fd => fd.isValid).length
    const invalidSteps = totalSteps - validSteps
    const completionPercentage = totalSteps > 0 ? Math.round((validSteps / totalSteps) * 100) : 0

    const lastUpdated = formDataList.length > 0
      ? formDataList.reduce((latest, current) =>
        current.updatedAt > latest ? current.updatedAt : latest,
        formDataList[0].updatedAt
      )
      : null

    const validationErrors: Record<string, string[]> = {}
    formDataList.forEach(fd => {
      if (!fd.isValid && fd.validationErrors && fd.stepId) {
        validationErrors[fd.stepId] = fd.validationErrors as string[]
      }
    })

    return {
      totalSteps,
      validSteps,
      invalidSteps,
      completionPercentage,
      lastUpdated,
      validationErrors
    }
  }

  /**
   * Private helper to get progress session
   */
  private static async getProgressSession(identifier: SessionIdentifier) {
    let session = await prisma.progressSession.findUnique({
      where: {
        sessionToken: identifier.sessionToken
      }
    })

    // If session doesn't exist, create a new one
    if (!session) {
      console.log(`📝 Creating new anonymous progress session for token: ${identifier.sessionToken}`)
      session = await prisma.progressSession.create({
        data: {
          sessionToken: identifier.sessionToken!,
          isAnonymous: true,
          currentStepId: null,
          completedSteps: [],
          stepData: {},
          expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // 30 days
        }
      })
      console.log(`✅ Anonymous progress session created with ID: ${session.id}`)
    }

    return session
  }

  /**
   * Form data validation based on form type and step
   */
  private static validateFormData(
    formType: FormType,
    stepId: string | undefined,
    formData: Record<string, any>
  ): { isValid: boolean; errors: string[] } {
    const errors: string[] = []

    // Basic validation - check for empty data
    if (!formData || Object.keys(formData).length === 0) {
      errors.push('Form data cannot be empty')
    }

    // Form type specific validation
    switch (formType) {
      case FormType.OHL_INITIAL_INTAKE:
        return this.validateHealthieInitialIntake(formData)

      case FormType.OHL_REFILL_INTAKE:
        return this.validateHealthieRefillIntake(formData)

      default:
        // For other form types, basic validation is sufficient
        break
    }

    return {
      isValid: errors.length === 0,
      errors
    }
  }

  /**
   * Validate onboarding step data
   */
  private static validateOnboardingStep(
    stepId: string | undefined,
    formData: Record<string, any>
  ): { isValid: boolean; errors: string[] } {
    const errors: string[] = []

    if (!stepId) {
      errors.push('Step ID is required for onboarding steps')
      return { isValid: false, errors }
    }

    // Step-specific validation
    switch (stepId) {
      case 'name-introduction':
        if (!formData.firstName?.trim()) errors.push('First name is required')
        if (!formData.lastName?.trim()) errors.push('Last name is required')
        break

      case 'personal-greeting':
        if (!formData.email?.trim()) errors.push('Email is required')
        if (formData.email && !this.isValidEmail(formData.email)) {
          errors.push('Invalid email format')
        }
        break

      case 'shipping-details':
        if (!formData.line1?.trim()) errors.push('Address line 1 is required')
        if (!formData.city?.trim()) errors.push('City is required')
        if (!formData.state?.trim()) errors.push('State is required')
        if (!formData.zip?.trim()) errors.push('ZIP code is required')
        break

      default:
        // For other steps, basic validation is sufficient
        break
    }

    return {
      isValid: errors.length === 0,
      errors
    }
  }

  /**
   * Validate Healthie initial intake form data
   */
  private static validateHealthieInitialIntake(
    formData: Record<string, any>
  ): { isValid: boolean; errors: string[] } {
    const errors: string[] = []

    // Required fields for Healthie initial intake
    if (!formData.mwl_modality) {
      errors.push('MWL modality is required')
    }

    if (formData.mwl_modality && !['async_visit', 'sync_visit'].includes(formData.mwl_modality)) {
      errors.push('MWL modality must be "async_visit" or "sync_visit"')
    }

    // Optional shipping validation
    if (formData.shipping_address_line_1 && !formData.shipping_city) {
      errors.push('City is required when address is provided')
    }

    return {
      isValid: errors.length === 0,
      errors
    }
  }

  /**
   * Validate Healthie refill intake form data
   */
  private static validateHealthieRefillIntake(
    formData: Record<string, any>
  ): { isValid: boolean; errors: string[] } {
    const errors: string[] = []

    // Same basic validation as initial intake
    const initialValidation = this.validateHealthieInitialIntake(formData)
    errors.push(...initialValidation.errors)

    // Additional refill-specific validation
    if (formData.number_of_injections !== undefined) {
      if (typeof formData.number_of_injections !== 'number' || formData.number_of_injections < 0) {
        errors.push('Number of injections must be a positive number')
      }
    }

    return {
      isValid: errors.length === 0,
      errors
    }
  }

  /**
   * Email validation helper
   */
  private static isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }
} 