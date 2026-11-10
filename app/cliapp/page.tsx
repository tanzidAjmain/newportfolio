import {  BioRhyme} from "next/font/google";

const bioRhyme = BioRhyme({
  variable: "--bio-rhyme",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function CliApp() {
  return (
    <div className=" flex flex-row w-screen h-screen justify-center items-center bg-[#D5D5D8] text-[#7A1F3D] ">
       <h1 className={` ${bioRhyme.className} text-3xl font-bold text-center mt-20`}>
        your next big thing !!
       </h1>
      </div>
    );
    }   