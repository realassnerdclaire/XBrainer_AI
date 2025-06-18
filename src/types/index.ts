
export interface MousePosition {
  x: number;
  y: number;
}

export interface ProblemCard {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  action: () => void;
}

export interface Phase {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  features: string[];
  gradient: string;
  bgPattern: string;
}

export interface AICapability {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export interface Job {
  id: string;
  title: string;
  type: 'Intern' | 'Part-Time';
  location: string;
  country: string;
  focus: string;
  skills: string;
  background: string;
  compensation?: string;
  commitment?: string;
  responsibilities?: string[];
  sfCompensation?: string;
  hydCompensation?: string;
}
