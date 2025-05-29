import React, { useState } from 'react';
import Header from '../image-generation/header';
import SidePanel from '../image-generation/side-panel';
import CategoryBar from '../image-generation/category-bar';
import ExampleImages from '../image-generation/example-images';
import RecentProjects from '../image-generation/recent-projects';
import ImageGenerator from '../image-generation/image-generator';
import EditImages from './edit-images';
const Index = () => {
  const [showGenerator, setShowGenerator] = useState(false);
  const [isGenerateActive, setIsGenerateActive] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleGenerate = () => {
    setIsGenerateActive(true);
    setShowGenerator(true);
  };

  const handleGoBack = () => {
    setShowGenerator(false);
  };

  return (
    <div className="min-h-screen text-white">
      {/* // <div className="min-h-screen bg-aiui-bg text-white"> */}
      <Header />

      <div className="flex flex-col md:flex-row px-4 md:px-6 pb-4 pt-6 gap-6 bg-[radial-gradient(circle_at_top,rgba(0,174,217,0.5)_0%,#0d1217_25%)]">
        {/* Side Panel */}
        <div className="w-full md:w-1/3 lg:w-1/4 rounded-lg"
          style={{
            background: 'linear-gradient(to bottom, #22262a 0%, #373c41 100%)'
          }}>
          <SidePanel
            isGenerateActive={isGenerateActive}
            onGenerate={handleGenerate}
          />
        </div>

        {/* Main Content */}
        <div className="w-full md:w-2/3 lg:w-3/4">

          {isEditMode ? (
            <EditImages onReturn={() => setIsEditMode(false)} />
          ) : showGenerator ? (
            <ImageGenerator
              onGoBack={handleGoBack}
              prompt="create a image of house vitrine modern predio"
              onEditImage={() => setIsEditMode(true)}
            />
          ) : (
            <div>
              <h1 className="text-2xl md:text-3xl font-medium mb-6 leading-snug">
                What can <span className="font-bold">I help you</span> to design?
              </h1>

              <CategoryBar />

              <ExampleImages onEditImage={() => setIsEditMode(true)} />

              <div className="mb-4">
                <button className="text-sm text-[#4EABD5] cursor-pointer">
                  View More
                </button>
              </div>

              <RecentProjects title="What you've been working on" />
            </div>
          )}
          {/* {showGenerator ? (
            <ImageGenerator
              onGoBack={handleGoBack}
              prompt="create a image of house vitrine modern predio"
            />
          ) : (
            <div>
              <h1 className="text-2xl md:text-3xl font-medium mb-6 leading-snug">
                What can <span className="font-bold">I help you</span> to design?
              </h1>

              <CategoryBar />

              <ExampleImages />

              <div className="mb-4">
                <button className="text-sm text-[#4EABD5] cursor-pointer">
                  View More
                </button>
              </div>

              <RecentProjects title="What you've been working on" />
            </div>
          )} */}

        </div>
      </div>
    </div>
  );
};

export default Index;