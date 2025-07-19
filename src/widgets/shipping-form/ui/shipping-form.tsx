'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { shippingFormSchema, ShippingFormData, US_STATES } from '../schemas/shipping';
import { TextInputField } from '@/shared/ui/molecules/text-input-field';
import { SelectField } from '@/shared/ui/molecules/select-field';
import { Button } from '@/shared/ui/button';
import { useOnboarding } from '@/features/onboarding-flow/hooks/use-onboarding';
import { useFormData } from '@/shared/hooks/useFormData';
import { FormType } from '@/shared/types/form-types';

export interface ShippingFormProps {
  defaultValues?: Partial<ShippingFormData>;
  className?: string;
}

export const ShippingForm: React.FC<ShippingFormProps> = ({
  defaultValues = {},
  className,
}) => {
  const { next } = useOnboarding();
  const { save: saveFormData } = useFormData();

  console.log('🔍 ShippingForm received defaultValues:', defaultValues);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ShippingFormData>({
    resolver: zodResolver(shippingFormSchema),
    defaultValues,
  });

  const watchedState = watch('shipping_state');

  console.log('🔍 ShippingForm - watchedState:', watchedState);

  const handleFormSubmit = async (data: ShippingFormData) => {
    console.log('Shipping form submitted:', data);

    // Save in OLH format for initial intake (only shipping fields)
    const olhData = {
      shipping_address_line_1: data.shipping_address_line_1,
      shipping_city: data.shipping_city,
      shipping_state: data.shipping_state,
      shipping_zip: data.shipping_zip
    };
    await saveFormData(FormType.OHL_INITIAL_INTAKE, olhData);

    // Save location data for UPDATE_PATIENT
    const locationData = {
      location: {
        state: data.shipping_state,
        city: data.shipping_city,
        zip: data.shipping_zip,
        line1: data.shipping_address_line_1,
        line2: data.aptSuite || "",
        country: "US"
      }
    };
    await saveFormData(FormType.UPDATE_PATIENT, locationData);

    // Save phone number for CREATE_PATIENT (format: 000-000-0000)
    const formatPhoneNumber = (phone: string) => {
      // Remove all non-digits
      const digits = phone.replace(/\D/g, '');
      // Format as 000-000-0000 if 10 digits, otherwise return as-is
      if (digits.length === 10) {
        return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
      }
      return phone;
    };

  
    await saveFormData(FormType.CREATE_PATIENT, {
      first_name: data.firstName,
      last_name: data.lastName,
      phone_number: formatPhoneNumber(data.phone)
    });


    next();
  };

  console.log('ShippingForm rendered', errors);

  return (
    <div className={className}>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Shipping Details
        </h2>
        <p className="text-gray-600">
          Please provide your shipping information for delivery.
        </p>
      </div>

      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
        {/* First Name and Last Name Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextInputField
            placeholder="First Name"
            textSize="24px"
            height="md"
            error={errors.firstName?.message}
            {...register('firstName')}
          />

          <TextInputField
            placeholder="Last Name"
            textSize="24px"
            height="md"
            error={errors.lastName?.message}
            {...register('lastName')}
          />
        </div>

        {/* Address */}
        <TextInputField
          placeholder="Address"
          textSize="24px"
          height="md"
          error={errors.shipping_address_line_1?.message}
          {...register('shipping_address_line_1')}
        />

        {/* Apt/Suite */}
        <TextInputField
          placeholder="Apt/Suite (Optional)"
          textSize="24px"
          height="md"
          error={errors.aptSuite?.message}
          {...register('aptSuite')}
        />

        {/* City */}
        <TextInputField
          placeholder="City"
          textSize="24px"
          height="md"
          error={errors.shipping_city?.message}
          {...register('shipping_city')}
        />

        {/* State and Zip Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SelectField
            placeholder="State"
            textSize="24px"
            height="md"
            options={US_STATES as unknown as Array<{ value: string; label: string }>}
            value={watchedState || ''}
            onValueChange={(value) => setValue('shipping_state', value)}
            error={errors.shipping_state?.message}
          />

          <TextInputField
            placeholder="Zip Code"
            textSize="24px"
            height="md"
            error={errors.shipping_zip?.message}
            {...register('shipping_zip')}
          />
        </div>

        {/* Phone */}
        <TextInputField
          placeholder="Phone Number"
          type="tel"
          textSize="24px"
          height="md"
          error={errors.phone?.message}
          {...register('phone')}
        />

        {/* Submit Button */}
        <div className="pt-6">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full"
          >
            {isSubmitting ? 'Saving...' : 'Continue'}
          </Button>
        </div>
      </form>
    </div>
  );
}; 