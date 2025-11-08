"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Home, ArrowRight, RefreshCw, Search, ChevronRight, Stethoscope, FileText, Activity } from "lucide-react"

export default function NotFound() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  // Animation on mount
  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary/5 via-white to-primary/10 overflow-hidden flex items-center justify-center">
      {/* Animated Background Elements */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      >
        {/* Floating Particles */}
        <div className="absolute inset-0 hidden md:block">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary/20 rounded-full animate-hero-float"
              style={{
                left: `${15 + (i * 10)}%`,
                top: `${20 + (i * 8)}%`,
                animationDelay: `${i * 0.7}s`,
                animationDuration: `${4 + (i % 3)}s`,
              }}
            />
          ))}
        </div>

        {/* Mobile Simplified Particles */}
        <div className="absolute inset-0 md:hidden">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-primary/25 rounded-full animate-hero-float"
              style={{
                left: `${20 + (i * 15)}%`,
                top: `${30 + (i * 10)}%`,
                animationDelay: `${i * 1}s`,
                animationDuration: `${3 + (i % 2)}s`,
              }}
            />
          ))}
        </div>

        {/* Animated Gradient Waves */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-primary/5 animate-pulse-slower" />
          <div className="absolute top-1/4 right-0 w-3/4 h-3/4 bg-gradient-to-bl from-primary/15 via-transparent to-transparent animate-pulse-very-slow" />
        </div>

        {/* Geometric Shapes */}
        <div className="absolute inset-0">
          {/* Large Circle - Hidden on mobile */}
          <div className="absolute top-1/4 right-1/4 w-24 h-24 border border-primary/20 rounded-full animate-hero-spin-very-slow hidden lg:block" />
          {/* Medium Shape */}
          <div className="absolute bottom-1/3 left-1/6 w-16 h-16 border border-primary/15 transform rotate-45 animate-geometric-float" />
          {/* Small Squares */}
          <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-primary/10 transform rotate-12 animate-pulse-slow" />
          <div className="absolute top-3/4 right-1/3 w-6 h-6 border border-primary/20 transform -rotate-12 animate-geometric-float hidden sm:block" style={{ animationDelay: '1s' }} />
        </div>

        {/* Floating Medical Icons */}
        <div className="absolute inset-0 hidden lg:block">
          <div className="absolute top-1/5 left-1/12 animate-float opacity-20" style={{ animationDelay: '0s', animationDuration: '6s' }}>
            <Stethoscope className="w-6 h-6 text-primary" />
          </div>
          <div className="absolute top-2/5 right-1/12 animate-bounce-gentle opacity-25" style={{ animationDelay: '2s', animationDuration: '4s' }}>
            <Activity className="w-5 h-5 text-primary" />
          </div>
          <div className="absolute bottom-1/4 left-1/8 animate-pulse-slow opacity-30" style={{ animationDelay: '4s' }}>
            <FileText className="w-5 h-5 text-primary" />
          </div>
        </div>

        {/* Grid Pattern Background */}
        <div className="absolute inset-0 z-0 opacity-[0.03]">
          <svg className="h-full w-full" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" className="text-primary" />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="container relative z-10 px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 Number with Enhanced Styling */}
          <div 
            className={`mb-8 transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="relative inline-block">
              {/* Glow effect behind 404 */}
              <div className="absolute inset-0 text-8xl md:text-9xl lg:text-[12rem] font-bold text-primary/10 blur-sm">
                404
              </div>
              {/* Main 404 text */}
              <h1 className="relative text-8xl md:text-9xl lg:text-[12rem] font-bold font-serif text-primary leading-none">
                <span className="inline-block animate-bounce-gentle" style={{ animationDelay: '0s' }}>4</span>
                <span className="inline-block animate-bounce-gentle" style={{ animationDelay: '0.1s' }}>0</span>
                <span className="inline-block animate-bounce-gentle" style={{ animationDelay: '0.2s' }}>4</span>
              </h1>
              {/* Decorative elements around 404 */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-primary/30 rounded-full animate-pulse" />
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-primary/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>

          {/* Error Message */}
          <div 
            className={`mb-8 transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#002E3D] mb-4">
              Page Not Found
            </h2>
            <p className="text-lg md:text-xl text-[#002E3D]/80 max-w-2xl mx-auto leading-relaxed">
              The page you're looking for doesn't exist or has been moved. 
              <br className="hidden sm:block" />
              Let's get you back to managing your healthcare practice.
            </p>
          </div>

          {/* Action Buttons */}
          <div 
            className={`mb-12 transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              {/* Primary CTA - Back to Home */}
              <Link 
                href="/" 
                className="group relative inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary rounded-lg transition-all duration-300 shadow-md hover:shadow-lg overflow-hidden border border-primary-light/30 w-full sm:w-auto"
              >
                <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                <span className="absolute -inset-1 bg-primary/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <Home className="mr-2 h-5 w-5 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                <span className="relative z-10 font-semibold">Back to Home</span>
                <ArrowRight className="ml-2 h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>

              {/* Secondary CTA - Refresh */}
              <button 
                onClick={() => window.location.reload()}
                className="group inline-flex items-center justify-center px-6 py-3 text-base font-medium text-primary bg-white border-2 border-primary hover:bg-primary/5 rounded-lg transition-all duration-300 relative overflow-hidden w-full sm:w-auto"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <RefreshCw className="mr-2 h-5 w-5 group-hover:rotate-180 transition-transform duration-500" />
                <span className="font-semibold">Try Again</span>
              </button>
            </div>
          </div>

          {/* Helpful Links Card */}
          <div 
            className={`transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <div className="relative max-w-2xl mx-auto">
              {/* Card Background with Glassmorphism */}
              <div className="relative bg-white/80 backdrop-blur-sm rounded-[20px] shadow-card border border-white/50 p-6 md:p-8 overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
                
                <div className="relative z-10">
                  <h3 className="text-xl font-bold font-serif text-[#002E3D] mb-6 flex items-center justify-center">
                    <Search className="mr-2 h-5 w-5 text-primary" />
                    Need Help Finding Something?
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Quick Links */}
                    {[
                      { href: "/services", label: "Our Services", icon: Stethoscope },
                      { href: "/about", label: "About Us", icon: FileText },
                      { href: "/services/revenue-cycle-management", label: "Revenue Cycle Management", icon: Activity },
                      { href: "/get-started", label: "Get Started", icon: ArrowRight }
                    ].map((link, index) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="group flex items-center p-4 rounded-lg border border-gray-100 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 text-left"
                        style={{ animationDelay: `${800 + (index * 100)}ms` }}
                      >
                        <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                          <link.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <span className="text-[#002E3D] font-medium group-hover:text-primary transition-colors duration-300">
                            {link.label}
                          </span>
                        </div>
                        <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div 
            className={`mt-12 transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            <p className="text-sm text-[#002E3D]/60 mb-4">
              Still having trouble? Our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
              <a 
                href="tel:+15206364939" 
                className="inline-flex items-center text-primary hover:text-primary-dark transition-colors duration-300 font-medium"
              >
                <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                Call us: (520) 636-4939
              </a>
              <span className="hidden sm:block text-gray-300">|</span>
              <a 
                href="mailto:info@bhshealthcares.com" 
                className="inline-flex items-center text-primary hover:text-primary-dark transition-colors duration-300 font-medium"
              >
                <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                Email: info@bhshealthcares.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}