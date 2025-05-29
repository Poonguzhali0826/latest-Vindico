
import React from 'react';

const ImageGenerator = ({ onGoBack, prompt, onEditImage }) => {
  return (
    <div className="p-4">
      <button 
        className="flex items-center text-aiui-blue mb-6"
        onClick={onGoBack}
      >
        <img
          src="/assets/images/undo.png"
          alt="Undo"
          className="pr-2"
        />
        Return to Image Generator Home
      </button>

      <div className="flex justify-between items-start">
        <h1 className="text-2xl text-white font-medium mb-6">
          "{prompt}"
        </h1>

        <button className="bg-gray-700 text-white px-3 py-1 h-10 rounded-md text-sm flex items-center hover:bg-gray-600">
          <img src="/assets/images/add.png" alt="Add Icon" className="w-4 h-4 mr-2" />
          Save Prompt
        </button>
      </div>

      <p className="text-sm text-aiui-secondary mb-4">There here is some options</p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* First image with overlay */}
        <div className="relative overflow-hidden rounded-lg group">
          <img 
            src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
            alt="Shopping Mall" 
            className="w-full h-48 object-cover"
          />

          {/* Label top-left */}
          <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white text-xs px-3 py-1 rounded-full z-20">
            Shopping Mall
          </div>

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-[#21252BB2] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            {/* Right Icons */}
            <div className="absolute right-2 top-2 flex flex-col gap-2">
              <img src="/assets/images/more-img.png" className="w-8 h-8 cursor-pointer" alt="more" />
              <img src="/assets/images/download-img.png" className="w-8 h-8 cursor-pointer" alt="download" />
              <img src="/assets/images/expand-img.png" className="w-8 h-8 cursor-pointer" alt="expand" />
              <img src="/assets/images/message-img.png" className="w-8 h-8 cursor-pointer" alt="message" />
            </div>

            {/* Bottom Buttons */}
            <div className="absolute bottom-3 left-0 w-full flex justify-start gap-3 px-2">
              <button className="flex items-center text-white text-xs bg-[#3A4048] w-[80px] h-[30px] px-4 rounded-full border border-white/30 hover:bg-[#4A5058] transition"  onClick={onEditImage}>
                <img src="/assets/images/edit.png" className="w-4 h-4 mr-2" alt="edit" />
                <span>Edit</span>
              </button>
              <button className="flex items-center text-white text-xs bg-[#3A4048] w-[158px] h-[30px] px-4 rounded-full border border-white/30 hover:bg-[#4A5058] transition">
                <img src="/assets/images/repeat.png" className="w-4 h-4 mr-2" alt="use as reference" />
                <span>Use as reference</span>
              </button>
            </div>
          </div>
        </div>

        {/* Other images without overlay */}
        <div className="relative overflow-hidden rounded-lg">
          <img 
            src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
            alt="Traditional House" 
            className="w-full h-48 object-cover"
          />
        </div>
        <div className="relative overflow-hidden rounded-lg">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
            alt="Modern House 1" 
            className="w-full h-48 object-cover"
          />
        </div>
        <div className="relative overflow-hidden rounded-lg">
          <img 
            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
            alt="Modern House 2" 
            className="w-full h-48 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGenerator;
