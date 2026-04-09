"use server"
import { getPayloadClient } from '@/payloadClient'

type ProductCollection =
  | "office-interior-decor"
  | "office-greenery"
  | "office-workspace-accessories"
  | "office-electronics";

export async function submitReview(data: {
  product: {
    relationTo: ProductCollection
    value: number
  }
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
