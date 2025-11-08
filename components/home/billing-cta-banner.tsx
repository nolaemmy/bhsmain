import Link from "next/link"
import { ArrowRight, CheckCircle, TrendingUp } from "lucide-react"

export default function BillingCtaBanner() {
  return (
    <section className="relative w-full bg-gradient-to-r from-primary to-[#0C9598] py-20 md:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg className="h-full w-full" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="wave-pattern" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0 25C20 25 20 75 40 75C60 75 60 25 80 25C100 25 100 75 120 75" 
                    fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wave-pattern)" />
        </svg>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      
      <div className="container relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Content */}
          <div className="text-left md:max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full mb-6">
              <TrendingUp className="w-4 h-4 mr-2 text-white" />
              <span className="text-sm font-medium text-white">Increase Revenue by 27%</span>
            </div>
            
            <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] font-bold leading-[1.2] text-white">
              Smooth out the rough. <span className="relative">
                Streamline
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10C50 2 100 2 150 6C200 10 250 10 298 2" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none" />
                </svg>
              </span> your billing processes today!
            </h2>
            
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-white mr-3" />
                <span className="text-white/90">Reduce administrative burden</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-white mr-3" />
                <span className="text-white/90">Faster reimbursements</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-white mr-3" />
                <span className="text-white/90">Fewer claim rejections</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-white mr-3" />
                <span className="text-white/90">Transparent reporting</span>
              </div>
            </div>
          </div>
          
          {/* Right Content - CTA Card */}
          <div className="w-full md:w-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-serif font-bold text-primary mb-3">Ready to get started?</h3>
              <p className="text-[#002E3D]/80 mb-6">Schedule a free consultation with our billing experts.</p>
              
              <div className="space-y-4">
                <Link
                  href="/get-started"
                  className="flex items-center justify-center w-full btn btn-primary gap-2"
                >
                  Schedule Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
                
                <Link
                  href="/services"
                  className="flex items-center justify-center w-full text-primary hover:text-primary-dark font-medium"
                >
                  Learn more about our services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}