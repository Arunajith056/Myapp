"use client";
import React from "react";
import { Boxes } from "./ui/grid";
import { cn } from "@/lib/utils";

export function BackgroundBoxesDemo() {
  return (
    <div className="h-96 relative w-full overflow-hidden flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full  z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className={cn("md:text-6xl text-xl text-slate-100 relative z-20 font-bold")}>
        About Us
      </h1>
      <p className="text-center mt-4 text-neutral-300 relative z-20 text-xl font-semibold">
      Willware Technology Solutions
      </p>
    </div>
  );
}
