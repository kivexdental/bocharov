import React from 'react';
import { Play, Award, CheckCircle, Shield, FileCheck, ArrowRight } from 'lucide-react';
import { primaryDoctor } from '../data/clinicData';

interface DoctorExpertiseProps {
  onOpenBooking: () => void;
  onOpenVideoTour: () => void;
  language?: 'ru' | 'en';
}

export const DoctorExpertise: React.FC<DoctorExpertiseProps> = ({
  onOpenBooking,
  onOpenVideoTour,
}) => {
  return (
    <section id="doctor" className="py-16 sm:py-24 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="master-container bg-surface-base p-6 sm:p-10 md:p-14 lg:p-16 relative overflow-hidden">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Doctor Profile & Video Tour Trigger */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[32px] sm:rounded-[40px] overflow-hidden bg-gradient-to-b from-white/60 to-white/10 p-2 border border-white/80 shadow-soft-md">
              <img
                src={primaryDoctor.image}
                alt={primaryDoctor.name}
                className="w-full h-[420px] sm:h-[480px] object-cover object-top rounded-[28px] sm:rounded-[36px]"
              />

              {/* Video Tour Play Button Badge */}
              <button
                onClick={onOpenVideoTour}
                className="absolute bottom-6 left-6 right-6 glass-dark-capsule rounded-2xl p-3 sm:p-3.5 flex items-center justify-between group hover:scale-[1.02] transition-transform"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-lime-accent text-neutral-950 flex items-center justify-center font-bold shadow-sm group-hover:bg-white transition-colors">
                    <Play className="w-4 h-4 fill-neutral-950 ml-0.5" />
                  </div>
                  <div className="text-left">
                    <span className="text-white text-xs sm:text-sm font-semibold block leading-tight">
                      Watch Clinic & OR Tour
                    </span>
                    <span className="text-[11px] text-neutral-400 block font-normal">
                      Sterile surgical theatre & lab
                    </span>
                  </div>
                </div>
                <span className="text-xs text-lime-accent font-bold group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            </div>
          </div>

          {/* Right Column: Editorial Credentials & Philosophy */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/70 border border-white/80 text-xs font-semibold text-neutral-600 shadow-soft-sm mb-3">
                <span>About Surgeon</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.15]">
                Surgical Precision Grounded in Science
              </h2>
            </div>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              {primaryDoctor.bio}
            </p>

            {/* Certifications and Key Accreditations */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs uppercase tracking-wider font-bold text-neutral-500">
                Key Certifications & Standards
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {primaryDoctor.certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-2xl bg-white/70 border border-white/90 text-xs text-neutral-800 font-medium"
                  >
                    <CheckCircle className="w-4 h-4 text-lime-dark shrink-0 mt-0.5" />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-7 py-3.5 rounded-full bg-neutral-900 text-white hover:bg-neutral-950 font-bold text-xs sm:text-sm tracking-wide shadow-sm flex items-center gap-2 group transition-all active:scale-95"
              >
                <span>Schedule Consultation</span>
                <span className="text-lime-accent group-hover:translate-x-1 transition-transform">+</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
