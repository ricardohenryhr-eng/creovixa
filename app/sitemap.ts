import type { MetadataRoute } from 'next'
import { serviceSlugs } from '@/lib/services-data'

const SITE_URL = 'https://www.creovixa.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const home: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]

  const servicePages: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${SITE_URL}/${slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [...home, ...servicePages]
}
