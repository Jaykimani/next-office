// app/api/shop/[productId]/route.ts
import { NextResponse } from 'next/server';
import { getSingleProduct } from '@/lib/getSingleProduct';

export async function GET(_req: Request, { params }: { params: Promise<{ productId: number }> }) {
  const { productId } = await params; // ✅ unwrap the Promise


  const product = await getSingleProduct(productId);

  if (!product) {
    return NextResponse.json({ message: 'Not found' }, { status: 404 });
  }

  return NextResponse.json(product);
}
