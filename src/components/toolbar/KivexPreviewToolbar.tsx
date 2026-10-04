import React, { useState } from 'react';
import { Monitor, Tablet, Smartphone, Maximize2, X, ChevronDown } from 'lucide-react';

export type PreviewDeviceMode = 'pc' | 'tablet' | 'phone' | 'fullscreen';

interface KivexPreviewToolbarProps {
  currentMode: PreviewDeviceMode;
  onSelectMode: (mode: PreviewDeviceMode) => void;
  onCloseToolbar: () => void;
}

export const KivexPreviewToolbar: React.FC<KivexPreviewToolbarProps> = ({
  currentMode,
  onSelectMode,
  onCloseToolbar,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const deviceModes = [
    {
      id: 'pc' as PreviewDeviceMode,
      label: 'PC',
      title: 'Desktop Viewport (1280px)',
      icon: Monitor,
      dimensions: '1280px',
    },
    {
      id: 'tablet' as PreviewDeviceMode,
      label: 'Tablet',
      title: 'Tablet Viewport (768px)',
      icon: Tablet,
      dimensions: '768px',
    },
    {
      id: 'phone' as PreviewDeviceMode,
      label: 'Phone',
      title: 'Mobile Viewport (390px)',
      icon: Smartphone,
      dimensions: '390px',
    },
    {
      id: 'fullscreen' as PreviewDeviceMode,
      label: 'Fullscreen',
      title: 'Natural Fullscreen Viewport (100%)',
      icon: Maximize2,
      dimensions: '100%',
    },
  ];

  return (
    <aside
      aria-label="KIVEX Preview Application Toolbar"
      className="sticky top-0 left-0 right-0 z-50 w-full bg-[#F5EFE5] border-b border-[#E6DCce] shadow-sm select-none"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 h-[52px] flex items-center justify-between">
        
        {/* Permanent KIVEX Technology Branding (Left Side - Sits directly on #F5EFE5 background) */}
        <div className="flex items-center">
          <div
            className="flex items-baseline cursor-default"
            aria-label="KIVEX Technology"
          >
            {/* KIVEX: Uppercase, bold, strong, #2D5FC7 */}
            <span className="font-extrabold text-base sm:text-lg tracking-wider text-[#2D5FC7] uppercase">
              KIVEX
            </span>
            {/* Technology: Smaller, warm gold/yellow #E8B62A, visually connected */}
            <span className="font-bold text-xs sm:text-sm tracking-normal text-[#E8B62A] ml-1.5">
              Technology
            </span>
          </div>
        </div>

        {/* Center / Device Controls for Desktop & Tablet */}
        <div className="hidden sm:flex items-center gap-1.5 p-1 rounded-full bg-[#ECE4D8]/80 border border-[#DFD5C7]">
          {deviceModes.map((mode) => {
            const Icon = mode.icon;
            const isActive = currentMode === mode.id;

            return (
              <button
                key={mode.id}
                onClick={() => onSelectMode(mode.id)}
                title={mode.title}
                aria-pressed={isActive}
                aria-label={`Preview as ${mode.label} (${mode.dimensions})`}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D5FC7] focus-visible:ring-offset-1 ${
                  isActive
                    ? 'bg-[#2D5FC7] text-white shadow-sm font-bold'
                    : 'text-[#4A5568] hover:text-[#1A202C] hover:bg-black/5 font-medium'
                }`}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span>{mode.label}</span>
                {isActive && (
                  <span className="sr-only">(Active mode)</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Compact Device Selector for Mobile screens (< 640px) */}
        <div className="sm:hidden relative">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2D5FC7] text-white text-xs font-bold shadow-sm"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle device preview modes"
          >
            <span className="capitalize">{currentMode}</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isMobileMenuOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Right Side: Cross (Close) Button - Mandatory Requirement */}
        <div className="flex items-center gap-2">
          <button
            onClick={onCloseToolbar}
            title="Hide Preview Toolbar (×)"
            aria-label="Close preview toolbar"
            className="w-8 h-8 rounded-full flex items-center justify-center text-[#4A5568] hover:text-[#1A202C] hover:bg-black/10 active:bg-black/15 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D5FC7]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Expanded Device View Panel for Mobile (Section 12 & 13) */}
      {isMobileMenuOpen && (
        <div className="sm:hidden border-t border-[#E6DCce] bg-[#F5EFE5] p-3 space-y-2 shadow-lg animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex items-center justify-between px-1 pb-1 border-b border-[#E6DCce]/60">
            <div className="flex items-baseline">
              <span className="font-extrabold text-sm tracking-wider text-[#2D5FC7] uppercase">
                KIVEX
              </span>
              <span className="font-bold text-xs tracking-normal text-[#E8B62A] ml-1">
                Technology
              </span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[#4A5568] hover:text-black p-1"
              aria-label="Close device selector"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-1.5 pt-1">
            {deviceModes.map((mode) => {
              const Icon = mode.icon;
              const isActive = currentMode === mode.id;

              return (
                <button
                  key={mode.id}
                  onClick={() => {
                    onSelectMode(mode.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-2 p-2 rounded-xl text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-[#2D5FC7] text-white font-bold shadow-sm'
                      : 'bg-[#ECE4D8]/80 text-[#4A5568] hover:text-black'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  <span>{mode.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </aside>
  );
};
