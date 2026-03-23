import styles from './blogs.module.css';
import Navbar from '@/components/navbar/navbar';
import Image from 'next/image';
import BlogCTA from '@/components/blogCTA/blogCTA';
import Footer from '@/components/footer/footer';
import { getBlogs } from '@/lib/getBlogs';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Office Aura Insights | Office Décor, Workspace Ideas & Productivity Tips in Kenya',
  
  description:
    'Explore office décor ideas, desk setup inspiration, productivity tips and buying guides in Kenya. Upgrade your workspace with Office Aura Insights.',

  keywords: [
    'office décor Kenya',
    'desk setup ideas Kenya',
    'workspace inspiration Nairobi',
    'office blog Kenya',
    'productivity tips Kenya',
    'home office setup Kenya',
    'office accessories Kenya',
  ],

  openGraph: {
    title: 'Office Aura Insights | Workspace Ideas & Office Décor Kenya',
    description:
      'Discover desk setup ideas, office décor inspiration and productivity tips for modern workspaces in Kenya.',
    url: 'https://www.officeaura.co.ke/blog',
    siteName: 'Office Aura',
    images: [
      {
        url: 'https://www.officeaura.co.ke/logo.png', // replace with your OG image
        width: 1200,
        height: 630,
        alt: 'Office Aura Blog - Workspace Inspiration',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Office Aura Insights',
    description:
      'Workspace inspiration, office décor ideas and productivity tips in Kenya.',
    images: ['https://www.officeaura.co.ke/og-blog.jpg'],
  },

  alternates: {
    canonical: 'https://www.officeaura.co.ke/blog',
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
  
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Office Aura Insights',
    description:
      'Workspace inspiration, office décor ideas and productivity tips in Kenya.',
    url: 'https://www.officeaura.co.ke/blog',
    publisher: {
      '@type': 'Organization',
      name: 'Office Aura',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.officeaura.co.ke/logo.png', // replace with your logo
      },
    },
  };
  
  const posts = allBlogs.map((post: any, index: number) => ({
  '@type': 'ListItem',
  position: index + 1,
  url: `https://www.officeaura.co.ke/blogS/${post.category}/${post.slug}`,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
/>  
  <div className={styles.blogsMain}>
    <Navbar />
    <div className={styles.mainContent}>
      <h1>Office<span>Aura</span> Insights!</h1>
        <p>Workspace inspiration, productivity tips, and office décor ideas in Kenya.</p>
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