import React from 'react';

const CategoryButton = ({ icon, label, active = false }) => {
  return (
    <button className={`flex flex-col items-center justify-center p-4 rounded-lg transition-all ${active ? 'bg-aiui-blue' : 'bg-aiui-card hover:bg-opacity-80'}`}>
      <div className="text-white mb-2">
        {icon}
      </div>
      <span className="text-xs text-white">{label}</span>
    </button>
  );
};

export default CategoryButton;