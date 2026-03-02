import { MetadataRoute } from 'next'
import { getPayloadClient } from '@/payloadClient'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const payload = await getPayloadClient()

  // Fetch products
  const productsResult = await payload.find({
    collection: 'products',
    limit: 1000,
    depth: 0,
  })

  const products = productsResult.docs ?? []

  const productUrls: MetadataRoute.Sitemap = products.map((product) => ({
    url: `https://yourdomain.com/shop/${product.slug}`,
    lastModified: new Date(product.updatedAt),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  return [
    // Homepage
    {
      url: 'https://yourdomain.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },

    // Shop page
    {
      url: 'https://yourdomain.com/shop',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },

    ...productUrls,
  ]
}