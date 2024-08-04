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
export default function Home() {

  const onScrollAnimation = () => {
    const hiddenElements = document.querySelectorAll('.hide');
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
    <main className="flex-col min-h-screen min-w-screen items-center text-white justify-center bg-primary">

      <div className="flex  min-h-screen min-w-screen items-center justify-center ">
        <div className=" m-4 fixed right-0 flex flex-col gap-4">

          <Link className="social_logo hide" target="_blank" href={'https://www.instagram.com/migo.flamingo/'}><Instagram /></Link>

          <Link className="social_logo hide" target="_blank" href={'https://github.com/rojanshakya071'}><Github /></Link>

          <Link className="social_logo hide" target="_blank" href={'https://www.linkedin.com/in/rojan-shakya-116018243/'}><Linkedin /></Link>


        </div>
        <div className="absolute border-solid border-2 border-tertiary w-72 h-72 rounded-full z-0">
        </div>

        <div className="w-96 h-96 absolute z-0 opacity-50 hide">
          <StrippedCircle postAnimation={'home1'} aos={true} noOfStrips={12} startingAngle={0} length={4} breadth={2} isSpinning={true} reverse={false} spinDuration={12} equalSpacing={false} gap={5} opacity={50} />
        </div>

        <div className="w-96 h-96 absolute z-0 opacity-50 hide">
          <StrippedCircle postAnimation={'home2'} aos={true} noOfStrips={12} startingAngle={180} length={4} breadth={2} isSpinning={true} reverse={false} spinDuration={12} equalSpacing={false} gap={5} opacity={50} />
        </div>
        <div className="w-[450px] h-[450px] z-0 opacity-50 hide">
          <PartialCircle startingAngle={180} breadth={4} isSpinning={true} spinDuration={12} reverse={true} opacity={50} />
        </div>
        <div className="z-10 absolute hide">
          <h1 className="text-white text-center font-nice text-xl m-2">A FULL STACK WEB DEVELOPER</h1>
        </div>
      </div>
      <AboutMe />
    </main >
  );
}
