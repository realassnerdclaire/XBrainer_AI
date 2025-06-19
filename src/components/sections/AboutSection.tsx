
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

  // Generate different EEG frequency band patterns
  const generateBetaWave = (width: number, offset: number = 0) => {
    let path = `M0,50`;
    for (let x = 0; x <= width; x += 1) {
      const y = 50 + 8 * Math.sin((x + offset) * 0.3) + 
                4 * Math.sin((x + offset) * 0.8) +
                2 * Math.sin((x + offset) * 1.2);
      path += ` L${x},${y}`;
    }
    return path;
  };

  const generateAlphaWave = (width: number, offset: number = 0) => {
    let path = `M0,50`;
    for (let x = 0; x <= width; x += 1) {
      const y = 50 + 12 * Math.sin((x + offset) * 0.15) + 
                6 * Math.sin((x + offset) * 0.4);
      path += ` L${x},${y}`;
    }
    return path;
  };

  const generateThetaWave = (width: number, offset: number = 0) => {
    let path = `M0,50`;
    for (let x = 0; x <= width; x += 1) {
      const y = 50 + 18 * Math.sin((x + offset) * 0.08) + 
                8 * Math.sin((x + offset) * 0.2) +
                4 * Math.sin((x + offset) * 0.35);
      path += ` L${x},${y}`;
    }
    return path;
  };

  const generateDeltaWave = (width: number, offset: number = 0) => {
    let path = `M0,50`;
    for (let x = 0; x <= width; x += 1) {
      const y = 50 + 25 * Math.sin((x + offset) * 0.04) + 
                10 * Math.sin((x + offset) * 0.1);
      path += ` L${x},${y}`;
    }
    return path;
  };

  return (
    <section id="about" className="py-20 px-6 relative bg-white min-h-screen">
      {/* EEG Waveform Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-20 h-full">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="border-r border-green-300"></div>
            ))}
          </div>
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="border-b border-green-300" style={{ top: `${(i + 1) * 6.67}%` }}></div>
            ))}
          </div>
        </div>

        {/* Beta Waves (12-30 Hz) */}
        <div className="absolute w-full top-[15%] h-[100px]">
          <svg width="100%" height="100" className="opacity-40">
            <path
              d={generateBetaWave(400)}
              stroke="#34d399"
              strokeWidth="1.5"
              fill="none"
              style={{
                animation: `eegFlow 4s linear infinite`,
                strokeDasharray: '800',
                strokeDashoffset: '800'
              }}
            />
          </svg>
          <div className="absolute left-4 top-2 text-xs text-green-600 font-medium opacity-60">
            Beta [12-30 Hz]
          </div>
        </div>

        {/* Alpha Waves (8-12 Hz) */}
        <div className="absolute w-full top-[35%] h-[100px]">
          <svg width="100%" height="100" className="opacity-50">
            <path
              d={generateAlphaWave(400)}
              stroke="#22c55e"
              strokeWidth="2"
              fill="none"
              style={{
                animation: `eegFlow 5s linear infinite 0.5s`,
                strokeDasharray: '800',
                strokeDashoffset: '800'
              }}
            />
          </svg>
          <div className="absolute left-4 top-2 text-xs text-green-600 font-medium opacity-60">
            Alpha [8-12 Hz]
          </div>
        </div>

        {/* Theta Waves (4-8 Hz) */}
        <div className="absolute w-full top-[55%] h-[100px]">
          <svg width="100%" height="100" className="opacity-45">
            <path
              d={generateThetaWave(400)}
              stroke="#16a34a"
              strokeWidth="2.5"
              fill="none"
              style={{
                animation: `eegFlow 6s linear infinite 1s`,
                strokeDasharray: '800',
                strokeDashoffset: '800'
              }}
            />
          </svg>
          <div className="absolute left-4 top-2 text-xs text-green-600 font-medium opacity-60">
            Theta [4-8 Hz]
          </div>
        </div>

        {/* Delta Waves (0-4 Hz) */}
        <div className="absolute w-full top-[75%] h-[100px]">
          <svg width="100%" height="100" className="opacity-40">
            <path
              d={generateDeltaWave(400)}
              stroke="#15803d"
              strokeWidth="3"
              fill="none"
              style={{
                animation: `eegFlow 8s linear infinite 1.5s`,
                strokeDasharray: '800',
                strokeDashoffset: '800'
              }}
            />
          </svg>
          <div className="absolute left-4 top-2 text-xs text-green-600 font-medium opacity-60">
            Delta [0-4 Hz]
          </div>
        </div>

        {/* Additional moving waveforms for depth */}
        {[...Array(3)].map((_, i) => (
          <div
            key={`bg-wave-${i}`}
            className="absolute w-full"
            style={{
              top: `${25 + i * 15}%`,
              height: '80px'
            }}
          >
            <svg width="100%" height="80" className="opacity-20">
              <path
                d={generateAlphaWave(400, i * 100)}
                stroke="#6ee7b7"
                strokeWidth="1"
                fill="none"
                style={{
                  animation: `eegFlow ${3 + i}s linear infinite ${i * 0.3}s`,
                  strokeDasharray: '400',
                  strokeDashoffset: '400'
                }}
              />
            </svg>
          </div>
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
            Neural infrastructure for brain-machine interfaces.
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
              Building <span className="text-green-600 font-bold">containment and control</span> 
              for safe BMI systems.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
