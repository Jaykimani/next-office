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
  const [value, setValue] = useState('')
  const [results, setResults] = useState<Product[]>([])
  const [bar, setbar] = useState(false);
  const searchIn = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!query.trim() || !query) {
      setbar(false);
      setResults([])
      return
    } 
    
   

    const timeout = setTimeout(async () => {

      const res = await fetch(`/api/shop/search?q=${query}`)
      const data = await res.json()
      
      setResults([...data?.products, ...data?.categories])
      setbar(true)
    }, 300) // ✅ debounce (wait while typing)

    return () => clearTimeout(timeout)
  }, [query]);


  const handleKeydown = () => {
    
     if (!query.trim() || !query) {
      setbar(false);
      setResults([])
      return
    } 
  }



  return (
               <div className={styles.shopSearchIcon}>
               <input ref={searchIn} type="text" name="" id="" value={value} placeholder="I'm looking for ...." onChange={(e) => {setQuery(e.target.value);  setValue(e.target.value)}} onKeyDown={handleKeydown}/>
               <MdOutlineSearch style={{color: "black", width: '35px', height: '35px'}}/>
               <div className={styles.searchResults} style={{display: bar ? "block" : "none"}}>
                {results.map((item)=>{
                    return(
                    <Link key={item.title} href={`${item.url}`} onClick={() => {
                       setbar(false);
                       setValue(item.title);
                    }} style={{textDecoration: 'none', color: 'white'}}>
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