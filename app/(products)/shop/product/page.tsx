"use client";

import styles from './product.module.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { MdStar } from "react-icons/md";
import { MdStarHalf } from "react-icons/md";
import { MdStarBorder } from "react-icons/md";

function magnify(zoom, id) {

  
  
  var img = document.getElementById('main-img')as HTMLCanvasElement;
  console.log(img);
  
  
  /*create magnifier glass:*/
  var glass = document.getElementById('magnifier')as HTMLCanvasElement;

  if(img && glass){
 /*set background properties for the magnifier glass:*/
  glass.style.backgroundImage = `url('/item${id}.jpg')`;
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


function Info() {
    const [imageId, setImageId] = useState(1);
    const [showMag, setShowMag] = useState(false);
    let [counter , setCounter] = useState(1);
    let [counter2, setCounter2] = useState(1);
    const [icon1, setIcon1] = useState(false);
    const [icon2, setIcon2] = useState(false);
    const [icon3, setIcon3] = useState(false);
    const [icon4, setIcon4] = useState(false);
    const [icon5, setIcon5] = useState(false);
    const [mainDesc, setMainDesc] = useState(true);
    const [mainRev, setMainRev] = useState(false);
    const [review, setReview] = useState(false);
    const [quiz, setQuiz] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

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
      let images = document.querySelectorAll(".info-subimage");
        let imagesArr = Array.from(images);
        
        imagesArr.forEach((img)=>{
            if (Number(img.getAttribute('id')) === imageId) {
                img.classList.add('sub-active');
            } else {
               img.classList.remove('sub-active');
            }
        })

    }, [imageId]);

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

    useEffect(()=>{
      
      magnify(3, imageId);
      
    }, [])

    const handleMouseEnter = ()=>{
      setShowMag(true);   
    }
    const handleMouseLeave = ()=>{
      setShowMag(false);   
    }

    const handleSubimage = (e: any)=>{
      console.log('hellooo');
      
       let imageId = Number(e.currentTarget.getAttribute('id'));
       setImageId(imageId);

       magnify(3, imageId);
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
      setQuiz(false);
    }
    const handleQuestion = ()=>{
      setShowForm(true);
      setQuiz(true);
      setReview(false);
    }

    const handleIcon1 = ()=>{
      setIcon1(true);
      setIcon2(false);
      setIcon3(false);
      setIcon4(false);
      setIcon5(false);
    }
    const handleIcon2 = ()=>{
      setIcon1(true);
      setIcon2(true);
      setIcon3(false);
      setIcon4(false);
      setIcon5(false);
    }
    const handleIcon3 = ()=>{
      setIcon1(true);
      setIcon2(true);
      setIcon3(true);
      setIcon4(false);
      setIcon5(false);
    } 
    const handleIcon4 = ()=>{
      setIcon1(true);
      setIcon2(true);
      setIcon3(true);
      setIcon4(true);
      setIcon5(false);
    } 
    const handleIcon5 = ()=>{
      setIcon1(true);
      setIcon2(true);
      setIcon3(true);
      setIcon4(true);
      setIcon5(true);
    }

    const handleImageClick = (e: any)=>{
         const imageClicked = e.currentTarget.getAttribute('id');
         const imageId = Number(imageClicked);
         setCounter2(imageId)
         
    }


    return (
        <>
        <div id={styles.info}>
        <div className={styles.infoInset}>
        <div className={styles.imgInfo}>
          <div className={styles.infoImg1}>
            <div className={styles.infoImgInset}>
              <div id='1' className={`${styles.infoSubimage} ${styles.subActive}`} onClick={handleSubimage}>
              <Image className={styles.infoSubimg} src={`/item1.jpg`} alt="" width={200} height={200} />
              </div>
              <div id='2' className={styles.infoSubimage} onClick={handleSubimage}>
              <Image className={styles.infoSubimg} src="/item2.jpg" alt="" width={200} height={200} />
              </div>
              <div className={styles.infoSubimage} onClick={handleSubimage}>
              <Image className={styles.infoSubimg} src="/item1.jpg" alt="" width={200} height={200} />
              </div>
              <div id='5' className={styles.infoSubimage} onClick={handleSubimage}>
              <Image className={styles.infoSubimg} src="/item5.jpg" alt="" width={200} height={200} />
              </div>
            </div>
            <div className={styles.mainInfoImg} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div id='magnifier' className={styles.imgMagnifierGlass} style={{opacity: showMag ? '1' : '0'}}></div>
            <Image id='main-img' className={styles.mainInfoImage} src={`/item${imageId}.jpg`} alt="" width={500} height={500}/>
            </div>
          </div>
          <div className={styles.infoImg2}>
          <div className={styles.mainImage} onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
            <Image className={styles.mainImageImg} src={`/item${counter2}.jpg`} alt="" width={500} height={500} />
        </div>
        <div className={styles.otherImages}>
            <Image id="1" className={`${styles.otherActive} ${styles.imgSelect}`} src='/item1.jpg' alt="" width={200} height={200} onClick={handleImageClick}/>
            <Image id="2" className={styles.imgSelect} src='/item2.jpg' alt="" width={200} height={200} onClick={handleImageClick}/>
            <Image id="3" className={styles.imgSelect} src='/item3.jpg' alt="" width={200} height={200} onClick={handleImageClick}/>
            <Image id="5" className={styles.imgSelect} src='/item5.jpg' alt="" width={200} height={200} onClick={handleImageClick}/>
        </div>
          </div>
          <div className={styles.infoInfo}>
          <p className={styles.infoLinks}>Home / Shop / Desk Accessories / </p>
          <p className={styles.infoTitle}>Luxury Marble Globe Decor</p>
          <div className={styles.infoReviews}>
           <span><MdStar className={styles.starIcon} fontSize='medium'/></span>
           <span><MdStar className={styles.starIcon} fontSize='medium'/></span>
           <span><MdStar className={styles.starIcon} fontSize='medium'/></span>
           <span><MdStarHalf className={styles.starIcon} fontSize='medium'/></span>
           <span><MdStarBorder className={styles.starIcon} fontSize='medium'/></span>
           <p>2 Reviews</p>
          </div>
          <p className={styles.infoCost}>KSH 8,000.00/=</p>
          <div className={styles.infoCounter}>
            <span onClick={handleMinusCounter}><FaMinus style={{color: "white"}} /></span>
            <span>{counter}</span>
            <span onClick={handleAddCounter}><FaPlus style={{color: "white"}} /></span>
          </div>
          <div className={styles.infoCart}>
           <p>ADD TO CART</p>
          </div>
          <div className={styles.infoDelivery}>
           <h4>Delivery Information</h4>
           <p>This product will be delivered within 24hrs after order.</p>
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
           <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
           <h4>Dimensions</h4>
           <p>33cm Height * 30cm Width</p>
           <h4>Structural Frame</h4>
           <p>Wooden base, Aluminium Frames, Marble Globe</p>
           <h4>Color</h4>
           <p>Gold and Black</p>
           <h4>Care Instructions</h4>
           <p>Wipe of dust with dump cloth.</p>
          </div>
          <div className={styles.reviewContent} style={{display: mainRev ? "block" : "none"}}> 
            <h4>Customer Reviews</h4>
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
              <div className={styles.comment}>
               <h5>Joseph Kimani</h5>
               <div className={styles.commentReviews}>
                <span><MdStar className={styles.starIcon} fontSize='medium'/></span>
                <span><MdStar className={styles.starIcon} fontSize='medium'/></span>
                <span><MdStar className={styles.starIcon} fontSize='medium'/></span>
                <span><MdStarHalf className={styles.starIcon} fontSize='medium'/></span>
                <span><MdStarBorder className={styles.starIcon} fontSize='medium'/></span>
              </div>
              <p>1/1/2025</p>
              <text className={styles.writing}>"Professional customer service and quick delivery"</text>
              </div>
              <div className={styles.comment}>
               <h5>Joseph Kimani</h5>
               <div className={styles.commentReviews}>
                <span><MdStar className={styles.starIcon} fontSize='medium'/></span>
                <span><MdStar className={styles.starIcon} fontSize='medium'/></span>
                <span><MdStar className={styles.starIcon} fontSize='medium'/></span>
                <span><MdStarHalf className={styles.starIcon} fontSize='medium'/></span>
                <span><MdStarBorder className={styles.starIcon} fontSize='medium'/></span>
              </div>
              <p>1/1/2025</p>
              <text className={styles.writing}>"Professional customer service and quick delivery"</text>
              </div>
              <div className={styles.comment}>
               <h5>Joseph Kimani</h5>
               <div className={styles.commentReviews}>
                <span><MdStar className={styles.starIcon} fontSize='medium'/></span>
                <span><MdStar className={styles.starIcon} fontSize='medium'/></span>
                <span><MdStar className={styles.starIcon} fontSize='medium'/></span>
                <span><MdStarHalf className={styles.starIcon} fontSize='medium'/></span>
                <span><MdStarBorder className={styles.starIcon} fontSize='medium'/></span>
              </div>
              <p>1/1/2025</p>
              <text className={styles.writing}>"Professional customer service and quick delivery"</text>
              </div>
            </div>
            </div>
            <div className={styles.revBtns}>
             <div onClick={handleReview} style={{background: review ? "rgb(44, 44, 44)" : "transparent"}}>
             <p>Write a Review</p>
             </div>
             <div onClick={handleQuestion} style={{background: quiz ? "rgb(44, 44, 44)" : "transparent"}}>
              <p>Ask a Question</p>
             </div>
            </div>
            <div className={styles.revForm} style={{display : showForm ? "block" : "none"}}>
              <input type="text" name="" id="" placeholder='Full Name'/>
              <input type="text" name="" id="" placeholder='Email/Phone number'/>
              <div className={styles.formRatings} style={{display: review ? "block" : "none"}}>
                <p>Rating</p>
                <div className={styles.formRat}>
                <div onClick={handleIcon1}>{icon1 ? <MdStar className={styles.starIcon} fontSize='large'/> : <MdStarBorder className={styles.starIcon} fontSize='large'/>}</div>
                <div onClick={handleIcon2}>{icon2 ? <MdStar className={styles.starIcon} fontSize='large'/> : <MdStarBorder className={styles.starIcon} fontSize='large'/>}</div>
                <div onClick={handleIcon3}>{icon3 ? <MdStar className={styles.starIcon} fontSize='large'/> : <MdStarBorder className={styles.starIcon} fontSize='large'/>}</div>
                <div onClick={handleIcon4}>{icon4 ? <MdStar className={styles.starIcon} fontSize='large'/> : <MdStarBorder className={styles.starIcon} fontSize='large'/>}</div>
                <div onClick={handleIcon5}>{icon5 ? <MdStar className={styles.starIcon} fontSize='large'/> : <MdStarBorder className={styles.starIcon} fontSize='large'/>}</div>
                </div>
              </div>
              <textarea name="" id="" cols={30} rows={7} placeholder={quiz ? "Ask a Question" : "Write a Review" }></textarea>
              <button type="submit">Submit</button>
            </div>
          </div>
         </div>
         <div className={styles.quote}>
         <h1>TRANSFORM YOUR WORKSPACE</h1>
        </div>
         <div className={styles.otherProducts}>
          <h4>You may also like:</h4>
          <div className={styles.othersInset}>
            <div className={styles.othersDiv}>
              <Image src="/item2.jpg" alt="" width={500} height={500} />
              <h5>Modern Desktop Lamp</h5>
              <p>KSH 10,000/=</p>
              <button>ADD TO CART</button>
            </div>
            <div className={styles.othersDiv}>
              <Image src="/item2.jpg" alt="" width={500} height={500} />
              <h5>Modern Desktop Lamp</h5>
              <p>KSH 10,000/=</p>
              <button>ADD TO CART</button>
            </div>
            <div className={styles.othersDiv}>
              <Image src="/item2.jpg" alt="" width={500} height={500} />
              <h5>Modern Desktop Lamp</h5>
              <p>KSH 10,000/=</p>
              <button>ADD TO CART</button>
            </div>
            <div className={styles.othersDiv}>
              <Image src="/item2.jpg" alt="" width={500} height={500} />
              <h5>Modern Desktop Lamp</h5>
              <p>KSH 10,000/=</p>
              <button>ADD TO CART</button>
            </div> 
          </div>
         </div>
        </div>
        </div>
    
        </>
    )
}

export default Info;