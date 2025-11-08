"use client";

import Link from "next/link";
import { ArrowLeft, BarChart3, DollarSign, Clock, Users, FileCheck, Shield, ChevronRight, ArrowRight, User, Stethoscope, CheckSquare, CreditCard, PieChart } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import ServiceCardGrid from "@/components/ui/service-card-grid";

export default function RevenueCycleManagementPage() {
  // State for 3D workflow rotation and exploration
  const [rotationAngle, setRotationAngle] = useState(0);
  const [isExploring, setIsExploring] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  // Define key metrics
  const keyMetrics = [
    {
      value: "98%",
      label: "Clean Claims Rate",
      description: "Industry-leading first-pass clean claims rate",
      icon: FileCheck
    },
    {
      value: "45",
      label: "Days in A/R",
      description: "Reduced average days in accounts receivable",
      icon: Clock
    },
    {
      value: "15%",
      label: "Revenue Increase",
      description: "Average revenue improvement for our clients",
      icon: BarChart3
    },
    {
      value: "99%",
      label: "Client Retention",
      description: "Our clients stay with us for the long term",
      icon: Users
    }
  ];

  // Define workflow steps
  const workflowSteps = [
    {
      title: "Patient Registration",
      description: "Accurate collection and verification of patient information and insurance details",
      shortDesc: "Collect complete patient data",
      icon: "👥",
      color: "bg-primary/10",
      benefit: "Reduces claim denials by 35%"
    },
    {
      title: "Insurance Verification",
      description: "Real-time eligibility checks and benefit verification",
      shortDesc: "Verify coverage before service",
      icon: "✓",
      color: "bg-primary/20",
      benefit: "Prevents unexpected patient costs"
    },
    {
      title: "Clinical Documentation",
      description: "Complete and accurate documentation of all medical services",
      shortDesc: "Document all services precisely",
      icon: "📋",
      color: "bg-primary/30",
      benefit: "Supports proper code selection"
    },
    {
      title: "Charge Capture",
      description: "Efficient capture and validation of all billable services",
      shortDesc: "Capture all billable services",
      icon: "💰",
      color: "bg-primary/40",
      benefit: "Maximizes revenue potential"
    },
    {
      title: "Claims Submission",
      description: "Clean claim submission with minimal errors",
      shortDesc: "Submit error-free claims",
      icon: "📤",
      color: "bg-primary/50",
      benefit: "Accelerates reimbursement cycle"
    },
    {
      title: "Payment Processing",
      description: "Quick and accurate payment posting and reconciliation",
      shortDesc: "Post payments accurately",
      icon: "💳",
      color: "bg-primary/60",
      benefit: "Improves financial reporting"
    },
    {
      title: "Denial Management",
      description: "Proactive denial prevention and efficient appeals process",
      shortDesc: "Address denials promptly",
      icon: "⚠️",
      color: "bg-primary/70",
      benefit: "Recovers otherwise lost revenue"
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

  // Define testimonials
  const testimonials = [
    {
      quote: "BHS has transformed our revenue cycle management. Our clean claims rate has improved by 15% and days in A/R reduced by 30%.",
      
      role: "Medical Director, Washington, D.C."
    },
    {
      quote: "The expertise and dedication of the BHS team has significantly improved our financial performance and allowed us to focus on patient care.",
      
      role: "Cardiologist - Kansas City"
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
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-no-repeat bg-right bg-contain opacity-30 mix-blend-luminosity"></div>
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
                Healthcare Financial Solutions
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-tight">
                Revenue Cycle <span className="relative">
                  Management
                  <span className="absolute bottom-2 left-0 w-full h-2 bg-white/30 -z-10 transform skew-x-12"></span>
                </span>
              </h1>
              
              {/* Description */}
              <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
                Optimize your healthcare organization's financial performance with our comprehensive revenue cycle management solutions designed to increase revenue, reduce costs, and improve patient satisfaction.
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
                  <span className="text-white">Increase Revenue by 15%</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <span className="text-white">Reduce Denials by 30%</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <span className="text-white">Improve Cash Flow</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <span className="text-white">Enhance Patient Experience</span>
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
                <h3 className="text-2xl font-bold text-white mb-6">RCM Performance Metrics</h3>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6">
                  {/* Stat 1 */}
                  <div className="bg-white/10 rounded-xl p-6">
                    <div className="text-4xl font-bold text-white mb-2">98%</div>
                    <div className="text-white/80 text-sm">Clean Claims Rate</div>
                    <div className="w-full h-1 bg-white/20 mt-4 rounded-full overflow-hidden">
                      <div className="h-full w-[98%] bg-white/60 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Stat 2 */}
                  <div className="bg-white/10 rounded-xl p-6">
                    <div className="text-4xl font-bold text-white mb-2">30%</div>
                    <div className="text-white/80 text-sm">Faster Reimbursement</div>
                    <div className="w-full h-1 bg-white/20 mt-4 rounded-full overflow-hidden">
                      <div className="h-full w-[70%] bg-white/60 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Stat 3 */}
                  <div className="bg-white/10 rounded-xl p-6">
                    <div className="text-4xl font-bold text-white mb-2">15%</div>
                    <div className="text-white/80 text-sm">Revenue Increase</div>
                    <div className="w-full h-1 bg-white/20 mt-4 rounded-full overflow-hidden">
                      <div className="h-full w-[15%] bg-white/60 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Stat 4 */}
                  <div className="bg-white/10 rounded-xl p-6">
                    <div className="text-4xl font-bold text-white mb-2">24/7</div>
                    <div className="text-white/80 text-sm">Expert Support</div>
                    <div className="w-full h-1 bg-white/20 mt-4 rounded-full overflow-hidden">
                      <div className="h-full w-[100%] bg-white/60 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce hidden md:flex">
            <span className="text-white/60 text-sm mb-2">Scroll to explore</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="py-16 bg-gradient-to-b from-primary/5 to-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyMetrics.map((metric, index) => (
              <div key={index} className="bg-white p-8 rounded-[20px] shadow-card hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="h-14 w-14 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <metric.icon className="h-7 w-7" />
                  </div>
                  <div className="text-5xl font-bold text-primary">{metric.value}</div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{metric.label}</h3>
                <p className="text-gray-600">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RCM Workflow Process Section */}
      <section className="py-20 relative" id="workflow">
        {/* Dark Background with Accent */}
        <div className="absolute inset-0 bg-gray-900 z-0"></div>
        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-0"></div>
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10 z-0"></div>
        
        {/* Diagonal Divider */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-white z-0" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)' }}></div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-white z-0" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0 100%)' }}></div>
        
        <div className="container relative z-10 pt-16">
          {/* Bold Section Header */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-primary/20 text-white px-4 py-1 rounded-sm text-sm font-bold tracking-widest uppercase mb-4">
              Our Process
            </div>
            <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              Streamlined RCM <span className="text-primary">Workflow</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Our comprehensive revenue cycle management workflow optimizes every step of the financial process, from patient registration to payment collection.
            </p>
          </div>

          {/* Interactive 3D Workflow Steps - Desktop */}
          <div className="hidden lg:block relative">
            {/* 3D Isometric Grid */}
            <div
              className="relative h-[800px] perspective-[1000px] transition-transform duration-1000"
              style={{ transform: `rotateY(${rotationAngle}deg)` }}
            >
              {/* Central Element */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
                <div className="w-64 h-64 bg-primary text-white flex items-center justify-center transform rotate-45 shadow-[0_0_50px_rgba(11,132,135,0.5)] border-4 border-white/20">
                  <div className="transform -rotate-45 text-center p-6">
                    <div className="text-4xl font-bold mb-2">RCM</div>
                    <div className="text-sm">Revenue Cycle Management</div>
                  </div>
                </div>
              </div>
              
              {/* Workflow Steps in 3D Space */}
              <div className="absolute inset-0">
                {workflowSteps.map((step, index) => {
                  // Calculate 3D positions in a cube-like arrangement
                  let x, y, z, rotateX, rotateY;
                  
                  switch(index) {
                    case 0: // Front top left
                      x = '25%'; y = '25%'; z = 100; rotateX = -15; rotateY = 15;
                      break;
                    case 1: // Front top right
                      x = '75%'; y = '25%'; z = 100; rotateX = -15; rotateY = -15;
                      break;
                    case 2: // Front bottom left
                      x = '25%'; y = '75%'; z = 100; rotateX = 15; rotateY = 15;
                      break;
                    case 3: // Front bottom right
                      x = '75%'; y = '75%'; z = 100; rotateX = 15; rotateY = -15;
                      break;
                    case 4: // Back top left
                      x = '25%'; y = '25%'; z = -100; rotateX = -15; rotateY = 15;
                      break;
                    case 5: // Back top right
                      x = '75%'; y = '25%'; z = -100; rotateX = -15; rotateY = -15;
                      break;
                    case 6: // Center back
                      x = '50%'; y = '50%'; z = -150; rotateX = 0; rotateY = 0;
                      break;
                  }
                  
                  return (
                    <div
                      key={index}
                      className={`absolute w-64 h-64 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 group hover:z-40 ${
                        isExploring && currentStepIndex === index ? 'z-50 scale-125' : ''
                      } ${isExploring && currentStepIndex !== index ? 'opacity-30' : ''}`}
                      style={{
                        left: x,
                        top: y,
                        transform: `translate(-50%, -50%) translateZ(${z}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) ${
                          isExploring && currentStepIndex === index ? 'scale(1.25)' : ''
                        }`,
                      }}
                    >
                      {/* Step Card with 3D Effects */}
                      <div className={`relative w-full h-full transform group-hover:scale-110 transition-transform duration-500 ${
                        isExploring && currentStepIndex === index ? 'animate-pulse' : ''
                      }`}>
                        {/* Card Background with Gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 shadow-xl border overflow-hidden ${
                          isExploring && currentStepIndex === index ? 'border-primary shadow-[0_0_30px_rgba(11,132,135,0.5)]' : 'border-white/10'
                        }`}>
                          {/* Accent Corner */}
                          <div className="absolute top-0 right-0 w-20 h-20 bg-primary transform rotate-45 translate-x-10 -translate-y-10"></div>
                          
                          {/* Step Number */}
                          <div className="absolute top-4 right-4 text-white/80 font-mono text-xl font-bold">
                            {(index + 1).toString().padStart(2, '0')}
                          </div>
                          
                          {/* Content */}
                          <div className="absolute inset-0 p-8 flex flex-col">
                            {/* Icon */}
                            <div className="text-6xl mb-4">{step.icon}</div>
                            
                            {/* Title */}
                            <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                            
                            {/* Short Description */}
                            <p className="text-white/70 text-sm mb-4">{step.shortDesc}</p>
                            
                            {/* Benefit Tag */}
                            <div className="mt-auto">
                              <div className="inline-block bg-primary/20 text-primary-light px-3 py-1 text-xs font-semibold rounded">
                                {step.benefit}
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Hover Overlay with Full Description */}
                        <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-95 transition-opacity duration-300 flex items-center justify-center p-6">
                          <div className="text-white">
                            <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                            <p className="mb-4">{step.description}</p>
                            <div className="inline-block bg-white/20 text-white px-3 py-1 text-sm font-semibold rounded">
                              {step.benefit}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* 3D Grid Lines */}
              <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 pointer-events-none">
                {[...Array(5)].map((_, i) => (
                  <div key={`v-${i}`} className="absolute top-0 bottom-0 w-px bg-white/5" style={{ left: `${i * 25}%` }}></div>
                ))}
                {[...Array(5)].map((_, i) => (
                  <div key={`h-${i}`} className="absolute left-0 right-0 h-px bg-white/5" style={{ top: `${i * 25}%` }}></div>
                ))}
              </div>
            </div>
            
            {/* Navigation Controls */}
            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={() => setRotationAngle(prev => prev - 45)}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-sm transition-colors flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/>
                  <path d="M21 3v5h-5"/>
                </svg>
                Rotate View
              </button>
              <button
                onClick={() => {
                  setIsExploring(!isExploring);
                  if (!isExploring) {
                    setCurrentStepIndex(0);
                    // Auto-cycle through steps
                    const interval = setInterval(() => {
                      setCurrentStepIndex(prev => {
                        if (prev < workflowSteps.length - 1) {
                          return prev + 1;
                        } else {
                          clearInterval(interval);
                          setIsExploring(false);
                          return 0;
                        }
                      });
                    }, 2000);
                  }
                }}
                className={`px-4 py-2 ${isExploring ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-primary hover:bg-primary-dark'} text-white rounded-sm transition-colors flex items-center gap-2`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="M21 21l-4.35-4.35"/>
                </svg>
                {isExploring ? 'Stop Exploring' : 'Explore All Steps'}
              </button>
            </div>
          </div>

          {/* Bold Timeline - Mobile/Tablet */}
          <div className="lg:hidden">
            <div className="relative">
              {/* Vertical Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/50 via-primary to-primary/50"></div>
              
              <div className="space-y-12">
                {workflowSteps.map((step, index) => (
                  <div key={index} className="relative pl-16">
                    {/* Timeline Dot */}
                    <div className="absolute left-0 top-0 w-8 h-8 bg-primary rounded-sm flex items-center justify-center text-white font-bold shadow-lg transform -translate-y-1/2">
                      {index + 1}
                    </div>
                    
                    {/* Content Card */}
                    <div className="bg-gray-800 border-l-4 border-primary p-6 rounded-r-lg shadow-lg">
                      <div className="flex items-start mb-4">
                        <div className="text-4xl mr-4">{step.icon}</div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{step.title}</h3>
                          <p className="text-white/70 text-sm">{step.shortDesc}</p>
                        </div>
                      </div>
                      
                      <p className="text-white/80 mb-4">{step.description}</p>
                      
                      <div className="inline-block bg-primary/20 text-primary-light px-3 py-1 text-xs font-semibold rounded">
                        {step.benefit}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Exploration Info Panel */}
          {isExploring && (
            <div className="hidden lg:block mt-8">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 max-w-2xl mx-auto">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {currentStepIndex + 1}
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {workflowSteps[currentStepIndex]?.title}
                  </h3>
                </div>
                <p className="text-white/80 mb-3">
                  {workflowSteps[currentStepIndex]?.description}
                </p>
                <div className="inline-block bg-primary/20 text-primary-light px-3 py-1 text-sm font-semibold rounded">
                  {workflowSteps[currentStepIndex]?.benefit}
                </div>
              </div>
            </div>
          )}

          {/* Bold Stats Section */}
          <div className="mt-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800 border-t-4 border-primary p-8 text-white">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold">Clean Claims Rate</h3>
                  <div className="text-5xl font-bold text-primary">98%</div>
                </div>
                <p className="text-white/70">Our streamlined workflow ensures first-pass claims success, reducing rework and accelerating payment.</p>
                <div className="mt-4 h-1 w-full bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full w-[98%] bg-primary"></div>
                </div>
              </div>
              
              <div className="bg-gray-800 border-t-4 border-primary p-8 text-white">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold">Days in A/R</h3>
                  <div className="text-5xl font-bold text-primary">-30%</div>
                </div>
                <p className="text-white/70">Reduce your average days in accounts receivable by nearly a third with our optimized process.</p>
                <div className="mt-4 h-1 w-full bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full w-[70%] bg-primary"></div>
                </div>
              </div>
              
              <div className="bg-gray-800 border-t-4 border-primary p-8 text-white">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold">Revenue Increase</h3>
                  <div className="text-5xl font-bold text-primary">15%</div>
                </div>
                <p className="text-white/70">Our clients see an average 15% increase in revenue after implementing our RCM workflow.</p>
                <div className="mt-4 h-1 w-full bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full w-[15%] bg-primary"></div>
                </div>
              </div>
            </div>
            
            {/* CTA */}
            <div className="mt-12 text-center">
              <Link href="/get-started" className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-sm transition-colors text-lg">
                Optimize Your Revenue Cycle Today
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
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Healthcare <span className="text-primary">RCM Solutions</span>
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

      {/* Benefits Section */}
      <section className="py-24 relative" id="benefits">
        <div className="absolute bottom-0 left-0 w-full h-px bg-primary/20 z-0"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-64 h-64 border-[30px] border-primary/5 rounded-full z-0"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-primary/5 rounded-full z-0"></div>
        
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Benefits */}
            <div>
              {/* Section Header */}
              <div className="mb-10">
                <div className="inline-block bg-primary text-white px-4 py-1 rounded-sm text-sm font-bold tracking-widest uppercase mb-4">
                  Why Choose Us
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Benefits of Our <span className="text-primary">RCM Services</span>
                </h2>
                <div className="w-20 h-1 bg-primary mb-6"></div>
                <p className="text-xl text-gray-600">
                  Our comprehensive revenue cycle management services deliver measurable results that improve your practice's financial health and operational efficiency.
                </p>
              </div>
              
              {/* Benefits Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Benefit 1 */}
                <div className="group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20">
                  <div className="flex items-center mb-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <DollarSign className="h-7 w-7" />
                    </div>
                    <div className="ml-4">
                      <div className="text-xs font-bold text-primary uppercase tracking-wider">Benefit 01</div>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Increased Revenue</h4>
                  <p className="text-gray-600">Maximize collections through optimized billing processes, reduced denials, and improved charge capture</p>
                </div>
                
                {/* Benefit 2 */}
                <div className="group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20">
                  <div className="flex items-center mb-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <BarChart3 className="h-7 w-7" />
                    </div>
                    <div className="ml-4">
                      <div className="text-xs font-bold text-primary uppercase tracking-wider">Benefit 02</div>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Reduced Costs</h4>
                  <p className="text-gray-600">Lower operational costs through automation, streamlined workflows, and reduced administrative burden</p>
                </div>
                
                {/* Benefit 3 */}
                <div className="group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20">
                  <div className="flex items-center mb-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Clock className="h-7 w-7" />
                    </div>
                    <div className="ml-4">
                      <div className="text-xs font-bold text-primary uppercase tracking-wider">Benefit 03</div>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Improved Efficiency</h4>
                  <p className="text-gray-600">Streamlined processes that reduce administrative burden and allow your staff to focus on patient care</p>
                </div>
                
                {/* Benefit 4 */}
                <div className="group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20">
                  <div className="flex items-center mb-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Shield className="h-7 w-7" />
                    </div>
                    <div className="ml-4">
                      <div className="text-xs font-bold text-primary uppercase tracking-wider">Benefit 04</div>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Compliance Assurance</h4>
                  <p className="text-gray-600">Stay compliant with ever-changing healthcare regulations and payer requirements</p>
                </div>
              </div>
            </div>
            
            {/* Right Column - Testimonials */}
            <div className="relative">
              {/* Decorative Background */}
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl transform rotate-2 z-0"></div>
              
              {/* Content Card */}
              <div className="relative bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 z-10">
                {/* Image */}
                <div className="relative mb-10 overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
                  <Image
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Revenue Cycle Management Healthcare Analytics"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <div className="text-white text-xl font-bold">Client Success Stories</div>
                  </div>
                </div>
                
                {/* Testimonials */}
                <div className="space-y-8">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-xl relative">
                      {/* Quote Mark */}
                      <div className="absolute -top-3 -left-3 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M10 11l-2 2-4-4 4-4 2 2-2 2 2 2zm4 2l2-2 4 4-4 4-2-2 2-2-2-2z"/>
                        </svg>
                      </div>
                      
                      {/* Rating Stars */}
                      <div className="flex space-x-1 mb-4 ml-6">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#0B8487" className="text-primary">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                          </svg>
                        ))}
                      </div>
                      
                      {/* Quote */}
                      <p className="text-gray-700 italic mb-4 text-lg">"{testimonial.quote}"</p>
                      
                      {/* Author */}
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold mr-3">
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative" id="cta">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/20 z-0"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-5 z-0"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-3 bg-gradient-to-l from-primary to-primary/0 z-0"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-3 bg-gradient-to-r from-primary to-primary/0 z-0"></div>
        <div className="absolute top-20 left-20 w-40 h-40 border-[20px] border-primary/10 rounded-full z-0"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl z-0"></div>
        
        <div className="container relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Main CTA Card */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                {/* Left Column - Content */}
                <div className="lg:col-span-3 p-8 md:p-12 lg:p-16 relative">
                  {/* Accent Line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
                  
                  {/* Label */}
                  <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-sm text-sm font-bold tracking-widest uppercase mb-6">
                    Take Action Now
                  </div>
                  
                  {/* Heading */}
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    Ready to Optimize Your <span className="text-primary">Revenue Cycle</span>?
                  </h2>
                  
                  {/* Description */}
                  <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                    Schedule a free consultation with our RCM experts to learn how we can help improve your practice's financial performance.
                  </p>
                  
                  {/* Features List */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span className="text-gray-700">Free initial consultation</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span className="text-gray-700">Custom solutions</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span className="text-gray-700">Expert team</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span className="text-gray-700">Proven results</span>
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <Link 
                    href="/get-started" 
                    className="inline-flex items-center bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Schedule a Consultation
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
                
                {/* Right Column - Stats */}
                <div className="lg:col-span-2 bg-gradient-to-br from-primary/10 to-primary/20 p-8 md:p-12 flex items-center justify-center relative overflow-hidden">
                  {/* Background Elements */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/10 rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10">
                    {/* Stats Card */}
                    <div className="bg-white rounded-xl shadow-lg p-8 mb-8 transform hover:scale-105 transition-transform duration-300">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500 uppercase font-bold">Revenue Increase</div>
                          <div className="text-3xl font-bold text-primary">15%</div>
                        </div>
                      </div>
                      <p className="text-gray-600">Average improvement for our clients</p>
                    </div>
                    
                    {/* Testimonial Quote */}
                    <div className="bg-white rounded-xl shadow-lg p-6 relative">
                      {/* Quote Mark */}
                      <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                        </svg>
                      </div>
                      
                      <p className="text-gray-700 italic mb-4">
                        "BHS transformed our revenue cycle. Our clean claims rate improved by 15% and days in A/R reduced by 30%."
                      </p>
                      
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold mr-3">
                          S
                        </div>
                        <div>
                          <p className="text-xs text-gray-600">Medical Director - Washington, D.C.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}