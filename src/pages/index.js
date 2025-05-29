import React from 'react';
import Header from '../components/LandingPage/Header';
import Greeting from '../components/LandingPage/Greeting';
import AIFeatures from '../components/LandingPage/AIFeatures';
import Projects from '../components/LandingPage/Projects';


export default function LandingPage() {

  return (
    <div className="min-h-screen relative flex flex-col bg-[radial-gradient(circle_at_top,rgba(0,174,217,0.5)_0%,rgba(15,18,23,0)_25%)] overflow-hidden">
      <img
        src="/assets/images/Vector.png"
        alt="Decorative vector"
        className="absolute right-0 top-[200px] w-[20vw] max-w-500px] z-0 pointer-events-none select-none"
      />
      <div className="relative z-10">
        <Header />
        <main className="flex-1 max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
          <Greeting />
          <AIFeatures />
          <Projects />
        </main>
      </div>
    </div>
  );
}



