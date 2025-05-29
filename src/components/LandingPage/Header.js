import React from 'react';
import { ChevronDown, Settings } from 'lucide-react';
import VindicoLogo from './VindicoLogo';

const Header = () => {
  return (
      <header className="w-full py-6 px-4 md:px-8 relative flex items-center justify-between">
       
          {/* Logo Container: Left on mobile, Center on md+ */}
          <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 rounded-full px-4 py-2">
              <VindicoLogo />
          </div>

          {/* Right-side controls (always aligned right) */}
          <div className="flex items-center gap-2 ml-auto">
              <button className="flex items-center gap-1 bg-gray-800 text-white text-sm px-3 py-1.5 rounded-md">
                  <img
                      src="/assets/images/setting-4.png"
                      alt="setting"
                      className="w-4 h-4 object-cover"
                  />
                  <span className="hidden md:inline">Management</span>
              </button>
              <div className="flex items-center gap-2 ml-2">
                  <div className="w-8 h-8 bg-orange-300 rounded-full overflow-hidden">
                      <img
                          src="https://randomuser.me/api/portraits/women/44.jpg"
                          alt="User Avatar"
                          className="w-full h-full object-cover"
                      />
                  </div>
                  <ChevronDown size={16} className="text-gray-400" />
              </div>
          </div>
      </header>
  );
};

export default Header;