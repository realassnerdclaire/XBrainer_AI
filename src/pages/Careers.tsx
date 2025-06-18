
import React, { useState } from 'react';
import { ArrowLeft, Zap, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import JobListings from '../components/careers/JobListings';
import { useMousePosition } from '../hooks/useMousePosition';

const Careers: React.FC = () => {
  const mousePosition = useMousePosition();

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-50 to-cyan-100 text-gray-800 overflow-hidden relative">
      
      {/* Clean Cloud Rainbow Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-200/40 via-cyan-100/30 to-teal-200/40"></div>
        
        {/* Floating cloud shapes */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 300 + 200}px`,
                height: `${Math.random() * 150 + 100}px`,
                background: `radial-gradient(ellipse, rgba(59, 130, 246, 0.3) 0%, rgba(34, 211, 238, 0.2) 40%, transparent 70%)`,
                borderRadius: '50%',
                animation: `cloudFloat ${Math.random() * 20 + 15}s infinite ease-in-out ${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
        
        {/* Subtle geometric patterns */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 20 + 10}px`,
                height: `${Math.random() * 20 + 10}px`,
                background: `linear-gradient(45deg, rgba(59, 130, 246, 0.4), rgba(34, 211, 238, 0.4))`,
                borderRadius: i % 3 === 0 ? '50%' : '0%',
                animation: `gentleFloat ${Math.random() * 15 + 10}s infinite ease-in-out ${Math.random() * 3}s`
              }}
            />
          ))}
        </div>
        
        {/* Soft wave patterns */}
        <div className="absolute bottom-0 left-0 w-full h-32 opacity-20">
          <div className="w-full h-full bg-gradient-to-t from-blue-300/50 to-transparent"></div>
        </div>
        <div className="absolute top-0 right-0 w-full h-32 opacity-20">
          <div className="w-full h-full bg-gradient-to-b from-cyan-300/50 to-transparent"></div>
        </div>
      </div>
      
      <div className="relative z-20">
        <header className="p-6 backdrop-blur-sm bg-white/30 border-b border-blue-200/50 shadow-lg">
          <div className="max-w-7xl mx-auto">
            <Link 
              to="/" 
              className="inline-flex items-center space-x-3 text-blue-700 hover:text-blue-600 transition-all duration-300 group"
            >
              <div className="p-2 rounded-full bg-blue-100/50 border border-blue-200/50 group-hover:border-blue-300/70 transition-all">
                <ArrowLeft className="h-5 w-5" />
              </div>
              <span className="font-semibold">Return to XBrainer</span>
            </Link>
          </div>
        </header>

        <div className="max-w-7xl mx-auto p-6 space-y-12">
          <div className="text-center space-y-8 py-12">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <Brain className="h-16 w-16 text-blue-600" />
                <div className="absolute inset-0 bg-blue-400/30 rounded-full animate-pulse"></div>
              </div>
            </div>
            
            <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent mb-6 leading-tight">
              Join Our Team
            </h1>
            
            <div className="flex justify-center mb-8">
              <div className="flex items-center space-x-4 px-6 py-3 bg-white/40 backdrop-blur-sm rounded-full border border-blue-200/50 shadow-lg">
                <Zap className="h-5 w-5 text-blue-600" />
                <span className="text-blue-700 font-mono font-semibold">XBrainer AI Careers</span>
                <Zap className="h-5 w-5 text-blue-600" />
              </div>
            </div>
            
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed backdrop-blur-sm bg-white/30 rounded-2xl p-8 border border-blue-200/50 shadow-lg">
              Help us secure the future of brain-machine interfaces across the globe. We're looking for talented individuals 
              to join our mission in developing cutting-edge cybersecurity solutions for advanced technologies.
              <br />
              <span className="text-blue-600 font-semibold mt-4 block">Available in San Francisco (Remote) & Hyderabad (Remote)</span>
            </p>
          </div>

          <JobListings />
        </div>
      </div>
    </div>
  );
};

export default Careers;
