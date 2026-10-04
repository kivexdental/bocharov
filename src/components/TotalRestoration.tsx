import React from 'react';
import { ArrowUpRight, CheckCircle2, Sparkles, MessageCircle } from 'lucide-react';
import { restorationIndications } from '../data/clinicData';

interface TotalRestorationProps {
  onOpenBooking: () => void;
  language?: 'ru' | 'en';
}

export const TotalRestoration: React.FC<TotalRestorationProps> = ({
  onOpenBooking,
}) => {
  return (
    <section id="total-restoration" className="py-16 sm:py-24 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Large Rounded Container */}
      <div className="master-container bg-surface-base p-6 sm:p-10 md:p-14 lg:p-16 relative overflow-hidden">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.12]">
              When total restoration{' '}
              <span className="text-neutral-500 font-normal block sm:inline">
                becomes the optimal solution
              </span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-neutral-500 max-w-xs font-normal leading-relaxed">
            Solutions for patients who want to abandon removable dentures and regain a complete, confident smile.
          </p>
        </div>

        {/* 4 Horizontal Information Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 relative z-10 mb-16 sm:mb-20">
          {restorationIndications.map((item) => (
            <div
              key={item.id}
              className="bg-white/80 hover:bg-white backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-white/80 shadow-soft-sm hover:shadow-soft-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-2">
                  {item.urgency}
                </span>

                <h3 className="font-bold text-sm sm:text-base text-neutral-900 tracking-tight leading-snug group-hover:text-lime-dark transition-colors">
                  {item.title}
                </h3>

                <p className="mt-2.5 text-xs text-neutral-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-black/5 flex items-center justify-between text-[11px] text-neutral-500 font-medium">
                <span className="truncate max-w-[170px]">{item.treatmentSolution}</span>
                <span className="text-lime-accent group-hover:translate-x-0.5 transition-transform font-black">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Oversized Background Outline Watermark "All-on-4®" */}
        <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none overflow-hidden opacity-30 sm:opacity-40">
          <span className="text-[80px] sm:text-[140px] md:text-[180px] lg:text-[220px] font-black text-watermark leading-none">
            All-on-4®
          </span>
        </div>

        {/* Floating Dark Consultation Pill Bar */}
        <div className="relative z-20 flex justify-center pt-6 sm:pt-10">
          <div className="glass-dark-capsule rounded-full p-2 sm:p-2.5 pl-4 sm:pl-6 pr-2 sm:pr-2.5 flex flex-col sm:flex-row items-center gap-3 sm:gap-6 shadow-2xl max-w-xl w-full justify-between">
            {/* Mascot / Icon and Text */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-lime-accent/20 border border-lime-accent/40 flex items-center justify-center text-lime-accent shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <p className="text-white text-xs sm:text-sm font-medium tracking-tight">
                Find out if the All-on-4 protocol fits your case
              </p>
            </div>

            {/* Neon Lime CTA Button */}
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-lime-accent hover:bg-lime-hover text-neutral-950 font-bold text-xs sm:text-sm tracking-tight flex items-center justify-center gap-2 shadow-sm transition-all shrink-0 hover:scale-105 active:scale-95"
            >
              <span>Get Consultation</span>
              <span className="font-extrabold">+</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
