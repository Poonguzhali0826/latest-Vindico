import React from 'react';

const ArchitecturePortfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Sleek Urban Retreats",
      lastModified: "10-14-2024",
      image: "/assets/images/frame1.png"
    },
    {
      id: 2,
      title: "Contemporary Haven Designs",
      lastModified: "10-14-2024",
      image: "/assets/images/frame2.png"
    },
    {
      id: 3,
      title: "Chic Minimalist Abodes",
      lastModified: "10-14-2024",
      image: "/assets/images/frame5.png"
    },
    {
      id: 4,
      title: "Innovative Eco-Friendly Homes",
      lastModified: "10-14-2024",
      image: "/assets/images/frame4.png"
    },
    {
      id: 5,
      title: "Stylish Open-Concept Living",
      lastModified: "10-14-2024",
      image: "/assets/images/frame3.png"
    },
    {
      id: 6,
      title: "Sophisticated Modern Dwellings",
      lastModified: "10-14-2024",
      image: "/assets/images/frame3.png"
    },
    {
      id: 7,
      title: "Elegant Glass and Steel Structures",
      lastModified: "10-14-2024",
      image: "/assets/images/frame2.png"
    },
    {
      id: 8,
      title: "Artistic Urban Living Spaces",
      lastModified: "10-14-2024",
      image: "/assets/images/frame4.png"
    },
    {
      id: 9,
      title: "Trendy Loft-Style Houses",
      lastModified: "10-14-2024",
      image: "/assets/images/frame1.png"
    },
    {
      id: 10,
      title: "Bright and Airy Family Homes",
      lastModified: "10-14-2024",
      image: "/assets/images/frame5.png"
    },
    {
      id: 11,
      title: "Sustainable Modern Architecture",
      lastModified: "10-14-2024",
      image: "/assets/images/frame5.png"
    },
    {
      id: 12,
      title: "Luxurious Contemporary Villas",
      lastModified: "10-14-2024",
      image: "/assets/images/frame1.png"
    },
    {
      id: 13,
      title: "Smart Home Innovations",
      lastModified: "10-14-2024",
      image: "/assets/images/frame3.png"
    },
    {
      id: 14,
      title: "Stylish Suburban Retreats",
      lastModified: "10-14-2024",
      image: "/assets/images/frame5.png"
    },
    {
      id: 15,
      title: "Dynamic Urban House Designs",
      lastModified: "10-14-2024",
      image: "/assets/images/frame4.png"
    }
  ];

  return (
    <div className="min-h-screen bg-[#25272c] p-4">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
    {projects.map((project) => (
      <div
        key={project.id}
        className="group cursor-pointer rounded-lg bg-[#25272c]"
      >
        {/* Image Block */}
        <div className="overflow-hidden rounded-lg h-[138px] bg-[#25272c]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Text Block Below Image */}
        <div className="mt-2 px-1">
          <h3 className="text-white text-sm font-medium leading-tight">
            {project.title}
          </h3>
          <div className="flex justify-between items-center text-xs text-gray-300 mt-1">
            <span>Last Modified</span>
            <span>{project.lastModified}</span>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default ArchitecturePortfolio;