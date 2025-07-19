import React from 'react';
import { cn } from '@/shared/lib/utils';

interface FooterColumnProps {
  title: string;
  links: Array<{
    label: string;
    href: string;
    isExternal?: boolean;
  }>;
  className?: string;
}

export const FooterColumn: React.FC<FooterColumnProps> = ({
  title,
  links,
  className
}) => {
  return (
    <div className={cn('space-y-4', className)}>
      <span className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
        {title}
      </span>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              target={link.isExternal ? '_blank' : undefined}
              rel={link.isExternal ? 'noopener noreferrer' : undefined}
              className="text-sm text-gray-900 hover:text-gray-700 transition-colors duration-200"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn; 