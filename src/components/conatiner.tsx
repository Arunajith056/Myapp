"use client";
import React, { useState, useEffect, Suspense, lazy } from "react";
import { ContainerScroll } from "./ui/container";

// Lazy load the iframe component
const LazyIframe = lazy(() => import('../components/lazy'));

export function HeroScrollDemo() {
  const [isVisible, setIsVisible] = useState(false);

  // Check if the component is in view
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const elementTop = document.getElementById('hero-scroll')?.offsetTop || 0;
      const viewportHeight = window.innerHeight;

      setIsVisible(scrollTop + viewportHeight > elementTop);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col overflow-hidden mt-20 md:mt-3" id="hero-scroll">
      <ContainerScroll
        titleComponent={
          <>
            <p className="p-2 text-xl text-gray-400 mt-5">
              Willware is a technology solutions company with 9 years of experience in the market and over 298 satisfied clients. Headquartered in Bangalore, India, we specialize in Web Development, Web Designing, SAP Implementation, Application Support, and SAP Education Services. We assist leading companies and tech startups in staying ahead of the competition by delivering skilled software engineers for their projects. We offer outsourcing, managed services, custom software development, or seamless addition to your in-house tech staff.
            </p>
            <h2 className="text-4xl font-semibold mb-6">
              "Empowering Businesses with Cutting-edge Technology Solutions"
            </h2>
            <br />
          </>
        }
      >
        {isVisible && (
          <Suspense fallback={<div className="text-center text-gray-500">Loading video...</div>}>
            <LazyIframe />
          </Suspense>
        )}
      </ContainerScroll>
    </div>
  );
}
