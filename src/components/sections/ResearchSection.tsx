
import React from 'react';
import { Card, CardContent } from '../ui/card';
import { BookOpen, Shield, Cpu, Network, Lock, Eye, Activity, Zap, Settings, Brain } from 'lucide-react';

const ResearchSection: React.FC = () => {
  const researchAreas = [
    {
      icon: Shield,
      title: "Neural I/O boundary enforcement",
      description: "Defining how neural signals are routed, gated, or halted in real time prior to execution",
      color: "from-blue-500/30 to-indigo-500/30",
      textColor: "text-blue-300"
    },
    {
      icon: Activity,
      title: "Signal integrity evaluation",
      description: "Using non-inferential techniques such as frequency-domain anomaly detection, entropy range validation, and signal pattern drift analysis",
      color: "from-green-500/30 to-emerald-500/30",
      textColor: "text-green-300"
    },
    {
      icon: Cpu,
      title: "Concurrency and arbitration models",
      description: "Managing multiple neural control tasks with isolation constraints, temporal priorities, and conditional execution logic",
      color: "from-purple-500/30 to-pink-500/30",
      textColor: "text-purple-300"
    },
    {
      icon: Network,
      title: "Modality-agnostic interfacing",
      description: "Supporting diverse hardware classes (e.g., EEG, ECoG, IMU, implants) through a consistent internal abstraction without relying on signal interpretation",
      color: "from-cyan-500/30 to-teal-500/30",
      textColor: "text-cyan-300"
    },
    {
      icon: Zap,
      title: "Interrupt path handling",
      description: "Defining how and when a system should suppress, reroute, or reject incoming neural inputs based on observed irregularities",
      color: "from-orange-500/30 to-red-500/30",
      textColor: "text-orange-300"
    }
  ];

  return (
    <section id="research" className="py-20 px-6 relative bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 min-h-screen">
      {/* Technical Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Floating Technical Elements */}
      <div className="absolute top-16 left-16 opacity-20 animate-pulse">
        <Brain className="h-12 w-12 text-blue-400" />
      </div>
      <div className="absolute top-32 right-20 opacity-15 animate-bounce" style={{ animationDelay: '1s' }}>
        <Settings className="h-8 w-8 text-purple-500" />
      </div>
      <div className="absolute bottom-20 left-1/4 opacity-10 animate-pulse" style={{ animationDelay: '2s' }}>
        <Activity className="h-16 w-16 text-green-600" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
            Research
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        {/* Main Research Description */}
        <Card className="bg-slate-900/90 border-blue-500/30 backdrop-blur-xl mb-12 shadow-2xl">
          <CardContent className="p-8">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 mr-4">
                <BookOpen className="h-8 w-8 text-blue-300" />
              </div>
              <h3 className="text-2xl font-bold text-blue-200">Runtime Control & Security Mechanisms</h3>
            </div>
            <div className="space-y-4 text-slate-200 leading-relaxed">
              <p>
                XBrainer AI investigates <span className="text-blue-300 font-semibold">runtime control and security mechanisms</span> in brain-machine interface (BMI) systems. 
                The research centers on the system layer between neural signal acquisition and downstream actuation, an area not formally defined in most current BCI stacks.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Research Areas Header */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent mb-4">
            Primary Research Areas
          </h3>
          <p className="text-slate-400 text-lg">Technical focus areas for BMI system security and control</p>
        </div>

        {/* Research Areas Grid - Unique Hexagonal Layout */}
        <div className="mb-16">
          {/* First Row - 2 items */}
          <div className="grid md:grid-cols-2 gap-6 mb-6 max-w-4xl mx-auto">
            {researchAreas.slice(0, 2).map((area, index) => (
              <Card key={index} className="bg-slate-900/80 border-slate-700/50 backdrop-blur-sm hover:bg-slate-900/95 transition-all duration-500 group transform hover:scale-105 hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${area.color} mr-4 group-hover:scale-110 transition-all duration-300 flex-shrink-0`}>
                      <area.icon className={`h-6 w-6 ${area.textColor}`} />
                    </div>
                    <div>
                      <h4 className={`text-lg font-bold ${area.textColor} mb-2 leading-tight`}>{area.title}</h4>
                      <p className="text-slate-300 text-sm leading-relaxed">{area.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Second Row - 3 items */}
          <div className="grid md:grid-cols-3 gap-6">
            {researchAreas.slice(2, 5).map((area, index) => (
              <Card key={index + 2} className="bg-slate-900/80 border-slate-700/50 backdrop-blur-sm hover:bg-slate-900/95 transition-all duration-500 group transform hover:scale-105 hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${area.color} mb-4 group-hover:scale-110 transition-all duration-300`}>
                      <area.icon className={`h-6 w-6 ${area.textColor}`} />
                    </div>
                    <h4 className={`text-lg font-bold ${area.textColor} mb-2 leading-tight`}>{area.title}</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">{area.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Research Philosophy */}
        <Card className="bg-slate-900/90 border-indigo-500/30 backdrop-blur-xl mb-12 shadow-2xl">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-indigo-300 mb-4 text-center">Research Philosophy</h3>
            <p className="text-slate-200 leading-relaxed text-center mb-4">
              The goal is <span className="text-red-300 font-semibold">not signal decoding or classification</span>, but 
              <span className="text-indigo-300 font-semibold"> controlled signal transport and containment</span> under variable trust conditions.
            </p>
            <p className="text-slate-200 leading-relaxed text-center">
              The architecture assumes <span className="text-yellow-300 font-semibold">limited reliability of upstream components</span> (decoders, firmware, cloud endpoints) 
              and prioritizes <span className="text-green-300 font-semibold">deterministic response behavior</span> within the local system boundary.
            </p>
          </CardContent>
        </Card>

        {/* Current Status */}
        <Card className="bg-gradient-to-r from-slate-900/90 via-gray-900/90 to-slate-900/90 border-2 border-gray-400/30 backdrop-blur-xl shadow-2xl">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-400/20 rounded-full mb-4">
                <Eye className="h-8 w-8 text-gray-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-200 mb-4">Research Status</h3>
              <div className="space-y-3 text-gray-300">
                <p className="text-lg">
                  Research is <span className="text-blue-300 font-semibold">ongoing</span>, with initial implementations being developed and tested in closed environments.
                </p>
                <p>
                  Hardware compatibility and integration protocols will be available for review <span className="text-yellow-300 font-semibold">under NDA</span> at a later stage.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ResearchSection;
