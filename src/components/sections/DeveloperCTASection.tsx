import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

const DeveloperCTASection: React.FC = () => {
  return (
    <section aria-labelledby="dev-cta-heading" className="py-16 md:py-20 px-4 md:px-6">
      <div className="rounded-xl bg-[linear-gradient(90deg,hsl(var(--brand-plasma)),hsl(var(--brand-techno-purple)))] text-white">
        <div className="max-w-7xl mx-auto px-6 py-10 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 id="dev-cta-heading" className="text-xl md:text-2xl font-semibold">
            Build Secure BCIs from Day One — View Our SDK
          </h2>
          <Button asChild className="bg-white/10 hover:bg-white/20 text-white border-white/20">
            <a href="/technology" aria-label="View Our SDK">
              View SDK
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DeveloperCTASection;
