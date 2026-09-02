import type { MetadataRoute } from 'next'
import config from '@payload-config'
import { getPayload } from 'payload'

const BASE_URL = 'https://officeflow.co.ke'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const payload = await getPayload({ config })


  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/office-supplies-nairobi`,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/shop`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blogs`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/faqs`,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/shipping-delivery`,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/return-refund`,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/terms-and-conditions`,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  /*
   * --------------------------------------------------
   * BLOG POSTS
   * --------------------------------------------------
   */

  const blogs = await payload.find({
    collection: 'blogs',
    limit: 1000,
    depth: 0,
  })

  const blogPages: MetadataRoute.Sitemap = blogs.docs
    .filter((blog) => blog.slug)
    .map((blog) => ({
      url: `${BASE_URL}/blogs/${blog.category}/${blog.slug}`,
      lastModified: blog.updatedAt
        ? new Date(blog.updatedAt)
        : new Date(blog.createdAt),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))

  /*
   * --------------------------------------------------
   * SHOP CATEGORIES
   * --------------------------------------------------
   */

  const categories = await payload.find({
    collection: 'categories',
    where: {
       type: {
        equals: 'category',
      },
    },
    depth: 1,
  })

  const categoryPages: MetadataRoute.Sitemap = categories.docs
    .filter((category) => category.slug)
    .map((category) => ({
      url: `${BASE_URL}/shop/${category.slug}`,
      lastModified: category.updatedAt
        ? new Date(category.updatedAt)
        : new Date(category.createdAt),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))

  /*
   * --------------------------------------------------
   * SHOP SUBCATEGORIES
   * --------------------------------------------------
   */

  const subcategories = await payload.find({
   collection: 'categories',
    where: {
       type: {
        equals: 'subcategory',
      },
    },
    depth: 1,
  })

  const subcategoryPages: MetadataRoute.Sitemap = subcategories.docs
     .filter((subcategory) => subcategory.slug)
    .map((subcategory) => ({
      url: `${BASE_URL}/shop/office-supplies/${subcategory.slug}`,
      lastModified: subcategory.updatedAt
        ? new Date(subcategory.updatedAt)
        : new Date(subcategory.createdAt),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))

  /*
   * --------------------------------------------------
   * PRODUCTS
   * --------------------------------------------------
   *
   * Your products are stored in multiple collections,
   * so we fetch each collection separately.
   */

  const productCollections = [
    'office-supplies',
    'office-pantry-hydration',
    'office-cleaning-hygiene',
    'office-electronics',
  ] as const

  const productPages: MetadataRoute.Sitemap = []

  for (const collection of productCollections) {
    const products = await payload.find({
      collection,
      limit: 1000,
      depth: 1,
    })

    for (const product of products.docs) {
      if (!product.slug || !product.id) {
        continue
      }

      /*
       * Adjust these fields if your product document
       * uses different field names.
       */

      const category = product.category

      const subcategory = product.subcategory

      if (!category || !subcategory) {
        continue
      }

      productPages.push({
        url: `${BASE_URL}/shop/${category}/${subcategory}/${product.id}/${product.slug}`,
        lastModified: product.updatedAt
          ? new Date(product.updatedAt)
          : new Date(product.createdAt),
        changeFrequency: 'weekly',
        priority: 0.7,
      })
    }
  }

  /*
   * --------------------------------------------------
   * TAG PAGES
   * --------------------------------------------------
   *
   * Tag URLs are included only if you want Google to
   * index them. If your tag pages are thin/filter pages,
   * I recommend leaving them OUT of the sitemap.
   */

  /*
   * --------------------------------------------------
   * RETURN ALL URLS
   * --------------------------------------------------
   */

  return [
    ...staticPages,
    ...blogPages,
    ...categoryPages,
    ...subcategoryPages,
    ...productPages,
  ]
}