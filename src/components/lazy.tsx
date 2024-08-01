

import React from 'react';

const LazyIframe: React.FC = () => {
  return (
    <iframe
      className="mx-auto rounded-2xl object-cover h-full object-left-top w-full"
      src="https://www.youtube.com/embed/TKnufs85hXk?si=NOIX4Kl1uFZHwe8g"
      title="YouTube video"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export default LazyIframe;
