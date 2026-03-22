import {getPayload} from 'payload';
import config from '@payload-config';

export async function getSingleBlog (name, category){
const payload = await getPayload({config});

 try {
    const [mainBlogRes, categoryBlogsRes] = await Promise.all([
    payload.find({
      collection: 'blogs',
    where: {
         slug :  { equals: name }
    } // The slug of you
    }),
    payload.find({
      collection: "blogs",
      where: {
        category: {
          equals: category,
        },
      },
      select:{
      id: true,
      slug: true,
      title: true,
      featuredImage: true,
      category: true,
      createdAt: true
      },
      sort: "-createdAt",
      limit: 5,
    }),
  ])

  return {
    mainBlog: mainBlogRes.docs[0] || null,
    categoryBlogs: categoryBlogsRes.docs,
  }
 
  } catch (error) {
    console.error('Failed to get products list:', error)
    return {
      mainBlog: null,
      categoryBlogs: [],
  }
  }
}