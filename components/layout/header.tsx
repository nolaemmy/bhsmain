"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, ArrowRight, Search, Shield, Calendar } from "lucide-react"

const navigation = {
  main: [
    { name: "Home", href: "/" },
    {
      name: "Services",
      href: "/services",
      dropdown: [
        { name: "Revenue Cycle Management Solutions", href: "/services/revenue-cycle-management" },
        { name: "Medical Coding Services", href: "/services/medical-coding" },
        { name: "Provider Credentialing", href: "/services/provider-enrollment" },
        { name: "Claims Processing & Denial Management", href: "/services/accounts-receivable" },
        { name: "Patient Demographics Verification", href: "/services/patient-demographics" },
        { name: "Payment Posting Services", href: "/services/payment-posting" },
      ],
    },
    { name: "About BHS Healthcare", href: "/about" },
  ],
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const headerRef = useRef<HTMLElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  // Handle scroll effect and progress
  useEffect(() => {
    const handleScroll = () => {
      // Handle navbar style change on scroll
      const isScrolled = window.scrollY > 50
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
      
      // Calculate scroll progress for the indicator
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPosition = window.scrollY
      const progress = (scrollPosition / windowHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Focus search input when search is opened
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [searchOpen])

  // Handle ESC key to close search
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSearchOpen(false)
      }
    }
    
    window.addEventListener('keydown', handleEsc)
    return () => {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [])

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  return (
    <header ref={headerRef} className="sticky top-0 z-50 w-full">
      {/* Scroll Progress Indicator */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gray-200/50">
        <div 
          className="h-full bg-gradient-to-r from-primary to-primary-light transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
      
      {/* Announcement Banner - Can be toggled with a state if needed */}
      <div className="bg-gradient-to-r from-[#0B8487] via-[#0B8487] to-[#0B8487] text-white">
  <div className="container mx-auto px-4">
    <div className="py-2 text-center text-sm font-medium">
      <span className="inline-flex items-center">
        <Shield className="h-4 w-4 mr-2 animate-pulse" />
        <span className="relative">
          We Adhere to HIPAA Guidelines
          <span
            className="absolute -bottom-0.5 left-0 w-full h-0.5 rounded-full"
            style={{ backgroundColor: '#0B8487' }}
          ></span>
        </span>
      </span>
    </div>
  </div>
</div>



      

      {/* Main Navigation */}
      <div 
        className={`bg-white/95 backdrop-blur-sm border-b border-gray-100/80 transition-all duration-300 ${
          scrolled 
            ? 'py-3 shadow-lg' 
            : 'py-5 shadow-md'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0 relative z-10">
              <Link href="/" className="flex items-center group">
                <span className="sr-only">BHS Billing</span>
                <div className="relative overflow-hidden rounded-lg">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary-light/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <Image
                    src="/BHS-LOGO.png?height=40&width=180"
                    alt="BHS Billing Logo"
                    width={180}
                    height={40}
                    className={`${scrolled ? 'h-11' : 'h-14'} w-auto transition-all duration-300 group-hover:scale-105 relative z-10`}
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:justify-end lg:flex-1">
              <nav className="flex items-center mr-8">
                {navigation.main.map((item) => (
                  <div key={item.name} className="relative group mx-2">
                    {item.dropdown ? (
                      <div 
                        className="relative" 
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <button
                          className={`px-4 py-2.5 text-sm font-medium group relative ${
                            activeDropdown === item.name 
                              ? 'text-primary' 
                              : 'text-gray-700 hover:text-primary'
                          } transition-colors`}
                          onClick={() => toggleDropdown(item.name)}
                          aria-expanded={activeDropdown === item.name}
                        >
                          <span className="relative z-10 inline-flex items-center">
                            {item.name}
                            <ChevronDown className={`ml-1.5 h-4 w-4 transition-transform duration-300 ${
                              activeDropdown === item.name ? 'rotate-180 text-primary' : ''
                            }`} />
                          </span>
                          
                          {/* Animated underline with glow effect */}
                          <span className="absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-primary to-primary-light rounded-full transition-all duration-300 w-0 group-hover:w-full shadow-md"></span>
                          
                          {/* Hover background effect */}
                          <span className="absolute inset-0 bg-gradient-to-r from-primary/8 to-primary/3 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                        </button>
                        
                        {/* Dropdown Menu */}
                        {activeDropdown === item.name && (
                          <div 
                            className="absolute left-0 mt-1 w-64 bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl border border-gray-100/80 overflow-hidden z-50 animate-in fade-in slide-in-from-top-5 duration-200"
                          >
                            {/* Triangle pointer */}
                            <div className="absolute -top-2 left-6 w-4 h-4 bg-white transform rotate-45 border-l border-t border-gray-100/80"></div>
                            
                            <div className="relative py-2 bg-gradient-to-b from-white to-gray-50/50 rounded-xl">
                              <div className="px-3 py-2 border-b border-gray-100/80 mb-1">
                                <div className="text-xs font-medium text-gray-500 uppercase tracking-wider flex items-center">
                                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-1.5"></span>
                                  {item.name} Options
                                </div>
                              </div>
                              {item.dropdown.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="flex items-center px-5 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-primary/10 hover:to-transparent hover:text-primary transition-all duration-200 group/item"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <span className="w-2 h-2 rounded-full bg-primary mr-3 group-hover/item:scale-125 transition-transform duration-200"></span>
                                  {subItem.name}
                                  <ArrowRight className="ml-auto h-3.5 w-3.5 opacity-0 group-hover/item:opacity-100 transition-all duration-200 transform group-hover/item:translate-x-1" />
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link 
                        href={item.href} 
                        className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-primary relative group transition-colors"
                      >
                        <span className="relative z-10">{item.name}</span>
                        {/* Animated underline with glow effect */}
                        <span className="absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-primary to-primary-light rounded-full transition-all duration-300 w-0 group-hover:w-full shadow-md"></span>
                        {/* Hover background effect */}
                        <span className="absolute inset-0 bg-gradient-to-r from-primary/8 to-primary/3 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                        {/* Subtle dot indicator */}
                        <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary scale-0 group-hover:scale-100 transition-transform duration-300 delay-150"></span>
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              <div className="flex items-center space-x-5">
                {/* Search Button */}
                <button 
                  onClick={() => setSearchOpen(true)}
                  className="p-2 text-gray-500 hover:text-primary transition-all duration-300 hover:bg-gray-100 rounded-full relative overflow-hidden group"
                  aria-label="Search"
                >
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-primary/10 to-primary/5 transform scale-0 group-hover:scale-100 transition-all duration-300 rounded-full"></span>
                  <span className="absolute inset-0 border border-primary/20 opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300 rounded-full"></span>
                  <Search className="h-5 w-5 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                </button>

                {/* CTA Button */}
                <Link
                  href="/get-started"
                  className={`
                    inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white
                    bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary
                    rounded-md transition-all duration-300 shadow-md hover:shadow-lg relative overflow-hidden
                    ${isHovering ? 'scale-105' : 'scale-100'}
                    border border-primary-light/30
                  `}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                  <span className="absolute -inset-1 bg-primary/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative z-10 font-semibold">Free Practice Assessment</span>
                  <ArrowRight className={`ml-2 h-4 w-4 transition-transform duration-300 relative z-10 ${isHovering ? 'translate-x-1' : ''}`} />
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center lg:hidden space-x-3">

              <button 
                onClick={() => setSearchOpen(true)}
                className="p-2 text-gray-500 hover:text-primary transition-all duration-300 hover:bg-gray-100 rounded-full relative group"
                aria-label="Search"
              >
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-primary/10 to-primary/5 transform scale-0 group-hover:scale-100 transition-all duration-300 rounded-full"></span>
                <Search className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              </button>
              
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-full text-gray-700 hover:text-primary hover:bg-gray-100 transition-all duration-300 relative group"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
              >
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-primary/10 to-primary/5 transform scale-0 group-hover:scale-100 transition-all duration-300 rounded-full"></span>
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <X className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      <div 
        className={`fixed inset-0 z-50 bg-black/75 backdrop-blur-md transition-all duration-300 ${
          searchOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setSearchOpen(false)}
      >
        <div 
          className="container mx-auto px-4 h-full flex items-start pt-28 animate-in fade-in slide-in-from-top-4 duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-full max-w-2xl mx-auto bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden transform transition-all duration-300 border border-gray-100/80">
            <div className="relative">
              <div className="absolute left-5 top-1/2 -translate-y-1/2 text-primary">
                <Search className="h-5 w-5 animate-pulse" />
              </div>
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search for services, resources..."
                className="w-full pl-12 pr-10 py-5 text-lg border-none focus:ring-0 focus:outline-none bg-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && searchQuery.trim()) {
                    // Handle search submission
                    setSearchOpen(false);
                  }
                }}
              />
              <button 
                onClick={() => setSearchOpen(false)}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1.5 rounded-full text-gray-400 hover:text-primary hover:bg-gray-100/80 transition-all duration-200 group"
              >
                <X className="h-5 w-5 group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </div>
            
            {searchQuery && (
              <div className="border-t border-gray-100/80">
                <div className="py-4 px-5">
                  <div className="text-sm font-medium text-gray-500 mb-3 flex items-center">
                    <span className="bg-gradient-to-r from-primary/20 to-primary/10 text-primary text-xs px-2.5 py-0.5 rounded-full mr-2 border border-primary/10">Quick Results</span>
                    <span className="text-gray-400 text-xs">Found for "{searchQuery}"</span>
                  </div>
                  <div className="space-y-3">
                    <Link 
                      href="#" 
                      className="block p-3 hover:bg-gradient-to-r hover:from-gray-50/80 hover:to-transparent rounded-lg transition-all duration-200 group border border-transparent hover:border-gray-100/80"
                      onClick={() => setSearchOpen(false)}
                    >
                      <div className="flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2 group-hover:scale-125 transition-transform duration-200"></span>
                        <div className="text-primary font-medium group-hover:translate-x-1 transition-transform duration-200">Revenue Cycle Management</div>
                      </div>
                      <div className="text-sm text-gray-500 truncate mt-1 ml-3.5">Comprehensive billing services for healthcare providers</div>
                    </Link>
                    <Link 
                      href="#" 
                      className="block p-3 hover:bg-gradient-to-r hover:from-gray-50/80 hover:to-transparent rounded-lg transition-all duration-200 group border border-transparent hover:border-gray-100/80"
                      onClick={() => setSearchOpen(false)}
                    >
                      <div className="flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2 group-hover:scale-125 transition-transform duration-200"></span>
                        <div className="text-primary font-medium group-hover:translate-x-1 transition-transform duration-200">Medical Coding Services</div>
                      </div>
                      <div className="text-sm text-gray-500 truncate mt-1 ml-3.5">Accurate coding for optimal reimbursement</div>
                    </Link>
                  </div>
                </div>
              </div>
            )}
            
            <div className="px-5 py-3 bg-gradient-to-r from-gray-50/80 to-white text-sm text-gray-500 flex justify-between items-center border-t border-gray-100/80">
              <span className="flex items-center text-xs">
                <kbd className="px-2 py-1 bg-white rounded border border-gray-200/80 shadow-sm mr-1 text-xs">ESC</kbd> to close or 
                <kbd className="px-2 py-1 bg-white rounded border border-gray-200/80 shadow-sm mx-1 text-xs">Enter</kbd> to search
              </span>
              {searchQuery && (
                <Link 
                  href={`/search?q=${encodeURIComponent(searchQuery)}`}
                  className="text-primary hover:text-primary-dark font-medium flex items-center group relative"
                  onClick={() => setSearchOpen(false)}
                >
                  <span className="absolute inset-0 bg-primary/5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative z-10 px-2 py-1">View all results</span>
                  <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform duration-200 relative z-10" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
          onClick={() => setMobileMenuOpen(false)}
        ></div>
        
        {/* Menu panel */}
        <div 
          className={`absolute top-0 right-0 w-full max-w-sm h-full bg-white/95 backdrop-blur-sm shadow-2xl transform transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full overflow-y-auto">
            {/* Mobile Header */}
            <div className="px-5 py-4 border-b border-gray-200/80 flex items-center justify-between bg-gradient-to-r from-primary/20 to-primary/5">
              <Link href="/" className="flex items-center group" onClick={() => setMobileMenuOpen(false)}>
                <div className="relative overflow-hidden rounded-lg">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary-light/10 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <Image
                    src="/BHS-LOGO.png?height=40&width=180"
                    alt="BHS Billing Logo"
                    width={180}
                    height={40}
                    className="h-12 w-auto group-hover:scale-105 transition-transform duration-300 relative z-10"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </Link>
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-full text-gray-700 hover:text-primary hover:bg-white/80 transition-all duration-200 group"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-6 w-6 group-hover:rotate-90 transition-transform duration-300" aria-hidden="true" />
              </button>
            </div>
            
            {/* Mobile Navigation */}
            <div className="flex-1 py-6 px-5">
              <nav className="flex flex-col space-y-1">
                {navigation.main.map((item) => (
                  <div key={item.name} className="border-b border-gray-100 py-2.5">
                    {item.dropdown ? (
                      <>
                        <button
                          className="flex w-full items-center justify-between py-2 text-base font-medium text-gray-900 hover:text-primary transition-colors duration-200 group relative"
                          onClick={() => toggleDropdown(item.name)}
                          aria-expanded={activeDropdown === item.name}
                        >
                          <span className="group-hover:translate-x-0.5 transition-transform duration-200 relative">
                            {item.name}
                            <span className={`absolute -bottom-0.5 left-0 h-0.5 bg-gradient-to-r from-primary to-primary-light rounded-full transition-all duration-300 ${activeDropdown === item.name ? 'w-full' : 'w-0'} group-hover:w-full`}></span>
                          </span>
                          <div className={`p-1 rounded-full ${activeDropdown === item.name ? 'bg-primary/15' : 'bg-gray-50'} group-hover:bg-primary/15 transition-colors duration-200`}>
                            <ChevronDown
                              className={`h-4 w-4 text-gray-500 group-hover:text-primary transition-all duration-300 ${activeDropdown === item.name ? "rotate-180 text-primary" : ""}`}
                            />
                          </div>
                        </button>
                        
                        <div 
                          className={`overflow-hidden transition-all duration-300 ${
                            activeDropdown === item.name ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="mt-2 pl-4 border-l-2 border-primary/30 ml-2 space-y-1 bg-gradient-to-r from-gray-50/50 to-transparent rounded-r-lg">
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="flex items-center py-2.5 text-sm text-gray-700 hover:text-primary transition-colors duration-200 group relative"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                <span className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg"></span>
                                <span className="w-2 h-2 rounded-full bg-primary mr-3 group-hover:scale-125 transition-transform duration-200 relative z-10"></span>
                                <span className="group-hover:translate-x-0.5 transition-transform duration-200 relative z-10">{subItem.name}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="flex w-full items-center py-2 text-base font-medium text-gray-900 hover:text-primary transition-colors duration-200 group relative"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg"></span>
                        <span className="group-hover:translate-x-0.5 transition-transform duration-200 relative">
                          {item.name}
                          <span className="absolute -bottom-0.5 left-0 h-0.5 bg-gradient-to-r from-primary to-primary-light rounded-full transition-all duration-300 w-0 group-hover:w-full"></span>
                        </span>
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Quick Links */}
              <div className="mt-8">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 flex items-center">
                  <span className="bg-gradient-to-r from-primary/30 to-primary/10 w-6 h-0.5 rounded-full mr-2"></span>
                  Quick Links
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  <Link
                    href="/get-started"
                    className="flex items-center px-3 py-2.5 text-sm font-medium text-gray-700 bg-gray-50/80 hover:bg-gray-100/90 rounded-lg transition-all duration-200 border border-gray-100/80 hover:border-gray-200/80 group relative overflow-hidden"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <div className="p-1.5 rounded-full bg-primary/15 mr-2 relative z-10 group-hover:scale-110 transition-transform duration-200">
                      <Calendar className="h-4 w-4 text-primary" />
                    </div>
                    <span className="group-hover:translate-x-0.5 transition-transform duration-200 relative z-10">Free Revenue Assessment</span>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Mobile CTA */}
            <div className="px-5 py-6 bg-gradient-to-r from-gray-50/80 to-white border-t border-gray-200/80">
              <Link
                href="/get-started"
                className="flex items-center justify-center w-full px-4 py-3 text-base font-medium text-white bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary rounded-lg shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group border border-primary-light/30"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
                <span className="absolute -inset-1 bg-primary/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10 font-semibold">Start Free Assessment</span>
                <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
