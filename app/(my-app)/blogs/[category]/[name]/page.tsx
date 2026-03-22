import styles from './blog.module.css'
import Navbar from '@/components/navbar/navbar';
import Image from 'next/image';
import BlogCTA from '@/components/blogCTA/blogCTA';
import Footer from '@/components/footer/footer';
import { getSingleBlog } from '@/lib/getSingleBlog';
import { RichTextRenderer } from '@/components/RichText';
import Link from 'next/link';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ name: string
                    category: string
  }>
}

function getMediaUrl(media: number | any) {
  if (!media || typeof media === "number") return null
  return media.url
}


export async function generateMetadata({params} : Props): Promise<Metadata> {
  
  const {name, category} = await params;

  const {mainBlog} = await getSingleBlog(name, category);
  const blogImage = getMediaUrl(mainBlog?.featuredImage);

  if (!mainBlog) {
    return {
      title: 'Blog | Office Aura',
    };
  }

  return {
    title:
      mainBlog.seo?.metaTitle ||
      `${mainBlog.title} | Office Aura`,

    description:
      mainBlog.seo?.metaDescription || mainBlog.excerpt,

    keywords: mainBlog.seo?.keywords?.split(',') || [],

    openGraph: {
      title: mainBlog.title,
      description: mainBlog.excerpt,
      url: `https://www.officeaura.co.ke/blogs/${mainBlog.category}/${mainBlog.slug}`,
      siteName: 'Office Aura',
      images: [
        {
          url: blogImage || 'logo.png',
          width: 1200,
          height: 630,
          alt: mainBlog.title,
        },
      ],
      locale: 'en_KE',
      type: 'article',
    },

    twitter: {
      card: 'summary_large_image',
      title: mainBlog.title,
      description: mainBlog.excerpt,
      images: [blogImage || '/default-og.jpg'],
    },

    alternates: {
      canonical: `https://www.officeaura.co.ke/blogs/${mainBlog.category}/${mainBlog.slug}`,
    },
  };
}



const Blog = async({params} : Props) => {
  
  const {name, category} = await params;

  const {mainBlog, categoryBlogs} = await getSingleBlog(name, category);
  const newCategory = categoryBlogs.filter(blog => blog.id !== mainBlog?.id);
  const date = new Date(`${mainBlog?.createdAt}`);
  const formatted = date.toLocaleString("en-GB", {
           day: "numeric",
           month: "short",
           year: "numeric",
           hour: "2-digit",
           minute: "2-digit"
         });
  const blogImage = getMediaUrl(mainBlog?.featuredImage);
       
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: mainBlog?.title,
    description: mainBlog?.excerpt,
    image: blogImage,
    author: {
      '@type': 'Organization',
      name: mainBlog?.author || 'Office Aura',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Office Aura',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.officeaura.co.ke/logo.png',
      },
    },
    datePublished: mainBlog?.publishedDate,
    dateModified: mainBlog?.updatedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.officeaura.co.ke/blogs/${mainBlog?.category}/${mainBlog?.slug}`,
    },
  };

  const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Blog',
      item: 'https://www.officeaura.co.ke/blogs',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: mainBlog?.category,
      item: `https://www.officeaura.co.ke/blogs/${mainBlog?.category}`,
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: mainBlog?.title,
      item: `https://www.officeaura.co.ke/blogs/${mainBlog?.category}/${mainBlog?.slug}`,
    },
  ],
};

  return (<>
   <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
     <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      /> 
  <div className={styles.blogNav}>
   <Navbar />
  </div>
  <div className={styles.blogInset}>
    <div className={styles.blogInsetContent}>
    <div className={styles.published}>
     <p>Published on: <span>{formatted}Hrs</span></p>
     <p>Author: <span>{mainBlog?.author}</span></p>
     <p>Read Time: <span>{mainBlog?.readTime}</span></p>
    </div>
     
     <h1>{mainBlog?.title}</h1>
     <div className={styles.blogInsetImage}>
       {blogImage && <Image className={styles.blogInsetImg} src={blogImage} alt="office aura image" width={500} height={500}/>} 
     </div>
     <div className={styles.content}>
     <RichTextRenderer content={mainBlog?.content} />
     </div>
    </div>
    <div className={styles.blogInsetSide}>
      <p className={styles.sideHeading}>MORE INSIGHTS</p>

      {newCategory.map((post)=>{

         const postImage = getMediaUrl(post.featuredImage);
         const date = new Date(`${post.createdAt}`);
         const formatted = date.toLocaleString("en-GB", {
           day: "numeric",
           month: "short",
           year: "numeric",
           hour: "2-digit",
           minute: "2-digit"
         });
        
        return(
          <Link key={post.id} href={`/blogs/${post.category}/${post.slug}`} style={{textDecoration: 'none', color: 'purple'}}>
           <div className={styles.featuredPost}>
          <div className={styles.featuredImg}>
            {postImage && <Image className={styles.featuredImgImg} src={postImage} alt="office aura image" width={300} height={300}/>}
          </div>
          <div className={styles.featuredInfo}>
           <span>Published on: {formatted}Hrs </span>
           <h2>{post.title}</h2>
          </div>
          </div>
          </Link>
         
        )
      })}
    

    </div>

  </div>
  <BlogCTA />
  <Footer />

  </>
    
  )
}

export default Blog