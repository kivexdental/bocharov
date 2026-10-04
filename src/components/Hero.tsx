import React from 'react';
import { Award, CheckCircle2, ShieldCheck, Sparkles, Activity } from 'lucide-react';
import { primaryDoctor } from '../data/clinicData';

interface HeroProps {
  onOpenBooking: () => void;
  language?: 'ru' | 'en';
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="pt-24 sm:pt-28 pb-8 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Large Rounded Hero Container */}
      <div className="relative master-container bg-gradient-to-br from-[#C8CDD6] via-[#DEE2E8] to-[#D3D8E0] overflow-hidden p-6 sm:p-10 md:p-12 lg:p-14 border border-white/80 shadow-card-glow">
        
        {/* Subtle ambient lighting */}
        <div className="absolute top-1/4 -right-16 w-96 h-96 bg-lime-accent/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-white/40 rounded-full blur-2xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center relative z-10">
          
          {/* Left Column: Editorial Information */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col items-start space-y-5 sm:space-y-6">
            
            {/* Category / Specialty Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-white/80 text-neutral-700 text-xs sm:text-sm font-medium shadow-soft-sm">
              <span className="w-2 h-2 rounded-full bg-lime-accent animate-pulse" />
              <span>Maxillofacial Surgeon</span>
            </div>

            {/* Main Editorial Headline */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-neutral-900 leading-[1.06]">
                <span className="text-white drop-shadow-sm block font-bold">Dr. Maxim</span>
                <span className="text-neutral-900 block font-bold">Bocharov</span>
              </h1>
            </div>

            {/* Supporting Tagline */}
            <p className="text-sm sm:text-base md:text-lg text-neutral-600 max-w-lg font-normal leading-relaxed">
              Surgical dentistry where digital precision begins long before the operation.
            </p>

            {/* Primary Appointment Button */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-lime-accent text-neutral-950 font-bold text-sm sm:text-base tracking-tight hover:bg-lime-hover shadow-lg shadow-lime-glow/20 active:scale-95 transition-all transform hover:-translate-y-0.5"
              >
                <span>Book a Consultation</span>
                <span className="w-6 h-6 rounded-full bg-neutral-950 text-white flex items-center justify-center text-xs font-bold">
                  +
                </span>
              </button>
            </div>

            {/* Supporting Statistics */}
            <div className="pt-4 flex items-center gap-8 sm:gap-12 border-t border-black/5 w-full">
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-lime-dark tracking-tight">
                  20+
                </div>
                <div className="text-xs sm:text-sm font-medium text-neutral-600">
                  years practice
                </div>
              </div>

              <div className="h-10 w-px bg-neutral-300" />

              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-lime-dark tracking-tight">
                  300+
                </div>
                <div className="text-xs sm:text-sm font-medium text-neutral-600">
                  surgeries/year
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Doctor Portrait from Reference */}
          <div className="lg:col-span-6 xl:col-span-5 relative flex justify-center items-end">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none flex justify-center">
              
              <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-card-glow border border-white/60">
                <img
                  src={primaryDoctor.image}
                  alt="Dr. Maxim Bocharov"
                  className="w-full h-auto max-h-[460px] lg:max-h-[520px] object-cover object-center rounded-[26px] sm:rounded-[34px]"
                  loading="eager"
                />
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
