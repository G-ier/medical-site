'use client';

import { useEffect, useState } from 'react';
import { QAPageTemplate } from '@/shared/ui/templates/qa-page-template';
import { Calendar } from '@/shared/ui/calendar';
import { Text } from '@/shared/ui/typography';
import { ContinueButton } from '@/shared/ui/atoms/continue-button';
import { GradientText } from '@/shared/ui/atoms';
import { useOnboarding } from '@/features/onboarding-flow/hooks/use-onboarding';
import { TextInput } from '@/shared/ui/text-input';
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/popover';
import { format, parse, isValid } from 'date-fns';
import { FormType } from '@/shared/types/form-types';
import { useFormData } from '@/shared/hooks';
import { US_STATES } from '@/widgets/shipping-form/schemas/shipping';
import { useRouter } from 'next/navigation';

// Helper function to calculate age from birth date
const calculateAge = (birthDate: Date): number => {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
};

// Helper to parse MM/DD/YYYY format
const parseInputDate = (dateString: string): Date | null => {
  if (!dateString || dateString.length < 8) return null;

  // Remove any non-digit characters except /
  const cleaned = dateString.replace(/[^\d\/]/g, '');

  // Parse MM/DD/YYYY format
  try {
    const parsedDate = parse(cleaned, 'MM/dd/yyyy', new Date());
    return isValid(parsedDate) ? parsedDate : null;
  } catch {
    return null;
  }
};

// Helper to format date for input display
const formatInputDate = (date: Date): string => {
  return format(date, 'MM/dd/yyyy');
};

export interface AgeVerificationWidgetProps {
  className?: string;
}

export function AgeVerificationWidget({ className }: AgeVerificationWidgetProps) {
  const router = useRouter();
  const { next } = useOnboarding();
  const { save: saveFormData, get: getFormData } = useFormData();
  const [date, setDate] = useState<Date>();
  const [inputValue, setInputValue] = useState<string>('');
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [error, setError] = useState<string>('');
  const [state, setState] = useState<string>('');



  useEffect(() => {
    const fetchState = async () => {
      const state: any = await getFormData(FormType.UPDATE_PATIENT);
      const stateCode = state.data.formData['location']?.state || ''
      const stateName = US_STATES.find(s => s.value === stateCode)?.label || ''
      setState(stateName);
    };
    fetchState();
  }, [getFormData]);

  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      setDate(selectedDate);
      setInputValue(formatInputDate(selectedDate));
      setIsPopoverOpen(false);
      // Clear error when valid date is selected
      setError('');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Remove all non-digits
    const numbersOnly = value.replace(/\D/g, '');

    // Format as MM/DD/YYYY
    let formattedValue = '';
    if (numbersOnly.length > 0) {
      formattedValue = numbersOnly.substring(0, 2);
      if (numbersOnly.length > 2) {
        formattedValue += '/' + numbersOnly.substring(2, 4);
        if (numbersOnly.length > 4) {
          formattedValue += '/' + numbersOnly.substring(4, 8);
        }
      }
    }

    setInputValue(formattedValue);

    // Try to parse the input only if we have complete date
    if (numbersOnly.length === 8) {
      const parsedDate = parseInputDate(formattedValue);
      if (parsedDate) {
        setDate(parsedDate);
        setError('');
      } else {
        setError('Please enter a valid date (MM/DD/YYYY)');
      }
    } else {
      // Clear error while typing
      setError('');
    }
  };

  const handleInputBlur = () => {
    // Final validation on blur
    if (inputValue && !date) {
      setError('Please enter a valid date (MM/DD/YYYY)');
    }
  };

  const handleContinue = async () => {
    try {
      if (!date) {
        setError('Please select your birth date');
        return;
      }

      const age = calculateAge(date);

      if (age < 18) {
        router.push('/refused');
        return;
      }

      setError('');

      await saveFormData(FormType.UPDATE_PATIENT, { dob: date.toLocaleDateString('en-GB') });
      await next();
      console.log('Successfully navigated to next step');
    } catch (error) {
      console.error('Error navigating to next step:', error);
      setError('An error occurred. Please try again.');
    }
  };


  const isFormValid = date && !error;

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
      question={`We're all good in ${state}`}
      questionClassName="text-xl sm:text-[40px] font-medium text-black text-center mb-4"
      actions={
        <ContinueButton
          onClick={handleContinue}
          disabled={!isFormValid}
        />
      }
      showBackButton={true}
      className={className}
    >
      <div className="space-y-6">
        <div>
          <Text className="text-base sm:text-[24px] font-light text-black text-center">
            Good news! We can connect you to a healthcare provider in {state}. Next, we need to confirm your age.
          </Text>
        </div>

        {/* Date of Birth Input with Calendar Popover */}
        <div className="space-y-3">
          <div className="mb-7">
            <Text className="text-base sm:text-[24px] font-bold text-black text-center">
              I was born on...
            </Text>
          </div>

          <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
            <PopoverTrigger asChild>
              <div>
                <TextInput
                  type="text"
                  placeholder="MM/DD/YYYY"
                  value={inputValue}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                  maxLength={10}
                  variant="custom"
                  width="100%"
                  height="48px"
                  fontSize="16px"
                  textAlign="left"
                  borderRadius="8px"
                  className="bg-white border border-gray-300 px-2 py-3 text-base sm:px-4 sm:py-6 sm:text-[24px] font-normal cursor-pointer w-full"
                  onClick={() => setIsPopoverOpen(true)}
                />
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-full sm:w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={handleDateSelect}
                disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                captionLayout="dropdown"
                fromYear={1900}
                toYear={new Date().getFullYear()}
                initialFocus
              />
            </PopoverContent>
          </Popover>

          {/* ✅ ADDED: Display validation errors */}
          {error && (
            <div className="mt-2">
              <Text className="text-red-600 text-[16px]">
                {error}
              </Text>
            </div>
          )}
        </div>

      </div>
    </QAPageTemplate>
  );
} 