import { Project, Step, Message, TestAgent, SecurityCheck, DeploymentTarget } from '../types';

export const steps: Step[] = [
  { id: '1', label: 'Planning', path: '/planning', icon: 'lightbulb', status: 'active' },
  { id: '2', label: 'Extraction', path: '/extraction', icon: 'filter', status: 'pending' },
  { id: '3', label: 'Design & Assets', path: '/design', icon: 'palette', status: 'pending' },
  { id: '4', label: 'Architecture', path: '/architecture', icon: 'layout', status: 'pending' },
  { id: '5', label: 'Development', path: '/development', icon: 'code', status: 'pending' },
  { id: '6', label: 'Testing', path: '/testing', icon: 'flask-conical', status: 'pending' },
  { id: '7', label: 'Security', path: '/security', icon: 'shield-check', status: 'pending' },
  { id: '8', label: 'Deployment', path: '/deployment', icon: 'rocket', status: 'pending' },
];

export const mockProject: Project = {
  id: '1',
  name: 'EduConnect Platform',
  description: 'AI-powered learning management system for universities',
  currentStep: 'planning',
  progress: 12,
  personas: [
    {
      id: '1',
      name: 'Student',
      role: 'End User',
      description: 'University student accessing courses and materials',
    },
    {
      id: '2',
      name: 'Professor',
      role: 'Content Creator',
      description: 'Creates and manages courses, grades assignments',
    },
    {
      id: '3',
      name: 'Administrator',
      role: 'System Admin',
      description: 'Manages users, permissions, and system settings',
    },
  ],
  features: [
    {
      id: '1',
      name: 'Course Management',
      description: 'Create, edit, and organize courses',
      priority: 'high',
    },
    {
      id: '2',
      name: 'Assignment Submission',
      description: 'Students can submit assignments with file uploads',
      priority: 'high',
    },
    {
      id: '3',
      name: 'Real-time Chat',
      description: 'In-app messaging between students and professors',
      priority: 'medium',
    },
    {
      id: '4',
      name: 'Grade Analytics',
      description: 'Visual analytics dashboard for performance tracking',
      priority: 'medium',
    },
  ],
  externalDocs: [
    'https://docs.canvas.com/api',
    'https://www.schoology.com/api-documentation',
  ],
  integrations: ['Stripe (Payments)', 'Zoom (Video)', 'AWS S3 (Storage)'],
};

export const mockMessages: Message[] = [
  {
    id: '1',
    type: 'user',
    content: 'I want to build a learning management system for universities. It should allow professors to create courses, students to submit assignments, and include real-time chat.',
    timestamp: new Date(Date.now() - 300000),
  },
  {
    id: '2',
    type: 'ai',
    content: 'Great! I\'ll help you build an LMS. Let me clarify a few things:\n\n1. **User Roles**: I\'ve identified Student, Professor, and Administrator. Are there any other roles needed?\n2. **Core Features**: Course management, assignment submission, and real-time chat are noted. Do you need:\n   - Grading system?\n   - Video conferencing integration?\n   - Payment processing for courses?\n3. **Scale**: How many concurrent users do you expect?',
    timestamp: new Date(Date.now() - 240000),
  },
  {
    id: '3',
    type: 'user',
    content: 'Yes, add grading and analytics. Integrate with Zoom for video. For payments, use Stripe. We expect around 5,000 students initially.',
    timestamp: new Date(Date.now() - 180000),
  },
  {
    id: '4',
    type: 'ai',
    content: 'Perfect! I\'ve updated the project context:\n\n✅ **Personas**: Student, Professor, Administrator\n✅ **Features**: Course management, assignments, grading, chat, analytics\n✅ **Integrations**: Zoom (video), Stripe (payments), AWS S3 (file storage)\n✅ **Scale**: 5,000 initial users\n\nI\'m extracting relevant documentation from similar platforms like Canvas and Schoology. Would you like to proceed to the extraction phase?',
    timestamp: new Date(Date.now() - 120000),
  },
];

export const mockTestAgents: TestAgent[] = [
  { id: '1', name: 'Agent-001', status: 'running', currentAction: 'Logging in as student', avatar: '👨‍🎓' },
  { id: '2', name: 'Agent-002', status: 'running', currentAction: 'Creating new course', avatar: '👨‍🏫' },
  { id: '3', name: 'Agent-003', status: 'passed', currentAction: 'Submitted assignment', avatar: '👩‍🎓' },
  { id: '4', name: 'Agent-004', status: 'running', currentAction: 'Viewing analytics dashboard', avatar: '👔' },
  { id: '5', name: 'Agent-005', status: 'failed', currentAction: 'Failed to upload file', avatar: '👨‍💼' },
  { id: '6', name: 'Agent-006', status: 'running', currentAction: 'Sending chat message', avatar: '👩‍🏫' },
  { id: '7', name: 'Agent-007', status: 'passed', currentAction: 'Graded assignment', avatar: '👨‍🏫' },
  { id: '8', name: 'Agent-008', status: 'idle', currentAction: 'Waiting...', avatar: '👩‍💼' },
  { id: '9', name: 'Agent-009', status: 'running', currentAction: 'Browsing course catalog', avatar: '👨‍🎓' },
  { id: '10', name: 'Agent-010', status: 'running', currentAction: 'Updating profile', avatar: '👩‍🎓' },
];

export const mockSecurityChecks: SecurityCheck[] = [
  {
    id: '1',
    name: 'Authentication Validation',
    status: 'passed',
    description: 'JWT tokens properly validated, secure session management',
    riskLevel: 'low',
  },
  {
    id: '2',
    name: 'Authorization Rules',
    status: 'warning',
    description: 'Some endpoints missing role-based access control',
    riskLevel: 'medium',
  },
  {
    id: '3',
    name: 'API Rate Limiting',
    status: 'passed',
    description: 'Rate limiting configured for all public endpoints',
    riskLevel: 'low',
  },
  {
    id: '4',
    name: 'SQL Injection Protection',
    status: 'passed',
    description: 'Parameterized queries used throughout',
    riskLevel: 'low',
  },
  {
    id: '5',
    name: 'XSS Prevention',
    status: 'warning',
    description: 'Some user inputs not properly sanitized',
    riskLevel: 'high',
  },
  {
    id: '6',
    name: 'CORS Configuration',
    status: 'passed',
    description: 'CORS properly configured with whitelist',
    riskLevel: 'low',
  },
];

export const mockDeploymentTargets: DeploymentTarget[] = [
  {
    id: '1',
    name: 'Frontend',
    type: 'frontend',
    status: 'success',
    url: 'https://educonnect.vercel.app',
  },
  {
    id: '2',
    name: 'Backend API',
    type: 'backend',
    status: 'deploying',
  },
  {
    id: '3',
    name: 'PostgreSQL Database',
    type: 'database',
    status: 'success',
    url: 'https://supabase.co/dashboard/project/educonnect',
  },
];

export const mockProjects = [
  mockProject,
  {
    id: '2',
    name: 'FinTrack Pro',
    description: 'Personal finance tracking app',
    currentStep: 'development',
    progress: 65,
    personas: [],
    features: [],
    externalDocs: [],
    integrations: [],
  },
  {
    id: '3',
    name: 'HealthHub',
    description: 'Telemedicine platform',
    currentStep: 'testing',
    progress: 82,
    personas: [],
    features: [],
    externalDocs: [],
    integrations: [],
  },
];
