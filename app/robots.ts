import type { MetadataRoute } from 'next'

const BASE_URL = 'https://officeflow.co.ke'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/admin/',
        '/api/',
        '/cart/',
        '/checkout/',
        '/search/',
        '/order-cancel/',
        '/order-success/',
        '/my-account/'
      ],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}