'use client';

import { useState } from 'react';
import { QAPageTemplate } from '@/shared/ui/templates';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select';
import { Checkbox } from '@/shared/ui/checkbox';
import { Text } from '@/shared/ui/typography';
import { ContinueButton } from '@/shared/ui/atoms/continue-button';
import { useOnboarding } from '@/features/onboarding-flow/hooks/use-onboarding';
import { GradientText } from '@/shared/ui/atoms';
import { useFormData } from '@/shared/hooks/useFormData';
import { FormType } from '@/shared/types/form-types';

const US_STATES = [
  { value: 'AL', label: 'Alabama' },
  { value: 'AK', label: 'Alaska' },
  { value: 'AZ', label: 'Arizona' },
  { value: 'AR', label: 'Arkansas' },
  { value: 'CA', label: 'California' },
  { value: 'CO', label: 'Colorado' },
  { value: 'CT', label: 'Connecticut' },
  { value: 'DE', label: 'Delaware' },
  { value: 'FL', label: 'Florida' },
  { value: 'GA', label: 'Georgia' },
  { value: 'HI', label: 'Hawaii' },
  { value: 'ID', label: 'Idaho' },
  { value: 'IL', label: 'Illinois' },
  { value: 'IN', label: 'Indiana' },
  { value: 'IA', label: 'Iowa' },
  { value: 'KS', label: 'Kansas' },
  { value: 'KY', label: 'Kentucky' },
  { value: 'LA', label: 'Louisiana' },
  { value: 'ME', label: 'Maine' },
  { value: 'MD', label: 'Maryland' },
  { value: 'MA', label: 'Massachusetts' },
  { value: 'MI', label: 'Michigan' },
  { value: 'MN', label: 'Minnesota' },
  { value: 'MS', label: 'Mississippi' },
  { value: 'MO', label: 'Missouri' },
  { value: 'MT', label: 'Montana' },
  { value: 'NE', label: 'Nebraska' },
  { value: 'NV', label: 'Nevada' },
  { value: 'NH', label: 'New Hampshire' },
  { value: 'NJ', label: 'New Jersey' },
  { value: 'NM', label: 'New Mexico' },
  { value: 'NY', label: 'New York' },
  { value: 'NC', label: 'North Carolina' },
  { value: 'ND', label: 'North Dakota' },
  { value: 'OH', label: 'Ohio' },
  { value: 'OK', label: 'Oklahoma' },
  { value: 'OR', label: 'Oregon' },
  { value: 'PA', label: 'Pennsylvania' },
  { value: 'RI', label: 'Rhode Island' },
  { value: 'SC', label: 'South Carolina' },
  { value: 'SD', label: 'South Dakota' },
  { value: 'TN', label: 'Tennessee' },
  { value: 'TX', label: 'Texas' },
  { value: 'UT', label: 'Utah' },
  { value: 'VT', label: 'Vermont' },
  { value: 'VA', label: 'Virginia' },
  { value: 'WA', label: 'Washington' },
  { value: 'WV', label: 'West Virginia' },
  { value: 'WI', label: 'Wisconsin' },
  { value: 'WY', label: 'Wyoming' },
];

export function LocationVerificationWidget() {
  const { next } = useOnboarding();
  const { save: saveFormData } = useFormData();
  const [selectedState, setSelectedState] = useState<string>('');
  const [termsAccepted, setTermsAccepted] = useState<boolean>(false);


  const handleContinue = async () => {
    if (!selectedState || !termsAccepted) return;
    try {
      await saveFormData(FormType.UPDATE_PATIENT, {
        location: {
          state: selectedState,
        }
      })
      await next();
      console.log('✅ Location verified, proceeding to next step');
    } catch (error) {
      console.error('❌ Error saving location data:', error);
    }
  };




  return (
    <QAPageTemplate
      maxWidth="2xl"
      title={
        <GradientText gradient="purple-blue">
          Getting started
        </GradientText>
      }
      titleAlign="center"
      titleClassName="text-lg sm:text-[24px] font-semibold mb-0 text-center"
      question="Treatment on your terms"
      questionClassName="text-xl sm:text-[40px] font-medium text-black text-center mb-4"
      actions={
        <ContinueButton
          onClick={handleContinue}
          disabled={!selectedState || !termsAccepted}
        />
      }
    >
      <div className="space-y-6 mx-auto">
        <div>
          <Text className="text-base sm:text-[24px] font-light text-black text-center">
            First, we need to make sure we have healthcare providers in your state
          </Text>
        </div>
        {/* State Selection */}
        <div className="space-y-3">
          <div className="mb-7">
            <Text className="text-base sm:text-[24px] font-bold text-black text-center">
              I live in...
            </Text>
          </div>
          <Select value={selectedState} onValueChange={setSelectedState}>
            <SelectTrigger className="w-full min-h-[48px] sm:min-h-[64px] max-h-[64px] bg-white border border-gray-300 rounded-lg text-base sm:text-[24px] px-2 py-2 sm:px-3 sm:py-2">
              <SelectValue placeholder="Select State" />
            </SelectTrigger>
            <SelectContent className="w-full text-base sm:text-[24px]">
              {US_STATES.map((state) => (
                <SelectItem key={state.value} value={state.value} className="py-3 text-base sm:py-1.5 sm:text-sm">
                  {state.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Terms and Conditions */}
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <Checkbox
              id="terms"
              checked={termsAccepted}
              onCheckedChange={(checked) => setTermsAccepted(checked === true)}
              className="mt-0.5"
            />
            <label
              htmlFor="terms"
              className="text-sm text-gray-700 leading-relaxed cursor-pointer"
            >
              By clicking &quot;Continue&quot; I agree to the{' '}
              <a
                href="/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 underline"
              >
                Terms and Conditions
              </a>{' '}
              and{' '}
              <a
                href="/telehealth-consent"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 underline"
              >
                Telehealth Consent
              </a>{' '}
              and acknowledge the{' '}
              <a
                href="/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 underline"
              >
                Privacy Policy
              </a>
            </label>
          </div>
        </div>
      </div>
    </QAPageTemplate>
  );
}