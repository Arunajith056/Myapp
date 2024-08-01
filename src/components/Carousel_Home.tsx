// src/pages/About.tsx
import React from 'react';
import Carousel from '../components/carousel';

const testimonials = [
  <figure className="max-w-screen-md mx-auto text-center" key="1">
    <svg className="w-10 h-10 mx-auto mb-3 text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
      <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
    </svg>
    <blockquote>
      <p className="text-2xl italic font-medium text-white">"Working with WillWare Technology is an absolute joy,both Personal and Professionally.Jeeva is amazing speaker;her experience, expertise and genuine passion for what she does in obvious is every word she says."</p>
    </blockquote>
    <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
      <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" />
      <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
        <cite className="pe-3 font-medium text-white">Michael Gough</cite>
        <cite className="ps-3 text-sm text-gray-400">CEO at Google</cite>
      </div>
    </figcaption>
  </figure>,
  <figure className="max-w-screen-md mx-auto text-center" key="1">
  <svg className="w-10 h-10 mx-auto mb-3 text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
  </svg>
  <blockquote>
    <p className="text-2xl italic font-medium text-white">""Working with WillWare Technology is an absolute joy,both Personal and Professionally.Jeeva is amazing speaker;her experience, expertise and genuine passion for what she does in obvious is every word she says.""</p>
  </blockquote>
  <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
    <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" />
    <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
      <cite className="pe-3 font-medium text-white">Michael Gough</cite>
      <cite className="ps-3 text-sm text-gray-400">CEO at Google</cite>
    </div>
  </figcaption>
</figure>,

  // Add more testimonial slides here
];

const About = () => {
  return (
    <div style={{ backgroundColor: "#18181B" }}>
      {/* Other components */}
      <Carousel slides={testimonials} />
      {/* Other components */}
    </div>
  );
};

export default About;
