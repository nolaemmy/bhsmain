"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    content:
      "BHS Healthcare Billing transformed our practice's financial performance. Their team helped us increase our collections by 32% in just six months while reducing our administrative workload.",
    role: "Internal Medicine, Johnson Medical Group",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=128&q=80",
  },
  {
    content:
      "As a busy OB/GYN practice, we needed a billing partner who understood our specialty. BHS Healthcare Billing's expertise has been invaluable, and their team is responsive and professional.",
    role: "OB/GYN, Women's Health Associates",
    avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=128&q=80",
  },
  {
    content:
      "Switching to BHS Healthcare Billing was the best decision we made for our pediatric practice. Their attention to detail and knowledge of pediatric billing codes has significantly improved our reimbursement rates.",
    role: "Pediatrician, Bright Futures Pediatrics",
    avatar: "https://images.unsplash.com/photo-1594824720379-bee4087cd3b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=128&q=80",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="section bg-neutral-50">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-2 text-neutral-900">What Our Clients Say</h2>
          <p className="mt-4 text-lg text-neutral-600">
            Hear from healthcare providers who have transformed their billing processes with BHS Healthcare Billing.
          </p>
        </div>

        <div className="mt-16 relative">
          <div className="mx-auto max-w-4xl">
            <div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg md:p-12">
              <Quote className="absolute right-8 top-8 h-16 w-16 text-primary/10" />
              <div className="relative z-10">
                <blockquote className="text-xl text-neutral-700 md:text-2xl">
                  "{testimonials[currentIndex].content}"
                </blockquote>
                <div className="mt-8 flex items-center">
                  <Image
                    src={testimonials[currentIndex].avatar}
                    width={64}
                    height={64}
                    className="h-16 w-16 rounded-full"
                    alt=""
                  />
                  <div className="ml-4">
                    <p className="text-neutral-600">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center space-x-4">
            <button
              onClick={prevTestimonial}
              className="rounded-full bg-white p-2 shadow-md hover:bg-primary hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2.5 w-2.5 rounded-full ${
                    index === currentIndex ? "bg-primary" : "bg-neutral-300 hover:bg-neutral-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="rounded-full bg-white p-2 shadow-md hover:bg-primary hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
