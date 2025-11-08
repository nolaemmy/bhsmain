"use client"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function HeroSection() {
  const [typedText, setTypedText] = useState("")
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [counters, setCounters] = useState({
    clients: 0,
    successRate: 0,
    support: 0,
    revenue: 0
  })
  const [hasAnimated, setHasAnimated] = useState(false)
  
  const words = ["Medical Billing", "Revenue Cycle", "Practice Growth", "Healthcare Finance"]
  
  // Typing animation effect
  useEffect(() => {
    const word = words[currentWordIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(word.substring(0, typedText.length + 1))
        if (typedText === word) {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        setTypedText(word.substring(0, typedText.length - 1))
        if (typedText === "") {
          setIsDeleting(false)
          setCurrentWordIndex((prev) => (prev + 1) % words.length)
        }
      }
    }, isDeleting ? 100 : 150)
    
    return () => clearTimeout(timeout)
  }, [typedText, isDeleting, currentWordIndex, words])

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Counter animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          
          // Animate clients counter
          let clientCount = 0
          const clientTimer = setInterval(() => {
            clientCount += 10
            setCounters(prev => ({ ...prev, clients: clientCount }))
            if (clientCount >= 100) clearInterval(clientTimer)
          }, 20)

          // Animate success rate counter
          let successCount = 0
          const successTimer = setInterval(() => {
            successCount += 2
            setCounters(prev => ({ ...prev, successRate: successCount }))
            if (successCount >= 99) clearInterval(successTimer)
          }, 40)

          // Animate support counter
          let supportCount = 0
          const supportTimer = setInterval(() => {
            supportCount += 1
            setCounters(prev => ({ ...prev, support: supportCount }))
            if (supportCount >= 24) clearInterval(supportTimer)
          }, 60)

          // Animate revenue counter
          let revenueCount = 0
          const revenueTimer = setInterval(() => {
            revenueCount += 1
            setCounters(prev => ({ ...prev, revenue: revenueCount }))
            if (revenueCount >= 27) clearInterval(revenueTimer)
          }, 80)
        }
      },
      { threshold: 0.5 }
    )

    const heroSection = document.getElementById('hero-section')
    if (heroSection) observer.observe(heroSection)

    return () => observer.disconnect()
  }, [hasAnimated])
  return (
    <section id="hero-section" className="relative bg-gradient-to-b from-primary/5 to-primary/10 overflow-hidden">
      {/* Animated Background Elements */}
      <div
        className="absolute inset-0 z-0 hero-animations-container"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      >
        {/* Floating Particles */}
        <div className="absolute inset-0 hidden md:block">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary/20 rounded-full animate-hero-float"
              style={{
                left: `${10 + (i * 7)}%`,
                top: `${20 + (i * 5)}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${4 + (i % 3)}s`,
              }}
            />
          ))}
        </div>
        
        {/* Mobile Simplified Particles */}
        <div className="absolute inset-0 md:hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-primary/25 rounded-full animate-hero-float"
              style={{
                left: `${15 + (i * 12)}%`,
                top: `${25 + (i * 8)}%`,
                animationDelay: `${i * 0.8}s`,
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
          <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-primary/20 rounded-full animate-hero-spin-very-slow hidden lg:block" />
          {/* Medium Hexagon - Smaller on mobile */}
          <div className="absolute bottom-1/3 left-1/6 w-20 h-20 md:w-20 md:h-20 lg:w-20 lg:h-20 border border-primary/15 transform rotate-45 animate-geometric-float" />
          {/* Small Squares */}
          <div className="absolute top-1/2 left-1/3 w-4 h-4 md:w-6 md:h-6 bg-primary/10 transform rotate-12 animate-pulse-slow" />
          <div className="absolute top-3/4 right-1/3 w-6 h-6 md:w-8 md:h-8 border border-primary/20 transform -rotate-12 animate-geometric-float hidden sm:block" style={{ animationDelay: '1s' }} />
        </div>

        {/* Floating Medical Icons */}
        <div className="absolute inset-0 hidden lg:block">
          {/* Stethoscope Icon */}
          <div className="absolute top-1/5 left-1/12 animate-float opacity-20" style={{ animationDelay: '0s', animationDuration: '6s' }}>
            <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.5 3.5L18 5l-1.5-1.5L15 5l1.5 1.5L18 5l1.5 1.5L21 5l-1.5-1.5zm-15 15L3 20l1.5 1.5L6 20l-1.5-1.5zM4.5 8.5L3 10l1.5 1.5L6 10 4.5 8.5z"/>
            </svg>
          </div>
          
          {/* Heart Icon */}
          <div className="absolute top-2/5 right-1/12 animate-bounce-gentle opacity-25" style={{ animationDelay: '2s', animationDuration: '4s' }}>
            <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
          
          {/* Medical Cross */}
          <div className="absolute bottom-1/4 left-1/8 animate-pulse-slow opacity-30" style={{ animationDelay: '4s' }}>
            <svg className="w-7 h-7 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
        </div>

        {/* Subtle Wave Animation */}
        <div className="absolute bottom-0 left-0 w-full h-24 opacity-20">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,60 C300,100 600,20 900,60 C1050,90 1150,30 1200,60 L1200,120 L0,120 Z"
                  fill="currentColor"
                  className="text-primary animate-pulse-slow" />
          </svg>
        </div>

        {/* Data Flow Lines */}
        <div className="absolute inset-0 hidden sm:block">
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-data-flow" />
          <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-data-flow" style={{ animationDelay: '4s' }} />
        </div>
      </div>

      <div className="container relative z-10 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h1 className="heading-1 animate-fade-in-up">
              Streamline Your <span className="text-primary animate-gradient-text">{typedText}</span>
              <span className="inline-block w-1 h-12 bg-primary ml-2 animate-pulse"></span> <br />
              <span className="text-primary animate-shimmer">Process</span> With Expertise
            </h1>
            <p className="mt-6 text-lg body-text max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              Maximize your practice's revenue with our comprehensive medical billing services. We handle the paperwork
              so you can focus on patient care.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '1s' }}>
              <Link href="/get-started" className="btn btn-primary transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-primary-dark active:scale-95 relative overflow-hidden group">
                <span className="absolute inset-0 bg-white/20 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></span>
                <span className="relative">Schedule a Consultation</span>
              </Link>
              <Link href="/services" className="btn btn-secondary transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-primary/10 active:scale-95 relative overflow-hidden group">
                <span className="absolute inset-0 bg-primary/10 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></span>
                <span className="relative">Explore Our Services</span>
              </Link>
            </div>

            {/* Animated Statistics */}
            <div className="mt-8 flex items-center space-x-8 animate-fade-in-up" style={{ animationDelay: '1.5s' }}>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary animate-counter">{counters.clients}+</div>
                <div className="text-sm body-text opacity-70">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary animate-counter">{counters.successRate}%</div>
                <div className="text-sm body-text opacity-70">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary animate-counter">{counters.support}/7</div>
                <div className="text-sm body-text opacity-70">Hour Support</div>
              </div>
            </div>
            
          </div>
          <div className="relative">
            {/* Glow Effect Behind Image */}
            <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-primary/15 via-primary/25 to-primary/15 md:from-primary/20 md:via-primary/30 md:to-primary/20 rounded-lg blur-lg md:blur-xl animate-hero-pulse-glow opacity-50 md:opacity-60 hero-glow-effect" />
            
            {/* Orbiting Elements Around Image - Hidden on small screens */}
            <div className="absolute inset-0 animate-hero-spin-very-slow hidden md:block">
              <div className="absolute top-4 right-4 w-3 h-3 bg-primary/40 rounded-full animate-pulse" />
              <div className="absolute bottom-8 left-6 w-2 h-2 bg-primary/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/2 -right-2 w-4 h-4 border border-primary/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <Image
              src="/nurse.jpg?height=450&width=500&text=Medical+Billing+Image"
              alt="Medical Billing"
              width={500}
              height={450}
              className="relative rounded-xl shadow-xl transform transition-transform duration-300 hover:scale-105 will-change-transform"
              priority
            />
            <div className="absolute -bottom-6 -left-6 rounded-xl bg-white p-4 shadow-card md:p-6 animate-fade-in-up hover:scale-105 transition-transform duration-300" style={{ animationDelay: '2s' }}>
              <div className="flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 animate-pulse-slow">
                  <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm body-text">Average Revenue Increase</p>
                  <p className="text-2xl font-serif font-bold text-primary animate-counter">+{counters.revenue}%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0 opacity-[0.07]">
        <svg className="h-full w-full" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </section>
  )
}
