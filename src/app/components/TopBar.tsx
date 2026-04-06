import { Play, FlaskConical, Rocket, Activity, Brain, Terminal as TerminalIcon } from 'lucide-react';
import { Project } from '../types';
import { steps } from '../data/mockData';
import { useLocation } from 'react-router';

interface TopBarProps {
  project: Project;
  onToggleSidebar: () => void;
  isSidebarVisible: boolean;
}

export function TopBar({ project, onToggleSidebar, isSidebarVisible }: TopBarProps) {
  const location = useLocation();
  const currentPath = location.pathname === '/' ? '/planning' : location.pathname;
  const currentStep = steps.find(s => s.path === currentPath);

  return (
    <div className="h-16 bg-[#0a0a0a] border-b border-white/5 flex items-center justify-between px-6">
      {/* Left: Project Info */}
      <div className="flex items-center gap-4">
        <div>
          <h2 className="text-sm text-white">{project.name}</h2>
          <p className="text-xs text-white/40">{currentStep?.label || 'Planning'}</p>
        </div>
        <div className="h-6 w-px bg-white/10" />
        <div className="flex items-center gap-2">
          <div className="w-48 h-2 bg-white/5 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-500"
              style={{ width: `${project.progress}%` }}
            />
          </div>
          <span className="text-xs text-white/60 tabular-nums">{project.progress}%</span>
        </div>
      </div>

      {/* Right: Actions & Status */}
      <div className="flex items-center gap-3">
        {/* System Status */}
        <div className="flex items-center gap-3 px-4 py-2 bg-white/5 rounded-lg">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50" />
            <span className="text-xs text-white/60">MCP</span>
          </div>
          <div className="w-px h-4 bg-white/10" />
          <div className="flex items-center gap-1.5">
            <Brain className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
            <span className="text-xs text-white/60">AI Active</span>
          </div>
          <div className="w-px h-4 bg-white/10" />
          <div className="flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-xs text-white/60">Ready</span>
          </div>
        </div>

        {/* Action Buttons */}
        <button className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors text-white text-sm">
          <Play className="w-4 h-4" />
          Run
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors text-white text-sm">
          <FlaskConical className="w-4 h-4" />
          Test
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 rounded-lg transition-all text-white text-sm">
          <Rocket className="w-4 h-4" />
          Deploy
        </button>
      </div>
    </div>
  );
}