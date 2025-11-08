'use client';

import { useState, useEffect, useRef } from 'react';

const WhyChooseUs = ({ advantages }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);
  
  // Check if section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);
  
  // Custom stats for each advantage
  const advantageStats = {
    "Healthcare Expertise": [
      { value: "15+", label: "Years Experience" },
      { value: "100%", label: "Certified Staff" },
      { value: "24/7", label: "Support" }
    ],
    "Proven Results": [
      { value: "27%", label: "Avg. Collection Increase" },
      { value: "35%", label: "Denial Reduction" },
      { value: "98%", label: "Client Retention" }
    ],
    "Transparent Reporting": [
      { value: "Daily", label: "Updates" },
      { value: "100%", label: "Visibility" },
      { value: "24/7", label: "Dashboard Access" }
    ],
    "Dedicated Support": [
      { value: "1:1", label: "Account Management" },
      { value: "<2hr", label: "Response Time" },
      { value: "97%", label: "Satisfaction Rate" }
    ],
    "Advanced Technology": [
      { value: "99.9%", label: "Uptime" },
      { value: "HIPAA", label: "Compliant" },
      { value: "AI", label: "Enhanced" }
    ],
    "Compliance Focus": [
      { value: "100%", label: "Audit Success" },
      { value: "Monthly", label: "Updates" },
      { value: "0", label: "Compliance Issues" }
    ]
  };
  
  return (
    <section 
      ref={sectionRef}
      className="py-32 relative overflow-hidden bg-gradient-to-b from-neutral-50 via-white to-neutral-50"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(11,132,135,0.05),transparent_70%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(11,132,135,0.05),transparent_70%)]"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 border border-primary/10 rounded-full opacity-30"></div>
      <div className="absolute bottom-40 left-10 w-40 h-40 border border-primary/5 rounded-full opacity-20"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] z-0" 
           style={{
             backgroundImage: "linear-gradient(#0B8487 1px, transparent 1px), linear-gradient(to right, #0B8487 1px, transparent 1px)",
             backgroundSize: "40px 40px"
           }}>
      </div>
      
      <div className="container relative z-10">
        {/* Section header with premium styling */}
        <div className="relative text-center mb-24">
          <div 
            className={`inline-block px-5 py-2 bg-gradient-to-r from-primary/20 to-primary-light/10 backdrop-blur-sm text-primary font-medium rounded-full mb-4 shadow-sm transition-all duration-700 ${
              isInView ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-4'
            }`}
          >
            <span className="relative flex items-center">
              <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              Our Advantages
            </span>
          </div>
          
          <h2 
            className={`text-4xl md:text-5xl font-bold text-neutral-900 mb-6 relative transition-all duration-700 delay-100 ${
              isInView ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-4'
            }`}
          >
            Why Choose Us
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-primary to-primary-light rounded-full"></div>
          </h2>
          
          <p 
            className={`text-lg text-neutral-700 max-w-2xl mx-auto mt-8 transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-4'
            }`}
          >
            Here's what sets BHS Healthcare Billing apart from other medical billing companies.
          </p>
        </div>
        
        {/* Advantages grid with premium hover effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {advantages.map((advantage, index) => (
            <div 
              key={advantage.title}
              className={`group relative transition-all duration-700 ${
                isInView ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* Card glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-light/20 via-primary/10 to-primary-dark/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
              
              {/* Main card */}
              <div className="relative h-full flex flex-col bg-white rounded-2xl p-8 shadow-xl border border-neutral-100 group-hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                     style={{
                       backgroundImage: "radial-gradient(circle, #0B8487 1px, transparent 1px)",
                       backgroundSize: "20px 20px"
                     }}>
                </div>
                
                {/* Icon with premium styling */}
                <div className="relative mb-6 self-start">
                  <div className="absolute -inset-3 bg-primary/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-br from-primary-light/20 to-primary/30 rounded-xl flex items-center justify-center text-3xl transform group-hover:rotate-3 transition-transform duration-500 shadow-lg"
                       style={{ 
                         boxShadow: "0 10px 20px -10px rgba(11,132,135,0.3), inset 0 0 10px rgba(255,255,255,0.5)"
                       }}>
                    {advantage.icon}
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-neutral-900 mb-3 group-hover:text-primary transition-colors duration-300">
                  {advantage.title}
                </h3>
                
                {/* Animated divider */}
                <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-primary-light group-hover:w-24 transition-all duration-500 mb-4"></div>
                
                <p className="text-neutral-600 leading-relaxed group-hover:text-neutral-700 transition-colors duration-300 mb-6">
                  {advantage.description}
                </p>
                
                {/* Stats that appear on hover */}
                <div className="mt-auto">
                  <div className={`grid grid-cols-3 gap-2 pt-4 border-t border-neutral-100 transition-all duration-500 ${
                    activeIndex === index ? 'opacity-100 transform-none' : 'opacity-0 translate-y-4'
                  }`}>
                    {advantageStats[advantage.title].map((stat, i) => (
                      <div key={i} className="text-center">
                        <div className="text-xl font-bold text-primary">{stat.value}</div>
                        <div className="text-xs text-neutral-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Interactive element that appears on hover */}
                <div className="absolute bottom-6 right-6 flex items-center text-primary font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  <span>Learn more</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:ml-2 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
                
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 transform origin-bottom-left rotate-45 translate-y-[-50%] translate-x-[50%]"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom accent */}
        <div 
          className={`mt-20 text-center transition-all duration-700 delay-700 ${
            isInView ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
            <span className="font-medium">Schedule a Free Consultation</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:ml-3 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;