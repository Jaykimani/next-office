"use client"

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Charts() {

    const data = {
        labels : ['Stationery & Writing','Paper & Printing','Printer & Ink','IT & Tech', 'Pantry & Hydration', 'Cleaning & Hygiene'],
        datasets:  [
          {
            label: '',
            data: [10,11,12,13, 14, 6],
            backgroundColor: ['green','gray','red','blue', '#ffe100', '#000000']
          }
        ] 
    }

    const options = {
        responsive: true,
        plugins: {
          legend: {
            display : false,
          },
          title: {
            display: false,
          },
      },
    }

   return (
     <>
         <Doughnut data={data} options={options}/>
     </>
    )
}