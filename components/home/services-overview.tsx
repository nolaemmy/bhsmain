"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, FileText, Code, Users, CheckSquare, BarChart3, CreditCard, PieChart, ChevronRight, ExternalLink } from "lucide-react"
import { useState, useEffect, useRef } from "react"

// Define services with consistent theme colors
const services = [
  {
    title: "Provider Enrollment / Credentialing",
    description: "Streamline your provider enrollment and credentialing process with our comprehensive service. We handle all paperwork, track submissions, and ensure timely completion of the credentialing cycle.",
    image: "/Provider Enrollment.jpg",
    href: "/services/provider-enrollment",
    alt: "Provider enrollment and credentialing process",
    benefits: ["Faster enrollment process", "Insurance compliance", "Credential verification"],
    icon: FileText
  },
  {
    title: "Medical Coding",
    description: "Ensure accurate and compliant medical coding with our expert team. We specialize in CPT, ICD-10, and HCPCS code assignment for optimal reimbursement.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    href: "/services/medical-coding",
    alt: "Medical coding professional at work",
    benefits: ["Accurate code assignment", "Compliance adherence", "Maximized reimbursement"],
    icon: Code
  },
  {
    title: "Patient Demographics",
    description: "Maintain accurate and complete patient information with our demographic management service. We ensure data quality and completeness for improved billing outcomes.",
    image: "/Patient Demographics.jpg",
    href: "/services/patient-demographics",
    alt: "Patient demographics management",
    benefits: ["Data accuracy", "Reduced errors", "Improved billing"],
    icon: Users
  },
  {
    title: "Eligibility",
    description: "Verify insurance eligibility in real-time before providing services. Our system checks coverage, benefits, and patient responsibility to prevent claim denials.",
    image: "/Eligibility.jpg",
    href: "/services/eligibility",
    alt: "Insurance eligibility verification",
    benefits: ["Real-time verification", "Reduced denials", "Coverage confirmation"],
    icon: CheckSquare
  },
  {
    title: "Charge Capture",
    description: "Capture all billable services accurately and efficiently. Our charge capture solution ensures complete documentation and proper reimbursement for services rendered.",
    image: "/Charge Capture.jpg",
    href: "/services/charge-capture",
    alt: "Medical charge capture system",
    benefits: ["Complete charge capture", "Revenue optimization", "Accurate billing"],
    icon: BarChart3
  },
  {
    title: "Payment Posting",
    description: "Streamline your payment posting process with our automated solution. We ensure accurate and timely posting of all payments to maintain clean accounts receivable.",
    image: "/Payment Posting.jpg",
    href: "/services/payment-posting",
    alt: "Payment posting process",
    benefits: ["Timely posting", "Accurate reconciliation", "Clean AR"],
    icon: CreditCard
  },
  {
    title: "Accounts Receivable",
    description: "Optimize your accounts receivable management with our comprehensive follow-up service. We work to reduce aging accounts and improve collection rates.",
    image: "/Accounts Receivable.jpg",
    href: "/services/accounts-receivable",
    alt: "Accounts receivable management",
    benefits: ["Reduced aging", "Improved collections", "Revenue optimization"],
    icon: PieChart
  }
]

// Use actual service images instead of placeholders
const serviceImages = services

export default function ServicesOverview() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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

  const toggleExpand = (index: number) => {
    if (expandedCard === index) {
      setExpandedCard(null);
    } else {
      setExpandedCard(index);
    }
  };

  // Function to handle tab change
  const handleTabChange = (index: number) => {
    setActiveTab(index);
    setExpandedCard(null);
  };

  // Get visible services based on active tab
  const visibleServices = activeTab === 0 
    ? serviceImages 
    : [serviceImages[activeTab - 1]];

  return (
    <section 
      ref={sectionRef}
      id="rcm-solutions-section" 
      className="pt-20 md:pt-32 pb-24 md:pb-40 relative overflow-hidden bg-gradient-to-b from-white via-primary/5 to-white"
    >
      {/* Subtle background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-40 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with elegant styling */}
        <div 
          className={`text-center mb-16 md:mb-24 transition-all duration-1000 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="inline-flex items-center justify-center px-5 py-2 bg-primary/10 rounded-full mb-5">
            <span className="text-sm font-semibold text-primary tracking-wide">Healthcare Revenue Cycle</span>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#002E3D] mb-8">
            Our Healthcare <span className="text-primary">RCM Solutions</span>
          </h2>
          
          <p className="text-neutral-600 max-w-3xl mx-auto mb-12 text-lg md:text-xl leading-relaxed">
            We deliver comprehensive revenue cycle management services tailored to healthcare providers, 
            optimizing financial performance while allowing you to focus on patient care.
          </p>
          
          <div className="w-32 h-1 bg-primary/30 mx-auto mb-12"></div>
          
          {/* Service filter tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            <button
              onClick={() => handleTabChange(0)}
              className={`px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === 0 
                  ? 'bg-primary text-white shadow-md' 
                  : 'bg-white text-neutral-600 hover:bg-neutral-100'
              }`}
            >
              All Services
            </button>
            {serviceImages.map((service, index) => (
              <button
                key={index}
                onClick={() => handleTabChange(index + 1)}
                className={`px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === index + 1 
                    ? 'bg-primary text-white shadow-md' 
                    : 'bg-white text-neutral-600 hover:bg-neutral-100'
                }`}
              >
                {service.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Premium Service Showcase with Staggered Layout */}
        <div 
          ref={cardsRef}
          className={`transition-all duration-500 ${
            activeTab === 0 ? '' : 'lg:max-w-3xl lg:mx-auto'
          }`}
        >
          {visibleServices.map((service, index) => {
            // Calculate the real index for animations when filtering
            const realIndex = activeTab === 0 ? index : activeTab - 1;
            // Determine if card should be featured (larger) based on position
            const isLarge = activeTab !== 0 || index % 3 === 1;
            // Alternate layout for visual interest
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={realIndex} 
                className={`group relative transition-all duration-700 transform mb-16 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                }`}
                style={{ 
                  transitionDelay: `${realIndex * 100}ms`,
                }}
              >
                {/* Premium service card with layered design */}
                <div className={`relative ${activeTab === 0 ? 'md:flex' : 'md:block'} ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Decorative elements */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* Image Section with Overlapping Elements */}
                  <div className={`relative ${activeTab === 0 ? 'md:w-2/5' : 'w-full'} z-10`}>
                    <div className="relative h-72 md:h-full overflow-hidden rounded-t-xl md:rounded-xl shadow-lg">
                      <Image
                        src={service.image}
                        alt={service.alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#002E3D] to-transparent opacity-80 mix-blend-multiply"></div>
                      
                      {/* Floating service icon with glass effect */}
                      <div 
                        className="absolute top-6 right-6 bg-white/90 backdrop-blur-md w-16 h-16 rounded-xl flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-all duration-500 border border-white/20"
                        style={{
                          boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.2)'
                        }}
                      >
                        {service.icon && (
                          <service.icon className="text-primary h-8 w-8" />
                        )}
                      </div>
                      
                      {/* Service Title with Elegant Styling */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                        <h3 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-white drop-shadow-md">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    
                    {/* Decorative corner accent */}
                    <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-primary/10 rounded-br-3xl -z-10 hidden md:block"></div>
                  </div>
                  
                  {/* Content Section with Layered Design */}
                  <div className={`relative bg-white p-8 md:p-10 rounded-b-xl md:rounded-xl shadow-lg z-10 ${
                    activeTab === 0 ? 'md:w-3/5 md:-ml-8' : 'w-full md:-mt-8'
                  } ${isEven ? 'md:text-left' : 'md:text-left md:-ml-8'}`}>
                    {/* Subtle pattern background */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none rounded-b-xl md:rounded-xl overflow-hidden">
                      <svg width="100%" height="100%">
                        <pattern id={`grid-pattern-${realIndex}`} width="40" height="40" patternUnits="userSpaceOnUse">
                          <path d="M0 20 L40 20 M20 0 L20 40" stroke="currentColor" strokeWidth="0.5" fill="none" />
                        </pattern>
                        <rect width="100%" height="100%" fill={`url(#grid-pattern-${realIndex})`} />
                      </svg>
                    </div>
                    
                    {/* Content with premium styling */}
                    <div className="relative z-10">
                      <p className={`text-neutral-600 ${expandedCard === realIndex ? '' : 'line-clamp-3'} mb-6 leading-relaxed`}>
                        {service.description}
                      </p>
                      
                      {/* Benefits List with Enhanced Styling */}
                      {expandedCard === realIndex && (
                        <div className="mt-6 mb-8 animate-fade-in">
                          <div className="flex items-center mb-4">
                            <div className="w-8 h-1 bg-primary rounded-full mr-3"></div>
                            <p className="font-semibold text-[#002E3D]">Key Benefits</p>
                          </div>
                          <ul className="space-y-3 pl-4">
                            {service.benefits.map((benefit, i) => (
                              <li key={i} className="flex items-start">
                                <div className="p-1 rounded-full bg-primary/10 mr-3 mt-0.5 flex-shrink-0">
                                  <CheckCircle className="h-4 w-4 text-primary" />
                                </div>
                                <span className="text-neutral-700">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {/* Action buttons with premium styling */}
                      <div className="flex justify-between items-center mt-6 pt-4 border-t border-neutral-100">
                        <button 
                          onClick={() => toggleExpand(realIndex)}
                          className="text-neutral-500 text-sm hover:text-primary transition-colors duration-300 flex items-center gap-1.5"
                        >
                          <span>{expandedCard === realIndex ? 'Show less' : 'Show more'}</span>
                          <ChevronRight className={`h-4 w-4 transition-transform duration-300 ${expandedCard === realIndex ? 'rotate-90' : ''}`} />
                        </button>
                        
                        <Link 
                          href={service.href}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-white font-medium transition-all duration-300 hover:bg-primary-dark shadow-md hover:shadow-lg"
                          aria-label={`Read more about ${service.title}`}
                        >
                          <span>Details</span>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                    
                    {/* Decorative corner accent */}
                    <div className="absolute -top-3 -left-3 w-24 h-24 bg-primary/5 rounded-tl-3xl -z-10 hidden md:block"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Bottom CTA */}
        <div 
          className={`mt-20 text-center transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <Link 
            href="/services/revenue-cycle-management" 
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-medium rounded-lg shadow-lg hover:bg-primary-dark transition-all duration-300 transform hover:-translate-y-1 group"
          >
            <span className="relative z-10">View All Healthcare RCM Services</span>
            <ArrowRight className="h-5 w-5 ml-2 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
      
      {/* Add custom styles for animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 1s forwards;
        }
      `}</style>
    </section>
  )
}
