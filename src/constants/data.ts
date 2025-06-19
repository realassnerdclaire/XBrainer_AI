
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
    id: 'machine-engineer-intern',
    title: 'Machine Engineer Intern',
    type: 'Intern',
    location: '',
    country: '',
    focus: 'Design and optimize hardware components for neural interface systems.',
    skills: 'Mechanical engineering, CAD software, hardware prototyping',
    background: 'Mechanical or electrical engineering studies',
    commitment: '15-20 hours/week',
    sfCompensation: 'Unpaid',
    hydCompensation: '2,200 INR per month',
    responsibilities: [
      'Design mechanical components for neural interfaces',
      'Create prototypes and test hardware reliability',
      'Collaborate with engineering teams',
      'Document design specifications'
    ]
  },
  {
    id: 'ai-research-analyst',
    title: 'AI Research Analyst',
    type: 'Intern',
    location: '',
    country: '',
    focus: 'Analyze AI security vulnerabilities in neural interface systems and develop mitigation strategies.',
    skills: 'Python, machine learning frameworks, data analysis, research methodology',
    background: 'Computer science, AI/ML, or cybersecurity studies',
    commitment: '15-20 hours/week',
    sfCompensation: 'Unpaid',
    hydCompensation: '2,200 INR per month',
    responsibilities: [
      'Research AI vulnerabilities in brain-machine interfaces',
      'Develop security analysis frameworks',
      'Create documentation and reports',
      'Collaborate with cybersecurity team'
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
  },
  {
    id: 'cybersecurity-engineer-neuro-context',
    title: 'Cybersecurity Engineer / Intern (Neuro-Context)',
    type: 'Intern',
    location: '',
    country: '',
    focus: 'Design secure communication layers for neural signal transmission and develop encryption frameworks.',
    skills: 'Python, C/C++, Go, cryptography, protocol security, neural data encryption',
    background: 'Computer science, cybersecurity, or applied cryptography',
    commitment: '15-20 hours/week',
    sfCompensation: 'Unpaid',
    hydCompensation: '2,200 INR per month',
    responsibilities: [
      'Prototype secure communication layers',
      'Design encrypted neurodata transmission protocols',
      'Research lightweight cryptographic algorithms',
      'Assist in modeling authentication schemes'
    ]
  },
  {
    id: 'software-devops-infrastructure-intern',
    title: 'Software/DevOps Infrastructure Intern',
    type: 'Intern',
    location: '',
    country: '',
    focus: 'Build and maintain automated CI/CD pipelines and support infrastructure for AI-based neural security platforms.',
    skills: 'Python, shell scripting, Docker, CI/CD tools, cloud platforms',
    background: 'Computer engineering, DevOps, or infrastructure automation',
    commitment: '15-20 hours/week',
    sfCompensation: 'Unpaid',
    hydCompensation: '2,200 INR per month',
    responsibilities: [
      'Design and implement CI/CD pipelines',
      'Automate build/test/deploy operations',
      'Create containerized testbeds',
      'Support infrastructure configuration'
    ]
  }
];
