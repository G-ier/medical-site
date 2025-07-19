import React from 'react';
import { cn } from '@/shared/lib/utils';
import { SocialIcon } from './social-icon';

interface SocialLink {
  platform: 'facebook' | 'instagram' | 'twitter' | 'tiktok' | 'linkedin';
  href: string;
}

interface SocialLinksProps {
  links: SocialLink[];
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  links,
  size = 'md',
  className
}) => {
  return (
    <div className={cn('flex items-center space-x-4', className)}>
      {links.map((link, index) => (
        <SocialIcon
          key={index}
          platform={link.platform}
          href={link.href}
          size={size}
        />
      ))}
    </div>
  );
};

export default SocialLinks; 