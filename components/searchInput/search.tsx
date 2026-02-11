'use client'

import { useEffect, useState } from 'react'
import styles from './search.module.css';
import { MdOutlineSearch } from "react-icons/md";

type Product = {
  id: string
  name: string
}


const SearchInput = () => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<Product[]>([])
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query.trim() || !query) {
      setResults([])
      return
    }

    const timeout = setTimeout(async () => {
      setLoading(true)

      const res = await fetch(`/api/shop/search?q=${query}`)
      const data = await res.json()

      setResults(data)
      setLoading(false)
    }, 300) // ✅ debounce (wait while typing)

    return () => clearTimeout(timeout)
  }, [query])



  return (
               <div className={styles.shopSearchIcon}>
               <input type="text" name="" id="" value={query} placeholder="I'm looking for ...." onChange={(e) => setQuery(e.target.value)}/>
               <MdOutlineSearch style={{color: "black", width: '35px', height: '35px'}}/>
               <div className={styles.searchResults}>
                {results.map((item)=>{
                    return(
                   <div key={item.name} className={styles.searchRes}>
                    <p>{item.name}</p>
                    </div>
                    )
                })}
                 
               </div>
               </div>
  )
}

export default SearchInput;