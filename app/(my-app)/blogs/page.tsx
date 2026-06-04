import styles from './blogs.module.css';
import ServiceNav from '@/components/servicenav/servnav';
import Image from 'next/image';
import BlogCTA from '@/components/blogCTA/blogCTA';
import Footer from '@/components/footer/footer';
import { getBlogs } from '@/lib/getBlogs';
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Office Supplies, Workplace & Restock Guides | OfficeFlow Blog",
  description:
    "Explore OfficeFlow's blog for expert insights on office supplies, office restock services, workplace productivity, procurement, pantry management, and business operations in Kenya.",

  keywords: [
    "office supplies Kenya",
    "office supplies blog",
    "office restock services",
    "office procurement Kenya",
    "workplace productivity",
    "office management tips",
    "business office supplies Kenya",
    "office pantry supplies",
    "workplace supplies Kenya",
    "office guides Kenya",
  ],

  alternates: {
    canonical: "https://www.officeflow.co.ke/blogs",
  },

  openGraph: {
    title:
      "Office Supplies, Workplace & Restock Guides | OfficeFlow Blog",
    description:
      "Articles, guides, and insights on office supplies, workplace productivity, office procurement, and restock services in Kenya.",
    url: "https://www.officeflow.co.ke/blogs",
    siteName: "OfficeFlow",
    locale: "en_KE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "OfficeFlow Blog",
    description:
      "Office supplies, workplace productivity, procurement, and office restock insights for businesses in Kenya.",
  },

  robots: {
    index: true,
    follow: true,
  },
};


function getMediaUrl(media: number | any) {
  if (!media || typeof media === "number") return null
  return media.url
}

const page = async() => {

  const {latestBlog, featuredBlogs, allBlogs} = await getBlogs();
  const latestImage = getMediaUrl(latestBlog?.featuredImage);

  const date = new Date(`${latestBlog?.createdAt}`);
  const formatted = date.toLocaleString("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit"
});
  
  const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.officeflow.co.ke/blogs",
      url: "https://www.officeflow.co.ke/blogs",
      name: "OfficeFlow Blog",
      description:
        "Expert articles and guides on office supplies, office restock services, workplace productivity, procurement, and business operations in Kenya.",
      isPartOf: {
        "@id": "https://www.officeflow.co.ke/#website",
      },
      about: {
        "@id": "https://www.officeflow.co.ke/#organization",
      },
    },

    {
      "@type": "WebPage",
      "@id": "https://www.officeflow.co.ke/blogs#webpage",
      url: "https://www.officeflow.co.ke/blogs",
      name: "OfficeFlow Blog",
      description:
        "Office supplies, workplace productivity, procurement, and office restock articles for businesses in Kenya.",
      about: {
        "@id": "https://www.officeflow.co.ke/#organization",
      },
    },

    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.officeflow.co.ke",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://www.officeflow.co.ke/blogs",
        },
      ],
    },
  ],
};
  
  const posts = allBlogs.map((post: any, index: number) => ({
  '@type': 'ListItem',
  position: index + 1,
  url: `https://www.officeflow.co.ke/blogs/${post.category}/${post.slug}`,
  name: post.title,
}));

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: posts,
};

  return (<>
   <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
/>  
  <div className={styles.blogsMain}>
    <ServiceNav />
    <div className={styles.mainContent}>
      <h1>Office<span>Flow</span> Insights!</h1>
        <p>Insights, guides, and practical tips on office supplies, workplace productivity, procurement, and office restock services in Kenya.</p>
    </div>
  </div>
  <div className={styles.blogsInset}>
     <div className={styles.insetTitle}>
       <h4>Latest Post</h4>
       <div className={styles.divider}></div>
     </div>
     <div className={styles.latest}>
     <div className={styles.latestImg}>
       {latestImage && (<Image className={styles.latestImgImg} src={latestImage} alt="office aura image" width={300} height={300}/>)}
     </div>
     <div className={styles.latestInfo}>
      <p className={styles.latestPublished}>Published on: <span>{formatted}Hrs</span></p>
      <div className={styles.latestInfoInfo}>
      <h2>{latestBlog?.title}</h2>
      <p>{latestBlog?.excerpt}</p>
      <Link href={`/blogs/${latestBlog?.category}/${latestBlog?.slug}`} style={{textDecoration: 'none'}}>
      <div className={styles.latestInfoBtn}>Read More...</div>
      </Link>
       
      </div>
     
     </div>
     </div>
     <div className={styles.insetTitle}>
       <h4>Featured Posts</h4>
       <div className={styles.divider}></div>
     </div>
     <div className={styles.featured}>
      {featuredBlogs?.map((post)=>{
        
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
          <div key={post.id} className={styles.featuredPost}>
          <div className={styles.featuredImg}>
           {postImage && <Image className={styles.featuredImgImg} src={postImage} alt="office aura image" width={300} height={300}/>} 
          </div>
          <div className={styles.featuredInfo}>
           <span>Published on: {formatted}Hrs </span>
           <h2>{post.title}</h2>
           <p>{post.excerpt.substring(0, 140)}...</p>
           <Link href={`/blogs/${post.category}/${post.slug}`}>
             <div className={styles.featuredInfoBtn}>Read More...</div>
           </Link>
          </div>
          </div>
          )
      })}
       

     </div>
  </div>
  <BlogCTA />

  <Footer />
  </>
    
  )
}

export default page