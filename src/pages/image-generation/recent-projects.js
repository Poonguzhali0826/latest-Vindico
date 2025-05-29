import React from 'react';
import ProjectCard from '../image-generation/project-card';
import { Search } from "lucide-react";

const RecentProjects = ({ title, showViewAll = true }) => {
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      title: "Sleek Urban Retreats",
      date: "09-7-2024",
      author: "Lara McAlpin",
      tag: "Shopping Mall"
    },
    {
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      title: "Contemporary Haven Designs",
      date: "10-7-2024",
      author: "Lara McAlpin",
      tag: "School"
    },
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      title: "Chic Minimalist Abodes",
      date: "12-7-2024",
      author: "Lara McAlpin",
      tag: "Apartment Build"
    },
    {
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      title: "Modern Architectural Gems",
      date: "15-7-2024",
      author: "Lara McAlpin",
      tag: "Condo"
    }
  ];

  return (
    <div className="my-8">
       <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl text-white font-medium">{title}</h2>

        {showViewAll && (
          <div className="flex items-center space-x-2">
            {/* Filter Icon */}
            <button className="w-8 h-8 rounded-full bg-[#2A2C31] flex items-center justify-center">
              <img src="assets/images/sort.png" alt="filter" className="w-4 h-4" />
            </button>

            {/* Search Input */}
            <div className="relative w-[150px] h-[32px]">
              <input
                type="text"
                className="w-full h-full pl-8 pr-2 text-sm text-white bg-[#121417] border border-[#2A2C31] rounded-md placeholder:text-gray-500 focus:outline-none"
                placeholder=""
              />
              <Search className="absolute left-2 top-2 text-gray-500" size={14} />
            </div>

            {/* View All Button */}
            <button className="text-sm text-[#4EABD5] whitespace-nowrap hover:underline">
              View All
            </button>
          </div>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => {
          const isLast = index === projects.length - 1;

          return (
            <div key={project.title} className="relative rounded-lg overflow-hidden">
              {/* Project content */}
              <ProjectCard
                image={project.image}
                title={project.title}
                date={project.date}
                author={project.author}
                tag={project.tag}
              />

              {/* Smudged Blur Overlay for last card */}
              {isLast && (
                <div className="absolute inset-0 pointer-events-none z-10">
                  <div className="w-full h-full backdrop-blur-[6px] mask-gradient-fade-right" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentProjects;