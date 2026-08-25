import { Analytics } from '@vercel/analytics/next'
import { GoogleAnalytics } from '@next/third-parties/google'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { AppChrome } from '@/components/app-chrome'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default:
      'Creovixa Language Services | Professional Interpretation & Translation',
    template: '%s | Creovixa Language Services',
  },
  description:
    'Creovixa Language Services connects organizations and individuals with qualified professional interpreters through secure technology. Medical, legal, business, and remote interpretation worldwide.',
  generator: 'v0.app',
  keywords: [
    'interpretation services',
    'medical interpreter',
    'legal interpreter',
    'remote interpretation',
    'language services',
    'professional interpreters',
  ],
  openGraph: {
    title: 'Creovixa | Connecting People Through Language',
    description:
      'Qualified professional interpreters for healthcare, legal, government, and business, delivered through secure technology.',
    type: 'website',
  },
  verification: {
    google: 'WTVzVArtWE5ERu9VKut4npz-K1bwbSecXPLuw7Ekw2M',
    other: {
      'msvalidate.01': '24D529859DD4814838D8F2A256D606E0',
    },
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#2563eb',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`light ${inter.variable} ${spaceGrotesk.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <AppChrome header={<SiteHeader />} footer={<SiteFooter />}>
          {children}
        </AppChrome>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
      <GoogleAnalytics gaId="G-DR34EN8CZJ" />
    </html>
  )
}
