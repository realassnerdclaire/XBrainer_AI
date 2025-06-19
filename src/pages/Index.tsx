
import React, { useState } from 'react';
import Background from '../components/layout/Background';
import MouseFollower from '../components/layout/MouseFollower';
import Header from '../components/layout/Header';
import HeroSection from '../components/sections/HeroSection';
import PhasesSection from '../components/sections/PhasesSection';
import AICapabilitiesSection from '../components/sections/AICapabilitiesSection';
import FooterCTA from '../components/sections/FooterCTA';
import Footer from '../components/sections/Footer';
import { useMousePosition } from '../hooks/useMousePosition';
import '../styles/animations.css';

console.log("Index component loading...");

const Index: React.FC = () => {
  console.log("Index component rendering...");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mousePosition = useMousePosition();

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <Background />
      <MouseFollower mousePosition={mousePosition} />

      <div className="relative z-20">
        <Header 
          mobileMenuOpen={mobileMenuOpen} 
          setMobileMenuOpen={setMobileMenuOpen} 
        />
        <HeroSection />
        <PhasesSection />
        <AICapabilitiesSection />
        <FooterCTA />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
