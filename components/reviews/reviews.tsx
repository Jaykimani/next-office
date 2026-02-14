"use client"
import styles from './reviews.module.css'
import { useState, useEffect } from 'react';
import { MdStar } from "react-icons/md";
import { MdStarHalf } from "react-icons/md";
import { MdStarBorder } from "react-icons/md";

type Review = {
  product: number
  title: string
  rating: number
  authorName: string
  authorEmail: string
  reviewText: string
  createdAt: string
}

type reviewProps = {
    reviews : Review[]
}

const Reviews = ({ reviews }: reviewProps) => {

  const [loading, setLoading] = useState(true)
  const [five, setFive] = useState(0);
   const [four, setFour] = useState(0);
    const [three, setThree] = useState(0);
     const [two, setTwo] = useState(0);
      const [one, setOne] = useState(0);

  
  useEffect(()=>{
   
    let fiveStar = reviews?.filter(review => review.rating == 5);
    let fourStar = reviews?.filter(review => review.rating == 4);
     let threeStar = reviews?.filter(review => review.rating == 3);
      let twoStar = reviews?.filter(review => review.rating == 2);
       let oneStar = reviews?.filter(review => review.rating == 1);
      
       
       
       setFive(fiveStar.length);
       setFour(fourStar.length);
       setThree(threeStar.length);
       setTwo(twoStar.length);
       setOne(oneStar.length);


  }, [reviews])

 


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
                <p>{five} Reviews</p>
              </div>
              <div className={styles.ratings}>
                <div>
                <MdStar className={styles.starIcon} />
                <MdStar className={styles.starIcon} />
               <MdStar className={styles.starIcon} />
               <MdStar className={styles.starIcon} />
               <MdStarBorder className={styles.starIcon} />
                </div>
                <p>{four} Reviews</p>
              </div>
              <div className={styles.ratings}>
                <div>
                <MdStar className={styles.starIcon} />
               <MdStar className={styles.starIcon} />
               <MdStar className={styles.starIcon} />
               <MdStarBorder className={styles.starIcon} />
               <MdStarBorder className={styles.starIcon} />
                </div>
                  <p>{three} Reviews</p>
              </div>
              <div className={styles.ratings}>
                <div>
                <MdStar className={styles.starIcon} />
               <MdStar className={styles.starIcon} />
               <MdStarBorder className={styles.starIcon} />
               <MdStarBorder className={styles.starIcon} />
               <MdStarBorder className={styles.starIcon} />
                </div>
                  <p>{two} Reviews</p>
              </div>
              <div className={styles.ratings}>
                <div>
               <MdStar className={styles.starIcon} />
               <MdStarBorder className={styles.starIcon} />
               <MdStarBorder className={styles.starIcon} />
               <MdStarBorder className={styles.starIcon} />
               <MdStarBorder className={styles.starIcon} />
                </div> 
                  <p>{one} Reviews</p>
              </div>
              <p className={styles.based}>Based on {reviews.length} reviews</p>
            </div>
            <div className={styles.revComments}>
              {reviews.map((review)=>{
                const list: React.ReactNode[] = [];

               for (let i = 0; i < 5; i++) {
                if(i < review.rating){
                list.push(<span key={i}><MdStar className={styles.starIcon} style={{width: '20px', height: '20px'}}/></span>);
                }else{
                list.push(<span key={i}><MdStarBorder className={styles.starIcon} style={{width: '20px', height: '20px'}}/></span>);
                }
               }
                return(
             <div key={review.authorName} className={styles.comment}>
               <h5>{review.authorName}</h5>
               <div className={styles.commentReviews}>
                {list}
              </div>
              <p style={{fontSize: '17px'}}>{new Date(review.createdAt).toLocaleDateString("en-GB")}</p>
              <p className={styles.writing}>{review.reviewText}</p>
              </div>
                )
              })}
              
            </div>
            </div>
  )
}

export default Reviews