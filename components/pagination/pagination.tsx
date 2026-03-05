'use client'

import styles from './pagination.module.css'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";


type Props = {
  currentPage: number
  totalPages: number
}

export default function Pagination({ currentPage, totalPages }: Props) {

  const [pagesArr, setPagesArr] = useState<number[]>([]);
  const router = useRouter();
 
  
  useEffect(()=>{
    if (totalPages >= 5) {
      setPagesArr([1, 2, 3, 4, 5])
    }else if(totalPages < 5){
      let pagearr: number[] = []
     for (let i = 1; i <= totalPages; i++) {
      pagearr.push(i)
     }
     setPagesArr([...pagearr]);
    }

  }, [totalPages])
  

  const handlePage = (e)=>{
    let pageNum = Number(e.currentTarget.innerHTML);
    // e.currentTarget.style.background = '#ffe100'
    router.push(`/shop?page=${pageNum}`);

    if (totalPages > 5) {
       if (pageNum == pagesArr[4] && pagesArr[4] !== totalPages)  {
     let newArr = pagesArr.slice(1);
     setPagesArr([...newArr, pageNum + 1])
    }else if(pageNum == pagesArr[4] && pagesArr[4] === totalPages){
      return pagesArr
    }else if (pageNum == pagesArr[0] && pagesArr[0] !== 1) {
     pagesArr.pop();
      setPagesArr([pageNum - 1, ...pagesArr])
    }else if (pageNum == pagesArr[0] && pagesArr[0] === 1) {
      setPagesArr([1, 2, 3, 4, 5])
    }
    }
   
    
  }

  const handlePrevPage = ()=>{
    let prevPage = currentPage - 1;

    if (totalPages > 5) {
       if (prevPage == pagesArr[0] && pagesArr[0] !== 1) {
     pagesArr.pop();
      setPagesArr([prevPage - 1, ...pagesArr])
    }else if (prevPage == pagesArr[0] && pagesArr[0] === 1) {
      setPagesArr([1, 2, 3, 4, 5])
    }
    }
   
  }

  const handleNextPage = ()=>{
    let nextPage = currentPage + 1;

     if (nextPage == pagesArr[4] && pagesArr[4] !== totalPages)  {
     let newArr = pagesArr.slice(1);
     setPagesArr([...newArr, nextPage + 1])
    }else if(nextPage == pagesArr[4] && pagesArr[4] === totalPages){
      return pagesArr
    }
  }

  return (
    <div className={styles.pagination}>
      {/* Prev Button */}
      
        <Link
          href={`/shop?page=${currentPage - 1}`}
          style={{opacity: `${currentPage == 1 ? '0' : '1'}`}}
        >
          <div className={styles.prevNextBtn} onClick={handlePrevPage}>
          <MdKeyboardDoubleArrowLeft style={{color:"black", width: '25px', height: '25px'}}/>
          </div>
        </Link>
      

      {/* Page Indicator */}
     {pagesArr.map((page) => {

  return (
    // <Link
    //   key={page}
    //   href={`/shop?page=${page}`}
    //   style={{textDecoration: 'none'}}
    // >
      <div key={page} className={styles.pageDiv} style={{color : `${
        page === currentPage ? 'black' : 'white' 
      }`, backgroundColor: `${
        page === currentPage ? '#ffe100' : "black"
      }`}} onClick={handlePage}>
          {page}
      </div>
     
    // </Link>
  )
})}
     {totalPages > 5 && (
      <div className={styles.dots} style={{display: `${currentPage == totalPages ? 'none' : 'grid'}`}}>
        ....
      </div>
     )}

      {/* Next Button */}
        <Link
          href={`/shop?page=${currentPage + 1}`}
          style={{opacity: `${currentPage == totalPages ? '0' : '1'}`}}
        >
         <div className={styles.prevNextBtn} onClick={handleNextPage}>
          <MdKeyboardDoubleArrowRight style={{color:"black", width: '25px', height: '25px'}}/>
          </div>
        </Link>
      
    </div>
  )
}
