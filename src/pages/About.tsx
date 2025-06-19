
import React, { useState } from 'react';
import { Toaster } from "../components/ui/toaster";
import Header from '../components/layout/Header';
import AboutSection from '../components/sections/AboutSection';

const About = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <AboutSection />
      <Toaster />
    </div>
  );
};

export default About;
