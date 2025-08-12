
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
    <section className="relative py-16 md:py-28 px-4 md:px-6 overflow-hidden">
      {/* Futuristic layered background */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-surface" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-28 md:right-0 top-10 md:top-0 -z-10 h-[480px] w-[480px] md:h-[640px] md:w-[640px] rounded-full bg-[radial-gradient(circle_at_30%_30%,hsl(var(--brand-techno-purple)/0.35),transparent_60%)] blur-2xl" />
      <div className="pointer-events-none absolute inset-0 -z-10 [background:radial-gradient(1px_1px_at_12px_12px,hsl(var(--brand-sapphire)/0.25)_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-8 items-center">
        {/* Copy */}
        <header className="md:col-span-7 lg:col-span-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05]">
            Secure Neural Data in Real Time
          </h1>
          <p className="mt-5 text-base md:text-xl text-foreground/80 max-w-2xl leading-relaxed">
            Hardware-agnostic cryptographic protocols and validation for brain–machine communication.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 md:gap-4">
            <Button variant="neon" onClick={handleRequestBrief} className="px-7 py-3 text-base md:text-lg">
              Request Technical Brief
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Button>
            <Button variant="outlineIndigo" onClick={handleViewDiagram} className="px-7 py-3 text-base md:text-lg">
              View Architecture Diagram
            </Button>
          </div>
        </header>

        {/* Visual */}
        <div className="md:col-span-5 lg:col-span-6 relative h-[320px] md:h-[460px]">
          <div className="absolute inset-0 rounded-3xl border border-border/60 bg-background/40 backdrop-blur-sm" />
          {/* Flow lines */}
          <div className="absolute inset-0 p-6">
            <div className="h-full w-full rounded-2xl bg-[radial-gradient(1200px_600px_at_20%_-10%,hsl(var(--brand-azure)/0.18),transparent_60%)]" />
            <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 800 600" fill="none">
              <defs>
                <linearGradient id="g1" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="hsl(var(--brand-azure))"/>
                  <stop offset="100%" stopColor="hsl(var(--brand-plasma))"/>
                </linearGradient>
              </defs>
              {Array.from({ length: 10 }).map((_, i) => (
                <path key={i} d={`M0 ${60 + i*45} C 220 ${20 + i*35}, 420 ${100 + i*25}, 800 ${40 + i*30}`} stroke="url(#g1)" strokeOpacity="0.35" strokeWidth="1.5" />
              ))}
              {Array.from({ length: 14 }).map((_, i) => (
                <circle key={`c-${i}`} cx={60 + i*50} cy={120 + (i%5)*60} r="2" fill="hsl(var(--brand-plasma))" fillOpacity="0.5" />
              ))}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
