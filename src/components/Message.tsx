"use client";

import React, { useState } from "react";

const MessageAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 right-4 z-20">
      {isOpen && (
        <div className="bg-white p-4 rounded shadow-lg w-80 h-80">
          <div className="flex justify-between items-center mb-2 text-gray-600">
            <h2 className="text-sm font-semibold">Assistant</h2>
            <button onClick={toggleChat} className="text-gray-500">
              ✖️
            </button>
          </div>
          <div className="flex-grow overflow-y-auto text-gray-700 text-xs font-medium inline-block ">
            {/* Chat content can go here */}
            <img
              src="https://willwaretech.com/wp-content/uploads/2020/12/willware-logo-removebg.png"
              alt="logo"
              className="w-10 mb-2"
            />

            <p className="bg-gray-200 p-2 mt-2 inline-block rounded-lg rounded-tl-none mb-1">
              Let's Get Specific
            </p>
            <ul>
              <li className="p-2 bg-slate-50 border border-red-500 inline-block mb-1 text-xs rounded-md hover:bg-red-300 hover:text-gray-800">
                Brainstroming an idea
              </li>
              <li className="p-2 bg-slate-50 border border-red-500 inline-block mb-1 text-xs rounded-md hover:bg-red-300 hover:text-gray-800">
                Building a New Product
              </li>
              <li className="p-2 bg-slate-50 border border-red-500 inline-block mb-1 text-xs rounded-md hover:bg-red-300 hover:text-gray-800">
                Scaling Your Business
              </li>
              <li className="p-2 bg-slate-50 border border-red-500 inline-block mb-1 text-xs rounded-md hover:bg-red-300 hover:text-gray-800">
                Thinking Outside of The box
              </li>
            </ul>
          </div>
          <div className=" flex gap-2 items-center border-slate-300 border-t">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full h-5 p-2 border border-gray-300 rounded text-gray-500 text-xs mt-2"
            />
            <p className="text-gray-800 mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                />
              </svg>
            </p>
          </div>
        </div>
      )}
      <button
        onClick={toggleChat}
        className="p-2 bg-emerald-400 text-white rounded-full shadow-lg hover:bg-green-700 transition"
      >
        💬
      </button>
    </div>
  );
};

export default MessageAssistant;
