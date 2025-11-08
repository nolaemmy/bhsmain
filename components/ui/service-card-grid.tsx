"use client"

import ServiceCard from "./service-card"
import { LucideIcon } from "lucide-react"
import { ReactNode } from "react"

interface ServiceItem {
  icon: LucideIcon
  title: string
  description: string
  metric?: string
  link: string
  bgColor: 'primary' | 'secondary' | 'blue' | 'emerald' | 'purple' | 'orange' | 'pink' | 'indigo'
}

interface ServiceCardGridProps {
  services: ServiceItem[]
  columns?: 2 | 3 | 4
  className?: string
}

export default function ServiceCardGrid({ 
  services, 
  columns = 3,
  className = ""
}: ServiceCardGridProps) {
  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  }

  return (
    <div className={`
      grid ${gridCols[columns]} gap-6
      ${className}
    `}>
      {services.map((service, index) => (
        <div key={index} className="h-full">
          <ServiceCard
            icon={service.icon}
            title={service.title}
            description={service.description}
            metric={service.metric}
            link={service.link}
            bgColor={service.bgColor}
          />
        </div>
      ))}
    </div>
  )
}