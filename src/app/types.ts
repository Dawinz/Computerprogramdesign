export type StepStatus = 'pending' | 'active' | 'completed';

export interface Step {
  id: string;
  label: string;
  path: string;
  icon: string;
  status: StepStatus;
}

export interface Persona {
  id: string;
  name: string;
  role: string;
  description: string;
}

export interface Feature {
  id: string;
  name: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
}

export interface Project {
  id: string;
  name: string;
  description: string;
  currentStep: string;
  progress: number;
  personas: Persona[];
  features: Feature[];
  externalDocs: string[];
  integrations: string[];
}

export interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

export interface TestAgent {
  id: string;
  name: string;
  status: 'idle' | 'running' | 'passed' | 'failed';
  currentAction: string;
  avatar: string;
}

export interface SecurityCheck {
  id: string;
  name: string;
  status: 'passed' | 'warning' | 'failed';
  description: string;
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
}

export interface DeploymentTarget {
  id: string;
  name: string;
  type: 'frontend' | 'backend' | 'database';
  status: 'pending' | 'deploying' | 'success' | 'failed';
  url?: string;
}
