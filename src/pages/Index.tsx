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
      gradient: "from-blue-500 to-cyan-400"
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
      gradient: "from-purple-500 to-pink-400"
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
      gradient: "from-violet-500 to-purple-400"
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
      {/* Advanced Galaxy Background with Dynamic Effects */}
      <div className="absolute inset-0">
        {/* Multi-layered deep space gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-purple-900/30 via-blue-900/20 to-black"></div>
        <div className="absolute inset-0 bg-gradient-radial from-purple-800/10 via-transparent to-transparent"></div>
        
        {/* Animated Nebula Clouds */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-[600px] h-[600px] bg-gradient-radial from-purple-500/20 via-purple-600/10 to-transparent rounded-full blur-3xl animate-pulse opacity-60" style={{ animationDuration: '4s' }}></div>
          <div className="absolute top-40 right-20 w-[500px] h-[500px] bg-gradient-radial from-cyan-500/15 via-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse opacity-50" style={{ animationDuration: '6s', animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-[400px] h-[400px] bg-gradient-radial from-pink-500/15 via-violet-500/10 to-transparent rounded-full blur-3xl animate-pulse opacity-40" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-[350px] h-[350px] bg-gradient-radial from-emerald-500/12 via-teal-500/8 to-transparent rounded-full blur-3xl animate-pulse opacity-35" style={{ animationDuration: '7s', animationDelay: '3s' }}></div>
        </div>

        {/* Enhanced Star Field */}
        <div className="absolute inset-0">
          {[...Array(300)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                background: i % 5 === 0 ? 'linear-gradient(45deg, #00f5ff, #ffffff)' : 
                           i % 7 === 0 ? 'linear-gradient(45deg, #ff00ff, #ffffff)' : 
                           '#ffffff',
                boxShadow: i % 3 === 0 ? '0 0 6px currentColor' : 'none',
                animation: `twinkle ${Math.random() * 3 + 2}s infinite ${Math.random() * 2}s, float ${Math.random() * 20 + 10}s infinite linear`
              }}
            />
          ))}
        </div>

        {/* Multiple Shooting Star Layers */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px opacity-80"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 150 + 100}px`,
                background: i % 2 === 0 ? 
                  'linear-gradient(90deg, transparent, #00f5ff, #ffffff, transparent)' :
                  'linear-gradient(90deg, transparent, #ff00ff, #ffffff, transparent)',
                transform: 'rotate(-45deg)',
                animation: `shootingStar ${Math.random() * 4 + 3}s infinite ${Math.random() * 6}s`
              }}
            />
          ))}
        </div>

        {/* Rotating Galaxy Spiral */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-15">
          <div className="absolute inset-0">
            <div className="w-full h-full animate-spin" style={{ 
              background: 'conic-gradient(from 0deg, transparent, #8b5cf6, transparent, #06b6d4, transparent, #ec4899, transparent)',
              animationDuration: '120s'
            }}></div>
          </div>
        </div>

        {/* Particle System */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `particle ${Math.random() * 15 + 10}s infinite linear`
              }}
            />
          ))}
        </div>
      </div>

      {/* Enhanced CSS Animations */}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes float {
          0% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-10px) translateX(5px); }
          66% { transform: translateY(5px) translateX(-5px); }
          100% { transform: translateY(0px) translateX(0px); }
        }
        @keyframes shootingStar {
          0% { transform: translateX(-200px) translateY(200px) rotate(-45deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(400px) translateY(-400px) rotate(-45deg); opacity: 0; }
        }
        @keyframes particle {
          0% { transform: translateY(100vh) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100px) translateX(50px); opacity: 0; }
        }
        .bg-gradient-radial {
          background-image: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>

      {/* Enhanced Mouse Follower with Multiple Layers */}
      <div className="absolute pointer-events-none z-10">
        <div
          className="absolute transition-all duration-500 ease-out opacity-20"
          style={{
            left: mousePosition.x - 200,
            top: mousePosition.y - 200,
            width: 400,
            height: 400,
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.6) 0%, rgba(168, 85, 247, 0.4) 30%, transparent 70%)',
            borderRadius: '50%'
          }}
        />
        <div
          className="absolute transition-all duration-300 ease-out opacity-30"
          style={{
            left: mousePosition.x - 100,
            top: mousePosition.y - 100,
            width: 200,
            height: 200,
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.8) 0%, transparent 60%)',
            borderRadius: '50%'
          }}
        />
      </div>

      <div className="relative z-20">
        {/* Enhanced Glassmorphism Header */}
        <header className="p-6 backdrop-blur-xl bg-gradient-to-r from-black/30 via-purple-900/20 to-black/30 border-b border-cyan-500/30">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Brain className="h-8 w-8 text-cyan-400" />
                <div className="absolute inset-0 bg-cyan-400/50 rounded-full animate-ping"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-30 animate-pulse"></div>
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
            <div className="md:hidden mt-6 pb-6 border-t border-purple-500/30 backdrop-blur-xl bg-black/20 rounded-lg">
              <nav className="flex flex-col space-y-4 mt-6">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 p-2 rounded-lg hover:bg-purple-900/30"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </header>

        {/* Enhanced Hero Section */}
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

            {/* Enhanced Problem Statement Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              <Card className="bg-gradient-to-br from-slate-900/50 to-red-900/30 border-red-500/40 backdrop-blur-sm hover:from-slate-900/70 hover:to-red-900/50 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4">
                    <Zap className="h-12 w-12 text-red-400 mx-auto" />
                    <div className="absolute inset-0 bg-red-400/20 rounded-full blur-xl group-hover:bg-red-400/40 transition-all duration-300"></div>
                  </div>
                  <h3 className="text-xl font-bold text-red-400 mb-2">Unencrypted</h3>
                  <p className="text-slate-300">Neural data flows without protection</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-slate-900/50 to-orange-900/30 border-orange-500/40 backdrop-blur-sm hover:from-slate-900/70 hover:to-orange-900/50 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4">
                    <Globe className="h-12 w-12 text-orange-400 mx-auto" />
                    <div className="absolute inset-0 bg-orange-400/20 rounded-full blur-xl group-hover:bg-orange-400/40 transition-all duration-300"></div>
                  </div>
                  <h3 className="text-xl font-bold text-orange-400 mb-2">Unfiltered</h3>
                  <p className="text-slate-300">No permission system exists</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-slate-900/50 to-yellow-900/30 border-yellow-500/40 backdrop-blur-sm hover:from-slate-900/70 hover:to-yellow-900/50 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4">
                    <Users className="h-12 w-12 text-yellow-400 mx-auto" />
                    <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-xl group-hover:bg-yellow-400/40 transition-all duration-300"></div>
                  </div>
                  <h3 className="text-xl font-bold text-yellow-400 mb-2">Vulnerable</h3>
                  <p className="text-slate-300">Open to misuse and manipulation</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Enhanced Three Phases Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-slate-900/40 to-purple-900/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Our Three-Phase Approach
            </h2>
            
            <div className="space-y-12">
              {phases.map((phase, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="flex items-center mb-4">
                          <div className={`p-3 rounded-full bg-gradient-to-r ${phase.gradient} mr-4`}>
                            <phase.icon className="h-8 w-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white">{phase.title}</h3>
                            <p className="text-slate-400 font-mono">{phase.subtitle}</p>
                          </div>
                        </div>
                        <ul className="space-y-3">
                          {phase.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-slate-300">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className={`relative h-64 rounded-lg bg-gradient-to-br ${phase.gradient} opacity-20`}>
                        <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <phase.icon className="h-24 w-24 text-white/30" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced AI Capabilities Section */}
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
                <Card key={index} className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300 group">
                  <CardContent className="p-6 text-center h-full flex flex-col">
                    <div className="mb-4 p-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 w-fit mx-auto group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                      <capability.icon className="h-8 w-8 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{capability.title}</h3>
                    <p className="text-slate-300 text-sm flex-grow">{capability.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Footer CTA */}
        <section className="py-16 px-6 bg-gradient-to-r from-slate-900/80 via-purple-900/40 to-slate-900/80 backdrop-blur-sm">
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

        {/* Enhanced Footer */}
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
