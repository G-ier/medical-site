import { client, GLOBAL_FAQ_QUERY, GLOBAL_INFO_BAR_QUERY, GLOBAL_FOOTER_QUERY } from './sanity'

// Types for global components
export interface GlobalFAQ {
  _id: string
  title: string
  subtitle: string
  subtitleLinkText: string
  subtitleLinkUrl: string
  faqs: Array<{
    question: string
    answer: string
  }>
  contactTitle: string
  contactDescription: string
  contactButtonText: string
  contactButtonUrl: string
}

export interface GlobalInfoBar {
  _id: string
  trustIndicators: Array<{
    text: string
    icon?: "heart" | "shipping" | "shield" | "phone" | "box"
    isTitle: boolean
    highlighted: boolean
  }>
}

export interface GlobalFooter {
  _id: string
  title: string
  contact: {
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
  legalDisclaimer: string
  legalLinks: Array<{
    label: string
    href: string
  }>
  copyright: string
}

// Fetch global FAQ data
export async function getGlobalFAQ(): Promise<GlobalFAQ | null> {
  try {
    const faqData = await client.fetch<GlobalFAQ>(GLOBAL_FAQ_QUERY)
    console.log('🌐 Global FAQ fetched:', faqData ? 'Success' : 'No data')
    return faqData
  } catch (error) {
    console.error('Error fetching global FAQ:', error)
    return null
  }
}

// Fetch global Info Bar data
export async function getGlobalInfoBar(): Promise<GlobalInfoBar | null> {
  try {
    const infoBarData = await client.fetch<GlobalInfoBar>(GLOBAL_INFO_BAR_QUERY)
    console.log('🌐 Global Info Bar fetched:', infoBarData ? 'Success' : 'No data')
    return infoBarData
  } catch (error) {
    console.error('Error fetching global Info Bar:', error)
    return null
  }
}

// Fetch global Footer data
export async function getGlobalFooter(): Promise<GlobalFooter | null> {
  try {
    const footerData = await client.fetch<GlobalFooter>(GLOBAL_FOOTER_QUERY)
    console.log('🌐 Global Footer fetched:', footerData ? 'Success' : 'No data')
    return footerData
  } catch (error) {
    console.error('Error fetching global Footer:', error)
    return null
  }
}

// Fetch all global data at once
export async function getGlobalData() {
  try {
    const [faqData, infoBarData, footerData] = await Promise.all([
      getGlobalFAQ(),
      getGlobalInfoBar(),
      getGlobalFooter()
    ])

    return {
      globalFAQ: faqData,
      globalInfoBar: infoBarData,
      globalFooter: footerData
    }
  } catch (error) {
    console.error('Error fetching global data:', error)
    return {
      globalFAQ: null,
      globalInfoBar: null,
      globalFooter: null
    }
  }
} 