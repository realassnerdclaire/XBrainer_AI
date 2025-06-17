
import { Shield, Zap, Brain, Lock, Eye, Cpu } from 'lucide-react';
import { PhaseData, AICapability, ProblemCard } from '@/types';

export const navItems = ['About', 'Technology', 'Research', 'Contact'];

export const problemCards: ProblemCard[] = [
  {
    title: "Unauthorized Neural Access",
    description: "Protecting against unwanted intrusion into brain-machine interfaces and neural implants.",
    icon: Shield,
    color: "from-red-500 to-pink-500",
    action: () => console.log("Learning about neural security...")
  },
  {
    title: "Cognitive Privacy Breach",
    description: "Safeguarding personal thoughts and memories from unauthorized external access.",
    icon: Lock,
    color: "from-blue-500 to-purple-500", 
    action: () => console.log("Exploring privacy protection...")
  },
  {
    title: "Neural Network Hijacking",
    description: "Preventing malicious control of neural pathways and brain-computer connections.",
    icon: Eye,
    color: "from-green-500 to-teal-500",
    action: () => console.log("Understanding network security...")
  }
];

export const phases: PhaseData[] = [
  {
    title: "Phase 1: Foundation",
    subtitle: "Neural Security Framework",
    features: [
      "Core neural intrusion detection algorithms",
      "Basic brain-machine interface security protocols", 
      "Foundational cognitive firewall architecture"
    ],
    icon: Shield,
    gradient: "from-cyan-400 to-blue-500",
    bgPattern: "radial-gradient(circle at 20% 50%, rgba(0, 255, 255, 0.3) 0%, transparent 50%)"
  },
  {
    title: "Phase 2: Enhancement", 
    subtitle: "Advanced Protection Systems",
    features: [
      "Real-time neural threat monitoring",
      "Adaptive cognitive defense mechanisms",
      "Multi-layer brain security protocols"
    ],
    icon: Zap,
    gradient: "from-purple-400 to-pink-500",
    bgPattern: "radial-gradient(circle at 80% 20%, rgba(255, 0, 255, 0.3) 0%, transparent 50%)"
  },
  {
    title: "Phase 3: Evolution",
    subtitle: "AI-Powered Neural Defense",
    features: [
      "Autonomous neural security AI",
      "Predictive cognitive threat analysis", 
      "Self-evolving brain protection systems"
    ],
    icon: Brain,
    gradient: "from-green-400 to-cyan-500",
    bgPattern: "radial-gradient(circle at 50% 80%, rgba(0, 255, 128, 0.3) 0%, transparent 50%)"
  }
];

export const aiCapabilities: AICapability[] = [
  {
    title: "Neural Pattern Recognition",
    description: "Advanced AI algorithms that can identify and classify neural activity patterns in real-time.",
    icon: Brain
  },
  {
    title: "Threat Detection System", 
    description: "Machine learning models trained to detect anomalous neural activity and potential intrusion attempts.",
    icon: Shield
  },
  {
    title: "Adaptive Defense Protocols",
    description: "Self-learning security systems that evolve and adapt to new types of neural threats.",
    icon: Zap
  },
  {
    title: "Cognitive Encryption",
    description: "Revolutionary encryption methods specifically designed for protecting neural data streams.",
    icon: Lock
  },
  {
    title: "Real-time Monitoring",
    description: "Continuous surveillance of brain-machine interface connections for security breaches.",
    icon: Eye
  },
  {
    title: "Neural Firewall Engine",
    description: "Core protection system that filters and validates all neural communication protocols.",
    icon: Cpu
  }
];
