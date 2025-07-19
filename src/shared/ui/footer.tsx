import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/shared/lib/utils";
import { Container } from "./container";
import { ContactInfo } from "./contact-info";
import { FooterColumn } from "./footer-column";
import { SocialLinks } from "./social-links";
import { LegalText } from "./legal-text";
import { LegalLinks } from "./legal-links";
import { USFlag } from "./us-flag";

interface FooterData {
  contact: {
    phone: string;
    email: string;
    ctaText: string;
    ctaHref: string;
  };
  columns: Array<{
    title: string;
    links: Array<{
      label: string;
      href: string;
      isExternal?: boolean;
    }>;
  }>;
  socialLinks: Array<{
    platform: "facebook" | "instagram" | "twitter" | "tiktok" | "linkedin";
    href: string;
  }>;
  middleLinks: Array<{
    label: string;
    href: string;
  }>;
  complianceInfo: {
    compoundedText: string;
    iconAlt?: string;
  };
  legalDisclaimer: string;
  legalLinks: Array<{
    label: string;
    href: string;
  }>;
  copyright: string;
}

const footerVariants = cva("relative bg-[#e7e5f4] border-t border-white/20", {
  variants: {
    horizontalMargin: {
      none: "",
      sm: "mx-2",
      md: "mx-4",
      lg: "mx-6",
      xl: "mx-8",
    },
    borderRadius: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      "2xl": "rounded-2xl",
      "3xl": "rounded-3xl",
    },
  },
  defaultVariants: {
    horizontalMargin: "md",
    borderRadius: "2xl",
  },
});

interface FooterProps extends VariantProps<typeof footerVariants> {
  data: FooterData;
  className?: string;
}

const Footer: React.FC<FooterProps> = ({
  data,
  className,
  horizontalMargin = "md",
  borderRadius = "2xl",
}) => {
  return (
    <footer
      className={cn(
        footerVariants({ horizontalMargin, borderRadius }),
        className
      )}
    >
      <Container maxWidth="9xl" className="py-12 px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Contact Info - Left Column */}
          <div className="lg:col-span-3">
            <ContactInfo
              phone={data.contact.phone}
              email={data.contact.email}
              ctaText={data.contact.ctaText}
              ctaHref={data.contact.ctaHref}
            />
          </div>

          {/* Navigation Columns - Middle */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {data.columns.map((column, index) => (
                <FooterColumn
                  key={index}
                  title={column.title}
                  links={column.links}
                />
              ))}
            </div>
          </div>

          {/* Empty Right Column */}
          <div className="lg:col-span-3"></div>
        </div>

        {/* Middle Section - Navigation Links */}
        <div className="my-8 py-8 border-t border-b border-[#171717]/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              {data.middleLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-sm text-gray-900 hover:text-gray-700 transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <SocialLinks links={data.socialLinks} size="sm" />
          </div>
        </div>

        {/* Legal Section */}
        <div className="flex mt-8 pt-8  mx-auto">
          {/* Compliance Info */}
          <div className="mb-8  min-w-[300px] max-[800px]:hidden">
            <div className="flex items-start justify-between">
              {/* Left Block - Vertical Stack */}
              <div className="flex flex-col items-start space-y-3">
                <span className="text-sm font-medium text-gray-900">
                  Compounded
                </span>
                <USFlag size="medium" alt="US Flag" />
                <span className="text-sm font-medium text-gray-900">
                  in the U.S.A.
                </span>
              </div>
            </div>
          </div>

          <div>
            {/* Legal Disclaimer */}
            <div className="mb-8">
              <LegalText variant="disclaimer">{data.legalDisclaimer}</LegalText>
            </div>

            {/* Legal Links & Copyright */}
            <LegalLinks links={data.legalLinks} copyright={data.copyright} />
          </div>
        </div>
        <div className="mt-8  min-w-[300px] hidden max-[800px]:block">
          <div className="flex items-start justify-between">
            {/* Left Block - Vertical Stack */}
            <div className="flex flex-col items-start space-y-3">
              <span className="text-sm font-medium text-gray-900">
                Compounded
              </span>
              <USFlag size="medium" alt="US Flag" />
              <span className="text-sm font-medium text-gray-900">
                in the U.S.A.
              </span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export { Footer, footerVariants };
