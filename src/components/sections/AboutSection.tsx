
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

  return (
    <section id="about" className="py-20 px-6 relative bg-white min-h-screen">
      {/* Simple Moving Wave Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Simple wave shapes moving across screen */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 60 + 40}px`,
              height: `${Math.random() * 20 + 10}px`,
              background: '#22c55e',
              borderRadius: '50px',
              animation: `waveMove ${Math.random() * 4 + 3}s infinite linear`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
        
        {/* Additional smaller wave dots */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`dot-${i}`}
            className="absolute opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              background: '#34d399',
              borderRadius: '50%',
              animation: `waveDot ${Math.random() * 3 + 2}s infinite linear`,
              animationDelay: `${Math.random() * 3}s`
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
