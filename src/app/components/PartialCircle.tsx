import React, { useEffect, useState } from 'react'


interface PartialCircleProps {
  startingAngle: number;
  breadth: number;
  isSpinning: boolean;
  spinDuration: number;
  reverse: boolean;
  opacity: number;
}
export default function PartialCircle(props: PartialCircleProps) {


  return (
    <div className='w-full h-full'>
      <style>
        {`
         @keyframes spin {
             from { transform: rotate(0deg); }
             to { transform: rotate(360deg); }
        }
    `}
      </style>
      <div style={{ animation: props.isSpinning ? `spin ${props.spinDuration}s ${props.reverse ? 'reverse' : ''} linear infinite` : '',  
    opacity:props.opacity  }} className={` border-4 border-t-primary border-b-primary absolute w-full h-full rounded-full z-0 `}>

      </div>


    </div>
  )
}
