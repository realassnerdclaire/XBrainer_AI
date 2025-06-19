
import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Shield, Cpu, Lock, Timer, Network, AlertTriangle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const coreComponents = [
    {
      icon: Shield,
      title: "Signal-level Authentication",
      description: "Entropy-based verification, spectrum-domain irregularity detection, and temporal consistency scoring"
    },
    {
      icon: Timer,
      title: "Interruptible Routing Logic",
      description: "Capable of halting, delaying, or redirecting real-time signal propagation across trust boundaries"
    },
    {
      icon: Lock,
      title: "Device-bound Permissions",
      description: "Leveraging embedded cryptographic primitives for handshake protocols and per-session authentication"
    },
    {
      icon: Cpu,
      title: "Policy-governed Scheduling",
      description: "Managing execution timing, concurrency limits, and actuator-level arbitration"
    },
    {
      icon: Network,
      title: "Cross-modal Integration",
      description: "Enabling compatibility with EEG, ECoG, and planned sub-cranial hardware interfaces"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-950 via-amber-900 to-yellow-900 text-white">
      {/* Navigation Back */}
      <div className="p-6">
        <Link 
          to="/" 
          className="inline-flex items-center text-amber-300 hover:text-white transition-colors duration-300"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Home
        </Link>
      </div>

      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-300 via-amber-300 to-yellow-300 bg-clip-text text-transparent">
              About XBrainer AI
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-amber-400 mx-auto rounded-full"></div>
          </div>

          {/* Main Description */}
          <Card className="bg-amber-950/80 border-orange-500/30 backdrop-blur-xl mb-12">
            <CardContent className="p-8">
              <p className="text-lg text-amber-100 leading-relaxed text-center">
                XBrainer AI is developing a <span className="text-orange-300 font-semibold">low-level control and policy enforcement layer</span> for brain-machine interfaces (BMIs), 
                designed to sit between raw neural input and downstream execution environments. Our platform focuses on 
                <span className="text-amber-300 font-semibold"> runtime integrity, signal containment, and deterministic execution routing</span> across 
                both invasive and non-invasive neurotechnology stacks.
              </p>
            </CardContent>
          </Card>

          {/* Infrastructure Focus */}
          <Card className="bg-amber-950/80 border-yellow-500/30 backdrop-blur-xl mb-12">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-orange-300 mb-4 text-center">Infrastructure Layer Focus</h2>
              <p className="text-amber-100 leading-relaxed text-center">
                We target the infrastructure layer — <span className="text-orange-300">beneath cognitive decoders and above acquisition hardware</span> — 
                where current neurostacks lack architectural defenses.
              </p>
            </CardContent>
          </Card>

          {/* Core Components Grid */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent">
              Core Components
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreComponents.map((component, index) => (
                <Card key={index} className="bg-amber-950/70 border-orange-500/40 backdrop-blur-sm hover:bg-amber-950/90 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-3 rounded-full bg-gradient-to-r from-orange-500/30 to-amber-500/30 mr-3 group-hover:from-orange-500/50 group-hover:to-amber-500/50 transition-all duration-300">
                        <component.icon className="h-6 w-6 text-orange-300" />
                      </div>
                      <h3 className="text-lg font-semibold text-orange-200">{component.title}</h3>
                    </div>
                    <p className="text-amber-200 text-sm leading-relaxed">{component.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Risk Profile */}
          <Card className="bg-amber-950/80 border-red-500/30 backdrop-blur-xl mb-12">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <AlertTriangle className="h-8 w-8 text-red-400 mr-3" />
                <h2 className="text-2xl font-bold text-red-300">Risk Profile & Safety</h2>
              </div>
              <p className="text-amber-100 leading-relaxed text-center">
                The risk profile of BMI systems continues to expand with the proliferation of actuator-coupled use cases—ranging from 
                <span className="text-red-300"> neuroprosthetic control to closed-loop seizure suppression</span>. Our system is designed to 
                enforce minimal trust assumptions across all layers, especially where misclassification or unvalidated signal propagation 
                could result in <span className="text-red-300 font-semibold">physical harm</span>.
              </p>
            </CardContent>
          </Card>

          {/* Founder Information */}
          <Card className="bg-amber-950/80 border-orange-500/30 backdrop-blur-xl mb-12">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-orange-300 mb-4 text-center">Leadership</h2>
              <p className="text-amber-100 leading-relaxed text-center">
                Founder <span className="text-orange-300 font-semibold">Claire Kwon</span> combines backgrounds in applied mathematics, 
                distributed AI architecture, and neuro-adjacent system security. Motivated by her own experience navigating 
                post-stroke and epilepsy-related interventions, she leads the development of this infrastructure with a focus on 
                <span className="text-amber-300"> system robustness and reliability under adverse conditions</span>.
              </p>
            </CardContent>
          </Card>

          {/* Current Status */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="bg-amber-950/80 border-yellow-500/30 backdrop-blur-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-yellow-300 mb-3">Current Status</h3>
                <p className="text-amber-100 text-sm leading-relaxed">
                  XBrainer AI is currently in <span className="text-yellow-300 font-semibold">stealth</span>, with prototype development 
                  and early-stage evaluation partners in hardware security and neural signal processing.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-amber-950/80 border-orange-500/30 backdrop-blur-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-orange-300 mb-3">Documentation</h3>
                <p className="text-amber-100 text-sm leading-relaxed">
                  Briefing materials and technical documentation are available <span className="text-orange-300 font-semibold">under NDA</span>.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Key Message */}
          <Card className="bg-gradient-to-r from-orange-900/50 via-amber-900/50 to-yellow-900/50 border-2 border-orange-400/50 backdrop-blur-xl">
            <CardContent className="p-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
                <p className="text-xl text-orange-100 font-medium leading-relaxed">
                  We are <span className="text-red-300 font-bold">not building</span> intent decoders or cognitive inference systems. 
                  <br />
                  We are building a <span className="text-orange-300 font-bold">containment and control layer</span> for safe, 
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
