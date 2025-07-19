import React from 'react';
import Image from 'next/image';
import { cn } from '@/shared/lib/utils';

export interface HealthGainsCardProps {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  variant?: 'default' | 'compact' | 'large';
  className?: string;
}

export const HealthGainsCard: React.FC<HealthGainsCardProps> = ({
  title,
  description,
  image,
  className
}) => {
  const containerClasses = cn(
    'w-full max-w-[500px] min-h-[350px] sm:min-h-[700px] p-4 rounded-lg overflow-hidden',
    'bg-gradient-to-br from-[rgba(186,171,218,0.10)] to-[rgba(214,229,250,0.10)]',
    'flex flex-col',
    className
  );

  return (
    <div className={containerClasses}>
      {/* Text Content - Top */}
      <div className="space-y-4 mb-6">
        {/* Title */}
        <h3 className="text-[24px] font-medium text-[#171717] leading-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[#171717CC] text-[17px] leading-relaxed font-normal">
          {description}
        </p>
      </div>

      {/* Image - Bottom */}
      <div className="relative flex-shrink-0">
        <div className="relative overflow-hidden rounded-lg">
          <Image
            src={image.src}
            alt={image.alt}
            width={500}
            height={300}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}; 