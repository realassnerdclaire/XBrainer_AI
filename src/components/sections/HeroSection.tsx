
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

const HeroSection: React.FC = () => {
  const handleRequestBrief = () => {
    window.open('https://tally.so/r/mD9DRq', '_blank');
  };

  const handleViewDiagram = () => {
    const el = document.getElementById('architecture');
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative py-14 md:py-24 px-4 md:px-6">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-surface" aria-hidden="true" />
      <div className="max-w-7xl mx-auto text-center">
        <header className="mb-8 md:mb-10">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            Secure Neural Data in Real Time
          </h1>
          <p className="mt-4 text-base md:text-xl lg:text-2xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
            Hardware-agnostic cryptographic protocols and validation for brain–machine communication.
          </p>
        </header>

        <nav className="flex flex-col gap-3 md:gap-4 justify-center items-center mb-10 md:mb-14 px-4">
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto">
            <Button 
              onClick={handleRequestBrief}
              className="bg-gradient-cta text-white px-6 md:px-8 py-3 md:py-3 text-base md:text-lg font-semibold border border-white/10 shadow-lg/5 hover:opacity-95 transition-all duration-300 w-full sm:w-auto"
            >
              Request Technical Brief
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Button>
            <Button 
              variant="outline"
              onClick={handleViewDiagram}
              className="border-[hsl(var(--brand-electric-indigo))] text-[hsl(var(--brand-electric-indigo))] hover:bg-[hsl(var(--brand-electric-indigo)/0.08)] px-6 md:px-8 py-3 md:py-3 text-base md:text-lg"
            >
              View Architecture Diagram
            </Button>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default HeroSection;
