
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
      {/* Galaxy Background with Shooting Stars */}
      <div className="absolute inset-0">
        {/* Deep space gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-black"></div>
        
        {/* Nebula effects */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-60 right-32 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-40 left-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Stars */}
        <div className="absolute inset-0">
          {[...Array(200)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                animation: `twinkle ${Math.random() * 4 + 2}s infinite ${Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Shooting Stars */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-70"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 100 + 50}px`,
                transform: 'rotate(-45deg)',
                animation: `shootingStar ${Math.random() * 3 + 2}s infinite ${Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        {/* Galaxy spiral effect */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full bg-gradient-conic from-purple-500/20 via-transparent to-blue-500/20 animate-spin" style={{ animationDuration: '60s' }}></div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        @keyframes shootingStar {
          0% { transform: translateX(-100px) translateY(100px) rotate(-45deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(300px) translateY(-300px) rotate(-45deg); opacity: 0; }
        }
        .bg-gradient-conic {
          background: conic-gradient(var(--tw-gradient-stops));
        }
      `}</style>

      {/* Mouse Follower Effect */}
      <div
        className="absolute pointer-events-none opacity-30 transition-all duration-300 ease-out z-10"
        style={{
          left: mousePosition.x - 150,
          top: mousePosition.y - 150,
          width: 300,
          height: 300,
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, transparent 70%)',
          borderRadius: '50%'
        }}
      />

      <div className="relative z-20">
        {/* Header */}
        <header className="p-6 backdrop-blur-md bg-black/20 border-b border-purple-500/20">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Brain className="h-8 w-8 text-cyan-400" />
                <div className="absolute inset-0 bg-cyan-400/30 rounded-full animate-pulse"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                XBrainer AI
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group"
                >
                  {item}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></div>
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            <div className="hidden md:flex items-center space-x-2 text-sm text-slate-400">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              <span className="font-mono">STEALTH MODE</span>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-6 pb-6 border-t border-purple-500/20">
              <nav className="flex flex-col space-y-4 mt-6">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
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
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
                Building the Firewall<br />
                <span className="text-5xl md:text-7xl">for the Human Brain</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                In a future where brain-machine interfaces connect minds to machines, 
                we're building the world's first neural intrusion prevention system to protect 
                unauthorized access to the human brain.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold border border-cyan-500/50">
                Request Early Access
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-purple-500/50 text-slate-300 hover:bg-purple-900/30 px-8 py-3 text-lg backdrop-blur-sm">
                Learn More
              </Button>
            </div>

            {/* Problem Statement */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              <Card className="bg-slate-900/30 border-red-500/30 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Zap className="h-12 w-12 text-red-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-red-400 mb-2">Unencrypted</h3>
                  <p className="text-slate-300">Neural data flows without protection</p>
                </CardContent>
              </Card>
              <Card className="bg-slate-900/30 border-orange-500/30 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Globe className="h-12 w-12 text-orange-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-orange-400 mb-2">Unfiltered</h3>
                  <p className="text-slate-300">No permission system exists</p>
                </CardContent>
              </Card>
              <Card className="bg-slate-900/30 border-yellow-500/30 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-yellow-400 mb-2">Vulnerable</h3>
                  <p className="text-slate-300">Open to misuse and manipulation</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Three Phases Section */}
        <section className="py-20 px-6 bg-slate-800/20">
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

        {/* AI Capabilities Section */}
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

        {/* Footer CTA */}
        <section className="py-16 px-6 bg-gradient-to-r from-slate-900 to-slate-800">
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

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-slate-700/50 bg-slate-900/50 backdrop-blur-sm">
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
