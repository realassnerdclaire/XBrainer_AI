
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
    <section className="min-h-screen w-full bg-white py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-4xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-3 text-gray-900">
            XBrainer AI
          </h2>
          <div className="w-16 h-1 bg-green-500 mx-auto rounded-full mb-4"></div>
          <p className="text-base text-gray-700 max-w-2xl mx-auto">
            Neural infrastructure for brain-machine interfaces.
          </p>
        </div>

        {/* Core Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {coreFeatures.map((feature, index) => (
            <Card key={index} className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center mb-2">
                  <div className="p-2 rounded-full bg-green-100 mr-3">
                    <feature.icon className="h-4 w-4 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800 text-sm">{feature.title}</h4>
                </div>
                <p className="text-gray-600 text-xs">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission Statement */}
        <Card className="bg-green-50 border border-green-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center mb-3">
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
