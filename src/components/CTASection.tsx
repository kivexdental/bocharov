import React from 'react';
import { Phone, Calendar, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface CTASectionProps {
  onOpenBooking: () => void;
  language?: 'ru' | 'en';
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-16 sm:py-24 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="master-container bg-gradient-to-br from-[#CBD0D8] via-[#E2E6EC] to-[#D5DAE1] p-8 sm:p-12 md:p-16 lg:p-20 relative overflow-hidden text-center flex flex-col items-center border border-white/80 shadow-card-glow">
        
        {/* Ambient lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-lime-accent/25 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/70 border border-white/80 text-xs font-semibold text-neutral-600 shadow-soft-sm">
            <Sparkles className="w-3.5 h-3.5 text-lime-dark" />
            <span>Personalized Treatment</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 leading-tight">
            Let's find the right treatment plan tailored for your case
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 max-w-xl mx-auto font-normal leading-relaxed">
            Book an initial consult with 3D cone-beam computed tomography and fixed all-inclusive transparent cost calculation before any procedure begins.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-lime-accent hover:bg-lime-hover text-neutral-950 font-bold text-sm sm:text-base tracking-tight shadow-lg shadow-lime-glow/20 flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95"
            >
              <span>Book Consultation</span>
              <span className="w-6 h-6 rounded-full bg-neutral-950 text-white flex items-center justify-center text-xs font-bold">
                +
              </span>
            </button>

            <a
              href="tel:+18004567890"
              className="w-full sm:w-auto px-7 py-4 rounded-full bg-white/80 hover:bg-white text-neutral-900 border border-black/5 font-semibold text-sm shadow-soft-sm flex items-center justify-center gap-2.5 transition-all"
            >
              <Phone className="w-4 h-4 text-neutral-700" />
              <span>+1 (800) 456-7890</span>
            </a>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-500 font-medium">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-lime-dark" />
              <span>Official medical contract</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-lime-dark" />
              <span>Lifetime implant warranty</span>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
