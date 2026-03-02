'use client'

import { useEffect, useState, useRef } from 'react'
import styles from './search.module.css';
import { MdOutlineSearch } from "react-icons/md";
import Link from 'next/link';

type Product = {
  title: string
  url: string
}


const SearchInput = () => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<Product[]>([])
  const [bar, setbar] = useState(false);
  const searchIn = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!query.trim() || !query) {
      setResults([])
      return
    }

    const timeout = setTimeout(async () => {

      const res = await fetch(`/api/shop/search?q=${query}`)
      const data = await res.json()
      console.log(data);
      
      setResults([...data?.products, ...data?.categories])
      setbar(true)
    }, 300) // ✅ debounce (wait while typing)

    return () => clearTimeout(timeout)
  }, [query])



  return (
               <div className={styles.shopSearchIcon}>
               <input ref={searchIn} type="text" name="" id="" value={query} placeholder="I'm looking for ...." onChange={(e) => setQuery(e.target.value)}/>
               <MdOutlineSearch style={{color: "black", width: '35px', height: '35px'}}/>
               <div className={styles.searchResults} style={{display: bar ? "block" : "none"}}>
                {results.map((item)=>{
                    return(
                    <Link key={item.title} href={`${item.url}`} onClick={() => {
                       setbar(false);
                       if(searchIn.current){
                        searchIn.current.value = item.title
                       }}}>
                    <div className={styles.searchRes}>
                    <p>{item.title}</p>
                    </div>
                    </Link>
                   
                    )
                })}
                 
               </div>
               </div>
  )
}

export default SearchInput;