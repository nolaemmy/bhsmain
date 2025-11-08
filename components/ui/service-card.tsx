"use client"

import Link from "next/link"
import { ArrowRight, LucideIcon, Sparkles, ArrowUpRight } from "lucide-react"
import { useState } from "react"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  metric?: string
  link: string
  bgColor: 'primary' | 'secondary' | 'blue' | 'emerald' | 'purple' | 'orange' | 'pink' | 'indigo'
}

const colorVariants = {
  primary: {
    gradient: 'bg-gradient-to-br from-primary via-primary-dark to-primary',
    glowColor: 'from-primary/40 to-primary-dark/40',
    borderColor: 'border-primary/30',
    iconGradient: 'from-primary/20 to-primary/5',
    accentColor: 'bg-primary',
    textGradient: 'from-primary to-primary-dark'
  },
  secondary: {
    gradient: 'bg-gradient-to-br from-[#C85A3E] via-[#D6633A] to-[#C85A3E]',
    glowColor: 'from-[#C85A3E]/40 to-[#C85A3E]/40',
    borderColor: 'border-[#C85A3E]/30',
    iconGradient: 'from-[#C85A3E]/20 to-[#C85A3E]/5',
    accentColor: 'bg-[#C85A3E]',
    textGradient: 'from-[#C85A3E] to-[#C85A3E]'
  },
  blue: {
    gradient: 'bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800',
    glowColor: 'from-blue-500/40 to-blue-600/40',
    borderColor: 'border-blue-400/30',
    iconGradient: 'from-blue-500/20 to-blue-400/5',
    accentColor: 'bg-blue-600',
    textGradient: 'from-blue-600 to-blue-700'
  },
  emerald: {
    gradient: 'bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800',
    glowColor: 'from-emerald-500/40 to-emerald-600/40',
    borderColor: 'border-emerald-400/30',
    iconGradient: 'from-emerald-500/20 to-emerald-400/5',
    accentColor: 'bg-emerald-600',
    textGradient: 'from-emerald-600 to-emerald-700'
  },
  purple: {
    gradient: 'bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800',
    glowColor: 'from-purple-500/40 to-purple-600/40',
    borderColor: 'border-purple-400/30',
    iconGradient: 'from-purple-500/20 to-purple-400/5',
    accentColor: 'bg-purple-600',
    textGradient: 'from-purple-600 to-purple-700'
  },
  orange: {
    gradient: 'bg-gradient-to-br from-orange-600 via-orange-700 to-orange-800',
    glowColor: 'from-orange-500/40 to-orange-600/40',
    borderColor: 'border-orange-400/30',
    iconGradient: 'from-orange-500/20 to-orange-400/5',
    accentColor: 'bg-orange-600',
    textGradient: 'from-orange-600 to-orange-700'
  },
  pink: {
    gradient: 'bg-gradient-to-br from-pink-600 via-pink-700 to-pink-800',
    glowColor: 'from-pink-500/40 to-pink-600/40',
    borderColor: 'border-pink-400/30',
    iconGradient: 'from-pink-500/20 to-pink-400/5',
    accentColor: 'bg-pink-600',
    textGradient: 'from-pink-600 to-pink-700'
  },
  indigo: {
    gradient: 'bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-800',
    glowColor: 'from-indigo-500/40 to-indigo-600/40',
    borderColor: 'border-indigo-400/30',
    iconGradient: 'from-indigo-500/20 to-indigo-400/5',
    accentColor: 'bg-indigo-600',
    textGradient: 'from-indigo-600 to-indigo-700'
  }
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  metric,
  link,
  bgColor
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const colors = colorVariants[bgColor]

  return (
    <div
      className="group relative h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Enhanced Glow Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${colors.glowColor} rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700 -z-10 scale-95 group-hover:scale-105`}></div>
      
      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
        <div className={`absolute top-4 right-4 w-2 h-2 bg-white/40 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000 ${isHovered ? 'animate-ping' : ''}`}></div>
        <div className={`absolute top-8 right-12 w-1 h-1 bg-white/60 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1200 delay-200 ${isHovered ? 'animate-ping' : ''}`}></div>
        <div className={`absolute top-12 right-8 w-1.5 h-1.5 bg-white/50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1400 delay-400 ${isHovered ? 'animate-ping' : ''}`}></div>
      </div>

      {/* Main Card */}
      <article className={`${colors.gradient} rounded-3xl p-6 md:p-8 h-full flex flex-col group-hover:-translate-y-3 transition-all duration-500 border-2 ${colors.borderColor} group-hover:border-white/30 relative backdrop-blur-sm shadow-xl hover:shadow-2xl`}>
        
        {/* Enhanced Top Accent with Animation */}
        <div className="relative h-1 w-full overflow-hidden rounded-full mb-6">
          <div className="h-full w-full bg-gradient-to-r from-white/20 via-white/40 to-white/20 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </div>
        </div>

        {/* Enhanced Icon with Multiple Layers */}
        <div className="relative mb-8 flex justify-center">
          {/* Outer Glow Ring */}
          <div className="absolute inset-0 bg-white/20 rounded-full blur-lg transform group-hover:scale-125 transition-all duration-700 opacity-0 group-hover:opacity-100"></div>
          
          {/* Middle Ring */}
          <div className="absolute inset-2 bg-white/10 rounded-full blur-md transform group-hover:scale-110 transition-all duration-500"></div>
          
          {/* Icon Container */}
          <div className={`relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br ${colors.iconGradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 border border-white/30 backdrop-blur-sm`}>
            {/* Icon Background Shine */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Icon */}
            <Icon className="w-8 h-8 md:w-10 md:h-10 text-white relative z-10 transform group-hover:scale-110 transition-transform duration-300" strokeWidth={2} />
            
            {/* Floating Ring Animation */}
            <div className="absolute inset-0 rounded-full border-2 border-white/30 scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700"></div>
          </div>
        </div>

        {/* Enhanced Content Section */}
        <div className="flex-grow text-center mb-6 md:mb-8">
          {/* Title with Gradient Text */}
          <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 relative text-white group-hover:text-white/95 transition-colors duration-300">
            {title}
            {/* Animated Underline */}
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-white/50 to-white rounded-full w-0 group-hover:w-3/4 transition-all duration-700 delay-200"></div>
          </h3>
          
          {/* Metric Badge */}
          {metric && (
            <div className="inline-flex items-center px-3 md:px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-3 md:mb-4 border border-white/20 group-hover:bg-white/20 transition-all duration-300">
              <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-white mr-2 group-hover:animate-pulse" />
              <span className="text-white font-semibold text-xs md:text-sm">{metric}</span>
            </div>
          )}
          
          {/* Description */}
          <p className="text-sm md:text-base text-white/90 group-hover:text-white/95 leading-relaxed transition-colors duration-300 relative z-10">
            {description}
          </p>

          {/* Decorative Elements */}
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
            <div className="w-12 h-12 border border-white/30 rounded-full"></div>
            <div className="absolute top-1 left-1 w-10 h-10 border border-white/20 rounded-full"></div>
          </div>
        </div>

        {/* Enhanced Action Button */}
        <div className="mt-auto">
          <Link
            href={link}
            className="group/btn relative inline-flex items-center justify-center w-full px-4 md:px-6 py-3 md:py-4 text-white bg-white/10 hover:bg-white/20 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02] overflow-hidden border border-white/20 hover:border-white/40"
          >
            {/* Button Background Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
            
            {/* Button Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
            
            {/* Button Content */}
            <span className="relative z-10 mr-2 text-sm md:text-base">Learn More</span>
            <ArrowUpRight className="relative z-10 h-4 w-4 md:h-5 md:w-5 transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
            
            {/* Ripple Effect */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-white/10 rounded-full group-hover/btn:w-full group-hover/btn:h-full transition-all duration-500"></div>
            </div>
          </Link>
        </div>
      </article>

      {/* Corner Accent */}
      <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-gradient-to-br from-white/20 to-white/10 rounded-br-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  )
}