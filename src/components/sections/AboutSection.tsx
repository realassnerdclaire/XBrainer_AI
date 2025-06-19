
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
    <section id="about" className="py-12 md:py-20 px-4 md:px-6 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3 text-gray-900">
            XBrainer AI
          </h2>
          <div className="w-12 md:w-16 h-1 bg-green-500 mx-auto rounded-full mb-3 md:mb-4"></div>
          <p className="text-sm md:text-base text-gray-700 max-w-2xl mx-auto px-4">
            Neural infrastructure for brain-machine interfaces.
          </p>
        </div>

        {/* Core Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8 px-2">
          {coreFeatures.map((feature, index) => (
            <Card key={index} className="bg-white border-green-200 shadow-md hover:shadow-lg transition-shadow duration-200 group">
              <CardContent className="p-3 md:p-4">
                <div className="flex items-center mb-2">
                  <div className="p-1.5 md:p-2 rounded-full bg-green-100 mr-2 group-hover:bg-green-200 transition-colors duration-200">
                    <feature.icon className="h-3 w-3 md:h-4 md:w-4 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800 text-xs md:text-sm">{feature.title}</h4>
                </div>
                <p className="text-gray-600 text-xs leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission Statement */}
        <Card className="bg-gradient-to-r from-green-50 to-green-100 border-2 border-green-300 shadow-lg mx-2">
          <CardContent className="p-4 md:p-6 text-center">
            <div className="flex items-center justify-center mb-2 md:mb-3">
              <AlertTriangle className="h-4 w-4 md:h-5 md:w-5 text-green-600 mr-2" />
              <h3 className="text-sm md:text-base font-bold text-gray-900">Mission</h3>
            </div>
            <p className="text-gray-800 font-medium text-xs md:text-sm">
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
