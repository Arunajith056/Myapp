"use client";

import React, { useState, useEffect } from 'react';

const WelcomeMessage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 1000); // Show the message 1 second after the page loads
  }, []);

  const closeMessage = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="fixed bottom-14 right-4 bg-zinc-800 p-4 rounded-md shadow-lg z-50">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">Hi there 👋</h2>
          <button onClick={closeMessage} className="text-white">
            ✖️
          </button>
        </div>
        <p>What can we help you with today?</p>
      </div>
    )
  );
};

export default WelcomeMessage;
