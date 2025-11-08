"use client"

import Link from "next/link"
import { ChevronRight, Sparkles, ArrowUpRight } from "lucide-react"
import { useState } from "react"

interface RCMSolution {
  title: string
  description: string
  icon: string
  href: string
}

interface EnhancedRCMCardProps {
  solution: RCMSolution
  index: number
  currentService?: string
  variant?: 'default' | 'featured' | 'compact'
}

export default function EnhancedRCMCard({
  solution,
  index,
  currentService,
  variant = 'default'
}: EnhancedRCMCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const isCurrentService = solution.href === currentService
  const isFeatured = variant === 'featured'
  const isCompact = variant === 'compact'

  // Dynamic gradient colors based on index for visual variety
  const gradientColors = [
    'from-primary/20 via-primary/10 to-primary/5',
    'from-blue-500/20 via-blue-400/10 to-blue-300/5',
    'from-emerald-500/20 via-emerald-400/10 to-emerald-300/5',
    'from-purple-500/20 via-purple-400/10 to-purple-300/5',
    'from-orange-500/20 via-orange-400/10 to-orange-300/5',
    'from-pink-500/20 via-pink-400/10 to-pink-300/5',
    'from-indigo-500/20 via-indigo-400/10 to-indigo-300/5'
  ]

  const borderColors = [
    'border-primary/30',
    'border-blue-400/30',
    'border-emerald-400/30',
    'border-purple-400/30',
    'border-orange-400/30',
    'border-pink-400/30',
    'border-indigo-400/30'
  ]

  const iconBgColors = [
    'from-primary/20 to-primary/5',
    'from-blue-500/20 to-blue-400/5',
    'from-emerald-500/20 to-emerald-400/5',
    'from-purple-500/20 to-purple-400/5',
    'from-orange-500/20 to-orange-400/5',
    'from-pink-500/20 to-pink-400/5',
    'from-indigo-500/20 to-indigo-400/5'
  ]

  const glowColors = [
    'from-primary/40 to-primary-dark/40',
    'from-blue-500/40 to-blue-600/40',
    'from-emerald-500/40 to-emerald-600/40',
    'from-purple-500/40 to-purple-600/40',
    'from-orange-500/40 to-orange-600/40',
    'from-pink-500/40 to-pink-600/40',
    'from-indigo-500/40 to-indigo-600/40'
  ]

  const currentGradient = gradientColors[index % gradientColors.length]
  const currentBorder = borderColors[index % borderColors.length]
  const currentIconBg = iconBgColors[index % iconBgColors.length]
  const currentGlow = glowColors[index % glowColors.length]

  return (
    <div 
      className={`group relative ${
        isFeatured ? 'md:w-full lg:w-full' : isCompact ? 'md:w-1/3 lg:w-[30%]' : 'md:w-1/2 lg:w-2/5'
      } max-w-md mx-auto`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Enhanced Glow Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${currentGlow} rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700 -z-10 scale-95 group-hover:scale-105`}></div>
      
      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
        <div className={`absolute top-4 right-4 w-2 h-2 bg-primary/40 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000 ${isHovered ? 'animate-ping' : ''}`}></div>
        <div className={`absolute top-8 right-12 w-1 h-1 bg-primary/60 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1200 delay-200 ${isHovered ? 'animate-ping' : ''}`}></div>
        <div className={`absolute top-12 right-8 w-1.5 h-1.5 bg-primary/50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1400 delay-400 ${isHovered ? 'animate-ping' : ''}`}></div>
      </div>

      {/* Main Card */}
      <div className={`bg-white rounded-3xl shadow-xl overflow-hidden h-full flex flex-col group-hover:-translate-y-3 transition-all duration-500 border-2 ${currentBorder} group-hover:border-primary/50 relative backdrop-blur-sm`}>
        
        {/* Current Service Badge */}
        {isCurrentService && (
          <div className="absolute top-4 right-4 z-30">
            <div className="bg-gradient-to-r from-primary to-primary-dark text-white text-xs font-bold py-2 px-4 rounded-full shadow-lg flex items-center whitespace-nowrap">
              <Sparkles className="w-3 h-3 mr-2" />
              Current Service
            </div>
          </div>
        )}

        {/* Enhanced Top Accent with Animation */}
        <div className="relative h-3 w-full overflow-hidden">
          <div className={`h-full w-full bg-gradient-to-r ${currentGradient} relative`}>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </div>
        </div>
        
        {/* Card Content */}
        <div className={`${isFeatured ? 'p-10' : 'p-8'} flex-grow relative`}>
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
            <div
              className="absolute inset-0 bg-repeat"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}
            ></div>
          </div>
          
          {/* Enhanced Icon with Multiple Layers */}
          <div className="relative mb-8 inline-block">
            {/* Outer Glow Ring */}
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg transform group-hover:scale-125 transition-all duration-700 opacity-0 group-hover:opacity-100"></div>
            
            {/* Middle Ring */}
            <div className="absolute inset-2 bg-primary/10 rounded-full blur-md transform group-hover:scale-110 transition-all duration-500"></div>
            
            {/* Icon Container */}
            <div className={`relative ${isFeatured ? 'w-28 h-28' : 'w-24 h-24'} rounded-full bg-gradient-to-br ${currentIconBg} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 border border-white/50 backdrop-blur-sm`}>
              {/* Icon Background Shine */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon */}
              <span className={`${isFeatured ? 'text-5xl' : 'text-4xl'} relative z-10 transform group-hover:scale-110 transition-transform duration-300`} role="img" aria-label={solution.title}>
                {solution.icon}
              </span>
              
              {/* Floating Ring Animation */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700"></div>
            </div>
          </div>
          
          {/* Enhanced Title with Gradient Text */}
          <h3 className={`${isFeatured ? 'text-3xl md:text-4xl' : 'text-2xl'} font-bold mb-6 relative`}>
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent group-hover:from-primary group-hover:via-primary-dark group-hover:to-primary transition-all duration-500">
              {solution.title}
            </span>
            
            {/* Animated Underline */}
            <div className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary/50 to-primary rounded-full w-0 group-hover:w-full transition-all duration-700 delay-200"></div>
          </h3>
          
          {/* Enhanced Description */}
          <p className={`text-gray-600 group-hover:text-gray-700 ${isFeatured ? 'text-lg' : 'text-base'} leading-relaxed transition-colors duration-300 relative z-10`}>
            {solution.description}
          </p>

          {/* Decorative Elements */}
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
            <div className="w-16 h-16 border-2 border-primary/30 rounded-full"></div>
            <div className="absolute top-2 left-2 w-12 h-12 border border-primary/20 rounded-full"></div>
          </div>
        </div>
        
        {/* Enhanced Card Footer */}
        <div className={`${isFeatured ? 'px-10 pb-10' : 'px-8 pb-8'} mt-auto`}>
          <Link
            href={solution.href}
            className="group/btn relative inline-flex items-center justify-center w-full px-8 py-4 text-white bg-gradient-to-r from-primary via-primary-dark to-primary bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02] overflow-hidden"
          >
            {/* Button Background Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
            
            {/* Button Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
            
            {/* Button Content */}
            <span className="relative z-10 mr-2">Learn More</span>
            <ArrowUpRight className="relative z-10 h-5 w-5 transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
            
            {/* Ripple Effect */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-white/20 rounded-full group-hover/btn:w-full group-hover/btn:h-full transition-all duration-500"></div>
            </div>
          </Link>
        </div>
      </div>

      {/* Corner Accent */}
      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-primary/20 to-primary/10 rounded-br-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  )
}