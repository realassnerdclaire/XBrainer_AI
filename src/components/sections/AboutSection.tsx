
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
    <main className="w-full bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            XBrainer AI
          </h1>
          <div className="w-20 h-1 bg-green-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Neural infrastructure for brain-machine interfaces.
          </p>
        </div>

        {/* Core Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {coreFeatures.map((feature, index) => (
            <Card key={index} className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-4 rounded-full bg-green-100 mr-4">
                    <feature.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 text-xl">{feature.title}</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission Statement */}
        <Card className="bg-green-50 border border-green-200 shadow-lg">
          <CardContent className="p-10 text-center">
            <div className="flex items-center justify-center mb-6">
              <AlertTriangle className="h-8 w-8 text-green-600 mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">Mission</h2>
            </div>
            <p className="text-gray-800 font-medium text-xl leading-relaxed">
              Building <span className="text-green-600 font-bold">containment and control</span> 
              {' '}for safe BMI systems.
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default AboutSection;
