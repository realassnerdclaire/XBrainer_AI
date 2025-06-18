import { Brain, Shield, Zap, Network, AlertTriangle, Lock, Search, Activity, Eye, Cpu, Database, Bot } from 'lucide-react';
import type { ProblemCard, Phase, AICapability } from '../types';

export const navItems = [
  'Home',
  'About',
  'Technology',
  'Research',
  'Careers',
  'Briefing Request'
];

export const problemCards: ProblemCard[] = [
  {
    icon: AlertTriangle,
    title: "Attack Surface Expansion",
    description: "Neural interfaces introduce novel vectors for unauthorized access through electromagnetic coupling and signal interception pathways.",
    action: () => console.log("Attack Surface Expansion clicked")
  },
  {
    icon: Lock,
    title: "Confidentiality of Cognition",
    description: "Neuro-electrical patterns contain extractable information requiring cryptographic protection at the physiological data layer.",
    action: () => console.log("Confidentiality of Cognition clicked")
  },
  {
    icon: Network,
    title: "Interface Reliability",
    description: "Existing communication protocols lack validation mechanisms for neural-machine data integrity and transmission authenticity.",
    action: () => console.log("Interface Reliability clicked")
  }
];

export const phases: Phase[] = [
  {
    icon: Shield,
    title: "Interface Monitoring",
    subtitle: "TEMPORAL SIGNAL-INTEGRITY VALIDATION",
    features: [
      "Evaluate mitigation latencies for real-time neural transmission channels",
      "Event-triggered anomaly isolation in multichannel neuro-electrical streams",
      "Baseline establishment for physiological signal deviation thresholds",
      "Protocol compatibility assessment with existing brain-machine interfaces"
    ],
    gradient: "from-blue-500 to-cyan-500",
    bgPattern: "radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3), transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3), transparent 50%), radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.3), transparent 50%)"
  },
  {
    icon: Brain,
    title: "Signal Authentication",
    subtitle: "PUBLIC-KEY HANDSHAKES FOR NEURAL TRANSMISSIONS",
    features: [
      "Biometric feature extraction from neural oscillation patterns",
      "Cryptographic key derivation from physiological entropy sources",
      "Assess cipher suitability for bandwidth-constrained neural links",
      "Validation of identity verification through cognitive response patterns"
    ],
    gradient: "from-purple-500 to-pink-500",
    bgPattern: "radial-gradient(circle at 30% 40%, rgba(168, 85, 247, 0.4), transparent 50%), radial-gradient(circle at 70% 60%, rgba(236, 72, 153, 0.3), transparent 50%)"
  },
  {
    icon: Zap,
    title: "Distributed Channel Hardening",
    subtitle: "SEQUENCE-BASED DEVIATION SCORING",
    features: [
      "Model federated update strategies for distributed neural networks",
      "Electromagnetic interference mitigation in multi-node configurations",
      "Latency optimization for encrypted neural data transmission protocols",
      "Cross-platform compatibility validation for neural interface standards"
    ],
    gradient: "from-green-500 to-blue-500",
    bgPattern: "radial-gradient(circle at 25% 25%, rgba(34, 197, 94, 0.4), transparent 50%), radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.3), transparent 50%)"
  }
];

export const aiCapabilities: AICapability[] = [
  {
    icon: Search,
    title: "Signal Classification",
    description: "Semi-supervised classification of multichannel neuro-electrical artifacts using statistical pattern recognition."
  },
  {
    icon: Activity,
    title: "Temporal Analysis",
    description: "Time-series analysis of neural oscillation patterns for baseline deviation identification and characterization."
  },
  {
    icon: Eye,
    title: "Anomaly Detection",
    description: "Unsupervised learning algorithms for identifying statistical outliers in physiological data streams."
  },
  {
    icon: Cpu,
    title: "Protocol Optimization",
    description: "Algorithmic refinement of communication protocols based on empirical performance metrics and error rates."
  },
  {
    icon: Database,
    title: "Cryptographic Implementation",
    description: "Implementation and validation of encryption algorithms specifically designed for neural data characteristics."
  },
  {
    icon: Bot,
    title: "Automated Validation",
    description: "Systematic testing frameworks for verifying data integrity and transmission authenticity in neural interfaces."
  },
  {
    icon: Network,
    title: "Network Analysis",
    description: "Graph-theoretic analysis of distributed neural network topologies for vulnerability assessment."
  },
  {
    icon: Shield,
    title: "Privacy Preservation",
    description: "Mathematical frameworks for maintaining confidentiality of neural data while enabling necessary processing."
  }
];
