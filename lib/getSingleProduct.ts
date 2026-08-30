import {getPayload} from 'payload';
import config from '@payload-config';

export async function getSingleProduct (category, productId){
const payload = await getPayload({config});

  try {
    const data = await payload.find({
    collection: category,
    depth: 1,
    where: {
        id:  { equals: productId }
    } // The slug of your 
    
  });
   let product = data.docs;
   
   console.log(product[0].images);
   
   return product[0]
  } catch (error) {
    console.error('Failed to get products list:', error)
  }
}