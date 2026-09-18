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
  // reCAPTCHA site keys are public; resolve on the server so the connected
  // RECAPTCHA_SITE_KEY works without needing a NEXT_PUBLIC_ duplicate.
  const recaptchaSiteKey =
    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? process.env.RECAPTCHA_SITE_KEY

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
        <ContactForm siteKey={recaptchaSiteKey} />
        <CallToAction />
      </main>
      <SiteFooter />
    </div>
  )
}
