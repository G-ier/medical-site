import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Button } from './button';
import { Logo } from './logo';

interface ContactInfoProps {
  phone: string;
  email: string;
  ctaText: string;
  ctaHref: string;
  className?: string;
}

export const ContactInfo: React.FC<ContactInfoProps> = ({
  phone,
  email,
  ctaText,
  ctaHref,
  className
}) => {
  return (
    <div className={cn('space-y-6', className)}>
      {/* Logo */}
      <div>
        <Logo 
          size="medium" 
          color="default"
          alt="Rejuve Logo"
        />
      </div>

      {/* Contact Information */}
      <div className="space-y-2">
        <div>
          <a 
            href={`tel:${phone.replace(/\D/g, '')}`}
            className="text-sm text-gray-900 hover:text-gray-700 transition-colors duration-200"
          >
            {phone}
          </a>
        </div>
        <div>
          <a 
            href={`mailto:${email}`}
            className="text-sm text-gray-900 hover:text-gray-700 transition-colors duration-200"
          >
            {email}
          </a>
        </div>
      </div>

      {/* CTA Button */}
      <div>
        <Button
          variant="default"
          size="sm"
          className="rounded-full px-6 py-2"
          asChild
        >
          <a href={ctaHref}>{ctaText}</a>
        </Button>
      </div>
    </div>
  );
};

export default ContactInfo; 