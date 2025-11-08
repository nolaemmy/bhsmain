import Link from "next/link"

export default function CtaSection() {
  return (
    <section className="section bg-primary">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="heading-2 text-white">Ready to Boost Your Practice's Revenue?</h2>
          <p className="mt-4 text-xl text-white/80">
            Join hundreds of healthcare providers who have optimized their billing processes and increased their
            collections with BHS Healthcare Billing.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/get-started" className="btn bg-white text-primary hover:bg-neutral-100">
              Schedule a Consultation
            </Link>
            <Link href="/services" className="btn border border-white text-white hover:bg-white/10">
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
