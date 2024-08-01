"use client";
import React from "react";
import type { StaticImageData } from "next/image";
import image1 from "../../src/assest/images/chris-kursikowski-ze5wHM9kplc-unsplash.jpg";
import image2 from "../../src/assest/images/sticker-it-ae3bapdgd1Q-unsplash.jpg";
import image3 from "../../src/assest/images/5817154.jpg";
import image4 from "../../src/assest/images/3804943.jpg"
import { Tabs } from "./ui/Tabs";

export function TabsDemo() {
  const tabs = [
    {
      title: "Brand",
      value: "Brand",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-zinc-700 to-gray-900">
          <p className="bg-slate-800 p-2 inline-block rounded-xl">
            Brand & Infinity Design
          </p>
          <DummyContent
            src={image1}
            centerText="
Company’s corporate brand identity -your brand- and logo are the crucial emotional and visual tools that unite you with your target clientele. "
          />
        </div>
      ),
    },
    {
      title: "Logo",
      value: "Logo",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-zinc-700 to-gray-900">
          <p className="bg-red-800 p-2 inline-block rounded-xl">
            Logo Designing
          </p>
          <DummyContent
            src={image2}
            centerText="Willware is considered as a top branding agency in Bangalore and our brand design agency will help you to create a state of the art website for your business."
          />
        </div>
      ),
    },
    {
      title: "Web Design",
      value: "Web Design",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-zinc-700 to-gray-900">
          <p className="bg-yellow-800 p-2 inline-block rounded-xl">
            Web designing   </p>
           <DummyContent
            src={image3}
            centerText="Unique creative website designs having interactive User Interface with improved user experience, that stand out well to give you an added advantage over your competitors. "
          />
       
        </div>
      ),
    },
    {
      title: "Ecommerce",
      value: "Ecommerce",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-zinc-700 to-gray-900">
          <p className="bg-green-800 p-2 inline-block rounded-xl">
            ECommerce Website
          </p>
          <DummyContent
            src={image4}
            centerText="Ecommerce website designing in India is evolving at a very high pace. We at Willware are well-equipped with the changing technologies and will incorporate the same in our eCommerce. "
          />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[30rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start md:my-40 my-20">
      <h2 className="text-md text-gray-200 bg-slate-600 mb-5 text-left w-fit px-2 py-1 rounded-md shadow-sm shadow-slate-500">
        What We Do
      </h2>
      <Tabs tabs={tabs} />
    </div>
  );
}

interface DummyContentProps {
  src: string | StaticImageData;
  centerText: string;
}
const DummyContent: React.FC<DummyContentProps> = ({ src, centerText }) => {
  const imageUrl = typeof src === "string" ? src : src.src;
  return (
    <div className="relative h-[30vh] md:h-[90vh] rounded-xl mx-auto mt-2">
      <div
        className="absolute inset-0 bg-cover bg-center rounded-xl"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>{" "}
        {/* Overlay with opacity */}
      </div>
      <div className="absolute inset-0 flex justify-center mt-5">
        <h1 className="text-gray-300 text-xl md:text-xl font-bold max-w-4xl p-3">
          {centerText}
        </h1>
      </div>
      <div className="absolute inset-0 flex items-center justify-center mt-">
        <button className="text-gray-200 bg-zinc-700  rounded-2xl  text-base md:text-xl bg-transparent px-2 py-1 hover:bg-zinc-800">
          Explore
        </button>
      </div>
    </div>
  );
};

export default DummyContent;
