import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { HowItWorks } from '@/components/how-it-works'
import { WhyChoose } from '@/components/why-choose'
import { Industries } from '@/components/industries'
import { Languages } from '@/components/languages'
import { About } from '@/components/about'
import { Testimonials } from '@/components/testimonials'
import { CallToAction } from '@/components/cta'

export default function Page() {
  return (
    <>
      <Hero />
      <Services />
      <HowItWorks />
      <WhyChoose />
      <Industries />
      <Languages />
      <About />
      <Testimonials />
      <CallToAction />
    </>
  )
}
