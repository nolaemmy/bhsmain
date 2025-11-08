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
  ChevronDown,
  Stethoscope,
  Building,
  User,
  UserCheck,
  Heart,
  Activity,
  Baby,
  Brain,
  Eye,
  Zap,
  DollarSign,
  RefreshCw,
  Clipboard,
  CheckSquare,
  Search,
  CreditCard,
  HandHeart,
  Lightbulb,
  Target,
  X
} from "lucide-react"

export default function GetStartedClient() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const [fieldValues, setFieldValues] = useState<Record<string, string>>({});
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const isEmailValid = (email: string) => {
    return email === '' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const validateForm = (formData: FormData) => {
    const errors: string[] = []
    
    if (!formData.get('first-name')?.toString().trim()) {
      errors.push('First Name is required')
    }
    
    if (!formData.get('last-name')?.toString().trim()) {
      errors.push('Last Name is required')
    }
    
    if (!formData.get('practice-name')?.toString().trim()) {
      errors.push('Practice Name is required')
    }
    
    const email = formData.get('email')?.toString().trim() || ''
    if (!email) {
      errors.push('Email Address is required')
    } else if (!isEmailValid(email)) {
      errors.push('Please enter a valid email address')
    }
    
    if (!formData.get('phone')?.toString().trim()) {
      errors.push('Phone Number is required')
    }
    
    if (!formData.get('medical-specialty')?.toString()) {
      errors.push('Medical Specialty is required')
    }
    
    if (!formData.get('practice-size')?.toString()) {
      errors.push('Practice Size is required')
    }
    
    if (!formData.get('services-interested')?.toString()) {
      errors.push('Services Interested is required')
    }
    
    setValidationErrors(errors)
    return errors.length === 0
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Clear previous status
    setSubmitStatus('idle')
    
    const formData = new FormData(e.currentTarget)
    
    // Validate form
    if (!validateForm(formData)) {
      return
    }
    
    setIsSubmitting(true)
    
    try {
      const response = await fetch('https://chat.reveraforte.com/bhs.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'first-name': formData.get('first-name')?.toString().trim(),
          'last-name': formData.get('last-name')?.toString().trim(),
          'practice-name': formData.get('practice-name')?.toString().trim(),
          email: formData.get('email')?.toString().trim(),
          phone: formData.get('phone')?.toString().trim(),
          'medical-specialty': formData.get('medical-specialty')?.toString(),
          'practice-size': formData.get('practice-size')?.toString(),
          'services-interested': formData.get('services-interested')?.toString(),
          message: formData.get('message')?.toString().trim() || '',
          source: 'BHS Website Get Started Form'
        }),
      })

      const responseData = await response.json()

      if (response.ok && responseData.success) {
        setSubmitStatus('success')
        setValidationErrors([])
        setFieldValues({}) // Clear field values state
        // Reset form safely
        const form = e.currentTarget
        if (form) {
          form.reset()
        }
        setTimeout(() => {
          setSubmitStatus('idle')
        }, 5000)
      } else {
        console.error('Server response:', responseData)
        throw new Error(responseData.error || 'Failed to submit form')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      setValidationErrors([error instanceof Error ? error.message : 'Network error. Please check your connection and try again.'])
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    
    // Update field values
    setFieldValues(prev => ({ ...prev, [name]: value }))
    
    // Clear validation errors when user starts typing
    if (validationErrors.length > 0) {
      setValidationErrors([])
    }
    
    // Clear submit status when user makes changes
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle')
    }
  }

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
      {/* Enhanced Hero Banner */}
      <section className="relative overflow-hidden py-16 md:py-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#001F3F] via-primary to-[#003a4d]"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
              <div className="md:col-span-7 text-left">
                <div className="inline-flex items-center px-4 py-1.5 mb-6 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <div className="h-2 w-2 rounded-full bg-primary-light animate-pulse mr-2"></div>
                  <span className="text-sm font-medium text-white tracking-wide">Begin Your Transformation</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                  Transform Your{" "}
                  <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-primary-light">
                    Practice
                    <span className="absolute -bottom-1 left-0 h-1.5 w-full bg-gradient-to-r from-blue-200 to-primary-light opacity-70 rounded-full"></span>
                  </span>
                  <br className="md:hidden" />{" "}
                  <span className="relative inline-block">Today</span>
                </h1>
                
                <p className="mt-6 text-blue-50/90 text-lg md:text-xl leading-relaxed max-w-xl">
                  Elevate your healthcare practice with our comprehensive billing solutions. 
                  <span className="text-primary-light font-medium"> Increase revenue</span> and 
                  <span className="text-primary-light font-medium"> reduce administrative burden</span> with our expert team.
                </p>
                
                <div className="mt-8 flex flex-wrap gap-4">
                  <a 
                    href="#consultation-form" 
                    className="group relative inline-flex items-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-primary to-primary-dark rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <span className="relative flex items-center">
                      Get Started Now
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </a>
                  
                  <Link 
                    href="/services/revenue-cycle-management" 
                    className="inline-flex items-center px-6 py-3 text-base font-medium text-white border border-white/30 rounded-full hover:bg-white/10 transition-all duration-300"
                  >
                    <span>Explore Services</span>
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
              
              <div className="md:col-span-5">
                <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl">
                  <h3 className="text-white text-lg font-semibold mb-5 flex items-center">
                    <div className="h-8 w-8 rounded-full bg-primary-light/20 flex items-center justify-center mr-3">
                      <Star className="h-4 w-4 text-primary-light" fill="currentColor" />
                    </div>
                    Why Healthcare Providers Choose Us
                  </h3>
                  
                  <div className="space-y-5">
                    <div className="flex items-start p-3 rounded-xl bg-white/5 border border-white/10">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-br from-blue-400/30 to-primary/30 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-white" />
                      </div>
                      <div className="ml-4">
                        <p className="text-white text-base font-medium">24-Hour Response Time</p>
                        <p className="text-blue-100/70 text-sm mt-1">We prioritize your inquiries with rapid turnaround times</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start p-3 rounded-xl bg-white/5 border border-white/10">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-br from-blue-400/30 to-primary/30 flex items-center justify-center">
                        <Shield className="h-5 w-5 text-white" />
                      </div>
                      <div className="ml-4">
                        <p className="text-white text-base font-medium">HIPAA Compliant Systems</p>
                        <p className="text-blue-100/70 text-sm mt-1">Your patient data is always secure and protected</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start p-3 rounded-xl bg-white/5 border border-white/10">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-br from-blue-400/30 to-primary/30 flex items-center justify-center">
                        <TrendingUp className="h-5 w-5 text-white" />
                      </div>
                      <div className="ml-4">
                        <p className="text-white text-base font-medium">Proven Revenue Growth</p>
                        <p className="text-blue-100/70 text-sm mt-1">Our clients see an average 15-30% increase in collections</p>
                      </div>
                    </div>
                  </div>
                  
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
      </section>

      {/* Main Content */}
      <section 
        ref={sectionRef}
        className="relative py-20 md:py-32 bg-gradient-to-b from-white via-neutral-50 to-white overflow-hidden"
      >
        <div className="container relative z-10">
          <div className={`text-center mb-16 max-w-3xl mx-auto transition-all duration-1000 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Let's Get Started</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complete the form below to begin your journey toward improved revenue cycle management.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-start">
            {/* Secure Contact Form */}
            <div 
              id="consultation-form"
              ref={formRef}
              className={`transition-all duration-1000 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 via-white to-blue-50/50 rounded-[3rem] transform rotate-1 scale-105 shadow-lg -z-10"></div>
                
                <div className="relative bg-white rounded-[2rem] shadow-2xl overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-24 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary-dark/90"></div>
                    <svg className="absolute bottom-0 w-full h-16 text-white fill-current" viewBox="0 0 1200 120" preserveAspectRatio="none">
                      <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
                    </svg>
                  </div>
                  
                  <div className="px-8 pt-28 pb-10 md:px-12">
                    <div className="absolute top-12 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                        <MessageSquare className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">Start Your Journey Today</h3>
                      <p className="text-gray-600 max-w-md mx-auto">
                        Complete this form and our team will reach out within one business day to discuss how we can help your practice thrive.
                      </p>
                    </div>
                    
                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                      <div className="mb-6 flex items-center justify-center p-4 bg-green-50 border border-green-200 rounded-xl text-green-800 text-sm">
                        <CheckCircle className="h-5 w-5 mr-2" />
                        Thank you! Your request has been submitted successfully. We'll contact you within one business day.
                      </div>
                    )}
                    {validationErrors.length > 0 && (
                      <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-800 text-sm">
                        <p className="font-semibold mb-2">Please fix the following errors:</p>
                        <ul className="list-disc list-inside space-y-1">
                          {validationErrors.map((error, index) => (
                            <li key={index}>{error}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {submitStatus === 'error' && validationErrors.length === 0 && (
                      <div className="mb-6 flex items-center justify-center p-4 bg-red-50 border border-red-200 rounded-xl text-red-800 text-sm">
                        <X className="h-5 w-5 mr-2" />
                        Failed to submit your request. Please try again.
                      </div>
                    )}

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div className="relative">
                          <input
                            type="text"
                            id="first-name"
                            name="first-name"
                            placeholder=" "
                            onChange={handleInputChange}
                            className="peer w-full pt-5 pb-2 px-4 border-0 border-b-2 border-gray-300 bg-transparent text-gray-900 focus:ring-0 focus:border-primary outline-none transition-all"
                            required
                          />
                          <label
                            htmlFor="first-name"
                            className={`absolute left-4 text-gray-500 text-sm transition-all peer-focus:text-primary ${
                              fieldValues['first-name'] || false
                                ? 'top-1 text-xs'
                                : 'top-4 text-base peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs'
                            }`}
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
                            onChange={handleInputChange}
                            className="peer w-full pt-5 pb-2 px-4 border-0 border-b-2 border-gray-300 bg-transparent text-gray-900 focus:ring-0 focus:border-primary outline-none transition-all"
                            required
                          />
                          <label
                            htmlFor="last-name"
                            className={`absolute left-4 text-gray-500 text-sm transition-all peer-focus:text-primary ${
                              fieldValues['last-name'] || false
                                ? 'top-1 text-xs'
                                : 'top-4 text-base peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs'
                            }`}
                          >
                            Last Name
                          </label>
                        </div>
                      </div>
                      
                      <div className="relative">
                        <input
                          type="text"
                          id="practice-name"
                          name="practice-name"
                          placeholder=" "
                          onChange={handleInputChange}
                          className="peer w-full pt-5 pb-2 px-4 border-0 border-b-2 border-gray-300 bg-transparent text-gray-900 focus:ring-0 focus:border-primary outline-none transition-all"
                          required
                        />
                        <label
                          htmlFor="practice-name"
                          className={`absolute left-4 text-gray-500 text-sm transition-all peer-focus:text-primary ${
                            fieldValues['practice-name'] || false
                              ? 'top-1 text-xs'
                              : 'top-4 text-base peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs'
                          }`}
                        >
                          Practice Name
                        </label>
                      </div>
                      
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div className="relative">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder=" "
                            onChange={handleInputChange}
                            className="peer w-full pt-5 pb-2 px-4 border-0 border-b-2 border-gray-300 bg-transparent text-gray-900 focus:ring-0 focus:border-primary outline-none transition-all"
                            required
                          />
                          <label
                            htmlFor="email"
                            className={`absolute left-4 text-gray-500 text-sm transition-all peer-focus:text-primary ${
                              fieldValues['email'] || false
                                ? 'top-1 text-xs'
                                : 'top-4 text-base peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs'
                            }`}
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
                            onChange={handleInputChange}
                            className="peer w-full pt-5 pb-2 px-4 border-0 border-b-2 border-gray-300 bg-transparent text-gray-900 focus:ring-0 focus:border-primary outline-none transition-all"
                            required
                          />
                          <label
                            htmlFor="phone"
                            className={`absolute left-4 text-gray-500 text-sm transition-all peer-focus:text-primary ${
                              fieldValues['phone'] || false
                                ? 'top-1 text-xs'
                                : 'top-4 text-base peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs'
                            }`}
                          >
                            Phone Number
                          </label>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="relative group">
                          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-blue-50/50 to-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                          <div className="relative bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200/50 p-3 shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                              <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                                <Stethoscope className="h-3 w-3 text-primary" />
                              </div>
                            </div>
                            <select
                              id="medical-specialty"
                              name="medical-specialty"
                              onChange={handleInputChange}
                              className="peer w-full py-3 pl-12 pr-10 border-0 bg-transparent text-gray-900 focus:ring-0 outline-none transition-all appearance-none text-sm"
                              required
                            >
                              <option value="" disabled selected className="text-gray-400">Select your medical specialty</option>
                              <option value="family-medicine">Family Medicine</option>
                              <option value="internal-medicine">Internal Medicine</option>
                              <option value="pediatrics">Pediatrics</option>
                              <option value="cardiology">Cardiology</option>
                              <option value="dermatology">Dermatology</option>
                              <option value="orthopedics">Orthopedics</option>
                              <option value="psychiatry">Psychiatry</option>
                              <option value="radiology">Radiology</option>
                              <option value="emergency-medicine">Emergency Medicine</option>
                              <option value="anesthesiology">Anesthesiology</option>
                              <option value="pathology">Pathology</option>
                              <option value="surgery">Surgery</option>
                              <option value="obstetrics-gynecology">Obstetrics & Gynecology</option>
                              <option value="neurology">Neurology</option>
                              <option value="ophthalmology">Ophthalmology</option>
                              <option value="urology">Urology</option>
                              <option value="gastroenterology">Gastroenterology</option>
                              <option value="oncology">Oncology</option>
                              <option value="endocrinology">Endocrinology</option>
                              <option value="rheumatology">Rheumatology</option>
                              <option value="pulmonology">Pulmonology</option>
                              <option value="nephrology">Nephrology</option>
                              <option value="infectious-disease">Infectious Disease</option>
                              <option value="other">Other</option>
                            </select>
                            <label
                              htmlFor="medical-specialty"
                              className="absolute left-12 top-1 text-primary text-xs font-medium tracking-wide"
                            >
                              Medical Specialty
                            </label>
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                              <ChevronDown className="h-4 w-4 text-gray-400" />
                            </div>
                          </div>
                        </div>

                        <div className="relative group">
                          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-blue-50/50 to-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                          <div className="relative bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200/50 p-3 shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                              <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                                <Building className="h-3 w-3 text-primary" />
                              </div>
                            </div>
                            <select
                              id="practice-size"
                              name="practice-size"
                              onChange={handleInputChange}
                              className="peer w-full py-3 pl-12 pr-10 border-0 bg-transparent text-gray-900 focus:ring-0 outline-none transition-all appearance-none text-sm"
                              required
                            >
                              <option value="" disabled selected className="text-gray-400">Choose your practice size</option>
                              <option value="solo-practitioner">Solo Practitioner (1 provider)</option>
                              <option value="small-practice">Small Practice (2-5 providers)</option>
                              <option value="medium-practice">Medium Practice (6-15 providers)</option>
                              <option value="large-practice">Large Practice (16-50 providers)</option>
                              <option value="enterprise">Enterprise (50+ providers)</option>
                              <option value="multi-location">Multi-location Practice</option>
                              <option value="hospital-system">Hospital System</option>
                              <option value="urgent-care">Urgent Care Center</option>
                              <option value="ambulatory-surgery">Ambulatory Surgery Center</option>
                              <option value="specialty-clinic">Specialty Clinic</option>
                            </select>
                            <label
                              htmlFor="practice-size"
                              className="absolute left-12 top-1 text-primary text-xs font-medium tracking-wide"
                            >
                              Practice Size
                            </label>
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                              <ChevronDown className="h-4 w-4 text-gray-400" />
                            </div>
                          </div>
                        </div>

                        <div className="relative group">
                          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-blue-50/50 to-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                          <div className="relative bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200/50 p-3 shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                              <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                                <Target className="h-3 w-3 text-primary" />
                              </div>
                            </div>
                            <select
                              id="services-interested"
                              name="services-interested"
                              onChange={handleInputChange}
                              className="peer w-full py-3 pl-12 pr-10 border-0 bg-transparent text-gray-900 focus:ring-0 outline-none transition-all appearance-none text-sm"
                              required
                            >
                              <option value="" disabled selected className="text-gray-400">Select services you're interested in</option>
                              <option value="full-rcm">Full Revenue Cycle Management</option>
                              <option value="medical-coding">Medical Coding</option>
                              <option value="charge-capture">Charge Capture</option>
                              <option value="eligibility-verification">Eligibility Verification</option>
                              <option value="claims-submission">Claims Submission</option>
                              <option value="payment-posting">Payment Posting</option>
                              <option value="accounts-receivable">Accounts Receivable</option>
                              <option value="denial-management">Denial Management</option>
                              <option value="provider-enrollment">Provider Enrollment</option>
                              <option value="credentialing">Credentialing Services</option>
                              <option value="patient-demographics">Patient Demographics</option>
                              <option value="prior-authorization">Prior Authorization</option>
                              <option value="appeals-management">Appeals Management</option>
                              <option value="reporting-analytics">Reporting & Analytics</option>
                              <option value="practice-management">Practice Management</option>
                              <option value="consultation">Consultation Only</option>
                              <option value="multiple-services">Multiple Services</option>
                            </select>
                            <label
                              htmlFor="services-interested"
                              className="absolute left-12 top-1 text-primary text-xs font-medium tracking-wide"
                            >
                              Services Interested In
                            </label>
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                              <ChevronDown className="h-4 w-4 text-gray-400" />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="relative">
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          placeholder=" "
                          onChange={handleInputChange}
                          className="peer w-full pt-5 pb-2 px-4 border-0 border-b-2 border-gray-300 bg-transparent text-gray-900 focus:ring-0 focus:border-primary outline-none transition-all resize-none"
                        ></textarea>
                        <label
                          htmlFor="message"
                          className={`absolute left-4 text-gray-500 text-sm transition-all peer-focus:text-primary ${
                            fieldValues['message'] || false
                              ? 'top-1 text-xs'
                              : 'top-4 text-base peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs'
                          }`}
                        >
                          Tell us about your practice needs
                        </label>
                      </div>
                      
                      {/* Anti-spam honeypot field */}
                      <input type="text" name="_gotcha" style={{ display: "none" }} />
                      
                      <div className="pt-4">
                        <button
                          type="submit"
                          disabled={isSubmitting || submitStatus === 'success'}
                          className={`group relative w-full overflow-hidden rounded-full py-4 text-white shadow-lg transition-all duration-300 hover:shadow-xl font-medium ${
                            submitStatus === 'success'
                              ? 'bg-green-600 hover:bg-green-700'
                              : submitStatus === 'error'
                              ? 'bg-red-600 hover:bg-red-700'
                              : 'bg-primary hover:bg-primary-dark'
                          } ${(isSubmitting || submitStatus === 'success') ? 'opacity-75 cursor-not-allowed' : ''}`}
                        >
                          <span className="relative flex items-center justify-center">
                            {isSubmitting ? (
                              <>
                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                <span>Submitting...</span>
                              </>
                            ) : submitStatus === 'success' ? (
                              <>
                                <CheckCircle className="h-5 w-5 mr-2" />
                                <span>Request Submitted!</span>
                              </>
                            ) : submitStatus === 'error' ? (
                              <>
                                <X className="h-5 w-5 mr-2" />
                                <span>Try Again</span>
                              </>
                            ) : (
                              <>
                                <span className="mr-2">Submit Your Request</span>
                                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                              </>
                            )}
                          </span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Overview */}
            <div 
              className={`transition-all duration-1000 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="relative mb-10 mt-4">
                <div className="relative py-8 px-6 md:px-10 rounded-[30px] bg-white shadow-xl border border-blue-100/50">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="h-12 w-12 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center shadow-lg">
                      <Sunrise className="h-6 w-6 text-white" strokeWidth={1.5} />
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <h2 className="text-2xl font-bold text-primary-dark mb-4 text-center">
                      Let's Get Started
                    </h2>
                    <p className="text-neutral-700 max-w-xl mx-auto text-base leading-relaxed mb-3 text-center">
                      Are you ready to secure your financial stability? Because we are more than ready to assist you on this journey!
                    </p>
                    <p className="text-neutral-600 max-w-xl mx-auto text-sm leading-relaxed mb-6 text-center">
                      From seamless patient scheduling to expert coding/billing, crafting claims, tackling denials, and handling payment postings – we've got your back every step of the way.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Service Cards */}
              <div className="space-y-6">
                {/* Strategic Assessment Card */}
                <div className="group relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-teal-200 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="h-12 w-12 rounded-2xl bg-teal-50 flex items-center justify-center group-hover:bg-teal-100 transition-colors duration-300">
                        <FileText className="h-6 w-6 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">Strategic Assessment</h3>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-teal-50 text-teal-700 border border-teal-200">
                          Free
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Comprehensive analysis of your current billing processes with actionable recommendations.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="h-5 w-5 rounded-full bg-teal-100 flex items-center justify-center">
                        <CheckCircle className="h-3 w-3 text-teal-600" fill="currentColor" />
                      </div>
                      <span className="text-sm text-gray-700">Process evaluation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="h-5 w-5 rounded-full bg-teal-100 flex items-center justify-center">
                        <CheckCircle className="h-3 w-3 text-teal-600" fill="currentColor" />
                      </div>
                      <span className="text-sm text-gray-700">Gap analysis</span>
                    </div>
                  </div>
                </div>

                {/* Full-Service RCM Card */}
                <div className="group relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <TrendingUp className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">Full-Service RCM</h3>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                          Premium
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    End-to-end revenue cycle management with claims processing and denial management.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
                        <CheckCircle className="h-3 w-3 text-primary" fill="currentColor" />
                      </div>
                      <span className="text-sm text-gray-700">Claims submission</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
                        <CheckCircle className="h-3 w-3 text-primary" fill="currentColor" />
                      </div>
                      <span className="text-sm text-gray-700">Denial management</span>
                    </div>
                  </div>
                </div>

                {/* Credentialing Card */}
                <div className="group relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="h-12 w-12 rounded-2xl bg-purple-50 flex items-center justify-center group-hover:bg-purple-100 transition-colors duration-300">
                        <Users className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">Credentialing</h3>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-50 text-purple-700 border border-purple-200">
                          Specialized
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Expert provider enrollment and credentialing services with insurance panels.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center">
                        <CheckCircle className="h-3 w-3 text-purple-600" fill="currentColor" />
                      </div>
                      <span className="text-sm text-gray-700">Provider enrollment</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center">
                        <CheckCircle className="h-3 w-3 text-purple-600" fill="currentColor" />
                      </div>
                      <span className="text-sm text-gray-700">Payer credentialing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
