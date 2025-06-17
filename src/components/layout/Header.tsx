
import React from 'react';
import { Brain, Menu, X } from 'lucide-react';
import { navItems } from '../../constants/data';

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <header className="p-6 backdrop-blur-xl bg-gradient-to-r from-black/60 via-purple-900/40 to-black/60 border-b border-cyan-500/50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Brain className="h-8 w-8 text-cyan-400" />
            <div className="absolute inset-0 bg-cyan-400/60 rounded-full animate-ping"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-40 animate-pulse"></div>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            XBrainer AI
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-gray-300 hover:text-white transition-all duration-300 relative group cursor-pointer px-4 py-2"
            >
              <span className="relative z-10">{item}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-purple-500/0 rounded-lg opacity-0 group-hover:opacity-100 group-hover:from-cyan-500/60 group-hover:to-purple-500/60 transition-all duration-300 transform scale-95 group-hover:scale-100"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 to-purple-400/0 rounded-lg opacity-0 group-hover:opacity-100 group-hover:from-cyan-400/50 group-hover:to-purple-400/50 transition-all duration-300 shadow-xl group-hover:shadow-cyan-500/70"></div>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-full shadow-lg group-hover:shadow-cyan-400/70"></div>
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300" style={{
                background: 'radial-gradient(circle at center, rgba(0, 255, 255, 0.4) 0%, rgba(128, 0, 255, 0.4) 50%, transparent 100%)',
                filter: 'blur(12px)'
              }}></div>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white relative z-10"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Status Indicator */}
        <div className="hidden md:flex items-center space-x-2 text-sm text-slate-400">
          <div className="relative">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <div className="absolute inset-0 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
          </div>
          <span className="font-mono bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">STEALTH MODE</span>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-6 pb-6 border-t border-purple-500/30 backdrop-blur-xl bg-black/30 rounded-lg">
          <nav className="flex flex-col space-y-4 mt-6">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 p-2 rounded-lg hover:bg-purple-900/40"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
