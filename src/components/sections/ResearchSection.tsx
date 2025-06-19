
import React from 'react';
import { Card, CardContent } from '../ui/card';
import { BookOpen, Shield, Cpu, Network, Lock, Eye } from 'lucide-react';

const ResearchSection: React.FC = () => {
  const focusAreas = [
    {
      icon: Shield,
      title: "System-level safeguards for neural data propagation",
      description: "Developing comprehensive protection mechanisms for neural signal flow"
    },
    {
      icon: Cpu,
      title: "Modular control layers for non-invasive and implantable interfaces",
      description: "Creating flexible control architectures for diverse neural interface types"
    },
    {
      icon: Lock,
      title: "Real-time integrity and permission frameworks for neural I/O",
      description: "Building real-time validation and authorization systems for neural interactions"
    },
    {
      icon: Network,
      title: "Interface abstraction models for hardware-agnostic security enforcement",
      description: "Designing universal security models that work across different hardware platforms"
    }
  ];

  return (
    <section id="research" className="py-20 px-6 relative bg-gradient-to-br from-slate-950 via-purple-900 to-slate-900 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
            Research
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>

        {/* Main Research Description */}
        <Card className="bg-slate-900/80 border-purple-500/30 backdrop-blur-xl mb-12">
          <CardContent className="p-8">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 mr-4">
                <BookOpen className="h-8 w-8 text-purple-300" />
              </div>
              <h3 className="text-2xl font-bold text-purple-200">Foundational Infrastructure Research</h3>
            </div>
            <p className="text-lg text-slate-200 leading-relaxed text-center mb-6">
              Our research focuses on creating foundational infrastructure for safe, secure, and controllable neural systems. 
              We work at the intersection of <span className="text-purple-300 font-semibold">brain-computer interfaces</span>, 
              <span className="text-pink-300 font-semibold"> signal governance</span>, and 
              <span className="text-blue-300 font-semibold"> embedded safety</span>, investigating methods to ensure reliability, 
              traceability, and execution boundaries within neurotechnology pipelines.
            </p>
          </CardContent>
        </Card>

        {/* Current Focus Areas */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
            Current Focus Areas
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {focusAreas.map((area, index) => (
              <Card key={index} className="bg-slate-900/70 border-purple-500/40 backdrop-blur-sm hover:bg-slate-900/90 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="p-3 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 mr-4 group-hover:from-purple-500/50 group-hover:to-pink-500/50 transition-all duration-300 flex-shrink-0">
                      <area.icon className="h-6 w-6 text-purple-300" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-purple-200 mb-2 leading-tight">{area.title}</h4>
                      <p className="text-slate-300 text-sm leading-relaxed">{area.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Research Context */}
        <Card className="bg-slate-900/80 border-amber-500/30 backdrop-blur-xl mb-12">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-amber-300 mb-4 text-center">Research Context</h3>
            <p className="text-slate-200 leading-relaxed text-center">
              This work is informed by emerging challenges in brain-machine interaction, including 
              <span className="text-red-300 font-semibold"> unauthorized signal execution</span>, 
              <span className="text-orange-300 font-semibold"> fault-prone actuation</span>, and the 
              <span className="text-yellow-300 font-semibold"> lack of enforcement layers</span> between neural input and downstream response systems. 
              Our goal is to build the foundational control logic that higher-level BCI applications and platforms can securely depend on.
            </p>
          </CardContent>
        </Card>

        {/* Stealth Mode Notice */}
        <Card className="bg-gradient-to-r from-gray-900/80 via-slate-900/80 to-gray-900/80 border-2 border-gray-400/50 backdrop-blur-xl">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-400/20 rounded-full mb-4">
                <Eye className="h-8 w-8 text-gray-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-200 mb-4">Current Status</h3>
              <p className="text-xl text-gray-300 font-medium">
                We are currently in <span className="text-yellow-300 font-bold">stealth mode</span> and are not releasing 
                technical whitepapers publicly at this time.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ResearchSection;
