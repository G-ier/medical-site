import React from 'react';
import { cn } from '@/shared/lib/utils';
import { OptimizedImage } from './image';

export interface OverlappingImagesProps {
  primaryImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  secondaryImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  layout?: 'default' | 'reversed' | 'vertical';
  overlap?: 'small' | 'medium' | 'large';
  borderRadius?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const OverlappingImages: React.FC<OverlappingImagesProps> = ({
  primaryImage,
  secondaryImage,
  layout = 'default',
  overlap = 'medium',
  borderRadius = 'lg',
  className
}) => {
  const containerClasses = cn(
    'relative w-full',
    className
  );

  const overlapValues = {
    small: '70%',
    medium: '80%',
    large: '90%'
  };

  const borderRadiusClasses = {
    none: '',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl'
  };

  const primaryImageClasses = cn(
    'relative z-10',
    borderRadiusClasses[borderRadius],
    'w-full max-w-full sm:max-w-[340px]'
  );

  const secondaryImageClasses = cn(
    'absolute z-20',
    borderRadiusClasses[borderRadius],
    'w-full max-w-full sm:max-w-[340px]',
    {
      // Default layout: secondary image on right side, overlapping
      'top-[40%] right-0': layout === 'default',
      // Reversed layout: secondary image on left side
      'top-[40%] left-0 sm:left-[-100px]': layout === 'reversed',
      // Vertical layout: secondary image below, overlapping
      'bottom-0 left-1/4 translate-y-[15%]': layout === 'vertical',
    }
  );

  return (
    <div
      className={containerClasses}
    >
      {/* Primary Image (Background) */}
      <div className={primaryImageClasses}>
        <OptimizedImage
          src={primaryImage.src}
          alt={primaryImage.alt}
          width={primaryImage.width}
          height={primaryImage.height}
          className={cn("w-full h-auto object-cover", borderRadiusClasses[borderRadius])}
        />
      </div>

      {/* Secondary Image (Overlapping) */}
      <div
        className={secondaryImageClasses}
        style={{
          width: overlapValues[overlap],
          aspectRatio: `${secondaryImage.width}/${secondaryImage.height}`
        }}
      >
        <OptimizedImage
          src={secondaryImage.src}
          alt={secondaryImage.alt}
          width={secondaryImage.width}
          height={secondaryImage.height}
          className={cn("w-full h-auto object-cover", borderRadiusClasses[borderRadius])}
        />
      </div>
    </div>
  );
}; 