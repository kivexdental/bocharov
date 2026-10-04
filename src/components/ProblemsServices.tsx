import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { serviceProblems } from '../data/clinicData';
import { ServiceProblemItem } from '../types';

interface ProblemsServicesProps {
  onSelectService: (service: ServiceProblemItem) => void;
  language?: 'ru' | 'en';
}

export const ProblemsServices: React.FC<ProblemsServicesProps> = ({
  onSelectService,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -360, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 360, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Large Rounded Section Card */}
      <div className="master-container bg-surface-base p-6 sm:p-10 md:p-14 lg:p-16 relative overflow-hidden">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto mb-10 sm:mb-14">
          {/* Label */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/70 border border-white/80 text-xs font-semibold text-neutral-600 shadow-soft-sm">
            <span>Services</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-tight">
            With what dental problems do patients come to us
          </h2>

          {/* Carousel Arrow Controls */}
          <div className="flex items-center gap-2.5 pt-2">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white/80 hover:bg-white text-neutral-800 flex items-center justify-center border border-black/5 shadow-soft-sm hover:scale-105 active:scale-95 transition-all"
              aria-label="Previous service"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-lime-accent hover:bg-lime-hover text-neutral-950 flex items-center justify-center font-bold shadow-soft-sm hover:scale-105 active:scale-95 transition-all"
              aria-label="Next service"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Dynamic Angled Cards Carousel */}
        <div
          ref={containerRef}
          className="flex gap-6 sm:gap-8 overflow-x-auto pb-8 pt-4 px-2 no-scrollbar snap-x snap-mandatory scroll-smooth items-center justify-start lg:justify-center"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {serviceProblems.slice(0, 4).map((service, index) => {
            // Rotational variance matching reference's angled fan layout
            const rotations = ['-rotate-3', 'rotate-2', '-rotate-2', 'rotate-3'];
            const rotClass = rotations[index % rotations.length];

            return (
              <div
                key={service.id}
                onClick={() => onSelectService(service)}
                className={`snap-center shrink-0 w-[260px] sm:w-[280px] md:w-[300px] h-[370px] sm:h-[400px] rounded-[32px] sm:rounded-[38px] relative overflow-hidden cursor-pointer group shadow-card-glow hover:shadow-2xl transition-all duration-300 transform ${rotClass} hover:rotate-0 hover:-translate-y-3 border-2 border-white/90 bg-white`}
              >
                {/* Visual Card Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Subtle Interactive Hover Gradient & Details Trigger */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <div className="w-full flex items-center justify-between text-white text-xs font-semibold">
                    <span>Procedure details</span>
                    <span className="w-7 h-7 rounded-full bg-lime-accent text-neutral-950 flex items-center justify-center font-bold">
                      →
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
