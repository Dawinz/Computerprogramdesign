import { Palette, Type, Square, Image as ImageIcon, Sparkles } from 'lucide-react';

const colorPalette = {
  primary: ['#7c3aed', '#6d28d9', '#5b21b6'],
  secondary: ['#3b82f6', '#2563eb', '#1d4ed8'],
  neutral: ['#f3f4f6', '#e5e7eb', '#d1d5db', '#9ca3af', '#6b7280', '#4b5563', '#374151', '#1f2937', '#111827'],
  success: ['#10b981', '#059669', '#047857'],
  warning: ['#f59e0b', '#d97706', '#b45309'],
  error: ['#ef4444', '#dc2626', '#b91c1c'],
};

const typography = [
  { name: 'Heading 1', size: '48px', weight: '700', example: 'The quick brown fox' },
  { name: 'Heading 2', size: '36px', weight: '700', example: 'The quick brown fox' },
  { name: 'Heading 3', size: '24px', weight: '600', example: 'The quick brown fox jumps' },
  { name: 'Body', size: '16px', weight: '400', example: 'The quick brown fox jumps over the lazy dog' },
  { name: 'Caption', size: '14px', weight: '400', example: 'The quick brown fox jumps over the lazy dog' },
];

const components = [
  { name: 'Button Primary', preview: 'bg-gradient-to-r from-purple-500 to-blue-500' },
  { name: 'Button Secondary', preview: 'bg-white/10 border border-white/20' },
  { name: 'Input Field', preview: 'bg-white/5 border border-white/20' },
  { name: 'Card', preview: 'bg-white/5 border border-white/10' },
];

export function DesignView() {
  return (
    <div className="h-full bg-[#0f0f0f] p-6 overflow-y-auto">
      {/* Header */}
      <div className="flex items-start gap-3 mb-6">
        <div className="p-2 bg-pink-500/20 rounded-lg">
          <Palette className="w-5 h-5 text-pink-400" />
        </div>
        <div className="flex-1">
          <h2 className="text-lg text-white">Design & Assets</h2>
          <p className="text-sm text-white/60 mt-1">
            AI-generated design system, color palette, typography, and UI components
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors text-sm text-white">
          <Sparkles className="w-4 h-4" />
          Regenerate
        </button>
      </div>

      <div className="max-w-6xl space-y-6">
        {/* Color Palette */}
        <div className="bg-white/5 rounded-xl border border-white/10 p-6">
          <div className="flex items-center gap-2 mb-4">
            <Square className="w-4 h-4 text-white/60" />
            <h3 className="text-white">Color Palette</h3>
          </div>
          <div className="space-y-4">
            {Object.entries(colorPalette).map(([name, colors]) => (
              <div key={name}>
                <div className="text-sm text-white/60 mb-2 capitalize">{name}</div>
                <div className="flex gap-2">
                  {colors.map((color, index) => (
                    <div
                      key={index}
                      className="group relative flex-1 h-20 rounded-lg cursor-pointer transition-transform hover:scale-105"
                      style={{ backgroundColor: color }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-xs bg-black/80 text-white px-2 py-1 rounded">
                          {color}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Typography */}
        <div className="bg-white/5 rounded-xl border border-white/10 p-6">
          <div className="flex items-center gap-2 mb-4">
            <Type className="w-4 h-4 text-white/60" />
            <h3 className="text-white">Typography</h3>
          </div>
          <div className="space-y-6">
            {typography.map((type) => (
              <div key={type.name} className="border-b border-white/5 pb-4 last:border-0">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-sm text-white/60">{type.name}</span>
                  <span className="text-xs text-white/40">
                    {type.size} / {type.weight}
                  </span>
                </div>
                <div
                  className="text-white"
                  style={{ fontSize: type.size, fontWeight: type.weight }}
                >
                  {type.example}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* UI Components */}
        <div className="bg-white/5 rounded-xl border border-white/10 p-6">
          <div className="flex items-center gap-2 mb-4">
            <Square className="w-4 h-4 text-white/60" />
            <h3 className="text-white">UI Components</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {components.map((component) => (
              <div key={component.name} className="space-y-2">
                <div className="text-sm text-white/60">{component.name}</div>
                <div className={`${component.preview} rounded-lg p-4 text-white text-center`}>
                  {component.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Generated Assets */}
        <div className="bg-white/5 rounded-xl border border-white/10 p-6">
          <div className="flex items-center gap-2 mb-4">
            <ImageIcon className="w-4 h-4 text-white/60" />
            <h3 className="text-white">Generated Assets</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Logo', 'Icon Set', 'Hero Image', 'Illustrations'].map((asset) => (
              <div
                key={asset}
                className="aspect-square bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg border border-white/10 flex items-center justify-center"
              >
                <div className="text-center">
                  <ImageIcon className="w-8 h-8 text-white/40 mx-auto mb-2" />
                  <div className="text-sm text-white/60">{asset}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Design Inspiration */}
        <div className="bg-white/5 rounded-xl border border-white/10 p-6">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-white/60" />
            <h3 className="text-white">Design Inspiration Sources</h3>
          </div>
          <div className="space-y-2">
            <div className="bg-white/5 rounded-lg border border-white/10 p-3">
              <a href="#" className="text-sm text-blue-400 hover:text-blue-300">
                https://www.canvas.com (Cloned design system)
              </a>
            </div>
            <div className="bg-white/5 rounded-lg border border-white/10 p-3">
              <a href="#" className="text-sm text-blue-400 hover:text-blue-300">
                https://www.schoology.com (Extracted UI patterns)
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
