import { getPayload } from "payload"
import config from "@/payload.config"

export async function getBlogs() {
  const payloadClient = await getPayload({ config })

  try {
    const [latestBlogRes, featuredBlogsRes, allBlogsRes] = await Promise.all([
    payloadClient.find({
      collection: "blogs",
      limit: 1,
      sort: "-createdAt",
      select:{
      id: true,
      slug: true,
      title: true,
      featuredImage: true,
      category: true,
      excerpt: true,
      createdAt: true
      }
    }),
    payloadClient.find({
      collection: "blogs",
      where: {
        featured: {
          equals: true,
        },
      },
      sort: "-createdAt",
       select:{
      id: true,
      slug: true,
      title: true,
      featuredImage: true,
      category: true,
      excerpt: true,
      createdAt: true
      },
      limit: 6,
    }),
    payloadClient.find({
      collection: "blogs",
      sort: "-createdAt",
       select:{
      id: true,
      slug: true,
      title: true,
      featuredImage: true,
      category: true,
      excerpt: true,
      createdAt: true
      },
    }),
  ])

  return {
    latestBlog: latestBlogRes.docs[0] || null,
    featuredBlogs: featuredBlogsRes.docs,
    allBlogs: allBlogsRes.docs
  }
  } catch (error) {
    console.error("Error fetching blogs:", error)

    return {
      latestBlog: null,
      featuredBlogs: [],
      allBlogs: [],
  }

}
}