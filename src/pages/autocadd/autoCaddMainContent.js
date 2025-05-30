import React, { useState } from 'react';
 
const AutoCaddMainContent = () => {
  const [activeStar, setActiveStar] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [doorPopupVisible, setDoorPopupVisible] = useState(false);
  const [doorRemoved, setDoorRemoved] = useState(false);
 
  const stars = [
    { id: 1, top: '20%', left: '30%' },
    { id: 2, top: '45%', left: '25%' },
    { id: 3, top: '60%', left: '40%' },
    { id: 4, top: '35%', left: '65%' },
  ];
 
  const handleStarClick = (id) => {
    setActiveStar((prev) => (prev === id ? null : id));
  };
 
  const active = stars.find((s) => s.id === activeStar);
 
  return (
    <div className="w-full h-full relative bg-black">
      {/* Base Blueprint */}
      <img
        src="/assets/images/autocadd-image1.png"
        alt="Main Blueprint"
        className="w-full h-full object-contain"
      />
 
      {/* Patched Door Overlay */}
      {doorRemoved && (
        <img
          src="/assets/images/door-removed.png"
 
          className="absolute"
          style={{
            top: '21.5%',
            left: '43.2%',
            width: '50px',
            height: '55px',
            zIndex: 25,
          }}
        />
      )}
 
      {/* Clickable Door Region */}
      {!doorRemoved && (
        <div
          className="absolute cursor-pointer"
          style={{
            top: '21.5%',
            left: '43.3%',
            width: '40px',
            height: '40px',
            zIndex: 30,
          }}
          onClick={() => setDoorPopupVisible(true)}
        />
      )}
 
      {/* Orange Dotted Box */}
      {doorPopupVisible && !doorRemoved && (
        <div
          className="absolute border-2 border-dashed border-orange-400 pointer-events-none"
          style={{
            top: '21.6%',
            left: '40.0%',
            width: '50px',
            height: '55px',
            zIndex: 40,
          }}
        />
      )}
 
      {/* Tooltip with Action */}
      {doorPopupVisible && !doorRemoved && (
        <div
          className="absolute flex items-center bg-[#1E2124] text-white px-4 py-2 rounded-full shadow-lg"
          style={{ top: '21.5%', left: '47%', zIndex: 50 }}
        >
          <span className="text-sm mr-2">Remove this door from the project</span>
          <img
            src="/assets/images/up-arrow.png"
            alt="Remove"
            className="w-4 h-4 cursor-pointer"
           
          />
        </div>
      )}
 
      {/* Stars */}
      {stars.map((star) => (
        <img
          key={star.id}
          src="/assets/images/star.png"
          alt={`Star ${star.id}`}
          className="absolute w-6 h-6 cursor-pointer"
          style={{ top: star.top, left: star.left }}
          onClick={() => handleStarClick(star.id)}
        />
      ))}
 
      {/* Info Popup */}
      {active && (
        <div
          className="absolute w-[320px] bg-[#1E2124] text-white rounded-lg shadow-lg p-4 z-50"
          style={{
            top: `calc(${active.top} + 30px)`,
            left: `calc(${active.left} + 20px)`,
          }}
        >
          <div className="flex items-center justify-between mb-2 text-xs text-gray-400">
            <span>AI Suggestions</span>
            <span>#17</span>
          </div>
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-sm font-semibold text-white">IA Comment</h3>
            <span className="text-xs text-gray-400">5 Days Ago</span>
          </div>
          <p className="text-xs text-gray-300">
            Figma ipsum component variant main layer. Italic horizontal selection edit device device inspect community font. Boolean clip mask.
          </p>
          <div className="flex justify-between items-center mt-3 text-gray-400">
            <img src="/assets/images/box1.png" alt="Sparkle" className="h-6" />
            <div className="flex gap-2">
              <img src="/assets/images/box2.png" alt="Sparkle" className="h-6" />
              <img src="/assets/images/box3.png" alt="Sparkle" className="h-6" />
              <img src="/assets/images/box4.png" alt="Sparkle" className="h-6" />
            </div>
          </div>
        </div>
      )}
 
      {/* Bottom Control Bar */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center bg-[#0E1116] rounded-xl px-4 py-2 shadow-md space-x-4">
        <button>
          <img src="/assets/images/star-autocadd.png" alt="Sparkle" className="h-6" />
        </button>
        <div className="relative group">
          <button>
            <img src="/assets/images/edit-autocadd.png" alt="Copy" className="h-6" />
          </button>
          {/* <img
            src="/assets/images/copy-tooltip.png"
            alt="Tooltip"
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50 opacity-0 group-hover:opacity-100 transition h-6 w-auto"
          /> */}
        </div>
        <button>
          <img src="/assets/images/export-autocadd.png" alt="Export" className="h-6" />
        </button>
        <button onClick={() => setShowModal(true)}>
          <img src="/assets/images/favourites-autocadd.png" alt="Generate" className="h-6" />
        </button>
      </div>
 
      {/* Modal */}
      {showModal && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
         
          <div className="bg-[#0E1116] text-white p-6 rounded-xl w-[400px] relative shadow-lg">
            <button
              className="absolute top-2 right-3 text-gray-400 hover:text-white text-xl"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
            <h2 className="text-lg b-4 m-4">Generate Project Image</h2>
            <label className="text-sm opacity-60 text-[#ECEFF3]">Prompt</label>
            <textarea
              className="w-full mt-2 p-3 bg-[#263040] text-sm text-white border border-gray-600 rounded-md resize-none  h-52 overflow-hidden"
              defaultValue="Create a realistic architectural rendering of a modern house based on a floor plan, focusing on the front façade. The design should feature clean lines, large windows, and a mix of wood, concrete, and glass materials. Include a small front garden, pathway, and subtle exterior lighting. Show key elements like the main entrance, windows, garage (if any), and roof shape from an eye-level perspective"
            />
            <div className="mt-4 flex items-center gap-2">
              <label className="flex items-center gap-2 text-sm text-gray-400 cursor-pointer">
                 <img src="/assets/images/lamp.png" alt="Copy" className="h-4" />
                Suggest me
              </label>
            </div>
            <button className="mt-4 w-full bg-[#4EABD5] hover:bg-[#1963d6] text-white font-medium py-2 rounded ">
              Generate
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
 
export default AutoCaddMainContent;