
import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Shield, Cpu, Lock, Timer, Network, AlertTriangle } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <main className="w-full bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-green-600">
            About XBrainer AI
          </h1>
          <div className="w-20 h-1 bg-green-500 mx-auto rounded-full mb-8"></div>
        </div>

        {/* Control-Layer Runtime Card */}
        <Card className="mb-16 bg-white border border-gray-200 shadow-lg">
          <CardContent className="p-10 text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 rounded-full bg-green-100 mr-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Control-Layer Runtime for Neural Interfaces</h2>
            <p className="text-lg text-gray-700">
              We enforce real-time execution policies between signal input and actuator output.
            </p>
          </CardContent>
        </Card>

        {/* Company Description */}
        <Card className="mb-16 bg-white border border-gray-200 shadow-lg">
          <CardContent className="p-10">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              XBrainer AI is developing a <span className="text-green-600 font-semibold">low-level control and policy enforcement layer</span> for brain-machine 
              interfaces (BMIs), designed to sit between raw neural input and downstream execution environments. 
              Our platform focuses on <span className="text-green-600 font-semibold">runtime integrity, signal containment, and deterministic execution routing</span> 
              {' '}across both invasive and non-invasive neurotechnology stacks.
            </p>
          </CardContent>
        </Card>

        {/* Infrastructure Layer Focus */}
        <Card className="mb-16 bg-green-50 border border-green-200 shadow-lg">
          <CardContent className="p-10 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Infrastructure Layer Focus</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We target the infrastructure layer — <span className="text-green-600 font-semibold">beneath cognitive decoders and above acquisition hardware</span> — where current 
              neurostacks lack architectural defenses.
            </p>
          </CardContent>
        </Card>

        {/* Core Components */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Core Components</h2>
          <p className="text-center text-gray-600 mb-12">Five specialized modules addressing critical BMI infrastructure challenges</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border border-gray-200 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-green-100 mr-4">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm uppercase tracking-wide text-green-600">SIGNAL AUTHENTICATION</h3>
                    <h4 className="font-bold text-gray-900">Signal-level Authentication</h4>
                  </div>
                </div>
                <p className="text-sm text-green-600 mb-2 italic">How do we verify neural signal authenticity?</p>
                <p className="text-gray-600 text-sm">
                  Entropy-based verification, spectrum-domain irregularity detection, and temporal consistency scoring
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-green-100 mr-4">
                    <Network className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm uppercase tracking-wide text-green-600">ROUTING LOGIC</h3>
                    <h4 className="font-bold text-gray-900">Interruptible Routing Logic</h4>
                  </div>
                </div>
                <p className="text-sm text-green-600 mb-2 italic">How do we control signal flow in real-time?</p>
                <p className="text-gray-600 text-sm">
                  Capable of halting, delaying, or redirecting real-time signal propagation across trust boundaries
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-green-100 mr-4">
                    <Lock className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm uppercase tracking-wide text-green-600">DEVICE SECURITY</h3>
                    <h4 className="font-bold text-gray-900">Device-bound Permissions</h4>
                  </div>
                </div>
                <p className="text-sm text-green-600 mb-2 italic">How do we ensure device-level trust?</p>
                <p className="text-gray-600 text-sm">
                  Leveraging embedded cryptographic primitives for handshake protocols and per-session authentication
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-green-100 mr-4">
                    <Cpu className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm uppercase tracking-wide text-green-600">POLICY MANAGEMENT</h3>
                    <h4 className="font-bold text-gray-900">Policy-governed Scheduling</h4>
                  </div>
                </div>
                <p className="text-sm text-green-600 mb-2 italic">How do we manage execution priorities?</p>
                <p className="text-gray-600 text-sm">
                  Managing execution timing, concurrency limits, and actuator-level arbitration
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-green-100 mr-4">
                    <Network className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm uppercase tracking-wide text-green-600">HARDWARE INTEGRATION</h3>
                    <h4 className="font-bold text-gray-900">Cross-modal Integration</h4>
                  </div>
                </div>
                <p className="text-sm text-green-600 mb-2 italic">How do we support multiple interface types?</p>
                <p className="text-gray-600 text-sm">
                  Enabling compatibility with EEG, ECoG, and planned sub-cranial hardware interfaces
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Risk Profile & Safety */}
        <Card className="mb-16 bg-red-50 border border-red-200 shadow-lg">
          <CardContent className="p-10">
            <div className="flex items-center justify-center mb-6">
              <AlertTriangle className="h-8 w-8 text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-900">Risk Profile & Safety</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              The risk profile of BMI systems continues to expand with the proliferation of actuator-coupled use cases—ranging 
              from <span className="text-red-600 font-semibold">neuroprosthetic control to closed-loop seizure suppression</span>. Our system is designed to enforce minimal trust 
              assumptions across all layers, <span className="text-gray-800 font-semibold">especially where misclassification or unvalidated signal propagation could result in 
              physical harm</span>.
            </p>
          </CardContent>
        </Card>

        {/* Leadership */}
        <Card className="mb-16 bg-green-50 border border-green-200 shadow-lg">
          <CardContent className="p-10 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Leadership</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Founder <span className="text-green-600 font-semibold">Claire Kwon</span> combines backgrounds in applied mathematics, distributed AI architecture, and neuro-adjacent system security. Motivated by her own experience navigating post-stroke and epilepsy-related interventions, she leads the development of this infrastructure with a focus on <span className="text-green-600 font-semibold">system robustness and reliability under adverse conditions</span>.
            </p>
          </CardContent>
        </Card>

        {/* Current Status & Documentation */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-blue-50 border border-blue-200 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Current Status</h3>
              <p className="text-gray-700">
                XBrainer AI is currently in <span className="font-semibold">stealth</span>, with prototype development and early-stage evaluation partners in hardware security and neural signal processing.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-purple-50 border border-purple-200 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Documentation</h3>
              <p className="text-gray-700">
                Briefing materials and technical documentation are available <span className="font-semibold">under NDA</span>.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Request Technical Briefing */}
        <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg">
          <CardContent className="p-10 text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 rounded-full bg-white/20 mr-4">
                <Shield className="h-10 w-10 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4">Request Technical Briefing</h2>
            <p className="text-xl mb-8 opacity-90">
              Access prototype documentation, technical specifications, and evaluation partnerships
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm">🔒 NDA Required</span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm">⚡ Prototype Access</span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm">📋 Technical Docs</span>
            </div>
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Submit Request
            </button>
          </CardContent>
        </Card>

        {/* Our Mission */}
        <Card className="mt-16 bg-white border border-gray-200 shadow-lg">
          <CardContent className="p-10 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              We are <span className="text-red-600 font-bold">not building</span> intent decoders or cognitive inference systems.<br />
              We are building a <span className="text-green-600 font-bold">containment and control layer</span> for safe, enforceable, and interpretable 
              signal flow in BMI systems.
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default AboutSection;
