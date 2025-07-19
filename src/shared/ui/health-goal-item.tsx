import React from 'react';
import { cn } from '@/shared/lib/utils';
import { OptimizedImage } from './image';
import { SanityImage } from '@/shared/types/sanity';
import { urlFor } from '@/shared/lib/sanity';

export interface HealthGoalItemProps {
  image: SanityImage;
  title: string;
  description: string;
  variant?: 'default' | 'compact';
  className?: string;
}

export const HealthGoalItem: React.FC<HealthGoalItemProps> = ({
  image,
  title,
  description,
  className
}) => {
  const containerClasses = cn(
    'flex items-start gap-1',
    className
  );

  let imageUrl = '';
  if (image?.asset) {
    const imageBuilder = urlFor(image);
    if ('width' in imageBuilder) {
      imageUrl = imageBuilder.width(48).height(48).fit('max').auto('format').url();
    } else {
      imageUrl = imageBuilder.url();
    }
  }

  return (
    <div className={containerClasses}>
      {/* Icon */}
      <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16">
        <OptimizedImage
          src={imageUrl}
          alt={image?.alt || title}
          width={48}
          height={48}
          className="w-8 h-8 sm:w-12 sm:h-12"
        />
      </div>

      {/* Content */}
      <div className="flex-1 space-y-2">
        {/* Title */}
        <h3 className="text-base sm:text-[24px] font-medium text-[#171717] leading-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[#171717CC] text-sm sm:text-[16px] leading-relaxed font-normal">
          {description}
        </p>
      </div>
    </div>
  );
}; 