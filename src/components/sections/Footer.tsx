
import React from 'react';
import { Brain } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-6 border-t border-slate-600/60 bg-gradient-to-r from-black/90 to-purple-900/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-3 mb-4 md:mb-0">
          <Brain className="h-6 w-6 text-blue-300" />
          <span className="text-lg font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
            XBrainer AI
          </span>
        </div>
        <div className="text-slate-300 text-sm">
          © 2024 XBrainer AI. Building the Firewall for the Human Brain.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
