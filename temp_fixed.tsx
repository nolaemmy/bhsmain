"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { 
  CheckCircle, 
  ArrowRight, 
  Calendar, 
  MessageSquare, 
  FileText, 
  Users, 
  ChevronRight,
  Clock,
  Shield,
  Star,
  Sunrise,
  ExternalLink,
  TrendingUp,
  ChevronDown
} from "lucide-react"

export default function GetStartedPage() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  // Animation on scroll effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Enhanced Hero Banner with 3D Elements */}
      <section className="relative overflow-hidden py-16 md:py-20">
        {/* Animated background with 3D perspective */}
        <div className="absolute inset-0 z-0">
          {/* Main gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#001F3F] via-primary to-[#003a4d]"></div>
          
          {/* Animated floating elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary-light/5 rounded-full blur-2xl animate-float"></div>
          
          {/* Modern grid pattern with perspective */}
          <div className="absolute inset-0 opacity-10 perspective-effect">
            <div className="absolute inset-0 transform rotate-x-12 scale-150">
              <svg className="h-full w-full" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                  </pattern>
                  <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="white" stopOpacity="0.1" />
                    <stop offset="50%" stopColor="white" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="white" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
                <rect width="100%" height="100%" fill="url(#gridGradient)" fillOpacity="0.3" />
              </svg>
            </div>
          </div>
        </div>

        {/* Content container with 3D effect */}
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl">
            {/* Two-column layout with enhanced spacing */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
              {/* Content column with 3D text effects */}
              <div className="md:col-span-7 text-left">
                {/* Enhanced badge with glow effect */}
                <div className="inline-flex items-center px-4 py-1.5 mb-6 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 shadow-glow">
                  <div className="h-2 w-2 rounded-full bg-primary-light animate-pulse mr-2"></div>
                  <span className="text-sm font-medium text-white tracking-wide">Begin Your Transformation</span>
                </div>
                
                {/* 3D heading with enhanced typography */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                  Transform Your{" "}
                  <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-primary-light">
                    Practice
                    <span className="absolute -bottom-1 left-0 h-1.5 w-full bg-gradient-to-r from-blue-200 to-primary-light opacity-70 rounded-full"></span>
                    <span className="absolute -bottom-1 left-0 h-1.5 w-2/3 bg-white opacity-70 blur-sm rounded-full"></span>
                  </span>
                  <br className="md:hidden" />{" "}
                  <span className="relative inline-block">
                    Today
                    <svg className="absolute -bottom-2 -right-2 h-6 w-6 text-primary-light" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 4L13.4 7.05L16.5 7.75L14.25 10.05L14.75 13.15L12 11.7L9.25 13.15L9.75 10.05L7.5 7.75L10.6 7.05L12 4Z" fill="currentColor"/>
                    </svg>
                  </span>
                </h1>
                
                {/* Enhanced subtitle with better typography */}
                <p className="mt-6 text-blue-50/90 text-lg md:text-xl leading-relaxed max-w-xl">
                  Elevate your healthcare practice with our comprehensive billing solutions. 
                  <span className="text-primary-light font-medium"> Increase revenue</span> and 
                  <span className="text-primary-light font-medium"> reduce administrative burden</span> with our expert team.
                </p>
                
                {/* Modern CTA buttons with effects */}
                <div className="mt-8 flex flex-wrap gap-4">
                  <a 
                    href="#consultation-form" 
                    className="group relative inline-flex items-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-primary to-primary-dark rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary-light to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative flex items-center">
                      Get Started Now
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </a>
                  
                  <Link 
                    href="/services/revenue-cycle-management" 
                    className="inline-flex items-center px-6 py-3 text-base font-medium text-white border border-white/30 rounded-full hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
                  >
                    <span>Explore Services</span>
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
              
              {/* Enhanced trust indicators with glassmorphism */}
              <div className="md:col-span-5">
                <div className="relative">
                  {/* Decorative elements */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary-light/20 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-400/20 rounded-full blur-xl"></div>
                  
                  {/* Glass card */}
                  <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl transform transition-transform duration-500 hover:scale-[1.02]">
                    <h3 className="text-white text-lg font-semibold mb-5 flex items-center">
                      <div className="h-8 w-8 rounded-full bg-primary-light/20 flex items-center justify-center mr-3">
                        <Star className="h-4 w-4 text-primary-light" fill="currentColor" />
                      </div>
                      Why Healthcare Providers Choose Us
                    </h3>
                    
                    <div className="space-y-5">
                      {/* Enhanced trust indicators */}
                      <div className="flex items-start p-3 rounded-xl bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/10">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-br from-blue-400/30 to-primary/30 flex items-center justify-center">
                          <Clock className="h-5 w-5 text-white" />
                        </div>
                        <div className="ml-4">
                          <p className="text-white text-base font-medium">24-Hour Response Time</p>
                          <p className="text-blue-100/70 text-sm mt-1">We prioritize your inquiries with rapid turnaround times</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start p-3 rounded-xl bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/10">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-br from-blue-400/30 to-primary/30 flex items-center justify-center">
                          <Shield className="h-5 w-5 text-white" />
                        </div>
                        <div className="ml-4">
                          <p className="text-white text-base font-medium">HIPAA Compliant Systems</p>
                          <p className="text-blue-100/70 text-sm mt-1">Your patient data is always secure and protected</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start p-3 rounded-xl bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/10">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-br from-blue-400/30 to-primary/30 flex items-center justify-center">
                          <TrendingUp className="h-5 w-5 text-white" />
                        </div>
                        <div className="ml-4">
                          <p className="text-white text-base font-medium">Proven Revenue Growth</p>
                          <p className="text-blue-100/70 text-sm mt-1">Our clients see an average 15-30% increase in collections</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Enhanced scroll indicator */}
                    <div className="mt-6 flex justify-center">
                      <a 
                        href="#consultation-form" 
                        className="group flex flex-col items-center text-white/70 hover:text-white transition-all duration-300"
                      >
                        <span className="text-sm mb-2">Complete the form below</span>
                        <div className="h-10 w-10 rounded-full border-2 border-white/30 flex items-center justify-center group-hover:border-white/70 transition-all duration-300">
                          <ChevronDown className="h-5 w-5 animate-bounce" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Staggered Animation */}
      <section 
        ref={sectionRef}
        className="relative py-20 md:py-32 bg-gradient-to-b from-white via-neutral-50 to-white overflow-hidden"
      >
        {/* Subtle background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-40 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          {/* Form and Testimonials Section */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-start">
            {/* Form Section - Completely Redesigned */}
            <div 
              id="consultation-form"
              ref={formRef}
              className={`transition-all duration-1000 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
            >
              {/* Layered cloud design with 3D effect */}
              <div className="relative">
                {/* Background layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 via-white to-blue-50/50 rounded-[3rem] transform rotate-1 scale-105 shadow-lg -z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-white to-primary/5 rounded-[3rem] transform -rotate-1 scale-[1.03] shadow-md -z-20"></div>
                <div className="absolute inset-0 bg-white/30 backdrop-blur-xl rounded-[3rem] transform rotate-2 scale-[1.07] shadow-md -z-30"></div>
                
                {/* Decorative elements */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
                <div className="absolute top-1/3 -left-6 w-12 h-12 bg-blue-100 rounded-full opacity-40"></div>
                <div className="absolute bottom-1/3 -right-6 w-12 h-12 bg-blue-100 rounded-full opacity-40"></div>
                
                {/* Main form container */}
                <div className="relative bg-white rounded-[2rem] shadow-2xl overflow-hidden">
                  {/* Top wave decoration */}
                  <div className="absolute top-0 left-0 right-0 h-24 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary-dark/90"></div>
                    <svg className="absolute bottom-0 w-full h-16 text-white fill-current" viewBox="0 0 1200 120" preserveAspectRatio="none">
                      <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
                      <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
                      <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
                    </svg>
                  </div>
                  
                  {/* Form content with padding to account for the wave */}
                  <div className="px-8 pt-28 pb-10 md:px-12">
                    {/* Floating icon */}
                    <div className="absolute top-12 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                        <MessageSquare className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    
                    {/* Form header */}
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">Start Your Journey Today</h3>
                      <p className="text-gray-600 max-w-md mx-auto">
                        Complete this form and our team will reach out within one business day to discuss how we can help your practice thrive.
                      </p>
                    </div>
                    
                    {/* Form fields with floating labels and enhanced styling */}
                    <form className="space-y-6">
                      {/* Name fields */}
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div className="relative">
                          <input
                            type="text"
                            id="first-name"
                            name="first-name"
                            placeholder=" "
                            className="peer w-full pt-5 pb-2 px-4 border-0 border-b-2 border-gray-300 bg-transparent text-gray-900 focus:ring-0 focus:border-primary outline-none transition-all"
                            required
                          />
                          <label 
                            htmlFor="first-name" 
                            className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-primary"
                          >
                            First Name
                          </label>
                        </div>
                        <div className="relative">
                          <input
                            type="text"
                            id="last-name"
                            name="last-name"
                            placeholder=" "
                            className="peer w-full pt-5 pb-2 px-4 border-0 border-b-2 border-gray-300 bg-transparent text-gray-900 focus:ring-0 focus:border-primary outline-none transition-all"
                            required
                          />
                          <label 
                            htmlFor="last-name" 
                            className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-primary"
                          >
                            Last Name
                          </label>
                        </div>
                      </div>
                      
                      {/* Practice name */}
                      <div className="relative">
                        <input
                          type="text"
                          id="practice-name"
                          name="practice-name"
                          placeholder=" "
                          className="peer w-full pt-5 pb-2 px-4 border-0 border-b-2 border-gray-300 bg-transparent text-gray-900 focus:ring-0 focus:border-primary outline-none transition-all"
                          required
                        />
                        <label 
                          htmlFor="practice-name" 
                          className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-primary"
                        >
                          Practice Name
                        </label>
                      </div>
                      
                      {/* Contact info */}
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div className="relative">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder=" "
                            className="peer w-full pt-5 pb-2 px-4 border-0 border-b-2 border-gray-300 bg-transparent text-gray-900 focus:ring-0 focus:border-primary outline-none transition-all"
                            required
                          />
                          <label 
                            htmlFor="email" 
                            className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-primary"
                          >
                            Email Address
                          </label>
                        </div>
                        <div className="relative">
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder=" "
                            className="peer w-full pt-5 pb-2 px-4 border-0 border-b-2 border-gray-300 bg-transparent text-gray-900 focus:ring-0 focus:border-primary outline-none transition-all"
                            required
                          />
                          <label 
                            htmlFor="phone" 
                            className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-primary"
                          >
                            Phone Number
                          </label>
                        </div>
                      </div>
                      
                      {/* Specialty dropdown - Enhanced with modern styling */}
                      <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 via-primary/0 to-primary/0 rounded-lg blur opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition duration-500 group-hover:duration-200"></div>
                        <div className="relative bg-white/50 group-hover:bg-white/80 group-focus-within:bg-white rounded-lg transition-all duration-300">
                          <select
                            id="specialty"
                            name="specialty"
                            className="w-full appearance-none pt-6 pb-2 px-4 border-0 rounded-lg bg-transparent text-gray-900 focus:ring-0 outline-none transition-all group-hover:shadow-sm"
                            defaultValue=""
                            required
                          >
                            <option value="" disabled></option>
                            <option value="internal-medicine">Internal Medicine</option>
                            <option value="family-practice">Family Practice</option>
                            <option value="pediatrics">Pediatrics</option>
                            <option value="obgyn">OB/GYN</option>
                            <option value="cardiology">Cardiology</option>
                            <option value="other">Other</option>
                          </select>
                          <label className="absolute left-4 top-1.5 text-xs font-medium text-primary transition-all duration-300 group-hover:text-primary-dark">
                            Medical Specialty
                          </label>
                          <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/20 group-hover:via-primary/30 group-hover:to-primary/20 group-focus-within:from-primary group-focus-within:via-primary group-focus-within:to-primary rounded-l-lg transition-all duration-300"></div>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4">
                            <div className="h-8 w-8 rounded-full bg-primary/0 group-hover:bg-primary/5 group-focus-within:bg-primary/10 flex items-center justify-center transition-all duration-300">
                              <ChevronDown className="h-4 w-4 text-gray-400 group-hover:text-primary group-focus-within:text-primary transition-all duration-300 group-hover:animate-pulse" />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Practice size dropdown - Enhanced with modern styling */}
                      <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 via-primary/0 to-primary/0 rounded-lg blur opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition duration-500 group-hover:duration-200"></div>
                        <div className="relative bg-white/50 group-hover:bg-white/80 group-focus-within:bg-white rounded-lg transition-all duration-300">
                          <select
                            id="practice-size"
                            name="practice-size"
                            className="w-full appearance-none pt-6 pb-2 px-4 border-0 rounded-lg bg-transparent text-gray-900 focus:ring-0 outline-none transition-all group-hover:shadow-sm"
                            defaultValue=""
                            required
                          >
                            <option value="" disabled></option>
                            <option value="solo">Solo Provider</option>
                            <option value="small">2-5 Providers</option>
                            <option value="medium">6-10 Providers</option>
                            <option value="large">11+ Providers</option>
                          </select>
                          <label className="absolute left-4 top-1.5 text-xs font-medium text-primary transition-all duration-300 group-hover:text-primary-dark">
                            Practice Size
                          </label>
                          <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/20 group-hover:via-primary/30 group-hover:to-primary/20 group-focus-within:from-primary group-focus-within:via-primary group-focus-within:to-primary rounded-l-lg transition-all duration-300"></div>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4">
                            <div className="h-8 w-8 rounded-full bg-primary/0 group-hover:bg-primary/5 group-focus-within:bg-primary/10 flex items-center justify-center transition-all duration-300">
                              <ChevronDown className="h-4 w-4 text-gray-400 group-hover:text-primary group-focus-within:text-primary transition-all duration-300 group-hover:animate-pulse" />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Services dropdown - Enhanced with modern styling */}
                      <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 via-primary/0 to-primary/0 rounded-lg blur opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition duration-500 group-hover:duration-200"></div>
                        <div className="relative bg-white/50 group-hover:bg-white/80 group-focus-within:bg-white rounded-lg transition-all duration-300">
                          <select
                            id="services"
                            name="services"
                            className="w-full appearance-none pt-6 pb-2 px-4 border-0 rounded-lg bg-transparent text-gray-900 focus:ring-0 outline-none transition-all group-hover:shadow-sm"
                            defaultValue=""
                            required
                          >
                            <option value="" disabled></option>
                            <option value="medical-billing">Medical Billing</option>
                            <option value="rcm">Revenue Cycle Management</option>
                            <option value="credentialing">Provider Credentialing</option>
                            <option value="financial-assistance">Financial Assistance</option>
                            <option value="all">All Services</option>
                          </select>
                          <label className="absolute left-4 top-1.5 text-xs font-medium text-primary transition-all duration-300 group-hover:text-primary-dark">
                            Services Interested In
                          </label>
                          <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/20 group-hover:via-primary/30 group-hover:to-primary/20 group-focus-within:from-primary group-focus-within:via-primary group-focus-within:to-primary rounded-l-lg transition-all duration-300"></div>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4">
                            <div className="h-8 w-8 rounded-full bg-primary/0 group-hover:bg-primary/5 group-focus-within:bg-primary/10 flex items-center justify-center transition-all duration-300">
                              <ChevronDown className="h-4 w-4 text-gray-400 group-hover:text-primary group-focus-within:text-primary transition-all duration-300 group-hover:animate-pulse" />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Additional information textarea */}
                      <div className="relative">
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          placeholder=" "
                          className="peer w-full pt-5 pb-2 px-4 border-0 border-b-2 border-gray-300 bg-transparent text-gray-900 focus:ring-0 focus:border-primary outline-none transition-all resize-none"
                        ></textarea>
                        <label 
                          htmlFor="message" 
                          className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-primary"
                        >
                          Additional Information
                        </label>
                      </div>
                      
                      {/* Submit button with wave effect */}
                      <div className="pt-4">
                        <button 
                          type="submit" 
                          className="group relative w-full overflow-hidden rounded-full bg-primary py-4 text-white shadow-lg transition-all duration-300 hover:shadow-xl"
                        >
                          {/* Wave animation on hover */}
                          <div className="absolute inset-0 h-full w-full scale-x-0 transform bg-primary-dark transition-transform duration-700 origin-left group-hover:scale-x-100"></div>
                          
                          <span className="relative flex items-center justify-center">
                            <span className="mr-2 font-medium">Submit Your Request</span>
                            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                          </span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* Let's Get Started Section */}
            <div 
              className={`transition-all duration-1000 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              {/* Cloud-like design for Let's Get Started section */}
              <div className="relative mb-10 mt-4">
                {/* Cloud background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50 rounded-[40px] shadow-lg transform -rotate-1 scale-105 -z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-white to-primary/5 rounded-[40px] shadow-md transform rotate-1 -z-10"></div>
                
                {/* Content */}
                <div className="relative py-8 px-6 md:px-10 rounded-[30px] bg-white/80 backdrop-blur-sm border border-blue-100/50 shadow-xl">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="h-12 w-12 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center shadow-lg">
                      <Sunrise className="h-6 w-6 text-white" strokeWidth={1.5} />
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-10 left-6 h-20 w-20 rounded-full bg-blue-100/30 -z-10"></div>
                  <div className="absolute bottom-10 right-6 h-16 w-16 rounded-full bg-primary/10 -z-10"></div>
                  
                  <div className="pt-4">
                    {/* Heading */}
                    <h2 className="font-serif text-2xl font-bold text-primary-dark mb-4 text-center">
                      Let's Get Started
                    </h2>
                
                    {/* Subheading Paragraph 1 */}
                    <p className="text-neutral-700 max-w-xl mx-auto text-base leading-relaxed mb-3 text-center">
                      Are you ready to secure your financial stability? Because we are more than ready to assist you on this journey!
                    </p>
                
                    {/* Subheading Paragraph 2 */}
                    <p className="text-neutral-600 max-w-xl mx-auto text-sm leading-relaxed mb-6 text-center">
                      From seamless patient scheduling to expert coding/billing, crafting claims, tackling denials, and handling payment postings – we've got your back every step of the way.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Ultra Premium Service Showcase */}
              <div className="relative mt-16 mb-12 perspective-1000">
                {/* Advanced section background with animated particles and mesh gradient */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-slate-50/5 to-transparent opacity-10"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-30"></div>
                  
                  {/* Subtle animated particles */}
                  <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-primary/40 rounded-full animate-pulse-slow"></div>
                  <div className="absolute top-3/4 left-1/3 w-1.5 h-1.5 bg-blue-400/30 rounded-full animate-pulse-slow animation-delay-1000"></div>
                  <div className="absolute top-1/2 left-2/3 w-1 h-1 bg-green-400/40 rounded-full animate-pulse-slow animation-delay-2000"></div>
                  <div className="absolute top-1/3 left-3/4 w-2 h-2 bg-amber-400/30 rounded-full animate-pulse-slow animation-delay-3000"></div>
                </div>
                
                {/* Enhanced section title with 3D effect and animated accent */}
                <div className="text-center mb-12 relative">
                  <div className="inline-block relative">
                    <span className="inline-block text-xs font-semibold tracking-widest text-primary/80 uppercase mb-2 relative">
                      Transformative Healthcare Solutions
                      <span className="absolute -left-4 top-1/2 h-px w-3 bg-primary/40"></span>
                      <span className="absolute -right-4 top-1/2 h-px w-3 bg-primary/40"></span>
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-primary relative inline-block">
                      Comprehensive Revenue Solutions
                      <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                      <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary animate-expand-center"></div>
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                      Our tailored services are designed to optimize your revenue cycle, reduce administrative burden, 
                      and help your practice thrive in today's complex healthcare landscape.
                    </p>
                  </div>
                </div>

                {/* Ultra premium service cards with advanced 3D effects - 4-card grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-5">
                  
                  {/* Card 1 - Strategic Assessment - Ultra Premium Design */}
                  <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-teal-900/90 to-teal-700/90 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-teal-500/30 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(20,184,166,0.2)] hover:-translate-y-1">
                    {/* Advanced background elements with parallax effect */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-teal-400/10 rounded-full blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 transform group-hover:scale-110 group-hover:translate-x-5 group-hover:-translate-y-5"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-teal-300/10 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 transform group-hover:scale-110 group-hover:-translate-x-5 group-hover:translate-y-5"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    {/* Animated mesh pattern overlay */}
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwID60IDYwIj48cGF0aCBkPSJNMzAgMEMxMy40IDAgMCAxMy40IDAgMzBzMTMuNCAzMCAzMCAzMCAzMC0xMy40IDMwLTMwUzQ2LjYgMCAzMCAwem0wIDU0QzE2LjggNTQgNiA0My4yIDYgMzBTMTYuOCA2IDMwIDZzMjQgMTAuOCAyNCAyNC0xMC44IDI0LTI0IDI0eiIgZmlsbD0iIzE0YjhhNiIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+PC9zdmc+')] opacity-10 group-hover:opacity-20 transition-opacity duration-700"></div>
                    
                    {/* Multi-layered border glow effect */}
                    <div className="absolute inset-0 rounded-xl border border-teal-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-[1px] rounded-[10px] border border-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100"></div>
                    
                    {/* Inner content container with enhanced glass effect */}
                    <div className="relative p-6 flex flex-col h-full backdrop-blur-sm z-10">
                      {/* Premium icon with advanced glow and animation */}
                      <div className="mb-5 relative">
                        <div className="absolute inset-0 bg-teal-400/20 rounded-full blur-md transform group-hover:scale-150 transition-transform duration-700"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-teal-400/0 via-teal-400/30 to-teal-400/0 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 to-teal-600 text-white shadow-lg group-hover:shadow-teal-500/40 transition-all duration-500">
                          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-400/80 to-teal-600/80 animate-pulse-slow opacity-0 group-hover:opacity-100"></div>
                          <FileText className="h-7 w-7 relative z-10 group-hover:scale-110 transition-transform duration-500" />
                        </div>
                      </div>
                      
                      {/* Enhanced title with premium badge and 3D effect */}
                      <div className="flex items-center mb-3">
                        <h3 className="text-xl font-bold text-white group-hover:text-teal-200 transition-colors duration-300 drop-shadow-sm">Strategic Assessment</h3>
                        <div className="ml-2 px-2.5 py-1 text-xs font-semibold bg-gradient-to-r from-teal-500/30 to-teal-600/30 text-teal-200 rounded-full border border-teal-400/20 shadow-sm transform group-hover:scale-105 transition-transform duration-300">Free</div>
                      </div>
                      
                      {/* Premium animated divider with shimmer effect */}
                      <div className="relative h-0.5 w-16 overflow-hidden rounded-full mb-4 group-hover:w-28 transition-all duration-700">
                        <div className="absolute inset-0 bg-gradient-to-r from-teal-400/70 via-teal-300 to-teal-400/70 animate-shimmer"></div>
                      </div>
                      
                      {/* Enhanced description with improved typography */}
                      <p className="text-teal-100/90 mb-5 leading-relaxed">
                        Comprehensive analysis of your current billing processes with actionable recommendations for improvement.
                      </p>
                      
                      {/* Ultra premium CTA button with advanced effects */}
                      <div className="mt-auto">
                        <a href="#consultation-form" className="group/btn relative inline-flex items-center justify-center px-5 py-2.5 rounded-lg overflow-hidden transition-all duration-500 transform hover:scale-105">
                          {/* Button background layers */}
                          <span className="absolute inset-0 bg-gradient-to-r from-teal-600/90 to-teal-500/90 opacity-90 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                          <span className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cGF0aCBkPSJNMjAgMEMxMy40IDAgMCAx3LjQgMCAzMHMxMy40IDMwIDMwIDMwIDMwLTEzLjQgMzAtMzBTNDYuNiAwIDMwIDB6bTAgNTNDMTYuOCA1NCA2IDQzLjIgNiAzMFMxNi44IDYgMzAgNnMyNCAxMC44IDI0IDI0LTEwLjggMjQtMjQgMjR6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')] opacity-0 group-hover/btn:opacity-20 transition-opacity duration-500"></span>
                          
                          {/* Button glow effects */}
                          <span className="absolute inset-0 bg-gradient-to-r from-teal-400/0 via-teal-400/40 to-teal-400/0 opacity-0 group-hover/btn:opacity-100 blur-sm transition-opacity duration-500"></span>
                          <span className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></span>
                          
                          {/* Button border */}
                          <span className="absolute inset-0 rounded-lg border border-teal-400/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                          
                          {/* Button content with enhanced animation */}
                          <span className="relative flex items-center text-teal-50 font-medium">
                            <span className="mr-2 text-xs opacity-70 group-hover/btn:opacity-100 transition-opacity duration-300">START</span>
                            <span>Get Assessment</span>
                            <ArrowRight className="h-4 w-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Card 2 - Full-Service RCM - Ultra Premium Design */}
                  <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-900/90 to-blue-700/90 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-blue-500/30 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(0,0,255,0.2)] hover:-translate-y-1">
                    {/* Advanced background elements with parallax effect */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-blue-400/10 rounded-full blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 transform group-hover:scale-110 group-hover:translate-x-5 group-hover:-translate-y-5"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-300/10 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 transform group-hover:scale-110 group-hover:-translate-x-5 group-hover:translate-y-5"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    {/* Animated mesh pattern overlay */}
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cGF0aCBkPSJNMzAgMEMxMy40IDAgMCAxMy40IDAgMzBzMTMuNCAzMCAzMCAzMCAzMC0xMy40IDMwLTMwUzQ2LjYgMCAzMCAwem0wIDU0QzE2LjggNTQgNiA0My4yIDYgMzBTMTYuOCA2IDMwIDZzMjQgMTAuOCAyNCAyNC0xMC44IDI0LTI0IDI0eiIgZmlsbD0iIzM0ODJmNiIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+PC9zdmc+')] opacity-10 group-hover:opacity-20 transition-opacity duration-700"></div>
                    
                    {/* Multi-layered border glow effect */}
                    <div className="absolute inset-0 rounded-xl border border-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-[1px] rounded-[10px] border border-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100"></div>
                    
                    {/* Inner content container with enhanced glass effect */}
                    <div className="relative p-6 flex flex-col h-full backdrop-blur-sm z-10">
                      {/* Premium icon with advanced glow and animation */}
                      <div className="mb-5 relative">
                        <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-md transform group-hover:scale-150 transition-transform duration-700"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/30 to-blue-400/0 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-white shadow-lg group-hover:shadow-blue-500/40 transition-all duration-500">
                          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/80 to-blue-600/80 animate-pulse-slow opacity-0 group-hover:opacity-100"></div>
                          <TrendingUp className="h-7 w-7 relative z-10 group-hover:scale-110 transition-transform duration-500" />
                        </div>
                      </div>
                      
                      {/* Enhanced title with premium badge and 3D effect */}
                      <div className="flex items-center mb-3">
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-200 transition-colors duration-300 drop-shadow-sm">Full-Service RCM</h3>
                        <div className="ml-2 px-2.5 py-1 text-xs font-semibold bg-gradient-to-r from-blue-500/30 to-blue-600/30 text-blue-200 rounded-full border border-blue-400/20 shadow-sm transform group-hover:scale-105 transition-transform duration-300">Premium</div>
                      </div>
                      
                      {/* Premium animated divider with shimmer effect */}
                      <div className="relative h-0.5 w-16 overflow-hidden rounded-full mb-4 group-hover:w-28 transition-all duration-700">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/70 via-blue-300 to-blue-400/70 animate-shimmer"></div>
                      </div>
                      
                      {/* Enhanced description with improved typography */}
                      <p className="text-blue-100/90 mb-5 leading-relaxed">
                        End-to-end revenue cycle management with claims processing, denial management, and payment posting.
                      </p>
                      
                      {/* Ultra premium CTA button with advanced effects */}
                      <div className="mt-auto">
                        <a href="#consultation-form" className="group/btn relative inline-flex items-center justify-center px-5 py-2.5 rounded-lg overflow-hidden transition-all duration-500 transform hover:scale-105">
                          {/* Button background layers */}
                          <span className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-500/90 opacity-90 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                          <span className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cGF0aCBkPSJNMjAgMEMxMy40IDAgMCAxMy40IDAgMzBzMTMuNCAzMCAzMCAzMCAzMC0xMy40IDMwLTMwUzQ2LjYgMCAzMCAwem0wIDU0QzE2LjggNTQgNiA0My4yIDYgMzBTMTYuOCA2IDMwIDZzMjQgMTAuOCAyNCAyNC0xMC44IDI0LTI0IDI0eiIgZmlsbD0iI2ZmZiIgZillLW9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')] opacity-0 group-hover/btn:opacity-20 transition-opacity duration-500"></span>
                          
                          {/* Button glow effects */}
                          <span className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/40 to-blue-400/0 opacity-0 group-hover/btn:opacity-100 blur-sm transition-opacity duration-500"></span>
                          <span className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></span>
                          
                          {/* Button border */}
                          <span className="absolute inset-0 rounded-lg border border-blue-400/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                          
                          {/* Button content with enhanced animation */}
                          <span className="relative flex items-center text-blue-50 font-medium">
                            <span className="mr-2 text-xs opacity-70 group-hover/btn:opacity-100 transition-opacity duration-300">BOOST</span>
                            <span>Learn More</span>
                            <ArrowRight className="h-4 w-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Card 3 - Credentialing - Ultra Premium Design */}
                  <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-900/90 to-purple-700/90 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-purple-500/30 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(147,51,234,0.2)] hover:-translate-y-1">
                    {/* Advanced background elements with parallax effect */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-purple-400/10 rounded-full blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 transform group-hover:scale-110 group-hover:translate-x-5 group-hover:-translate-y-5"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-300/10 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 transform group-hover:scale-110 group-hover:-translate-x-5 group-hover:translate-y-5"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    {/* Animated mesh pattern overlay */}
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cGF0aCBkPSJNMzAgMEMxMy40IDAgMCAxMy40IDAgMzBzMTMuNCAzMCAzMCAzMCAzMC0xMy40IDMwLTMwUzQ2LjYgMCAzMCAwem0wIDU0QzE2LjggNTQgNiA0My.2IDYgMzBTMTYuOCA2IDMwIDZzMjQgMTAuOCAyNCAyNC0xMC44IDI0LTI0IDI0eiIgZmlsbD0iIzk3MzNlYSIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+PC9zdmc+')] opacity-10 group-hover:opacity-20 transition-opacity duration-700"></div>
                    
                    {/* Multi-layered border glow effect */}
                    <div className="absolute inset-0 rounded-xl border border-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-[1px] rounded-[10px] border border-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100"></div>
                    
                    {/* Inner content container with enhanced glass effect */}
                    <div className="relative p-6 flex flex-col h-full backdrop-blur-sm z-10">
                      {/* Premium icon with advanced glow and animation */}
                      <div className="mb-5 relative">
                        <div className="absolute inset-0 bg-purple-400/20 rounded-full blur-md transform group-hover:scale-150 transition-transform duration-700"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-400/0 via-purple-400/30 to-purple-400/0 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-purple-600 text-white shadow-lg group-hover:shadow-purple-500/40 transition-all duration-500">
                          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400/80 to-purple-600/80 animate-pulse-slow opacity-0 group-hover:opacity-100"></div>
                          <Users className="h-7 w-7 relative z-10 group-hover:scale-110 transition-transform duration-500" />
                        </div>
                      </div>
                      
                      {/* Enhanced title with premium badge and 3D effect */}
                      <div className="flex items-center mb-3">
                        <h3 className="text-xl font-bold text-white group-hover:text-purple-200 transition-colors duration-300 drop-shadow-sm">Credentialing</h3>
                        <div className="ml-2 px-2.5 py-1 text-xs font-semibold bg-gradient-to-r from-purple-500/30 to-purple-600/30 text-purple-200 rounded-full border border-purple-400/20 shadow-sm transform group-hover:scale-105 transition-transform duration-300">Specialized</div>
                      </div>
                      
                      {/* Premium animated divider with shimmer effect */}
                      <div className="relative h-0.5 w-16 overflow-hidden rounded-full mb-4 group-hover:w-28 transition-all duration-700">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-400/70 via-purple-300 to-purple-400/70 animate-shimmer"></div>
                      </div>
                      
                      {/* Enhanced description with improved typography */}
                      <p className="text-purple-100/90 mb-5 leading-relaxed">
                        Expert provider enrollment and credentialing services with insurance panels and hospitals.
                      </p>
                      
                      {/* Ultra premium CTA button with advanced effects */}
                      <div className="mt-auto">
                        <a href="#consultation-form" className="group/btn relative inline-flex items-center justify-center px-5 py-2.5 rounded-lg overflow-hidden transition-all duration-500 transform hover:scale-105">
                          {/* Button background layers */}
                          <span className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-purple-500/90 opacity-90 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                          <span className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cGF0aCBkPSJNMjAgMEMxMy40IDAgMCAxMy40IDAgMzBzMTMuNCAzMCAzMCAzMCAzMC0xMy40IDMwLTMwUzQ2LjYgMCAzMCAwem0wIDU0QzE2LjggNTQgNiA0My4yIDYgMzBTMTYuOCA2IDMwIDZzMjQgMTAu8IDI0IDI0LTEwLjggMjQtMjQgMjR6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')] opacity-0 group-hover/btn:opacity-20 transition-opacity duration-500"></span>
                          
                          {/* Button glow effects */}
                          <span className="absolute inset-0 bg-gradient-to-r from-purple-400/0 via-purple-400/40 to-purple-400/0 opacity-0 group-hover/btn:opacity-100 blur-sm transition-opacity duration-500"></span>
                          <span className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></span>
                          
                          {/* Button border */}
                          <span className="absolute inset-0 rounded-lg border border-purple-400/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                          
                          {/* Button content with enhanced animation */}
                          <span className="relative flex items-center text-purple-50 font-medium">
                            <span className="mr-2 text-xs opacity-70 group-hover/btn:opacity-100 transition-opacity duration-300">ENROLL</span>
                            <span>Get Details</span>
                            <ArrowRight className="h-4 w-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Card 4 - Dedicated Support - Ultra Premium Design */}
                  <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-amber-900/90 to-amber-700/90 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-amber-500/30 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(255,165,0,0.2)] hover:-translate-y-1">
                    {/* Advanced background elements with parallax effect */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-amber-400/10 rounded-full blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 transform group-hover:scale-110 group-hover:translate-x-5 group-hover:-translate-y-5"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-300/10 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 transform group-hover:scale-110 group-hover:-translate-x-5 group-hover:translate-y-5"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    {/* Animated mesh pattern overlay */}
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cGF0aCBkPSJNMzAgMEMxMy40IDAgMCAxMy40IDAgMzBzMTMuNCAzMCAzMCAzMCAzMC0xMy40IDMwLTMwUzQ2LjYgMCAzMCAwem0wIDU0QzE2LjggNTQgNiA0My4yIDYgMzBTMTYuOCA2IDMwIDZzMjQgMTAuOCAyNCAyNC0xMC44IDI0LTI0IDI0eiIgZmlsbD0iI2YzOWMxMiIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+PC9zdmc+')] opacity-10 group-hover:opacity-20 transition-opacity duration-700"></div>
                    
                    {/* Multi-layered border glow effect */}
                    <div className="absolute inset-0 rounded-xl border border-amber-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-[1px] rounded-[10px] border border-amber-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100"></div>
                    
                    {/* Inner content container with enhanced glass effect */}
                    <div className="relative p-6 flex flex-col h-full backdrop-blur-sm z-10">
                      {/* Premium icon with advanced glow and animation */}
                      <div className="mb-5 relative">
                        <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-md transform group-hover:scale-150 transition-transform duration-700"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-400/30 to-amber-400/0 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-white shadow-lg group-hover:shadow-amber-500/40 transition-all duration-500">
                          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400/80 to-amber-600/80 animate-pulse-slow opacity-0 group-hover:opacity-100"></div>
                          <MessageSquare className="h-7 w-7 relative z-10 group-hover:scale-110 transition-transform duration-500" />
                        </div>
                      </div>
                      
                      {/* Enhanced title with premium badge and 3D effect */}
                      <div className="flex items-center mb-3">
                        <h3 className="text-xl font-bold text-white group-hover:text-amber-200 transition-colors duration-300 drop-shadow-sm">Support</h3>
                        <div className="ml-2 px-2.5 py-1 text-xs font-semibold bg-gradient-to-r from-amber-500/30 to-amber-600/30 text-amber-200 rounded-full border border-amber-400/20 shadow-sm transform group-hover:scale-105 transition-transform duration-300">24/7</div>
                      </div>
                      
                      {/* Premium animated divider with shimmer effect */}
                      <div className="relative h-0.5 w-16 overflow-hidden rounded-full mb-4 group-hover:w-28 transition-all duration-700">
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-400/70 via-amber-300 to-amber-400/70 animate-shimmer"></div>
                      </div>
                      
                      {/* Enhanced description with improved typography */}
                      <p className="text-amber-100/90 mb-5 leading-relaxed">
                        Dedicated account manager and priority support with rapid response times for all your needs.
                      </p>
                      
                      {/* Ultra premium CTA button with advanced effects */}
                      <div className="mt-auto">
                        <a href="#consultation-form" className="group/btn relative inline-flex items-center justify-center px-5 py-2.5 rounded-lg overflow-hidden transition-all duration-500 transform hover:scale-105">
                          {/* Button background layers */}
                          <span className="absolute inset-0 bg-gradient-to-r from-amber-600/90 to-amber-500/90 opacity-90 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                          <span className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cGF0aCBkPSJNMjAgMEMxMy40IDAgMCAxMy40IDAgMzBzMTMuNCAzMCAzMCAzMCAzMC0xMy40IDMwLTMwUzQ2LjYgMCAzMCAwem0wIDU0QzE2LjggNTQgNiA0My4yIDYgMzBTMTYuOCA6IDMwIDZzMjQgMTAuOCAyNCAyNC0xMC44IDI0LTI0IDI0eiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+PC9zdmc+')] opacity-0 group-hover/btn:opacity-20 transition-opacity duration-500"></span>
                          
                          {/* Button glow effects */}
                          <span className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-400/40 to-amber-400/0 opacity-0 group-hover/btn:opacity-100 blur-sm transition-opacity duration-500"></span>
                          <span className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></span>
                          
                          {/* Button border */}
                          <span className="absolute inset-0 rounded-lg border border-amber-400/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                          
                          {/* Button content with enhanced animation */}
                          <span className="relative flex items-center text-amber-50 font-medium">
                            <span className="mr-2 text-xs opacity-70 group-hover/btn:opacity-100 transition-opacity duration-300">VIP</span>
                            <span>Contact Us</span>
                            <ArrowRight className="h-4 w-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Add custom CSS for advanced animations */}
              <style jsx global>{`
                .perspective-1000 {
                  perspective: 1000px;
                }
                .animate-pulse-slow {
                  animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
                .animation-delay-1000 {
                  animation-delay: 1000ms;
                }
                .animation-delay-2000 {
                  animation-delay: 2000ms;
                }
                .animation-delay-3000 {
                  animation-delay: 3000ms;
                }
                @keyframes shimmer {
                  0% { background-position: -200% 0; }
                  100% { background-position: 200% 0; }
                }
                .animate-shimmer {
                  animation: shimmer 3s infinite linear;
                  background-size: 200% 100%;
                }
                @keyframes expand-center {
                  0% { width: 0; left: 50%; }
                  50% { width: 100%; left: 0; }
                  100% { width: 0; left: 50%; }
                }
                .animate-expand-center {
                  animation: expand-center 3s ease-in-out infinite;
                }
              `}</style>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}