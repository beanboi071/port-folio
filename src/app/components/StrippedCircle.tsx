import React, { useEffect, useState } from 'react'


interface StrippedCircleProps {
  noOfStrips: number;
  length: number;
  startingAngle: number;
  breadth: number;
  isSpinning: boolean;
  spinDuration: number;
  reverse: boolean;
  equalSpacing: boolean;
  gap?: number;
  aos: boolean;
  postAnimation: string;
  opacity: number;
}
export default function StrippedCircle(props: StrippedCircleProps) {
  const [isObserved, setisObserved] = useState<boolean>(false);
  const [gap, setGap] = useState<number>(0);
  const onScrollAnimation = () => {
    const preAnimationElements = document.querySelectorAll(`.preAnimation_${props.postAnimation}`);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(`postAnimation_${props.postAnimation}`);
        }
      })
    })
    preAnimationElements.forEach((el) => observer.observe(el));
  }



  useEffect(() => {

    const styledElements = document.querySelectorAll(`.preAnimation_${props.postAnimation}`);
    const mutationObserver = new MutationObserver(() => setisObserved(true));
    const lastElement = styledElements[styledElements.length - 1]

    mutationObserver.observe(lastElement, { attributes: true, attributeFilter: ['class'] });

    if (props.equalSpacing) {
      setGap(360 / props.noOfStrips);
    } else {
      setGap(props.gap ?? 0);
    }
    onScrollAnimation();
  }, []);

  useEffect(() => {
    console.log('called', isObserved);
    if (gap > 0) {
      const elements = document.querySelectorAll(`.postAnimation_${props.postAnimation}`) as NodeListOf<HTMLElement>;
      elements.forEach((e, index, array) => {
        console.log(index, gap, props.startingAngle, index * gap);
        e.style.transform = `rotate(${(index * gap)}deg)`;
        e.style.transitionDelay = `${index * 0.1}s`
        //e.style.transition = 'all 1s'
      })
    }

  }, [gap, isObserved])

  return (
    <div className={`w-full ${props.reverse && 'flip-x'} h-full absolute object-contain opacity-${props.opacity} `} style={{


    }}>
      <style>
        {`
         @keyframes spin {
             from { transform: rotate(0deg); }
             to { transform: rotate(360deg); }
        }d
    `}
      </style>
      <div style={{ animation: props.isSpinning ? `spin ${props.spinDuration}s linear infinite` : '', rotate: `${props.startingAngle}deg` }} className={` absolute w-full  h-full rounded-full z-0 `} >
        {Array.from({ length: props.noOfStrips }, (_, i) => (
          <div key={i} className={`top-[50%] absolute w-full h-1 z-0 ${props.aos ? `preAnimation_${props.postAnimation}` : `postAnimation_${props.postAnimation}`}`}>
            <div className={`h-${props.breadth} w-${props.length} bg-light`}></div>

          </div>
        ))}
      </div>
    </div>
  )
}
