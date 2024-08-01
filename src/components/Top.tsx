"use client";
import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > window.innerHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-16 right-4">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-2 bg-gray-500 text-white hover:text-gray-800 rounded-full shadow-lg hover:bg-gray-300 transition"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
