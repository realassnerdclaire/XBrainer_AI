
import React, { useState } from 'react';
import { ArrowLeft, Zap, Brain } from 'lucide-react';
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
      
      {/* Enhanced Cloud Rainbow Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Rainbow Cloud Gradients */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/6 w-[800px] h-[600px] bg-gradient-to-br from-blue-400/30 via-cyan-300/40 to-purple-400/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 right-1/6 w-[700px] h-[500px] bg-gradient-to-br from-indigo-400/30 via-blue-300/40 to-cyan-400/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-[600px] h-[400px] bg-gradient-to-br from-purple-400/30 via-pink-300/40 to-blue-400/30 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        
        {/* Floating Cloud Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 200 + 100}px`,
                height: `${Math.random() * 100 + 50}px`,
                background: `radial-gradient(ellipse, rgba(${Math.random() * 100 + 100}, ${Math.random() * 100 + 200}, 255, 0.4) 0%, transparent 70%)`,
                borderRadius: '50%',
                animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out ${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="relative z-20">
        <header className="p-6 backdrop-blur-2xl bg-gradient-to-r from-blue-900/40 via-cyan-800/50 to-purple-900/40 border-b border-cyan-400/60 shadow-xl shadow-cyan-500/30">
          <div className="max-w-7xl mx-auto">
            <Link 
              to="/" 
              className="inline-flex items-center space-x-3 text-cyan-300 hover:text-cyan-200 transition-all duration-300 group"
            >
              <div className="p-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/50 group-hover:border-cyan-300/70 transition-all">
                <ArrowLeft className="h-5 w-5" />
              </div>
              <span className="font-semibold">Return to Neural Hub</span>
            </Link>
          </div>
        </header>

        <div className="max-w-7xl mx-auto p-6 space-y-12">
          <div className="text-center space-y-8 py-12">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <Brain className="h-16 w-16 text-cyan-400 animate-pulse" />
                <div className="absolute inset-0 bg-cyan-400/60 rounded-full animate-ping"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-40 animate-pulse"></div>
              </div>
            </div>
            
            <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-300 via-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent mb-6 leading-tight">
              Join the Neural Revolution
            </h1>
            
            <div className="flex justify-center mb-8">
              <div className="flex items-center space-x-4 px-6 py-3 bg-gradient-to-r from-blue-900/50 to-cyan-900/50 backdrop-blur-xl rounded-full border border-cyan-400/50">
                <Zap className="h-5 w-5 text-cyan-400" />
                <span className="text-cyan-300 font-mono font-semibold">XBrainer AI Recruitment Portal</span>
                <Zap className="h-5 w-5 text-cyan-400" />
              </div>
            </div>
            
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed backdrop-blur-sm bg-black/20 rounded-2xl p-8 border border-cyan-500/30">
              Help us secure the future of neural interfaces across the globe. We're looking for talented individuals 
              to join our mission in developing cutting-edge cybersecurity solutions for brain-machine interfaces.
              <br />
              <span className="text-cyan-300 font-semibold mt-4 block">Available in San Francisco & Hyderabad</span>
            </p>
          </div>

          <JobListings />
        </div>
      </div>
    </div>
  );
};

export default Careers;
