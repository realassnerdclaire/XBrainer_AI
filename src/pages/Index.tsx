
import React, { useState, useEffect } from 'react';
import { Toaster } from "../components/ui/toaster";
import Header from '../components/layout/Header';
import HeroSection from '../components/sections/HeroSection';
import Background from '../components/layout/Background';
import MouseFollower from '../components/layout/MouseFollower';
import { useMousePosition } from '../hooks/useMousePosition';
import ProblemSection from '../components/sections/ProblemSection';
import SolutionSection from '../components/sections/SolutionSection';
import TechnicalFeaturesSection from '../components/sections/TechnicalFeaturesSection';
import DeveloperCTASection from '../components/sections/DeveloperCTASection';
import Footer from '../components/sections/Footer';

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mousePosition = useMousePosition();

  // SEO
  useEffect(() => {
    document.title = 'Secure Neural Data in Real Time | XBrainer AI';
    const desc = 'Hardware-agnostic cryptographic protocols for brain–machine communication. Sub-ms latency, AES-GCM + forward secrecy, anomaly detection.';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', desc);

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `${window.location.origin}/`);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Background />
      <MouseFollower mousePosition={mousePosition} />
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <TechnicalFeaturesSection />
        <DeveloperCTASection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
