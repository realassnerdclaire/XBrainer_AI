import React from 'react';
import { Card, CardContent } from '../ui/card';

const items = [
  {
    title: 'Neural Data Interception',
    desc: 'BCI signals can be spoofed or stolen before application-level protection.'
  },
  {
    title: 'Low-Latency Constraints',
    desc: 'Conventional encryption breaks real-time neural interaction.'
  },
  {
    title: 'Authentication Complexity',
    desc: 'Brainwave identity verification requires domain-specific methods.'
  }
];

const ProblemSection: React.FC = () => {
  return (
    <section aria-labelledby="problem-heading" className="py-16 md:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 id="problem-heading" className="text-2xl md:text-3xl font-semibold tracking-tight mb-8 text-foreground">
          The Problem
        </h2>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {items.map((it, idx) => (
            <Card key={idx} className="bg-background/60 border-border/60 backdrop-blur-sm animate-fade-in" style={{ animationDelay: `${idx * 80}ms` }}>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2 text-foreground">{it.title}</h3>
                <p className="text-foreground/80 text-sm leading-relaxed">{it.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
