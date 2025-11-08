import type { Metadata } from "next"
import HeroSection from "@/components/home/hero-section"
import IntroducingSection from "@/components/home/introducing-section"
import ServicesOverview from "@/components/home/services-overview"
import USACoverage from "@/components/home/usa-coverage"
import BillingCtaBanner from "@/components/home/billing-cta-banner"

export const metadata: Metadata = {
  title: "BHS Billing | Medical Billing & Revenue Cycle Management Services",
  description: "Professional medical billing and revenue cycle management for healthcare providers. Increase collections by 25%+ with expert coding, claims processing, and credentialing.",
  keywords: "medical billing, revenue cycle management, provider credentialing, healthcare billing, medical coding, claims processing",
  alternates: {
    canonical: "https://bhshealthcares.com",
  },
  openGraph: {
    title: "BHS Billing | Medical Billing & Revenue Cycle Management Services",
    description: "Professional medical billing and revenue cycle management for healthcare providers. Increase collections by 25%+ with expert coding, claims processing, and credentialing.",
    url: "https://bhshealthcares.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BHS Billing | Medical Billing & Revenue Cycle Management Services",
    description: "Professional medical billing and revenue cycle management for healthcare providers. Increase collections by 25%+ with expert coding, claims processing, and credentialing.",
  },
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroducingSection />
      <ServicesOverview />
      <USACoverage />
      <BillingCtaBanner />
    </>
  )
}
