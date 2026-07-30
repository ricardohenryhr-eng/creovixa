import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Industries } from '@/components/industries'
import { About } from '@/components/about'
import { ContactForm } from '@/components/contact-form'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Services />
        <Industries />
        <About />
        <ContactForm />
      </main>
      <SiteFooter />
    </div>
  )
}
