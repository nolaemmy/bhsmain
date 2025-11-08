"use client"

import Link from "next/link"
import { ArrowLeft, ChevronRight, User, Stethoscope, Users, CheckSquare, BarChart3, CreditCard, PieChart } from "lucide-react"
import ServiceCardGrid from "@/components/ui/service-card-grid"

export default function EligibilityPage() {
  const rcmSolutions = [
    {
      title: "Provider Enrollment / Credentialing",
      description: "Streamline your provider enrollment process with our expert services and comprehensive credentialing support.",
      icon: User,
      link: "/services/provider-enrollment",
      bgColor: "primary" as const,
      metric: "95% Success Rate"
    },
    {
      title: "Medical Coding",
      description: "Accurate and compliant medical coding services to maximize reimbursement and ensure regulatory compliance.",
      icon: Stethoscope,
      link: "/services/medical-coding",
      bgColor: "secondary" as const,
      metric: "99% Accuracy"
    },
    {
      title: "Patient Demographics",
      description: "Comprehensive patient information management for improved billing accuracy and reduced claim denials.",
      icon: Users,
      link: "/services/patient-demographics",
      bgColor: "blue" as const,
      metric: "2X Faster Processing"
    },
    {
      title: "Eligibility",
      description: "Real-time insurance verification to reduce claim denials and improve cash flow management.",
      icon: CheckSquare,
      link: "/services/eligibility",
      bgColor: "emerald" as const,
      metric: "Real-time Verification"
    },
    {
      title: "Charge Capture",
      description: "Efficient capture of all billable services to prevent revenue leakage and maximize collections.",
      icon: BarChart3,
      link: "/services/charge-capture",
      bgColor: "purple" as const,
      metric: "Zero Revenue Loss"
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

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-dark z-0"></div>
        
        {/* Animated Patterns */}
        <div className="absolute inset-0 opacity-20 z-0">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-repeat bg-[size:30px_30px]"></div>
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-white/10 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-white/10 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-white/0 via-white/30 to-white/0"></div>
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-white/0 via-white/30 to-white/0"></div>
        
        {/* 3D Geometric Shapes - Desktop Only */}
        <div className="absolute right-0 top-0 h-full w-1/2 hidden lg:block z-0">
          {/* Abstract 3D Elements */}
          <div className="absolute top-[20%] right-[10%] w-64 h-64 border-[30px] border-white/10 rounded-full transform rotate-12 animate-float"></div>
          <div className="absolute top-[40%] right-[20%] w-40 h-40 bg-white/5 backdrop-blur-md rounded-xl transform rotate-45 animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-[20%] right-[15%] w-80 h-80 border-[20px] border-white/10 rounded-xl transform -rotate-12 animate-float" style={{ animationDelay: '2s' }}></div>
          
          {/* Mockup Image */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-no-repeat bg-right bg-contain opacity-30 mix-blend-luminosity"></div>
        </div>
        
        {/* Content Container */}
        <div className="container relative z-10">
          {/* Back Link */}
          <Link 
            href="/services" 
            className="inline-flex items-center text-white/90 hover:text-white mb-12 group bg-white/10 backdrop-blur-sm py-2 px-4 rounded-full transition-all duration-300 hover:bg-white/20"
          >
            <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Services
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Main Content */}
            <div>
              {/* Label */}
              <div className="inline-block bg-white/10 backdrop-blur-sm text-white px-4 py-1 rounded-sm text-sm font-bold tracking-widest uppercase mb-6">
                Healthcare Verification Solutions
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-tight">
                Insurance <span className="relative">
                  Eligibility
                  <span className="absolute bottom-2 left-0 w-full h-2 bg-white/30 -z-10 transform skew-x-12"></span>
                </span>
              </h1>
              
              {/* Description */}
              <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
                Verify insurance eligibility in real-time before providing services. Our system checks coverage, benefits, and patient responsibility to prevent claim denials.
              </p>
              
              {/* Key Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <span className="text-white">Real-time Verification</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <span className="text-white">Reduced Denials</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <span className="text-white">Coverage Confirmation</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <span className="text-white">Improved Revenue Cycle</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-white z-0"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-full blur-[80px]"></div>
        
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-8">
                <div className="w-12 h-1 bg-primary rounded-full mr-4"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 relative">
                  What We <span className="relative inline-block">
                    Offer
                    <span className="absolute bottom-1 left-0 w-full h-3 bg-primary/20 -z-10 transform -rotate-1"></span>
                  </span>
                </h2>
              </div>
              
              <div className="prose prose-lg max-w-none mb-10">
                <p className="text-xl text-gray-700 leading-relaxed">
                  Our eligibility verification service ensures that you have accurate insurance coverage information before providing services. We perform comprehensive checks to verify benefits and prevent claim denials due to eligibility issues.
                </p>
              </div>
              
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </span>
                  Our Process
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Process Item 1 */}
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:border-primary/20 group">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">Real-time Eligibility Verification</h4>
                        <p className="text-gray-600">Instant verification of patient insurance status</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Process Item 2 */}
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:border-primary/20 group">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">Benefits Coverage Confirmation</h4>
                        <p className="text-gray-600">Detailed verification of covered services</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Process Item 3 */}
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:border-primary/20 group">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">Co-pay & Deductible Verification</h4>
                        <p className="text-gray-600">Accurate patient financial responsibility</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Process Item 4 */}
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:border-primary/20 group">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                          <line x1="16" y1="2" x2="16" y2="6"></line>
                          <line x1="8" y1="2" x2="8" y2="6"></line>
                          <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">Prior Authorization Requirements</h4>
                        <p className="text-gray-600">Identification of services needing pre-approval</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Process Item 5 */}
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:border-primary/20 group">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">Coverage Date Validation</h4>
                        <p className="text-gray-600">Confirmation of active coverage periods</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Process Item 6 */}
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:border-primary/20 group">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                          <line x1="12" y1="1" x2="12" y2="23"></line>
                          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">Patient Responsibility Estimation</h4>
                        <p className="text-gray-600">Accurate out-of-pocket cost projections</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                <p className="text-lg text-gray-700 leading-relaxed">
                  By verifying eligibility upfront, we help reduce claim denials and improve your revenue cycle. Our team ensures you have all the necessary coverage information before services are rendered.
                </p>
              </div>
            </div>

            {/* Sidebar - Key Benefits */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-2xl border border-primary/10 shadow-lg relative overflow-hidden">
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full translate-x-16 -translate-y-16 blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/10 rounded-full -translate-x-12 translate-y-12 blur-2xl"></div>
                  
                  <div className="relative">
                    <div className="flex items-center mb-8">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        Key Benefits
                      </h3>
                    </div>
                    
                    <ul className="space-y-6">
                      {/* Benefit 1 */}
                      <li className="transform transition-all duration-300 hover:translate-x-1">
                        <div className="bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-sm border border-primary/10 hover:border-primary/30 transition-all duration-300">
                          <div className="flex items-center mb-3">
                            <div className="w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center mr-3 shadow-md">
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                              </svg>
                            </div>
                            <h4 className="text-lg font-bold text-gray-900">
                              Real-time Verification
                            </h4>
                          </div>
                          <p className="text-gray-700 pl-11">
                            Instant verification of insurance coverage and benefits, reducing administrative delays
                          </p>
                        </div>
                      </li>
                      
                      {/* Benefit 2 */}
                      <li className="transform transition-all duration-300 hover:translate-x-1">
                        <div className="bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-sm border border-primary/10 hover:border-primary/30 transition-all duration-300">
                          <div className="flex items-center mb-3">
                            <div className="w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center mr-3 shadow-md">
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                              </svg>
                            </div>
                            <h4 className="text-lg font-bold text-gray-900">
                              Reduced Denials
                            </h4>
                          </div>
                          <p className="text-gray-700 pl-11">
                            Prevent eligibility-related claim denials by confirming coverage before service delivery
                          </p>
                        </div>
                      </li>
                      
                      {/* Benefit 3 */}
                      <li className="transform transition-all duration-300 hover:translate-x-1">
                        <div className="bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-sm border border-primary/10 hover:border-primary/30 transition-all duration-300">
                          <div className="flex items-center mb-3">
                            <div className="w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center mr-3 shadow-md">
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                              </svg>
                            </div>
                            <h4 className="text-lg font-bold text-gray-900">
                              Coverage Confirmation
                            </h4>
                          </div>
                          <p className="text-gray-700 pl-11">
                            Complete verification of benefits and coverage details for transparent patient communication
                          </p>
                        </div>
                      </li>
                      
                      {/* Benefit 4 - Added new benefit */}
                      <li className="transform transition-all duration-300 hover:translate-x-1">
                        <div className="bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-sm border border-primary/10 hover:border-primary/30 transition-all duration-300">
                          <div className="flex items-center mb-3">
                            <div className="w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center mr-3 shadow-md">
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
                              </svg>
                            </div>
                            <h4 className="text-lg font-bold text-gray-900">
                              Improved Revenue Cycle
                            </h4>
                          </div>
                          <p className="text-gray-700 pl-11">
                            Accelerate cash flow and reduce administrative costs through streamlined verification processes
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RCM Solutions Section */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-sm font-bold tracking-widest text-primary uppercase">Complete RCM Suite</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
              Our Healthcare RCM Solutions
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive revenue cycle management services designed to optimize your healthcare organization's financial performance and streamline operations.
            </p>
          </div>
          
          {/* Service Cards Grid */}
          <ServiceCardGrid 
            services={rcmSolutions}
            columns={3}
            className="max-w-7xl mx-auto"
          />
        </div>
      </section>
    </div>
  )
}