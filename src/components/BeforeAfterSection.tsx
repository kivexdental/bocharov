import React, { useState, useRef, useCallback } from 'react';
import { ArrowLeftRight, Check, Sparkles } from 'lucide-react';
import { caseStudies } from '../data/clinicData';

interface BeforeAfterSectionProps {
  onOpenBooking: () => void;
  language?: 'ru' | 'en';
}

export const BeforeAfterSection: React.FC<BeforeAfterSectionProps> = ({
  onOpenBooking,
}) => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    handleMove(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
      e.preventDefault();
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
      e.preventDefault();
      setSliderPosition((prev) => Math.min(100, prev + 5));
    } else if (e.key === 'Home') {
      e.preventDefault();
      setSliderPosition(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      setSliderPosition(100);
    }
  };

  const currentCase = caseStudies[0];

  return (
    <section id="cases" className="py-16 sm:py-24 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="master-container bg-surface-base p-6 sm:p-10 md:p-14 lg:p-16 relative overflow-hidden">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/70 border border-white/80 text-xs font-semibold text-neutral-600 shadow-soft-sm mb-3">
              <span>Clinical Results</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.15]">
              Before & After Full Rehabilitation
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-neutral-500 max-w-xs font-normal leading-relaxed">
            Verifiable clinical outcomes demonstrating complete functional and aesthetic restoration.
          </p>
        </div>

        {/* Interactive Before/After Comparison Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Comparison Slider */}
          <div className="lg:col-span-8">
            <div
              ref={containerRef}
              role="slider"
              tabIndex={0}
              aria-label="Before and after treatment comparison"
              aria-valuenow={Math.round(sliderPosition)}
              aria-valuemin={0}
              aria-valuemax={100}
              onKeyDown={handleKeyDown}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              style={{ touchAction: 'none' }}
              className="relative h-[360px] sm:h-[460px] md:h-[500px] rounded-[30px] sm:rounded-[38px] overflow-hidden select-none cursor-ew-resize border border-white/80 shadow-soft-md focus:outline-none focus:ring-4 focus:ring-blue-500/30"
            >
              {/* After Image (Background) */}
              <img
                src={currentCase.afterImage}
                alt="After treatment result"
                className="absolute inset-0 w-full h-full object-cover"
                draggable={false}
                loading="lazy"
              />
              <div className="absolute top-5 right-5 z-10 glass-badge px-3 py-1.5 rounded-full text-xs font-bold text-neutral-900 shadow-sm pointer-events-none">
                AFTER
              </div>

              {/* Before Image (Clipped Overlay) */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img
                  src={currentCase.beforeImage}
                  alt="Before treatment condition"
                  className="absolute inset-0 w-full h-full object-cover"
                  draggable={false}
                  loading="lazy"
                />
                <div className="absolute top-5 left-5 z-10 glass-badge px-3 py-1.5 rounded-full text-xs font-bold text-neutral-900 shadow-sm pointer-events-none">
                  BEFORE
                </div>
              </div>

              {/* Divider Handle Bar */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-lime-accent text-neutral-950 flex items-center justify-center shadow-lg border-2 border-white pointer-events-auto">
                  <ArrowLeftRight className="w-4 h-4" />
                </div>
              </div>

              {/* Drag instruction overlay */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 glass-badge px-4 py-1.5 rounded-full text-[11px] font-semibold text-neutral-700 shadow-sm pointer-events-none">
                ← Drag or use arrow keys to compare →
              </div>
            </div>
          </div>

          {/* Case Clinical Notes */}
          <div className="lg:col-span-4 space-y-5">
            <div className="p-6 rounded-3xl bg-white/80 backdrop-blur-md border border-white/80 shadow-soft-sm space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-lime-dark bg-lime-light px-2.5 py-1 rounded-full">
                {currentCase.category}
              </span>

              <h3 className="text-lg font-bold text-neutral-900 tracking-tight">
                {currentCase.title}
              </h3>

              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                {currentCase.story}
              </p>

              <div className="space-y-2.5 pt-3 border-t border-black/5 text-xs text-neutral-700">
                <div className="flex justify-between">
                  <span className="text-neutral-500 font-medium">Timeline:</span>
                  <span className="font-semibold text-neutral-900">{currentCase.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500 font-medium">Protocol:</span>
                  <span className="font-semibold text-neutral-900">{currentCase.implantsCount}</span>
                </div>
              </div>

              <button
                onClick={onOpenBooking}
                className="w-full mt-4 py-3 rounded-full bg-lime-accent hover:bg-lime-hover text-neutral-950 font-bold text-xs shadow-sm transition-all text-center block"
              >
                Consult on Similar Treatment
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
