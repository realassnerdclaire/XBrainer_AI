
import React from 'react';
import { Card, CardContent } from '../ui/card';
import { aiCapabilities } from '../../constants/data';

const AICapabilitiesSection: React.FC = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
          Methodological Focus Areas
        </h2>
        <p className="text-xl text-slate-100 text-center mb-16 max-w-3xl mx-auto">
          Our research employs statistical learning and cryptographic methods to address 
          security challenges in neural-interface communication protocols.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {aiCapabilities.map((capability, index) => (
            <Card key={index} className="bg-slate-950/95 border-slate-600/60 backdrop-blur-sm hover:bg-slate-950/98 transition-all duration-300 group">
              <CardContent className="p-6 text-center h-full flex flex-col">
                <div className="mb-4 p-3 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 w-fit mx-auto group-hover:from-blue-500/40 group-hover:to-purple-500/40 transition-all duration-300">
                  <capability.icon className="h-8 w-8 text-blue-300" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{capability.title}</h3>
                <p className="text-gray-200 text-sm flex-grow">{capability.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AICapabilitiesSection;
