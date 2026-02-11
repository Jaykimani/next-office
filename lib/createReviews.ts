"use server"
import { getPayloadClient } from '@/payloadClient'

export async function submitReview(data: {
  product: number
  title: string
  rating: number
  authorName: string
  authorEmail: string
  reviewText: string
}) {

  const payload = await getPayloadClient()

  try {
    let newReview = payload.create({
    collection: 'reviews',
    data
  });

   return {success: true}
  } catch (error) {
     console.log(error);
     return {success: false}
  }
  
}
