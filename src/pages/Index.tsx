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

  const navItems = ['Why Now', 'Solution', 'Careers', 'Contact'];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Enhanced Galaxy Background with Rainbow Nebula Bursts */}
      <div className="absolute inset-0">
        {/* Deep space multi-layer gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/80 via-purple-950/60 via-blue-950/40 to-black"></div>
        <div className="absolute inset-0 bg-gradient-radial from-purple-900/30 via-violet-800/20 to-transparent"></div>
        
        {/* Rainbow Nebula Bursts - Multiple colorful explosions */}
        <div className="absolute inset-0">
          {/* Main rainbow nebula burst - center */}
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-[1000px] h-[800px] opacity-60">
            <div className="w-full h-full rounded-full blur-3xl animate-pulse" 
                 style={{ 
                   background: 'radial-gradient(circle, #ff0080 0%, #ff8000 15%, #ffff00 30%, #80ff00 45%, #00ff80 60%, #0080ff 75%, #8000ff 90%, transparent 100%)',
                   animationDuration: '6s'
                 }}>
            </div>
          </div>
          
          {/* Secondary rainbow burst - top right */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-50">
            <div className="w-full h-full rounded-full blur-3xl animate-pulse" 
                 style={{ 
                   background: 'radial-gradient(circle, #00ffff 0%, #ff00ff 25%, #ffff00 50%, #ff8000 75%, transparent 100%)',
                   animationDuration: '8s',
                   animationDelay: '2s'
                 }}>
            </div>
          </div>
          
          {/* Tertiary rainbow burst - bottom left */}
          <div className="absolute bottom-0 left-0 w-[700px] h-[500px] opacity-45">
            <div className="w-full h-full rounded-full blur-3xl animate-pulse" 
                 style={{ 
                   background: 'radial-gradient(circle, #8000ff 0%, #ff0080 30%, #00ff80 60%, #0080ff 90%, transparent 100%)',
                   animationDuration: '10s',
                   animationDelay: '4s'
                 }}>
            </div>
          </div>
          
          {/* Additional smaller rainbow bursts */}
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] opacity-40">
            <div className="w-full h-full rounded-full blur-3xl animate-pulse" 
                 style={{ 
                   background: 'radial-gradient(circle, #ff8000 0%, #ffff00 33%, #80ff00 66%, transparent 100%)',
                   animationDuration: '7s',
                   animationDelay: '1s'
                 }}>
            </div>
          </div>
          
          <div className="absolute bottom-1/3 right-1/3 w-[350px] h-[350px] opacity-35">
            <div className="w-full h-full rounded-full blur-3xl animate-pulse" 
                 style={{ 
                   background: 'radial-gradient(circle, #00ff80 0%, #0080ff 50%, #8000ff 100%, transparent 100%)',
                   animationDuration: '9s',
                   animationDelay: '3s'
                 }}>
            </div>
          </div>
        </div>

        {/* Enhanced Star Field with Sparkle Effects */}
        <div className="absolute inset-0">
          {[...Array(500)].map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                background: i % 7 === 0 ? 'linear-gradient(45deg, #ff0080, #ffffff)' : 
                           i % 7 === 1 ? 'linear-gradient(45deg, #00ffff, #ffffff)' : 
                           i % 7 === 2 ? 'linear-gradient(45deg, #ffff00, #ffffff)' :
                           i % 7 === 3 ? 'linear-gradient(45deg, #ff8000, #ffffff)' :
                           i % 7 === 4 ? 'linear-gradient(45deg, #80ff00, #ffffff)' :
                           i % 7 === 5 ? 'linear-gradient(45deg, #8000ff, #ffffff)' :
                           '#ffffff',
                borderRadius: i % 3 === 0 ? '50%' : '0',
                clipPath: i % 3 !== 0 ? 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' : 'none',
                boxShadow: i % 2 === 0 ? '0 0 15px currentColor' : '0 0 8px currentColor',
                animation: `twinkle ${Math.random() * 3 + 2}s infinite ${Math.random() * 2}s, float ${Math.random() * 20 + 10}s infinite linear`
              }}
            />
          ))}
        </div>

        {/* Small Star-shaped Shooting Stars with Rainbow Colors */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute opacity-90"
              style={{
                left: `${Math.random() * 120 - 20}%`,
                top: `${Math.random() * 120 - 20}%`,
                width: `${Math.random() * 60 + 40}px`,
                height: `${Math.random() * 12 + 8}px`,
                background: i % 6 === 0 ? 
                  'linear-gradient(90deg, transparent, #ff0080, #ffffff, #ff0080, transparent)' :
                  i % 6 === 1 ?
                  'linear-gradient(90deg, transparent, #00ffff, #ffffff, #00ffff, transparent)' :
                  i % 6 === 2 ?
                  'linear-gradient(90deg, transparent, #ffff00, #ffffff, #ffff00, transparent)' :
                  i % 6 === 3 ?
                  'linear-gradient(90deg, transparent, #ff8000, #ffffff, #ff8000, transparent)' :
                  i % 6 === 4 ?
                  'linear-gradient(90deg, transparent, #80ff00, #ffffff, #80ff00, transparent)' :
                  'linear-gradient(90deg, transparent, #8000ff, #ffffff, #8000ff, transparent)',
                clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                transform: `rotate(${Math.random() * 45 - 22.5}deg)`,
                animation: `shootingStar ${Math.random() * 4 + 3}s infinite ${Math.random() * 6}s`,
                filter: 'blur(0.3px)'
              }}
            />
          ))}
        </div>

        {/* Enhanced Star Burst Effects with Rainbow Colors */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: '40px',
                height: '40px',
                background: i % 5 === 0 ? 
                  'radial-gradient(circle, #ff0080, transparent 70%)' :
                  i % 5 === 1 ?
                  'radial-gradient(circle, #00ffff, transparent 70%)' :
                  i % 5 === 2 ?
                  'radial-gradient(circle, #ffff00, transparent 70%)' :
                  i % 5 === 3 ?
                  'radial-gradient(circle, #ff8000, transparent 70%)' :
                  'radial-gradient(circle, #8000ff, transparent 70%)',
                clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                animation: `starBurst ${Math.random() * 6 + 4}s infinite ${Math.random() * 8}s`,
                opacity: 0.7
              }}
            />
          ))}
        </div>

        {/* Rotating Galaxy Spiral with Rainbow Colors */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-15">
          <div className="absolute inset-0">
            <div className="w-full h-full animate-spin" style={{ 
              background: 'conic-gradient(from 0deg, transparent, #ff0080, transparent, #00ffff, transparent, #ffff00, transparent, #ff8000, transparent, #80ff00, transparent, #8000ff, transparent)',
              animationDuration: '120s'
            }}></div>
          </div>
        </div>

        {/* Enhanced Particle System with Rainbow Colors */}
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full opacity-80"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                background: i % 6 === 0 ? '#ff0080' : 
                           i % 6 === 1 ? '#00ffff' :
                           i % 6 === 2 ? '#ffff00' : 
                           i % 6 === 3 ? '#ff8000' :
                           i % 6 === 4 ? '#80ff00' : '#8000ff',
                boxShadow: '0 0 8px currentColor',
                animation: `particle ${Math.random() * 15 + 10}s infinite linear`
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
        @keyframes shootingStar {
          0% { transform: translateX(-200px) translateY(200px) rotate(-35deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(400px) translateY(-400px) rotate(-35deg); opacity: 0; }
        }
        @keyframes starBurst {
          0%, 100% { transform: scale(0.3) rotate(0deg); opacity: 0.7; }
          50% { transform: scale(1.2) rotate(180deg); opacity: 1; }
        }
        @keyframes particle {
          0% { transform: translateY(100vh) translateX(0) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-50px) translateX(50px) rotate(360deg); opacity: 0; }
        }
        .bg-gradient-radial {
          background-image: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>

      {/* Enhanced Mouse Follower with Rainbow Effect */}
      <div className="absolute pointer-events-none z-10">
        <div
          className="absolute transition-all duration-500 ease-out opacity-20"
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
        <header className="p-6 backdrop-blur-xl bg-gradient-to-r from-black/40 via-purple-900/30 to-black/40 border-b border-cyan-500/40">
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

            {/* Enhanced Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-gray-300 hover:text-cyan-400 transition-all duration-300 relative group cursor-pointer"
                >
                  <span className="relative z-10">{item}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100"></div>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-full"></div>
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
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                  Building the Firewall
                </span>
                <br />
                <span className="text-5xl md:text-7xl bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  for the Human Brain
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed backdrop-blur-sm bg-black/20 p-6 rounded-2xl border border-purple-500/20">
                In a future where brain-machine interfaces connect minds to machines, 
                we're building the world's first neural intrusion prevention system to protect 
                unauthorized access to the human brain.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold border border-cyan-500/50 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300">
                Request Early Access
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-purple-500/50 text-slate-300 hover:bg-purple-900/30 px-8 py-3 text-lg backdrop-blur-sm bg-black/20 hover:border-purple-400 transition-all duration-300">
                Learn More
              </Button>
            </div>

            {/* Enhanced Problem Statement Cards with Darker Backgrounds */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              <Card className="bg-gradient-to-br from-slate-950/90 to-red-950/80 border-red-500/40 backdrop-blur-sm hover:from-slate-950/95 hover:to-red-950/90 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4">
                    <Zap className="h-12 w-12 text-red-400 mx-auto" />
                    <div className="absolute inset-0 bg-red-400/20 rounded-full blur-xl group-hover:bg-red-400/40 transition-all duration-300"></div>
                  </div>
                  <h3 className="text-xl font-bold text-red-400 mb-2">Unencrypted</h3>
                  <p className="text-slate-200">Neural data flows without protection</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-slate-950/90 to-orange-950/80 border-orange-500/40 backdrop-blur-sm hover:from-slate-950/95 hover:to-orange-950/90 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4">
                    <Globe className="h-12 w-12 text-orange-400 mx-auto" />
                    <div className="absolute inset-0 bg-orange-400/20 rounded-full blur-xl group-hover:bg-orange-400/40 transition-all duration-300"></div>
                  </div>
                  <h3 className="text-xl font-bold text-orange-400 mb-2">Unfiltered</h3>
                  <p className="text-slate-200">No permission system exists</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-slate-950/90 to-yellow-950/80 border-yellow-500/40 backdrop-blur-sm hover:from-slate-950/95 hover:to-yellow-950/90 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4">
                    <Users className="h-12 w-12 text-yellow-400 mx-auto" />
                    <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-xl group-hover:bg-yellow-400/40 transition-all duration-300"></div>
                  </div>
                  <h3 className="text-xl font-bold text-yellow-400 mb-2">Vulnerable</h3>
                  <p className="text-slate-200">Open to misuse and manipulation</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Enhanced Three Phases Section with Creative Design */}
        <section className="py-20 px-6 bg-gradient-to-r from-slate-950/60 to-purple-950/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Our Three-Phase Approach
            </h2>
            
            <div className="space-y-12">
              {phases.map((phase, index) => (
                <Card key={index} className="bg-slate-950/80 border-slate-700/50 backdrop-blur-sm overflow-hidden relative">
                  <CardContent className="p-8 relative z-10">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="flex items-center mb-4">
                          <div className={`p-4 rounded-full bg-gradient-to-r ${phase.gradient} mr-4 shadow-lg`}>
                            <phase.icon className="h-10 w-10 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white">{phase.title}</h3>
                            <p className="text-slate-300 font-mono text-sm bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                              {phase.subtitle}
                            </p>
                          </div>
                        </div>
                        <ul className="space-y-3">
                          {phase.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-slate-200">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className={`relative h-64 rounded-lg bg-gradient-to-br ${phase.gradient} opacity-30 overflow-hidden`}>
                        <div className="absolute inset-0 bg-black/60 rounded-lg"></div>
                        <div className="absolute inset-0" style={{ background: phase.bgPattern, opacity: 0.4 }}></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <phase.icon className="h-32 w-32 text-white/50" />
                        </div>
                        {/* Neural network pattern overlay */}
                        <div className="absolute inset-0">
                          {[...Array(12)].map((_, i) => (
                            <div
                              key={i}
                              className="absolute w-2 h-2 bg-white/30 rounded-full"
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
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI-Powered Neural Defense
            </h2>
            <p className="text-xl text-slate-300 text-center mb-16 max-w-3xl mx-auto">
              Artificial Intelligence is central to every part of our platform, defending brain data 
              dynamically, intelligently, and ethically.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aiCapabilities.map((capability, index) => (
                <Card key={index} className="bg-slate-950/80 border-slate-700/50 backdrop-blur-sm hover:bg-slate-950/90 transition-all duration-300 group">
                  <CardContent className="p-6 text-center h-full flex flex-col">
                    <div className="mb-4 p-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 w-fit mx-auto group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                      <capability.icon className="h-8 w-8 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{capability.title}</h3>
                    <p className="text-slate-200 text-sm flex-grow">{capability.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Footer CTA Section */}
        <section className="py-16 px-6 bg-gradient-to-r from-slate-950/90 via-purple-950/60 to-slate-950/90 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              The Future of Neural Security Starts Now
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join us in building the infrastructure to protect the human brain before it's too late.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 text-lg font-semibold">
              Get Early Access
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="py-8 px-6 border-t border-slate-700/50 bg-gradient-to-r from-black/80 to-purple-900/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Brain className="h-6 w-6 text-blue-400" />
              <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                XBrainer AI
              </span>
            </div>
            <div className="text-slate-400 text-sm">
              © 2024 XBrainer AI. Building the Firewall for the Human Brain.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
