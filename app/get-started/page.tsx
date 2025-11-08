import type { Metadata } from "next"
import GetStartedClient from "./get-started-client"

export const metadata: Metadata = {
  title: "Get Started with BHS Healthcare - Free Practice Assessment & Revenue Cycle Management Consultation",
  description: "Transform your healthcare practice revenue today. Get a free assessment, expert billing solutions, and 15-30% revenue increase with BHS Healthcare's comprehensive RCM services.",
  keywords: "healthcare revenue cycle management, medical billing services, practice assessment, healthcare consulting, revenue optimization, medical coding, claims processing",
  authors: [{ name: "BHS Healthcare" }],
  creator: "BHS Healthcare",
  publisher: "BHS Healthcare",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Get Started with BHS Healthcare - Free Practice Assessment & Expert Revenue Cycle Management",
    description: "Transform your healthcare practice revenue today. Get a free assessment, expert billing solutions, and 15-30% revenue increase with BHS Healthcare's comprehensive RCM services.",
    url: "https://www.bhshealthcares.com/get-started",
    siteName: "BHS Healthcare",
    images: [
      {
        url: "https://www.bhshealthcares.com/images/og-get-started.jpg",
        width: 1200,
        height: 630,
        alt: "BHS Healthcare - Get Started with Revenue Cycle Management",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Started with BHS Healthcare - Free Practice Assessment & Expert Revenue Cycle Management",
    description: "Transform your healthcare practice revenue today. Get a free assessment, expert billing solutions, and 15-30% revenue increase with BHS Healthcare.",
    images: ["https://www.bhshealthcares.com/images/twitter-get-started.jpg"],
    creator: "@bhshealthcare",
  },
  alternates: {
    canonical: "https://www.bhshealthcares.com/get-started",
    languages: {
      'en-US': 'https://www.bhshealthcares.com/get-started',
    },
  },
}

export default function GetStartedPage() {
  return <GetStartedClient />
}
