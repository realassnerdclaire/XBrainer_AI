
import { Shield, Brain, Network, Eye, Lock, Cpu, Database, Zap, Globe, Users } from 'lucide-react';
import { PhaseData, AICapability, ProblemCard } from '@/types';

export const phases: PhaseData[] = [
  {
    title: "Phase 1 - EEG Security Layer",
    subtitle: "Available Now",
    features: [
      "Real-time encryption of EEG/IMU signal streams",
      "Permissions engine for brain data access control",
      "Logging and alert system for unauthorized access",
      "SDK for secure BCI development"
    ],
    icon: Shield,
    gradient: "from-cyan-500 via-blue-500 to-purple-600",
    bgPattern: "radial-gradient(circle at 20% 50%, cyan, transparent 50%), radial-gradient(circle at 80% 20%, blue, transparent 50%)"
  },
  {
    title: "Phase 2 - Implant-Level Defense",
    subtitle: "Mid-term",
    features: [
      "Brainprint authentication via neural patterns",
      "Intrusion detection against memory manipulation",
      "Secure API infrastructure for ethical access",
      "Cognitive injection prevention systems"
    ],
    icon: Brain,
    gradient: "from-purple-500 via-pink-500 to-red-500",
    bgPattern: "radial-gradient(circle at 30% 40%, purple, transparent 50%), radial-gradient(circle at 70% 60%, pink, transparent 50%)"
  },
  {
    title: "Phase 3 - Neural OS Security",
    subtitle: "Future",
    features: [
      "Global identity standard for neural interfaces",
      "Tokenized, consent-based neural permissions",
      "Infrastructure for ethical neuro-enhancement",
      "Comprehensive neural ecosystem protection"
    ],
    icon: Network,
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    bgPattern: "radial-gradient(circle at 60% 30%, emerald, transparent 50%), radial-gradient(circle at 40% 70%, teal, transparent 50%)"
  }
];

export const aiCapabilities: AICapability[] = [
  {
    title: "Cognitive Intrusion Detection",
    description: "Unsupervised learning identifies abnormal brain patterns and unauthorized access attempts in real-time",
    icon: Eye
  },
  {
    title: "Neural Privacy Filters",
    description: "Deep learning automatically detects and blocks sensitive cognitive signatures and profiling attempts",
    icon: Lock
  },
  {
    title: "Brain-Based Authentication",
    description: "Personalized EEG-based biometric login that's secure, passive, and resistant to spoofing",
    icon: Cpu
  },
  {
    title: "Adaptive Signal Governance",
    description: "AI agents classify signal context and apply intelligent access policies that learn over time",
    icon: Database
  }
];

export const problemCards: ProblemCard[] = [
  {
    title: "Unencrypted",
    description: "Neural data flows without protection",
    icon: Zap,
    color: "red",
    action: () => console.log("Learn about unencrypted neural data")
  },
  {
    title: "Unfiltered", 
    description: "No permission system exists",
    icon: Globe,
    color: "orange",
    action: () => console.log("Learn about unfiltered access")
  },
  {
    title: "Vulnerable",
    description: "Open to misuse and manipulation", 
    icon: Users,
    color: "yellow",
    action: () => console.log("Learn about vulnerabilities")
  }
];

export const navItems = ['Why Now', 'Solution', 'Careers', 'Contact'];
