export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface CaseStudy {
  title: string;
  badge?: string;
  client?: string;
  description: string;
  longDescription?: string;
  highlights?: string[];
  techStack?: string[];
  metrics: string[];
  tags: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface SceneStep {
  label: string;
  duration?: number; // MS before auto-advancing
}

export interface CapabilityTab {
  id: string;
  label: string;
  caption: string;
  proof: string;
  steps: SceneStep[];
}
