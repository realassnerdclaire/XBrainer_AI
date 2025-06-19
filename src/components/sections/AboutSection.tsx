
import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Shield, Cpu, Lock, Timer, Network, AlertTriangle } from 'lucide-react';

const AboutSection: React.FC = () => {
  const coreFeatures = [
    {
      icon: Shield,
      title: "Signal Authentication",
      description: "Entropy-based verification and spectrum-domain detection"
    },
    {
      icon: Timer,
      title: "Interruptible Routing", 
      description: "Real-time signal control across trust boundaries"
    },
    {
      icon: Lock,
      title: "Device-bound Security",
      description: "Cryptographic primitives for secure handshakes"
    },
    {
      icon: Cpu,
      title: "Policy Scheduling",
      description: "Execution timing and concurrency management"
    },
    {
      icon: Network,
      title: "Cross-modal Integration",
      description: "EEG, ECoG, and sub-cranial compatibility"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 relative bg-white min-h-screen">
      {/* Enhanced EEG Signal Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-15">
          <div className="grid grid-cols-16 h-full">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="border-r border-green-300/50"></div>
            ))}
          </div>
          <div className="absolute inset-0">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-b border-green-300/50" style={{ top: `${(i + 1) * 8.33}%` }}></div>
            ))}
          </div>
        </div>

        {/* Moving EEG Signal Lines */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-1 opacity-70"
            style={{
              top: `${15 + i * 12}%`,
              background: `linear-gradient(90deg, transparent 0%, #10b981 20%, #06d6a0 40%, #10b981 60%, #059669 80%, transparent 100%)`,
              animation: `eegSignal ${3 + i * 0.7}s ease-in-out infinite ${i * 0.3}s`,
              filter: 'blur(0.5px)'
            }}
          />
        ))}

        {/* Neural Activity Nodes */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-green-500 rounded-full"
            style={{
              left: `${8 + (i * 7.5)}%`,
              top: `${25 + Math.sin(i * 0.8) * 15}%`,
              animation: `neuralPulse ${1.8 + i * 0.2}s ease-in-out infinite ${i * 0.15}s`
            }}
          />
        ))}

        {/* Brain Wave Patterns */}
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-60"
            style={{
              top: `${70 + i * 6}%`,
              animation: `brainWave ${2.5 + i * 0.4}s ease-in-out infinite ${i * 0.25}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            XBrainer AI
          </h2>
          <div className="w-20 h-1 bg-green-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Low-level control and policy enforcement for brain-machine interfaces. 
            Runtime integrity between neural input and execution environments.
          </p>
        </div>

        {/* Core Mission */}
        <Card className="bg-white/95 border-green-200 backdrop-blur-sm shadow-lg mb-10">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-bold text-green-700 mb-3">Our Focus</h3>
            <p className="text-gray-700">
              We build the <span className="text-green-600 font-semibold">infrastructure layer</span> — 
              beneath cognitive decoders, above hardware — where neurostacks lack architectural defenses.
            </p>
          </CardContent>
        </Card>

        {/* Core Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {coreFeatures.map((feature, index) => (
            <Card key={index} className="bg-white/95 border-green-200 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-200 group">
              <CardContent className="p-4">
                <div className="flex items-center mb-3">
                  <div className="p-2 rounded-full bg-green-100 mr-3 group-hover:bg-green-200 transition-colors">
                    <feature.icon className="h-5 w-5 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800 text-sm">{feature.title}</h4>
                </div>
                <p className="text-gray-600 text-xs leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Now */}
        <div className="grid md:grid-cols-3 gap-4 mb-10">
          <Card className="bg-white/95 border-blue-200 backdrop-blur-sm shadow-md">
            <CardContent className="p-4 text-center">
              <h4 className="font-semibold text-blue-700 mb-2 text-sm">Growing EEG Access</h4>
              <p className="text-gray-600 text-xs">Consumer devices creating new safety requirements</p>
            </CardContent>
          </Card>
          <Card className="bg-white/95 border-purple-200 backdrop-blur-sm shadow-md">
            <CardContent className="p-4 text-center">
              <h4 className="font-semibold text-purple-700 mb-2 text-sm">FDA Approvals</h4>
              <p className="text-gray-600 text-xs">Clinical trials advancing, security layers critical</p>
            </CardContent>
          </Card>
          <Card className="bg-white/95 border-red-200 backdrop-blur-sm shadow-md">
            <CardContent className="p-4 text-center">
              <h4 className="font-semibold text-red-700 mb-2 text-sm">Attack Surface</h4>
              <p className="text-gray-600 text-xs">Neural-actuator coupling increases risks</p>
            </CardContent>
          </Card>
        </div>

        {/* Leadership */}
        <Card className="bg-white/95 border-green-200 backdrop-blur-sm shadow-lg mb-8">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-green-700 mb-3 text-center">Leadership</h3>
            <p className="text-gray-700 text-center text-sm leading-relaxed">
              Founder <span className="text-green-600 font-semibold">Claire Kwon</span> combines applied mathematics, 
              distributed AI, and neuro-security. Personal experience with post-stroke and epilepsy interventions 
              drives focus on <span className="text-green-600">system robustness under adverse conditions</span>.
            </p>
          </CardContent>
        </Card>

        {/* Key Message */}
        <Card className="bg-gradient-to-r from-green-50 to-green-100 border-2 border-green-300 shadow-lg">
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center mb-3">
              <AlertTriangle className="h-6 w-6 text-green-600 mr-2" />
              <h3 className="text-lg font-bold text-gray-900">Mission Statement</h3>
            </div>
            <p className="text-gray-800 font-medium">
              We are <span className="text-red-600 font-bold">not building</span> intent decoders. 
              We are building a <span className="text-green-600 font-bold">containment and control layer</span> 
              for safe, enforceable signal flow in BMI systems.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
