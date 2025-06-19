
import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Shield, Cpu, Lock, Timer, Network, AlertTriangle } from 'lucide-react';

const AboutSection: React.FC = () => {
  const coreFeatures = [
    {
      icon: Shield,
      title: "Signal Authentication",
      description: "Entropy-based verification"
    },
    {
      icon: Timer,
      title: "Interruptible Routing", 
      description: "Real-time signal control"
    },
    {
      icon: Lock,
      title: "Device-bound Security",
      description: "Cryptographic primitives"
    },
    {
      icon: Cpu,
      title: "Policy Scheduling",
      description: "Execution timing management"
    },
    {
      icon: Network,
      title: "Cross-modal Integration",
      description: "EEG, ECoG compatibility"
    }
  ];

  // Generate EEG waveform path
  const generateEEGPath = (amplitude: number, frequency: number, offset: number = 0) => {
    let path = "M0,50";
    for (let x = 0; x <= 400; x += 2) {
      const y = 50 + amplitude * Math.sin((x + offset) * frequency * 0.02) + 
                (amplitude * 0.3) * Math.sin((x + offset) * frequency * 0.05) +
                (amplitude * 0.2) * Math.sin((x + offset) * frequency * 0.08);
      path += ` L${x},${y}`;
    }
    return path;
  };

  return (
    <section id="about" className="py-20 px-6 relative bg-white min-h-screen">
      {/* EEG Graph Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-20 h-full">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="border-r border-green-400"></div>
            ))}
          </div>
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="border-b border-green-400" style={{ top: `${(i + 1) * 6.67}%` }}></div>
            ))}
          </div>
        </div>

        {/* Moving EEG Waveforms */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full"
            style={{
              top: `${10 + i * 10}%`,
              height: '100px'
            }}
          >
            <svg width="100%" height="100" className="opacity-60">
              <path
                d={generateEEGPath(15 + i * 3, 0.8 + i * 0.2)}
                stroke="#10b981"
                strokeWidth="2"
                fill="none"
                className="animate-pulse"
                style={{
                  animation: `eegSignal ${2 + i * 0.3}s linear infinite ${i * 0.2}s`,
                  strokeDasharray: '400',
                  strokeDashoffset: '400'
                }}
              />
            </svg>
          </div>
        ))}

        {/* Additional brain wave patterns */}
        {[...Array(4)].map((_, i) => (
          <div
            key={`wave-${i}`}
            className="absolute w-full"
            style={{
              top: `${20 + i * 18}%`,
              height: '80px'
            }}
          >
            <svg width="100%" height="80" className="opacity-40">
              <path
                d={generateEEGPath(8 + i * 2, 1.2 + i * 0.4, i * 50)}
                stroke="#059669"
                strokeWidth="1.5"
                fill="none"
                style={{
                  animation: `eegSignal ${3 + i * 0.5}s linear infinite ${i * 0.4}s`,
                  strokeDasharray: '200',
                  strokeDashoffset: '200'
                }}
              />
            </svg>
          </div>
        ))}

        {/* Neural activity indicators */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`neural-${i}`}
            className="absolute w-3 h-3 bg-green-500 rounded-full opacity-70"
            style={{
              left: `${15 + i * 12}%`,
              top: `${30 + Math.sin(i * 1.2) * 20}%`,
              animation: `neuralPulse ${1.5 + i * 0.3}s ease-in-out infinite ${i * 0.2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
            XBrainer AI
          </h2>
          <div className="w-16 h-1 bg-green-500 mx-auto rounded-full mb-4"></div>
          <p className="text-base text-gray-700 max-w-2xl mx-auto">
            Infrastructure layer for brain-machine interfaces. Runtime integrity between neural input and execution.
          </p>
        </div>

        {/* Core Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
          {coreFeatures.map((feature, index) => (
            <Card key={index} className="bg-white/90 border-green-200 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-200 group">
              <CardContent className="p-3">
                <div className="flex items-center mb-2">
                  <div className="p-1.5 rounded-full bg-green-100 mr-2 group-hover:bg-green-200 transition-colors">
                    <feature.icon className="h-4 w-4 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800 text-sm">{feature.title}</h4>
                </div>
                <p className="text-gray-600 text-xs leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission Statement */}
        <Card className="bg-gradient-to-r from-green-50 to-green-100 border-2 border-green-300 shadow-lg">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <AlertTriangle className="h-5 w-5 text-green-600 mr-2" />
              <h3 className="text-base font-bold text-gray-900">Mission</h3>
            </div>
            <p className="text-gray-800 font-medium text-sm">
              Building a <span className="text-green-600 font-bold">containment and control layer</span> 
              for safe, enforceable signal flow in BMI systems.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
