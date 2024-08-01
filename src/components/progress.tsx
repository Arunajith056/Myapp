"use client"
// File: src/components/ProgressBars.tsx

import React, { useEffect, useState, useRef } from 'react';

const ProgressBars: React.FC = () => {
  const [digitalStrategy, setDigitalStrategy] = useState(0);
  const [financialService, setFinancialService] = useState(0);
  const [consulting, setConsulting] = useState(0);

  const progressBarRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (progressBarRef.current) {
      const { top, bottom } = progressBarRef.current.getBoundingClientRect();
      if (top >= 0 && bottom <= window.innerHeight) {
        setDigitalStrategy(80);
        setFinancialService(75);
        setConsulting(68);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDigitalStrategy((prev) => (prev < 80 ? prev + 1 : 80));
      setFinancialService((prev) => (prev < 75 ? prev + 1 : 75));
      setConsulting((prev) => (prev < 68 ? prev + 1 : 68));
    }, 50);

    return () => clearInterval(interval);
  }, [digitalStrategy, financialService, consulting]);

  return (
    <div
      ref={progressBarRef}
      className="flex flex-col items-center justify-center p-4"
    >
    <h2 className='text-md text-gray-200 bg-slate-600 my-5 text-left w-fit px-2 py-1 rounded-md  shadow-sm shadow-slate-500'>Our Benifits</h2>
      <h1 className="text-4xl font-bold mb-8 text-white">Our Services Progress</h1>
      <div className="w-full max-w-md mb-4">
        <h2 className="text-xl font-semibold mb-2 text-white">Digital Strategy</h2>
        <div className="relative w-full bg-gray-700 rounded-full h-6">
          <div
            className="absolute top-0 left-0 h-6 bg-blue-600 rounded-full"
            style={{ width: `${digitalStrategy}%`, transition: 'width 1s' }}
          ></div>
          <div className="absolute inset-0 flex items-center justify-center text-white font-semibold">
            {digitalStrategy}%
          </div>
        </div>
      </div>
      <div className="w-full max-w-md mb-4">
        <h2 className="text-xl font-semibold mb-2 text-white">Financial Service</h2>
        <div className="relative w-full bg-gray-700 rounded-full h-6">
          <div
            className="absolute top-0 left-0 h-6 bg-green-600 rounded-full"
            style={{ width: `${financialService}%`, transition: 'width 1s' }}
          ></div>
          <div className="absolute inset-0 flex items-center justify-center text-white font-semibold">
            {financialService}%
          </div>
        </div>
      </div>
      <div className="w-full max-w-md mb-4">
        <h2 className="text-xl font-semibold mb-2 text-white">Consulting</h2>
        <div className="relative w-full bg-gray-700 rounded-full h-6">
          <div
            className="absolute top-0 left-0 h-6 bg-red-600 rounded-full"
            style={{ width: `${consulting}%`, transition: 'width 1s' }}
          ></div>
          <div className="absolute inset-0 flex items-center justify-center text-white font-semibold">
            {consulting}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBars;
