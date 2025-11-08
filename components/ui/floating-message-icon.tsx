"use client"

import * as React from "react"
import { MessageCircle } from "lucide-react"
import { ContactFormDialog } from "./contact-form-dialog"

export function FloatingMessageIcon() {
  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Professional floating text overlay - right-aligned to avoid viewport cutoff */}
      <div className="absolute bottom-full mb-3 right-0 translate-x-0 bg-white/95 backdrop-blur-sm text-gray-800 px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap shadow-lg border border-gray-200/50 pointer-events-none z-10">
        <span>Get Started with BHS Healthcare</span>
        {/* Small indicator dot aligned with button center */}
        <div className="absolute top-full right-7 w-1.5 h-1.5 bg-white border border-gray-200/50 rounded-full -mt-0.5"></div>
      </div>

      <ContactFormDialog>
        <button
          type="button"
          className="relative w-14 h-14 bg-gradient-to-br from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 transform hover:scale-110 active:scale-95 flex items-center justify-center cursor-pointer"
          aria-label="Open contact form"
        >
          {/* Pulse animation rings */}
          <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20 pointer-events-none"></div>
          <div className="absolute inset-0 rounded-full bg-primary animate-pulse opacity-30 [animation-duration:2s] pointer-events-none"></div>
          
          {/* Message icon */}
          <MessageCircle className="h-6 w-6 relative z-10 group-hover:scale-110 transition-transform duration-200 pointer-events-none" />
        </button>
      </ContactFormDialog>
    </div>
  )
}