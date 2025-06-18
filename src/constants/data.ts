
import { Brain, Shield, Zap, Network, AlertTriangle, Lock, Search, Activity, Eye, Cpu, Database, Bot } from 'lucide-react';
import type { ProblemCard, Phase, AICapability } from '../types';

export const navItems = [
  'Home',
  'About',
  'Technology',
  'Research',
  'Contact'
];

export const problemCards: ProblemCard[] = [
  {
    icon: AlertTriangle,
    title: "Neural Vulnerability",
    description: "Brain-machine interfaces create unprecedented attack vectors for malicious actors to exploit neural pathways.",
    action: () => console.log("Neural Vulnerability clicked")
  },
  {
    icon: Lock,
    title: "Data Privacy Crisis",
    description: "Thoughts, memories, and cognitive patterns become the ultimate personal data requiring military-grade protection.",
    action: () => console.log("Data Privacy Crisis clicked")
  },
  {
    icon: Network,
    title: "System Integration",
    description: "Current cybersecurity frameworks are inadequate for protecting the complex neural-digital interface ecosystem.",
    action: () => console.log("System Integration clicked")
  }
];

export const phases: Phase[] = [
  {
    icon: Shield,
    title: "Phase 1: Neural Firewall",
    subtitle: "NEURAL INTRUSION PREVENTION",
    features: [
      "Real-time neural signal monitoring and anomaly detection",
      "Behavioral pattern analysis to identify unauthorized access attempts",
      "Automatic quarantine of suspicious neural activities",
      "Integration with existing brain-machine interface protocols"
    ],
    gradient: "from-blue-500 to-cyan-500",
    bgPattern: "radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3), transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3), transparent 50%), radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.3), transparent 50%)"
  },
  {
    icon: Brain,
    title: "Phase 2: Cognitive Authentication",
    subtitle: "BIOMETRIC NEURAL VALIDATION",
    features: [
      "Unique neural signature identification and verification",
      "Multi-layer consciousness authentication protocols",
      "Dynamic neural pattern encryption for secure communications",
      "Seamless integration with thought-based user interfaces"
    ],
    gradient: "from-purple-500 to-pink-500",
    bgPattern: "radial-gradient(circle at 30% 40%, rgba(168, 85, 247, 0.4), transparent 50%), radial-gradient(circle at 70% 60%, rgba(236, 72, 153, 0.3), transparent 50%)"
  },
  {
    icon: Zap,
    title: "Phase 3: Neural Network Defense",
    subtitle: "DISTRIBUTED PROTECTION GRID",
    features: [
      "Decentralized neural security network across multiple interfaces",
      "Predictive threat modeling using advanced AI algorithms",
      "Quantum-resistant encryption for neural data transmission",
      "Global threat intelligence sharing between neural security nodes"
    ],
    gradient: "from-green-500 to-blue-500",
    bgPattern: "radial-gradient(circle at 25% 25%, rgba(34, 197, 94, 0.4), transparent 50%), radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.3), transparent 50%)"
  }
];

export const aiCapabilities: AICapability[] = [
  {
    icon: Search,
    title: "Threat Detection",
    description: "AI-powered analysis of neural patterns to identify potential security breaches in real-time."
  },
  {
    icon: Activity,
    title: "Behavioral Analysis",
    description: "Machine learning algorithms that understand normal vs. abnormal neural activity patterns."
  },
  {
    icon: Eye,
    title: "Anomaly Recognition",
    description: "Advanced pattern recognition to detect subtle deviations in neural signal integrity."
  },
  {
    icon: Cpu,
    title: "Adaptive Defense",
    description: "Self-learning security protocols that evolve with emerging neural interface threats."
  },
  {
    icon: Database,
    title: "Data Encryption",
    description: "Neural-specific encryption algorithms designed for thought pattern protection."
  },
  {
    icon: Bot,
    title: "Automated Response",
    description: "Intelligent response systems that can neutralize threats without user intervention."
  },
  {
    icon: Network,
    title: "Network Security",
    description: "Comprehensive protection across distributed neural network infrastructures."
  },
  {
    icon: Shield,
    title: "Privacy Shield",
    description: "Multi-layered privacy protection ensuring complete neural data confidentiality."
  }
];
