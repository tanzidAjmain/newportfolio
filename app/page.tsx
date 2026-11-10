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
      y: -10,
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
        <div ref={root} className="h-screen  w-full overflow-hidden flex flex-col justify-between items-center bg-[#D5D5D8] text-[#7A1F3D]">

          <div className="flex w-full shrink-0 flex-row items-center justify-between px-2 sm:px-4">
          <p className={`p-2 text-xs sm:text-sm font-bold ${ibmPlexMono.className}`}>portified // folio // tanzid</p>
          <div className="m-1 flex shrink-0 flex-row items-center justify-center border-l-2 border-[#7A1F3D] bg-[#BBDF32] p-1 font-bold cursor-pointer hover:scale-105">
          <a href='mailto:hellotanzid@gmail.com' className={`${ibmPlexMono.className} pl-3 text-sm text-[#7A1F3D]`}>say hi</a>
          <div className="h-2 w-2 animate-pulse  bg-[#7A1F3D] m-3"></div>
          </div>
          </div>

          <div className="heroText flex min-h-0 w-full flex-1 flex-col items-center justify-center gap-2 px-4">
           <div className="header flex min-h-0 flex-col items-center justify-center">
            <img src='/chopa3.png' alt="" className='chopa h-auto  w-[35vw] md:w-[14vw] rounded-full -mt-20 duration-300'/>
            <h1 className={`header -mt-2 text-center text-[15vw] md:text-[11rem] font-bold italic  ${bioRhyme.className}`}>hello there </h1>
           </div>

           <div className="flex w-full max-w-5xl flex-col items-center justify-center gap-3 sm:flex-row sm:items-start sm:gap-8">
            
            <div className="projects w-[90%] max-w-md text-left sm:w-1/2">
              <p className={`${bioRhyme.className} text-xs overflow-hidden h-full text-justify sm:text-sm`}>This is Tanzid, a really friendly neighborhood BBA guy and a full stack Web Dev. with a knack for code, design, and everything in between. Also Good in art and dissecting creative fields and spectrum. I can help you with your niche to standout in this saturation.</p>
            </div>
            
            <div className="works mt-1 flex w-full flex-col justify-end border-0 p-2 sm:mt-0 sm:w-1/2 sm:p-3">
              <p className={`${ibmPlexMono.className} mt-0 cursor-pointer bg-[#BBDF32] p-2 text-xs font-bold sm:text-sm`}>
                Work List worth showing:
              </p>
              <a href='https://byshunno.vercel.app' className={`${bioRhyme.className} my-1 p-1 text-xs transition-colors duration-300 hover:bg-[#BBDF32] sm:text-sm`}>1. House of shunno/o/oshim</a>
              <Link href='/cliapp' className={`${bioRhyme.className} my-1 p-1 text-xs transition-colors duration-300 hover:bg-[#BBDF32] sm:text-sm`}>2. [ The Project we will be working on ! ]</Link>
              
            </div>
           </div>

          </div>

          <div className="flex w-full  flex-row flex-wrap items-center justify-between text-xs sm:px-4 sm:text-sm">
            <p className={`${bioRhyme.className} font-bold`}>bleh</p>
            <p className={`${bioRhyme.className} font-bold`}>bleh</p>
            <p className={`${bioRhyme.className} font-bold`}>bleh</p>
            <p className={`${bioRhyme.className} font-bold`}>bleh</p>
            <p className={`${bioRhyme.className} font-bold`}>bleh</p>
            <p className={`${bioRhyme.className} font-bold`}>bleh</p>
            <p className={`${bioRhyme.className} font-bold`}>bleh</p>
            <p className={`${bioRhyme.className} font-bold`}>bleh</p>
            <p className={`${bioRhyme.className} font-bold`}>bleh</p>
          </div>
        </div>
  );
}
