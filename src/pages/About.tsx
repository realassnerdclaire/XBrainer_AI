
import React, { useState } from 'react';
import { Toaster } from "../components/ui/toaster";
import Header from '../components/layout/Header';
import AboutSection from '../components/sections/AboutSection';
import Background from '../components/layout/Background';

const About = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <Background />
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <AboutSection />
      <Toaster />
    </div>
  );
};

export default About;
