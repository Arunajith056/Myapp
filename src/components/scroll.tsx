"use client";
import React from "react";
import { StickyScroll } from "./ui/scroll";
import Image from "next/image";
import image1 from "../assest/images/wp5191391-js-wallpapers.png"
import image2 from "../assest/images/wp7732965-angular-wallpapers.jpg"
import image3 from "../assest/images/team-nocoloco-YRUj8BENrVQ-unsplash.jpg"
import image4 from "../assest/images/startae-team-QEsaXprgVfQ-unsplash.jpg"

const content = [
  {
    title: "Hire Vue JS Developers",
    description:
      "Our Vue JS team has significant experience in creating cutting edge design. The front-end designers at our Vue JS development agency utilize the flexibility of this framework to deliver effective designs.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          <Image
          src={image1}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="angular"
        />

      </div>
    ),
  },
  {
    title: "Hire Angular Developer ",
    description:"AngularJS Consulting At Willware, we have more than 200+ software developers, designers, testers, and consultants. With their help, we can provide the best AngularJS development solution.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={image2}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="angular"
        />

      </div>
    ),
  },
  {
    title: "UI Design",
    description:"Good User Interface (UI) design is the designing process of software product interfaces aimed at efficient interaction between the user and the machine. Essentially, it encompasses all the controls, buttons and elements of the application creating a visual appearance of the product.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={image3}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />

      </div>
    ),
  },
  {
    title: "UX Design",
    description:
      "Good User Experience (UX) design is the designing process of software product interfaces focused on the end user’s perception of the product. The UX designer’s main goal is to ensure convenience, usability and logical flow of the information within the application.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
         <Image
          src={image4}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  
];
export function StickyScrollRevealDemo() {
  return (
    <div className="p-10 border border-b-0 border-gray-600 rounded-xl mt-20 md:mt-0">
        <div className=" md:w-2/1 mx-auto p-5">
        <h2 className=" text-md text-gray-200 bg-slate-600 my-5 text-left w-fit px-2 py-1 rounded-md  shadow-sm shadow-slate-500">Our Services</h2>
        <h2 className="text-3xl font-extrabold my-5">Services What We Provide</h2>
        <p className="my-5">We help leading companies and tech startups to stay ahead of competition by delivering skilled talented software engineers for their projects. We sharpened our expertise to deliver highly-functional solutions and establish long-term partnership with our clients. Regardless of technology platform, Wilware Technology can work either as a Outsourcing, Managed service, custom software project developer or as a seamless addition to your in-house technology staff. </p>
        </div>
      <StickyScroll content={content} />
    </div>
  );
}
