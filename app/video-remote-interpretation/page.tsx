import type { Metadata } from 'next'
import { ServicePage } from '@/components/service-page'
import { getServiceBySlug } from '@/lib/services-data'

const data = getServiceBySlug('video-remote-interpretation')!

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  keywords: data.keywords,
  alternates: { canonical: `/${data.slug}` },
  openGraph: {
    title: data.metaTitle,
    description: data.metaDescription,
    type: 'website',
    url: `/${data.slug}`,
  },
}

export default function Page() {
  return <ServicePage data={data} />
}
