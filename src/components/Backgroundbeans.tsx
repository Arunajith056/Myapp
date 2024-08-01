"use client";
import React from "react";
import { BackgroundBeams } from "./ui/Backgroundbeans";

export function BackgroundBeamsDemo() {
  return (
    <div className="md:h-[30rem] w-full rounded-md relative flex flex-col items-center justify-center antialiased mt-5">
      <div className="md:w-1/2 mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold mb-5 md:mb-5">
        Willware Technology Solutions 
        </h1>
        <p></p>
        <p className="text-neutral-500  mx-auto md:my-2 text-sm text-center relative z-10 mt:5 md:mt:0">
        Willware is a technology solutions company
        with <strong className=" bg-neutral-800 p-1 rounded-md">9 years of experience on the market and over 298 satisfied clients.</strong>
        The Company Headquarter in Bangalore, India and the only company of its
        kind specializing in Web Development, Web Designining & SAP
        Implementation and Application Support, and SAP Education Services.
        </p>
        
      </div>
      <BackgroundBeams />
    </div>
  );
}
