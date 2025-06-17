
export interface PhaseData {
  title: string;
  subtitle: string;
  features: string[];
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  bgPattern: string;
}

export interface AICapability {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface ProblemCard {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  action: () => void;
}

export interface MousePosition {
  x: number;
  y: number;
}
