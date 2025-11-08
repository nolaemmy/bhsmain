import Link from "next/link"
import { Heart, Flag, CheckCircle, MapPin, ArrowRight } from "lucide-react"

export default function USACoverage() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-primary/5 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.07]">
        <svg className="h-full w-full" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="usa-grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#usa-grid)" />
        </svg>
      </div>
      
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 lg:gap-20">
          {/* Left Column */}
          <div className="flex-1 space-y-8">
            <div className="section-header">
              <p className="text-sm font-medium tracking-wider text-primary uppercase">
                ONE-STOP RCM COMPANY
              </p>
              <h2 className="mt-4 heading-2 text-[#002E3D]">
                Nationwide Medical <span className="text-primary">Billing Excellence</span>
              </h2>
            </div>

            <div className="space-y-6 mt-8">
              <div className="flex gap-4 items-start p-5 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-card">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#002E3D] mb-2">
                    For every practice size
                  </h3>
                  <p className="text-base leading-relaxed text-[#002E3D]/80">
                    Whether you're a solo practitioner or a large medical group, our solutions scale to meet your needs while maintaining the highest standards of service.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-5 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-card">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#002E3D] mb-2">
                    Tailored solutions
                  </h3>
                  <p className="text-base leading-relaxed text-[#002E3D]/80">
                    We customize our RCM services to match your specialty, workflow, and specific requirements, ensuring optimal results for your practice.
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/get-started"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 text-base font-medium text-white bg-primary rounded-lg hover:bg-primary-dark transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Learn more about our coverage
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right Column */}
          <div className="flex-1 relative w-full min-h-[400px] md:min-h-[500px] bg-white/50 rounded-2xl p-4 shadow-card overflow-hidden">
            <div className="absolute top-4 right-4 text-center bg-white/80 p-3 rounded-lg shadow-sm">
              <Flag className="w-10 h-10 mx-auto text-[#B22234]" />
              <p className="mt-2 text-[10px] font-medium uppercase tracking-wider text-[#002E3D]">
                United States Coverage
              </p>
            </div>

            {/* Dotted Background Pattern */}
            <div className="absolute inset-0 mt-16 opacity-30">
              <div className="w-full h-full grid grid-cols-12 gap-4">
                {Array.from({ length: 144 }).map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-neutral-400" />
                ))}
              </div>
            </div>

            {/* Map Markers with Pulse Effect */}
            <div className="absolute top-[30%] left-[60%] transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/20 rounded-full animate-pulse"></div>
                <MapPin className="w-8 h-8 text-primary relative z-10" />
              </div>
              <div className="absolute mt-2 -ml-12 bg-white px-3 py-1 rounded-full text-xs font-medium shadow-sm">
                New York
              </div>
            </div>
            
            <div className="absolute top-[45%] left-[40%] transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/20 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
                <MapPin className="w-8 h-8 text-primary relative z-10" />
              </div>
              <div className="absolute mt-2 -ml-14 bg-white px-3 py-1 rounded-full text-xs font-medium shadow-sm">
                Chicago
              </div>
            </div>
            
            <div className="absolute top-[35%] left-[75%] transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/20 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
                <MapPin className="w-8 h-8 text-primary relative z-10" />
              </div>
              <div className="absolute mt-2 -ml-12 bg-white px-3 py-1 rounded-full text-xs font-medium shadow-sm">
                Boston
              </div>
            </div>
            
            <div className="absolute top-[55%] left-[65%] transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/20 rounded-full animate-pulse" style={{ animationDelay: "1.5s" }}></div>
                <MapPin className="w-8 h-8 text-primary relative z-10" />
              </div>
              <div className="absolute mt-2 -ml-16 bg-white px-3 py-1 rounded-full text-xs font-medium shadow-sm">
                Washington
              </div>
            </div>
            
            {/* Stats Card */}
            <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-card">
              <div className="flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-[#002E3D]/80">Nationwide Coverage</p>
                  <p className="text-2xl font-serif font-bold text-primary">50 States</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}