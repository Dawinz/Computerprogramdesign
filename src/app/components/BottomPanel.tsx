import { useState } from 'react';
import { Terminal, ChevronUp, ChevronDown, X, AlertCircle, Info, CheckCircle } from 'lucide-react';

interface LogEntry {
  id: string;
  type: 'info' | 'success' | 'warning' | 'error';
  timestamp: string;
  message: string;
}

const mockLogs: LogEntry[] = [
  { id: '1', type: 'info', timestamp: '14:23:01', message: 'Initializing Factos...' },
  { id: '2', type: 'success', timestamp: '14:23:02', message: 'MCP connection established' },
  { id: '3', type: 'info', timestamp: '14:23:03', message: 'Loading project: EduConnect Platform' },
  { id: '4', type: 'success', timestamp: '14:23:04', message: 'Project Brain initialized' },
  { id: '5', type: 'info', timestamp: '14:23:05', message: 'AI assistant ready for planning phase' },
  { id: '6', type: 'info', timestamp: '14:23:12', message: 'Extracting personas from conversation...' },
  { id: '7', type: 'success', timestamp: '14:23:13', message: 'Extracted 3 personas: Student, Professor, Administrator' },
  { id: '8', type: 'info', timestamp: '14:23:14', message: 'Extracting features from conversation...' },
  { id: '9', type: 'success', timestamp: '14:23:15', message: 'Extracted 4 core features' },
  { id: '10', type: 'warning', timestamp: '14:23:16', message: 'External documentation parsing in progress...' },
];

export function BottomPanel() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [logs] = useState<LogEntry[]>(mockLogs);

  const getLogIcon = (type: LogEntry['type']) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />;
      case 'warning':
        return <AlertCircle className="w-3.5 h-3.5 text-yellow-400" />;
      case 'error':
        return <X className="w-3.5 h-3.5 text-red-400" />;
      default:
        return <Info className="w-3.5 h-3.5 text-blue-400" />;
    }
  };

  const getLogColor = (type: LogEntry['type']) => {
    switch (type) {
      case 'success':
        return 'text-emerald-400';
      case 'warning':
        return 'text-yellow-400';
      case 'error':
        return 'text-red-400';
      default:
        return 'text-white/80';
    }
  };

  return (
    <div
      className={`bg-[#0a0a0a] border-t border-white/5 transition-all duration-300 ${
        isExpanded ? 'h-64' : 'h-10'
      }`}
    >
      {/* Header */}
      <div className="h-10 flex items-center justify-between px-4 border-b border-white/5">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-white/60" />
          <span className="text-sm text-white/80">Terminal & Logs</span>
          <span className="text-xs text-white/40">({logs.length} entries)</span>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-1 hover:bg-white/5 rounded transition-colors"
        >
          {isExpanded ? (
            <ChevronDown className="w-4 h-4 text-white/60" />
          ) : (
            <ChevronUp className="w-4 h-4 text-white/60" />
          )}
        </button>
      </div>

      {/* Content */}
      {isExpanded && (
        <div className="h-[calc(100%-2.5rem)] overflow-y-auto font-mono text-xs p-4 space-y-1">
          {logs.map((log) => (
            <div key={log.id} className="flex items-start gap-3 hover:bg-white/5 px-2 py-1 rounded">
              <span className="text-white/40 tabular-nums">{log.timestamp}</span>
              {getLogIcon(log.type)}
              <span className={getLogColor(log.type)}>{log.message}</span>
            </div>
          ))}
          <div className="flex items-center gap-2 px-2 py-1">
            <span className="text-white/40 tabular-nums">14:23:17</span>
            <div className="w-2 h-3 bg-white/60 animate-pulse" />
          </div>
        </div>
      )}
    </div>
  );
}