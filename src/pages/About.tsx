
import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Shield, Cpu, Lock, Timer, Network, AlertTriangle, ArrowLeft, Leaf, FileText } from 'lucide-react';
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

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation Back */}
      <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50">
        <Link 
          to="/" 
          className="inline-flex items-center text-green-700 hover:text-green-900 transition-colors duration-300"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Home
        </Link>
      </div>

      {/* Nature-inspired header with leaf pattern */}
      <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-20 px-6 relative">
        {/* Decorative leaves */}
        <div className="absolute top-10 left-10 opacity-20">
          <Leaf className="h-16 w-16 text-green-400 transform rotate-12" />
        </div>
        <div className="absolute top-20 right-20 opacity-15">
          <Leaf className="h-12 w-12 text-emerald-500 transform -rotate-45" />
        </div>
        <div className="absolute bottom-10 left-1/4 opacity-10">
          <Leaf className="h-20 w-20 text-green-600 transform rotate-45" />
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-700 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
              About XBrainer AI
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
          </div>

          {/* Elevator Pitch Summary */}
          <Card className="bg-white/80 border-green-200 shadow-lg backdrop-blur-sm mb-16">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full mb-4">
                  <Leaf className="h-8 w-8 text-green-600" />
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
          {/* Main Description */}
          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 shadow-sm mb-16">
            <CardContent className="p-8">
              <p className="text-lg text-gray-800 leading-relaxed text-center">
                XBrainer AI is developing a <span className="text-green-700 font-semibold">low-level control and policy enforcement layer</span> for brain-machine interfaces (BMIs), 
                designed to sit between raw neural input and downstream execution environments. Our platform focuses on 
                <span className="text-emerald-700 font-semibold"> runtime integrity, signal containment, and deterministic execution routing</span> across 
                both invasive and non-invasive neurotechnology stacks.
              </p>
            </CardContent>
          </Card>

          {/* Infrastructure Focus */}
          <Card className="bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200 shadow-sm mb-16">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-emerald-800 mb-4 text-center">Infrastructure Layer Focus</h2>
              <p className="text-gray-800 leading-relaxed text-center">
                We target the infrastructure layer — <span className="text-emerald-700 font-semibold">beneath cognitive decoders and above acquisition hardware</span> — 
                where current neurostacks lack architectural defenses.
              </p>
            </CardContent>
          </Card>

          {/* Core Components - Improved Layout */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-4 text-green-800">
              Core Components
            </h2>
            <p className="text-center text-gray-600 mb-12">Five specialized modules addressing critical BMI infrastructure challenges</p>
            
            {/* First Row - 3 components */}
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              {coreComponents.slice(0, 3).map((component, index) => (
                <Card key={index} className="bg-white border-green-200 shadow-sm hover:shadow-md transition-all duration-300 group h-full">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="flex items-center mb-3">
                      <div className="p-3 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 mr-3 group-hover:from-green-200 group-hover:to-emerald-200 transition-all duration-300">
                        <component.icon className="h-5 w-5 text-green-600" />
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
            
            {/* Second Row - 2 components centered */}
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {coreComponents.slice(3, 5).map((component, index) => (
                <Card key={index + 3} className="bg-white border-green-200 shadow-sm hover:shadow-md transition-all duration-300 group h-full">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="flex items-center mb-3">
                      <div className="p-3 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 mr-3 group-hover:from-green-200 group-hover:to-emerald-200 transition-all duration-300">
                        <component.icon className="h-5 w-5 text-green-600" />
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

          {/* Risk Profile - Adjusted Colors */}
          <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200 shadow-sm mb-16">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <AlertTriangle className="h-8 w-8 text-orange-600 mr-3" />
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

          {/* Founder Information */}
          <Card className="bg-gradient-to-r from-teal-50 to-green-50 border-teal-200 shadow-sm mb-16">
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

          {/* Current Status */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <Card className="bg-gradient-to-r from-emerald-50 to-green-50 border-emerald-200 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-emerald-800 mb-3">Current Status</h3>
                <p className="text-gray-800 text-sm leading-relaxed">
                  XBrainer AI is currently in <span className="text-emerald-700 font-semibold">stealth</span>, with prototype development 
                  and early-stage evaluation partners in hardware security and neural signal processing.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-green-800 mb-3">Documentation</h3>
                <p className="text-gray-800 text-sm leading-relaxed">
                  Briefing materials and technical documentation are available <span className="text-green-700 font-semibold">under NDA</span>.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Contact/CTA Section */}
          <div className="border-t-4 border-green-500 pt-12">
            <Card className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 border-none shadow-lg">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-4">Request Technical Briefing</h2>
                  <p className="text-green-100 mb-6 text-lg">
                    Access prototype documentation, technical specifications, and evaluation partnerships
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 text-sm">
                    <span className="bg-white/20 text-white px-4 py-2 rounded-full">🔒 NDA Required</span>
                    <span className="bg-white/20 text-white px-4 py-2 rounded-full">🔬 Prototype Access</span>
                    <span className="bg-white/20 text-white px-4 py-2 rounded-full">📋 Technical Docs</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Key Message */}
          <Card className="bg-gradient-to-r from-slate-50 to-gray-50 border-2 border-green-300 shadow-sm mt-12">
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
