
import React from 'react';
import { Brain } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-6 border-t border-slate-600/60 bg-gradient-to-r from-black/90 to-purple-900/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
            XBrainer AI Official Website
          </h2>
          <p className="text-cyan-400 text-lg">
            xbrainer.ai
          </p>
        </div>
        <div className="text-slate-300 text-sm">
          © 2024 XBrainer AI Official Website.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
