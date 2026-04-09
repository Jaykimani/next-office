"use client";
import styles from './descrev.module.css'
import { useState, useRef } from "react";
import { RichTextRenderer } from '@/components/RichText';
import { submitReview } from '@/lib/createReviews';
import Reviews from '@/components/reviews/reviews';
import { MdStar } from "react-icons/md";
import { MdStarBorder } from "react-icons/md";
import type { Product, Review } from '@/payload-types';
import Link from 'next/link';

interface ProductsProps {
product : Product;
reviews : Review[]
}

type ProductCollection =
  | "office-interior-decor"
  | "office-greenery"
  | "office-workspace-accessories"
  | "office-electronics";

const Descrev = ({product, reviews}: ProductsProps) => {

    const [icon1, setIcon1] = useState(false);
    const [icon2, setIcon2] = useState(false);
    const [icon3, setIcon3] = useState(false);
    const [icon4, setIcon4] = useState(false);
    const [icon5, setIcon5] = useState(false);
    const [rating, setRating] = useState(0);
    const [status, setStatus]= useState('');
    const [mainDesc, setMainDesc] = useState(true);
    const [mainRev, setMainRev] = useState(false);
    const [review, setReview] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const revform = useRef<HTMLFormElement>(null);

      const handleMainDesc = ()=>{
      setMainDesc(true);
      setMainRev(false);
    }
    const handleMainRev = ()=>{
      setMainDesc(false);
      setMainRev(true);
    }

    const handleReview = ()=>{
      setShowForm(true);
      setReview(true);
      
    }

    const handleIcon1 = ()=>{
      setRating(1)
      setIcon1(true);
      setIcon2(false);
      setIcon3(false);
      setIcon4(false);
      setIcon5(false);
    }
    const handleIcon2 = ()=>{
      setRating(2)
      setIcon1(true);
      setIcon2(true);
      setIcon3(false);
      setIcon4(false);
      setIcon5(false);
    }
    const handleIcon3 = ()=>{
      setRating(3);
      setIcon1(true);
      setIcon2(true);
      setIcon3(true);
      setIcon4(false);
      setIcon5(false);
    } 
    const handleIcon4 = ()=>{
      setRating(4);
      setIcon1(true);
      setIcon2(true);
      setIcon3(true);
      setIcon4(true);
      setIcon5(false);
    } 
    const handleIcon5 = ()=>{
      setRating(5);
      setIcon1(true);
      setIcon2(true);
      setIcon3(true);
      setIcon4(true);
      setIcon5(true);
    }
    const handleNoIcon = ()=>{
      setIcon1(false);
      setIcon2(false);
      setIcon3(false);
      setIcon4(false);
      setIcon5(false);
    }



   

    const handleReviewSubmit = async (e) => {
       e.preventDefault();
      
          const formData = new FormData(e.currentTarget)
          if (!product?.category) throw new Error("No product selected")

          const data = {
            title: formData.get("full-name") as string,
            product: {
            relationTo: product?.category as ProductCollection,
            value: product?.id,
            },
            rating: rating,
            authorName: formData.get("full-name") as string,
            authorEmail: formData.get("email-phone") as string,
            reviewText: formData.get("review-content") as string
          }
      
          const result = await submitReview(data)

          if (result.success) {
            setStatus("Message delivered")
            revform.current?.reset();
            handleNoIcon();
            setTimeout(() => {
              setStatus('')
            }, 2000);
          } else {
            setStatus("Something went wrong, please try again.")
          }
    }
  return (
    <>
    <div className={styles.descriptionReview}>
          <div className={styles.descrevInset}>
          <div className={mainDesc ? `${styles.descrev} ${styles.descrevActive}` : `${styles.descrev}`} onClick={handleMainDesc}>
            <p>DESCRIPTION</p>
          </div>
          <div className={mainRev ? `${styles.descrev} ${styles.descrevActive}` : `${styles.descrev}`} onClick={handleMainRev}>
            <p>REVIEWS</p>
          </div>
          </div>
          <div className={styles.descContent} style={{display: mainDesc ? "block" : "none"}}>
           <h4>Product Description</h4>
           <div className={styles.prodDesc}>
           <RichTextRenderer content={product?.description.productInformation} />
           </div>
           {product?.description.dimensions && <h4>Dimensions</h4>}
           <p>{product?.description.dimensions}</p>
           {product?.description.structuralMaterial && <h4>Structural Frame</h4>}
           <p>{product?.description.structuralMaterial}</p>
           {product?.description.color && <h4>Color</h4>}
           <p>{product?.description.color}</p>
           {product?.description.careInstructions && <h4>Care Instructions</h4>}
           <p>{product?.description.careInstructions}</p>
           <h4>Return policy</h4>
           <Link href={'/return-refund'}>
           <p>Visit our Return policy page</p>
           </Link>
          </div>
          <div className={styles.reviewContent} style={{display: mainRev ? "block" : "none"}}> 
            <h4>Customer Reviews</h4>
            <Reviews reviews={reviews}/>
            <div className={styles.revBtns}>
             <div onClick={handleReview} style={{background: review ? "rgb(44, 44, 44)" : "transparent"}}>
             <p>Write a Review</p>
             </div>
            </div>
              <form ref={revform} onSubmit={handleReviewSubmit} className={styles.revForm} style={{display : showForm ? "block" : "none"}}>
              
              <input type="text" name="full-name" id="" placeholder='Full Name' />
              <input type="text" name="email-phone" id="" placeholder='Email/Phone number'/>
              <div className={styles.formRatings}>
                <p>Rating</p>
                <div className={styles.formRat}>
                <div onClick={handleIcon1}>{icon1 ? <MdStar className={styles.starIcon} style={{width: '30px', height: '30px'}}/> : <MdStarBorder className={styles.starIcon} style={{width: '30px', height: '30px'}}/>}</div>
                <div onClick={handleIcon2}>{icon2 ? <MdStar className={styles.starIcon} style={{width: '30px', height: '30px'}}/> : <MdStarBorder className={styles.starIcon} style={{width: '30px', height: '30px'}}/>}</div>
                <div onClick={handleIcon3}>{icon3 ? <MdStar className={styles.starIcon} style={{width: '30px', height: '30px'}}/> : <MdStarBorder className={styles.starIcon} style={{width: '30px', height: '30px'}}/>}</div>
                <div onClick={handleIcon4}>{icon4 ? <MdStar className={styles.starIcon} style={{width: '30px', height: '30px'}}/> : <MdStarBorder className={styles.starIcon} style={{width: '30px', height: '30px'}}/>}</div>
                <div onClick={handleIcon5}>{icon5 ? <MdStar className={styles.starIcon} style={{width: '30px', height: '30px'}}/> : <MdStarBorder className={styles.starIcon} style={{width: '30px', height: '30px'}}/>}</div>
                </div>
              </div>
              <textarea name="review-content" id="" cols={30} rows={7} placeholder= "Write a Review" ></textarea>
              {status !== '' ? <h4 style={{padding: '20px', color: 'black', backgroundColor: '#ffe100'}}>{status}</h4> : <button type="submit">Submit</button>}
            </form>
          </div>
         </div>
    </>
  )
}

export default Descrev