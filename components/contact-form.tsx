'use client'

import { useState, type FormEvent } from 'react'
import { Mail, Phone, MapPin, CheckCircle2, Send } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

const inquiryTypes = [
  'Request an interpreter',
  'Join the interpreter network',
  'General inquiry',
  'Partnership',
]

const contactDetails = [
  { icon: Mail, label: 'Email', value: 'hello@creovixa.com' },
  { icon: Phone, label: 'Phone', value: '+1 (800) 555-0142' },
  { icon: MapPin, label: 'Office', value: 'Global · Remote-first' },
]

const fieldClass =
  'w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/30'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="scroll-mt-16 bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-14">
          <div className="lg:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Contact Us
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
              Let&apos;s start the conversation
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-pretty text-muted-foreground">
              Tell us what you need and our team will connect you with the right
              interpreters, usually within one business day.
            </p>

            <ul className="mt-8 space-y-5">
              {contactDetails.map((detail) => (
                <li key={detail.label} className="flex items-center gap-4">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <detail.icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      {detail.label}
                    </p>
                    <p className="text-sm font-semibold text-foreground">
                      {detail.value}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-lg shadow-primary/5 sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <span className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 className="size-7" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold text-card-foreground">
                    Thank you, we&apos;ve received your message
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                    A member of the Creovixa team will be in touch shortly to
                    help with your request.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className={cn(
                      buttonVariants({ variant: 'outline' }),
                      'mt-6 h-10 px-5',
                    )}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-foreground"
                      >
                        Full name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Jane Doe"
                        className={fieldClass}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="organization"
                        className="text-sm font-medium text-foreground"
                      >
                        Organization
                      </label>
                      <input
                        id="organization"
                        name="organization"
                        type="text"
                        autoComplete="organization"
                        placeholder="Acme Health"
                        className={fieldClass}
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-foreground"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="jane@example.com"
                        className={fieldClass}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="phone"
                        className="text-sm font-medium text-foreground"
                      >
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="+1 (555) 000-0000"
                        className={fieldClass}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="inquiry"
                      className="text-sm font-medium text-foreground"
                    >
                      How can we help?
                    </label>
                    <select
                      id="inquiry"
                      name="inquiry"
                      required
                      defaultValue=""
                      className={fieldClass}
                    >
                      <option value="" disabled>
                        Select an option
                      </option>
                      {inquiryTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-foreground"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell us about the languages, setting, and timing you need."
                      className={cn(fieldClass, 'resize-none')}
                    />
                  </div>

                  <button
                    type="submit"
                    className={cn(
                      buttonVariants({ variant: 'default' }),
                      'h-12 px-6 text-base',
                    )}
                  >
                    Send message
                    <Send className="size-4" aria-hidden="true" />
                  </button>
                  <p className="text-xs text-muted-foreground">
                    By submitting, you agree to our Privacy Policy. We&apos;ll
                    only use your details to respond to your request.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
