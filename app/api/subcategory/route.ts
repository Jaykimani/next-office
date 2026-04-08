import { NextResponse } from 'next/server'
import { getSubcategoryProducts } from '@/lib/getSubcategoryProducts'


export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const category = searchParams.get('category');
  const subcategory = searchParams.get('subcategory');
   console.log(subcategory);
   
 
  const products = await getSubcategoryProducts(category, subcategory);

 
   if (!products) {
    return NextResponse.json({ message: 'Not found' }, { status: 404 });
  }

  return NextResponse.json(products);
  
}