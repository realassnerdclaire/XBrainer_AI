
import React, { useState } from 'react';
import { Brain, Menu, X } from 'lucide-react';
import { Switch } from '../ui/switch';
import { useNavigate } from 'react-router-dom';

const navItems = ['About', 'Research', 'Technology', 'Careers', 'Briefing Request'];

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const [stealthMode, setStealthMode] = useState(true);
  const navigate = useNavigate();

  const handleNavClick = (item: string) => {
    if (item === 'Briefing Request') {
      window.open('https://tally.so/r/nGaDPo', '_blank');
    } else if (item === 'Careers') {
      navigate('/careers');
    } else if (item === 'About') {
      navigate('/about');
    } else if (item === 'Research') {
      navigate('/research');
    } else if (item === 'Technology') {
      navigate('/technology');
    }
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <header className="p-3 md:p-6 backdrop-blur-xl bg-gradient-to-r from-black/60 via-purple-900/40 to-black/60 border-b border-cyan-500/50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2 md:space-x-3 cursor-pointer" onClick={handleLogoClick}>
          <img
            src="/lovable-uploads/50a0e18a-c7f5-4bd5-a6c6-493f1baf87cc.png"
            alt="XBrainer AI Official Website"
            className="h-8 w-auto md:h-10"
            loading="eager"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              className="text-gray-300 hover:text-white transition-all duration-300 relative group cursor-pointer px-3 py-2 bg-transparent border-none text-sm"
            >
              <span className="relative z-10">{item}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-purple-500/0 rounded-lg opacity-0 group-hover:opacity-100 group-hover:from-cyan-500/60 group-hover:to-purple-500/60 transition-all duration-300"></div>
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white relative z-10 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {/* Stealth Mode Toggle - Hidden on mobile */}
        <div className="hidden md:flex items-center space-x-3 text-sm">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <div className={`w-2 h-2 rounded-full ${stealthMode ? 'bg-yellow-400 animate-pulse' : 'bg-gray-400'}`}></div>
              {stealthMode && <div className="absolute inset-0 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>}
            </div>
            <span className={`font-mono text-xs ${stealthMode ? 'bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent' : 'text-gray-400'}`}>
              STEALTH
            </span>
          </div>
          <Switch
            checked={stealthMode}
            onCheckedChange={setStealthMode}
            className="data-[state=checked]:bg-yellow-500 data-[state=unchecked]:bg-gray-600"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-4 pb-4 border-t border-purple-500/30 backdrop-blur-xl bg-black/30 rounded-lg">
          <nav className="flex flex-col space-y-2 mt-4">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  handleNavClick(item);
                  setMobileMenuOpen(false);
                }}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 p-3 rounded-lg hover:bg-purple-900/40 text-left bg-transparent border-none"
              >
                {item}
              </button>
            ))}
          </nav>
          
          {/* Mobile Stealth Mode Toggle */}
          <div className="flex items-center justify-between mt-4 pt-3 border-t border-purple-500/30">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <div className={`w-2 h-2 rounded-full ${stealthMode ? 'bg-yellow-400 animate-pulse' : 'bg-gray-400'}`}></div>
                {stealthMode && <div className="absolute inset-0 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>}
              </div>
              <span className={`font-mono text-xs ${stealthMode ? 'bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent' : 'text-gray-400'}`}>
                STEALTH MODE
              </span>
            </div>
            <Switch
              checked={stealthMode}
              onCheckedChange={setStealthMode}
              className="data-[state=checked]:bg-yellow-500 data-[state=unchecked]:bg-gray-600"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
