import {getPayload} from 'payload';
import config from '@payload-config';

export async function getSingleProduct (productId){
const payload = await getPayload({config});

  try {
    const data = await payload.find({
    collection: 'products',
    where: {
        id:  { equals: productId }
    } // The slug of your 
    
  });
   let product = data.docs;
   return product ?? '';
  } catch (error) {
    console.error('Failed to get products list:', error)
    return ''
  }
}