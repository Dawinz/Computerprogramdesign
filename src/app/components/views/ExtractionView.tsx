import { Filter, Check, Edit2, Download } from 'lucide-react';
import { mockProject } from '../../data/mockData';

export function ExtractionView() {
  return (
    <div className="h-full bg-[#0f0f0f] p-6">
      {/* Header */}
      <div className="flex items-start gap-3 mb-6">
        <div className="p-2 bg-blue-500/20 rounded-lg">
          <Filter className="w-5 h-5 text-blue-400" />
        </div>
        <div className="flex-1">
          <h2 className="text-lg text-white">Extraction Phase</h2>
          <p className="text-sm text-white/60 mt-1">
            Review and confirm the extracted data from your planning conversation
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors text-sm text-white">
          <Download className="w-4 h-4" />
          Export JSON
        </button>
      </div>

      <div className="max-w-5xl space-y-6">
        {/* Personas Section */}
        <div className="bg-white/5 rounded-xl border border-white/10 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white flex items-center gap-2">
              <span className="w-6 h-6 bg-purple-500/20 rounded flex items-center justify-center text-xs text-purple-400">
                {mockProject.personas.length}
              </span>
              Personas Extracted
            </h3>
            <button className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1">
              <Edit2 className="w-3 h-3" />
              Edit
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockProject.personas.map((persona) => (
              <div
                key={persona.id}
                className="bg-white/5 rounded-lg border border-white/10 p-4 hover:border-white/20 transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-white">{persona.name}</h4>
                  <Check className="w-4 h-4 text-emerald-400" />
                </div>
                <p className="text-xs text-blue-400 mb-2">{persona.role}</p>
                <p className="text-xs text-white/60 leading-relaxed">{persona.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white/5 rounded-xl border border-white/10 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white flex items-center gap-2">
              <span className="w-6 h-6 bg-blue-500/20 rounded flex items-center justify-center text-xs text-blue-400">
                {mockProject.features.length}
              </span>
              Features Extracted
            </h3>
            <button className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1">
              <Edit2 className="w-3 h-3" />
              Edit
            </button>
          </div>
          <div className="space-y-3">
            {mockProject.features.map((feature) => (
              <div
                key={feature.id}
                className="bg-white/5 rounded-lg border border-white/10 p-4 hover:border-white/20 transition-colors"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-white">{feature.name}</h4>
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
                    <p className="text-sm text-white/60">{feature.description}</p>
                  </div>
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Integrations Section */}
        <div className="bg-white/5 rounded-xl border border-white/10 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white flex items-center gap-2">
              <span className="w-6 h-6 bg-emerald-500/20 rounded flex items-center justify-center text-xs text-emerald-400">
                {mockProject.integrations.length}
              </span>
              Integrations Identified
            </h3>
            <button className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1">
              <Edit2 className="w-3 h-3" />
              Edit
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {mockProject.integrations.map((integration, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-lg border border-white/10 p-3 hover:border-white/20 transition-colors flex items-center justify-between"
              >
                <span className="text-sm text-white">{integration}</span>
                <Check className="w-4 h-4 text-emerald-400" />
              </div>
            ))}
          </div>
        </div>

        {/* External Documentation */}
        <div className="bg-white/5 rounded-xl border border-white/10 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white flex items-center gap-2">
              <span className="w-6 h-6 bg-orange-500/20 rounded flex items-center justify-center text-xs text-orange-400">
                {mockProject.externalDocs.length}
              </span>
              External Documentation
            </h3>
            <button className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1">
              <Edit2 className="w-3 h-3" />
              Edit
            </button>
          </div>
          <div className="space-y-2">
            {mockProject.externalDocs.map((doc, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-lg border border-white/10 p-3 hover:border-white/20 transition-colors flex items-center justify-between"
              >
                <a href={doc} className="text-sm text-blue-400 hover:text-blue-300 truncate">
                  {doc}
                </a>
                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 ml-2" />
              </div>
            ))}
          </div>
        </div>

        {/* Confirm Button */}
        <div className="flex justify-end">
          <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 rounded-lg transition-all text-white flex items-center gap-2">
            <Check className="w-4 h-4" />
            Confirm & Continue to Design
          </button>
        </div>
      </div>
    </div>
  );
}
