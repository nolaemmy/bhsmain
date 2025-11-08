import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, Phone, MapPin, ChevronRight, ArrowRight, Clock, Shield, CheckCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#002E3D] to-[#00232F] text-white overflow-hidden">
      {/* Decorative Elements with enhanced animation */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse [animation-duration:8s]"></div>
      
      {/* Newsletter Section with enhanced design */}
      <div className="relative border-b border-white/10">
        <div className="container py-12">
          <div className="bg-gradient-to-br from-primary/15 to-primary/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl hover:shadow-primary/5 transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
              <div className="lg:col-span-3">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                  Stay Updated with Healthcare RCM Insights
                </h3>
                <p className="text-white/80 max-w-2xl leading-relaxed">
                  Subscribe to our newsletter for the latest industry news, regulatory updates, and best practices in revenue cycle management.
                </p>
              </div>
              <div className="lg:col-span-2">
                <form className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                    required
                  />
                  <button 
                    type="submit" 
                    className="px-6 py-3 bg-primary hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] text-white font-medium rounded-lg transition-all duration-200 whitespace-nowrap flex items-center justify-center group"
                  >
                    Subscribe
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Footer Content */}
      <div className="container py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Column 1: Logo and About */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block transform hover:scale-105 transition-transform duration-200">
              <Image
                src="/BHS-LOGO.png?height=40&width=180"
                alt="BHS Billing Logo"
                width={180}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-6 text-white/80 text-base leading-relaxed max-w-md">
              Comprehensive medical billing services and revenue cycle management solutions for healthcare providers. Streamlining your billing processes with expertise and innovation.
            </p>
            
            {/* Trust Badges with hover effect */}
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center bg-white/5 hover:bg-white/10 backdrop-blur-sm px-4 py-2.5 rounded-lg transition-all duration-300 cursor-pointer group">
                <Shield className="h-5 w-5 text-primary mr-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm text-white/90">HIPAA Compliant</span>
              </div>
              <div className="flex items-center bg-white/5 hover:bg-white/10 backdrop-blur-sm px-4 py-2.5 rounded-lg transition-all duration-300 cursor-pointer group">
                <CheckCircle className="h-5 w-5 text-primary mr-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm text-white/90">Certified Experts</span>
              </div>
            </div>
            
            {/* Social Media with enhanced hover effects */}
            <div className="mt-8">
  <p className="text-white/60 text-sm mb-4 uppercase tracking-wider">Connect With Us</p>
  <div className="flex space-x-4">
    {[
      {
        icon: Facebook,
        label: "Facebook",
        link: "https://www.facebook.com/share/16NBZ6gM4n/",
      },
      {
        icon: Linkedin,
        label: "LinkedIn",
        link: "https://www.linkedin.com/company/bhs-healthcare-services/",
      },
    ].map((social) => (
      <a
        key={social.label}
        href={social.link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 text-white hover:bg-primary hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
      >
        <span className="sr-only">{social.label}</span>
        <social.icon className="h-5 w-5" />
      </a>
    ))}
  </div>
</div>

          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold text-white relative pb-4 mb-6 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-primary after:rounded-full">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/get-started", label: "Get Started" }
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="flex items-center text-white/80 hover:text-white transition-all duration-300 group">
                    <ChevronRight className="h-4 w-4 mr-2 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold text-white relative pb-4 mb-6 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-primary after:rounded-full">
              Services
            </h3>
            <ul className="space-y-4">
              {[
                { href: "/services/revenue-cycle-management", label: "Revenue Cycle Management" },
                { href: "/services", label: "All Services" }
              ].map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="flex items-center text-white/80 hover:text-white transition-all duration-300 group">
                    <ChevronRight className="h-4 w-4 mr-2 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact with enhanced hover effects */}
          <div className="lg:col-span-4">
            <h3 className="text-lg font-bold text-white relative pb-4 mb-6 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-primary after:rounded-full">
              Contact Us
            </h3>
            <ul className="space-y-5">
              {[
                {
                  icon: MapPin,
                  title: "Our Location",
                  content: (
                    <>
                      1309 Coffeen Ave, Suite 1200
                      <br />
                      Sheridan, WY 82801
                    </>
                  ),
                  href: null
                },
                {
                  icon: Phone,
                  title: "Call Us",
                  content: "(833) 716-6665",
                  href: "tel:+18337166665"
                },
                {
                  icon: Mail,
                  title: "Email Us",
                  content: (
                    <span>
                      info<span style={{display: 'none'}}>nospam</span>@<span style={{display: 'none'}}>nospam</span>bhshealthcares<span style={{display: 'none'}}>nospam</span>.com
                    </span>
                  ),
                  href: "mailto:info@bhshealthcares.com"
                },
                {
                  icon: Clock,
                  title: "Business Hours",
                  content: (
                    <>
                      Monday - Friday: 9:00 AM - 5:00 PM
                    </>
                  ),
                  href: null
                }
              ].map((item, index) => (
                <li key={index}>
                  {item.href ? (
                    <a href={item.href} className="flex items-start group">
                      <div className="w-10 h-10 flex-shrink-0 bg-white/5 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-white font-medium mb-1">{item.title}</p>
                        <span className="text-white/70 text-sm group-hover:text-white transition-colors">
                          {item.content}
                        </span>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-start group">
                      <div className="w-10 h-10 flex-shrink-0 bg-white/5 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-white font-medium mb-1">{item.title}</p>
                        <span className="text-white/70 text-sm leading-relaxed">
                          {item.content}
                        </span>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright and Developer Credit Section */}
      <div className="relative border-t border-white/10 bg-gradient-to-r from-[#001A22] to-[#002E3D]">
        <div className="container py-6">
          <div className="text-center space-y-3">
            <p className="text-white/80 text-sm flex items-center justify-center">
              <Shield className="h-4 w-4 mr-2 text-primary" />
              &copy; 2025 BHS Healthcare Services LLC
            </p>
            <p className="text-white/60 text-sm">
              Designed and Developed by{" "}
              <a
                href="https://www.reveraforte.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 font-medium transition-colors duration-300 hover:underline"
              >
                Revera Forte
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
