import React from 'react';
import { cn } from '@/shared/lib/utils';

interface LegalLink {
  label: string;
  href: string;
}

interface LegalLinksProps {
  links: LegalLink[];
  copyright: string;
  className?: string;
}

export const LegalLinks: React.FC<LegalLinksProps> = ({
  links,
  copyright,
  className
}) => {
  return (
    <div className={cn('flex flex-col gap-2.5', className)}>
      {/* Legal Links */}
      <div className="flex flex-wrap items-center gap-6">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="text-xs text-gray-600 hover:text-gray-900 transition-colors duration-200 underline py-3 px-2 min-h-[44px] flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-sm"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Copyright */}
      <div className="text-xs text-gray-600">
        {copyright}
      </div>
    </div>
  );
};

export default LegalLinks; 