import {getPayload} from 'payload';
import config from '@payload-config';

type ProductCollection =
  | "office-interior-decor"
  | "office-greenery"
  | "office-workspace-accessories"
  | "office-electronics"

const productCollections: ProductCollection[]  = [
  "office-interior-decor",
  "office-greenery",
  "office-workspace-accessories",
  "office-electronics",
]

export async function getTagProducts(tag){
const payload = await getPayload({config});
console.log(tag);

   if (!tag) return []
  try {
     const results = await Promise.all(
    productCollections.map((collection) =>
      payload.find({
        collection,
        where: {
              tags: { contains: tag },
        },
        select:{
      id: true,
      slug: true,
      name: true,
      images: true,
      price: true,
      category: true,
      subcategory: true
      }
      })
    )
  )
     
   let product = results.flatMap((r) => r.docs);
   
   
   return product ?? 'not found';

  } catch (error) {
    console.error('Failed to get products list:', error)
    return 'not found'
  }
}