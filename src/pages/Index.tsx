
import React, { useState } from 'react';
import { Toaster } from "../components/ui/toaster";
import Header from '../components/layout/Header';
import HeroSection from '../components/sections/HeroSection';
import ProblemCards from '../components/sections/ProblemCards';
import AboutSection from '../components/sections/AboutSection';
import ResearchSection from '../components/sections/ResearchSection';
import AICapabilitiesSection from '../components/sections/AICapabilitiesSection';
import PhasesSection from '../components/sections/PhasesSection';
import FooterCTA from '../components/sections/FooterCTA';
import Footer from '../components/sections/Footer';
import Background from '../components/layout/Background';
import MouseFollower from '../components/layout/MouseFollower';
import { useMousePosition } from '../hooks/useMousePosition';

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mousePosition = useMousePosition();

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Background />
      <MouseFollower mousePosition={mousePosition} />
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <HeroSection />
      <ProblemCards />
      <AboutSection />
      <ResearchSection />
      <AICapabilitiesSection />
      <PhasesSection />
      <FooterCTA />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
