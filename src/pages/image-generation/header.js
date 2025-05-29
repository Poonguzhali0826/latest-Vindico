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
  );
};

export default Header;