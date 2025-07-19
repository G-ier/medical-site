'use client';

import { useCallback, useState } from 'react';
import Link from 'next/link';
import { QAPageTemplate } from '@/shared/ui/templates';
import { ContinueButton } from '@/shared/ui/atoms';
import { useOnboarding } from '@/features/onboarding-flow/hooks/use-onboarding';
import { TextInput } from '@/shared/ui';
import { useFormData } from '@/shared/hooks';
import { FormType } from '@/shared/types/form-types';

export interface SsnIdentityVerificationProps {
  className?: string;
}

export function SsnIdentityVerification({ className }: SsnIdentityVerificationProps) {
  const { next } = useOnboarding();
  const [ssn, setSsn] = useState('');
  const { save: saveFormData } = useFormData();

  const handleContinue = useCallback(async () => {
    await saveFormData(FormType.SSN_IDENTITY_VERIFICATION, { ssn });
    await next();
  }, [next, saveFormData, ssn]);



  return (
    <QAPageTemplate
      title="Please provide the last 4 digits of your social security number."
      titleClassName="text-[36px] font-bold text-black text-left"
      question="To continue with treatment, we need to identify your identity."
      questionClassName="text-[24px] text-gray-600 text-left"
      actions={<ContinueButton onClick={handleContinue} />}
      className={className}
      maxWidth="xl"
    >
      <div className="mb-8">
        <Link href='/' className="text-[#A80505] text-[16px] font-light">Why do we need this?</Link>
      </div>
      <div className="mb-8">
        <TextInput
          label=""
          placeholder="Last 4 digits of SSN"
          value={ssn}
          onChange={(e) => setSsn(e.target.value)}
          className="w-full"
        />
      </div>
      <div className="mb-8">
        <p className="text-[#A80505] text-[16px] font-light">Don&apos;t want to provide this? You can upload a photo of your ID instead.</p>
      </div>
    </QAPageTemplate>
  );
}