"use client"

import * as React from "react"
import { MessageCircle } from "lucide-react"
import { ContactFormDialog } from "./contact-form-dialog"

export function FloatingMessageIcon() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <ContactFormDialog>
        <button
          className="group relative w-14 h-14 bg-gradient-to-br from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 transform hover:scale-110 active:scale-95 flex items-center justify-center"
          aria-label="Open contact form"
        >
          {/* Pulse animation rings */}
          <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20"></div>
          <div className="absolute inset-0 rounded-full bg-primary animate-pulse opacity-30 [animation-duration:2s]"></div>
          
          {/* Message icon */}
          <MessageCircle className="h-6 w-6 relative z-10 group-hover:scale-110 transition-transform duration-200" />
          
          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            Send us a message
            <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
          </div>
        </button>
      </ContactFormDialog>
    </div>
  )
}