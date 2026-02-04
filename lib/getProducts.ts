import {getPayload} from 'payload';
import config from '@payload-config';

export async function getProductsList (){
const payload = await getPayload({config});

  try {
    const data = await payload.find({
    collection: 'products', // The slug of your
    depth: 1, 
    sort: 'id',
    select:{
      id: true,
      slug: true,
      name: true,
      images: true,
      price: true
    }
  });
   let productsList = data.docs;
   return productsList ?? [];
  } catch (error) {
    console.error('Failed to get products list:', error)
    return []
  }
}