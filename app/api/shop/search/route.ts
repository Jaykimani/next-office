import { NextResponse } from 'next/server'
import { getPayloadClient } from '@/payloadClient'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)

  const query = searchParams.get('q')

  if (!query) {
    return NextResponse.json([])
  }

  const payload = await getPayloadClient()

  const results = await payload.find({
    collection: 'products',
    where: {
      name: {
        like: query,
      },
    },
    limit: 10,
  })

  return NextResponse.json(results.docs)
}
