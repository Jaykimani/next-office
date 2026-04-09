import { NextRequest, NextResponse } from "next/server"
import { getPayload } from "payload"
import config from "@payload-config"
import { Categories, shopCategory } from "@/categories"

const payload = await getPayload({ config })

type ProductCollection =
  | "office-interior-decor"
  | "office-greenery"
  | "office-workspace-accessories"
  | "office-electronics"

const productCollections: ProductCollection[]  = [
  "office-interior-decor",
  "office-greenery",
  "office-workspace-accessories",
  "office-electronics",
]

export async function GET(req: NextRequest) {

  try {

     const { searchParams } = new URL(req.url)
  const query = searchParams.get("q")

  if (!query || query.length <= 2) {
    return NextResponse.json({
      products: [],
      categories: [],
      subcategories: [],
      tags: [],
    })
  }

 
  const results = await Promise.all(
    productCollections.map((collection) =>
      payload.find({
        collection,
        limit: 5,
        where: {
          or: [
            {
              name: {
                like: query,
              },
            },
            {
              slug: {
                like: query,
              },
            },
            {
              tags: { like: query },
            },
          ],
        },
      })
    )
  )

  const searchRes = results.flatMap((r) => r.docs);
  const rankedProducts = searchRes.map((product: any) => {
    let score = 0

    // Title match
    if (product.title?.toLowerCase().includes(query)) {
      score += 100
    }

    // Subcategory match
    if (product.subcategory?.toLowerCase().includes(query)) {
      score += 70
    }

    // Tag match
    if (product.tags?.some((t: string) => t.toLowerCase().includes(query))) {
      score += 50
    }

    // Category match
    if (product.category?.toLowerCase().includes(query)) {
      score += 30
    }

    return { ...product, score }
  })

  rankedProducts.sort((a, b) => b.score - a.score)
  const products = rankedProducts.map((prod)=>{
    return {
      id: prod.id,
      category: prod.category,
      name: prod.name,
      slug: prod.slug,
      subcategory: prod.subcategory
    }
  })
  

  const categories = shopCategory.filter((c) =>
    c.name.toLowerCase().includes(query.toLowerCase())
  )

const subcategories = Categories.flatMap(cat => {
  // find all links that match the query
  const matchedLinks = cat.links.filter(link =>
    link.id.toLowerCase().includes(query.toLowerCase()) ||
    link.name.toLowerCase().includes(query.toLowerCase())
  )

  // map each matched link to the desired object
  return matchedLinks.map(link => ({
    categoryName: cat.title.name,  // parent category slug
    linkId: link.id,
    linkName: link.name
  }))
})

const tagsArr = [
  ...new Set(searchRes.flatMap((p: any) => p.tags || []))
]
const filterTags = tagsArr.filter((c) =>
    c.toLowerCase().includes(query.toLowerCase())
  )
console.log(filterTags);

  
  return NextResponse.json({
    products,
    categories,
    subcategories,
    tags: filterTags
  })
    
  } catch (error) {
    console.error("SEARCH API ERROR:", error)

    return NextResponse.json(
      { error: "Search failed" },
      { status: 500 }
    )
  }
 
}