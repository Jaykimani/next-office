import styles from './tag.module.css'
import List from '@/components/list/list'
import { getTagProducts } from '@/lib/getTagProducts'
import { Metadata } from 'next'


type Props = {
  params: Promise<{ tag: string }>
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { tag } = await params
  
  

  const description =
    `Shop ${tag} office decor and accessories at Office Aura Kenya. Premium office accessories and decor.`

  return {
    metadataBase: new URL('https://yourdomain.com'),

    title: `${tag} office decor and accessories in Kenya | Office Aura`,
    description,

    alternates: {
      canonical: `/shop/tag/${tag}`,
    },

    openGraph: {
      title: `${tag} office decor and accessories in Kenya | Office Aura`,
      description,
      url: `/shop/tag/${tag}`,
      siteName: 'Office Aura',
      type: 'website',
    },

    twitter: {
      card: 'summary_large_image',
      title: `${tag} | Office Aura`,
      description,
    },
  }
}

const Tags = async({
  params,
}: {
  params: Promise<{ tag: string }>
}) => {
  
   const { tag } = await params
   const newTag = decodeURIComponent(tag)
   
  const Products = await getTagProducts(newTag);
  console.log(Products);
  
 const allProducts =
  typeof Products === 'string'
    ? []
    : Products;
  
   const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: tag,
    description: tag,
    url: `https://yourdomain.com/shop/tag/${tag}`,
  }

  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://yourdomain.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Shop',
        item: 'https://yourdomain.com/shop',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: tag,
      },
    ],
  }    
  

  return (<>
   <div id={styles.shopOuter}>
    <List productsArr = {allProducts}/>
        <div className={styles.shopInfo}>
            <h4>Why invest in the right office decor?</h4>
            <p>Beyond mere aesthetics, the right office setup significantly impacts your daily work experience. A well-organized and visually appealing office environment can boost morale, reduce stress, and enhance focus, ultimately leading to increased efficiency. From ergonomic accessories that promote comfort, to stylish decor that reflects your personal or company brand, investing in your office space is an investment in your success. Explore our wide range of office solutions including office desk accessories, office lighting solutions, office wall accessories and office greenery solutions today and discover how the perfect blend of functionality and style can create a workspace you'll love. Elevate your office, elevate your work. Find the ideal office decor and office accessories to optimize your workspace and achieve peak performance.</p>
        </div>
        </div>
        <div className={styles.quote}>
         <h1>TRANSFORM YOUR WORKSPACE</h1>
        </div>
  </>
  
  )
}

export default Tags;