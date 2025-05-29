import React from 'react';

const ProjectCard = ({ image, title, date, author, tag }) => {
  return (
    <div className="flex flex-col">
      <div className="relative overflow-hidden rounded-lg mb-2">
        <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white text-xs px-3 py-1 rounded-full">
          {tag}
        </div>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-[138px] object-cover"
        />
      </div>
      <h3 className="text-white text-sm font-medium">{title}</h3>
      <div className="flex justify-between mt-1">
        <span className="text-xs text-aiui-secondary">{date}</span>
        <span className="text-xs text-aiui-secondary">{author}</span>
      </div>
    </div>
  );
};

export default ProjectCard;