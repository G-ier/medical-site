import { NextRequest, NextResponse } from 'next/server';
import { healthieClient } from '@/shared/api/healthie';

const GET_ALL_FORMS_QUERY = `
  query GetAllForms {
    customModuleForms {
      id
      name
      use_for_charting
      use_for_program
      external_id_type
      external_id
      custom_modules {
        id
        label
        mod_type
        required
        options
        metadata
      }
    }
  }
`;

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const formId = searchParams.get('id');

    if (formId) {
      // Get specific form by ID
      const SPECIFIC_FORM_QUERY = `
        query GetFormTemplate($formId: ID!) {
          customModuleForm(id: $formId) {
            id
            name
            use_for_charting
            use_for_program
            external_id_type
            external_id
            custom_modules {
              id
              label
              mod_type
              required
              options
              metadata
            }
          }
        }
      `;

      const result: any = await healthieClient.query(SPECIFIC_FORM_QUERY, { formId });
      const form: any = result.data?.customModuleForm;

      if (!form) {
        return NextResponse.json(
          { 
            error: `Form with ID ${formId} not found`,
            formId
          },
          { status: 404 }
        );
      }

      return NextResponse.json({
        success: true,
        data: {
          form,
          totalQuestions: form.custom_modules?.length || 0
        }
      });
    } else {
      // Get all forms
      const result: any = await healthieClient.query(GET_ALL_FORMS_QUERY);
      const forms: any = result.data?.customModuleForms || [];

      return NextResponse.json({
        success: true,
        data: {
          forms,
          totalForms: forms.length,
          targetForms: {
            initialIntakeId: "1172921",
            refillIntakeId: "1172922"
          }
        }
      });
    }

  } catch (error: any) {
    console.error('Error fetching forms:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to fetch forms',
        details: error.message || 'Unknown error'
      },
      { status: 500 }
    );
  }
} 