import React from 'react';
import { InternalHeader } from '../organisms/internal-header';
import { Footer } from '../footer';
import { getGlobalFooter } from '../../lib/globalData';
import { ProtectedInternalContent } from './protected-internal-content';

interface InternalPageTemplateProps {
  children: React.ReactNode;
  requireAuth?: boolean;
  redirectTo?: string;
}

export default async function InternalPageTemplate({ 
  children, 
  requireAuth = true, 
  redirectTo = '/auth/login' 
}: InternalPageTemplateProps) {
  const footerDataRaw = await getGlobalFooter();
  const footerData = footerDataRaw
    ? {
        ...footerDataRaw,
        complianceInfo: { compoundedText: 'Compounded in the U.S.A.' },
      }
    : null;

  return (
    <ProtectedInternalContent requireAuth={requireAuth} redirectTo={redirectTo}>
      <div className="min-h-screen bg-white flex flex-col">
        <div className="w-full gradient-onboarding-bg">
          <div>
            <InternalHeader />
          </div>
          <div className="px-6 pt-8 pb-[100px] min-h-[300px] gradient-onboarding-bg">
            {children}
          </div>
        </div>
        <div className="mt-[100px]">
          {footerData && <Footer data={footerData} />}
        </div>
      </div>
    </ProtectedInternalContent>
  );
} 