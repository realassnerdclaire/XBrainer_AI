
import React from 'react';
import { Card, CardContent } from '../ui/card';
import { BookOpen, Shield, Cpu, Network, Lock, Eye, Activity, Zap, Settings, Brain } from 'lucide-react';

const ResearchSection: React.FC = () => {
  const researchAreas = [
    {
      icon: Shield,
      title: "Neural I/O boundary enforcement",
      description: "Defining how neural signals are routed, gated, or halted in real time prior to execution",
      color: "from-rose-500/30 to-pink-500/30",
      textColor: "text-rose-300"
    },
    {
      icon: Activity,
      title: "Signal integrity evaluation",
      description: "Using non-inferential techniques such as frequency-domain anomaly detection, entropy range validation, and signal pattern drift analysis",
      color: "from-pink-500/30 to-fuchsia-500/30",
      textColor: "text-pink-300"
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
      color: "from-fuchsia-500/30 to-rose-500/30",
      textColor: "text-fuchsia-300"
    },
    {
      icon: Zap,
      title: "Interrupt path handling",
      description: "Defining how and when a system should suppress, reroute, or reject incoming neural inputs based on observed irregularities",
      color: "from-pink-500/30 to-rose-500/30",
      textColor: "text-pink-300"
    }
  ];

  return (
    <section id="research" className="py-20 px-6 relative bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 min-h-screen">
      {/* Floral Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large flower shapes */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`flower-${i}`}
            className="absolute opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 120 + 80}px`,
              height: `${Math.random() * 120 + 80}px`,
              background: `radial-gradient(circle, rgba(255, 182, 193, 0.6) 20%, rgba(255, 192, 203, 0.4) 40%, transparent 70%)`,
              borderRadius: '50%',
              animation: `flowerFloat ${Math.random() * 8 + 10}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}

        {/* Petal shapes */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`petal-${i}`}
            className="absolute opacity-15"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 40 + 20}px`,
              height: `${Math.random() * 60 + 30}px`,
              background: `linear-gradient(45deg, rgba(255, 182, 193, 0.5), rgba(255, 218, 185, 0.3))`,
              borderRadius: '50% 10% 50% 10%',
              animation: `petalDrift ${Math.random() * 6 + 8}s infinite linear`,
              animationDelay: `${Math.random() * 4}s`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          />
        ))}

        {/* Small decorative dots */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`dot-${i}`}
            className="absolute opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              background: '#ff69b4',
              borderRadius: '50%',
              animation: `gentleFloat ${Math.random() * 4 + 3}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-rose-500 to-fuchsia-600 bg-clip-text text-transparent">
            Research
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto rounded-full"></div>
        </div>

        {/* Main Research Description */}
        <Card className="bg-white/80 border-pink-200 backdrop-blur-xl mb-12 shadow-xl">
          <CardContent className="p-8">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 rounded-full bg-gradient-to-r from-pink-100 to-rose-100 mr-4">
                <BookOpen className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-2xl font-bold text-pink-800">Runtime Control & Security Mechanisms</h3>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                XBrainer AI investigates <span className="text-pink-600 font-semibold">runtime control and security mechanisms</span> in brain-machine interface (BMI) systems. 
                The research centers on the system layer between neural signal acquisition and downstream actuation, an area not formally defined in most current BCI stacks.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Research Areas Header */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Primary Research Areas
          </h3>
          <p className="text-gray-600 text-lg">Technical focus areas for BMI system security and control</p>
        </div>

        {/* Research Areas Grid */}
        <div className="mb-16">
          {/* First Row - 2 items */}
          <div className="grid md:grid-cols-2 gap-6 mb-6 max-w-4xl mx-auto">
            {researchAreas.slice(0, 2).map((area, index) => (
              <Card key={index} className="bg-white/90 border-pink-200 backdrop-blur-sm hover:bg-white/95 transition-all duration-500 group transform hover:scale-105 hover:-translate-y-2 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${area.color} mr-4 group-hover:scale-110 transition-all duration-300 flex-shrink-0`}>
                      <area.icon className={`h-6 w-6 ${area.textColor}`} />
                    </div>
                    <div>
                      <h4 className={`text-lg font-bold ${area.textColor} mb-2 leading-tight`}>{area.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{area.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Second Row - 3 items */}
          <div className="grid md:grid-cols-3 gap-6">
            {researchAreas.slice(2, 5).map((area, index) => (
              <Card key={index + 2} className="bg-white/90 border-pink-200 backdrop-blur-sm hover:bg-white/95 transition-all duration-500 group transform hover:scale-105 hover:-translate-y-2 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${area.color} mb-4 group-hover:scale-110 transition-all duration-300`}>
                      <area.icon className={`h-6 w-6 ${area.textColor}`} />
                    </div>
                    <h4 className={`text-lg font-bold ${area.textColor} mb-2 leading-tight`}>{area.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{area.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Research Philosophy */}
        <Card className="bg-white/90 border-pink-300 backdrop-blur-xl mb-12 shadow-xl">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-pink-700 mb-4 text-center">Research Philosophy</h3>
            <p className="text-gray-700 leading-relaxed text-center mb-4">
              The goal is <span className="text-red-600 font-semibold">not signal decoding or classification</span>, but 
              <span className="text-pink-600 font-semibold"> controlled signal transport and containment</span> under variable trust conditions.
            </p>
            <p className="text-gray-700 leading-relaxed text-center">
              The architecture assumes <span className="text-orange-600 font-semibold">limited reliability of upstream components</span> (decoders, firmware, cloud endpoints) 
              and prioritizes <span className="text-green-600 font-semibold">deterministic response behavior</span> within the local system boundary.
            </p>
          </CardContent>
        </Card>

        {/* Current Status */}
        <Card className="bg-gradient-to-r from-white/90 via-pink-50/90 to-white/90 border-2 border-pink-200 backdrop-blur-xl shadow-xl">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-4">
                <Eye className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-2xl font-bold text-pink-800 mb-4">Research Status</h3>
              <div className="space-y-3 text-gray-700">
                <p className="text-lg">
                  Research is <span className="text-pink-600 font-semibold">ongoing</span>, with initial implementations being developed and tested in closed environments.
                </p>
                <p>
                  Hardware compatibility and integration protocols will be available for review <span className="text-orange-600 font-semibold">under NDA</span> at a later stage.
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
