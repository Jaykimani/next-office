import styles from './subcategory.module.css'
import List from '@/components/list/list'
import { getSubcategoryProducts } from '@/lib/getSubcategoryProducts';
import { getCategoryType } from '@/lib/getCategoryType';
import { Metadata } from 'next'


type Props = {
  params: Promise<{ category: string, subcateg: string }>
}

function seededShuffle(array: any[], seed: number) {
  let random = () => {
    seed = (seed * 9301 + 49297) % 233280
    return seed / 233280
  }

  const arr = [...array]

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }

  return arr
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { category, subcateg } = await params

  
  let categ = await getCategoryType(subcateg)
  let categInfo = categ?.docs[0];
   

  return {
    metadataBase: new URL('https://officeflow.co.ke'),

    title: `${categInfo?.name} in Kenya | Officeflow Kenya`,
    description: categInfo?.description,

    keywords: categInfo?.keywords,

    alternates: {
      canonical: `/shop/${category}/${categInfo?.slug}`,
    },

    openGraph: {
      title: `${categInfo?.name} | OfficeFlow Kenya`,
      description: categInfo?.description,
      url: `/shop/${category}/${categInfo?.slug}`,
      siteName: 'OfficeFlow',
      type: 'website',
    },

    twitter: {
      card: 'summary_large_image',
      title: `${categInfo?.name} | OfficeFlow Kenya`,
      description: categInfo?.description
    },
  }
}

const Category = async({
  params,
}: {
  params: Promise<{ category: string, subcateg: string }>
}) => {

   const { category, subcateg } = await params
  
  
  
  const Products = await getSubcategoryProducts(category, subcateg);
  let categData = await getCategoryType(subcateg)
  let categInfo = categData?.docs[0];
   

const products =
  typeof Products === 'string'
    ? []
    : Products;

  
  const today = new Date().getDate()

const allProducts = seededShuffle(products, today)  

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph' : [
       {
          '@type': 'CollectionPage',
    name: categInfo?.name,
    description: categInfo?.name,
    url: `https://officeflow.co.ke/shop/${category}/${categInfo?.slug}`,
       },
       {
          '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://officeflow.co.ke',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Shop',
        item: 'https://officeflow.co.ke/shop',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: categInfo?.name,
        item: `https://officeflow.co.ke/shop/${category}/${categInfo?.slug}`,
      },
    ],
       },
        {
          "@type": "FAQPage",
  mainEntity: categInfo?.FAQs?.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
         }
    ]
   
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
    <List productsArr = {allProducts}/>
        <div className={styles.shopInfo}>
            <h1>{categInfo?.name} in Kenya</h1>
            <p>{categInfo?.['page-description']}</p>
        </div>
         <div className={styles.questions}>
          <h1>FAQs about OfficeFlow's {categInfo?.name}</h1>
          {categInfo?.FAQs?.map((quiz)=>{

            return (
              <div key={quiz.id} className={styles.question}>
            <h4>{quiz.question}</h4>
            <p>{quiz.answer}</p>
          </div>
            )
          })}
          
        </div>
        </div>
        <div className={styles.quote}>
         <h1>TRANSFORM YOUR WORKSPACE</h1>
        </div>
  </>
  
  )
}

export default Category