import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/spotlight";

export function SpotlightPreview() {
  return (
    <div className="h-[25rem] md:h-[40rem] w-full rounded-md flex md:items-center md:justify-center  antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-2">
          We can Transform<br /> Every Digital Process
        </h1>
        <p className="mt-6 font-normal text-base text-neutral-300  text-center mx-auto md:text-xl">
          <span className="text-2xl">W</span>illWare is Technology solutionsCompany with <strong>9 years of Experience on the Market and Over  298 Statisfied Clients.</strong>
        </p>
      </div>
    </div>
  );
}
