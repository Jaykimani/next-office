"use client"

import { useEffect, useRef, useState } from "react";
import styles from './calendar.module.css';
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

function Calendar() {
  const[date, setDate] = useState('');
  const[checkDate, setCheckDate] = useState('');
  let [count, setCount] = useState(0);
  const calendarBack = useRef<HTMLSpanElement>(null);
  const calendarForward = useRef<HTMLSpanElement>(null);
  const calendarCurrentDate =useRef<HTMLParagraphElement>(null);
  const calendarCurrentYear =useRef<HTMLParagraphElement>(null);
  const calendarDates = useRef<HTMLUListElement>(null);



useEffect(()=>{
         let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();


// const day = document.querySelector(".calendar-dates");

// const currdate = document
//     .querySelector(".calendar-current-date");

// const curryear = document
//     .querySelector(".calendar-current-year");    

// const prenexIcons = document
//     .querySelectorAll(".calendar-navigation span");

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];


    const manipulate = () => {

        // Get the first day of the month
        let dayone = new Date(year, month, 1).getDay();
    
        // Get the last date of the month
        let lastdate = new Date(year, month + 1, 0).getDate();
        
    
        // Get the day of the last date of the month
        let dayend = new Date(year, month, lastdate).getDay();
    
        // Get the last date of the previous month
        let monthlastdate = new Date(year, month, 0).getDate();
    
        // Variable to store the generated calendar HTML
        let lit = "";
    
        // Loop to add the last dates of the previous month
        for (let i = dayone; i > 0; i--) {
            lit +=
                `<li class=${styles.inActive}>${monthlastdate - i + 1}</li>`;
        }

      
    
        // Loop to add the dates of the current month
        for (let i = 1; i <= lastdate; i++) {
    
            // Check if the current date is today
            let isToday = i === date.getDate()
                && month === new Date().getMonth()
                && year === new Date().getFullYear()
                ? `${styles.active} item`
                : "item";
            lit += `<li class="${isToday}">${i}</li>`;
        }
    
        // Loop to add the first dates of the next month
        for (let i = dayend; i < 6; i++) {
            lit += `<li class=${styles.inActive}>${i - dayend + 1}</li>`
        }
    
        // Update the text of the current date element 
        // with the formatted current month and year
        if (calendarCurrentDate.current && calendarCurrentYear.current && calendarDates.current) {
        calendarCurrentDate.current.innerText = `${months[month]}`;
        calendarCurrentYear.current.innerText = `${year}`;

         // update the HTML of the dates element 
        // with the generated calendar
        calendarDates.current.innerHTML = lit;
        }  

    }
    
    manipulate();

    if (calendarBack.current && calendarForward.current) {
        calendarBack.current.addEventListener("click", ()=>{
            month-=1;
            if (month < 0 || month > 11) {
    
                // Set the date to the first day of the 
                // month with the new year
                date = new Date(year, month, new Date().getDate());
    
                // Set the year to the new year
                year = date.getFullYear();
    
                // Set the month to the new month
                month = date.getMonth();
            }
    
            else {
    
                // Set the date to the current date
                date = new Date();
            }
    
            // Call the manipulate function to 
            // update the calendar display
            manipulate();
        })
         calendarForward.current.addEventListener("click", ()=>{
            
            month+=1;
            if (month < 0 || month > 11) {
    
                // Set the date to the first day of the 
                // month with the new year
                date = new Date(year, month, new Date().getDate());
    
                // Set the year to the new year
                year = date.getFullYear();
    
                // Set the month to the new month
                month = date.getMonth();
            }
    
            else {
    
                // Set the date to the current date
                date = new Date();
            }
    
            // Call the manipulate function to 
            // update the calendar display
            manipulate();
        })



    }

   
      
}, []); 

useEffect(()=>{
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    let allList = document.querySelectorAll<HTMLElement>(".item");
    allList.forEach((item)=>{
        if(calendarCurrentDate.current && calendarCurrentYear.current){
            
        let month = calendarCurrentDate.current.innerHTML;
        let year = calendarCurrentYear.current.innerHTML;
        let monthNum
        for (let i = 0; i < months.length; i++) {
          if(months[i] === month){
            monthNum = i + 1;
          }
               
        }

        let previousDates = monthNum + '/' + item.innerHTML + '/' + year;
        let nowDate = new Date();
        
        
        if (new Date(previousDates).setHours(0,0,0,0) < nowDate.setHours(0,0,0,0) ){

        item.style.color = "#aaaaaa";

        item.addEventListener("click", ()=>{
            return null;
        });
            
        } else {
         
            item.addEventListener('click', (e: any)=>{
                item.style.backgroundColor = '#ffe100';
            
                let selectedDay = e.currentTarget.innerHTML + '/' + monthNum + '/' + year;
                let selectCheck = monthNum + '/' + e.currentTarget.innerHTML + '/' + year;
                setDate(selectedDay);
                setCheckDate(selectCheck);
                
                let allList = document.querySelectorAll<HTMLElement>(".item");
                allList.forEach((item)=>{
                if (calendarCurrentDate.current && calendarCurrentYear.current) {
                   let month = calendarCurrentDate.current.innerHTML;
               let year = calendarCurrentYear.current.innerHTML;
               let monthNum
                 for (let i = 0; i < months.length; i++) {
                 if(months[i] === month){
                 monthNum = i + 1;
                }
               
                }

               let allDates = monthNum + '/' + item.innerHTML + '/' + year;

               if (new Date(allDates).setHours(0, 0, 0, 0) !== new Date(selectCheck).setHours(0, 0, 0, 0)) {
                item.style.backgroundColor = 'white';
    
                } 
                }
                
              
                });
                
                
            })
        } 

        }
        
         
        
        
        });

        


}, [count]);


 const handleNext = ()=>{
    setCount(count+=1);
 }
 const handlePrevious = ()=>{
    setCount(count-=1);
 }


    return (<>
    <div id={styles.calendarContainer}>
        <header className={styles.calendarHeader}>
            <div className={styles.calendarNavigation}>
                <span ref={calendarBack} id="calendar-prev" className="material-symbols-rounded" onClick={handlePrevious}>
                <MdArrowBackIos /> 
                </span>
                <p ref={calendarCurrentDate} className={styles.calendarCurrentDate}></p>
                <p ref={calendarCurrentYear} className={styles.calendarCurrentYear}></p>
                <span ref={calendarForward} id="calendar-next" className="material-symbols-rounded" onClick={handleNext}>
                <MdArrowForwardIos />    
                </span>
            </div>
        </header>

        <div className={styles.calendarBody}>
            <ul className={styles.calendarWeekdays}>
                <li>Sun</li>
                <li>Mon</li>
                <li>Tue</li>
                <li>Wed</li>
                <li>Thu</li>
                <li>Fri</li>
                <li>Sat</li>
            </ul>
            <ul ref={calendarDates} className={styles.calendarDates}></ul>
        </div>

    </div>

    </>)
}

export default Calendar;