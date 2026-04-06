import { ShieldCheck, AlertTriangle, CheckCircle2, XCircle, Info } from 'lucide-react';
import { mockSecurityChecks } from '../../data/mockData';
import { SecurityCheck } from '../../types';

export function SecurityView() {
  const passedChecks = mockSecurityChecks.filter(c => c.status === 'passed').length;
  const warningChecks = mockSecurityChecks.filter(c => c.status === 'warning').length;
  const failedChecks = mockSecurityChecks.filter(c => c.status === 'failed').length;

  const getRiskColor = (level: SecurityCheck['riskLevel']) => {
    switch (level) {
      case 'critical':
        return 'text-red-500 bg-red-500/10 border-red-500/30';
      case 'high':
        return 'text-orange-500 bg-orange-500/10 border-orange-500/30';
      case 'medium':
        return 'text-yellow-500 bg-yellow-500/10 border-yellow-500/30';
      case 'low':
        return 'text-green-500 bg-green-500/10 border-green-500/30';
    }
  };

  return (
    <div className="h-full bg-[#0f0f0f] p-6 overflow-y-auto">
      {/* Header */}
      <div className="flex items-start gap-3 mb-6">
        <div className="p-2 bg-emerald-500/20 rounded-lg">
          <ShieldCheck className="w-5 h-5 text-emerald-400" />
        </div>
        <div className="flex-1">
          <h2 className="text-lg text-white">Security Validation</h2>
          <p className="text-sm text-white/60 mt-1">
            Automated security checks for authentication, authorization, and vulnerabilities
          </p>
        </div>
      </div>

      <div className="max-w-6xl space-y-6">
        {/* Security Score */}
        <div className="bg-white/5 rounded-xl border border-white/10 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-white mb-2">Security Score</h3>
              <p className="text-sm text-white/60">
                {passedChecks} passed • {warningChecks} warnings • {failedChecks} failed
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl text-white mb-1 tabular-nums">
                {Math.round((passedChecks / mockSecurityChecks.length) * 100)}%
              </div>
              <div className="text-sm text-white/60">Overall Score</div>
            </div>
          </div>
          <div className="mt-4">
            <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden flex">
              <div
                className="h-full bg-emerald-500"
                style={{ width: `${(passedChecks / mockSecurityChecks.length) * 100}%` }}
              />
              <div
                className="h-full bg-yellow-500"
                style={{ width: `${(warningChecks / mockSecurityChecks.length) * 100}%` }}
              />
              <div
                className="h-full bg-red-500"
                style={{ width: `${(failedChecks / mockSecurityChecks.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-emerald-500/10 rounded-xl border border-emerald-500/20 p-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span className="text-sm text-emerald-400">Passed Checks</span>
            </div>
            <div className="text-2xl text-emerald-400 tabular-nums">{passedChecks}</div>
          </div>
          <div className="bg-yellow-500/10 rounded-xl border border-yellow-500/20 p-4">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5 text-yellow-400" />
              <span className="text-sm text-yellow-400">Warnings</span>
            </div>
            <div className="text-2xl text-yellow-400 tabular-nums">{warningChecks}</div>
          </div>
          <div className="bg-red-500/10 rounded-xl border border-red-500/20 p-4">
            <div className="flex items-center gap-2 mb-2">
              <XCircle className="w-5 h-5 text-red-400" />
              <span className="text-sm text-red-400">Failed Checks</span>
            </div>
            <div className="text-2xl text-red-400 tabular-nums">{failedChecks}</div>
          </div>
        </div>

        {/* Security Checks */}
        <div className="bg-white/5 rounded-xl border border-white/10 p-6">
          <div className="flex items-center gap-2 mb-4">
            <ShieldCheck className="w-4 h-4 text-white/60" />
            <h3 className="text-white">Security Checks</h3>
          </div>
          <div className="space-y-3">
            {mockSecurityChecks.map((check) => (
              <div
                key={check.id}
                className={`rounded-lg border p-4 ${
                  check.status === 'passed'
                    ? 'bg-emerald-500/5 border-emerald-500/20'
                    : check.status === 'warning'
                    ? 'bg-yellow-500/5 border-yellow-500/20'
                    : 'bg-red-500/5 border-red-500/20'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    {check.status === 'passed' && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    )}
                    {check.status === 'warning' && (
                      <AlertTriangle className="w-5 h-5 text-yellow-400" />
                    )}
                    {check.status === 'failed' && (
                      <XCircle className="w-5 h-5 text-red-400" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h4 className="text-white">{check.name}</h4>
                      <span
                        className={`text-xs px-2 py-1 rounded border uppercase tracking-wide ${getRiskColor(
                          check.riskLevel
                        )}`}
                      >
                        {check.riskLevel}
                      </span>
                    </div>
                    <p className="text-sm text-white/70">{check.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-white/5 rounded-xl border border-white/10 p-6">
          <div className="flex items-center gap-2 mb-4">
            <Info className="w-4 h-4 text-white/60" />
            <h3 className="text-white">Security Recommendations</h3>
          </div>
          <div className="space-y-3">
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white mb-1">Implement Role-Based Access Control</div>
                  <p className="text-sm text-white/70">
                    Some API endpoints are missing RBAC. Add middleware to validate user roles before
                    allowing access to protected resources.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white mb-1">Sanitize User Inputs</div>
                  <p className="text-sm text-white/70">
                    User inputs in chat and assignment submissions should be sanitized to prevent XSS
                    attacks. Use a library like DOMPurify or similar.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white mb-1">Enable Security Headers</div>
                  <p className="text-sm text-white/70">
                    Add security headers like Content-Security-Policy, X-Frame-Options, and
                    Strict-Transport-Security to your deployment configuration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 rounded-lg transition-all text-white text-sm">
            <ShieldCheck className="w-4 h-4" />
            Re-run Security Scan
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors text-white text-sm">
            Export Report
          </button>
        </div>
      </div>
    </div>
  );
}
