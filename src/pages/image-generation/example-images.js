import React from 'react';

const ExampleImages = ({ onEditImage }) => {
  const images = [
    { src: 'assets/images/example-image-1.png', label: 'Shopping Mall' },
    { src: 'assets/images/example-image-2.png', label: 'School' },
    { src: 'assets/images/example-image-3.png', label: 'Apartment Build' },
    { src: 'assets/images/example-image-4.png', label: 'Condo' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {images.map(({ src, label }, index) => (
        <div key={index} className="relative overflow-hidden rounded-xl group">
          {/* Image */}
          <img src={src} alt={label} className="w-full h-[270px] object-cover" />

          {/* Label top-left */}
          <div className="absolute top-2 left-2 bg-[#25649e] text-white text-xs px-3 py-1 rounded-full z-20">
            {label}
          </div>

          {/* Overlay with buttons (on hover) */}
          <div className="absolute inset-0 bg-[#21252BB2] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">

            {/* Right Icons */}
            <div className="absolute right-2 top-2 flex flex-col gap-2">
              <img src="/assets/images/more-img.png" className="w-8 h-8 cursor-pointer" alt="more" />
              <img src="/assets/images/download-img.png" className="w-8 h-8 cursor-pointer" alt="download" />
              <img src="/assets/images/expand-img.png" className="w-8 h-8 cursor-pointer" alt="expand" />
              <img src="/assets/images/message-img.png" className="w-8 h-8 cursor-pointer" alt="meassage" />
            </div>

            {/* Bottom Buttons */}
            <div className="absolute bottom-3 left-0 w-full flex justify-start gap-3 px-2">
              <button className="flex items-center text-white text-xs bg-[#3A4048] w-[80px] h-[30px] px-4 rounded-full border border-white/30 cursor-pointer hover:bg-[#4A5058] transition" onClick={onEditImage}>
                <img src="/assets/images/edit.png" className="w-4 h-4 mr-2" alt="edit" />
                <span>Edit</span>
              </button>
              <button className="flex items-center text-white text-xs bg-[#3A4048] w-[158px] h-[30px] px-4 rounded-full border border-white/30 cursor-pointer hover:bg-[#4A5058] transition">
                <img src="/assets/images/repeat.png" className="w-4 h-4 mr-2" alt="use as reference" />
                <span>Use as reference</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExampleImages;
