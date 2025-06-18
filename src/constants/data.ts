
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

export const baseJobs = [
  {
    title: 'Machine Learning / Signal Processing Intern',
    type: 'Intern' as const,
    focus: 'Support signal preprocessing, anomaly detection, and classification tasks across EEG and neural interface data streams.',
    skills: 'Python proficiency, NumPy, SciPy, pandas, PyTorch/TensorFlow, time-series analysis, filtering, ICA, spike sorting. Ability to read and interpret EEG/BCI signals is a plus.',
    background: 'Biomedical engineering, neuro-AI, or computational neuroscience. Familiarity with neural datasets and signal processing workflows. Research experience in BCI or related signal processing fields.',
    sfCompensation: 'Unpaid',
    hydCompensation: '2,200 INR per month',
    commitment: '15–20 hours/week',
    responsibilities: [
      'Preprocess EEG or neurodata streams using signal-cleaning methods (e.g., filtering, ICA)',
      'Implement anomaly detection and event classification routines',
      'Analyze multichannel neuro-electrical recordings',
      'Prototype spike sorting, entropy-based signal modeling, and artifact rejection',
      'Report performance metrics and assist in maintaining reproducible pipelines'
    ],
    fullDescription: {
      sf: `XBrainer AI is building security infrastructure for brain-machine interfaces. Our work spans neurodata privacy, real-time protocol security, and cryptographic safeguards for cognitive communication layers.

We are seeking a Machine Learning / Signal Processing Intern to support signal preprocessing, anomaly detection, and classification tasks across EEG and neural interface data streams. Work on early-stage R&D efforts, helping prototype and validate technical pipelines used in secure communication architecture.`,
      hyd: `XBrainer AI is building foundational cybersecurity layers for brain-machine interfaces. We focus on developing robust cryptographic infrastructure to protect real-time neural communication.

We are seeking a Machine Learning / Signal Processing Intern to support signal preprocessing, anomaly detection, and classification tasks across EEG and neural interface data streams. Work on early-stage R&D efforts, helping prototype and validate technical pipelines used in secure communication architecture.`
    }
  },
  {
    title: 'Cybersecurity Engineer / Intern (Neuro-Context)',
    type: 'Part-Time' as const,
    focus: 'Help design and test secure transmission protocols, encryption frameworks, and authentication schemes tailored for neural interface data streams.',
    skills: 'Proficiency in Python, C/C++, or Go. Familiarity with TLS, custom protocol stacks, or encryption algorithms. Understanding of cybersecurity principles.',
    background: 'Computer science, cybersecurity, or applied cryptography major. Coursework or research experience in protocol security or secure systems.',
    sfCompensation: 'Unpaid',
    hydCompensation: '2,200 INR per month',
    commitment: '15–20 hours/week',
    responsibilities: [
      'Prototype secure communication layers for real-time neural input/output',
      'Design and simulate protocol flow for encrypted neurodata transmission',
      'Research and compare lightweight cryptographic algorithms (e.g., post-quantum, homomorphic, biometric-based)',
      'Assist in modeling authentication or identity schemes for brain-signal signatures',
      'Contribute to internal security audits and protocol validation'
    ],
    fullDescription: {
      sf: `XBrainer AI is building security infrastructure for brain-machine interfaces. Our work spans neurodata privacy, real-time protocol security, and cryptographic safeguards for cognitive communication layers. This is a rare opportunity to help define a new domain at the intersection of neurotechnology and infosec.

We are seeking a part-time Cybersecurity Engineering Intern to help design and test secure transmission protocols, encryption frameworks, and authentication schemes tailored for neural interface data streams. This role is ideal for someone with strong systems or cryptography experience who's curious about emerging interfaces like BCI.

What You'll Gain:
- Mentorship from the founding engineering team
- Exposure to security design in the neurotechnology domain
- Opportunity to shape foundational infrastructure in an emerging field
- High consideration for full-time role upon next funding milestone`,
      hyd: `XBrainer AI is building foundational cybersecurity layers for brain-machine interfaces. We focus on developing robust cryptographic infrastructure to protect real-time neural communication. Our mission is to define the security protocol stack for the next generation of cognitive systems.

We're looking for a part-time Cybersecurity Intern to help prototype secure communication layers for neural signal transmission. You'll be contributing to applied protocol design and encryption tailored for BCI data streams.

What You'll Gain:
- Experience building encryption and protocol models for frontier tech
- Mentorship from domain experts in neurotech and infosec
- Consideration for full-time paid conversion upon funding`
    }
  },
  {
    title: 'Software/DevOps Infrastructure Intern',
    type: 'Intern' as const,
    focus: 'Prototype deployment tools, automate pipelines, simulate secure channels.',
    skills: 'Docker, Linux, Python APIs, CI/CD, networking.',
    background: 'Knowledge of secure protocol simulation (e.g., ns-3 or simulation frameworks) is optional.',
    sfCompensation: 'Unpaid',
    hydCompensation: '2,200 INR per month'
  },
  {
    title: 'Neuroscientist',
    type: 'Part-Time' as const,
    focus: 'Research neural signal patterns, validate physiological models, and contribute to understanding brain-machine interface security implications.',
    skills: 'Neuroscience research methods, EEG/fMRI analysis, statistical modeling, MATLAB/Python, neural data interpretation.',
    background: 'PhD or advanced degree in Neuroscience, Cognitive Science, or related field. Experience with neural signal analysis and brain-computer interfaces.',
    sfCompensation: 'Unpaid',
    hydCompensation: '2,200 INR per month'
  },
  {
    title: 'Neuroengineer',
    type: 'Part-Time' as const,
    focus: 'Design and optimize neural interface hardware, develop signal acquisition systems, and ensure compatibility with security protocols.',
    skills: 'Circuit design, signal processing hardware, embedded systems, FPGA programming, biomedical instrumentation.',
    background: 'Biomedical Engineering, Electrical Engineering, or Neurotechnology. Experience with neural interface hardware and signal acquisition systems.',
    sfCompensation: 'Unpaid',
    hydCompensation: '2,200 INR per month'
  },
  {
    title: 'Hardware Interface Advisor',
    type: 'Part-Time' as const,
    focus: 'Provide strategic guidance on hardware-software integration, advise on neural interface standards, and ensure security protocol compatibility.',
    skills: 'Hardware architecture, systems integration, neural interface standards, security protocol design, technical advisory.',
    background: 'Senior-level experience in hardware design, neural interfaces, or biomedical devices. Advisory or consulting experience preferred.',
    sfCompensation: 'Unpaid',
    hydCompensation: '2,200 INR per month'
  }
];
