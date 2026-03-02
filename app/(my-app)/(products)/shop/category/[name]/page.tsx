import styles from './category.module.css'
import List from '@/components/list/list'
import { getCategoryProducts } from '@/lib/getCategoryProducts';
import { getCategoryType } from '@/lib/getCategoryType';
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
  

  return {
    metadataBase: new URL('https://yourdomain.com'),

    title: `${categInfo?.name} in Kenya | Office Aura`,
    description: categInfo?.description,

    alternates: {
      canonical: `/shop/category/${categInfo?.slug}`,
    },

    openGraph: {
      title: `${categInfo?.name} | Office Aura`,
      description: categInfo?.description,
      url: `/shop/category/${categInfo?.slug}`,
      siteName: 'Office Aura',
      type: 'website',
    },

    twitter: {
      card: 'summary_large_image',
      title: `${categInfo?.name} | Office Aura`,
      description: categInfo?.description
    },
  }
}


const Category = async({
  params,
}: {
  params: Promise<{ name: string }>
}) => {

   const { name } = await params
  

  const Products = await getCategoryProducts(name);
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
    url: `https://yourdomain.com/shop/category/${categInfo?.slug}`,
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
    {/* CollectionPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbData),
        }}
        />
      <List productsArr = {allProducts}/>
        <div className={styles.shopInfo}>
            <h4>Why invest in the right {categInfo?.name}?</h4>
            <p>{categInfo?.['page-description']}</p>
        </div>
        </div>
        <div className={styles.quote}>
         <h1>TRANSFORM YOUR WORKSPACE</h1>
        </div>
  </>
  
  )
}

export default Category