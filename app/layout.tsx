import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { FloatingMessageIcon } from "@/components/ui/floating-message-icon"
import Script from "next/script"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "BHS Billing | Medical Billing & Revenue Cycle Management",
  description: "BHS Billing provides comprehensive medical billing services, revenue cycle management, credentialing, and healthcare billing solutions for providers.",
  keywords: "medical billing, revenue cycle management, provider credentialing, healthcare billing, medical practice management",
  authors: [{ name: "BHS Billing" }],
  creator: "BHS Billing",
  publisher: "BHS Billing",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://bhshealthcares.com"),
  alternates: {
    canonical: "https://bhshealthcares.com",
    languages: {
      "en-US": "https://bhshealthcares.com",
    },
  },
  openGraph: {
    title: "BHS Billing | Medical Billing & Revenue Cycle Management",
    description: "Comprehensive medical billing services for healthcare providers",
    url: "https://bhshealthcares.com",
    siteName: "BHS Billing",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BHS Billing - Medical Billing Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BHS Billing | Medical Billing & Revenue Cycle Management",
    description: "Comprehensive medical billing services for healthcare providers",
    creator: "@bhsbilling",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#0B8487",
      },
    ],
  },
  manifest: "/site.webmanifest",
  other: {
    "msapplication-TileColor": "#0B8487",
    "theme-color": "#0B8487",
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://bhshealthcares.com/#website",
      url: "https://bhshealthcares.com",
      name: "BHS Billing",
      description: "Comprehensive medical billing services and revenue cycle management for healthcare providers",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://bhshealthcares.com/search?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "Organization",
      "@id": "https://bhshealthcares.com/#organization",
      name: "BHS Billing",
      alternateName: "BHS Healthcare Services",
      url: "https://bhshealthcares.com",
      logo: {
        "@type": "ImageObject",
        url: "https://bhshealthcares.com/BHS-LOGO.png",
        width: 180,
        height: 40,
      },
      image: "https://bhshealthcares.com/BHS-LOGO.png",
      description: "BHS Billing provides comprehensive medical billing services, revenue cycle management, provider credentialing, and healthcare billing solutions for providers.",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-520-636-4939",
        contactType: "customer service",
        availableLanguage: ["English"],
        areaServed: "US",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "1309 Coffeen Ave, Suite 1200",
        addressLocality: "Sheridan",
        addressRegion: "WY",
        postalCode: "82801",
        addressCountry: "US",
      },
      sameAs: [
        "https://www.facebook.com/share/16NBZ6gM4n/",
        "https://www.linkedin.com/company/bhs-healthcare-services/",
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://bhshealthcares.com/#localbusiness",
      name: "BHS Billing",
      image: "https://bhshealthcares.com/BHS-LOGO.png",
      telephone: "+1-520-636-4939",
      email: "info@bhshealthcares.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1309 Coffeen Ave, Suite 1200",
        addressLocality: "Sheridan",
        addressRegion: "WY",
        postalCode: "82801",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "44.7967",
        longitude: "-106.9564",
      },
      url: "https://bhshealthcares.com",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
      priceRange: "$$",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "127",
      },
    },
    {
      "@type": "Service",
      "@id": "https://bhshealthcares.com/#service",
      name: "Medical Billing and Revenue Cycle Management",
      description: "Comprehensive medical billing services including coding, claims processing, denial management, and revenue cycle optimization for healthcare providers.",
      provider: {
        "@id": "https://bhshealthcares.com/#organization",
      },
      areaServed: "US",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Medical Billing Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Revenue Cycle Management",
              description: "End-to-end revenue cycle management to optimize financial performance",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Provider Credentialing",
              description: "Expert provider enrollment and credentialing services",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Medical Coding",
              description: "Accurate medical coding for optimal reimbursement",
            },
          },
        ],
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="preload" href="/BHS-LOGO.png" as="image" type="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `}
        </Script>

        {/* Facebook Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'YOUR_PIXEL_ID');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingMessageIcon />
      </body>
    </html>
  )
}
