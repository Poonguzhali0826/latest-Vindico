import React, { useState } from 'react';
import { useRouter } from 'next/router';
import ProjectModal from '../ModalPopup/ProjectModal';
const AIFeatureCard = ({ title, description, imagePath, onClick  }) => {
  return (
    <div
      className="ai-feature-card cursor-pointer flex gap-4 items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
      onClick={onClick}
    >
      <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-lg overflow-hidden">
        <img
          src={imagePath}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="font-semibold text-white">{title}</h3>
        <p className="text-gray-400 text-sm mt-1">{description}</p>
      </div>
    </div>
  );
};

const AIFeatures = () => {
   const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("New Project");
  const features = [
    {
      title: 'VindicoAI Chatbot',
      description: 'AI chatbot with document upload, dynamic knowledge retrieval, and cloud deployment.',
      imagePath: '/assets/images/chatbotImage.png',
      route: '/ai-chatbot'
    },
    {
      title: 'House Plan AI Critique',
      description: 'Augmented pipeline for automated CAD diagram reviews using historical data, design guidelines, and vector search.',
      imagePath: '/assets/images/housePlanImage.png',
      openModal: true
    },
    {
      title: 'High-fi Render Generation',
      description: 'AI pipeline for creating photorealistic shopfront images from user input and sample references.',
      imagePath: '/assets/images/modernSaudiArabiaHouse.png',
      route: '/image-generation'
    }
  ];
 const handleFeatureClick = (feature) => {
    if (feature.openModal) {
      setModalOpen(true);
    } else if (feature.route) {
      router.push(feature.route);
    }
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 md:px-8">
      {features.map((feature, index) => (
        <AIFeatureCard
          key={index}
          title={feature.title}
          description={feature.description}
          imagePath={feature.imagePath}
          route={feature.route}
          onClick={() => handleFeatureClick(feature)}
        />
      ))}
      <ProjectModal 
        open={modalOpen}
        onOpenChange={setModalOpen}
        title={modalTitle}
      />
    </div>
  );
};

export default AIFeatures;