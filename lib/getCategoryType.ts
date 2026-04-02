import {getPayload} from 'payload';
import config from '@payload-config';

export async function getCategoryType(name){
const payload = await getPayload({config});

  try {
    const data = await payload.find({
    collection: 'categories',
    where: {
        slug:  { equals: name }
    } // The slug of your 
    
  });
   let product = data;
   
   return product
  } catch (error) {
    console.error('Failed to get products list:', error)
  }
}