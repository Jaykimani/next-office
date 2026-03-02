import { NextRequest, NextResponse } from "next/server";
import { getPayload } from "payload";
import config from "@/payload.config";

export async function GET(req: NextRequest) {
  try {
    const payload = await getPayload({ config });
    const { searchParams } = new URL(req.url);

    const q = searchParams.get("q")?.trim();

    if (!q) {
      return NextResponse.json({
        products: [],
        categories: [],
      });
    }

    // 🔎 1️⃣ Search Products
    const products = await payload.find({
      collection: "products",
      where: {  
           name: { contains: q } ,
      },
      limit: 5,
      depth: 1,
    });
    

    // 🔎 2️⃣ Search Categories
    const categories = await payload.find({
      collection: "categories",
      where: {
         name: { contains: q },
      },
      limit: 5,
    });


    // 🎯 Format results
    const formattedProducts = products.docs.map((p: any) => ({
      title: p.name,
      url: `/shop/${p.id}`,
    }));

    const formattedCategories = categories.docs.map((c: any) => ({
      title: c.name,
      url: `/shop/${c.type}/${c.slug}`,
    }));


    return NextResponse.json({
      products: formattedProducts,
      categories: formattedCategories,
    });

  } catch (error) {
    console.error("Premium Search Error:", error);

    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}