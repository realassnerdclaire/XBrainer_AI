import React from 'react';
import { ArrowRight } from 'lucide-react';

const Node = ({ label }: { label: string }) => (
  <div className="rounded-lg border border-[hsl(var(--brand-sapphire)/0.5)] bg-background/60 px-4 py-3 text-sm md:text-base text-foreground">
    {label}
  </div>
);

const SolutionSection: React.FC = () => {
  return (
    <section id="architecture" aria-labelledby="solution-heading" className="py-16 md:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 id="solution-heading" className="text-2xl md:text-3xl font-semibold tracking-tight mb-6 text-foreground">
          Security at the Signal Layer
        </h2>

        <div className="relative rounded-xl border border-border/60 p-6 md:p-8 bg-gradient-hero/10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            <Node label="Device" />
            <ArrowRight className="text-[hsl(var(--brand-azure))] hidden md:block" />
            <Node label="XBrainer Protocol" />
            <ArrowRight className="text-[hsl(var(--brand-azure))] hidden md:block" />
            <Node label="Validation Layer" />
            <ArrowRight className="text-[hsl(var(--brand-azure))] hidden md:block" />
            <Node label="Application / Cloud" />
          </div>
        </div>

        <p className="mt-6 text-foreground/85 max-w-3xl text-sm md:text-base leading-relaxed">
          XBrainer AI runs upstream of the application layer, ensuring packet integrity, consent enforcement,
          and anomaly detection before neural data is processed or stored.
        </p>
      </div>
    </section>
  );
};

export default SolutionSection;
