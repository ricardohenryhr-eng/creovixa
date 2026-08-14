import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
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
  title: 'Creovixa | Professional Interpretation Services',
  description:
    'Creovixa connects organizations and individuals with qualified professional interpreters through secure technology. Medical, legal, business, and remote interpretation worldwide.',
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
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
