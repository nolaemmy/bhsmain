"use client"

import React from "react"
import EnhancedRCMCard from "@/components/ui/enhanced-rcm-card"
import { Sparkles, Zap, Target } from "lucide-react"

interface RCMSolution {
  title: string
  description: string
  icon: string
  href: string
}

interface EnhancedRCMSolutionsProps {
  currentService?: string
  title?: string
  subtitle?: string
  description?: string
  layout?: 'default' | 'grid' | 'masonry'
}

const defaultRCMSolutions: RCMSolution[] = [
  {
    title: "Provider Enrollment / Credentialing",
    description: "Streamline your provider enrollment process with our expert services. We handle all paperwork, track submissions, and ensure timely completion.",
    icon: "👤",
    href: "/services/provider-enrollment"
  },
  {
    title: "Medical Coding",
    description: "Accurate and compliant medical coding services to maximize reimbursement. Our certified coders ensure precision and compliance.",
    icon: "⚕️",
    href: "/services/medical-coding"
  },
  {
    title: "Patient Demographics",
    description: "Comprehensive patient information management for improved billing accuracy and reduced claim denials.",
    icon: "👥",
    href: "/services/patient-demographics"
  },
  {
    title: "Eligibility",
    description: "Real-time insurance verification to reduce claim denials and improve cash flow with automated eligibility checking.",
    icon: "✓",
    href: "/services/eligibility"
  },
  {
    title: "Charge Capture",
    description: "Efficient capture of all billable services to prevent revenue leakage and ensure complete documentation.",
    icon: "💲",
    href: "/services/charge-capture"
  },
  {
    title: "Payment Posting",
    description: "Accurate and timely payment posting for improved cash flow and streamlined accounts receivable management.",
    icon: "💳",
    href: "/services/payment-posting"
  },
  {
    title: "Accounts Receivable",
    description: "Effective management of accounts receivable to optimize collections and reduce aging accounts.",
    icon: "💰",
    href: "/services/accounts-receivable"
  }
]

export default function EnhancedRCMSolutions({
  currentService,
  title = "Our Healthcare RCM Solutions",
  subtitle = "Complete RCM Suite",
  description = "Comprehensive revenue cycle management services designed to optimize your healthcare organization's financial performance and streamline operations.",
  layout = 'default'
}: EnhancedRCMSolutionsProps) {

  const renderCards = () => {
    switch (layout) {
      case 'grid':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {defaultRCMSolutions.map((solution, index) => (
              <EnhancedRCMCard
                key={index}
                solution={solution}
                index={index}
                currentService={currentService}
                variant="compact"
              />
            ))}
          </div>
        )
      
      case 'masonry':
        return (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {defaultRCMSolutions.map((solution, index) => (
              <div key={index} className="break-inside-avoid mb-8">
                <EnhancedRCMCard
                  solution={solution}
                  index={index}
                  currentService={currentService}
                  variant={index % 3 === 1 ? 'featured' : 'default'}
                />
              </div>
            ))}
          </div>
        )
      
      default:
        return (
          <div className="flex flex-col space-y-20">
            {/* First Row - 2 Cards */}
            <div className="flex flex-col md:flex-row gap-8 justify-center pt-8">
              {defaultRCMSolutions.slice(0, 2).map((solution, index) => (
                <EnhancedRCMCard
                  key={index}
                  solution={solution}
                  index={index}
                  currentService={currentService}
                />
              ))}
            </div>
            
            {/* Second Row - 3 Cards */}
            <div className="flex flex-col md:flex-row gap-8 justify-center pt-8">
              {defaultRCMSolutions.slice(2, 5).map((solution, index) => (
                <EnhancedRCMCard
                  key={index + 2}
                  solution={solution}
                  index={index + 2}
                  currentService={currentService}
                  variant="compact"
                />
              ))}
            </div>
            
            {/* Third Row - 2 Cards */}
            <div className="flex flex-col md:flex-row gap-8 justify-center pt-8">
              {defaultRCMSolutions.slice(5, 7).map((solution, index) => (
                <EnhancedRCMCard
                  key={index + 5}
                  solution={solution}
                  index={index + 5}
                  currentService={currentService}
                />
              ))}
            </div>
          </div>
        )
    }
  }

  return (
    <section id="solutions" className="py-32 pt-40 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-white z-0"></div>
      
      {/* Animated Background Patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.02'%3E%3Cpath d='M0 0h100v1H0zM0 0v100h1V0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-gradient-to-br from-primary/10 via-primary/5 to-transparent blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-gradient-to-br from-blue-500/10 via-blue-400/5 to-transparent blur-3xl animate-float-slow"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] rounded-full bg-gradient-to-br from-emerald-500/8 via-emerald-400/4 to-transparent blur-3xl animate-float-slower"></div>
        
        {/* Geometric Shapes */}
        <div className="absolute right-10 top-1/4 w-32 h-32 border-[3px] border-primary/10 rounded-full opacity-60 animate-float"></div>
        <div className="absolute left-10 bottom-1/4 w-24 h-24 border-[2px] border-blue-400/10 rounded-full opacity-60 animate-float-slow"></div>
        <div className="absolute right-1/4 bottom-10 w-20 h-20 border-[2px] border-emerald-400/10 rounded-xl rotate-45 opacity-60 animate-float"></div>
      </div>
      
      <div className="container relative z-10 px-4">
        {/* Enhanced Section Header */}
        <div className="text-center mb-24 max-w-5xl mx-auto">
          {/* Animated Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-full mb-8 backdrop-blur-sm border border-primary/20">
            <Sparkles className="w-4 h-4 text-primary mr-2 animate-pulse" />
            <span className="text-sm font-bold tracking-widest text-primary uppercase">{subtitle}</span>
            <Zap className="w-4 h-4 text-primary ml-2 animate-pulse" />
          </div>
          
          {/* Main Title with Enhanced Styling */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 relative">
            <span className="bg-gradient-to-r from-gray-900 via-primary-dark to-gray-900 bg-clip-text text-transparent">
              {title}
            </span>
            
            {/* Title Decorations */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent rounded-full"></div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"></div>
          </h2>
          
          {/* Animated Divider */}
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent w-24"></div>
            <Target className="w-6 h-6 text-primary mx-4 animate-pulse" />
            <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent w-24"></div>
          </div>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {description}
          </p>
          
          {/* Stats or Features */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">7+</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">Core Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">Support</div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Cards Layout */}
        {renderCards()}
        
        {/* Bottom Decorative Element */}
        <div className="mt-24 text-center">
          <div className="inline-flex items-center justify-center space-x-3">
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === 3 
                    ? 'bg-primary scale-125' 
                    : i === 2 || i === 4 
                      ? 'bg-primary/70 scale-110' 
                      : i === 1 || i === 5 
                        ? 'bg-primary/50 scale-100' 
                        : 'bg-primary/30 scale-90'
                }`}
                style={{
                  animationDelay: `${i * 0.1}s`
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}