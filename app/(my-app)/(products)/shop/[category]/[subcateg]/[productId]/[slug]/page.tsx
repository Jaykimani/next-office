
import styles from './product.module.css';
import { getSingleProduct } from '@/lib/getSingleProduct';
import { getProductReviews } from '@/lib/getProductReviews';
import { MdStar } from "react-icons/md";
import { MdStarBorder } from "react-icons/md";
import Whatsapp from '@/components/whatsappCTA/whatsapp';
import SingleImage from '@/components/singleImage/singleImage';
import Similar from '@/components/similarproducts/similar';
import AddCart from '@/components/addCart/addCart';
import Descrev from '@/components/descrev/descrev';
import { Media } from '@/payload-types';
import { Metadata } from 'next'


type Props = {
  params: Promise<{ category: string
                    subcateg: string
                    productId: string
                    productSlug: string
                 }>
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const {category, productId } = await params


  const product = await getSingleProduct(category, productId)
  
  
  if (!product) {
    return {
      title: 'Product Not Found',
    }
  }

  // Safely extract image
  const firstImage =
    product.images?.[0] && typeof product.images[0] !== 'number'
      ? product.images[0].url
      : undefined

  return {
    title: `${product.name} | Office Aura`,
    description:
      `Buy ${product.name} at the best price in Kenya.`,

    openGraph: {
      title: product.name,
      description:
        `Buy ${product.name} at the best price in Kenya.`,
      images: firstImage ? [firstImage] : [],
      type: 'website',
    },

    twitter: {
      card: 'summary_large_image',
      title: product.name,
      description:
        `Buy ${product.name} at the best price.`,
      images: firstImage ? [firstImage] : [],
    },
     robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1
    }
  },
  }
}

function mediaIsObject(media: number | Media) : media is Media {
  return typeof media !== 'number'
  
}


async function Info({params} : Props) {
  
   const {category, productId, productSlug} = await params;
   
    const Product = await getSingleProduct(category, productId);
   
    
    const Reviews = await getProductReviews(category, productId)
    const imagesArr: string[] =
    Product?.images
    ?.map((img) =>
      typeof img === "object" ? img.url : null
    )
    .filter((url): url is string => Boolean(url)) ?? [];
    
    
    const theReviews = Reviews ?? []
  
     

    let sum = theReviews.reduce((acc, item)=> acc + item.rating, 0);
    let overall = theReviews.length && Math.ceil(sum / theReviews.length);
    let overallRatings = {ratings: [overall], people: theReviews.length}

    const firstImage =
    Product?.images?.[0] && typeof Product.images[0] !== 'number'
      ? Product.images[0].url
      : undefined

    const stock = Product?.stock ?? 0;
   
   const structuredData = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: Product?.name,
    image: firstImage ? [firstImage] : [],
    description: Product?.description,
    sku: Product?.id,
    brand: {
      '@type': 'Brand',
      name: 'Office Aura',
    },
    offers: {
      '@type': 'Offer',
      url: `https://yourdomain.com/shop/${Product?.category}/${Product?.id}/${Product?.slug}`,
      priceCurrency: 'KES',
      price: Product?.price,
      availability:
         stock > 0
          ? 'https://schema.org/InStock'
          : 'https://schema.org/OutOfStock',
    },
    "aggregateRating": {
     "@type": "AggregateRating",
     "ratingValue": "4.6",
     "reviewCount": "10"
     }
  }

   




    return (
        <>
        <div id={styles.info}>
        <div className={styles.infoInset}>
        <div className={styles.imgInfo}>
         <SingleImage imagesArr = {imagesArr}/>
          <div className={styles.infoInfo}>
          <p className={styles.infoLinks}>Home / Shop / {Product?.category} / </p>
          <p className={styles.infoTitle}>{Product?.name}</p>
           {overallRatings.ratings.map((rate)=>{
            const list: React.ReactNode[] = [];

               for (let i = 0; i < 5; i++) {
                if(i < rate){
                list.push(<span key={i}><MdStar className={styles.starIcon} style={{width: '28px', height: '28px'}}/></span>);
                }else{
                list.push(<span key={i}><MdStarBorder className={styles.starIcon} style={{width: '28px', height: '28px'}}/></span>);
                }
               }

               return(
                <div key={rate} className={styles.infoReviews}>
               {list}
               <p>{overallRatings.people} Reviews</p>
               </div>
               )
          })}
         
          <p className={styles.infoCost}>KSH {Product?.price.toLocaleString('en-US')}.00/=</p>
          {Product && <AddCart product = {Product} />}
          {Product && <Whatsapp product={Product} phoneNumber='254704610605'/> }
          <div className={styles.infoDelivery}>
           <h4>Delivery Information</h4>
           <p>{Product?.delivery.deliveryTime}</p>
          </div>
          </div>
         </div>
         {Product && Reviews && <Descrev product={Product} reviews={Reviews}/>}
         <div className={styles.quote}>
         <h1>TRANSFORM YOUR WORKSPACE</h1>
        </div>
         {Product?.subcategory && Product?.category && <Similar category = {Product?.category} subcategory = {Product?.subcategory} id = {Product?.id}/>}
        </div>

         <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
        </div>
    
        </>
    )
}

export default Info;