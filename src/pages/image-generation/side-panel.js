import React from 'react';
import FidelitySlider from './FidelitySlider';
const styleOptions = [
    {
      name: "Classic",
      image: "assets/images/example-image-1.png",
      selected: true,
    },
    {
      name: "Contemporary",
      image: "assets/images/example-image-1.png",
      selected: false,
    },
    {
      name: "Modern",
      image: "assets/images/example-image-1.png",
      selected: false,
    },
    {
      name: "Customize",
      image: "assets/images/example-image-1.png",
      selected: false,
    },
  ];
const SidePanel = ({ isGenerateActive, onGenerate }) => {
  return (
    <div className="p-4 md:p-6 flex flex-col overflow-y-auto">
      <h2 className="text-white text-lg font-medium mb-6">Generate Image</h2>
      
      <div className="mb-3">
        <label className="block text-sm text-white mb-2">Describe your image</label>
        <textarea 
          className="w-full bg-[#1A1F24] text-white border-none rounded-md p-3 h-28 md:h-32 text-sm "
          placeholder="Write your prompt here"
          defaultValue={isGenerateActive ? "create a image of house vitrine modern predio" : ""}
        />
      </div>
      
      <div className="mb-3">
        <button className="flex items-center rounded-full bg-[#22262a] py-2 px-3 text-sm gap-2">
          <img src="/assets/images/lamp-on.png" alt="suggest Icon" className="w-4 h-4" />
          Suggest me
        </button>
      </div>
      
      <div className="mb-3">
        <label className="block text-sm text-white mb-2">Upload reference image</label>

        {/* File input mimic box */}
        <div className="flex w-full rounded-lg overflow-hidden">
          {/* Choose File Button */}
          <button className="bg-[#3b3f43] text-white px-3 py-2 text-sm w-[30%] text-left">
            Choose file
          </button>

          {/* No File Chosen Label */}
          <div className="bg-[#22262a] text-gray-400 px-3 py-2 text-sm w-[70%] border-[#3b3f43]">
            No file chosen
          </div>
        </div>
      </div>
      <FidelitySlider />
      
      <div className="mb-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          {styleOptions.map((style, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center gap-3 flex-1 ${!style.selected ? "opacity-50" : ""}`}
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-cover bg-center`}
                style={{ backgroundImage: `url(${style.image})` }}
              />
              <span
                className={`font-medium text-sm ${style.selected ? "text-[#93cbe6]" : "text-white"}`}
              >
                {style.name}
              </span>
            </div>
          ))}
        </div>
               
        {/* <label className="block text-sm text-white mb-2">Style</label>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          
          <div className="flex flex-col items-center space-y-1">
            <div className="rounded-[12px] overflow-hidden h-[48px] w-[48px] bg-gray-700">
              <img
                src="assets/images/example-image-1.png"
                alt="Classic"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xs text-aiui-blue">Classic</span>
          </div>

          
          <div className="flex flex-col items-center space-y-1">
            <div className="rounded-[16px] overflow-hidden h-[56px] w-[56px] bg-gray-700">
              <img
                src="assets/images/example-image-1.png"
                alt="Contemporary"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xs text-gray-400">Contemporary</span>
          </div>

         
          <div className="flex flex-col items-center space-y-1">
            <div className="rounded-[16px] overflow-hidden h-[56px] w-[56px] bg-gray-700">
              <img
                src="assets/images/example-image-1.png"
                alt="Modern"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xs text-gray-400">Modern</span>
          </div>

          
          <div className="flex flex-col items-center space-y-1">
            <div className="rounded-[16px] overflow-hidden h-[56px] w-[56px] bg-gray-700">
              <img
                src="assets/images/example-image-1.png"
                alt="Customize"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xs text-gray-400">Customize</span>
          </div>
        </div> */}
      </div>

      
      <div className="mb-8 md:mb-12">
        <button className="flex items-center text-sm text-[#D1D5DB] gap-2 rounded-full bg-[#373c41] h-10 px-3">
          <img src="/assets/images/color-swatch.png" alt="Add Icon" className="w-4 h-4" />
          Add a New Style
        </button>
      </div>
      
      <div className="mt-auto">
        <button
          className={`w-full text-white py-3 rounded-full flex items-center justify-center font-medium transition-colors hover:opacity-90 ${isGenerateActive ? 'bg-[#6480AB]' : ''
            }`}
          onClick={onGenerate}
          style={
            !isGenerateActive
              ? { background: 'linear-gradient(222.3deg, #EF7400 11%, #653201 106.71%)' }
              : {}
          }
        >
          <img src="/assets/images/twinkle.png" alt="Generate Icon" className="w-6 h-6 mr-2" />
          Generate Image
        </button>
      </div>
    </div>
  );
};

export default SidePanel;