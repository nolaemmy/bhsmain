"use client"

import Link from "next/link";
import { ArrowLeft, BarChart3, DollarSign, Clock, Users, FileCheck, Shield, ChevronRight, ArrowRight, ChevronDown, Plus, Minus, CheckCircle, FolderOpen, FileText, Upload, Phone, BarChart, RefreshCw, User, Stethoscope, CreditCard, PieChart } from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import ServiceCardGrid from "@/components/ui/service-card-grid";

export default function ProviderEnrollmentPage() {
  // State for FAQ accordion
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  
  // State for scroll animations
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>(new Array(7).fill(false));
  const [currentMobileStep, setCurrentMobileStep] = useState(0);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  
  // Refs for intersection observer
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);
  const mobileCarouselRef = useRef<HTMLDivElement>(null);
  
  // Toggle FAQ item
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };
  
  // Scroll animation observer
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    
    stepRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisibleSteps(prev => {
                const newVisible = [...prev];
                newVisible[index] = true;
                return newVisible;
              });
            }
          },
          { threshold: 0.3, rootMargin: '0px 0px -50px 0px' }
        );
        
        observer.observe(ref);
        observers.push(observer);
      }
    });
    
    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);
  
  // Mobile carousel functions
  const nextMobileStep = () => {
    setCurrentMobileStep(prev => (prev + 1) % workflowSteps.length);
  };
  
  const prevMobileStep = () => {
    setCurrentMobileStep(prev => (prev - 1 + workflowSteps.length) % workflowSteps.length);
  };
  
  const goToMobileStep = (step: number) => {
    setCurrentMobileStep(step);
  };
  
  // Mobile carousel navigation
  // Define key metrics
  const keyMetrics = [
    {
      value: "95%",
      label: "Approval Rate",
      description: "Industry-leading provider enrollment approval rate",
      icon: FileCheck
    },
    {
      value: "40%",
      label: "Faster Processing",
      description: "Reduced enrollment processing time compared to industry average",
      icon: Clock
    },
    {
      value: "12%",
      label: "Revenue Increase",
      description: "Average revenue improvement through proper credentialing",
      icon: BarChart3
    },
    {
      value: "98%",
      label: "Client Satisfaction",
      description: "Our clients rate our enrollment services highly",
      icon: Users
    }
  ];

  // Define workflow steps with modern icons
  const workflowSteps = [
    {
      title: "Initial Assessment",
      description: "Comprehensive evaluation of provider credentials and documentation requirements",
      shortDesc: "Evaluate provider credentials",
      icon: CheckCircle,
      iconBg: "bg-gradient-to-br from-emerald-100 to-emerald-200",
      iconColor: "text-emerald-600",
      cardBg: "bg-gradient-to-br from-emerald-50 to-white",
      benefit: "Identifies all required documentation"
    },
    {
      title: "Document Collection",
      description: "Gathering and organizing all necessary credentials and supporting documents",
      shortDesc: "Gather required documents",
      icon: FolderOpen,
      iconBg: "bg-gradient-to-br from-blue-100 to-blue-200",
      iconColor: "text-blue-600",
      cardBg: "bg-gradient-to-br from-blue-50 to-white",
      benefit: "Ensures complete application packages"
    },
    {
      title: "Application Preparation",
      description: "Detailed preparation of enrollment applications for each payer",
      shortDesc: "Prepare payer applications",
      icon: FileText,
      iconBg: "bg-gradient-to-br from-purple-100 to-purple-200",
      iconColor: "text-purple-600",
      cardBg: "bg-gradient-to-br from-purple-50 to-white",
      benefit: "Reduces errors and omissions"
    },
    {
      title: "Submission Management",
      description: "Timely submission and tracking of all applications",
      shortDesc: "Submit and track applications",
      icon: Upload,
      iconBg: "bg-gradient-to-br from-orange-100 to-orange-200",
      iconColor: "text-orange-600",
      cardBg: "bg-gradient-to-br from-orange-50 to-white",
      benefit: "Prevents delays in processing"
    },
    {
      title: "Follow-up Process",
      description: "Proactive follow-up with payers to ensure timely processing",
      shortDesc: "Follow up with payers",
      icon: Phone,
      iconBg: "bg-gradient-to-br from-pink-100 to-pink-200",
      iconColor: "text-pink-600",
      cardBg: "bg-gradient-to-br from-pink-50 to-white",
      benefit: "Accelerates approval timeline"
    },
    {
      title: "Status Reporting",
      description: "Regular updates on application status and progress",
      shortDesc: "Provide status updates",
      icon: BarChart,
      iconBg: "bg-gradient-to-br from-indigo-100 to-indigo-200",
      iconColor: "text-indigo-600",
      cardBg: "bg-gradient-to-br from-indigo-50 to-white",
      benefit: "Keeps stakeholders informed"
    },
    {
      title: "Maintenance & Renewal",
      description: "Ongoing management of credentials and timely renewal processing",
      shortDesc: "Manage ongoing credentials",
      icon: RefreshCw,
      iconBg: "bg-gradient-to-br from-primary/20 to-primary/30",
      iconColor: "text-primary-dark",
      cardBg: "bg-gradient-to-br from-primary/5 to-white",
      benefit: "Prevents enrollment lapses"
    }
  ];

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
      icon: CheckCircle,
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

  // Define testimonials
  const testimonials = [
    {
      quote: "BHS transformed our provider enrollment process. What used to take months now takes weeks, and our approval rate has improved significantly.",
      author: "Dr. Michael Reynolds",
      role: "Medical Director, Westside Medical Group"
    },
    {
      quote: "The expertise of the BHS team in navigating the complex credentialing process has been invaluable to our practice's growth and financial stability.",
      author: "Jennifer Martinez",
      role: "Practice Manager, Family Health Associates"
    }
  ];
  
  // Define FAQ items
  const faqItems = [
    {
      question: "How long does the provider enrollment process typically take?",
      answer: "The timeline varies by payer, but our streamlined process typically reduces enrollment time by 30-40% compared to industry averages. Most enrollments are completed within 45-90 days, depending on the payer's processing time."
    },
    {
      question: "What documents are required for provider enrollment?",
      answer: "Required documentation typically includes medical licenses, DEA certificates, malpractice insurance, board certifications, educational credentials, work history, and various provider-specific information. Our team will provide a comprehensive checklist based on your specific situation."
    },
    {
      question: "How do you ensure applications are processed quickly?",
      answer: "We employ a proactive follow-up strategy, maintaining regular contact with payers throughout the process. Our team has established relationships with many payer enrollment departments, allowing us to efficiently address any issues that arise during processing."
    },
    {
      question: "Do you handle re-credentialing and updates?",
      answer: "Yes, we provide comprehensive re-credentialing services and manage all updates to provider information. Our system tracks expiration dates and renewal requirements to ensure continuous enrollment without gaps in participation."
    },
    {
      question: "What sets your provider enrollment services apart from others?",
      answer: "Our provider enrollment services stand out due to our experienced team of specialists, proprietary tracking technology, established payer relationships, and proven track record of faster approvals. We also offer transparent reporting and dedicated account management for each client."
    },
    {
      question: "Can you help with enrollment for out-of-state providers?",
      answer: "Yes, we specialize in multi-state enrollments and have expertise in navigating the specific requirements for each state. Our team is familiar with the nuances of different state regulations and payer policies across the country."
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
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-no-repeat bg-right bg-contain opacity-30 mix-blend-luminosity"></div>
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
                Healthcare Credentialing Solutions
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-tight">
                Provider <span className="relative">
                  Enrollment
                  <span className="absolute bottom-2 left-0 w-full h-2 bg-white/30 -z-10 transform skew-x-12"></span>
                </span>
              </h1>
              
              {/* Description */}
              <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
                Streamline your provider enrollment and credentialing process with our comprehensive service. We handle all paperwork, track submissions, and ensure timely completion of the credentialing cycle.
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
                  <span className="text-white">Faster Enrollment Process</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <span className="text-white">Higher Approval Rates</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <span className="text-white">Reduced Administrative Burden</span>
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
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="#solutions" 
                  className="bg-white text-primary hover:bg-white/90 py-4 px-8 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Explore Solutions
                </Link>
                <Link 
                  href="/get-started" 
                  className="bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 py-4 px-8 rounded-lg font-bold transition-all duration-300"
                >
                  Schedule a Consultation
                </Link>
              </div>
            </div>
            
            {/* Right Column - Stats Card (Desktop Only) */}
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">Enrollment Performance Metrics</h3>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6">
                  {/* Stat 1 */}
                  <div className="bg-white/10 rounded-xl p-6">
                    <div className="text-4xl font-bold text-white mb-2">95%</div>
                    <div className="text-white/80 text-sm">Approval Rate</div>
                    <div className="w-full h-1 bg-white/20 mt-4 rounded-full overflow-hidden">
                      <div className="h-full w-[95%] bg-white/60 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Stat 2 */}
                  <div className="bg-white/10 rounded-xl p-6">
                    <div className="text-4xl font-bold text-white mb-2">40%</div>
                    <div className="text-white/80 text-sm">Faster Processing</div>
                    <div className="w-full h-1 bg-white/20 mt-4 rounded-full overflow-hidden">
                      <div className="h-full w-[40%] bg-white/60 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Stat 3 */}
                  <div className="bg-white/10 rounded-xl p-6">
                    <div className="text-4xl font-bold text-white mb-2">12%</div>
                    <div className="text-white/80 text-sm">Revenue Increase</div>
                    <div className="w-full h-1 bg-white/20 mt-4 rounded-full overflow-hidden">
                      <div className="h-full w-[12%] bg-white/60 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Stat 4 */}
                  <div className="bg-white/10 rounded-xl p-6">
                    <div className="text-4xl font-bold text-white mb-2">98%</div>
                    <div className="text-white/80 text-sm">Client Satisfaction</div>
                    <div className="w-full h-1 bg-white/20 mt-4 rounded-full overflow-hidden">
                      <div className="h-full w-[98%] bg-white/60 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Workflow Process Section - Premium Design */}
      <section className="py-32 relative overflow-hidden">
        {/* Advanced Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-white to-primary/10 z-0"></div>
        
        {/* Animated Decorative Elements */}
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-gradient-to-tr from-primary/10 to-primary/5 blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Geometric Shapes */}
        <div className="absolute left-0 top-1/3 w-40 h-40 border-[16px] border-primary/10 rounded-full opacity-60 animate-float"></div>
        <div className="absolute right-10 top-1/4 w-20 h-20 border-[8px] border-primary/20 rounded-xl opacity-60 rotate-12 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute right-1/4 bottom-20 w-32 h-32 border-[12px] border-primary/15 rounded-full opacity-60 animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Dotted Pattern */}
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-repeat opacity-5"></div>
        
        <div className="container relative z-10">
          {/* Premium Section Header */}
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full mb-6">
              <span className="w-3 h-3 bg-primary rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm font-bold tracking-widest text-primary uppercase">Streamlined Workflow</span>
              <span className="w-3 h-3 bg-primary rounded-full ml-2 animate-pulse"></span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary-dark via-primary to-primary-dark">
              Our Enrollment Process
            </h2>
            
            <div className="h-1 w-40 bg-gradient-to-r from-primary/50 to-primary mx-auto mb-8 rounded-full"></div>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We follow a comprehensive, step-by-step approach to ensure successful provider enrollment and credentialing, 
              designed to maximize efficiency and minimize administrative burden.
            </p>
          </div>
          
          {/* Clean Modern Timeline - Desktop */}
          <div ref={timelineRef} className="hidden lg:block relative mb-16">
            <div className="max-w-7xl mx-auto px-4">
              {/* Main Timeline Container */}
              <div className="relative">
                {/* Clean Timeline Line */}
                <div className="absolute top-16 left-0 right-0 h-0.5 bg-gray-200 rounded-full"></div>
                <div
                  className="absolute top-16 left-0 h-0.5 bg-gradient-to-r from-primary to-primary-dark rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${((visibleSteps.filter(Boolean).length / workflowSteps.length) * 100)}%` }}
                ></div>
                
                {/* Timeline Steps */}
                <div className="grid grid-cols-7 gap-4">
                  {workflowSteps.map((step, index) => {
                    const IconComponent = step.icon;
                    const isVisible = visibleSteps[index];
                    
                    return (
                      <div
                        key={index}
                        ref={el => { stepRefs.current[index] = el; }}
                        className={`text-center group cursor-pointer transition-all duration-700 ${
                          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                        style={{ transitionDelay: `${index * 0.1}s` }}
                      >
                        {/* Step Indicator */}
                        <div className="relative mb-8">
                          <div className={`w-12 h-12 mx-auto rounded-full bg-white border-4 ${
                            isVisible ? 'border-primary shadow-lg' : 'border-gray-300'
                          } flex items-center justify-center text-lg font-bold transition-all duration-500 relative z-10 group-hover:scale-110 group-hover:shadow-xl`}>
                            <span className={`transition-colors duration-300 ${
                              isVisible ? 'text-primary' : 'text-gray-400'
                            }`}>
                              {index + 1}
                            </span>
                          </div>
                          
                          {/* Icon */}
                          <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full ${
                            isVisible ? 'bg-primary' : 'bg-gray-300'
                          } flex items-center justify-center transition-all duration-500 group-hover:scale-110`}>
                            <IconComponent className="w-4 h-4 text-white" />
                          </div>
                        </div>
                        
                        {/* Clean Card */}
                        <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group-hover:border-primary/20 min-h-[280px] relative">
                          {/* Duration Badge */}
                          
                          
                          {/* Content */}
                          <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight group-hover:text-primary transition-colors duration-300">
                            {step.title}
                          </h3>
                          
                          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                            {step.description}
                          </p>
                          
                          {/* Key Benefit Highlight */}
                          <div className="bg-primary/5 rounded-xl p-3 border-l-4 border-primary">
                            <div className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              <div>
                                <span className="text-primary font-semibold text-xs block mb-1">BENEFIT</span>
                                <p className="text-gray-700 text-xs leading-snug">{step.benefit}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          
          {/* Clean Mobile Carousel */}
          <div className="block lg:hidden relative">
            <div className="px-4">
              {/* Progress Indicator */}
              <div className="flex items-center justify-center space-x-2 mb-6">
                {workflowSteps.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      index === currentMobileStep
                        ? 'bg-primary w-8'
                        : index < currentMobileStep
                        ? 'bg-primary/50 w-4'
                        : 'bg-gray-200 w-4'
                    }`}
                  />
                ))}
              </div>
              
              {/* Carousel Container */}
              <div ref={mobileCarouselRef} className="overflow-hidden rounded-2xl">
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${currentMobileStep * 100}%)` }}
                >
                  {workflowSteps.map((step, index) => {
                    const IconComponent = step.icon;
                    
                    return (
                      <div key={index} className="w-full flex-shrink-0 px-2">
                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 min-h-[380px]">
                          {/* Header */}
                          <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                                <IconComponent className="w-5 h-5 text-white" />
                              </div>
                              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                                <span className="text-primary font-bold text-sm">{index + 1}</span>
                              </div>
                            </div>
                          </div>
                          
                          {/* Content */}
                          <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                          <p className="text-gray-600 text-sm mb-6 leading-relaxed">{step.description}</p>
                          
                          {/* Benefit */}
                          <div className="bg-primary/5 rounded-xl p-4 border-l-4 border-primary">
                            <div className="flex items-start space-x-3">
                              <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                              <div>
                                <span className="text-primary font-semibold text-sm block mb-1">KEY BENEFIT</span>
                                <p className="text-gray-700 text-sm">{step.benefit}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              {/* Navigation */}
              <div className="flex items-center justify-center space-x-4 mt-6">
                <button
                  onClick={prevMobileStep}
                  disabled={currentMobileStep === 0}
                  className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="w-5 h-5 rotate-180" />
                </button>
                
                <span className="text-sm text-gray-500 font-medium">
                  {currentMobileStep + 1} of {workflowSteps.length}
                </span>
                
                <button
                  onClick={nextMobileStep}
                  disabled={currentMobileStep === workflowSteps.length - 1}
                  className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Premium CTA Section */}
          <div className="mt-24 text-center relative">
            {/* CTA Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl transform -skew-y-1"></div>
            
            <div className="relative py-12 px-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Ready to streamline your enrollment process?</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                Our expert team is ready to handle your provider enrollment needs with precision and efficiency.
              </p>
              
              <Link 
                href="/get-started" 
                className="inline-flex items-center bg-gradient-to-r from-primary to-primary-dark text-white py-4 px-10 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 group"
              >
                <span>Start Your Enrollment Process</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
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

      {/* Testimonials Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Hear from healthcare providers who have transformed their enrollment process with our services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="text-white/90 text-lg italic mb-6">"{testimonial.quote}"</div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full mr-4"></div>
                  <div>
                    <div className="font-bold">{testimonial.author}</div>
                    <div className="text-white/80 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              href="/get-started" 
              className="inline-flex items-center bg-white text-primary hover:bg-white/90 py-4 px-8 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section - Premium Design with Dropdown */}
      <section className="py-28 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-white via-gray-50 to-white z-0"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-full blur-[80px]"></div>
        
        {/* Geometric Shapes */}
        <div className="absolute right-0 top-1/4 w-24 h-24 border-[8px] border-primary/10 rounded-full opacity-50 animate-float"></div>
        <div className="absolute left-0 bottom-1/4 w-32 h-32 border-[12px] border-primary/10 rounded-full opacity-50 animate-float" style={{ animationDelay: '1.5s' }}></div>
        
        <div className="container relative z-10">
          {/* Premium Section Header */}
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full mb-6">
              <span className="w-3 h-3 bg-primary rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm font-bold tracking-widest text-primary uppercase">Knowledge Base</span>
              <span className="w-3 h-3 bg-primary rounded-full ml-2 animate-pulse"></span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary-dark via-primary to-primary-dark">
              Frequently Asked Questions
            </h2>
            
            <div className="h-1 w-40 bg-gradient-to-r from-primary/50 to-primary mx-auto mb-8 rounded-full"></div>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get answers to common questions about our provider enrollment and credentialing services.
              Click on any question to expand the answer.
            </p>
          </div>
          
          {/* FAQ Accordion */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqItems.map((faq, index) => (
                <div 
                  key={index}
                  className={`bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-500 ${
                    openFAQ === index ? 'shadow-lg ring-1 ring-primary/20' : 'hover:shadow-lg'
                  }`}
                >
                  {/* Question Header - Clickable */}
                  <button 
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
                    aria-expanded={openFAQ === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <h3 className={`text-xl font-bold ${openFAQ === index ? 'text-primary' : 'text-gray-900'} transition-colors duration-300`}>
                      {faq.question}
                    </h3>
                    <div className={`flex-shrink-0 ml-4 p-2 rounded-full ${openFAQ === index ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500'} transition-all duration-300`}>
                      {openFAQ === index ? (
                        <Minus className="h-5 w-5" />
                      ) : (
                        <Plus className="h-5 w-5" />
                      )}
                    </div>
                  </button>
                  
                  {/* Answer Content - Expandable */}
                  <div 
                    id={`faq-answer-${index}`}
                    className={`px-8 overflow-hidden transition-all duration-500 ease-in-out ${
                      openFAQ === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Additional Help Link */}
          <div className="text-center mt-16">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Link 
              href="/get-started" 
              className="inline-flex items-center text-primary hover:text-primary-dark font-medium group"
            >
              <span>Contact our enrollment specialists</span>
              <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to streamline your provider enrollment process?</h2>
            <p className="text-xl text-white/90 mb-10">
              Let our experts handle your credentialing while you focus on providing exceptional patient care.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/get-started" 
                className="bg-primary hover:bg-primary-dark py-4 px-8 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Schedule a Consultation
              </Link>
              <Link 
                href="/about" 
                className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 py-4 px-8 rounded-lg font-bold transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}