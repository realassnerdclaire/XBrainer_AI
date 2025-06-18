
import React, { useState } from 'react';
import { ArrowLeft, Zap, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import JobListings from '../components/careers/JobListings';
import { useMousePosition } from '../hooks/useMousePosition';

const Careers: React.FC = () => {
  const mousePosition = useMousePosition();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden relative">
      
      {/* Futuristic Glass Raindrop Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gradient overlay with glass effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-blue-500/15 to-indigo-600/20 backdrop-blur-sm"></div>
        
        {/* Animated Raindrops on Glass */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 6 + 3}px`,
                height: `${Math.random() * 25 + 15}px`,
                background: `linear-gradient(180deg, rgba(59, 130, 246, 0.8) 0%, rgba(147, 197, 253, 0.6) 50%, rgba(59, 130, 246, 0.4) 100%)`,
                borderRadius: '50% 50% 50% 50% / 20% 20% 80% 80%',
                filter: 'blur(0.5px)',
                boxShadow: '0 0 8px rgba(59, 130, 246, 0.3), inset 0 0 4px rgba(255, 255, 255, 0.2)',
                animation: `raindrop ${Math.random() * 3 + 2}s infinite ease-in-out ${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        {/* Moving Cloud Formations */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute opacity-20"
              style={{
                left: `${Math.random() * 120 - 10}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 400 + 300}px`,
                height: `${Math.random() * 200 + 150}px`,
                background: `radial-gradient(ellipse, rgba(59, 130, 246, 0.4) 0%, rgba(34, 211, 238, 0.3) 40%, transparent 70%)`,
                borderRadius: '50%',
                filter: 'blur(2px)',
                animation: `cloudDrift ${Math.random() * 25 + 20}s infinite linear ${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
        
        {/* Futuristic Grid Pattern */}
        <div className="absolute inset-0 opacity-10" 
             style={{
               backgroundImage: `
                 linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
               `,
               backgroundSize: '50px 50px'
             }}>
        </div>
        
        {/* Floating Geometric Elements */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 20 + 10}px`,
                height: `${Math.random() * 20 + 10}px`,
                background: `linear-gradient(45deg, rgba(59, 130, 246, 0.6), rgba(34, 211, 238, 0.6))`,
                borderRadius: i % 3 === 0 ? '50%' : i % 3 === 1 ? '0%' : '20%',
                boxShadow: '0 0 15px rgba(59, 130, 246, 0.4)',
                animation: `geometricFloat ${Math.random() * 20 + 15}s infinite ease-in-out ${Math.random() * 3}s`
              }}
            />
          ))}
        </div>
        
        {/* Glass Reflection Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/10 backdrop-blur-[1px]"></div>
      </div>
      
      <div className="relative z-20">
        <header className="p-6 backdrop-blur-lg bg-white/10 border-b border-cyan-400/30 shadow-2xl">
          <div className="max-w-7xl mx-auto">
            <Link 
              to="/" 
              className="inline-flex items-center space-x-3 text-cyan-300 hover:text-cyan-100 transition-all duration-300 group"
            >
              <div className="p-3 rounded-2xl bg-cyan-500/20 border border-cyan-400/50 group-hover:bg-cyan-400/30 group-hover:border-cyan-300/70 transition-all backdrop-blur-sm">
                <ArrowLeft className="h-5 w-5" />
              </div>
              <span className="font-semibold text-lg">Return to XBrainer</span>
            </Link>
          </div>
        </header>

        <div className="max-w-7xl mx-auto p-6 space-y-12">
          <div className="text-center space-y-8 py-16">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-400/30 rounded-full animate-pulse blur-xl"></div>
                <div className="relative p-6 rounded-full bg-gradient-to-br from-cyan-500/30 to-blue-600/30 backdrop-blur-sm border border-cyan-400/50">
                  <Brain className="h-20 w-20 text-cyan-300" />
                </div>
              </div>
            </div>
            
            <h1 className="text-7xl font-bold bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent mb-8 leading-tight">
              Join Our Team
            </h1>
            
            <div className="flex justify-center mb-8">
              <div className="flex items-center space-x-4 px-8 py-4 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 backdrop-blur-lg rounded-2xl border border-cyan-400/50 shadow-2xl">
                <Zap className="h-6 w-6 text-cyan-300" />
                <span className="text-cyan-200 font-mono font-semibold text-lg">XBrainer AI Careers</span>
                <Zap className="h-6 w-6 text-cyan-300" />
              </div>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-10 border border-cyan-400/30 shadow-2xl">
                <p className="text-xl text-cyan-100 leading-relaxed mb-6">
                  Help us secure the future of brain-machine interfaces across the globe. We're looking for talented individuals 
                  to join our mission in developing cutting-edge cybersecurity solutions for advanced technologies.
                </p>
                <div className="inline-flex px-6 py-3 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-2xl border border-cyan-400/50">
                  <span className="text-cyan-200 font-semibold text-lg">Available in San Francisco (Remote) & Hyderabad (Remote)</span>
                </div>
              </div>
            </div>
          </div>

          <JobListings />
        </div>
      </div>
    </div>
  );
};

export default Careers;
