import React from 'react';
import { PreviewDeviceMode } from './KivexPreviewToolbar';

interface PreviewWorkspaceProps {
  currentMode: PreviewDeviceMode;
  isToolbarVisible: boolean;
  onReopenToolbar: () => void;
}

export const PreviewWorkspace: React.FC<PreviewWorkspaceProps> = ({
  currentMode,
  isToolbarVisible,
  onReopenToolbar,
}) => {
  // Height calculation depending on whether toolbar is visible
  const workspaceHeight = isToolbarVisible ? 'calc(100vh - 52px)' : '100vh';

  return (
    <div
      className="w-full relative flex flex-col items-center justify-start overflow-auto bg-[#1A1E26] transition-all"
      style={{ height: workspaceHeight }}
    >
      {/* 
        DEVICE FRAME LAYER (Section 20 & 28)
        The device frame is only a visual presentation layer.
        The iframe determines the website viewport.
      */}
      {currentMode === 'fullscreen' ? (
        /* Fullscreen Viewport (100% natural, edge-to-edge) */
        <div className="w-full h-full">
          <iframe
            id="preview-viewport"
            src="?standalone=true"
            title="Dr. Maxim Bocharov Website Preview - Fullscreen"
            className="w-full h-full border-0 bg-[#DFE2E6]"
          />
        </div>
      ) : currentMode === 'phone' ? (
        /* Phone Device Frame (Real 390px actual website viewport) */
        <div className="my-auto py-8 px-4 flex flex-col items-center">
          <div className="text-[11px] font-mono text-neutral-400 mb-2 flex items-center gap-2">
            <span>390 × 844 px</span>
            <span>•</span>
            <span>Mobile Phone Viewport</span>
          </div>

          <div
            className="relative w-[390px] h-[844px] rounded-[48px] bg-neutral-900 p-3 shadow-2xl border-[4px] border-neutral-700/80 ring-1 ring-white/10 flex flex-col shrink-0"
            style={{ width: '390px', height: '844px' }}
          >
            {/* Phone Speaker / Dynamic Island */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full z-20 flex items-center justify-center pointer-events-none">
              <div className="w-3 h-3 rounded-full bg-neutral-900 border border-neutral-800" />
            </div>

            {/* Iframe Viewport Target (Exact 390px width) */}
            <div className="w-full h-full rounded-[38px] overflow-hidden bg-[#DFE2E6] relative">
              <iframe
                id="preview-viewport"
                src="?standalone=true"
                title="Dr. Maxim Bocharov Website Preview - Phone (390px)"
                className="w-full h-full border-0 bg-[#DFE2E6]"
              />
            </div>

            {/* Bottom Home Indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/40 rounded-full pointer-events-none" />
          </div>
        </div>
      ) : currentMode === 'tablet' ? (
        /* Tablet Device Frame (Real 768px actual website viewport) */
        <div className="my-auto py-8 px-4 flex flex-col items-center">
          <div className="text-[11px] font-mono text-neutral-400 mb-2 flex items-center gap-2">
            <span>768 × 1024 px</span>
            <span>•</span>
            <span>Tablet Viewport</span>
          </div>

          <div
            className="relative w-[768px] h-[1024px] rounded-[40px] bg-neutral-900 p-4 shadow-2xl border-[4px] border-neutral-700/80 ring-1 ring-white/10 flex flex-col shrink-0"
            style={{ width: '768px', height: '1024px' }}
          >
            {/* Tablet Camera Punchhole */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-neutral-800 rounded-full z-20 pointer-events-none border border-neutral-700" />

            {/* Iframe Viewport Target (Exact 768px width) */}
            <div className="w-full h-full rounded-[28px] overflow-hidden bg-[#DFE2E6]">
              <iframe
                id="preview-viewport"
                src="?standalone=true"
                title="Dr. Maxim Bocharov Website Preview - Tablet (768px)"
                className="w-full h-full border-0 bg-[#DFE2E6]"
              />
            </div>
          </div>
        </div>
      ) : (
        /* PC Desktop Frame (Real 1280px actual website viewport) */
        <div className="my-auto py-8 px-4 flex flex-col items-center w-full max-w-[1340px]">
          <div className="text-[11px] font-mono text-neutral-400 mb-2 flex items-center gap-2">
            <span>1280 × 820 px</span>
            <span>•</span>
            <span>Desktop PC Viewport</span>
          </div>

          <div
            className="relative w-[1280px] h-[820px] rounded-2xl bg-neutral-900 shadow-2xl border border-white/15 overflow-hidden flex flex-col shrink-0"
            style={{ width: '1280px', height: '820px' }}
          >
            {/* Browser Header Bar */}
            <div className="h-9 bg-neutral-800 px-4 flex items-center justify-between border-b border-white/10 select-none">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
              </div>

              <div className="px-6 py-1 rounded-md bg-neutral-900/90 text-neutral-300 font-mono text-[11px] border border-white/5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>bocharov-dental.com</span>
              </div>

              <div className="w-12" />
            </div>

            {/* Iframe Viewport Target (Exact 1280px width) */}
            <div className="w-full flex-1 overflow-hidden bg-[#DFE2E6]">
              <iframe
                id="preview-viewport"
                src="?standalone=true"
                title="Dr. Maxim Bocharov Website Preview - Desktop (1280px)"
                className="w-full h-full border-0 bg-[#DFE2E6]"
              />
            </div>
          </div>
        </div>
      )}

      {/* 
        FLOATING REOPEN CONTROL (Section 16)
        When the toolbar is hidden, provide a small floating circular KIVEX preview control.
        Allows user to reopen toolbar and preserves state.
      */}
      {!isToolbarVisible && (
        <button
          onClick={onReopenToolbar}
          aria-label="Reopen KIVEX Preview Toolbar"
          title="Reopen KIVEX Preview Toolbar"
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[#F5EFE5] text-[#2D5FC7] border-2 border-[#2D5FC7] shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all group focus:outline-none focus-visible:ring-4 focus-visible:ring-[#2D5FC7]/40"
        >
          <div className="flex items-center font-extrabold text-sm tracking-tighter">
            <span>K</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8B62A] ml-0.5" />
          </div>
          <span className="sr-only">Reopen KIVEX Preview Toolbar</span>
        </button>
      )}
    </div>
  );
};
