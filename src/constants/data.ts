
import { Job } from '../types';
import { Brain, Shield, Lock, Search, Zap, CheckCircle, Microscope, Server, Users } from 'lucide-react';

// Navigation items for header - should be strings as expected by Header component
export const navItems = ['Home', 'Careers', 'Briefing Request'];

// Problem cards data with React components and actions
export const problemCards = [
  {
    title: 'Neural Signal Interception',
    description: 'Brain-computer interfaces create new attack vectors for cognitive data theft.',
    icon: Brain,
    action: () => {
      const element = document.getElementById('ai-capabilities');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  },
  {
    title: 'Encryption Challenges',
    description: 'Traditional cryptography may not suit real-time neural communication.',
    icon: Shield,
    action: () => {
      const element = document.getElementById('ai-capabilities');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  },
  {
    title: 'Authentication Complexity',
    description: 'Verifying identity through brain signals requires novel approaches.',
    icon: Lock,
    action: () => {
      const element = document.getElementById('ai-capabilities');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
];

// AI capabilities data with React components
export const aiCapabilities = [
  {
    title: 'Neural Protocol Analysis',
    description: 'Advanced AI models analyze neural communication patterns to identify vulnerabilities.',
    icon: Search
  },
  {
    title: 'Cryptographic Framework',
    description: 'Machine learning optimizes encryption algorithms for real-time neural data.',
    icon: Zap
  },
  {
    title: 'Security Validation',
    description: 'Automated testing ensures robust protection across neural interface systems.',
    icon: CheckCircle
  }
];

// Development phases data with all required properties
export const phases = [
  {
    phase: 'Phase 1',
    title: 'Research & Analysis',
    subtitle: 'Foundation Building',
    description: 'Analyze existing neural interface vulnerabilities and develop security frameworks.',
    status: 'completed',
    icon: Microscope,
    gradient: 'from-blue-500 to-cyan-500',
    bgPattern: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
    features: [
      'Comprehensive vulnerability assessment',
      'Security framework development',
      'Research methodology establishment',
      'Initial threat modeling'
    ]
  },
  {
    phase: 'Phase 2',
    title: 'Protocol Development',
    subtitle: 'Implementation Phase',
    description: 'Design and implement secure communication protocols for neural data transmission.',
    status: 'in-progress',
    icon: Server,
    gradient: 'from-purple-500 to-pink-500',
    bgPattern: 'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)',
    features: [
      'Secure protocol design',
      'Real-time encryption implementation',
      'Authentication mechanisms',
      'Performance optimization'
    ]
  },
  {
    phase: 'Phase 3',
    title: 'Testing & Validation',
    subtitle: 'Quality Assurance',
    description: 'Comprehensive testing of security protocols across various neural interface systems.',
    status: 'upcoming',
    icon: Users,
    gradient: 'from-green-500 to-emerald-500',
    bgPattern: 'radial-gradient(circle, rgba(34, 197, 94, 0.3) 0%, transparent 70%)',
    features: [
      'Multi-system compatibility testing',
      'Security validation protocols',
      'Performance benchmarking',
      'Real-world deployment preparation'
    ]
  }
];

export const baseJobs: Job[] = [
  {
    id: 'machine-learning-signal-processing-intern',
    title: 'Machine Learning / Signal Processing Intern',
    type: 'Intern',
    location: '',
    country: '',
    focus: 'Support R&D efforts in preprocessing and analyzing EEG or related neural interface data. Implement pipelines for artifact removal, anomaly detection, and signal classification.',
    skills: 'Python (required), NumPy, SciPy, pandas, PyTorch or TensorFlow, signal processing (filtering, ICA, spike sorting), time-series modeling, anomaly detection',
    background: 'Coursework or research in biomedical engineering, computational neuroscience, or machine learning. Exposure to brain-computer interface research or neuro-AI tools.',
    commitment: '15-20 hours/week',
    sfCompensation: 'Unpaid; potential for full-time paid role with salary + equity upon funding',
    hydCompensation: '$250 USD per month',
    responsibilities: [
      'Preprocess EEG or neurodata streams (e.g., filtering, ICA, normalization)',
      'Implement anomaly detection and signal segmentation pipelines',
      'Perform feature extraction from multichannel time-series data',
      'Evaluate model performance on simulated or recorded neural signals',
      'Document technical findings and assist in shaping internal research tools'
    ]
  },
  {
    id: 'cybersecurity-engineer-neuro-context',
    title: 'Cybersecurity Engineer / Intern (Neuro-Context)',
    type: 'Intern',
    location: '',
    country: '',
    focus: 'Help design and test secure transmission protocols, encryption frameworks, and authentication schemes tailored for neural interface data streams.',
    skills: 'Proficiency in Python, C/C++, or Go, familiarity with TLS, custom protocol stacks, or encryption algorithms, understanding of cybersecurity principles, applied cryptography',
    background: 'Computer science, cybersecurity, or applied cryptography major. Coursework or research experience in protocol security or secure systems.',
    commitment: '15-20 hours/week',
    sfCompensation: 'Unpaid; eligible for full-time paid role (with salary + equity) upon company funding',
    hydCompensation: '₹2200 INR per month',
    responsibilities: [
      'Prototype secure communication layers for real-time neural input/output',
      'Design and simulate protocol flow for encrypted neurodata transmission',
      'Research and compare lightweight cryptographic algorithms (e.g., post-quantum, homomorphic, biometric-based)',
      'Assist in modeling authentication or identity schemes for brain-signal signatures',
      'Contribute to internal security audits and protocol validation'
    ]
  },
  {
    id: 'software-devops-infrastructure-intern',
    title: 'Software/DevOps Infrastructure Intern',
    type: 'Intern',
    location: '',
    country: '',
    focus: 'Support backend automation and deployment workflows. Prototype tools, design simulation environments, and implement streamlined pipelines across AI and neurosecurity stack.',
    skills: 'Experience with Python and shell scripting, familiarity with Docker, GitHub Actions, or similar CI/CD tools, exposure to cloud platforms (AWS, GCP)',
    background: 'Computer engineering, DevOps, or infrastructure automation. Comfortable working in fast-paced R&D environments with minimal supervision.',
    commitment: '15-20 hours/week',
    sfCompensation: 'Unpaid; opportunity to transition into paid position (salary + equity) contingent on funding',
    hydCompensation: '₹2200 INR per month',
    responsibilities: [
      'Design and implement lightweight CI/CD pipelines for rapid experimentation',
      'Automate build/test/deploy operations across multi-agent research systems',
      'Create containerized testbeds (e.g., Docker) for simulating secure neural data channels',
      'Support infrastructure configuration for distributed BCI simulation environments'
    ]
  },
  {
    id: 'neuroscientist',
    title: 'Neuroscientist',
    type: 'Part-Time',
    location: '',
    country: '',
    focus: 'Guide understanding of neural signal structures and contribute insight into physiological patterns relevant to interface security.',
    skills: 'Experience with EEG, MEG, or other neurophysiological data types, strong understanding of brain dynamics or signal modeling, familiarity with Python, MATLAB, or R',
    background: 'Background in neuroscience, biomedical engineering, or cognitive science. Research experience in neuroimaging or brain-computer interface (BCI) work.',
    commitment: '15-20 hours/week',
    sfCompensation: 'Applications open July 5, 2025',
    hydCompensation: 'Applications open July 5, 2025',
    responsibilities: [
      'Analyze and interpret neural data (EEG or similar signal types)',
      'Validate statistical or computational models of neural physiology',
      'Collaborate with AI and cybersecurity researchers to inform protocol-level design',
      'Investigate the impact of neural variability on cognitive authentication and transmission systems'
    ]
  },
  {
    id: 'neuroengineer',
    title: 'Neuroengineer',
    type: 'Part-Time',
    location: '',
    country: '',
    focus: 'Design and optimize neural interface hardware, develop signal acquisition systems.',
    skills: 'Biomedical engineering, signal processing, hardware design',
    background: 'Biomedical engineering, electrical engineering, or neuroscience',
    commitment: '15-20 hours/week',
    sfCompensation: 'Applications open July 5, 2025',
    hydCompensation: 'Applications open July 5, 2025',
    responsibilities: [
      'Design neural interface hardware components',
      'Develop signal acquisition systems',
      'Ensure hardware-security integration',
      'Optimize system performance'
    ]
  },
  {
    id: 'hardware-interface-advisor',
    title: 'Hardware Interface Advisor',
    type: 'Part-Time',
    location: '',
    country: '',
    focus: 'Provide strategic guidance on hardware-software integration and neural interface standards.',
    skills: 'Hardware design, system integration, neural interface standards',
    background: 'Hardware engineering, systems architecture, or neural interface development',
    commitment: '10-15 hours/week',
    sfCompensation: 'Applications open July 5, 2025',
    hydCompensation: 'Applications open July 5, 2025',
    responsibilities: [
      'Provide strategic hardware integration guidance',
      'Review neural interface standards',
      'Ensure compatibility between hardware and security protocols',
      'Mentor engineering team'
    ]
  }
];
