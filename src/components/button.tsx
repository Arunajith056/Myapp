"use client";
import React from "react";
import { HoverBorderGradient } from "./ui/button";

export function HoverBorderGradientDemo() {
  return (
    <div className="m-10 flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="bg-black text-neutral-100 flex items-center space-x-2"
      >
        
        <span>Contact Us Now</span>
      </HoverBorderGradient>
    </div>
  );
}

