import React from 'react';
import { Plus } from 'lucide-react';
import { useRouter } from 'next/router';

const ProjectCard = ({ imagePath, onClick }) => {
  return (
    <div 
      className="project-card aspect-square hover:opacity-80 transition"
      onClick={onClick}
    >
      <img 
        src={imagePath} 
        alt="Project" 
        className="w-full h-full object-cover"
      />
    </div>
  );
};

const EmptyProjectCard = () => {
  return (
    <div className="empty-project-card">
      <div className="w-12 h-12 bg-gray-700 rounded-md flex items-center justify-center mb-2">
        <Plus className="text-gray-400" />
      </div>
      <p className="text-gray-400 text-sm">Start a New Project</p>
    </div>
  );
};

const Projects = () => {
  const router = useRouter();
  const projects = [
    { imagePath: '/assets/images/projectOneImg.png' },
    { imagePath: '/assets/images/projectTwoImage.png' },
    { imagePath: '/assets/images/projectThreeImage.png' },
    { imagePath: '/assets/images/projecFourImage.png' }
  ];

  return (
    <div className="mt-16 px-4 md:px-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-white">My Projects</h2>
        <button
          onClick={() => router.push('/projects/list-view')}
          className="text-vindico-blue text-sm"
        >
          View All Projects
        </button>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 hover:cursor-pointer">
        <EmptyProjectCard />
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            imagePath={project.imagePath}
            onClick={
              index === 0
                ? () => router.push('/autocadd/autoCaddLayout')
                : undefined
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
