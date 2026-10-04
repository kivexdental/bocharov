import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { treatmentSteps } from '../data/clinicData';

interface TreatmentProcessProps {
  onOpenBooking: () => void;
  language?: 'ru' | 'en';
}

export const TreatmentProcess: React.FC<TreatmentProcessProps> = () => {
  return (
    <section className="py-16 sm:py-24 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="master-container bg-surface-base p-6 sm:p-10 md:p-14 lg:p-16 relative overflow-hidden">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/70 border border-white/80 text-xs font-semibold text-neutral-600 shadow-soft-sm mb-3">
            <span>Treatment Protocol</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.15]">
            Treatment Journey: From 3D Scan to New Smile
          </h2>
        </div>

        {/* Step Flow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 relative z-10">
          {treatmentSteps.map((step) => (
            <div
              key={step.number}
              className="bg-white/80 hover:bg-white backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-white/80 shadow-soft-sm hover:shadow-soft-md transition-all flex flex-col justify-between group"
            >
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-lime-dark tracking-tight block mb-3 group-hover:scale-110 transition-transform origin-left">
                  {step.number}
                </span>

                <h3 className="font-bold text-sm sm:text-base text-neutral-900 tracking-tight leading-snug">
                  {step.title}
                </h3>

                <p className="mt-2 text-xs text-neutral-600 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-black/5 flex items-center justify-between text-[11px] text-neutral-500 font-semibold">
                <span>{step.timeline}</span>
                <span className="text-neutral-400 group-hover:text-lime-dark">→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
