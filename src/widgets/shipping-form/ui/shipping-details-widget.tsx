import React, { useEffect, useState } from 'react';
import { QAPageTemplate } from "@/shared/ui/templates";
import { ShippingForm } from "./shipping-form";
import { useFormData } from '@/shared/hooks/useFormData';
import { FormType } from '@/shared/types/form-types';
import { ShippingFormData } from '../schemas/shipping';

export function ShippingDetailsWidget() {
    const { get: getFormData } = useFormData();
    const [formDefaults, setFormDefaults] = useState<Partial<ShippingFormData>>({});
    const [isLoadingData, setIsLoadingData] = useState(true);

    // Fetch existing data for prefilling
    useEffect(() => {
        const fetchExistingData = async () => {
            try {
                setIsLoadingData(true);
                
                // Fetch CREATE_PATIENT data for first name and last name
                const createPatientData: any = await getFormData(FormType.CREATE_PATIENT);
                
                // Fetch UPDATE_PATIENT data for state
                const updatePatientData: any = await getFormData(FormType.UPDATE_PATIENT);
                
                // Prepare default values
                const defaults: Partial<ShippingFormData> = {};
                
                // Set names from CREATE_PATIENT
                if (createPatientData?.data?.formData) {
                    const patientData = createPatientData.data.formData;
                    if (patientData.first_name) {
                        defaults.firstName = patientData.first_name;
                    }
                    if (patientData.last_name) {
                        defaults.lastName = patientData.last_name;
                    }
                    if (patientData.phone_number) {
                        defaults.phone = patientData.phone_number;
                    }
                }
                
                // Set state from UPDATE_PATIENT
                if (updatePatientData?.data?.formData?.location) {
                    const location = updatePatientData.data.formData.location;
                    if (location.state) {
                        defaults.shipping_state = location.state;
                        console.log('🔍 Setting state from UPDATE_PATIENT:', location.state);
                    }
                    if (location.city) {
                        defaults.shipping_city = location.city;
                    }
                    if (location.zip) {
                        defaults.shipping_zip = location.zip;
                    }
                    if (location.line1) {
                        defaults.shipping_address_line_1 = location.line1;
                    }
                    if (location.line2) {
                        defaults.aptSuite = location.line2;
                    }
                }
                
                console.log('🔍 Widget fetched defaults:', defaults);
                setFormDefaults(defaults);
                
            } catch (error) {
                console.error('Error fetching existing data:', error);
                setFormDefaults({});
            } finally {
                setIsLoadingData(false);
            }
        };

        fetchExistingData();
    }, [getFormData]);

    return (
        <QAPageTemplate
            title=""
            question=""
            showBackButton={true}
            maxWidth="xl"
        >
            {isLoadingData ? (
                <div className="text-center py-8">
                    <p className="text-gray-600">Loading your information...</p>
                </div>
            ) : (
                <ShippingForm defaultValues={formDefaults}  className='mt-8'/>
            )}
        </QAPageTemplate>
    );
}