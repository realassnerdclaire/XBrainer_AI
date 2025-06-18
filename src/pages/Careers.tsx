
import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import JobListings from '../components/careers/JobListings';
import Background from '../components/layout/Background';
import MouseFollower from '../components/layout/MouseFollower';
import { useMousePosition } from '../hooks/useMousePosition';

const Careers: React.FC = () => {
  const mousePosition = useMousePosition();

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <Background />
      <MouseFollower mousePosition={mousePosition} />
      
      <div className="relative z-20">
        <header className="p-6 backdrop-blur-xl bg-gradient-to-r from-black/60 via-purple-900/40 to-black/60 border-b border-cyan-500/50">
          <div className="max-w-7xl mx-auto">
            <Link 
              to="/" 
              className="inline-flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
          </div>
        </header>

        <div className="max-w-7xl mx-auto p-6">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Join XBrainer AI
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Help us secure the future of neural interfaces. We're looking for talented individuals 
              to join our mission in developing cutting-edge cybersecurity solutions for brain-machine interfaces.
            </p>
          </div>

          <JobListings />
        </div>
      </div>
    </div>
  );
};

export default Careers;
