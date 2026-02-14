"use client";

import styles from './product.module.css';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { MdStar } from "react-icons/md";
import { MdStarHalf } from "react-icons/md";
import { MdStarBorder } from "react-icons/md";
import Whatsapp from '@/components/whatsappCTA/whatsapp';
import {use} from 'react'
import type { Product } from '@/payload-types';
import { Media } from '@/payload-types';
import { useCartStore } from '@/app/store';
import { RichTextRenderer } from '@/components/RichText';
import { submitReview } from '@/lib/createReviews';
import Reviews from '@/components/reviews/reviews';
import Similar from '@/components/similarproducts/similar';


function magnify(zoom, url) {

  
  
  var img = document.getElementById('main-img')as HTMLCanvasElement;

  
  
  /*create magnifier glass:*/
  var glass = document.getElementById('magnifier')as HTMLCanvasElement;

  if(img && glass){
 /*set background properties for the magnifier glass:*/
  glass.style.backgroundImage = `url(${url})`;
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
  var bw = 3;
  var w = glass.offsetWidth / 2;
  var h = glass.offsetHeight / 2;
  /*execute a function when someone moves the magnifier glass over the image:*/
  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);
  /*and also for touch screens:*/
  glass.addEventListener("touchmove", moveMagnifier);
  img.addEventListener("touchmove", moveMagnifier);
  function moveMagnifier(e) {
    var pos, x, y;
    /*prevent any other actions that may occur when moving over the image*/
    e.preventDefault();
    /*get the cursor's x and y positions:*/
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;
    /*prevent the magnifier glass from being positioned outside the image:*/
    if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
    if (x < w / zoom) {x = w / zoom;}
    if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
    if (y < h / zoom) {y = h / zoom;}
    /*set the position of the magnifier glass:*/
    glass.style.left = (x - w) + "px";
    glass.style.top = (y - h) + "px";
    /*display what the magnifier glass "sees":*/
    glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
  }
  function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    /*get the x and y positions of the image:*/
    a = img.getBoundingClientRect();
    /*calculate the cursor's x and y coordinates, relative to the image:*/
    if ('touches' in e && e.touches.length > 0) {
      x = e.touches[0].clientX - a.left
      y = e.touches[0].clientY - a.top
    } else if ('pageX' in e) {
      // Мишка або трекпад
      x = e.pageX - a.left - window.pageXOffset
      y = e.pageY - a.top - window.pageYOffset
    }
  
    return { x, y }
  }
  }
  
 
}

function mediaIsObject(media: number | Media) : media is Media {
  return typeof media !== 'number'
  
}

function Info({params} : {params: Promise<{productId : String}>}) {
   const [imageURL, setImageURL] = useState<string | null>(null);
    const [showMag, setShowMag] = useState(false);
    let [counter , setCounter] = useState(1);
    let [counter2, setCounter2] = useState(1);
    const [icon1, setIcon1] = useState(false);
    const [icon2, setIcon2] = useState(false);
    const [icon3, setIcon3] = useState(false);
    const [icon4, setIcon4] = useState(false);
    const [icon5, setIcon5] = useState(false);
    const [rating, setRating] = useState(0);
    const [status, setStatus]= useState('');
    const [overall, setOverall] = useState({ratings: [0], people: 0});
    const [mainDesc, setMainDesc] = useState(true);
    const [mainRev, setMainRev] = useState(false);
    const [review, setReview] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [cartSuccess, setCartSuccess] = useState(false);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const [product, setProduct] = useState<Product | null>(null);
     const [reviews, setReviews] = useState<any []>([])
    const {addItem, editSubtotal} = useCartStore((state) => state)
    const revform = useRef<HTMLFormElement>(null);

    const {productId} = use(params);
     useEffect(() => {
 
    async function fetchProduct() {
      const res = await fetch(`/api/shop/${productId}`);
      
      if (!res.ok) {
        setProduct(null);
        return;
      }
      
      const data = await res.json();
      const rev = await fetch(`/api/reviews?productId=${data[0].id}`)
      const revData = await rev.json()
      if(revData){
        let sum = revData.reduce((acc, item)=> acc + item.rating, 0);
       let overall = Math.ceil(sum / revData.length);

       setOverall({ratings: [overall], people: revData.length})
      }
      
      
      setProduct(data[0]);
      setReviews(revData);
      setImageURL(data[0].images[0].url)
      magnify(3, data[0].images[0].url);
    }

    fetchProduct();
  }, [productId]);
    

    const minSwipeDistance = 50; 

    const onTouchStart = (e: any) => {
      setTouchEnd(null) 
      setTouchStart(e.targetTouches[0].clientX)
    }

    const onTouchMove = (e: any) => setTouchEnd(e.targetTouches[0].clientX);


    const onTouchEnd = ()=>{
      if (!touchStart || !touchEnd) return
      const distance = touchStart - touchEnd
      const isLeftSwipe = distance > minSwipeDistance
      const isRightSwipe = distance < -minSwipeDistance

      if (isLeftSwipe) {
        setCounter2(counter2+=1);
        
      }
      if (isRightSwipe) {
        setCounter2(counter2-=1);
        
      }
      
    }


    useEffect(()=>{
        window.scrollTo(0,0)
        
    }, []);

 

    useEffect(()=>{

      let images = document.querySelectorAll(".img-select");
      let imagesArr = Array.from(images);
      
      imagesArr.forEach((img)=>{
          if (Number(img.getAttribute('id')) === counter2) {
              img.classList.add('other-active');
          } else {
             img.classList.remove('other-active');
          }
      });
      
      if (counter2 < 1) {
        setCounter2(4);
      }
      if (counter2 > 5) {
        setCounter2(1);
      }


  }, [counter2]);

    // useEffect(()=>{
      
    //   magnify(3, 1);
      
    // }, [])

    const handleMouseEnter = ()=>{
      setShowMag(true);   
    }
    const handleMouseLeave = ()=>{
      setShowMag(false);   
    }

    const handleSubimage = (e: any)=>{
     
       let imageId = Number(e.currentTarget.getAttribute('id'));
       
       let imageUrl = product?.images.find((img)=>{
             if(!mediaIsObject(img)){
             return null
           }
          return img.id === imageId;    
                  
       } );
      if (typeof imageUrl === 'object' && imageUrl?.url) {
          setImageURL(imageUrl.url);
          magnify(3, imageUrl.url);
        }
      
       
       
    }

    const handleAddCounter = ()=>{
      setCounter(counter+=1);
    }
    const handleMinusCounter = ()=>{
      setCounter(counter-=1);
    }

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



    const handleAddToCart = ()=>{
     if (typeof product?.images[0] === 'object' && product.images[0]?.url) {
      const cartObject = {
        id: product?.name,
        name: product?.name,
        price: product?.price,
        total: product?.price && counter * product?.price,
        image: product?.images[0].url,
        count: counter,
      }
      
      try {
         addItem(cartObject);
         editSubtotal();
         setCartSuccess(true);

         setTimeout(() => {
          setCartSuccess(false);
         }, 3000);
      } catch (error) {
         console.log(error);
         
      }
       
     }
     
    }

    const handleReviewSubmit = async (e) => {
       e.preventDefault();
      
          const formData = new FormData(e.currentTarget)
          if (!product?.id) throw new Error("No product selected")

          const data = {
            product: product.id,
            title: formData.get("full-name") as string,
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
        <div id={styles.info}>
        <div className={styles.infoInset}>
        <div className={styles.imgInfo}>
          <div className={styles.infoImg1}>
            <div className={styles.infoImgInset}>
              {product?.images.map((img)=>{
                 if(!mediaIsObject(img))  return null
                 
                return (
               <div key={img?.id} id={String(img?.id)} className={`${styles.infoSubimage}`} onClick={handleSubimage}>
              {img?.url && <Image className={styles.infoSubimg} src={img?.url} alt="" width={200} height={200} />}  
              </div>
                )
              })}
              
            </div>
            <div className={styles.mainInfoImg} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div id='magnifier' className={styles.imgMagnifierGlass} style={{opacity: showMag ? '1' : '0'}}></div>
            {imageURL && <Image id='main-img' className={styles.mainInfoImage} src={imageURL} alt="" width={500} height={500}/>}
            </div>
          </div>
          <div className={styles.infoImg2}>
          <div className={styles.mainImage} onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
            {imageURL && <Image className={styles.mainImageImg} src={imageURL} alt="" width={500} height={500} />}
        </div>
        <div className={styles.otherImages}>
           {product?.images.map((img)=>{
                 if(!mediaIsObject(img))  return null
                 
                return (
                img?.url && <Image key={img?.id} id={String(img?.id)} className={`${styles.imgSelect}`} src={img?.url} alt="" width={200} height={200} onClick={handleSubimage}/>

                )
              })}
            
        </div>
          </div>
          <div className={styles.infoInfo}>
          <p className={styles.infoLinks}>Home / Shop / {product?.category} / </p>
          <p className={styles.infoTitle}>{product?.name}</p>
           {overall.ratings.map((rate)=>{
            const list: React.ReactNode[] = [];

               for (let i = 0; i < 5; i++) {
                if(i < rate){
                list.push(<span key={i}><MdStar className={styles.starIcon} style={{width: '20px', height: '20px'}}/></span>);
                }else{
                list.push(<span key={i}><MdStarBorder className={styles.starIcon} style={{width: '20px', height: '20px'}}/></span>);
                }
               }

               return(
                <div key={rate} className={styles.infoReviews}>
               {list}
               <p>{overall.people} Reviews</p>
               </div>
               )
          })}
         
          <p className={styles.infoCost}>KSH {product?.price.toLocaleString('en-US')}.00/=</p>
          <div className={styles.infoCounter}>
            <span onClick={handleMinusCounter}><FaMinus style={{color: "white"}} /></span>
            <span>{counter}</span>
            <span onClick={handleAddCounter}><FaPlus style={{color: "white"}} /></span>
          </div>
          <div className={styles.infoCart} style={{backgroundColor: cartSuccess ? "black" : "#ffe100", color: cartSuccess ? "#ffe100" : "black"}} onClick={handleAddToCart}>
           {cartSuccess ? <p>ITEM ADDED!</p> : <p>ADD TO CART</p>}
          </div>
          {product && <Whatsapp product={product} phoneNumber='254704610605'/> }
          <div className={styles.infoDelivery}>
           <h4>Delivery Information</h4>
           <p>{product?.delivery.deliveryTime}</p>
          </div>
          </div>
         </div>
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
           <RichTextRenderer content={product?.description.productInformation} />
           {product?.description.dimensions && <h4>Dimensions</h4>}
           <p>{product?.description.dimensions}</p>
           <h4>Structural Frame</h4>
           <p>{product?.description.structuralMaterial}</p>
           <h4>Color</h4>
           <p>{product?.description.color}</p>
           {product?.description.careInstructions && <h4>Care Instructions</h4>}
           <p>{product?.description.careInstructions}</p>
           <h4>Return policy</h4>
           <p>Visit our Return policy page</p>
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
         <div className={styles.quote}>
         <h1>TRANSFORM YOUR WORKSPACE</h1>
        </div>
         {product?.subcategory && <Similar subcategory = {product?.subcategory} id = {product?.id}/>}
        </div>
        </div>
    
        </>
    )
}

export default Info;