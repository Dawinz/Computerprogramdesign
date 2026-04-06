import { Layout, Database, Server, Globe, ArrowRight, Code2 } from 'lucide-react';

const techStack = {
  frontend: ['React', 'TypeScript', 'Tailwind CSS', 'React Query'],
  backend: ['Node.js', 'Express', 'PostgreSQL', 'Redis'],
  infrastructure: ['Vercel', 'Railway', 'Supabase', 'AWS S3'],
};

const apiEndpoints = [
  { method: 'POST', path: '/api/auth/login', description: 'User authentication' },
  { method: 'GET', path: '/api/courses', description: 'Fetch all courses' },
  { method: 'POST', path: '/api/courses', description: 'Create new course' },
  { method: 'POST', path: '/api/assignments', description: 'Submit assignment' },
  { method: 'GET', path: '/api/analytics/:userId', description: 'Get user analytics' },
  { method: 'POST', path: '/api/chat/message', description: 'Send chat message' },
];

export function ArchitectureView() {
  return (
    <div className="h-full bg-[#0f0f0f] p-6 overflow-y-auto">
      {/* Header */}
      <div className="flex items-start gap-3 mb-6">
        <div className="p-2 bg-orange-500/20 rounded-lg">
          <Layout className="w-5 h-5 text-orange-400" />
        </div>
        <div className="flex-1">
          <h2 className="text-lg text-white">Architecture</h2>
          <p className="text-sm text-white/60 mt-1">
            System architecture, tech stack, and API structure
          </p>
        </div>
      </div>

      <div className="max-w-6xl space-y-6">
        {/* System Diagram */}
        <div className="bg-white/5 rounded-xl border border-white/10 p-6">
          <h3 className="text-white mb-6">System Architecture</h3>
          
          <div className="flex items-center justify-center gap-8 py-8">
            {/* Frontend */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-500/20 to-purple-500/10 rounded-xl border border-purple-500/30 flex flex-col items-center justify-center p-4">
                <Globe className="w-8 h-8 text-purple-400 mb-2" />
                <div className="text-sm text-white text-center">Frontend</div>
                <div className="text-xs text-white/40 text-center">React + TypeScript</div>
              </div>
              <div className="text-xs text-white/60">Vercel</div>
            </div>

            {/* Arrow */}
            <ArrowRight className="w-6 h-6 text-white/40" />

            {/* Backend */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500/20 to-blue-500/10 rounded-xl border border-blue-500/30 flex flex-col items-center justify-center p-4">
                <Server className="w-8 h-8 text-blue-400 mb-2" />
                <div className="text-sm text-white text-center">Backend API</div>
                <div className="text-xs text-white/40 text-center">Node.js + Express</div>
              </div>
              <div className="text-xs text-white/60">Railway</div>
            </div>

            {/* Arrow */}
            <ArrowRight className="w-6 h-6 text-white/40" />

            {/* Database */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-32 h-32 bg-gradient-to-br from-emerald-500/20 to-emerald-500/10 rounded-xl border border-emerald-500/30 flex flex-col items-center justify-center p-4">
                <Database className="w-8 h-8 text-emerald-400 mb-2" />
                <div className="text-sm text-white text-center">Database</div>
                <div className="text-xs text-white/40 text-center">PostgreSQL</div>
              </div>
              <div className="text-xs text-white/60">Supabase</div>
            </div>
          </div>

          {/* Additional Services */}
          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="bg-white/5 rounded-lg border border-white/10 p-4 text-center">
              <div className="text-sm text-white mb-1">File Storage</div>
              <div className="text-xs text-white/40">AWS S3</div>
            </div>
            <div className="bg-white/5 rounded-lg border border-white/10 p-4 text-center">
              <div className="text-sm text-white mb-1">Cache Layer</div>
              <div className="text-xs text-white/40">Redis</div>
            </div>
            <div className="bg-white/5 rounded-lg border border-white/10 p-4 text-center">
              <div className="text-sm text-white mb-1">Real-time</div>
              <div className="text-xs text-white/40">WebSockets</div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="bg-white/5 rounded-xl border border-white/10 p-6">
          <div className="flex items-center gap-2 mb-4">
            <Code2 className="w-4 h-4 text-white/60" />
            <h3 className="text-white">Tech Stack</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.entries(techStack).map(([category, technologies]) => (
              <div key={category} className="space-y-2">
                <div className="text-sm text-white/60 capitalize">{category}</div>
                <div className="space-y-2">
                  {technologies.map((tech) => (
                    <div
                      key={tech}
                      className="bg-white/5 rounded-lg border border-white/10 px-3 py-2 text-sm text-white"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* API Structure */}
        <div className="bg-white/5 rounded-xl border border-white/10 p-6">
          <div className="flex items-center gap-2 mb-4">
            <Server className="w-4 h-4 text-white/60" />
            <h3 className="text-white">API Endpoints</h3>
          </div>
          <div className="space-y-2">
            {apiEndpoints.map((endpoint, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-lg border border-white/10 p-3 hover:border-white/20 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`text-xs px-2 py-1 rounded font-mono ${
                      endpoint.method === 'GET'
                        ? 'bg-blue-500/20 text-blue-400'
                        : endpoint.method === 'POST'
                        ? 'bg-emerald-500/20 text-emerald-400'
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}
                  >
                    {endpoint.method}
                  </span>
                  <code className="text-sm text-white/80 font-mono">{endpoint.path}</code>
                  <span className="text-sm text-white/40 ml-auto">{endpoint.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Data Models */}
        <div className="bg-white/5 rounded-xl border border-white/10 p-6">
          <div className="flex items-center gap-2 mb-4">
            <Database className="w-4 h-4 text-white/60" />
            <h3 className="text-white">Data Models</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {['User', 'Course', 'Assignment', 'Message'].map((model) => (
              <div key={model} className="bg-white/5 rounded-lg border border-white/10 p-4">
                <div className="text-sm text-white mb-2">{model}</div>
                <div className="space-y-1 text-xs text-white/60 font-mono">
                  <div>id: UUID</div>
                  <div>created_at: Timestamp</div>
                  <div>updated_at: Timestamp</div>
                  <div className="text-white/40">+ {Math.floor(Math.random() * 5) + 3} more fields</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
