import React from 'react';
import { cn } from '@/shared/lib/utils';

interface LegalTextProps {
  children: React.ReactNode;
  variant?: 'default' | 'disclaimer' | 'small';
  className?: string;
}

const variantClasses = {
  default: 'text-sm text-gray-900 leading-relaxed',
  disclaimer: 'text-xs text-gray-600 leading-relaxed',
  small: 'text-xs text-gray-500 leading-normal'
};

export const LegalText: React.FC<LegalTextProps> = ({
  children,
  variant = 'default',
  className
}) => {
  return (
    <div className={cn(variantClasses[variant], className)}>
      {children}
    </div>
  );
};

export default LegalText; 