import { useState, useEffect } from 'react';
import { Code, FileCode, Loader2, CheckCircle2, Play, Terminal as TerminalIcon } from 'lucide-react';

interface FileGeneration {
  path: string;
  status: 'pending' | 'generating' | 'complete';
  linesOfCode?: number;
}

const initialFiles: FileGeneration[] = [
  { path: 'src/app/api/auth/route.ts', status: 'complete', linesOfCode: 45 },
  { path: 'src/app/api/courses/route.ts', status: 'complete', linesOfCode: 128 },
  { path: 'src/components/CourseCard.tsx', status: 'generating' },
  { path: 'src/components/AssignmentForm.tsx', status: 'generating' },
  { path: 'src/lib/database.ts', status: 'pending' },
  { path: 'src/lib/auth.ts', status: 'pending' },
  { path: 'prisma/schema.prisma', status: 'pending' },
  { path: 'README.md', status: 'pending' },
];

const terminalCommands = [
  { time: '14:25:01', text: '$ cursor-mcp init project', type: 'command' },
  { time: '14:25:02', text: 'Initializing MCP connection...', type: 'info' },
  { time: '14:25:03', text: '✓ Connected to Cursor AI', type: 'success' },
  { time: '14:25:04', text: '$ cursor-mcp generate --context=project-brain.md', type: 'command' },
  { time: '14:25:05', text: 'Reading project context...', type: 'info' },
  { time: '14:25:06', text: 'Generating file structure...', type: 'info' },
  { time: '14:25:08', text: '✓ Created src/app/api/auth/route.ts (45 lines)', type: 'success' },
  { time: '14:25:10', text: '✓ Created src/app/api/courses/route.ts (128 lines)', type: 'success' },
  { time: '14:25:12', text: 'Generating React components...', type: 'info' },
];

export function DevelopmentView() {
  const [files, setFiles] = useState<FileGeneration[]>(initialFiles);

  useEffect(() => {
    const interval = setInterval(() => {
      setFiles(prev => {
        const generatingIndex = prev.findIndex(f => f.status === 'generating');
        if (generatingIndex !== -1) {
          const newFiles = [...prev];
          newFiles[generatingIndex] = {
            ...newFiles[generatingIndex],
            status: 'complete',
            linesOfCode: Math.floor(Math.random() * 100) + 20,
          };
          
          const nextPendingIndex = newFiles.findIndex(f => f.status === 'pending');
          if (nextPendingIndex !== -1) {
            newFiles[nextPendingIndex] = { ...newFiles[nextPendingIndex], status: 'generating' };
          }
          
          return newFiles;
        }
        return prev;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const completedCount = files.filter(f => f.status === 'complete').length;
  const totalCount = files.length;

  return (
    <div className="h-full bg-[#0f0f0f] p-6 overflow-y-auto">
      {/* Header */}
      <div className="flex items-start gap-3 mb-6">
        <div className="p-2 bg-green-500/20 rounded-lg">
          <Code className="w-5 h-5 text-green-400" />
        </div>
        <div className="flex-1">
          <h2 className="text-lg text-white">Development</h2>
          <p className="text-sm text-white/60 mt-1">
            Code generation via Cursor + MCP integration
          </p>
        </div>
      </div>

      <div className="max-w-6xl space-y-6">
        {/* MCP Status */}
        <div className="bg-white/5 rounded-xl border border-white/10 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-white">Cursor MCP Connected</div>
                <div className="text-sm text-white/60 mt-0.5">Code generation in progress</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-sm text-emerald-400">Active</span>
            </div>
          </div>
        </div>

        {/* Code Generation Progress */}
        <div className="bg-white/5 rounded-xl border border-white/10 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white flex items-center gap-2">
              <FileCode className="w-4 h-4" />
              File Generation
            </h3>
            <span className="text-sm text-white/60">
              {completedCount} / {totalCount} files
            </span>
          </div>

          <div className="mb-4">
            <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-500"
                style={{ width: `${(completedCount / totalCount) * 100}%` }}
              />
            </div>
          </div>

          <div className="space-y-2">
            {files.map((file) => (
              <div
                key={file.path}
                className="bg-white/5 rounded-lg border border-white/10 p-3 hover:border-white/20 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 flex-1">
                    {file.status === 'complete' && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    )}
                    {file.status === 'generating' && (
                      <Loader2 className="w-4 h-4 text-blue-400 animate-spin flex-shrink-0" />
                    )}
                    {file.status === 'pending' && (
                      <div className="w-4 h-4 border-2 border-white/20 rounded-full flex-shrink-0" />
                    )}
                    <code className="text-sm text-white/80 font-mono">{file.path}</code>
                  </div>
                  {file.linesOfCode && (
                    <span className="text-xs text-white/40">{file.linesOfCode} lines</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Terminal Output */}
        <div className="bg-white/5 rounded-xl border border-white/10 p-6">
          <div className="flex items-center gap-2 mb-4">
            <TerminalIcon className="w-4 h-4 text-white/60" />
            <h3 className="text-white">Terminal Output</h3>
          </div>
          <div className="bg-black/40 rounded-lg p-4 font-mono text-xs space-y-1 max-h-80 overflow-y-auto">
            {terminalCommands.map((cmd, index) => (
              <div key={index} className="flex gap-3">
                <span className="text-white/40">{cmd.time}</span>
                <span
                  className={
                    cmd.type === 'command'
                      ? 'text-blue-400'
                      : cmd.type === 'success'
                      ? 'text-emerald-400'
                      : 'text-white/80'
                  }
                >
                  {cmd.text}
                </span>
              </div>
            ))}
            <div className="flex gap-3">
              <span className="text-white/40">14:25:13</span>
              <span className="text-white/80 flex items-center gap-1">
                <Loader2 className="w-3 h-3 animate-spin inline" />
                Generating components...
              </span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors text-white text-sm">
            <Play className="w-4 h-4" />
            Run Development Server
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors text-white text-sm">
            <Code className="w-4 h-4" />
            Open in Cursor
          </button>
        </div>
      </div>
    </div>
  );
}
