import { Rocket, ExternalLink, CheckCircle2, Loader2, AlertCircle, Copy } from 'lucide-react';
import { mockDeploymentTargets } from '../../data/mockData';
import { DeploymentTarget } from '../../types';

const deploymentLogs = [
  { time: '14:30:01', target: 'Frontend', message: 'Building production bundle...' },
  { time: '14:30:15', target: 'Frontend', message: 'Optimizing assets...' },
  { time: '14:30:28', target: 'Frontend', message: '✓ Build complete (2.3 MB)' },
  { time: '14:30:29', target: 'Frontend', message: 'Deploying to Vercel...' },
  { time: '14:30:45', target: 'Frontend', message: '✓ Deployed successfully' },
  { time: '14:30:46', target: 'Backend', message: 'Starting backend deployment...' },
  { time: '14:30:47', target: 'Backend', message: 'Installing dependencies...' },
  { time: '14:30:52', target: 'Backend', message: 'Running build scripts...' },
  { time: '14:30:58', target: 'Backend', message: 'Deploying to Railway...' },
  { time: '14:31:05', target: 'Database', message: '✓ Database migrations complete' },
];

export function DeploymentView() {
  const getStatusIcon = (status: DeploymentTarget['status']) => {
    switch (status) {
      case 'success':
        return <CheckCircle2 className="w-5 h-5 text-emerald-400" />;
      case 'deploying':
        return <Loader2 className="w-5 h-5 text-blue-400 animate-spin" />;
      case 'failed':
        return <AlertCircle className="w-5 h-5 text-red-400" />;
      default:
        return <div className="w-5 h-5 border-2 border-white/20 rounded-full" />;
    }
  };

  const getStatusColor = (status: DeploymentTarget['status']) => {
    switch (status) {
      case 'success':
        return 'bg-emerald-500/10 border-emerald-500/20';
      case 'deploying':
        return 'bg-blue-500/10 border-blue-500/20';
      case 'failed':
        return 'bg-red-500/10 border-red-500/20';
      default:
        return 'bg-white/5 border-white/10';
    }
  };

  return (
    <div className="h-full bg-[#0f0f0f] p-6 overflow-y-auto">
      {/* Header */}
      <div className="flex items-start gap-3 mb-6">
        <div className="p-2 bg-purple-500/20 rounded-lg">
          <Rocket className="w-5 h-5 text-purple-400" />
        </div>
        <div className="flex-1">
          <h2 className="text-lg text-white">Deployment</h2>
          <p className="text-sm text-white/60 mt-1">
            Automated deployment to production infrastructure
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 rounded-lg transition-all text-white text-sm">
          <Rocket className="w-4 h-4" />
          Deploy All
        </button>
      </div>

      <div className="max-w-6xl space-y-6">
        {/* Deployment Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {mockDeploymentTargets.map((target) => (
            <div
              key={target.id}
              className={`rounded-xl border p-6 ${getStatusColor(target.status)}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-white mb-1">{target.name}</div>
                  <div className="text-xs text-white/60 capitalize">{target.type}</div>
                </div>
                {getStatusIcon(target.status)}
              </div>

              {target.status === 'success' && target.url && (
                <a
                  href={target.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 mt-3"
                >
                  <span className="truncate">{target.url.replace('https://', '')}</span>
                  <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                </a>
              )}

              {target.status === 'deploying' && (
                <div className="text-sm text-blue-400 mt-3">Deployment in progress...</div>
              )}

              {target.status === 'success' && (
                <div className="flex gap-2 mt-4">
                  <button className="flex-1 px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded text-xs text-white transition-colors">
                    View Logs
                  </button>
                  <button className="px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded text-xs text-white transition-colors">
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Deployment Configuration */}
        <div className="bg-white/5 rounded-xl border border-white/10 p-6">
          <h3 className="text-white mb-4">Deployment Configuration</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div>
                <div className="text-sm text-white/60 mb-1">Frontend Platform</div>
                <div className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white">
                  Vercel
                </div>
              </div>
              <div>
                <div className="text-sm text-white/60 mb-1">Build Command</div>
                <div className="bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm text-white font-mono">
                  npm run build
                </div>
              </div>
              <div>
                <div className="text-sm text-white/60 mb-1">Output Directory</div>
                <div className="bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm text-white font-mono">
                  dist
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <div className="text-sm text-white/60 mb-1">Backend Platform</div>
                <div className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white">
                  Railway
                </div>
              </div>
              <div>
                <div className="text-sm text-white/60 mb-1">Start Command</div>
                <div className="bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm text-white font-mono">
                  npm start
                </div>
              </div>
              <div>
                <div className="text-sm text-white/60 mb-1">Port</div>
                <div className="bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm text-white font-mono">
                  3000
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Environment Variables */}
        <div className="bg-white/5 rounded-xl border border-white/10 p-6">
          <h3 className="text-white mb-4">Environment Variables</h3>
          <div className="space-y-2">
            {[
              { key: 'DATABASE_URL', value: '••••••••••••••••' },
              { key: 'JWT_SECRET', value: '••••••••••••••••' },
              { key: 'STRIPE_SECRET_KEY', value: '••••••••••••••••' },
              { key: 'AWS_ACCESS_KEY', value: '••••••••••••••••' },
              { key: 'ZOOM_API_KEY', value: '••••••••••••••••' },
            ].map((env) => (
              <div
                key={env.key}
                className="bg-white/5 border border-white/10 rounded-lg p-3 flex items-center justify-between"
              >
                <div className="flex items-center gap-3 flex-1">
                  <code className="text-sm text-white/80 font-mono">{env.key}</code>
                  <span className="text-sm text-white/40">=</span>
                  <code className="text-sm text-white/60 font-mono">{env.value}</code>
                </div>
                <button className="text-xs text-blue-400 hover:text-blue-300">Edit</button>
              </div>
            ))}
          </div>
        </div>

        {/* Deployment Logs */}
        <div className="bg-white/5 rounded-xl border border-white/10 p-6">
          <h3 className="text-white mb-4">Deployment Logs</h3>
          <div className="bg-black/40 rounded-lg p-4 font-mono text-xs space-y-1 max-h-96 overflow-y-auto">
            {deploymentLogs.map((log, index) => (
              <div key={index} className="flex gap-3">
                <span className="text-white/40">{log.time}</span>
                <span className="text-blue-400 w-20">[{log.target}]</span>
                <span
                  className={
                    log.message.startsWith('✓')
                      ? 'text-emerald-400'
                      : log.message.includes('error') || log.message.includes('failed')
                      ? 'text-red-400'
                      : 'text-white/80'
                  }
                >
                  {log.message}
                </span>
              </div>
            ))}
            <div className="flex gap-3">
              <span className="text-white/40">14:31:06</span>
              <span className="text-blue-400 w-20">[Backend]</span>
              <span className="text-white/80 flex items-center gap-2">
                <Loader2 className="w-3 h-3 animate-spin inline" />
                Finalizing deployment...
              </span>
            </div>
          </div>
        </div>

        {/* Post-Deployment */}
        <div className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-xl border border-emerald-500/20 p-6">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-white mb-2">Deployment Successful!</h3>
              <p className="text-sm text-white/70 mb-4">
                Your application is now live and accessible. All services are running correctly.
              </p>
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm text-white transition-colors">
                  View Application
                </button>
                <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm text-white transition-colors">
                  Share Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
