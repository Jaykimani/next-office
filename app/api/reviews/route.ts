import { NextResponse } from 'next/server'
import { getPayloadClient } from '@/payloadClient'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const productId = searchParams.get('productId')

  const payload = await getPayloadClient()

  const reviews = await payload.find({
    collection: 'reviews',
    where: {
      product: {
        equals: productId,
      },
      approved: {
        equals: true,
      },
    },
  })

  return NextResponse.json(reviews.docs)
}