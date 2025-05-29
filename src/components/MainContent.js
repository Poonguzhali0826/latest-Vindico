import React, { useState } from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
const MainContent = () => {
  const [step, setStep] = useState(1);
 
  const handleInitialSend = () => setStep(2);
  const handleSecondSend = () => setStep(3);
 
  return (
    <div className="w-full h-full flex flex-col justify-between overflow-visible">
 
      {/* FIRST CHAT BOX */}
      {step === 1 && (
        <>
          <div className="flex justify-center items-start pt-8">
            <img
              src="/assets/images/centre_image.png"
              alt="Center Image"
              className="w-48 h-48 object-contain opacity-90"
            />
          </div>
 
          <div className="flex flex-col items-start gap-4 px-4 pt-12">
            <div className="bg-[#2C2F34] px-4 py-2 rounded-lg text-sm text-gray-200">
              How can I help you?
            </div>
            <div className="flex gap-2">
              <Button className="bg-[#151819] hover:bg-[#1E2124] text-gray-400 rounded-lg px-3 py-2 text-sm h-8">
                ✨ AI design critique
              </Button>
              <Button className="bg-[#3B82F6] hover:bg-blue-500 text-white rounded-lg px-3 py-2 text-sm h-8">
                High-fi Render
              </Button>
            </div>
          </div>
 
          <div className="mt-8 flex justify-center">
            <div className="relative w-[1328px] h-[187px] rounded-[24px] bg-[#151819] px-6 py-6 border border-[#2C2F34] flex flex-col justify-between">
              <div className="flex gap-4 pr-12">
                <div className="relative w-14 h-14 rounded-md overflow-hidden flex-shrink-0">
                  <img src="/assets/images/suggestme_image.png" alt="Preview" className="w-full h-full object-cover" />
                  <button className="absolute top-[-6px] right-[-6px] bg-[#0E1015] border border-gray-500 rounded-full w-5 h-5 flex items-center justify-center text-xs text-white shadow-md">
                    ×
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="Suggest any improvement required for the uploaded Design"
                  className="flex-1 bg-transparent text-[18px] text-gray-400 outline-none mt-2"
                />
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex gap-6 text-sm text-gray-400">
                  <button className="flex items-center gap-2 hover:text-white">
                    <img src="/assets/images/attach-square.png" className="w-4 h-4" /> Attach files
                  </button>
                  <button className="flex items-center gap-2 hover:text-white">
                    <img src="/assets/images/lamp-on.png" className="w-4 h-4" /> Suggest me
                  </button>
                </div>
                <button
                  onClick={handleInitialSend}
                  className="absolute right-6 bottom-6 w-10 h-10 flex items-center justify-center"
                >
                  <img src="/assets/images/Send_button.png" alt="Send" className="w-10 h-10" />
                </button>
              </div>
            </div>
          </div>
        </>
      )}
 
      {/* SECOND CHAT BOX */}
      {step === 2 && (
        // <div className="rounded-[24px] border border-[#373B42] bg-[#1A1D1E] p-8 w-[1392px] ml-[16px]">
        <div className="rounded-[24px] border border-[#373B42] p-8 w-[1392px] ml-[16px]">
 
          <div className="text-sm bg-[#2C2F34] px-4 py-2 rounded-lg text-gray-200 w-fit">
            How can I help you?
          </div>
          <div className="mt-4 flex justify-end">
            <div className="space-y-2 text-right">
              <img src="/assets/images/suggestme_image.png" alt="Uploaded" className="w-28 h-28 object-contain ml-auto" />
              <div className="text-sm text-white px-4 py-2 rounded-lg w-fit ml-auto" style={{ background: 'var(--brand-highlight-900, #1D465D)' }}>
                Suggest any improvement required for the uploaded Design
              </div>
            </div>
          </div>
          <div className="mt-6 relative bg-[#151819] border border-[#2C2F34] rounded-[24px] px-6 py-4">
            <input type="text" placeholder="Write something here" className="w-full bg-transparent text-[18px] text-gray-400 outline-none" />
            <div className="flex items-center justify-between mt-4 text-sm text-gray-400">
              <div className="flex gap-6">
                <button className="flex items-center gap-2 hover:text-white">
                  <img src="/assets/images/attach-square.png" className="w-4 h-4" /> Attach files
                </button>
                <button className="flex items-center gap-2 hover:text-white">
                  <img src="/assets/images/lamp-on.png" className="w-4 h-4" /> Suggest me
                </button>
              </div>
              <button className="absolute right-6 bottom-6 w-10 h-10 flex items-center justify-center" onClick={handleSecondSend}>
                <img src="/assets/images/Send_button.png" alt="Send" className="w-10 h-10" />
              </button>
            </div>
          </div>
        </div>
      )}
 
      {/* THIRD CHAT BOX */}
      {step === 3 && (
        <div className="w-[1392px] h-[893px] rounded-[24px] border border-[#373B42] p-8 ml-[16px]">
 
          <div className="flex justify-end mb-4">
            <div className="space-y-2 text-right">
              <img src="/assets/images/suggestme_image.png" alt="Uploaded" className="w-28 h-28 object-contain ml-auto" />
              <div className="text-sm text-white px-4 py-2 rounded-lg w-fit ml-auto" style={{ background: 'var(--brand-highlight-900, #1D465D)' }}>
                Suggest any improvement required for the uploaded Design
              </div>
            </div>
          </div>
 
          <div className="bg-[#2C2F34] rounded-xl p-4 text-sm text-gray-200 max-w-[550px] font-inter">
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-1">
                <img src="/assets/images/repeat.png" alt="Repeat Icon" className="w-5 h-5" />
                <h3 className="font-inter text-[14px] text-white leading-[18px]">Improve circulation Flow</h3>
              </div>
              <p className="font-inter text-[14px] leading-[18px] text-gray-300 mb-1">
                <span className="font-medium text-white">Issue:</span>&nbsp;The central hallway (Area 2) connects many rooms but may become a “dead space.”
              </p>
              <p className="font-inter text-[14px] leading-[18px] text-gray-300">
                <span className="font-medium text-white">Suggestion:</span>&nbsp;Integrate the hallway with the adjacent living areas using open shelves or built-in storage.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <img src="/assets/images/repeat.png" alt="Repeat Icon" className="w-5 h-5" />
                <h3 className="font-inter text-[14px] text-white leading-[18px]">Enhance social area integration</h3>
              </div>
              <p className="font-inter text-[14px] leading-[18px] text-gray-300 mb-1">
                <span className="font-medium text-white">Issue:</span>&nbsp;The kitchen (8), dining room (9), and living room (10) are well placed but could be more open.
              </p>
              <p className="font-inter text-[14px] leading-[18px] text-gray-300">
                <span className="font-medium text-white">Suggestion:</span>&nbsp;Remove or replace dividing walls with kitchen islands or open counters to improve visual flow and expand the sense of space.
              </p>
            </div>
            <div className="mt-4 text-blue-400 cursor-pointer flex items-center gap-2">
              <Link href="/autocadd" passHref>
                <div className="mt-4 text-blue-400 cursor-pointer flex items-center gap-2 hover:underline">
                  <img src="/assets/images/star-image.png" alt="Star Icon" className="w-4 h-4" />
                  Open Comments in the Project
                </div>
              </Link>
            </div>
          </div>
 
          <div className="mt-6 relative bg-[#151819] border border-[#2C2F34] rounded-[24px] px-6 py-4">
            <input type="text" placeholder="Write something here" className="w-full bg-transparent text-[18px] text-gray-400 outline-none" />
            <div className="flex items-center justify-between mt-4 text-sm text-gray-400">
              <div className="flex gap-6">
                <button className="flex items-center gap-2 hover:text-white">
                  <img src="/assets/images/attach-square.png" className="w-4 h-4" /> Attach files
                </button>
                <button className="flex items-center gap-2 hover:text-white">
                  <img src="/assets/images/lamp-on.png" className="w-4 h-4" /> Suggest me
                </button>
              </div>
              <button className="absolute right-6 bottom-6 w-10 h-10 flex items-center justify-center">
                <img src="/assets/images/Send_button.png" alt="Send" className="w-10 h-10" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
 
export default MainContent;