"use client"

import * as React from "react"
import { MessageCircle, Send, X, User, Mail, Phone, Building, FileText, MessageSquare, Sparkles, CheckCircle } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

interface ContactFormDialogProps {
  children: React.ReactNode
}

export function ContactFormDialog({ children }: ContactFormDialogProps) {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsOpen(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      })
      // You can add actual form submission logic here
      alert("Thank you for your message! We'll get back to you soon.")
    }, 2000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="w-[95vw] max-w-[900px] h-[85vh] max-h-[85vh] overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30 border-0 shadow-2xl p-0 rounded-xl sm:rounded-2xl">
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-20 h-20 bg-primary rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-16 w-12 h-12 bg-blue-400 rounded-full animate-bounce [animation-delay:0.5s]"></div>
          <div className="absolute bottom-20 left-20 w-16 h-16 bg-teal-400 rounded-full animate-pulse [animation-delay:1s]"></div>
          <div className="absolute bottom-40 right-10 w-8 h-8 bg-primary rounded-full animate-bounce [animation-delay:1.5s]"></div>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 h-full relative">
          
          {/* Left Side - Welcome Section */}
          <div className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 p-4 sm:p-6 lg:p-8 text-white relative overflow-hidden rounded-t-xl sm:rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none flex-shrink-0 lg:flex-shrink lg:h-full">
            
            {/* Decorative Elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1 lg:h-full lg:w-1 lg:top-0 lg:bottom-auto lg:right-0 lg:left-auto bg-gradient-to-r lg:bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
            
            <div className="relative z-10 lg:h-full flex flex-col justify-center">
              <div className="mb-4 lg:mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 bg-white/15 backdrop-blur-sm rounded-2xl mb-3 lg:mb-4">
                  <Sparkles className="h-6 w-6 lg:h-7 lg:w-7 text-white" />
                </div>
                
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 lg:mb-3 leading-tight">
                  Let's Transform Your
                  <span className="block text-white/80">Revenue Cycle</span>
                </h2>
                
                <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-4 lg:mb-6">
                  Ready to optimize your billing process? Our experts are here to help you maximize revenue and streamline operations.
                </p>
              </div>

              {/* Features List - Simplified for mobile */}
              <div className="hidden sm:block space-y-2 lg:space-y-3">
                {[
                  "24/7 Expert Support",
                  "HIPAA Compliant Solutions", 
                  "Advanced Analytics & Reporting",
                  "Seamless Integration"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-4 h-4 lg:w-5 lg:h-5 bg-white/20 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-2.5 w-2.5 lg:h-3 lg:w-3 text-white" />
                    </div>
                    <span className="text-white/90 text-xs lg:text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Contact Info - Hidden on mobile for space */}
              <div className="hidden lg:block mt-6 pt-6 border-t border-white/20">
                <p className="text-white/60 text-xs mb-1">Quick Response Guaranteed</p>
                <p className="text-white text-sm font-semibold">We'll respond within 2 hours during business hours</p>
              </div>
            </div>
          </div>

          {/* Right Side - Form Section */}
          <div className="bg-white relative rounded-b-xl sm:rounded-b-2xl lg:rounded-r-2xl lg:rounded-bl-none flex flex-col flex-1 lg:h-full">
            
            {/* Form Header - Fixed */}
            <div className="p-3 sm:p-4 lg:p-6 border-b border-gray-100 flex-shrink-0">
              <div className="text-center">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-1">Get Started Today</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Fill out the form below and let's discuss your needs</p>
              </div>
            </div>

            {/* Scrollable Form Area */}
            <div className="flex-1 overflow-y-auto px-3 sm:px-4 lg:px-6 py-2 sm:py-3">
              <div className="space-y-3 sm:space-y-4">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="group">
                    <Label htmlFor="name" className="text-gray-700 text-xs sm:text-sm font-semibold mb-1 block">
                      Full Name *
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-primary transition-colors" />
                      <Input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        className="pl-10 h-12 sm:h-10 bg-gray-50/50 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 rounded-xl text-gray-900 placeholder:text-gray-400 text-base sm:text-sm"
                      />
                    </div>
                  </div>
                  
                  <div className="group">
                    <Label htmlFor="email" className="text-gray-700 text-xs sm:text-sm font-semibold mb-1 block">
                      Email Address *
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-primary transition-colors" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        className="pl-10 h-12 sm:h-10 bg-gray-50/50 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 rounded-xl text-gray-900 placeholder:text-gray-400 text-base sm:text-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Phone & Company Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="group">
                    <Label htmlFor="phone" className="text-gray-700 text-xs sm:text-sm font-semibold mb-1 block">
                      Phone Number
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-primary transition-colors" />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="pl-10 h-12 sm:h-10 bg-gray-50/50 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 rounded-xl text-gray-900 placeholder:text-gray-400 text-base sm:text-sm"
                      />
                    </div>
                  </div>
                  
                  <div className="group">
                    <Label htmlFor="company" className="text-xs sm:text-sm text-gray-700 font-semibold mb-1 block">
                      Company
                    </Label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-primary transition-colors" />
                      <Input
                        id="company"
                        type="text"
                        placeholder="Healthcare Practice"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        className="pl-10 h-12 sm:h-10 bg-gray-50/50 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 rounded-xl text-gray-900 placeholder:text-gray-400 text-base sm:text-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Subject Field */}
                <div className="group">
                  <Label htmlFor="subject" className="text-gray-700 text-xs sm:text-sm font-semibold mb-1 block">
                    Subject *
                  </Label>
                  <div className="relative">
                    <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-primary transition-colors" />
                    <Input
                      id="subject"
                      type="text"
                      placeholder="How can we help you today?"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      required
                      className="pl-10 h-12 sm:h-10 bg-gray-50/50 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 rounded-xl text-gray-900 placeholder:text-gray-400 text-base sm:text-sm"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="group">
                  <Label htmlFor="message" className="text-gray-700 text-xs sm:text-sm font-semibold mb-1 block">
                    Message *
                  </Label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-gray-400 group-focus-within:text-primary transition-colors" />
                    <Textarea
                      id="message"
                      placeholder="Tell us about your current challenges and how we can help..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                      rows={3}
                      className="pl-10 pt-3 pb-3 bg-gray-50/50 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 rounded-xl text-gray-900 placeholder:text-gray-400 resize-none text-base sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Fixed Action Buttons */}
            <div className="p-3 sm:p-4 lg:p-6 border-t border-gray-100 bg-white rounded-b-xl sm:rounded-b-2xl flex-shrink-0">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2 sm:gap-3">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 sm:h-11 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-semibold transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl shadow-lg rounded-xl text-base sm:text-sm"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsOpen(false)}
                    className="w-full h-12 sm:h-11 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 font-semibold transition-all duration-200 rounded-xl text-base sm:text-sm"
                  >
                    <X className="h-4 w-4 mr-2" />
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}