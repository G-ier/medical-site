'use client';

import { cn } from '@/shared/lib/utils';

export interface PageHeaderProps {
  title: string;
  eyebrow?: string;
  subtitle?: string;
  className?: string;
}

export function PageHeader({
  title,
  eyebrow,
  subtitle,
  className
}: PageHeaderProps) {
  return (
    <div className={cn('text-center space-y-2', className)}>
      {/* Eyebrow text */}
      {eyebrow && (
        <p className="text-sm text-orange-500 font-medium uppercase tracking-wide">
          {eyebrow}
        </p>
      )}
      
      {/* Main title */}
      <h1 className="text-xl font-semibold text-gray-900 leading-tight">
        {title}
      </h1>
      
      {/* Subtitle */}
      {subtitle && (
        <p className="text-gray-600 text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
} 