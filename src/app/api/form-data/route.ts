/**
 * Universal Forms API - New Implementation
 * Handles all form types: onboarding steps, Healthie forms, contact forms, etc.
 */

import { NextRequest, NextResponse } from 'next/server'
import { FormDataService } from '@/shared/lib/database/form-data-service'
import { 
  FormType, 
  CreateFormDataInput, 
  UpdateFormDataInput,
  validateFormType,
  getFormTypeDisplayName
} from '@/shared/types/form-types'

/**
 * GET /api/form-data - Retrieve form data
 * Query params:
 * - formType: specific form type (optional)
 * - stepId: specific step (optional, only for onboarding)
 */

// curl -X GET "http://localhost:3004/api/form-data?formType=create_patient" -H "x-session-token: f1995c2d631563f9bd70afca508eca16ad6d02d89392e3635bc118c16afda2fa"
export async function GET(request: NextRequest) {
  try {
    console.log('📊 GET /api/form-data - Retrieving form data')
    
    // Get session token
    const sessionToken = request.headers.get('x-session-token')
    if (!sessionToken) {
      return NextResponse.json(
        { error: 'Session token is required' },
        { status: 401 }
      )
    }

    // Parse query parameters
    const { searchParams } = new URL(request.url)
    const formTypeParam = searchParams.get('formType')
    // const stepId = searchParams.get('stepId')

    // Validate form type if provided
    let formType: FormType | undefined
    if (formTypeParam) {
      if (!validateFormType(formTypeParam)) {
        return NextResponse.json(
          { error: `Invalid form type: ${formTypeParam}` },
          { status: 400 }
        )
      }
      formType = formTypeParam as FormType
    }

    const identifier = {
      type: 'anonymous' as const,
      sessionToken
    }

    if (formType) {
      // Get specific form data
      const formData = await FormDataService.getFormData(identifier, formType)
      
      if (!formData) {
        return NextResponse.json(
          { error: 'Form data not found' },
          { status: 404 }
        )
      }

      return NextResponse.json({
        success: true,
        data: formData
      })
    } else {
      // Get all form data (optionally filtered by form type)
      const allFormData = await FormDataService.getAllFormData(identifier, formType)
      const summary = await FormDataService.getFormDataSummary(identifier)

      return NextResponse.json({
        success: true,
        data: allFormData,
        summary: {
          ...summary,
          formTypes: [...new Set(allFormData.map(fd => fd.formType))].map(ft => ({
            type: ft,
            name: getFormTypeDisplayName(ft as FormType),
            count: allFormData.filter(fd => fd.formType === ft).length
          }))
        }
      })
    }

  } catch (error) {
    console.error('❌ Error retrieving form data:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

/**
 * POST /api/form-data - Create new form data with merge functionality
 */
export async function POST(request: NextRequest) {
  try {
    console.log('💾 POST /api/form-data - Creating/merging form data')
    
    // Get session token
    const sessionToken = request.headers.get('x-session-token')
    if (!sessionToken) {
      return NextResponse.json(
        { error: 'Session token is required' },
        { status: 401 }
      )
    }

    // Parse request body
    const body = await request.json()
    const { formType, stepId, formData, validate = true } = body

    // Validate required fields
    if (!formType) {
      return NextResponse.json(
        { error: 'formType is required' },
        { status: 400 }
      )
    }

    if (!validateFormType(formType)) {
      return NextResponse.json(
        { error: `Invalid form type: ${formType}` },
        { status: 400 }
      )
    }

    if (!formData) {
      return NextResponse.json(
        { error: 'formData is required' },
        { status: 400 }
      )
    }

    const identifier = {
      sessionToken
    }

    // Check if form data already exists for this formType
    const existingFormData = await FormDataService.getFormData(identifier, formType as FormType, stepId)
    
    let mergedFormData = formData
    
    if (existingFormData && typeof existingFormData.formData === 'object' && existingFormData.formData !== null) {
      // Merge existing data with new data (new data takes precedence)
      mergedFormData = {
        ...(existingFormData.formData as Record<string, unknown>),
        ...formData
      }
      console.log(`🔄 Merging form data for ${formType}${stepId ? ` step ${stepId}` : ''}`)
    } else {
      console.log(`✨ Creating new form data for ${formType}${stepId ? ` step ${stepId}` : ''}`)
    }

    const input: CreateFormDataInput = {
      formType: formType as FormType,
      stepId,
      formData: mergedFormData,
      validate
    }

    // Save merged form data
    const savedFormData = await FormDataService.saveFormData(identifier, input, validate)

    return NextResponse.json({
      success: true,
      data: savedFormData,
      message: `Form data ${existingFormData ? 'merged' : 'created'} for ${getFormTypeDisplayName(formType as FormType)}`,
      merged: !!existingFormData
    })

  } catch (error) {
    console.error('❌ Error saving form data:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

/**
 * PUT /api/form-data - Update existing form data
 */
export async function PUT(request: NextRequest) {
  try {
    console.log('🔄 PUT /api/form-data - Updating form data')
    
    // Get session token
    const sessionToken = request.headers.get('x-session-token')
    if (!sessionToken) {
      return NextResponse.json(
        { error: 'Session token is required' },
        { status: 401 }
      )
    }

    // Parse request body
    const body = await request.json()
    const { formType, stepId, formData, validate = true } = body

    // Validate required fields
    if (!formType || !validateFormType(formType)) {
      return NextResponse.json(
        { error: 'Valid formType is required' },
        { status: 400 }
      )
    }

    if (!formData) {
      return NextResponse.json(
        { error: 'formData is required' },
        { status: 400 }
      )
    }

    const identifier = {
      type: 'anonymous' as const,
      sessionToken
    }

    const input: UpdateFormDataInput = {
      formType: formType as FormType,
      stepId,
      formData,
      validate
    }

    // Update form data (same as save - upsert operation)
    const updatedFormData = await FormDataService.saveFormData(identifier, input, validate)

    console.log(`✅ Form data updated for ${getFormTypeDisplayName(formType as FormType)}`)
    
    return NextResponse.json({
      success: true,
      data: updatedFormData,
      message: `Form data updated for ${getFormTypeDisplayName(formType as FormType)}`
    })

  } catch (error) {
    console.error('❌ Error updating form data:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

/**
 * DELETE /api/form-data - Delete form data
 */
export async function DELETE(request: NextRequest) {
  try {
    console.log('🗑️ DELETE /api/form-data - Deleting form data')
    
    // Get session token
    const sessionToken = request.headers.get('x-session-token')
    if (!sessionToken) {
      return NextResponse.json(
        { error: 'Session token is required' },
        { status: 401 }
      )
    }

    // Parse request body
    const body = await request.json()
    const { formType, stepId } = body

    // Validate required fields
    if (!formType || !validateFormType(formType)) {
      return NextResponse.json(
        { error: 'Valid formType is required' },
        { status: 400 }
      )
    }

    const identifier = {
      type: 'anonymous' as const,
      sessionToken
    }

    // Delete form data
    const deleted = await FormDataService.deleteFormData(
      identifier, 
      formType as FormType, 
      stepId
    )

    if (!deleted) {
      return NextResponse.json(
        { error: 'Form data not found or could not be deleted' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      message: `Form data deleted for ${getFormTypeDisplayName(formType as FormType)}`
    })

  } catch (error) {
    console.error('❌ Error deleting form data:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 