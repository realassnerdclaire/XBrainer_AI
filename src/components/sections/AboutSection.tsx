
import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Shield, Cpu, Lock, Timer, Network, AlertTriangle, Clock, TrendingUp, Target } from 'lucide-react';

const AboutSection: React.FC = () => {
  const coreComponents = [
    {
      icon: Shield,
      title: "Signal-level Authentication",
      description: "Entropy-based verification, spectrum-domain irregularity detection, and temporal consistency scoring",
      stage: "Early-stage architecture module"
    },
    {
      icon: Timer,
      title: "Interruptible Routing Logic", 
      description: "Capable of halting, delaying, or redirecting real-time signal propagation across trust boundaries",
      stage: "Modular prototype primitive"
    },
    {
      icon: Lock,
      title: "Device-bound Permissions",
      description: "Leveraging embedded cryptographic primitives for handshake protocols and per-session authentication", 
      stage: "Early-stage architecture module"
    },
    {
      icon: Cpu,
      title: "Policy-governed Scheduling",
      description: "Managing execution timing, concurrency limits, and actuator-level arbitration",
      stage: "Modular prototype primitive"
    },
    {
      icon: Network,
      title: "Cross-modal Integration",
      description: "Enabling compatibility with EEG, ECoG, and planned sub-cranial hardware interfaces",
      stage: "Early-stage architecture module"
    }
  ];

  const whyNowFactors = [
    {
      icon: TrendingUp,
      title: "Growing EEG Device Availability",
      description: "Consumer and clinical EEG devices are becoming more accessible, creating new use cases that require safety infrastructure"
    },
    {
      icon: Shield,
      title: "FDA-Approved Implants", 
      description: "With clinical trials advancing and regulatory approvals increasing, the need for secure control layers is critical"
    },
    {
      icon: AlertTriangle,
      title: "Neural Cyber-Attack Risks",
      description: "As neural interfaces connect to actuator systems, the attack surface and potential for harm expands significantly"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 relative bg-white min-h-screen">
      {/* EEG Signal Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 h-full">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-r border-green-300"></div>
            ))}
          </div>
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="border-b border-green-300" style={{ top: `${(i + 1) * 12.5}%` }}></div>
            ))}
          </div>
        </div>

        {/* EEG Signal Lines */}
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-0.5 bg-green-500 opacity-60"
            style={{
              top: `${20 + i * 20}%`,
              animation: `brainWave ${2 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse"></div>
          </div>
        ))}

        {/* Neural Nodes */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-green-500 rounded-full opacity-70"
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${30 + Math.sin(i) * 20}%`,
              animation: `neuralPulse ${1.5 + i * 0.3}s ease-in-out infinite`,
              animationDelay: `${i * 0.1}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            About XBrainer AI
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
        </div>

        {/* Main Description */}
        <Card className="bg-white/90 border-green-200 backdrop-blur-sm shadow-lg mb-12">
          <CardContent className="p-8">
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              XBrainer AI is developing a <span className="text-green-600 font-semibold">low-level control and policy enforcement layer</span> for brain-machine interfaces (BMIs), 
              designed to sit between raw neural input and downstream execution environments. Our platform focuses on 
              <span className="text-green-700 font-semibold"> runtime integrity, signal containment, and deterministic execution routing</span> across 
              both invasive and non-invasive neurotechnology stacks.
            </p>
          </CardContent>
        </Card>

        {/* Why Now Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Clock className="h-8 w-8 text-green-600 mr-3" />
              <h3 className="text-3xl font-bold text-gray-900">
                Why Now?
              </h3>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {whyNowFactors.map((factor, index) => (
              <Card key={index} className="bg-white/90 border-green-200 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-full bg-green-100 mr-3 group-hover:bg-green-200 transition-all duration-300">
                      <factor.icon className="h-6 w-6 text-green-600" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800">{factor.title}</h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{factor.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Timing & Infrastructure Gap */}
        <Card className="bg-white/90 border-green-200 backdrop-blur-sm shadow-lg mb-12">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-green-700 mb-4 text-center">Timing & Infrastructure Gap</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Neural interface systems are entering a new phase — with increased consumer EEG availability, clinical trials for implants under FDA review, 
                and growing interest from government and defense in closed-loop neurotechnology. As actuator-coupled interfaces expand, so do the risks of 
                <span className="text-red-600 font-semibold"> uncontained signal execution and adversarial routing</span>.
              </p>
              <p>
                While much of the industry focuses on decoding intent or expanding sensing resolution, there remains a critical gap: 
                <span className="text-green-700 font-semibold"> the lack of a dedicated control layer between neural input and output execution</span>. 
                Most neurostacks still operate without runtime signal arbitration, interrupt logic, or formal containment layers.
              </p>
              <p>
                XBrainer AI is focused on this unaddressed layer — building the <span className="text-green-600 font-semibold">foundational runtime control and safety infrastructure</span> 
                that allows BMI systems to operate securely and predictably, even under adversarial or high-risk conditions.
              </p>
              <p className="text-center font-medium text-green-800">
                Early implementation is underway, and technical evaluation materials are available under NDA.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Infrastructure Focus */}
        <Card className="bg-white/90 border-green-200 backdrop-blur-sm shadow-lg mb-12">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-green-700 mb-4 text-center">Infrastructure Layer Focus</h3>
            <p className="text-gray-700 leading-relaxed text-center">
              We target the infrastructure layer — <span className="text-green-600">beneath cognitive decoders and above acquisition hardware</span> — 
              where current neurostacks lack architectural defenses.
            </p>
          </CardContent>
        </Card>

        {/* Go-to-Market Entry Points */}
        <Card className="bg-white/90 border-green-200 backdrop-blur-sm shadow-lg mb-12">
          <CardContent className="p-8">
            <div className="flex items-center justify-center mb-4">
              <Target className="h-8 w-8 text-green-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Go-to-Market Entry Points</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">SDK for BCI Developers</h4>
                <p className="text-gray-600 text-sm">Runtime control APIs and safety primitives for existing BCI development teams</p>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Hardware Partners</h4>
                <p className="text-gray-600 text-sm">Direct integration with neural interface hardware manufacturers and system integrators</p>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Research Labs</h4>
                <p className="text-gray-600 text-sm">Academic and clinical research institutions requiring safety-first neural system infrastructure</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Core Components Grid */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Modular Prototype Primitives
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreComponents.map((component, index) => (
              <Card key={index} className="bg-white/90 border-green-200 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-full bg-green-100 mr-3 group-hover:bg-green-200 transition-all duration-300">
                      <component.icon className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">{component.title}</h4>
                      <span className="text-xs text-green-600 italic">{component.stage}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{component.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Risk Profile */}
        <Card className="bg-white/90 border-orange-200 backdrop-blur-sm shadow-lg mb-12">
          <CardContent className="p-8">
            <div className="flex items-center justify-center mb-4">
              <AlertTriangle className="h-8 w-8 text-orange-600 mr-3" />
              <h3 className="text-2xl font-bold text-orange-700">Risk Profile & Safety</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-center">
              The risk profile of BMI systems continues to expand with the proliferation of actuator-coupled use cases—ranging from 
              <span className="text-orange-600"> neuroprosthetic control to closed-loop seizure suppression</span>. Our system is designed to 
              enforce minimal trust assumptions across all layers, especially where misclassification or unvalidated signal propagation 
              could result in <span className="text-red-600 font-semibold">physical harm</span>.
            </p>
          </CardContent>
        </Card>

        {/* Founder Information */}
        <Card className="bg-white/90 border-green-200 backdrop-blur-sm shadow-lg mb-12">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-green-700 mb-4 text-center">Leadership</h3>
            <p className="text-gray-700 leading-relaxed text-center">
              Founder <span className="text-green-600 font-semibold">Claire Kwon</span> combines backgrounds in applied mathematics, 
              distributed AI architecture, and neuro-adjacent system security. Motivated by her own experience navigating 
              post-stroke and epilepsy-related interventions, she leads the development of this infrastructure with a focus on 
              <span className="text-green-600"> system robustness and reliability under adverse conditions</span>.
            </p>
          </CardContent>
        </Card>

        {/* Current Status */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="bg-white/90 border-purple-200 backdrop-blur-sm shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-700 mb-3">Current Status</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                XBrainer AI is currently in <span className="text-purple-600 font-semibold">stealth</span>, with prototype development 
                and early-stage evaluation partners in hardware security and neural signal processing.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/90 border-blue-200 backdrop-blur-sm shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-700 mb-3">Documentation</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Briefing materials and technical documentation are available <span className="text-blue-600 font-semibold">under NDA</span>.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Key Message */}
        <Card className="bg-gradient-to-r from-green-50 to-green-100 border-2 border-green-300 shadow-lg">
          <CardContent className="p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-xl text-gray-800 font-medium leading-relaxed">
                We are <span className="text-red-600 font-bold">not building</span> intent decoders or cognitive inference systems. 
                <br />
                We are building a <span className="text-green-600 font-bold">containment and control layer</span> for safe, 
                enforceable, and interpretable signal flow in BMI systems.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
