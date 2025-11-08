"use client"

import Link from "next/link";
import { ArrowLeft, BarChart3, DollarSign, Clock, Users, FileCheck, Shield, ChevronRight, ArrowRight, ChevronDown, Plus, Minus, User, Stethoscope, CheckSquare, CreditCard, PieChart } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import ServiceCardGrid from "@/components/ui/service-card-grid";

export default function PatientDemographicsPage() {
  // State for FAQ accordion
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  
  // Toggle FAQ item
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // Define RCM solutions
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
  ];

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
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-no-repeat bg-right bg-contain opacity-30 mix-blend-luminosity"></div>
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
                Healthcare Information Management
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-tight">
                Patient <span className="relative">
                  Demographics
                  <span className="absolute bottom-2 left-0 w-full h-2 bg-white/30 -z-10 transform skew-x-12"></span>
                </span>
              </h1>
              
              {/* Description */}
              <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
                Maintain accurate and complete patient information with our comprehensive demographic management service. We ensure data quality and completeness for improved billing outcomes.
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
                  <span className="text-white">Data Accuracy</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <span className="text-white">Reduced Errors</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <span className="text-white">Improved Billing</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <span className="text-white">Enhanced Patient Care</span>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/get-started" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  href="/about" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Learn More
                </Link>
              </div>
            </div>
            
            {/* Right Column - Empty for the 3D elements */}
            <div className="hidden lg:block">
              {/* Content is provided by the absolute positioned elements */}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-full blur-[80px]"></div>
        
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Section Header with Accent */}
              <div className="mb-10">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full mb-4">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  <span className="text-sm font-bold tracking-wider text-primary uppercase">Our Services</span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4 relative inline-block">
                  What We Offer
                  <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-primary to-primary/30 rounded-full"></div>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl">
                  Comprehensive patient demographics management to ensure accurate information and improved billing outcomes.
                </p>
              </div>
              
              {/* Main Content with Enhanced Styling */}
              <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Our patient demographics management service ensures that your patient information is accurate, complete, and up-to-date. We handle all aspects of demographic data collection and verification to support efficient billing and improved patient care.
                </p>
                
                {/* Process Section with Enhanced Styling */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 relative inline-block">
                    Our Process
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary/30"></span>
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    {/* Process Item 1 */}
                    <div className="flex items-start p-4 rounded-xl bg-gray-50 hover:bg-primary/5 transition-colors duration-300">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                          1
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">Initial Information Collection</h4>
                        <p className="text-sm text-gray-600">Gathering complete patient data at first contact</p>
                      </div>
                    </div>
                    
                    {/* Process Item 2 */}
                    <div className="flex items-start p-4 rounded-xl bg-gray-50 hover:bg-primary/5 transition-colors duration-300">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                          2
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">Data Verification</h4>
                        <p className="text-sm text-gray-600">Validating all patient information for accuracy</p>
                      </div>
                    </div>
                    
                    {/* Process Item 3 */}
                    <div className="flex items-start p-4 rounded-xl bg-gray-50 hover:bg-primary/5 transition-colors duration-300">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                          3
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">Regular Updates</h4>
                        <p className="text-sm text-gray-600">Maintaining current information through scheduled reviews</p>
                      </div>
                    </div>
                    
                    {/* Process Item 4 */}
                    <div className="flex items-start p-4 rounded-xl bg-gray-50 hover:bg-primary/5 transition-colors duration-300">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                          4
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">Address Verification</h4>
                        <p className="text-sm text-gray-600">Confirming current residential and billing addresses</p>
                      </div>
                    </div>
                    
                    {/* Process Item 5 */}
                    <div className="flex items-start p-4 rounded-xl bg-gray-50 hover:bg-primary/5 transition-colors duration-300">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                          5
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">Insurance Management</h4>
                        <p className="text-sm text-gray-600">Tracking and updating insurance information</p>
                      </div>
                    </div>
                    
                    {/* Process Item 6 */}
                    <div className="flex items-start p-4 rounded-xl bg-gray-50 hover:bg-primary/5 transition-colors duration-300">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                          6
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">Quality Assurance</h4>
                        <p className="text-sm text-gray-600">Ongoing data quality checks and error correction</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Conclusion */}
                <div className="bg-primary/5 p-6 rounded-xl border-l-4 border-primary">
                  <p className="text-gray-700 leading-relaxed">
                    Accurate patient demographics are the foundation of successful billing and patient care. Our team ensures that all necessary information is collected, verified, and properly maintained in your system.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar - Key Benefits */}
            <div className="lg:col-span-1">
              {/* Benefits Header */}
              <div className="mb-6">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full mb-4">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  <span className="text-sm font-bold tracking-wider text-primary uppercase">Advantages</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 relative inline-block">
                  Key Benefits
                  <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-primary to-primary/30 rounded-full"></div>
                </h3>
              </div>
              
              {/* Benefits Card */}
              <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300">
                {/* Card Top Accent */}
                <div className="h-2 w-full bg-gradient-to-r from-primary/70 to-primary"></div>
                
                {/* Benefits List */}
                <div className="p-6">
                  <ul className="space-y-6">
                    {/* Benefit 1 */}
                    <li className="group">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 p-1">
                          <div className="h-10 w-10 bg-primary/10 text-primary rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                              <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                            Data Accuracy
                          </h4>
                          <p className="text-gray-600 leading-relaxed">
                            Ensure all patient information is accurate and complete, reducing claim denials and improving reimbursement rates.
                          </p>
                        </div>
                      </div>
                    </li>
                    
                    {/* Benefit 2 */}
                    <li className="group">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 p-1">
                          <div className="h-10 w-10 bg-primary/10 text-primary rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                              <path d="m9 12 2 2 4-4"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                            Reduced Errors
                          </h4>
                          <p className="text-gray-600 leading-relaxed">
                            Minimize data entry errors and inconsistencies through our systematic verification processes and quality controls.
                          </p>
                        </div>
                      </div>
                    </li>
                    
                    {/* Benefit 3 */}
                    <li className="group">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 p-1">
                          <div className="h-10 w-10 bg-primary/10 text-primary rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                            Improved Billing
                          </h4>
                          <p className="text-gray-600 leading-relaxed">
                            Better billing outcomes through accurate patient information, leading to faster payments and reduced claim rejections.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                
                {/* Call to Action */}
                <div className="p-6 bg-gray-50 border-t border-gray-100">
                  <Link
                    href="/get-started"
                    className="inline-flex items-center justify-center w-full px-6 py-3 text-white bg-gradient-to-r from-primary to-primary-dark rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    <span>Get Started Today</span>
                    <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
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
  );
}