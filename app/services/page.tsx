"use client"

import Link from "next/link"
import Image from "next/image"
import { BarChart3, User, Stethoscope, Users, CheckSquare, CreditCard, PieChart } from "lucide-react"
import ServiceCardGrid from "@/components/ui/service-card-grid"

const services = [
  {
    title: "Revenue Cycle Management",
    description: "End-to-end revenue cycle management to optimize your financial performance and cash flow with comprehensive solutions.",
    icon: BarChart3,
    link: "/services/revenue-cycle-management",
    bgColor: "primary" as const,
    metric: "25% Revenue Increase"
  },
  {
    title: "Provider Enrollment / Credentialing",
    description: "Streamline your provider enrollment process with our expert services and comprehensive credentialing support.",
    icon: User,
    link: "/services/provider-enrollment",
    bgColor: "secondary" as const,
    metric: "95% Success Rate"
  },
  {
    title: "Medical Coding",
    description: "Accurate and compliant medical coding services to maximize reimbursement and ensure regulatory compliance.",
    icon: Stethoscope,
    link: "/services/medical-coding",
    bgColor: "blue" as const,
    metric: "99% Accuracy"
  },
  {
    title: "Patient Demographics",
    description: "Comprehensive patient information management for improved billing accuracy and reduced claim denials.",
    icon: Users,
    link: "/services/patient-demographics",
    bgColor: "emerald" as const,
    metric: "2X Faster Processing"
  },
  {
    title: "Eligibility Verification",
    description: "Real-time insurance verification to reduce claim denials and improve cash flow management.",
    icon: CheckSquare,
    link: "/services/eligibility",
    bgColor: "purple" as const,
    metric: "Real-time Verification"
  },
  {
    title: "Payment Posting",
    description: "Accurate and timely payment posting for improved cash flow and streamlined financial operations.",
    icon: CreditCard,
    link: "/services/payment-posting",
    bgColor: "orange" as const,
    metric: "24hr Turnaround"
  },
  {
    title: "Accounts Receivable",
    description: "Effective management of accounts receivable to optimize collections and reduce aging accounts.",
    icon: PieChart,
    link: "/services/accounts-receivable",
    bgColor: "indigo" as const,
    metric: "30% Faster Collections"
  }
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="heading-1 text-white">Our Medical Billing Services</h1>
            <p className="mt-6 text-xl text-white/80">
              Comprehensive medical billing and revenue cycle management solutions tailored to your practice's needs. Increase collections and reduce administrative burden.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
              Our Complete Service Suite
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive healthcare revenue cycle management and billing solutions designed to optimize your practice's financial performance and streamline operations.
            </p>
          </div>
          
          <ServiceCardGrid 
            services={services}
            columns={3}
            className="max-w-7xl mx-auto"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-neutral-50">
        <div className="container">
          <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-lg md:p-12">
            <div className="text-center">
              <h2 className="heading-3 text-neutral-900">Not Sure Which Service You Need?</h2>
              <p className="mt-4 text-lg text-neutral-600">
                Our team of medical billing experts can help you determine the best solution for your practice's unique needs and challenges.
              </p>
              <div className="mt-8">
                <Link href="/get-started" className="btn btn-primary">
                  Schedule a Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
