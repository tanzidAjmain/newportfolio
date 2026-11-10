"use client";
import Image from "next/image";
import { IBM_Plex_Mono , BioRhyme} from "next/font/google";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { SplitText } from "gsap/all";

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bioRhyme = BioRhyme({
  variable: "--bio-rhyme",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


export default function Home() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(SplitText);
    const projects = root.current?.querySelector(".projects");
    if (!projects) return;

    const splitText = new SplitText(projects, { type: "lines" });
    const splitText2 = new SplitText(".header h1", { type: "words" });
    const splitText3 = new SplitText(".works ", { type: "lines" });
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    tl.from(splitText2.words, {
      delay: 0.2,
      opacity: 0,
      stagger: 0.25,
      y: 20,
      duration: 1,
    });

    tl.from(splitText.lines, {
      delay: 0.5,
      opacity: 0,
      y: 20,
      duration: 1,
      stagger: 0.25,
      ease: "power1.out",
    })

    tl.from(splitText3.lines, {
      delay: 0.1,
      opacity: 0,
      y: 20,
      duration: 1,
      stagger: 0.25,
      ease: "power1.out",
    });

    return () => {
      tl.kill();
      splitText.revert();
    };
  }, []);

  return (
        <div ref={root} className="h-screen flex flex-col w-screen  justify-between items-center bg-[#D5D5D8] text-[#7A1F3D] ">

          <div className="flex flex-row items-center justify-between w-screen">
          <p className={`text-sm p-3 font-bold ${ibmPlexMono.className} `}>portified // folio // tanzid</p>
          <div className={` font-bold  flex flex-row items-center cursor-pointer hover:scale-105 border-[#7A1F3D] bg-[#BBDF32] border-l-2 m-2 p-1  justify-center`}>
          <a href='mailto:hellotanzid@gmail.com' className={`${ibmPlexMono.className}  text-[#7A1F3D]  pl-3`}>say hi</a>
          <div className="h-2 w-2 animate-pulse  bg-[#7A1F3D] m-3"></div>
          </div>
          </div>

          <div className="heroText   flex flex-col items-center justify-center w-full h-full ">
           <div className="flex header flex-col items-center justify-center">
            <img src='/chopa3.png'   className='chopa rounded-full  duration-300'/>
            <h1 className={`header italic text-[15vw] md:text-[10rem] md:-mt-25 font-bold ${bioRhyme.className} `}>hello there </h1>
           </div>

           <div className="flex flex-col gap-3 md:flex-row items-center justify-center w-screen ">
            
            <div className=" w-90 projects  md:w-1/3 text-left ">
              <p className={` ${bioRhyme.className} text-sm translate-y-full `}>This is Tanzid, a really friendly neighborhood BBA guy and a full stack Web Dev. with a knack for code, design, and everything in between. Also Good in art and dissecting creative fields and spectrum. I can help you with your niche to standout in this saturation.</p>
            </div>
            
            <div className=" works flex flex-col h-full justify-end border-0 mt-5  border-[#7A1F3D] p-5">
              <p className={`${ibmPlexMono.className} bg-[#BBDF32] cursor-pointer p-2 text-sm md:text-lg font-bold mt-10 md:mt-0`}>
                Work List worth showing:
              </p>
              <a href='https://byshunno.vercel.app' className={`${bioRhyme.className} hover:bg-[#BBDF32] transition-colors  p-1 my-2 duration-300 text-sm md:text-m `}>1. House of shunno/o/oshim</a>
              <Link href='/cliapp' className={`${bioRhyme.className}  hover:bg-[#BBDF32] transition-colors duration-300 p-1 my-2  text-sm md:text-m  `}>2. [ The Project we will be working on ! ]</Link>
              
            </div>
           </div>

          </div>

          <div className="flex flex-row items-center justify-between w-screen">
            <p className={`${bioRhyme.className} font-bold`}>bleh </p>
            <p className={`${bioRhyme.className} font-bold`}>bleh </p>
            <p className={`${bioRhyme.className} font-bold`}>bleh </p>
            <p className={`${bioRhyme.className} font-bold`}>bleh </p>
            <p className={`${bioRhyme.className} font-bold`}>bleh </p>
            <p className={`${bioRhyme.className} font-bold`}>bleh </p>
            <p className={`${bioRhyme.className} font-bold`}>bleh </p>
            <p className={`${bioRhyme.className} font-bold`}>bleh </p>
            <p className={`${bioRhyme.className} font-bold`}>bleh </p>
          </div>
        </div>
  );
}
