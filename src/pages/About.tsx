import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Shield, Cpu, Lock, Timer, Network, AlertTriangle, ArrowLeft, Activity, FileText, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const coreComponents = [
    {
      icon: Shield,
      category: "Signal Authentication",
      problem: "How do we verify neural signal authenticity?",
      title: "Signal-level Authentication",
      description: "Entropy-based verification, spectrum-domain irregularity detection, and temporal consistency scoring"
    },
    {
      icon: Timer,
      category: "Routing Logic",
      problem: "How do we control signal flow in real-time?",
      title: "Interruptible Routing Logic",
      description: "Capable of halting, delaying, or redirecting real-time signal propagation across trust boundaries"
    },
    {
      icon: Lock,
      category: "Device Security",
      problem: "How do we ensure device-level trust?",
      title: "Device-bound Permissions",
      description: "Leveraging embedded cryptographic primitives for handshake protocols and per-session authentication"
    },
    {
      icon: Cpu,
      category: "Policy Management",
      problem: "How do we manage execution priorities?",
      title: "Policy-governed Scheduling",
      description: "Managing execution timing, concurrency limits, and actuator-level arbitration"
    },
    {
      icon: Network,
      category: "Hardware Integration",
      problem: "How do we support multiple interface types?",
      title: "Cross-modal Integration",
      description: "Enabling compatibility with EEG, ECoG, and planned sub-cranial hardware interfaces"
    }
  ];

  const handleTechnicalBriefing = () => {
    window.open('https://tally.so/r/mD9DRq', '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation Back */}
      <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50">
        <Link 
          to="/" 
          className="inline-flex items-center text-green-700 hover:text-green-900 transition-all duration-300 hover:translate-x-1 transform"
        >
          <ArrowLeft className="h-5 w-5 mr-2 transition-transform duration-300" />
          Back to Home
        </Link>
      </div>

      {/* Nature-inspired header with Enhanced EEG signal pattern */}
      <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-20 px-6 relative overflow-hidden">
        {/* Enhanced Animated EEG Signal Lines - Longer, Bigger, Faster */}
        <div className="absolute inset-0 opacity-15">
          {/* Multiple EEG signal paths - Extended and Enhanced */}
          <svg className="w-full h-full" viewBox="0 0 2400 800" preserveAspectRatio="none">
            {/* Signal Line 1 - Top - Extended */}
            <path
              d="M0,200 Q100,160 200,200 T400,200 Q500,240 600,200 T800,200 Q900,160 1000,200 T1200,200 Q1300,240 1400,200 T1600,200 Q1700,160 1800,200 T2000,200 Q2100,240 2200,200 L2400,200"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              className="text-green-500"
            >
              <animate
                attributeName="d"
                dur="2s"
                repeatCount="indefinite"
                values="M0,200 Q100,160 200,200 T400,200 Q500,240 600,200 T800,200 Q900,160 1000,200 T1200,200 Q1300,240 1400,200 T1600,200 Q1700,160 1800,200 T2000,200 Q2100,240 2200,200 L2400,200;
                        M0,200 Q100,240 200,200 T400,200 Q500,160 600,200 T800,200 Q900,280 1000,200 T1200,200 Q1300,140 1400,200 T1600,200 Q1700,260 1800,200 T2000,200 Q2100,170 2200,200 L2400,200;
                        M0,200 Q100,160 200,200 T400,200 Q500,240 600,200 T800,200 Q900,160 1000,200 T1200,200 Q1300,240 1400,200 T1600,200 Q1700,160 1800,200 T2000,200 Q2100,240 2200,200 L2400,200"
              />
            </path>

            {/* Signal Line 2 - Middle - Extended */}
            <path
              d="M0,400 Q80,360 160,400 T320,400 Q400,440 480,400 T640,400 Q720,360 800,400 T960,400 Q1040,440 1120,400 T1280,400 Q1360,360 1440,400 T1600,400 Q1680,440 1760,400 T1920,400 Q2000,360 2080,400 T2240,400 L2400,400"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              className="text-emerald-500"
            >
              <animate
                attributeName="d"
                dur="1.8s"
                repeatCount="indefinite"
                values="M0,400 Q80,360 160,400 T320,400 Q400,440 480,400 T640,400 Q720,360 800,400 T960,400 Q1040,440 1120,400 T1280,400 Q1360,360 1440,400 T1600,400 Q1680,440 1760,400 T1920,400 Q2000,360 2080,400 T2240,400 L2400,400;
                        M0,400 Q80,480 160,400 T320,400 Q400,320 480,400 T640,400 Q720,460 800,400 T960,400 Q1040,340 1120,400 T1280,400 Q1360,440 1440,400 T1600,400 Q1680,360 1760,400 T1920,400 Q2000,420 2080,400 T2240,400 L2400,400;
                        M0,400 Q80,360 160,400 T320,400 Q400,440 480,400 T640,400 Q720,360 800,400 T960,400 Q1040,440 1120,400 T1280,400 Q1360,360 1440,400 T1600,400 Q1680,440 1760,400 T1920,400 Q2000,360 2080,400 T2240,400 L2400,400"
              />
            </path>

            {/* Signal Line 3 - Bottom - Extended */}
            <path
              d="M0,600 Q120,560 240,600 T480,600 Q600,640 720,600 T960,600 Q1080,560 1200,600 T1440,600 Q1560,640 1680,600 T1920,600 Q2040,560 2160,600 T2400,600"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              className="text-teal-500"
            >
              <animate
                attributeName="d"
                dur="2.2s"
                repeatCount="indefinite"
                values="M0,600 Q120,560 240,600 T480,600 Q600,640 720,600 T960,600 Q1080,560 1200,600 T1440,600 Q1560,640 1680,600 T1920,600 Q2040,560 2160,600 T2400,600;
                        M0,600 Q120,640 240,600 T480,600 Q600,520 720,600 T960,600 Q1080,680 1200,600 T1440,600 Q1560,540 1680,600 T1920,600 Q2040,660 2160,600 T2400,600;
                        M0,600 Q120,560 240,600 T480,600 Q600,640 720,600 T960,600 Q1080,560 1200,600 T1440,600 Q1560,640 1680,600 T1920,600 Q2040,560 2160,600 T2400,600"
              />
            </path>

            {/* Additional High-Frequency Signal Lines */}
            <path
              d="M0,300 Q50,280 100,300 Q150,320 200,300 Q250,280 300,300 Q350,320 400,300 Q450,280 500,300 Q550,320 600,300 Q650,280 700,300 Q750,320 800,300 Q850,280 900,300 Q950,320 1000,300 Q1050,280 1100,300 Q1150,320 1200,300 Q1250,280 1300,300 Q1350,320 1400,300 Q1450,280 1500,300 Q1550,320 1600,300 Q1650,280 1700,300 Q1750,320 1800,300 Q1850,280 1900,300 Q1950,320 2000,300 Q2050,280 2100,300 Q2150,320 2200,300 Q2250,280 2300,300 L2400,300"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              className="text-green-400"
            >
              <animate
                attributeName="d"
                dur="1.5s"
                repeatCount="indefinite"
                values="M0,300 Q50,280 100,300 Q150,320 200,300 Q250,280 300,300 Q350,320 400,300 Q450,280 500,300 Q550,320 600,300 Q650,280 700,300 Q750,320 800,300 Q850,280 900,300 Q950,320 1000,300 Q1050,280 1100,300 Q1150,320 1200,300 Q1250,280 1300,300 Q1350,320 1400,300 Q1450,280 1500,300 Q1550,320 1600,300 Q1650,280 1700,300 Q1750,320 1800,300 Q1850,280 1900,300 Q1950,320 2000,300 Q2050,280 2100,300 Q2150,320 2200,300 Q2250,280 2300,300 L2400,300;
                        M0,300 Q50,340 100,300 Q150,260 200,300 Q250,350 300,300 Q350,250 400,300 Q450,330 500,300 Q550,270 600,300 Q650,345 700,300 Q750,255 800,300 Q850,335 900,300 Q950,265 1000,300 Q1050,340 1100,300 Q1150,260 1200,300 Q1250,350 1300,300 Q1350,250 1400,300 Q1450,330 1500,300 Q1550,270 1600,300 Q1650,345 1700,300 Q1750,255 1800,300 Q1850,335 1900,300 Q1950,265 2000,300 Q2050,340 2100,300 Q2150,260 2200,300 Q2250,350 2300,300 L2400,300;
                        M0,300 Q50,280 100,300 Q150,320 200,300 Q250,280 300,300 Q350,320 400,300 Q450,280 500,300 Q550,320 600,300 Q650,280 700,300 Q750,320 800,300 Q850,280 900,300 Q950,320 1000,300 Q1050,280 1100,300 Q1150,320 1200,300 Q1250,280 1300,300 Q1350,320 1400,300 Q1450,280 1500,300 Q1550,320 1600,300 Q1650,280 1700,300 Q1750,320 1800,300 Q1850,280 1900,300 Q1950,320 2000,300 Q2050,280 2100,300 Q2150,320 2200,300 Q2250,280 2300,300 L2400,300"
              />
            </path>

            <path
              d="M0,500 Q40,480 80,500 Q120,520 160,500 Q200,480 240,500 Q280,520 320,500 Q360,480 400,500 Q440,520 480,500 Q520,480 560,500 Q600,520 640,500 Q680,480 720,500 Q760,520 800,500 Q840,480 880,500 Q920,520 960,500 Q1000,480 1040,500 Q1080,520 1120,500 Q1160,480 1200,500 Q1240,520 1280,500 Q1320,480 1360,500 Q1400,520 1440,500 Q1480,480 1520,500 Q1560,520 1600,500 Q1640,480 1680,500 Q1720,520 1760,500 Q1800,480 1840,500 Q1880,520 1920,500 Q1960,480 2000,500 Q2040,520 2080,500 Q2120,480 2160,500 Q2200,520 2240,500 Q2280,480 2320,500 Q2360,520 2400,500"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              className="text-emerald-400"
            >
              <animate
                attributeName="d"
                dur="1.3s"
                repeatCount="indefinite"
                values="M0,500 Q40,480 80,500 Q120,520 160,500 Q200,480 240,500 Q280,520 320,500 Q360,480 400,500 Q440,520 480,500 Q520,480 560,500 Q600,520 640,500 Q680,480 720,500 Q760,520 800,500 Q840,480 880,500 Q920,520 960,500 Q1000,480 1040,500 Q1080,520 1120,500 Q1160,480 1200,500 Q1240,520 1280,500 Q1320,480 1360,500 Q1400,520 1440,500 Q1480,535 1520,500 Q1560,465 1600,500 Q1640,540 1680,500 Q1720,460 1760,500 Q1800,550 1840,500 Q1880,450 1920,500 Q1960,530 2000,500 Q2040,470 2080,500 Q2120,545 2160,500 Q2200,455 2240,500 Q2280,535 2320,500 Q2360,465 2400,500;
                        M0,500 Q40,540 80,500 Q120,460 160,500 Q200,550 240,500 Q280,450 320,500 Q360,530 400,500 Q440,470 480,500 Q520,545 560,500 Q600,455 640,500 Q680,535 720,500 Q760,465 800,500 Q840,540 880,500 Q920,460 960,500 Q1000,550 1040,500 Q1080,450 1120,500 Q1160,530 1200,500 Q1240,470 1280,500 Q1320,545 1360,500 Q1400,455 1440,500 Q1480,535 1520,500 Q1560,465 1600,500 Q1640,540 1680,500 Q1720,460 1760,500 Q1800,550 1840,500 Q1880,450 1920,500 Q1960,530 2000,500 Q2040,470 2080,500 Q2120,545 2160,500 Q2200,455 2240,500 Q2280,535 2320,500 Q2360,465 2400,500;
                        M0,500 Q40,480 80,500 Q120,520 160,500 Q200,480 240,500 Q280,520 320,500 Q360,480 400,500 Q440,520 480,500 Q520,480 560,500 Q600,520 640,500 Q680,480 720,500 Q760,520 800,500 Q840,480 880,500 Q920,520 960,500 Q1000,480 1040,500 Q1080,520 1120,500 Q1160,480 1200,500 Q1240,520 1280,500 Q1320,480 1360,500 Q1400,520 1440,500 Q1480,480 1520,500 Q1560,520 1600,500 Q1640,480 1680,500 Q1720,520 1760,500 Q1800,480 1840,500 Q1880,520 1920,500 Q1960,480 2000,500 Q2040,520 2080,500 Q2120,480 2160,500 Q2200,520 2240,500 Q2280,480 2320,500 Q2360,520 2400,500"
              />
            </path>
          </svg>
        </div>

        {/* Decorative brain activity pulses with enhanced animations */}
        <div className="absolute top-10 left-10 opacity-20 animate-pulse">
          <Brain className="h-16 w-16 text-green-400 transform hover:scale-110 transition-transform duration-300" />
        </div>
        <div className="absolute top-20 right-20 opacity-15 animate-bounce">
          <Activity className="h-12 w-12 text-emerald-500" style={{ animationDelay: '1s' }} />
        </div>
        <div className="absolute bottom-10 left-1/4 opacity-10">
          <Brain className="h-20 w-20 text-green-600 animate-pulse transform hover:rotate-12 transition-transform duration-500" style={{ animationDelay: '2s' }} />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header with enhanced animations */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-700 via-emerald-600 to-teal-600 bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-300">
              About XBrainer AI
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full animate-pulse"></div>
          </div>

          {/* Elevator Pitch Summary with card animation */}
          <Card className="bg-white/80 border-green-200 shadow-lg backdrop-blur-sm mb-16 transform hover:scale-105 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full mb-4 transform hover:rotate-12 transition-transform duration-300">
                  <Brain className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-green-800 mb-4">Control-Layer Runtime for Neural Interfaces</h2>
                <p className="text-lg text-gray-700 font-medium">
                  We enforce real-time execution policies between signal input and actuator output.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Main Description with floating animation */}
          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 shadow-sm mb-16 transform hover:scale-102 hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <CardContent className="p-8">
              <p className="text-lg text-gray-800 leading-relaxed text-center">
                XBrainer AI is developing a <span className="text-green-700 font-semibold">low-level control and policy enforcement layer</span> for brain-machine interfaces (BMIs), 
                designed to sit between raw neural input and downstream execution environments. Our platform focuses on 
                <span className="text-emerald-700 font-semibold"> runtime integrity, signal containment, and deterministic execution routing</span> across 
                both invasive and non-invasive neurotechnology stacks.
              </p>
            </CardContent>
          </Card>

          {/* Infrastructure Focus with letter-like animation */}
          <Card className="bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200 shadow-sm mb-16 transform hover:scale-102 hover:shadow-md transition-all duration-300 hover:rotate-1 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-emerald-800 mb-4 text-center">Infrastructure Layer Focus</h2>
              <p className="text-gray-800 leading-relaxed text-center">
                We target the infrastructure layer — <span className="text-emerald-700 font-semibold">beneath cognitive decoders and above acquisition hardware</span> — 
                where current neurostacks lack architectural defenses.
              </p>
            </CardContent>
          </Card>

          {/* Core Components - Enhanced with staggered card animations */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-4 text-green-800 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              Core Components
            </h2>
            <p className="text-center text-gray-600 mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>Five specialized modules addressing critical BMI infrastructure challenges</p>
            
            {/* First Row - 3 components with staggered entrance */}
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              {coreComponents.slice(0, 3).map((component, index) => (
                <Card key={index} className="bg-white border-green-200 shadow-sm hover:shadow-xl transition-all duration-500 group h-full transform hover:scale-105 hover:-translate-y-3 hover:rotate-1 animate-fade-in" style={{ animationDelay: `${0.7 + index * 0.1}s` }}>
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="flex items-center mb-3">
                      <div className="p-3 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 mr-3 group-hover:from-green-200 group-hover:to-emerald-200 transition-all duration-300 transform group-hover:rotate-12 group-hover:scale-110">
                        <component.icon className="h-5 w-5 text-green-600 transform group-hover:rotate-12 transition-transform duration-300" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-green-600 uppercase tracking-wide">{component.category}</div>
                        <h3 className="text-sm font-bold text-gray-800">{component.title}</h3>
                      </div>
                    </div>
                    <p className="text-xs text-green-700 font-medium mb-2 italic">{component.problem}</p>
                    <p className="text-gray-700 text-sm leading-relaxed flex-grow">{component.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Second Row - 2 components centered with letter-like floating */}
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {coreComponents.slice(3, 5).map((component, index) => (
                <Card key={index + 3} className="bg-white border-green-200 shadow-sm hover:shadow-xl transition-all duration-500 group h-full transform hover:scale-105 hover:-translate-y-4 hover:-rotate-1 animate-fade-in" style={{ animationDelay: `${1.0 + index * 0.1}s` }}>
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="flex items-center mb-3">
                      <div className="p-3 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 mr-3 group-hover:from-green-200 group-hover:to-emerald-200 transition-all duration-300 transform group-hover:-rotate-12 group-hover:scale-110">
                        <component.icon className="h-5 w-5 text-green-600 transform group-hover:-rotate-12 transition-transform duration-300" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-green-600 uppercase tracking-wide">{component.category}</div>
                        <h3 className="text-sm font-bold text-gray-800">{component.title}</h3>
                      </div>
                    </div>
                    <p className="text-xs text-green-700 font-medium mb-2 italic">{component.problem}</p>
                    <p className="text-gray-700 text-sm leading-relaxed flex-grow">{component.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Risk Profile with enhanced card animation */}
          <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200 shadow-sm mb-16 transform hover:scale-102 hover:shadow-lg transition-all duration-400 hover:-translate-y-2 hover:rotate-0.5 animate-fade-in" style={{ animationDelay: '1.2s' }}>
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <AlertTriangle className="h-8 w-8 text-orange-600 mr-3 animate-pulse" />
                <h2 className="text-2xl font-bold text-orange-800">Risk Profile & Safety</h2>
              </div>
              <p className="text-gray-800 leading-relaxed text-center">
                The risk profile of BMI systems continues to expand with the proliferation of actuator-coupled use cases—ranging from 
                <span className="text-orange-700 font-semibold"> neuroprosthetic control to closed-loop seizure suppression</span>. Our system is designed to 
                enforce minimal trust assumptions across all layers, especially where misclassification or unvalidated signal propagation 
                could result in <span className="text-red-700 font-bold">physical harm</span>.
              </p>
            </CardContent>
          </Card>

          {/* Founder Information with floating letter effect */}
          <Card className="bg-gradient-to-r from-teal-50 to-green-50 border-teal-200 shadow-sm mb-16 transform hover:scale-102 hover:shadow-lg transition-all duration-400 hover:-translate-y-1 hover:-rotate-0.5 animate-fade-in" style={{ animationDelay: '1.3s' }}>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-teal-800 mb-4 text-center">Leadership</h2>
              <p className="text-gray-800 leading-relaxed text-center">
                Founder <span className="text-teal-700 font-semibold">Claire Kwon</span> combines backgrounds in applied mathematics, 
                distributed AI architecture, and neuro-adjacent system security. Motivated by her own experience navigating 
                post-stroke and epilepsy-related interventions, she leads the development of this infrastructure with a focus on 
                <span className="text-green-700 font-semibold"> system robustness and reliability under adverse conditions</span>.
              </p>
            </CardContent>
          </Card>

          {/* Current Status with card dance animations */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <Card className="bg-gradient-to-r from-emerald-50 to-green-50 border-emerald-200 shadow-sm transform hover:scale-105 hover:shadow-lg transition-all duration-400 hover:-translate-y-2 hover:rotate-1 animate-fade-in" style={{ animationDelay: '1.4s' }}>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-emerald-800 mb-3">Current Status</h3>
                <p className="text-gray-800 text-sm leading-relaxed">
                  XBrainer AI is currently in <span className="text-emerald-700 font-semibold">stealth</span>, with prototype development 
                  and early-stage evaluation partners in hardware security and neural signal processing.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 shadow-sm transform hover:scale-105 hover:shadow-lg transition-all duration-400 hover:-translate-y-2 hover:-rotate-1 animate-fade-in" style={{ animationDelay: '1.5s' }}>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-green-800 mb-3">Documentation</h3>
                <p className="text-gray-800 text-sm leading-relaxed">
                  Briefing materials and technical documentation are available <span className="text-green-700 font-semibold">under NDA</span>.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Contact/CTA Section with dramatic card animation */}
          <div className="border-t-4 border-green-500 pt-12">
            <Card className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 border-none shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 animate-fade-in" style={{ animationDelay: '1.6s' }}>
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6 transform hover:rotate-12 hover:scale-110 transition-all duration-300 animate-pulse">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-4">Request Technical Briefing</h2>
                  <p className="text-green-100 mb-6 text-lg">
                    Access prototype documentation, technical specifications, and evaluation partnerships
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 text-sm mb-6">
                    <span className="bg-white/20 text-white px-4 py-2 rounded-full transform hover:scale-110 hover:bg-white/30 transition-all duration-300">🔒 NDA Required</span>
                    <span className="bg-white/20 text-white px-4 py-2 rounded-full transform hover:scale-110 hover:bg-white/30 transition-all duration-300" style={{ animationDelay: '0.1s' }}>🔬 Prototype Access</span>
                    <span className="bg-white/20 text-white px-4 py-2 rounded-full transform hover:scale-110 hover:bg-white/30 transition-all duration-300" style={{ animationDelay: '0.2s' }}>📋 Technical Docs</span>
                  </div>
                  <button 
                    onClick={handleTechnicalBriefing}
                    className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-all duration-300 shadow-lg transform hover:scale-110 hover:-translate-y-1 hover:shadow-xl"
                  >
                    Submit Request
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Key Message with final dramatic animation */}
          <Card className="bg-gradient-to-r from-slate-50 to-gray-50 border-2 border-green-300 shadow-sm mt-12 transform hover:scale-102 hover:shadow-lg transition-all duration-500 hover:-translate-y-2 hover:rotate-0.5 animate-fade-in" style={{ animationDelay: '1.7s' }}>
            <CardContent className="p-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-xl text-gray-800 font-medium leading-relaxed">
                  We are <span className="text-red-600 font-bold">not building</span> intent decoders or cognitive inference systems. 
                  <br />
                  We are building a <span className="text-green-700 font-bold">containment and control layer</span> for safe, 
                  enforceable, and interpretable signal flow in BMI systems.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
