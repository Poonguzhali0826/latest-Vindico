import React from 'react';

const VindicoLogo = () => {
  return (

    <div className="flex items-center gap-2 relative">
      <div className="text-white text-2xl font-bold flex items-center">
        <img
          src="/assets/images/vindicoLogo.png"
          alt="Vindico Logo"
          className="h-6 w-auto sm:h-7 md:h-8 lg:h-9 xl:h-10"
        />
      </div>
    </div>

  );
};

export default VindicoLogo;