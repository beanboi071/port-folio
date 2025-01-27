'use client'
import Image from "next/image";
import StrippedCircle from "./components/StrippedCircle";
import Link from "next/link";
import Instagram from "./components/icons/Instagram";
import Github from "./components/icons/Github";
import Linkedin from "./components/icons/Linkedin";
import PartialCircle from "./components/PartialCircle";
import { useEffect } from "react";
import AboutMe from "./components/AboutMe";
import ObservableComponent from "./components/ObservableComponent";
export default function Home() {

  const showSocialLabel = (labelId: string) => {
    console.log("show called");
    const label = document.getElementById(labelId);
    label?.classList.add('show');
  }
  const hideSocialLabel = (labelId: string) => {
    console.log("hide called");
    const label = document.getElementById(labelId);
    label?.classList.remove('show');
  }
  const onScrollAnimation = () => {
    const hiddenElements = document.querySelectorAll('.hide, .hideCheesyQuote');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      })
    })
    hiddenElements.forEach((el) => observer.observe(el));
  }
  useEffect(() => {
    onScrollAnimation();
  }, [])

  return (
    <main className="flex-col min-h-screen min-w-screen items-center text-white justify-center bg-primary overflow-hidden ">

      <div className="flex  min-h-screen min-w-screen items-center justify-center  overflow-hidden">


        <div className=" m-4 fixed right-0 flex flex-col gap-4 hidden  md:flex ">

          <div className="flex social_logo hide gap-4 justify-end">
            <span id="instaLabel" className="hideRight glow" style={{ transitionDuration: '500ms' }}>migo.flamingo</span>
            <Link className=" hide hover:text-[#E1306C] hover:scale-125 " style={{ transitionDuration: '500ms' }} onMouseEnter={() => showSocialLabel('instaLabel')}
              onMouseLeave={() => hideSocialLabel('instaLabel')} target="_blank" href={'https://www.instagram.com/migo.flamingo/'}><Instagram /></Link>
          </div>
          <div className="flex social_logo hide gap-4 justify-end">
            <span id="gitLabel" className="hideRight glow" style={{ transitionDuration: '500ms' }}>rojanshakya071</span>
            <Link className=" hide hover:text-[#4078C0] hover:scale-125" style={{ transitionDuration: '500ms' }} onMouseEnter={() => showSocialLabel('gitLabel')}
              onMouseLeave={() => hideSocialLabel('gitLabel')} target="_blank" href={'https://github.com/rojanshakya071'}><Github /></Link>
          </div>
          <div className="flex social_logo hide gap-4 justify-end">
            <span id="linkedInLabel" className="hideRight glow" style={{ transitionDuration: '500ms' }}>Rojan Shakya</span>
            <Link className=" hide hover:text-[#0A66C2] hover:scale-125" style={{ transitionDuration: '500ms' }} onMouseEnter={() => showSocialLabel('linkedInLabel')}
              onMouseLeave={() => hideSocialLabel('linkedInLabel')} target="_blank" href={'https://www.linkedin.com/in/rojan-shakya-116018243/'}><Linkedin /></Link>
          </div>

        </div>

        <div className="  flex items-center justify-center">

          <div className="absolute border-solid border-2 border-tertiary w-40 h-40 md:w-72 md:h-72 rounded-full z-0 hide">
          </div>

          <div className="w-64 h-64 md:w-96 md:h-96 absolute z-0 opacity-50 hide">
            <StrippedCircle postAnimation={'home1'} aos={true} noOfStrips={12} startingAngle={0} length={4} breadth={2} isSpinning={true} reverse={false} spinDuration={8} equalSpacing={false} gap={5} opacity={0.3} />
          </div>

          <div className="w-64 h-64 md:w-96 md:h-96 absolute z-0 opacity-50 hide">
            <StrippedCircle postAnimation={'home2'} aos={true} noOfStrips={12} startingAngle={180} length={4} breadth={2} isSpinning={true} reverse={false} spinDuration={8} equalSpacing={false} gap={5} opacity={0.3} />
          </div>
          <div className=" w-72 h-72 md:w-[450px] md:h-[450px] z-0 opacity-50 hide">
            <PartialCircle startingAngle={180} breadth={4} isSpinning={true} spinDuration={10} reverse={true} opacity={0.3} />
          </div>
          <div className="absolute ">

          
          <div className="blink w-96 z-10    hide text-white nameSlider font-futuristic flex items-center justify-center text-center text-2xl md:text-4xl m-2 glow ">

            <h1 className="opacity-0 absolute">Rojan Shakya</h1>
            <h1 className="opacity-0 absolute">रोजन शाक्य</h1>
            <h1 className="opacity-0 absolute">Rojan Shakya</h1>
            <h1 className="opacity-0 absolute">ロジャン・シャキャ</h1>
            <h1 className="opacity-0 absolute">Rojan Shakya</h1>
            <h1 className="opacity-0 absolute">로잔 샤크야</h1>

          </div>
          </div>
        </div>
      </div>

    </main >
  );
}
