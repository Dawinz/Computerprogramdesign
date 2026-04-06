import { useState } from 'react';
import { FlaskConical, Users, Activity, CheckCircle2, XCircle, Loader2, Play } from 'lucide-react';
import { mockTestAgents } from '../../data/mockData';
import { TestAgent } from '../../types';
import { motion } from 'motion/react';

const testScenarios = [
  { id: '1', name: 'User Authentication Flow', status: 'passed', agents: 10 },
  { id: '2', name: 'Course Creation & Enrollment', status: 'running', agents: 15 },
  { id: '3', name: 'Assignment Submission', status: 'failed', agents: 8 },
  { id: '4', name: 'Real-time Chat', status: 'pending', agents: 20 },
  { id: '5', name: 'Grade Analytics Dashboard', status: 'pending', agents: 12 },
];

export function TestingView() {
  const [agentCount, setAgentCount] = useState(10);
  const [agents] = useState<TestAgent[]>(mockTestAgents);

  const passedCount = agents.filter(a => a.status === 'passed').length;
  const failedCount = agents.filter(a => a.status === 'failed').length;
  const runningCount = agents.filter(a => a.status === 'running').length;

  return (
    <div className="h-full bg-[#0f0f0f] p-6 overflow-y-auto">
      {/* Header */}
      <div className="flex items-start gap-3 mb-6">
        <div className="p-2 bg-blue-500/20 rounded-lg">
          <FlaskConical className="w-5 h-5 text-blue-400" />
        </div>
        <div className="flex-1">
          <h2 className="text-lg text-white">Testing Phase</h2>
          <p className="text-sm text-white/60 mt-1">
            Multi-agent simulation testing with real user behavior patterns
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 rounded-lg transition-all text-white text-sm">
          <Play className="w-4 h-4" />
          Run All Tests
        </button>
      </div>

      <div className="max-w-6xl space-y-6">
        {/* Agent Scale Selector */}
        <div className="bg-white/5 rounded-xl border border-white/10 p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-white">Agent Scale</h3>
              <p className="text-sm text-white/60 mt-1">Simulate concurrent users</p>
            </div>
            <div className="text-2xl text-white tabular-nums">{agentCount} users</div>
          </div>
          <div className="flex gap-4">
            {[10, 100, 1000].map((count) => (
              <button
                key={count}
                onClick={() => setAgentCount(count)}
                className={`flex-1 px-4 py-3 rounded-lg transition-all ${
                  agentCount === count
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                    : 'bg-white/5 text-white/60 hover:bg-white/10'
                }`}
              >
                {count} Users
              </button>
            ))}
          </div>
        </div>

        {/* Test Statistics */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-white/5 rounded-xl border border-white/10 p-4">
            <div className="flex items-center gap-2 mb-2">
              <Activity className="w-4 h-4 text-white/60" />
              <span className="text-sm text-white/60">Total Agents</span>
            </div>
            <div className="text-2xl text-white tabular-nums">{agents.length}</div>
          </div>
          <div className="bg-emerald-500/10 rounded-xl border border-emerald-500/20 p-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-emerald-400">Passed</span>
            </div>
            <div className="text-2xl text-emerald-400 tabular-nums">{passedCount}</div>
          </div>
          <div className="bg-blue-500/10 rounded-xl border border-blue-500/20 p-4">
            <div className="flex items-center gap-2 mb-2">
              <Loader2 className="w-4 h-4 text-blue-400 animate-spin" />
              <span className="text-sm text-blue-400">Running</span>
            </div>
            <div className="text-2xl text-blue-400 tabular-nums">{runningCount}</div>
          </div>
          <div className="bg-red-500/10 rounded-xl border border-red-500/20 p-4">
            <div className="flex items-center gap-2 mb-2">
              <XCircle className="w-4 h-4 text-red-400" />
              <span className="text-sm text-red-400">Failed</span>
            </div>
            <div className="text-2xl text-red-400 tabular-nums">{failedCount}</div>
          </div>
        </div>

        {/* Agent Visualization */}
        <div className="bg-white/5 rounded-xl border border-white/10 p-6">
          <div className="flex items-center gap-2 mb-4">
            <Users className="w-4 h-4 text-white/60" />
            <h3 className="text-white">Live Agent Activity</h3>
          </div>
          
          {agentCount <= 10 && (
            <div className="grid grid-cols-5 gap-4">
              {agents.map((agent, index) => (
                <motion.div
                  key={agent.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-4 rounded-lg border ${
                    agent.status === 'passed'
                      ? 'bg-emerald-500/10 border-emerald-500/30'
                      : agent.status === 'failed'
                      ? 'bg-red-500/10 border-red-500/30'
                      : agent.status === 'running'
                      ? 'bg-blue-500/10 border-blue-500/30'
                      : 'bg-white/5 border-white/10'
                  }`}
                >
                  <div className="text-2xl mb-2">{agent.avatar}</div>
                  <div className="text-xs text-white/60 mb-1">{agent.name}</div>
                  <div className="text-xs text-white/80 leading-relaxed">{agent.currentAction}</div>
                  {agent.status === 'running' && (
                    <Loader2 className="w-3 h-3 text-blue-400 animate-spin mt-2" />
                  )}
                </motion.div>
              ))}
            </div>
          )}

          {agentCount === 100 && (
            <div className="grid grid-cols-10 gap-2">
              {Array.from({ length: 100 }).map((_, i) => {
                const status = ['idle', 'running', 'passed', 'failed'][Math.floor(Math.random() * 4)];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.01 }}
                    className={`w-full aspect-square rounded ${
                      status === 'passed'
                        ? 'bg-emerald-500'
                        : status === 'failed'
                        ? 'bg-red-500'
                        : status === 'running'
                        ? 'bg-blue-500 animate-pulse'
                        : 'bg-white/20'
                    }`}
                  />
                );
              })}
            </div>
          )}

          {agentCount === 1000 && (
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-8 py-8">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="relative w-48 h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full border border-white/10 flex items-center justify-center"
                >
                  <div className="text-center">
                    <div className="text-4xl mb-2">🌐</div>
                    <div className="text-2xl text-white tabular-nums">{agentCount}</div>
                    <div className="text-sm text-white/60">Active Agents</div>
                  </div>
                  
                  {/* Orbiting indicators */}
                  {[0, 60, 120, 180, 240, 300].map((angle) => (
                    <motion.div
                      key={angle}
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
                      className="absolute inset-0"
                    >
                      <div
                        className="absolute w-3 h-3 bg-blue-400 rounded-full"
                        style={{
                          top: '50%',
                          left: '50%',
                          transform: `rotate(${angle}deg) translateX(100px) translateY(-50%)`,
                        }}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
              <div className="text-center text-sm text-white/60">
                Clustered view - {runningCount} agents currently executing test scenarios
              </div>
            </div>
          )}
        </div>

        {/* Test Scenarios */}
        <div className="bg-white/5 rounded-xl border border-white/10 p-6">
          <div className="flex items-center gap-2 mb-4">
            <FlaskConical className="w-4 h-4 text-white/60" />
            <h3 className="text-white">Test Scenarios</h3>
          </div>
          <div className="space-y-2">
            {testScenarios.map((scenario) => (
              <div
                key={scenario.id}
                className="bg-white/5 rounded-lg border border-white/10 p-4 hover:border-white/20 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 flex-1">
                    {scenario.status === 'passed' && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    )}
                    {scenario.status === 'running' && (
                      <Loader2 className="w-5 h-5 text-blue-400 animate-spin" />
                    )}
                    {scenario.status === 'failed' && (
                      <XCircle className="w-5 h-5 text-red-400" />
                    )}
                    {scenario.status === 'pending' && (
                      <div className="w-5 h-5 border-2 border-white/20 rounded-full" />
                    )}
                    <div className="flex-1">
                      <div className="text-white">{scenario.name}</div>
                      <div className="text-sm text-white/60 mt-0.5">{scenario.agents} agents</div>
                    </div>
                  </div>
                  <button className="px-3 py-1 bg-white/5 hover:bg-white/10 rounded text-xs text-white transition-colors">
                    View Logs
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}