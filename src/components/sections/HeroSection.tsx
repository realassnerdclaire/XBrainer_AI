
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProblemCards from '@/components/sections/ProblemCards';

const HeroSection: React.FC = () => {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent animate-pulse">
              Building the Firewall
            </span>
            <br />
            <span className="text-5xl md:text-7xl bg-gradient-to-r from-blue-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
              for the Human Brain
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-100 max-w-4xl mx-auto leading-relaxed backdrop-blur-sm bg-black/40 p-6 rounded-2xl border border-purple-500/30">
            In a future where brain-machine interfaces connect minds to machines, 
            we're building the world's first neural intrusion prevention system to protect 
            unauthorized access to the human brain.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-3 text-lg font-semibold border border-cyan-400/50 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300">
            Request Early Access
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" className="border-purple-400/60 text-slate-100 hover:bg-purple-900/40 px-8 py-3 text-lg backdrop-blur-sm bg-black/30 hover:border-purple-300 transition-all duration-300">
            Learn More
          </Button>
        </div>

        <ProblemCards />
      </div>
    </section>
  );
};

export default HeroSection;
