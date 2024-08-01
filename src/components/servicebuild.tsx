"use client";
import React from "react";
import { Boxes } from "./ui/grid";
import { cn } from "@/lib/utils";

export function BackgroundBoxesDemo1() {
  return (
    <div className="h-96 relative w-full overflow-hidden flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full  z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className={cn("md:text-6xl text-xl text-slate-100 relative z-20 font-bold")}>
         Our Services
      </h1>
      
    </div>
  );
}
