
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { phases } from '@/constants/data';

const PhasesSection: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-slate-950/80 to-purple-950/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
          Our Three-Phase Approach
        </h2>
        
        <div className="space-y-12">
          {phases.map((phase, index) => (
            <Card key={index} className="bg-slate-950/95 border-slate-600/60 backdrop-blur-sm overflow-hidden relative">
              <CardContent className="p-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center mb-4">
                      <div className={`p-4 rounded-full bg-gradient-to-r ${phase.gradient} mr-4 shadow-lg`}>
                        <phase.icon className="h-10 w-10 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{phase.title}</h3>
                        <p className="text-cyan-200 font-mono text-sm bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                          {phase.subtitle}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {phase.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-300 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-100">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`relative h-64 rounded-lg bg-gradient-to-br ${phase.gradient} opacity-40 overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/70 rounded-lg"></div>
                    <div className="absolute inset-0" style={{ background: phase.bgPattern, opacity: 0.5 }}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <phase.icon className="h-32 w-32 text-white/60" />
                    </div>
                    <div className="absolute inset-0">
                      {[...Array(12)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-2 h-2 bg-white/40 rounded-full"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `twinkle ${Math.random() * 3 + 2}s infinite ${Math.random() * 2}s`
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhasesSection;
