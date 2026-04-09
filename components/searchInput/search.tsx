'use client'

import { useEffect, useState, useRef } from 'react'
import styles from './search.module.css';
import { MdOutlineSearch } from "react-icons/md";
import { MdClose } from "react-icons/md";
import Link from 'next/link';

type Product = {
  title: string
  url: string
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
}

function prettyTag(tag: string) {
  return tag
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase())
}

const SearchInput = () => {
  const [query, setQuery] = useState('')
  const [value, setValue] = useState('')
  const [results, setResults] = useState<any>(null)
  const [bar, setbar] = useState(false);
  const searchIn = useRef<HTMLInputElement>(null);

 useEffect(() => {
  const delay = setTimeout(async () => {
     if (!query || query.trim().length < 2) {
      setbar(false);
      setResults({
        products: [],
        categories: [],
        subcategories: [],
        tags: [],
      })
      return
    }

    try {
      const res = await fetch(`/api/shop/search?q=${query}`)

      if (!res.ok) return

      const data = await res.json()

      setResults(data)
      setbar(true);
    } catch (error) {
      console.error("Search failed:", error)
    }
  }, 300)

  return () => clearTimeout(delay)
}, [query])


const handleSearchClose = ()=>{
  setValue("");
  setbar(false);
}



  return (
               <div className={styles.shopSearchIcon}>
               <input ref={searchIn} type="text" name="" id="" value={value} placeholder="I'm looking for ...." onChange={(e) => {setQuery(e.target.value);  setValue(e.target.value)}}/>
               {bar ? <MdClose style={{color: "black", width: '35px', height: '35px'}} onClick={handleSearchClose}/> : <MdOutlineSearch style={{color: "black", width: '35px', height: '35px'}}/> }
               <div className={styles.searchResults} style={{display: bar ? "block" : "none"}}>
                {results?.products?.length > 0 && (
                 <div className={styles.resultDiv}>
                  <h4>Products</h4>
                  {results?.products?.map((prod: any)=>{
                    return (
                    <Link key={prod.name} href={`/shop/${prod.category}/${prod.subcategory}/${prod.id}/${prod.slug}`} onClick={()=>{setbar(false); setValue('')}}>
                     <p className={styles.searchRes}>{prod.name}</p>
                    </Link>
                    
                    )
                  })}
                  
                </div>
                )}
                
               {results?.subcategories?.length > 0 && (
                 <div className={styles.resultDiv}>
                  <h4>Subcategories</h4>
                  {results.subcategories.map((sub)=>{
                    return (
                     <Link key={sub.linkId} href={`/shop/${sub.categoryName}/${sub.linkName}`} onClick={()=>{setbar(false); setValue('')}}>
                     <p className={styles.searchRes}>{sub.linkId}</p>
                     </Link> 
                     
                    )
                  })}
                  
                </div>
                )}
                {results?.tags?.length > 0 && (
                 <div className={styles.resultDiv}>
                  <h4>Tags</h4>
                  {results.tags.map((tag)=>{
                    
                    return (
                    <Link key={tag} href={`/shop/tag/${slugify(tag)}`} onClick={()=>{setbar(false); setValue('')}}>
                    <p className={styles.searchRes}>{prettyTag(tag)}</p>
                    </Link>
                     
                    )
                  })}
                  
                </div>
                )}
                {results?.categories?.length > 0 && (
                 <div className={styles.resultDiv}>
                  <h4>Categories</h4>
                  {results.categories.map((categ)=>{
                    return (
                      <Link key={categ.name} href={`/shop/${categ.url}`} onClick={()=>{setbar(false); setValue('')}}>
                      <p className={styles.searchRes}>{categ.name}</p>
                      </Link>
                     
                    )
                  })}
                  
                </div>
                )}
                 
               </div>
               </div>
  )
}

export default SearchInput;