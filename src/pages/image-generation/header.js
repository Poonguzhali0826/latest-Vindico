import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useRouter } from 'next/router';
import Link from 'next/link';
const Header = () => {
const router = useRouter();
return (
    <header className='bg-[radial-gradient(circle_at_top,rgba(0,174,217,0.5)_0%,#25272c_25%)] '>
        <div className="flex items-center justify-between p-1.5">
              <div className="flex items-center">
                  <Link href="/" className="">
                    <img
                        src="/assets/images/vindico-logo.png"
                        alt="Logo"
                        className="h-[40px] w-[70px]"
                    />
                </Link>
                  <button className="p-2">
                      <span className="sr-only">Menu</span>
                      <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1H17M1 7H17M1 13H17" stroke="white" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                  </button>
              </div>
              <div className="flex items-center pr-2 gap-2">
                  <div className="flex items-center pr-2 gap-2">
                      <button className="flex items-center gap-1 bg-[#374151]/40 text-white text-sm px-3 py-2 rounded-md" onClick={() => router.push('/managements')}>
                          <img
                              src="/assets/images/setting-4.png"
                              alt="setting"
                              className="w-4 h-4 object-cover"
                          />
                          <span className="hidden md:inline">Management</span>
                      </button>
                      <div
                          role="button"
                          className="w-8 h-8 bg-orange-300 rounded-full overflow-hidden cursor-pointer"
                      >
                          <img
                              src="https://randomuser.me/api/portraits/women/44.jpg"
                              alt="User Avatar"
                              className="w-full h-full object-cover"
                          />
                      </div>

                      <ChevronDown
                          size={16}
                          className="text-gray-400 cursor-pointer"
                      />
                  </div>
              </div>
        </div>
    </header>
    // <header className="flex justify-between items-center p-4 w-full">
    //   Logo and Menu
    //   <div className="flex items-center gap-4">
    //     <div className="w-8 h-8">
    //       <svg viewBox="0 0 24 24" fill="#2A7299" xmlns="http://www.w3.org/2000/svg">
    //         <path d="M12 2L2 7L12 12L22 7L12 2Z" />
    //         <path d="M2 17L12 22L22 17" />
    //         <path d="M2 12L12 17L22 12" />
    //       </svg>
    //     </div>
    //     <button className="text-white p-2">
    //       <Menu size={20} />
    //     </button>
    //   </div>
      
    //   {/* Right side controls */}
    //   <div className="flex items-center gap-3">
    //     <button className="bg-[#20262D] text-white px-3 py-1.5 rounded flex items-center gap-2 text-sm">
    //       <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    //         <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="white" strokeWidth="2" />
    //         <path d="M3 12H4M12 3V4M21 12H20M12 21V20" stroke="white" strokeWidth="2" strokeLinecap="round" />
    //         <path d="M18.364 18.364L17.657 17.657M5.636 5.636L6.343 6.343M5.636 18.364L6.343 17.657M18.364 5.636L17.657 6.343" stroke="white" strokeWidth="2" strokeLinecap="round" />
    //       </svg>
    //       Management
    //     </button>
    //     <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
    //       <span className="text-sm font-bold">JP</span>
    //     </div>
    //   </div>
    // </header>
  );
};

export default Header;