"use client"

import { useEffect, useRef, useState } from "react"

export default function IntroducingSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.1,
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      className={`py-16 md:py-20 pb-8 md:pb-12 bg-gradient-to-b from-white to-primary/5 transition-all duration-1000 ease-in-out ${
        isVisible ? "opacity-100 transform-none" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Decorative elements */}
          <div className="relative mb-8">
            <div className="absolute left-1/2 -top-16 w-40 h-40 bg-primary/5 rounded-full -translate-x-1/2 blur-3xl"></div>
            <div className="relative z-10">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                Trusted by Healthcare Providers
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#002E3D] mb-2">
                Introducing <span className="text-primary relative">
                  BHS Billing
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 10C50 2 100 2 150 6C200 10 250 10 298 2" stroke="#0B8487" strokeWidth="3" strokeLinecap="round" fill="none" />
                  </svg>
                </span>
              </h2>
            </div>
          </div>
          
          {/* Main description */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm mb-4">
            <p className="text-neutral-700 text-lg leading-relaxed mb-8">
              With a team of seasoned professionals, BHS Healthcare Services transforms medical billing and revenue cycle 
              management through precision, compliance, and the power of AI-driven solutions. From accurate medical coding 
              to denial management, we handle the complexities of billing with unmatched efficiency—so you can focus on patient care.
            </p>
            
            <div className="w-24 h-0.5 bg-primary/30 mx-auto mb-8"></div>
            
            <div className="relative">
              <svg className="absolute -left-6 -top-6 w-12 h-12 text-primary/20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-10 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-neutral-700 text-lg leading-relaxed font-medium italic px-6">
                Our mission: To streamline your revenue cycle, boost reimbursements, and reduce denials—ensuring every claim is 
                compliant, optimized, and paid on time.
              </p>
              <svg className="absolute -right-6 -bottom-6 w-12 h-12 text-primary/20 rotate-180" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-10 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}