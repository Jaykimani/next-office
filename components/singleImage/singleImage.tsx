"use client";

import styles from './single.module.css'
import { Media } from '@/payload-types';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

interface imagesProps{
    imagesArr: string[]
}



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

const SingleImage = ({imagesArr} : imagesProps) => {
        const [imageURL, setImageURL] = useState<string | null>(null);
        const [showMag, setShowMag] = useState(false);
        const [touchStart, setTouchStart] = useState(null);
        const [touchEnd, setTouchEnd] = useState(null);
        let [counter2, setCounter2] = useState(1);

        useEffect(()=>{
            
            setImageURL(imagesArr[0]);
          
        }, [])

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

    const handleMouseEnter = ()=>{
      setShowMag(true); 
      magnify(3, imageURL);  
    }
    const handleMouseMove = ()=>{
      setShowMag(true); 
      magnify(3, imageURL);  
    }
    const handleMouseLeave = ()=>{
      setShowMag(false);   
    }

    const handleSubimage = (e: any)=>{
       let imageId = e.currentTarget.getAttribute('id');

       setImageURL(imageId);
       magnify(3, imageId); 
    }
      
      
  return (
    <>
     <div className={styles.infoImg1}>
            <div className={styles.infoImgInset}>
              {imagesArr.map((img)=>{
              
                return (
               <div key={img} id={String(img)} className={`${styles.infoSubimage}`} onClick={handleSubimage}>
              {img && <Image className={styles.infoSubimg} src={img} alt="" width={200} height={200} />}  
              </div>
                )
              })}
              
            </div>
            <div className={styles.mainInfoImg} onMouseEnter={handleMouseEnter} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            <div id='magnifier' className={styles.imgMagnifierGlass} style={{opacity: showMag ? '1' : '0'}}></div>
            {imageURL && <Image id='main-img' className={styles.mainInfoImage} src={imageURL} alt="" width={500} height={500}/>}
            </div>
          </div>
          <div className={styles.infoImg2}>
          <div className={styles.mainImage} onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
            {imageURL && <Image className={styles.mainImageImg} src={imageURL} alt="" width={500} height={500} />}
        </div>
        <div className={styles.otherImages}>
           {imagesArr.map((img)=>{
                 
                return (
                img && <Image key={img} id={String(img)} className={`${styles.imgSelect}`} src={img} alt="" width={200} height={200} onClick={handleSubimage}/>

                )
              })}
            
        </div>
          </div>
    </>
  )
}

export default SingleImage