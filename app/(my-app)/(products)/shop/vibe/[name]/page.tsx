import styles from './vibe.module.css'
import List from '@/components/list/list'
import { getVibeProducts } from '@/lib/getVibeProducts'
import { getCategoryType } from '@/lib/getCategoryType'
import { Metadata } from 'next'


type Props = {
  params: Promise<{ name: string }>
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { name } = await params
  
  let category = await getCategoryType(name)
  let categInfo = category?.docs[0];
  

  const description =
    `Shop ${categInfo?.name} office decor and accessories at Office Aura Kenya. Premium office accessories and decor.`

  return {
    metadataBase: new URL('https://yourdomain.com'),

    title: `${categInfo?.name} office decor and accessories in Kenya | Office Aura`,
    description,

    alternates: {
      canonical: `/shop/vibe/${categInfo?.slug}`,
    },

    openGraph: {
      title: `${categInfo?.name} office decor and accessories in Kenya | Office Aura`,
      description,
      url: `/shop/vibe/${categInfo?.slug}`,
      siteName: 'Office Aura',
      type: 'website',
    },

    twitter: {
      card: 'summary_large_image',
      title: `${categInfo?.name} | Office Aura`,
      description,
    },
  }
}

const Vibe = async({
  params,
}: {
  params: Promise<{ name: string }>
}) => {

   const { name } = await params
  
  
   
  const Products = await getVibeProducts(name);
  let category = await getCategoryType(name)
  let categInfo = category?.docs[0];
  
 const allProducts =
  typeof Products === 'string'
    ? []
    : Products;
  
   const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: categInfo?.name,
    description: categInfo?.name,
    url: `https://yourdomain.com/shop/vibe/${categInfo?.slug}`,
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
        name: categInfo?.name,
      },
    ],
  }    
  

  return (<>
   <div id={styles.shopOuter}>
    <List productsArr = {allProducts}/>
        <div className={styles.shopInfo}>
            <h4>Why choose {categInfo?.name}?</h4>
            <p>{categInfo?.['page-description']}</p>
        </div>
        </div>
        <div className={styles.quote}>
         <h1>TRANSFORM YOUR WORKSPACE</h1>
        </div>
  </>
  
  )
}

export default Vibe;