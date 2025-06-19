
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import ProblemCards from './ProblemCards';

const HeroSection: React.FC = () => {
  const handleEarlyAccess = () => {
    // Open Tally form in new tab for early access requests
    window.open('https://tally.so/r/mD9DRq', '_blank');
  };

  return (
    <section className="py-10 md:py-20 px-4 md:px-6 relative">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-6 md:mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-4 md:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent animate-pulse">
              Developing Secure
            </span>
            <br />
            <span className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl bg-gradient-to-r from-blue-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
              Communication Protocols for Neural-Interface Data
            </span>
          </h1>
          <p className="text-base md:text-xl lg:text-2xl text-slate-100 max-w-4xl mx-auto leading-relaxed backdrop-blur-sm bg-black/40 p-4 md:p-6 rounded-xl md:rounded-2xl border border-purple-500/30">
            As neural interfaces expand the attack surface for cognitive data interception, 
            we're developing cryptographic protocols and validation frameworks to ensure 
            confidentiality and integrity of brain-machine communication channels.
          </p>
        </div>
        
        <div className="flex flex-col gap-3 md:gap-4 justify-center mb-12 md:mb-16 px-4">
          <Button 
            onClick={handleEarlyAccess}
            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-6 md:px-8 py-3 md:py-3 text-base md:text-lg font-semibold border border-cyan-400/50 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300 w-full sm:w-auto"
          >
            Request Early Access
            <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
          </Button>
          <Button 
            variant="outline" 
            className="border-purple-400/60 text-slate-100 hover:bg-purple-900/40 px-6 md:px-8 py-3 md:py-3 text-base md:text-lg backdrop-blur-sm bg-black/30 hover:border-purple-300 transition-all duration-300 w-full sm:w-auto"
          >
            Learn More
          </Button>
        </div>

        <ProblemCards />
      </div>
    </section>
  );
};

export default HeroSection;
