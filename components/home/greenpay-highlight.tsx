import Image from "next/image"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

const features = [
  "Secure online payment portal for patients",
  "Real-time payment tracking and reporting",
  "Automated payment reminders",
  "Integration with major EHR systems",
  "Customizable payment plans",
]

export default function GreenPayHighlight() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          <div className="order-2 lg:order-1">
            <Image
              src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="GreenPay Station"
              width={600}
              height={500}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <span>New</span>
            </div>
            <h2 className="mt-4 heading-2 text-neutral-900">Introducing GreenPay Station</h2>
            <p className="mt-4 text-lg text-neutral-600">
              Streamline your patient payment process with our secure, user-friendly payment portal. GreenPay Station
              makes it easy for patients to pay their bills online while giving you real-time visibility into your
              practice's cash flow.
            </p>
            <ul className="mt-8 space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-start">
                  <CheckCircle className="mr-3 h-6 w-6 flex-shrink-0 text-primary" />
                  <span className="text-neutral-700">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link href="/greenpay" className="btn btn-primary">
                Learn More About GreenPay
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
