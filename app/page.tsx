import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { HowItWorks } from '@/components/how-it-works'
import { WhyChoose } from '@/components/why-choose'
import { Industries } from '@/components/industries'
import { Languages } from '@/components/languages'
import { About } from '@/components/about'
import { Testimonials } from '@/components/testimonials'
import { ContactForm } from '@/components/contact-form'
import { CallToAction } from '@/components/cta'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Services />
        <HowItWorks />
        <WhyChoose />
        <Industries />
        <Languages />
        <About />
        <Testimonials />
        <ContactForm />
        <CallToAction />
      </main>
      <SiteFooter />
    </div>
  )
}
