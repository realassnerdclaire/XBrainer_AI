
import React, { useState } from 'react';
import { Toaster } from "../components/ui/toaster";
import Header from '../components/layout/Header';
import ResearchSection from '../components/sections/ResearchSection';
import Background from '../components/layout/Background';
import MouseFollower from '../components/layout/MouseFollower';
import { useMousePosition } from '../hooks/useMousePosition';

const Research = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mousePosition = useMousePosition();

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Background />
      <MouseFollower mousePosition={mousePosition} />
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <ResearchSection />
      <Toaster />
    </div>
  );
};

export default Research;
