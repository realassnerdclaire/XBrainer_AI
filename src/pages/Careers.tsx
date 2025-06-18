
import React, { useState } from 'react';
import { ArrowLeft, Zap, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import JobListings from '../components/careers/JobListings';
import { useMousePosition } from '../hooks/useMousePosition';

const Careers: React.FC = () => {
  const mousePosition = useMousePosition();

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-sky-100 to-blue-100 text-slate-800 overflow-hidden relative">
      
      {/* Neural Interface Background with Neon Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gradient overlay with glass effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-200/30 via-blue-100/40 to-sky-300/35 backdrop-blur-sm"></div>
        
        {/* Neural Network Pattern */}
        <div className="absolute inset-0">
          {/* Neural Nodes */}
          {[...Array(15)].map((_, i) => (
            <div
              key={`node-${i}`}
              className="absolute opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `neuralPulse ${Math.random() * 3 + 2}s infinite ease-in-out ${Math.random() * 2}s`
              }}
            >
              <div className="w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50 border border-cyan-300"></div>
              <div className="absolute inset-0 w-3 h-3 bg-cyan-400/30 rounded-full animate-ping"></div>
            </div>
          ))}
          
          {/* Neural Connections */}
          {[...Array(20)].map((_, i) => (
            <div
              key={`connection-${i}`}
              className="absolute opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 200 + 100}px`,
                height: '2px',
                background: `linear-gradient(90deg, transparent 0%, rgba(34, 211, 238, 0.8) 20%, rgba(6, 182, 212, 0.6) 50%, rgba(34, 211, 238, 0.8) 80%, transparent 100%)`,
                transform: `rotate(${Math.random() * 360}deg)`,
                animation: `neuralFlow ${Math.random() * 4 + 3}s infinite linear ${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        {/* Animated Raindrops on Glass */}
        <div className="absolute inset-0">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="absolute opacity-50"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 20 + 10}px`,
                background: `linear-gradient(180deg, rgba(34, 211, 238, 0.6) 0%, rgba(103, 232, 249, 0.4) 50%, rgba(34, 211, 238, 0.3) 100%)`,
                borderRadius: '50% 50% 50% 50% / 20% 20% 80% 80%',
                filter: 'blur(0.3px)',
                boxShadow: '0 0 6px rgba(34, 211, 238, 0.3), inset 0 0 3px rgba(255, 255, 255, 0.2)',
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
                background: `radial-gradient(ellipse, rgba(34, 211, 238, 0.3) 0%, rgba(103, 232, 249, 0.2) 40%, transparent 70%)`,
                borderRadius: '50%',
                filter: 'blur(2px)',
                animation: `cloudDrift ${Math.random() * 25 + 20}s infinite linear ${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
        
        {/* Neon Grid Pattern */}
        <div className="absolute inset-0 opacity-10" 
             style={{
               backgroundImage: `
                 linear-gradient(rgba(34, 211, 238, 0.4) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(34, 211, 238, 0.4) 1px, transparent 1px)
               `,
               backgroundSize: '60px 60px',
               animation: 'gridPulse 4s infinite ease-in-out'
             }}>
        </div>
        
        {/* Floating Brain Wave Patterns */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={`wave-${i}`}
              className="absolute opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 150 + 100}px`,
                height: '20px',
                background: `linear-gradient(90deg, transparent 0%, rgba(34, 211, 238, 0.6) 25%, rgba(6, 182, 212, 0.8) 50%, rgba(34, 211, 238, 0.6) 75%, transparent 100%)`,
                clipPath: 'polygon(0 50%, 10% 0%, 20% 100%, 30% 0%, 40% 100%, 50% 0%, 60% 100%, 70% 0%, 80% 100%, 90% 0%, 100% 50%)',
                animation: `brainWave ${Math.random() * 5 + 3}s infinite ease-in-out ${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        {/* Glass Reflection Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/15 backdrop-blur-[0.5px]"></div>
      </div>
      
      <div className="relative z-20">
        <header className="p-6 backdrop-blur-lg bg-white/30 border-b border-cyan-200/60 shadow-2xl">
          <div className="max-w-7xl mx-auto">
            <Link 
              to="/" 
              className="inline-flex items-center space-x-3 text-cyan-700 hover:text-cyan-600 transition-all duration-300 group"
            >
              <div className="p-3 rounded-2xl bg-cyan-200/40 border border-cyan-300/60 group-hover:bg-cyan-300/50 group-hover:border-cyan-400/70 transition-all backdrop-blur-sm shadow-lg shadow-cyan-200/30">
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
                <div className="absolute inset-0 bg-cyan-400/50 rounded-full animate-pulse blur-2xl"></div>
                <div className="absolute inset-0 bg-cyan-300/30 rounded-full animate-ping"></div>
                <div className="relative p-6 rounded-full bg-gradient-to-br from-cyan-200/50 to-blue-300/50 backdrop-blur-sm border border-cyan-300/60 shadow-2xl shadow-cyan-300/40">
                  <Brain className="h-20 w-20 text-cyan-700" />
                </div>
              </div>
            </div>
            
            <h1 className="text-7xl font-bold bg-gradient-to-r from-cyan-600 via-blue-500 to-cyan-700 bg-clip-text text-transparent mb-8 leading-tight">
              Join Our Team
            </h1>
            
            <div className="flex justify-center mb-8">
              <div className="flex items-center space-x-4 px-8 py-4 bg-gradient-to-r from-cyan-200/40 to-blue-300/40 backdrop-blur-lg rounded-2xl border border-cyan-300/60 shadow-2xl shadow-cyan-200/30">
                <Zap className="h-6 w-6 text-cyan-700 animate-pulse" />
                <span className="text-cyan-800 font-mono font-semibold text-lg">XBrainer AI Careers</span>
                <Zap className="h-6 w-6 text-cyan-700 animate-pulse" />
              </div>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="backdrop-blur-xl bg-gradient-to-br from-white/40 to-white/30 rounded-3xl p-10 border border-cyan-300/50 shadow-2xl shadow-cyan-200/20">
                <p className="text-xl text-cyan-800 leading-relaxed mb-6">
                  Help us secure the future of brain-machine interfaces across the globe. We're looking for talented individuals 
                  to join our mission in developing cutting-edge cybersecurity solutions for advanced technologies.
                </p>
                <div className="inline-flex px-6 py-3 bg-gradient-to-r from-cyan-200/50 to-blue-200/50 rounded-2xl border border-cyan-300/60 shadow-lg shadow-cyan-200/20">
                  <span className="text-cyan-800 font-semibold text-lg">Available in San Francisco & Hyderabad (Remote)</span>
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
