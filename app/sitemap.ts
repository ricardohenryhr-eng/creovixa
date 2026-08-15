import type { MetadataRoute } from 'next'

const BASE_URL = 'https://www.creovixa.com'

const routes = [
  { path: '/', priority: 1, changeFrequency: 'weekly' as const },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/services', priority: 0.9, changeFrequency: 'monthly' as const },
  {
    path: '/french-interpretation-services',
    priority: 0.9,
    changeFrequency: 'monthly' as const,
  },
  {
    path: '/haitian-creole-interpretation-services',
    priority: 0.9,
    changeFrequency: 'monthly' as const,
  },
  {
    path: '/medical-interpretation-services',
    priority: 0.9,
    changeFrequency: 'monthly' as const,
  },
  {
    path: '/legal-interpretation-services',
    priority: 0.9,
    changeFrequency: 'monthly' as const,
  },
  {
    path: '/video-remote-interpretation',
    priority: 0.9,
    changeFrequency: 'monthly' as const,
  },
  {
    path: '/over-the-phone-interpretation',
    priority: 0.9,
    changeFrequency: 'monthly' as const,
  },
  { path: '/contact', priority: 0.7, changeFrequency: 'monthly' as const },
  {
    path: '/become-an-interpreter',
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  },
  { path: '/faq', priority: 0.6, changeFrequency: 'monthly' as const },
  {
    path: '/privacy-policy',
    priority: 0.3,
    changeFrequency: 'yearly' as const,
  },
  {
    path: '/terms-of-service',
    priority: 0.3,
    changeFrequency: 'yearly' as const,
  },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return routes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
