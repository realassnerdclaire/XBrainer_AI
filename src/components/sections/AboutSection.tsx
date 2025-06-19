
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="backdrop-blur-xl bg-gradient-to-br from-black/60 via-purple-900/30 to-black/60 border border-cyan-500/30 rounded-2xl p-8 md:p-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            About XBrainer AI
          </h2>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed mb-6">
              XBrainer AI is developing a low-level control and policy enforcement layer for brain-machine interfaces (BMIs), designed to sit between raw neural input and downstream execution environments. Our platform focuses on runtime integrity, signal containment, and deterministic execution routing across both invasive and non-invasive neurotechnology stacks.
            </p>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              We target the infrastructure layer — beneath cognitive decoders and above acquisition hardware — where current neurostacks lack architectural defenses. Core components include:
            </p>
            
            <ul className="text-gray-300 space-y-3 mb-6 ml-6">
              <li className="relative">
                <span className="absolute -left-6 text-cyan-400">•</span>
                Signal-level authentication pipelines, including entropy-based verification, spectrum-domain irregularity detection, and temporal consistency scoring
              </li>
              <li className="relative">
                <span className="absolute -left-6 text-purple-400">•</span>
                Interruptible routing logic, capable of halting, delaying, or redirecting real-time signal propagation across trust boundaries
              </li>
              <li className="relative">
                <span className="absolute -left-6 text-pink-400">•</span>
                Device-bound permission systems, leveraging embedded cryptographic primitives for handshake protocols and per-session authentication
              </li>
              <li className="relative">
                <span className="absolute -left-6 text-cyan-400">•</span>
                Policy-governed scheduling, managing execution timing, concurrency limits, and actuator-level arbitration
              </li>
              <li className="relative">
                <span className="absolute -left-6 text-purple-400">•</span>
                Cross-modal integration support, enabling compatibility with EEG, ECoG, and planned sub-cranial hardware interfaces without modifying upstream acquisition logic
              </li>
            </ul>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              The risk profile of BMI systems continues to expand with the proliferation of actuator-coupled use cases—ranging from neuroprosthetic control to closed-loop seizure suppression. Our system is designed to enforce minimal trust assumptions across all layers, especially where misclassification or unvalidated signal propagation could result in physical harm.
            </p>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              Founder Claire Kwon combines backgrounds in applied mathematics, distributed AI architecture, and neuro-adjacent system security. Motivated by her own experience navigating post-stroke and epilepsy-related interventions, she leads the development of this infrastructure with a focus on system robustness and reliability under adverse conditions.
            </p>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              XBrainer AI is currently in stealth, with prototype development and early-stage evaluation partners in hardware security and neural signal processing.
            </p>
            
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-lg p-6 mb-6">
              <p className="text-white font-semibold mb-2">
                We are not building intent decoders or cognitive inference systems. We are building a containment and control layer for safe, enforceable, and interpretable signal flow in BMI systems.
              </p>
            </div>
            
            <p className="text-gray-400 italic">
              Briefing materials and technical documentation are available under NDA.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
