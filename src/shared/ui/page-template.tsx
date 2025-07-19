import * as React from "react"
import { HeaderMinimal } from "./header-minimal"
import { InfoBar } from "./info-bar"
import { type TrustIndicatorItem } from "./trust-indicators"
import { Footer } from "./footer"
import { cn } from "@/shared/lib/utils"
import { getGlobalData } from "@/shared/lib/globalData"

interface HeaderConfig {
  logoHref?: string
  onMenuClick?: () => void
  showMenuButton?: boolean
  sticky?: boolean
  shadow?: "none" | "sm" | "md"
}

interface InfoBarConfig {
  trustIndicators: TrustIndicatorItem[]
  shadow?: "none" | "sm" | "md"
}

interface FooterConfig {
  contact: {
    logoText?: string // Optional since it will be static
    phone: string
    email: string
    ctaText: string
    ctaHref: string
  }
  columns: Array<{
    title: string
    links: Array<{
      label: string
      href: string
      isExternal?: boolean
    }>
  }>
  socialLinks: Array<{
    platform: 'facebook' | 'instagram' | 'twitter' | 'tiktok' | 'linkedin'
    href: string
  }>
  middleLinks: Array<{
    label: string
    href: string
  }>
  complianceInfo: {
    compoundedText: string
    iconAlt?: string
  }
  legalDisclaimer: string
  legalLinks: Array<{
    label: string
    href: string
  }>
  copyright: string
}

interface PageTemplateProps {
  children: React.ReactNode
  header?: HeaderConfig | null // null for pages without header
  infoBar?: InfoBarConfig | null // null for pages without info bar
  footer?: FooterConfig | null // null for pages without footer
  className?: string
  main?: {
    className?: string
    paddingTop?: "none" | "header" | "custom"
    maxWidth?: "default" | "full" | "lg" | "xl"
    padding?: "none" | "sm" | "md" | "lg" | "xl"
    background?: "transparent" | "white" | "gray"
  }
  footerStyle?: {
    horizontalMargin?: "none" | "sm" | "md" | "lg" | "xl"
    borderRadius?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"
    bottomMargin?: "none" | "sm" | "md" | "lg" | "xl"
  }
}

// Default header configuration for homepage
const defaultHeaderConfig: HeaderConfig = {
  logoHref: "/",
  showMenuButton: true,
  sticky: true,
  shadow: "sm",
}

// Default info bar configuration for homepage
const defaultInfoBarConfig: InfoBarConfig = {
  trustIndicators: [
    {
      id: "trusted-subscribers",
      text: "Trusted by over 2M subscribers",
      icon: "heart",
      highlighted: false,
    },
    {
      id: "free-shipping",
      text: "Free & discreet shipping on all prescriptions",
      icon: "shipping",
      highlighted: false,
    },
    {
      id: "fda-regulated",
      text: "FDA-regulated pharmacies",
      icon: "shield",
      highlighted: false,
    },
    {
      id: "online-process",
      text: "100% online process",
      icon: "phone",
      highlighted: false,
    },
  ],
  shadow: "sm",
}

// Default footer configuration for homepage
const defaultFooterConfig: FooterConfig = {
  contact: {
    logoText: "rejuve",
    phone: "(302) 204-2197",
    email: "care@rejuvemeds.com",
    ctaText: "Find your plan",
    ctaHref: "/consultation"
  },
  columns: [
    {
      title: "WEIGHT LOSS",
      links: [
        { label: "GLP-1 treatments", href: "/weight-loss/glp-1" },
        { label: "My Custom Weight Loss Kit", href: "/weight-loss/custom-kit" },
        { label: "Ozempic®", href: "/weight-loss/ozempic" },
        { label: "Wegovy®", href: "/weight-loss/wegovy" },
        { label: "Mounjaro®", href: "/weight-loss/mounjaro" },
        { label: "Zepbound®", href: "/weight-loss/zepbound" }
      ]
    },
    {
      title: "HORMONE",
      links: [
        { label: "Lorem ipsum", href: "/hormone/lorem-1" },
        { label: "Lorem ipsum", href: "/hormone/lorem-2" },
        { label: "Lorem ipsum", href: "/hormone/lorem-3" }
      ]
    }
  ],
  socialLinks: [
    { platform: "facebook", href: "https://facebook.com/rejuvemeds" },
    { platform: "instagram", href: "https://instagram.com/rejuvemeds" },
    { platform: "twitter", href: "https://twitter.com/rejuvemeds" },
    { platform: "tiktok", href: "https://tiktok.com/@rejuvemeds" },
    { platform: "linkedin", href: "https://linkedin.com/company/rejuvemeds" }
  ],
  middleLinks: [
    { label: "About Rejuve", href: "/about" },
    { label: "Contact Us", href: "/contact" }
  ],
  complianceInfo: {
    compoundedText: "Compounded in the U.S.A.",
  },
  legalDisclaimer: "Prescription products require an online evaluation with an independent licensed medical professional who will determine if a prescription is appropriate. See important safety information. Medications are prescribed by independent licensed physicians as part of our programs. Adult product packaging may appear different than shown. Physicians may prescribe compounded medications as needed to meet patient requirements. which can be filled so that patients with disabilities have full and equal enjoyment of Eden's online goods, services, facilities, privileges, advantages, and accommodations. To provide feedback concerning the accessibility of the website, please contact. data to create custom audiences for targeted advertising and to exclude existing customers from certain marketing campaigns. You can opt out of receiving marketing emails at any time by following the unsubscribe instructions provided in each email or by contacting us directly at care@rejuvemeds.com. At Rejuve Meds, we believe in empowering individuals on their weight loss journey by providing access to licensed providers who may prescribe treatments for metabolic health. Our commitment to transparent pricing is reflected in our Same Price philosophy. This ensures predictability in your costs—you will pay the same price for your medication regardless of lifestyle adjustments throughout your program. Please note that this may exclude any new member discounts or specific plans. Terms and conditions apply. Rejuve Meds is committed to ensuring digital accessibility so that persons with disabilities have full and equal enjoyment of Eden's goods, services, facilities, privileges, advantages, and accommodations. To provide feedback concerning the accessibility of th website, please contact.",
  legalLinks: [
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "My Health Data Privacy Policy", href: "/health-privacy" },
    { label: "Important Safety Information", href: "/safety" }
  ],
  copyright: "2025 Rejuve Meds, International Inc. All rights reserved."
}

export async function PageTemplate({
  children,
  header,
  infoBar,
  footer = defaultFooterConfig,
  className,
  main = {
    paddingTop: "header",
    maxWidth: "default",
    padding: "md",
    background: "transparent"
  },
  footerStyle = {
    horizontalMargin: "lg",
    borderRadius: "2xl",
    bottomMargin: "lg"
  }
}: PageTemplateProps) {
  // Load global data internally if no header/infoBar/footer props provided
  let finalHeaderConfig = header
  let finalInfoBarConfig = infoBar
  let finalFooterConfig = footer

  // If no header, infoBar, or footer provided, load from global data
  console.log('header === undefined || infoBar === undefined || footer === undefined', header === undefined || infoBar === undefined || footer === undefined)
  if (header === undefined || infoBar === undefined || footer === undefined) {
    try {
      const globalData = await getGlobalData()

      // Set header config if not provided
      if (header === undefined) {
        finalHeaderConfig = defaultHeaderConfig
      }

      // Set infoBar config if not provided
      if (infoBar === undefined) {
        finalInfoBarConfig = globalData.globalInfoBar ? {
          trustIndicators: globalData.globalInfoBar.trustIndicators.map((indicator, index) => ({
            id: `indicator-${index}`,
            text: indicator.text,
            icon: indicator.icon,
            highlighted: indicator.highlighted,
            isTitle: indicator.isTitle
          })),
          shadow: "sm" as const,
        } : defaultInfoBarConfig
      }

      // Set footer config if not provided
      finalFooterConfig = globalData.globalFooter ? {
        contact: {
          logoText: "rejuve", // Keep static as per requirements
          phone: globalData.globalFooter.contact.phone,
          email: globalData.globalFooter.contact.email,
          ctaText: globalData.globalFooter.contact.ctaText,
          ctaHref: globalData.globalFooter.contact.ctaHref
        },
        columns: globalData.globalFooter.columns,
        socialLinks: globalData.globalFooter.socialLinks,
        middleLinks: globalData.globalFooter.middleLinks,
        complianceInfo: {
          compoundedText: "Compounded in the U.S.A.", // Keep static as per requirements
        },
        legalDisclaimer: globalData.globalFooter.legalDisclaimer,
        legalLinks: globalData.globalFooter.legalLinks,
        copyright: globalData.globalFooter.copyright
      } : defaultFooterConfig
    } catch (error) {
      console.error('Error loading global data in PageTemplate:', error)
      // Fallback to defaults
      if (header === undefined) {
        finalHeaderConfig = defaultHeaderConfig
      }
      if (infoBar === undefined) {
        finalInfoBarConfig = defaultInfoBarConfig
      }
      if (footer === undefined) {
        finalFooterConfig = defaultFooterConfig
      }
    }
  }

  const paddingTopClasses = {
    none: "",
    header: "pt-25", // Compensation for header height (16) + infoBar (9)
    custom: ""
  } as const

  const paddingTopValue = main.paddingTop || "header"
  const paddingClass = paddingTopValue === "custom"
    ? main.className || ""
    : paddingTopClasses[paddingTopValue]

  return (
    <div className={cn("min-h-screen bg-white", className)}>
      {finalInfoBarConfig && (
        <InfoBar
          trustIndicators={finalInfoBarConfig.trustIndicators}
          shadow={finalInfoBarConfig.shadow}
        />
      )}
      {finalHeaderConfig && (
        <HeaderMinimal
          logoHref={finalHeaderConfig.logoHref}
          onMenuClick={finalHeaderConfig.onMenuClick}
          showMenuButton={finalHeaderConfig.showMenuButton}
          sticky={finalHeaderConfig.sticky}
          shadow={finalHeaderConfig.shadow as any}
        />
      )}

      <main className={paddingClass}>
        {children}
      </main>

      {finalFooterConfig && (
        <div>
          <Footer
            data={finalFooterConfig}
            horizontalMargin="md"
            borderRadius={footerStyle.borderRadius}
          />
        </div>
      )}
    </div>
  )
}

export { defaultHeaderConfig, defaultInfoBarConfig, defaultFooterConfig }
export type { HeaderConfig, InfoBarConfig, FooterConfig, PageTemplateProps } 