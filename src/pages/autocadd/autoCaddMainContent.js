import React from 'react';

const AutoCaddMainContent = () => {
  return (
    <div className="w-full h-full relative">
      {/* Background image */}
      <img
        src="/assets/images/main.png"
        alt="High-fi Render"
        className="w-full h-full object-contain"
      />

      {/* Star overlays */}
      {/* Adjust top and left to position them precisely */}
      <img
        src="/assets/images/star.png"
        alt="Star 1"
        className="absolute top-[20%] left-[30%] w-6 h-6"
      />
      <img
        src="/assets/images/star.png"
        alt="Star 2"
        className="absolute top-[45%] left-[25%] w-6 h-6"
      />
      <img
        src="/assets/images/star.png"
        alt="Star 3"
        className="absolute top-[60%] left-[40%] w-6 h-6"
      />
      <img
        src="/assets/images/star.png"
        alt="Star 4"
        className="absolute top-[35%] left-[65%] w-6 h-6"
      />
    </div>
  );
};

export default AutoCaddMainContent;
