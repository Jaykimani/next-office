import styles from './shop.module.css'
import List from '@/components/list/list'
import Pagination from '@/components/pagination/pagination';
import { getCategoryType } from '@/lib/getCategoryType';
import { getProductsList } from '@/lib/getProducts';
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  
  let data = await getCategoryType("office-supplies-kenya");
  let categInfo = data?.docs[0];

  const url = "https://officeflow.co.ke/shop";

  return {
    title: `${categInfo?.name} | Stationery, Printer Supplies & Office Essentials | OfficeFlow Kenya`,
    description: categInfo?.description,
    keywords: categInfo?.keywords,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: `${categInfo?.name} | Stationery, Printer Supplies & Office Essentials | OfficeFlow Kenya`,
      description: categInfo?.description,
      url,
      siteName: "OfficeFlow",
      type: "website",
      locale: "en_KE",
      images: [
        {
          url: "/restock5.jpg",
          width: 1200,
          height: 630,
          alt: "Office Supplies in Kenya - OfficeFlow",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${categInfo?.name} | Stationery, Printer Supplies & Office Essentials | OfficeFlow Kenya`,
      description: categInfo?.description,
      images: ["/restock5.jpg"],
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}
type Props = {
  searchParams: Promise<{
    page?: string
  }>
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

const Shop = async({ searchParams }: Props) => {
  
   let categData = await getCategoryType("office-supplies-kenya")
   let actualCategData = categData?.docs[0];
   const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://officeflow.co.ke" },
    { "@type": "ListItem", "position": 2, "name": "Shop", "item": "https://officeflow.co.ke/shop" }
  ]
    },
    {
      "@type": "WebPage",
      "@id": "https://officeflow.co.ke/shop",
      name: "Shop",
      url: "https://officeflow.co.ke/shop",
      description: actualCategData?.description
    },
  ]
};

  const params = await searchParams

  const page = Number(params.page) || 1
 
  const allProducts = await getProductsList(page, 30);
 

  let categInfo = categData?.docs[0];
  const resArr = allProducts?.docs;

  const today = new Date().getDate()

const productsArr = resArr && seededShuffle(resArr, today)
  

  return (<>
   <div id={styles.shopOuter}>
   {productsArr && <List productsArr = {productsArr}/>} 
    {allProducts?.page && <Pagination
        currentPage={allProducts.page}
        totalPages={allProducts.totalPages}
      />}
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

export default Shop