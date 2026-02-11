"use client"
import { log } from 'console';
import styles from './reviews.module.css'
import { useState, useEffect } from 'react';
import { MdStar } from "react-icons/md";
import { MdStarHalf } from "react-icons/md";
import { MdStarBorder } from "react-icons/md";


type reviewProps = {
    productId : number
}

const Reviews = ({productId}: reviewProps) => {

 const [reviews, setReviews] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchReviews() {
      const res = await fetch(`/api/reviews?productId=${productId}`)
      const data = await res.json()
      console.log(data);
      
      setReviews(data)
      setLoading(false)
    }

    fetchReviews()
  }, [productId])

  if (loading) return <p>Loading reviews...</p>

 

  return (
    <div className={styles.reviewContentInset}>
            <div className={styles.revRatings}>
              <div className={styles.ratings}>
                <div>
                <MdStar className={styles.starIcon} />
               <MdStar className={styles.starIcon} />
               <MdStar className={styles.starIcon} />
               <MdStar className={styles.starIcon} />
               <MdStar className={styles.starIcon} />
                </div>
               <p>2 Reviews</p>
              </div>
              <div className={styles.ratings}>
                <div>
                <MdStar className={styles.starIcon} />
                <MdStar className={styles.starIcon} />
               <MdStar className={styles.starIcon} />
               <MdStar className={styles.starIcon} />
               <MdStarBorder className={styles.starIcon} />
                </div>
               <p>1 Reviews</p>
              </div>
              <div className={styles.ratings}>
                <div>
                <MdStar className={styles.starIcon} />
               <MdStar className={styles.starIcon} />
               <MdStar className={styles.starIcon} />
               <MdStarBorder className={styles.starIcon} />
               <MdStarBorder className={styles.starIcon} />
                </div>
               <p>0 Reviews</p>
              </div>
              <div className={styles.ratings}>
                <div>
                <MdStar className={styles.starIcon} />
               <MdStar className={styles.starIcon} />
               <MdStarBorder className={styles.starIcon} />
               <MdStarBorder className={styles.starIcon} />
               <MdStarBorder className={styles.starIcon} />
                </div>
               <p>0 Reviews</p>
              </div>
              <div className={styles.ratings}>
                <div>
                <MdStar className={styles.starIcon} />
               <MdStarBorder className={styles.starIcon} />
               <MdStarBorder className={styles.starIcon} />
               <MdStarBorder className={styles.starIcon} />
               <MdStarBorder className={styles.starIcon} />
                </div> 
               <p>0 Reviews</p>
              </div>
              <p className={styles.based}>Based on 3 reviews</p>
            </div>
            <div className={styles.revComments}>
              {reviews.map((review)=>{
                return(
             <div key={review.authorName} className={styles.comment}>
               <h5>{review.authorName}</h5>
               <div className={styles.commentReviews}>
                <span><MdStar className={styles.starIcon} fontSize='medium'/></span>
                <span><MdStar className={styles.starIcon} fontSize='medium'/></span>
                <span><MdStar className={styles.starIcon} fontSize='medium'/></span>
                <span><MdStarHalf className={styles.starIcon} fontSize='medium'/></span>
                <span><MdStarBorder className={styles.starIcon} fontSize='medium'/></span>
              </div>
              <p>1/1/2025</p>
              <p className={styles.writing}>{review.reviewText}</p>
              </div>
                )
              })}
              
            </div>
            </div>
  )
}

export default Reviews