import { Link, useLocation } from 'react-router';
import { Plus, Circle, CheckCircle2, Radio, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { steps } from '../data/mockData';
import { Step } from '../types';
import { useState } from 'react';

const iconMap: Record<string, any> = {
  'lightbulb': LucideIcons.Lightbulb,
  'filter': LucideIcons.Filter,
  'palette': LucideIcons.Palette,
  'layout': LucideIcons.Layout,
  'code': LucideIcons.Code,
  'flask-conical': LucideIcons.FlaskConical,
  'shield-check': LucideIcons.ShieldCheck,
  'rocket': LucideIcons.Rocket,
};

interface SidebarProps {
  projects: Array<{ id: string; name: string; currentStep: string; progress: number }>;
  currentProjectId: string;
  onProjectSelect: (id: string) => void;
  isVisible: boolean;
  onToggle: () => void;
}

export function Sidebar({ projects, currentProjectId, onProjectSelect, isVisible, onToggle }: SidebarProps) {
  const location = useLocation();
  const [isProjectsExpanded, setIsProjectsExpanded] = useState(true);

  const getStepStatus = (step: Step): 'pending' | 'active' | 'completed' => {
    const currentPath = location.pathname === '/' ? '/planning' : location.pathname;
    if (currentPath === step.path) return 'active';
    
    const currentStepIndex = steps.findIndex(s => s.path === currentPath);
    const stepIndex = steps.findIndex(s => s.id === step.id);
    
    return stepIndex < currentStepIndex ? 'completed' : 'pending';
  };

  const currentProject = projects.find(p => p.id === currentProjectId);

  return (
    <div 
      className={`relative bg-[#0a0a0a] border-r border-white/5 flex flex-col h-screen transition-all duration-300 ease-in-out ${
        isVisible ? 'w-64' : 'w-16'
      }`}
    >
      {/* Toggle Button */}
      <button
        onClick={onToggle}
        className="absolute -right-3 top-6 z-10 w-6 h-6 bg-[#0a0a0a] border border-white/10 rounded-full flex items-center justify-center hover:bg-white/5 transition-all hover:border-white/20 shadow-lg"
        title={isVisible ? "Collapse sidebar" : "Expand sidebar"}
      >
        {isVisible ? (
          <ChevronLeft className="w-3.5 h-3.5 text-white/60" />
        ) : (
          <ChevronRight className="w-3.5 h-3.5 text-white/60" />
        )}
      </button>

      {/* Logo */}
      <div className="p-6 border-b border-white/5 flex items-center justify-center">
        {isVisible ? (
          <div className="flex items-center gap-2 w-full">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <LucideIcons.Factory className="w-5 h-5 text-white" />
            </div>
            <div className="min-w-0">
              <h1 className="text-sm font-semibold text-white truncate">Factos</h1>
              <p className="text-xs text-white/40 truncate">AI SaaS Builder</p>
            </div>
          </div>
        ) : (
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
            <LucideIcons.Factory className="w-5 h-5 text-white" />
          </div>
        )}
      </div>

      {/* Projects */}
      <div className="border-b border-white/5">
        {isVisible ? (
          <>
            <div className="w-full flex items-center justify-between px-4 pt-4 pb-3">
              <button
                onClick={() => setIsProjectsExpanded(!isProjectsExpanded)}
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <span className="text-xs uppercase tracking-wider text-white/40">Projects</span>
                <ChevronDown 
                  className={`w-4 h-4 text-white/40 transition-transform duration-200 ${
                    isProjectsExpanded ? 'rotate-0' : '-rotate-90'
                  }`}
                />
              </button>
              <button 
                onClick={() => {
                  // Add new project logic here
                }}
                className="p-1 hover:bg-white/5 rounded transition-colors"
                title="New project"
              >
                <Plus className="w-4 h-4 text-white/60" />
              </button>
            </div>
            
            <div 
              className={`overflow-hidden transition-all duration-200 ${
                isProjectsExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-4 pb-4 space-y-1">
                {projects.map((project) => (
                  <button
                    key={project.id}
                    onClick={() => onProjectSelect(project.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      project.id === currentProjectId
                        ? 'bg-white/10 text-white'
                        : 'text-white/60 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <div className="text-sm truncate">{project.name}</div>
                    <div className="text-xs text-white/40 mt-0.5">{project.progress}% complete</div>
                  </button>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="p-4 flex flex-col items-center gap-2">
            {/* Show only current project when collapsed */}
            <button
              onClick={() => onProjectSelect(currentProjectId)}
              className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/10 transition-colors relative group"
              title={currentProject?.name}
            >
              <div className="w-2 h-2 rounded-full bg-purple-400" />
              
              {/* Tooltip */}
              <div className="absolute left-full ml-2 px-2 py-1 bg-[#1a1a1a] border border-white/10 rounded text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
                {currentProject?.name}
              </div>
            </button>
            <button 
              className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-white/5 transition-colors group relative"
              title="New project"
            >
              <Plus className="w-4 h-4 text-white/60" />
              
              {/* Tooltip */}
              <div className="absolute left-full ml-2 px-2 py-1 bg-[#1a1a1a] border border-white/10 rounded text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
                New project
              </div>
            </button>
          </div>
        )}
      </div>

      {/* Steps */}
      <div className="flex-1 p-4 overflow-y-auto">
        {isVisible && (
          <div className="text-xs uppercase tracking-wider text-white/40 mb-3">Pipeline</div>
        )}
        <div className="space-y-1">
          {steps.map((step, index) => {
            const Icon = iconMap[step.icon];
            const status = getStepStatus(step);
            
            return (
              <Link
                key={step.id}
                to={step.path}
                className={`flex items-center rounded-lg transition-all group relative ${
                  isVisible ? 'gap-3 px-3 py-2.5' : 'justify-center px-0 py-2.5'
                } ${
                  status === 'active'
                    ? 'bg-white/10 text-white'
                    : status === 'completed'
                    ? 'text-emerald-400 hover:bg-white/5'
                    : 'text-white/40 hover:bg-white/5 hover:text-white/60'
                }`}
              >
                <div className={`relative ${isVisible ? '' : 'mx-auto'}`}>
                  <Icon className="w-4 h-4" />
                  {isVisible && index < steps.length - 1 && (
                    <div
                      className={`absolute left-1/2 top-6 w-px h-4 -translate-x-1/2 ${
                        status === 'completed' ? 'bg-emerald-400/30' : 'bg-white/10'
                      }`}
                    />
                  )}
                </div>
                {isVisible && (
                  <>
                    <span className="text-sm flex-1">{step.label}</span>
                    <div className="w-1.5 h-1.5 rounded-full transition-all">
                      {status === 'active' && (
                        <Radio className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
                      )}
                      {status === 'completed' && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      )}
                      {status === 'pending' && (
                        <Circle className="w-3.5 h-3.5 text-white/20" />
                      )}
                    </div>
                  </>
                )}
                
                {/* Tooltip for collapsed state */}
                {!isVisible && (
                  <div className="absolute left-full ml-2 px-2 py-1 bg-[#1a1a1a] border border-white/10 rounded text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
                    {step.label}
                  </div>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}