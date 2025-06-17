
import React, { useEffect, useState } from 'react';
import { Shield, Brain, Zap, Lock, Eye, Database, Cpu, Network, Users, Globe, CheckCircle, ArrowRight, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const phases = [
    {
      title: "Phase 1 - EEG Security Layer",
      subtitle: "Available Now",
      features: [
        "Real-time encryption of EEG/IMU signal streams",
        "Permissions engine for brain data access control",
        "Logging and alert system for unauthorized access",
        "SDK for secure BCI development"
      ],
      icon: Shield,
      gradient: "from-cyan-500 via-blue-500 to-purple-600",
      bgPattern: "radial-gradient(circle at 20% 50%, cyan, transparent 50%), radial-gradient(circle at 80% 20%, blue, transparent 50%)"
    },
    {
      title: "Phase 2 - Implant-Level Defense",
      subtitle: "Mid-term",
      features: [
        "Brainprint authentication via neural patterns",
        "Intrusion detection against memory manipulation",
        "Secure API infrastructure for ethical access",
        "Cognitive injection prevention systems"
      ],
      icon: Brain,
      gradient: "from-purple-500 via-pink-500 to-red-500",
      bgPattern: "radial-gradient(circle at 30% 40%, purple, transparent 50%), radial-gradient(circle at 70% 60%, pink, transparent 50%)"
    },
    {
      title: "Phase 3 - Neural OS Security",
      subtitle: "Future",
      features: [
        "Global identity standard for neural interfaces",
        "Tokenized, consent-based neural permissions",
        "Infrastructure for ethical neuro-enhancement",
        "Comprehensive neural ecosystem protection"
      ],
      icon: Network,
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      bgPattern: "radial-gradient(circle at 60% 30%, emerald, transparent 50%), radial-gradient(circle at 40% 70%, teal, transparent 50%)"
    }
  ];

  const aiCapabilities = [
    {
      title: "Cognitive Intrusion Detection",
      description: "Unsupervised learning identifies abnormal brain patterns and unauthorized access attempts in real-time",
      icon: Eye
    },
    {
      title: "Neural Privacy Filters",
      description: "Deep learning automatically detects and blocks sensitive cognitive signatures and profiling attempts",
      icon: Lock
    },
    {
      title: "Brain-Based Authentication",
      description: "Personalized EEG-based biometric login that's secure, passive, and resistant to spoofing",
      icon: Cpu
    },
    {
      title: "Adaptive Signal Governance",
      description: "AI agents classify signal context and apply intelligent access policies that learn over time",
      icon: Database
    }
  ];

  const problemCards = [
    {
      title: "Unencrypted",
      description: "Neural data flows without protection",
      icon: Zap,
      color: "red",
      action: () => console.log("Learn about unencrypted neural data")
    },
    {
      title: "Unfiltered", 
      description: "No permission system exists",
      icon: Globe,
      color: "orange",
      action: () => console.log("Learn about unfiltered access")
    },
    {
      title: "Vulnerable",
      description: "Open to misuse and manipulation", 
      icon: Users,
      color: "yellow",
      action: () => console.log("Learn about vulnerabilities")
    }
  ];

  const navItems = ['Why Now', 'Solution', 'Careers', 'Contact'];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Enhanced Galaxy Background with Natural Moving Nebula Throughout Page */}
      <div className="absolute inset-0">
        {/* Deep space multi-layer gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/90 via-purple-950/70 via-blue-950/50 to-black"></div>
        <div className="absolute inset-0 bg-gradient-radial from-purple-900/40 via-violet-800/30 to-transparent"></div>
        
        {/* Natural Moving Rainbow Nebula Throughout Entire Page - More Organic Shapes */}
        <div className="absolute inset-0">
          {/* Main large nebula - top section with very organic, irregular cloud-like shape */}
          <div className="absolute -top-40 left-1/4 transform -translate-x-1/2 w-[1800px] h-[1400px] opacity-15">
            <div className="w-full h-full blur-3xl animate-pulse" 
                 style={{ 
                   background: `
                     radial-gradient(ellipse 60% 45% at 35% 70%, rgba(255, 0, 128, 0.4) 0%, transparent 35%),
                     radial-gradient(ellipse 45% 65% at 75% 40%, rgba(255, 128, 0, 0.3) 0%, transparent 30%),
                     radial-gradient(ellipse 70% 35% at 20% 25%, rgba(255, 255, 0, 0.3) 0%, transparent 40%),
                     radial-gradient(ellipse 35% 55% at 85% 75%, rgba(128, 255, 0, 0.4) 0%, transparent 35%),
                     radial-gradient(ellipse 55% 40% at 15% 85%, rgba(0, 255, 128, 0.3) 0%, transparent 30%),
                     radial-gradient(ellipse 40% 60% at 65% 15%, rgba(0, 128, 255, 0.4) 0%, transparent 40%),
                     radial-gradient(ellipse 50% 35% at 90% 45%, rgba(128, 0, 255, 0.3) 0%, transparent 35%)
                   `,
                   clipPath: 'polygon(20% 5%, 40% 2%, 65% 8%, 85% 18%, 95% 35%, 90% 58%, 85% 78%, 70% 92%, 50% 95%, 30% 90%, 12% 82%, 5% 65%, 8% 45%, 15% 25%)',
                   animationDuration: '15s',
                   animation: 'nebulaFloat 25s infinite ease-in-out'
                 }}>
            </div>
          </div>
          
          {/* Middle section nebula - center area with flowing organic shape */}
          <div className="absolute top-1/3 right-1/6 w-[1400px] h-[1200px] opacity-12">
            <div className="w-full h-full blur-3xl animate-pulse" 
                 style={{ 
                   background: `
                     radial-gradient(ellipse 55% 70% at 40% 35%, rgba(0, 255, 255, 0.4) 0%, transparent 35%),
                     radial-gradient(ellipse 70% 45% at 80% 65%, rgba(255, 0, 255, 0.3) 0%, transparent 40%),
                     radial-gradient(ellipse 45% 65% at 15% 75%, rgba(255, 255, 0, 0.3) 0%, transparent 30%),
                     radial-gradient(ellipse 60% 40% at 90% 20%, rgba(255, 128, 0, 0.4) 0%, transparent 35%),
                     radial-gradient(ellipse 35% 75% at 25% 50%, rgba(128, 0, 255, 0.3) 0%, transparent 40%)
                   `,
                   clipPath: 'polygon(25% 8%, 50% 3%, 75% 12%, 90% 28%, 92% 48%, 88% 68%, 78% 85%, 58% 95%, 38% 92%, 18% 85%, 8% 70%, 5% 50%, 10% 30%, 20% 15%)',
                   animationDuration: '18s',
                   animationDelay: '4s',
                   animation: 'nebulaFloat2 30s infinite ease-in-out 4s'
                 }}>
            </div>
          </div>
          
          {/* Bottom section nebula - footer area with sprawling organic form */}
          <div className="absolute bottom-0 left-1/3 w-[1600px] h-[1000px] opacity-10">
            <div className="w-full h-full blur-3xl animate-pulse" 
                 style={{ 
                   background: `
                     radial-gradient(ellipse 80% 50% at 60% 40%, rgba(128, 0, 255, 0.3) 0%, transparent 40%),
                     radial-gradient(ellipse 45% 70% at 25% 70%, rgba(255, 0, 128, 0.3) 0%, transparent 35%),
                     radial-gradient(ellipse 65% 40% at 85% 25%, rgba(0, 255, 128, 0.3) 0%, transparent 30%),
                     radial-gradient(ellipse 40% 60% at 10% 55%, rgba(0, 128, 255, 0.4) 0%, transparent 35%),
                     radial-gradient(ellipse 55% 45% at 75% 80%, rgba(255, 255, 0, 0.3) 0%, transparent 30%)
                   `,
                   clipPath: 'polygon(15% 10%, 35% 2%, 60% 8%, 80% 20%, 95% 40%, 90% 60%, 82% 80%, 68% 92%, 48% 95%, 28% 88%, 12% 78%, 5% 60%, 8% 40%, 12% 20%)',
                   animationDuration: '20s',
                   animationDelay: '8s',
                   animation: 'nebulaFloat3 35s infinite ease-in-out 8s'
                 }}>
            </div>
          </div>
          
          {/* Side nebula clusters for full coverage */}
          <div className="absolute top-2/3 -left-20 w-[1000px] h-[800px] opacity-8">
            <div className="w-full h-full blur-3xl animate-pulse" 
                 style={{ 
                   background: `
                     radial-gradient(ellipse 70% 60% at 50% 50%, rgba(255, 128, 0, 0.3) 0%, transparent 35%),
                     radial-gradient(ellipse 50% 80% at 25% 75%, rgba(255, 255, 0, 0.3) 0%, transparent 30%),
                     radial-gradient(ellipse 60% 45% at 80% 30%, rgba(128, 255, 0, 0.3) 0%, transparent 25%)
                   `,
                   clipPath: 'polygon(30% 5%, 55% 0%, 80% 15%, 92% 35%, 95% 55%, 88% 75%, 75% 88%, 55% 95%, 35% 90%, 18% 80%, 10% 60%, 15% 40%, 25% 20%)',
                   animationDuration: '16s',
                   animationDelay: '2s',
                   animation: 'nebulaFloat4 28s infinite ease-in-out 2s'
                 }}>
            </div>
          </div>

          <div className="absolute top-1/4 -right-40 w-[1200px] h-[900px] opacity-9">
            <div className="w-full h-full blur-3xl animate-pulse" 
                 style={{ 
                   background: `
                     radial-gradient(ellipse 65% 55% at 45% 45%, rgba(0, 255, 255, 0.3) 0%, transparent 35%),
                     radial-gradient(ellipse 45% 70% at 75% 25%, rgba(128, 0, 255, 0.3) 0%, transparent 30%),
                     radial-gradient(ellipse 70% 40% at 20% 80%, rgba(255, 0, 255, 0.3) 0%, transparent 25%)
                   `,
                   clipPath: 'polygon(25% 8%, 50% 0%, 75% 12%, 88% 30%, 95% 50%, 88% 70%, 75% 85%, 50% 95%, 25% 88%, 12% 70%, 5% 50%, 12% 30%)',
                   animationDuration: '14s',
                   animationDelay: '6s',
                   animation: 'nebulaFloat5 24s infinite ease-in-out 6s'
                 }}>
            </div>
          </div>
        </div>

        {/* Enhanced Star Field with More Variety */}
        <div className="absolute inset-0">
          {[...Array(600)].map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                background: i % 8 === 0 ? 'linear-gradient(45deg, #ff0080, #ffffff)' : 
                           i % 8 === 1 ? 'linear-gradient(45deg, #00ffff, #ffffff)' : 
                           i % 8 === 2 ? 'linear-gradient(45deg, #ffff00, #ffffff)' :
                           i % 8 === 3 ? 'linear-gradient(45deg, #ff8000, #ffffff)' :
                           i % 8 === 4 ? 'linear-gradient(45deg, #80ff00, #ffffff)' :
                           i % 8 === 5 ? 'linear-gradient(45deg, #8000ff, #ffffff)' :
                           i % 8 === 6 ? 'linear-gradient(45deg, #ff4080, #ffffff)' :
                           '#ffffff',
                borderRadius: i % 3 === 0 ? '50%' : '0',
                clipPath: i % 3 !== 0 ? 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' : 'none',
                boxShadow: i % 2 === 0 ? '0 0 15px currentColor' : '0 0 8px currentColor',
                animation: `twinkle ${Math.random() * 3 + 2}s infinite ${Math.random() * 2}s, float ${Math.random() * 20 + 10}s infinite linear`
              }}
            />
          ))}
        </div>

        {/* Very Transparent Colorful Star-shaped Flying Stars */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute opacity-8"
              style={{
                left: `${Math.random() * 120 - 20}%`,
                top: `${Math.random() * 120 - 20}%`,
                width: `${Math.random() * 15 + 8}px`,
                height: `${Math.random() * 15 + 8}px`,
                background: i % 7 === 0 ? 
                  'radial-gradient(circle, rgba(255, 0, 128, 0.15) 0%, rgba(255, 0, 128, 0.05) 50%, transparent 100%)' :
                  i % 7 === 1 ?
                  'radial-gradient(circle, rgba(0, 255, 255, 0.15) 0%, rgba(0, 255, 255, 0.05) 50%, transparent 100%)' :
                  i % 7 === 2 ?
                  'radial-gradient(circle, rgba(255, 255, 0, 0.15) 0%, rgba(255, 255, 0, 0.05) 50%, transparent 100%)' :
                  i % 7 === 3 ?
                  'radial-gradient(circle, rgba(255, 128, 0, 0.15) 0%, rgba(255, 128, 0, 0.05) 50%, transparent 100%)' :
                  i % 7 === 4 ?
                  'radial-gradient(circle, rgba(128, 255, 0, 0.15) 0%, rgba(128, 255, 0, 0.05) 50%, transparent 100%)' :
                  i % 7 === 5 ?
                  'radial-gradient(circle, rgba(128, 0, 255, 0.15) 0%, rgba(128, 0, 255, 0.05) 50%, transparent 100%)' :
                  'radial-gradient(circle, rgba(255, 64, 128, 0.15) 0%, rgba(255, 64, 128, 0.05) 50%, transparent 100%)',
                clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                transform: `rotate(${Math.random() * 360}deg)`,
                animation: `flyingStar ${Math.random() * 12 + 10}s infinite linear ${Math.random() * 8}s`,
                filter: 'blur(0.5px)'
              }}
            />
          ))}
        </div>

        {/* Enhanced Star Burst Effects with More Variety */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 20 + 30}px`,
                height: `${Math.random() * 20 + 30}px`,
                background: i % 6 === 0 ? 
                  'radial-gradient(circle, rgba(255, 0, 128, 0.9) 0%, transparent 70%)' :
                  i % 6 === 1 ?
                  'radial-gradient(circle, rgba(0, 255, 255, 0.9) 0%, transparent 70%)' :
                  i % 6 === 2 ?
                  'radial-gradient(circle, rgba(255, 255, 0, 0.9) 0%, transparent 70%)' :
                  i % 6 === 3 ?
                  'radial-gradient(circle, rgba(255, 128, 0, 0.9) 0%, transparent 70%)' :
                  i % 6 === 4 ?
                  'radial-gradient(circle, rgba(128, 255, 0, 0.9) 0%, transparent 70%)' :
                  'radial-gradient(circle, rgba(128, 0, 255, 0.9) 0%, transparent 70%)',
                clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                animation: `starBurst ${Math.random() * 8 + 6}s infinite ${Math.random() * 10}s`,
                opacity: 0.8
              }}
            />
          ))}
        </div>

        {/* Rotating Galaxy Spiral with Enhanced Colors */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20">
          <div className="absolute inset-0">
            <div className="w-full h-full animate-spin" style={{ 
              background: 'conic-gradient(from 0deg, transparent, #ff0080, transparent, #00ffff, transparent, #ffff00, transparent, #ff8000, transparent, #80ff00, transparent, #8000ff, transparent, #ff4080, transparent)',
              animationDuration: '150s'
            }}></div>
          </div>
        </div>

        {/* Enhanced Particle System */}
        <div className="absolute inset-0">
          {[...Array(120)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full opacity-70"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                background: i % 7 === 0 ? '#ff0080' : 
                           i % 7 === 1 ? '#00ffff' :
                           i % 7 === 2 ? '#ffff00' : 
                           i % 7 === 3 ? '#ff8000' :
                           i % 7 === 4 ? '#80ff00' : 
                           i % 7 === 5 ? '#8000ff' : '#ff4080',
                boxShadow: '0 0 12px currentColor',
                animation: `particle ${Math.random() * 20 + 15}s infinite linear`
              }}
            />
          ))}
        </div>
      </div>

      {/* Enhanced CSS Animations */}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.4); }
        }
        @keyframes float {
          0% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          33% { transform: translateY(-12px) translateX(6px) rotate(120deg); }
          66% { transform: translateY(6px) translateX(-6px) rotate(240deg); }
          100% { transform: translateY(0px) translateX(0px) rotate(360deg); }
        }
        @keyframes flyingStar {
          0% { transform: translateX(-100px) translateY(100px) rotate(0deg); opacity: 0; }
          10% { opacity: 0.15; }
          90% { opacity: 0.15; }
          100% { transform: translateX(calc(100vw + 100px)) translateY(-100px) rotate(360deg); opacity: 0; }
        }
        @keyframes starBurst {
          0%, 100% { transform: scale(0.3) rotate(0deg); opacity: 0.8; }
          50% { transform: scale(1.5) rotate(180deg); opacity: 1; }
        }
        @keyframes particle {
          0% { transform: translateY(100vh) translateX(0) rotate(0deg); opacity: 0; }
          10% { opacity: 0.7; }
          90% { opacity: 0.7; }
          100% { transform: translateY(-50px) translateX(100px) rotate(360deg); opacity: 0; }
        }
        @keyframes nebulaFloat {
          0%, 100% { transform: translateX(-30px) translateY(15px) rotate(0deg); }
          25% { transform: translateX(-15px) translateY(-5px) rotate(1deg); }
          50% { transform: translateX(-45px) translateY(25px) rotate(-0.5deg); }
          75% { transform: translateX(-25px) translateY(5px) rotate(0.5deg); }
        }
        @keyframes nebulaFloat2 {
          0%, 100% { transform: translateX(8px) translateY(-12px) rotate(0deg); }
          33% { transform: translateX(18px) translateY(8px) rotate(-0.5deg); }
          66% { transform: translateX(-8px) translateY(-18px) rotate(0.5deg); }
        }
        @keyframes nebulaFloat3 {
          0%, 100% { transform: translateX(-12px) translateY(18px) rotate(0deg); }
          50% { transform: translateX(15px) translateY(-12px) rotate(-1deg); }
        }
        @keyframes nebulaFloat4 {
          0%, 100% { transform: translateX(10px) translateY(-8px) rotate(0deg); }
          25% { transform: translateX(-10px) translateY(15px) rotate(0.5deg); }
          75% { transform: translateX(18px) translateY(3px) rotate(-0.5deg); }
        }
        @keyframes nebulaFloat5 {
          0%, 100% { transform: translateX(-8px) translateY(12px) rotate(0deg); }
          40% { transform: translateX(12px) translateY(-15px) rotate(0.5deg); }
          80% { transform: translateX(-15px) translateY(8px) rotate(-0.5deg); }
        }
        @keyframes cardHover {
          0% { transform: translateY(0) scale(1); }
          100% { transform: translateY(-8px) scale(1.03); }
        }
        .bg-gradient-radial {
          background-image: radial-gradient(circle, var(--tw-gradient-stops));
        }
        .card-hover-animation {
          transition: all 0.3s ease;
        }
        .card-hover-animation:hover {
          animation: cardHover 0.3s ease forwards;
        }
      `}</style>

      {/* Enhanced Mouse Follower with Rainbow Effect */}
      <div className="absolute pointer-events-none z-10">
        <div
          className="absolute transition-all duration-500 ease-out opacity-25"
          style={{
            left: mousePosition.x - 250,
            top: mousePosition.y - 250,
            width: 500,
            height: 500,
            background: 'radial-gradient(circle, rgba(255, 0, 128, 0.8) 0%, rgba(0, 255, 255, 0.6) 20%, rgba(255, 255, 0, 0.4) 40%, rgba(128, 0, 255, 0.3) 60%, transparent 80%)',
            borderRadius: '50%'
          }}
        />
        <div
          className="absolute transition-all duration-300 ease-out opacity-40"
          style={{
            left: mousePosition.x - 120,
            top: mousePosition.y - 120,
            width: 240,
            height: 240,
            background: 'radial-gradient(circle, rgba(255, 128, 0, 0.9) 0%, rgba(128, 255, 0, 0.6) 30%, transparent 60%)',
            borderRadius: '50%'
          }}
        />
      </div>

      <div className="relative z-20">
        {/* Header Section */}
        <header className="p-6 backdrop-blur-xl bg-gradient-to-r from-black/60 via-purple-900/40 to-black/60 border-b border-cyan-500/50">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Brain className="h-8 w-8 text-cyan-400" />
                <div className="absolute inset-0 bg-cyan-400/60 rounded-full animate-ping"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-40 animate-pulse"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                XBrainer AI
              </span>
            </div>

            {/* Enhanced Desktop Navigation with Neon Hover Effects */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-gray-300 hover:text-white transition-all duration-300 relative group cursor-pointer px-4 py-2"
                >
                  <span className="relative z-10">{item}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-purple-500/0 rounded-lg opacity-0 group-hover:opacity-100 group-hover:from-cyan-500/40 group-hover:to-purple-500/40 transition-all duration-300 transform scale-95 group-hover:scale-100"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 to-purple-400/0 rounded-lg opacity-0 group-hover:opacity-100 group-hover:from-cyan-400/30 group-hover:to-purple-400/30 transition-all duration-300 shadow-lg group-hover:shadow-cyan-500/50"></div>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-full shadow-sm group-hover:shadow-cyan-400/50"></div>
                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300" style={{
                    background: 'radial-gradient(circle at center, rgba(0, 255, 255, 0.2) 0%, rgba(128, 0, 255, 0.2) 50%, transparent 100%)',
                    filter: 'blur(8px)'
                  }}></div>
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white relative z-10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {/* Enhanced Status Indicator */}
            <div className="hidden md:flex items-center space-x-2 text-sm text-slate-400">
              <div className="relative">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
              </div>
              <span className="font-mono bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">STEALTH MODE</span>
            </div>
          </div>

          {/* Mobile Menu with Glassmorphism */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-6 pb-6 border-t border-purple-500/30 backdrop-blur-xl bg-black/30 rounded-lg">
              <nav className="flex flex-col space-y-4 mt-6">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 p-2 rounded-lg hover:bg-purple-900/40"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <section className="py-20 px-6 relative">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent animate-pulse">
                  Building the Firewall
                </span>
                <br />
                <span className="text-5xl md:text-7xl bg-gradient-to-r from-blue-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                  for the Human Brain
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-100 max-w-4xl mx-auto leading-relaxed backdrop-blur-sm bg-black/40 p-6 rounded-2xl border border-purple-500/30">
                In a future where brain-machine interfaces connect minds to machines, 
                we're building the world's first neural intrusion prevention system to protect 
                unauthorized access to the human brain.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-3 text-lg font-semibold border border-cyan-400/50 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300">
                Request Early Access
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-purple-400/60 text-slate-100 hover:bg-purple-900/40 px-8 py-3 text-lg backdrop-blur-sm bg-black/30 hover:border-purple-300 transition-all duration-300">
                Learn More
              </Button>
            </div>

            {/* Enhanced Problem Statement Cards with Dark Backgrounds and Click Functionality */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {problemCards.map((card, index) => (
                <Card 
                  key={index}
                  onClick={card.action}
                  className={`bg-gradient-to-br from-slate-950/98 to-slate-900/95 border-${card.color}-500/60 backdrop-blur-sm hover:from-slate-900/99 hover:to-slate-800/98 transition-all duration-300 group cursor-pointer card-hover-animation hover:border-${card.color}-400/80 hover:shadow-lg hover:shadow-${card.color}-500/25`}
                >
                  <CardContent className="p-6 text-center">
                    <div className="relative mb-4">
                      <card.icon className={`h-12 w-12 text-${card.color}-200 mx-auto`} />
                      <div className={`absolute inset-0 bg-${card.color}-300/30 rounded-full blur-xl group-hover:bg-${card.color}-300/50 transition-all duration-300`}></div>
                    </div>
                    <h3 className={`text-xl font-bold text-${card.color}-100 mb-2`}>{card.title}</h3>
                    <p className="text-white">{card.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Three Phases Section with Darker Backgrounds */}
        <section className="py-20 px-6 bg-gradient-to-r from-slate-950/80 to-purple-950/60 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
              Our Three-Phase Approach
            </h2>
            
            <div className="space-y-12">
              {phases.map((phase, index) => (
                <Card key={index} className="bg-slate-950/95 border-slate-600/60 backdrop-blur-sm overflow-hidden relative">
                  <CardContent className="p-8 relative z-10">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="flex items-center mb-4">
                          <div className={`p-4 rounded-full bg-gradient-to-r ${phase.gradient} mr-4 shadow-lg`}>
                            <phase.icon className="h-10 w-10 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white">{phase.title}</h3>
                            <p className="text-cyan-200 font-mono text-sm bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                              {phase.subtitle}
                            </p>
                          </div>
                        </div>
                        <ul className="space-y-3">
                          {phase.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-300 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-100">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className={`relative h-64 rounded-lg bg-gradient-to-br ${phase.gradient} opacity-40 overflow-hidden`}>
                        <div className="absolute inset-0 bg-black/70 rounded-lg"></div>
                        <div className="absolute inset-0" style={{ background: phase.bgPattern, opacity: 0.5 }}></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <phase.icon className="h-32 w-32 text-white/60" />
                        </div>
                        {/* Neural network pattern overlay */}
                        <div className="absolute inset-0">
                          {[...Array(12)].map((_, i) => (
                            <div
                              key={i}
                              className="absolute w-2 h-2 bg-white/40 rounded-full"
                              style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animation: `twinkle ${Math.random() * 3 + 2}s infinite ${Math.random() * 2}s`
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced AI Capabilities Section with Darker Cards */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              AI-Powered Neural Defense
            </h2>
            <p className="text-xl text-slate-100 text-center mb-16 max-w-3xl mx-auto">
              Artificial Intelligence is central to every part of our platform, defending brain data 
              dynamically, intelligently, and ethically.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aiCapabilities.map((capability, index) => (
                <Card key={index} className="bg-slate-950/95 border-slate-600/60 backdrop-blur-sm hover:bg-slate-950/98 transition-all duration-300 group">
                  <CardContent className="p-6 text-center h-full flex flex-col">
                    <div className="mb-4 p-3 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 w-fit mx-auto group-hover:from-blue-500/40 group-hover:to-purple-500/40 transition-all duration-300">
                      <capability.icon className="h-8 w-8 text-blue-300" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{capability.title}</h3>
                    <p className="text-gray-200 text-sm flex-grow">{capability.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Footer CTA Section */}
        <section className="py-16 px-6 bg-gradient-to-r from-slate-950/95 via-purple-950/70 to-slate-950/95 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              The Future of Neural Security Starts Now
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Join us in building the infrastructure to protect the human brain before it's too late.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-12 py-4 text-lg font-semibold">
              Get Early Access
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="py-8 px-6 border-t border-slate-600/60 bg-gradient-to-r from-black/90 to-purple-900/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Brain className="h-6 w-6 text-blue-300" />
              <span className="text-lg font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                XBrainer AI
              </span>
            </div>
            <div className="text-slate-300 text-sm">
              © 2024 XBrainer AI. Building the Firewall for the Human Brain.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
