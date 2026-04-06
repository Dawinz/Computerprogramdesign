import { Brain, Users, List, Box, FlaskConical, ChevronRight } from 'lucide-react';
import { Project } from '../types';

interface RightPanelProps {
  project: Project;
}

export function RightPanel({ project }: RightPanelProps) {
  return (
    <div className="w-80 bg-[#0a0a0a] border-l border-white/5 flex flex-col h-full overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-white/5">
        <div className="flex items-center gap-2">
          <Brain className="w-4 h-4 text-purple-400" />
          <h3 className="text-sm text-white">Project Brain</h3>
        </div>
        <p className="text-xs text-white/40 mt-1">Live context updates</p>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Overview */}
        <div className="space-y-2">
          <div className="text-xs uppercase tracking-wider text-white/40">Overview</div>
          <div className="p-3 bg-white/5 rounded-lg border border-white/10">
            <p className="text-xs text-white/80 leading-relaxed">{project.description}</p>
          </div>
        </div>

        {/* Personas */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Users className="w-3.5 h-3.5 text-white/40" />
            <div className="text-xs uppercase tracking-wider text-white/40">Personas</div>
            <span className="text-xs text-white/30">({project.personas.length})</span>
          </div>
          <div className="space-y-2">
            {project.personas.map((persona) => (
              <div
                key={persona.id}
                className="p-3 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-colors cursor-pointer group"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="text-sm text-white">{persona.name}</div>
                    <div className="text-xs text-white/40 mt-0.5">{persona.role}</div>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-white/20 group-hover:text-white/40 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <List className="w-3.5 h-3.5 text-white/40" />
            <div className="text-xs uppercase tracking-wider text-white/40">Features</div>
            <span className="text-xs text-white/30">({project.features.length})</span>
          </div>
          <div className="space-y-2">
            {project.features.map((feature) => (
              <div
                key={feature.id}
                className="p-3 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-colors cursor-pointer group"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <div className="text-sm text-white">{feature.name}</div>
                    <div className="text-xs text-white/40 mt-0.5 line-clamp-2">{feature.description}</div>
                  </div>
                  <span
                    className={`text-xs px-2 py-0.5 rounded ${
                      feature.priority === 'high'
                        ? 'bg-red-500/20 text-red-400'
                        : feature.priority === 'medium'
                        ? 'bg-yellow-500/20 text-yellow-400'
                        : 'bg-blue-500/20 text-blue-400'
                    }`}
                  >
                    {feature.priority}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Integrations */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Box className="w-3.5 h-3.5 text-white/40" />
            <div className="text-xs uppercase tracking-wider text-white/40">Integrations</div>
            <span className="text-xs text-white/30">({project.integrations.length})</span>
          </div>
          <div className="space-y-2">
            {project.integrations.map((integration, index) => (
              <div
                key={index}
                className="p-3 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-colors cursor-pointer group"
              >
                <div className="flex items-center justify-between">
                  <div className="text-sm text-white">{integration}</div>
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* External Docs */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <FlaskConical className="w-3.5 h-3.5 text-white/40" />
            <div className="text-xs uppercase tracking-wider text-white/40">External Docs</div>
            <span className="text-xs text-white/30">({project.externalDocs.length})</span>
          </div>
          <div className="space-y-2">
            {project.externalDocs.map((doc, index) => (
              <div
                key={index}
                className="p-3 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-colors cursor-pointer group"
              >
                <div className="text-xs text-blue-400 truncate hover:text-blue-300">{doc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
