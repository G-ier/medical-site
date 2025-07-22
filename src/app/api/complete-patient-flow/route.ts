import { NextRequest, NextResponse } from "next/server";
import { FormDataService } from "@/shared/lib/database/form-data-service";
import { PatientService } from "@/shared/lib/database/patient-service";
import { FormType } from "@/shared/types/form-types";
import {
  HealthieUser,
  CreatePatientInput,
  MetricEntry,
  HealthieMessage,
} from "@/shared/api/healthie/types";
import { getAuthenticatedUser } from "@/shared/lib/auth/api-auth-helpers";

interface User {
  id: string;
  email: string;
  auth0Id: string;
  createdAt: Date;
  updatedAt: Date;
}

interface DietitianData {
  dietitianId: string;
}

interface HealthiePatientResult {
  data: {
    patientId?: string;
    patients?: HealthieUser[];
  };
}

interface UpdatePatientResult {
  data?: HealthieUser;
  messages?: HealthieMessage[];
}

interface MetricsResult {
  data?: MetricEntry[];
  messages?: HealthieMessage[];
}

interface FormSubmissionResult {
  success: boolean;
  data?: unknown;
  error?: string;
}

interface DBPatient {
  id: string;
  healthiePatientId: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

interface MedicationData {
  [key: string]: unknown;
}

interface CompletePatientFlowResponse {
  success: boolean;
  data?: {
    user: User;
    dietitian: DietitianData;
    healthiePatient: HealthiePatientResult;
    updatedPatient: UpdatePatientResult;
    metricsResult: MetricsResult;
    formSubmissionResult: FormSubmissionResult;
    documentUploadResult: FormSubmissionResult;
    dbPatient: DBPatient;
    medicationData: MedicationData;
  };
  error?: string;
  details?: string | Record<string, unknown>;
}

/**
 * POST /api/healthie/complete-patient-flow
 * Complete patient flow: create patient, update, save metrics, submit form, create in DB
 */
export async function POST(
  request: NextRequest
): Promise<NextResponse<CompletePatientFlowResponse>> {
  try {
    // Step 1: Get authenticated user via JWT cookies
    const authResult = await getAuthenticatedUser(request);
    if (!authResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: authResult.error || "User not authenticated",
          details: "Failed to authenticate user via JWT cookies",
        },
        { status: authResult.statusCode || 401 }
      );
    }

    const user = authResult.dbUser!;

    // Step 3: Get dietitian
    const dietitianResponse = await fetch(
      new URL(
        `http://localhost:${process.env.PORT}/api/healthie/dietitian`,
        request.url
      )
    );
    if (!dietitianResponse.ok) {
      return NextResponse.json(
        {
          success: false,
          error: "Failed to get dietitian",
          details: "Could not retrieve dietitian information",
        },
        { status: 500 }
      );
    }

    const dietitianData = await dietitianResponse.json();
    const dietitianId = dietitianData.data.dietitianId;

    // Step 4: Get CREATE_PATIENT form data
    const createPatientData = await FormDataService.getFormDataByType(
      user.id,
      FormType.CREATE_PATIENT
    );

    if (createPatientData.length === 0) {
      return NextResponse.json(
        {
          success: false,
          error: "No CREATE_PATIENT form data found",
          details: "User must have CREATE_PATIENT data",
        },
        { status: 404 }
      );
    }

    const createFormData = createPatientData[0]
      .formData as unknown as CreatePatientInput;

    // Step 5: Create patient in Healthie
    const createPatientPayload = {
      first_name: createFormData.first_name,
      last_name: createFormData.last_name,
      email: user.email,
      phone_number: createFormData.phone_number
        ? String(createFormData.phone_number)
        : "",
      dietitian_id: dietitianId,
      skipped_email: createFormData.skipped_email || false,
      dont_send_welcome: createFormData.dont_send_welcome || false,
    };

    const createPatientResponse = await fetch(
      new URL(`http://localhost:${process.env.PORT}/api/healthie/patients`),
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(createPatientPayload),
      }
    );

    let healthiePatientResult = null;
    let healthiePatientId = null;

    if (!createPatientResponse.ok) {
      const errorData = await createPatientResponse.json();
      let errorMessage = "";
      if (errorData.messages) {
        errorMessage = errorData.messages
          .map((v: HealthieMessage) => v.message)
          .join(", ");
      } else {
        errorMessage = errorData.error;
      }

      if (errorMessage.includes("already exists")) {
        const patientSearchResponse = await fetch(
          new URL(
            `http://localhost:${process.env.PORT}/api/healthie/patients/search?keywords=${createPatientPayload.email}`,
            request.url
          ),
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!patientSearchResponse.ok) {
          return NextResponse.json(
            {
              success: false,
              error: "Failed to update patient in Healthie",
              details: errorData,
            },
            { status: 400 }
          );
        }

        healthiePatientResult = await patientSearchResponse.json();
        healthiePatientId = healthiePatientResult.data.patients[0].id;
      } else {
        return NextResponse.json(
          {
            success: false,
            error: "Failed to create patient in Healthie",
            details: errorData,
          },
          { status: 400 }
        );
      }
    } else {
      healthiePatientResult = await createPatientResponse.json();
      healthiePatientId = healthiePatientResult.data.patientId;
    }

    // Step 6: Get UPDATE_PATIENT form data and update patient
    const updatePatientData = await FormDataService.getFormDataByType(
      user.id,
      FormType.UPDATE_PATIENT
    );
    const updatedPatientResult: UpdatePatientResult = {
      data: undefined,
      messages: undefined,
    };

    if (updatePatientData.length > 0) {
      const updateFormData: any = updatePatientData[0].formData;
      const updatePatientPayload = {
        dob: updateFormData.dob,
        height: updateFormData.height,
        gender: updateFormData.gender,
        location: {
          state: updateFormData.state,
          city: updateFormData.city,
          zip: updateFormData.zip,
          line1: updateFormData.line1 || "",
          line2: updateFormData.line2 || "",
        },
      };
      const updatedPatientResult = await fetch(
        new URL(
          `http://localhost:${process.env.PORT}/api/healthie/patients/${healthiePatientId}`,
          request.url
        ),
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatePatientPayload),
        }
      );

      if (!updatedPatientResult.ok) {
        const errorData = await updatedPatientResult.json();
        return NextResponse.json(
          {
            success: false,
            error: "Failed to update patient in Healthie",
            details: errorData,
          },
          { status: 400 }
        );
      }
    } else {
      return NextResponse.json(
        {
          success: false,
          error: "Update patient in Healthie failed",
          details: "No update data available",
        },
        { status: 400 }
      );
    }

    // Step 7: Get HEALTHIE_METRICS data and save metrics
    const metricsData = await FormDataService.getFormDataByType(
      user.id,
      FormType.HEALTHIE_METRICS
    );
    let metricsResult = null;

    if (metricsData.length > 0) {
      const metricsFormData = metricsData[0].formData as Record<
        string,
        unknown
      >;

      // Prepare metrics for bulk API
      // Convert metrics object to array format expected by bulk API
      const metricsArray: Array<{
        category: string;
        metric_stat: string;
        user_id: string;
        type: string;
      }> = [];

      metricsArray.push({
        category: "Weight",
        metric_stat: String(metricsFormData.weight),
        user_id: healthiePatientId,
        type: "MetricEntry",
      });

      const metricsPayload = {
        metrics: metricsArray,
      };

      if (metricsPayload.metrics.length > 0) {
        const metricsResponse = await fetch(
          new URL(
            `http://localhost:${process.env.PORT}/api/healthie/metrics/bulk`,
            request.url
          ),
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(metricsPayload),
          }
        );

        if (metricsResponse.ok) {
          metricsResult = await metricsResponse.json();
        } else {
          const errorData = await metricsResponse.json();
          console.error("❌ Failed to save metrics:", errorData);
          return NextResponse.json(
            {
              success: false,
              error: "Failed to save metrics",
              details: errorData,
            },
            { status: 400 }
          );
        }
      } else {
        return NextResponse.json(
          {
            success: false,
            error: "No metrics data found",
            details: "No metrics data available",
          },
          { status: 400 }
        );
      }
    } else {
      return NextResponse.json(
        {
          success: false,
          error: "No HEALTHIE_METRICS data found",
          details: "No metrics data available",
        },
        { status: 400 }
      );
    }

    // Step 8: Get OHL_INITIAL_INTAKE data and submit form
    const intakeData = await FormDataService.getFormDataByType(
      user.id,
      FormType.OHL_INITIAL_INTAKE
    );
    let formSubmissionResult = null;

    if (intakeData.length > 0) {
      const intakeFormData = intakeData[0].formData as Record<string, unknown>;

      // Prepare OLH submission
      const olhPayload = {
        data: {
          ...intakeFormData,
          patient_id: healthiePatientId,
          intake_type: "initial",
        },
      };

      const formResponse = await fetch(
        new URL(
          `http://localhost:${process.env.PORT}/api/healthie/forms/submit`,
          request.url
        ),
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(olhPayload),
        }
      );

      if (formResponse.ok) {
        formSubmissionResult = await formResponse.json();
      } else {
        const errorData = await formResponse.json();
        console.error("❌ Failed to submit form:", errorData);
        formSubmissionResult = {
          error: "Failed to submit form",
          details: errorData,
        };
      }
    } else {
      formSubmissionResult = { message: "No intake form data available" };
    }

    // Step 8.5: Handle document upload if available
    const documentData = await FormDataService.getFormDataByType(
      user.id,
      FormType.OHL_DOCUMENT_UPLOAD
    );
    let documentUploadResult = null;

    if (documentData.length > 0) {
      const documentFormData = documentData[0].formData as any;
      
      if (documentFormData.file_string && documentFormData.display_name) {
        console.log('📤 Processing document upload for patient:', healthiePatientId);
        
        try {
          // Prepare document payload for Healthie
          const documentPayload = {
            file_string: documentFormData.file_string,
            display_name: documentFormData.display_name,
            include_in_charting: documentFormData.include_in_charting ?? true
          };

          const documentResponse = await fetch(
            new URL(
              `http://localhost:${process.env.PORT}/api/healthie/patients/${healthiePatientId}/documents`,
              request.url
            ),
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(documentPayload),
            }
          );

          if (documentResponse.ok) {
            documentUploadResult = await documentResponse.json();
            console.log('✅ Document uploaded successfully to Healthie:', documentUploadResult);
          } else {
            const errorData = await documentResponse.json();
            console.error("❌ Failed to upload document to Healthie:", errorData);
            documentUploadResult = {
              success: false,
              error: "Failed to upload document to Healthie",
              details: errorData,
            };
          }
        } catch (error) {
          console.error("❌ Document upload error:", error);
          documentUploadResult = {
            success: false,
            error: "Document upload failed",
            details: error instanceof Error ? error.message : "Unknown error",
          };
        }
      } else {
        documentUploadResult = {
          success: false,
          error: "Invalid document data: missing file_string or display_name"
        };
      }
    } else {
      documentUploadResult = { 
        success: true, 
        message: "No document upload data available - skipping document upload" 
      };
    }

    // Step 9: Create patient in our database
    let dbPatient = null;
    let medicalRecord = null;

    try {
      // Extract patient data from CREATE_PATIENT form
      const createFormData = createPatientData[0].formData as any;

      const updateFormData = updatePatientData[0].formData as any;

      const formData = {
        ...createFormData,
        ...updateFormData,
      };

      // Create or find patient in our database
      dbPatient = await PatientService.findOrCreatePatient(user.id, {
        firstName: formData.first_name || "Unknown",
        lastName: formData.last_name || "Unknown",
        email: formData.email || user.email,
        phoneNumber: formData.phone_number,
        dateOfBirth: formData.dob,
        gender: formData.gender,
        height: formData.height ? String(formData.height) : undefined,
        weight: formData.weight ? String(formData.weight) : undefined,
        address: formData.location
          ? {
              line1: formData.location.line1,
              city: formData.location.city,
              state: formData.location.state,
              zip: formData.location.zip,
            }
          : null,
      });

      // Update patient with Healthie ID
      if (healthiePatientId) {
        await PatientService.updateHealthiePatientId(
          dbPatient.id,
          healthiePatientId
        );
      }

      // Step 10: Create medical records from form data
      // Create medical record from all form data
      const allFormData = {
        create_patient: createPatientData[0]?.formData,
        update_patient: updatePatientData[0]?.formData,
        healthie_metrics: metricsData[0]?.formData,
        ohl_initial_intake: intakeData[0]?.formData,
        ohl_document_upload: documentData[0]?.formData,
      };

      medicalRecord = await PatientService.createMedicalRecord(dbPatient.id, {
        recordType: "complete_patient_flow",
        data: allFormData,
        source: "api_complete_flow",
        metadata: {
          healthiePatientId,
          dietitianId,
          flowCompletedAt: new Date().toISOString(),
        },
      });

      // Step 11: Create form submission record if OLH form was submitted
      if (
        formSubmissionResult &&
        formSubmissionResult.success &&
        intakeData.length > 0
      ) {
        await PatientService.createFormSubmission(dbPatient.id, {
          olhFormId: formSubmissionResult.data?.formReferenceId || "unknown",
          healthiePatientId,
          dietitianId,
          formType: formSubmissionResult.data?.form_type || "unknown",
          formName: formSubmissionResult.data?.form_name || "unknown",
          submissionData: intakeData[0].formData,
          olhSubmissionId: formSubmissionResult.data?.id || "unknown",
          status: "success",
          metadata: {
            apiResponse: formSubmissionResult,
            submittedAt: new Date().toISOString(),
          },
        });
      }
    } catch (error) {
      console.error("❌ Failed to create patient/medical records:", error);
      // Continue with partial success - don't fail the entire flow
    }

    const dbPatientResult: DBPatient = dbPatient
      ? {
          id: String(dbPatient.id),
          healthiePatientId: dbPatient.healthiePatientId || "",
          userId: String(dbPatient.userId),
          createdAt: dbPatient.createdAt,
          updatedAt: dbPatient.updatedAt,
        }
      : {
          id: "",
          healthiePatientId: "",
          userId: String(user.id),
          createdAt: new Date(),
          updatedAt: new Date(),
        };

    const medicationResult = {
      message: "Medication data created as part of medical records",
      includedInMedicalRecord: !!medicalRecord,
    };

    return NextResponse.json({
      success: true,
      data: {
        user: {
          id: String(user.id),
          email: user.email,
          auth0Id: user.auth0UserId,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        },
        dietitian: dietitianData.data,
        healthiePatient: healthiePatientResult.data,
        updatedPatient: updatedPatientResult,
        metricsResult,
        formSubmissionResult,
        documentUploadResult,
        dbPatient: dbPatientResult,
        medicationData: medicationResult,
      },
    });
  } catch (error) {
    console.error("❌ Complete patient flow failed:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Complete patient flow failed",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
