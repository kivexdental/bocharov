import React, { useState } from 'react';
import { Sparkles, Check, ArrowRight, ShieldCheck, ChevronRight } from 'lucide-react';
import { implantProtocols } from '../data/clinicData';
import { ImplantProtocol } from '../types';

interface ImplantTechSectionProps {
  onSelectProtocol: (protocol: ImplantProtocol) => void;
  onOpenBookingWithProtocol: (protocolId: string) => void;
  language?: 'ru' | 'en';
}

export const ImplantTechSection: React.FC<ImplantTechSectionProps> = ({
  onSelectProtocol,
  onOpenBookingWithProtocol,
}) => {
  const [activeProtocolId, setActiveProtocolId] = useState<string>('all-on-4');

  return (
    <section id="technologies" className="py-16 sm:py-24 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Large Rounded Container */}
      <div className="master-container bg-surface-base p-6 sm:p-10 md:p-14 lg:p-16 relative overflow-hidden">
        
        {/* Subtle background radar circles for technical precision feeling */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] rounded-full border border-black/5 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] h-[540px] rounded-full border border-lime-accent/25 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] rounded-full border border-lime-accent/35 pointer-events-none" />

        {/* Section Header */}
        <div className="max-w-2xl mb-8 sm:mb-12 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/70 border border-white/80 text-xs font-semibold text-neutral-600 shadow-soft-sm mb-4">
            <span>Technologies</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.12]">
            Implantation for every{' '}
            <span className="text-neutral-400 font-light block sm:inline">clinical case</span>
          </h2>
        </div>

        {/* Desktop Presentation: Central 3D Jaw with 4 Radial Interactive Callouts */}
        <div className="relative min-h-[520px] md:min-h-[580px] hidden md:flex items-center justify-center my-4">
          
          {/* Central 3D Transparent Jaw & Implant Render */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Soft lime glow behind the jaw */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-lime-accent/40 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
            
            <div className="relative w-80 sm:w-[380px] group flex justify-center">
              <img
                src="/assets/reference/jaw_implant_transparent.png"
                alt="3D Dental Jaw and Implant Visualization"
                className="w-full h-auto object-contain filter drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Node 1: Top-Left (All-on-4®) */}
          <div className="absolute top-10 left-4 max-w-[280px] z-20">
            <CalloutNode
              protocol={implantProtocols[0]}
              isActive={activeProtocolId === implantProtocols[0].id}
              onHover={() => setActiveProtocolId(implantProtocols[0].id)}
              onClick={() => onSelectProtocol(implantProtocols[0])}
              align="left"
            />
          </div>

          {/* Node 2: Top-Right (Immediate Implantation) */}
          <div className="absolute top-10 right-4 max-w-[280px] z-20">
            <CalloutNode
              protocol={implantProtocols[1]}
              isActive={activeProtocolId === implantProtocols[1].id}
              onHover={() => setActiveProtocolId(implantProtocols[1].id)}
              onClick={() => onSelectProtocol(implantProtocols[1])}
              align="right"
            />
          </div>

          {/* Node 3: Bottom-Left (Classical Implantation) */}
          <div className="absolute bottom-8 left-4 max-w-[280px] z-20">
            <CalloutNode
              protocol={implantProtocols[2]}
              isActive={activeProtocolId === implantProtocols[2].id}
              onHover={() => setActiveProtocolId(implantProtocols[2].id)}
              onClick={() => onSelectProtocol(implantProtocols[2])}
              align="left"
            />
          </div>

          {/* Node 4: Bottom-Right (Navigated Implantation) */}
          <div className="absolute bottom-8 right-4 max-w-[280px] z-20">
            <CalloutNode
              protocol={implantProtocols[3]}
              isActive={activeProtocolId === implantProtocols[3].id}
              onHover={() => setActiveProtocolId(implantProtocols[3].id)}
              onClick={() => onSelectProtocol(implantProtocols[3])}
              align="right"
            />
          </div>

        </div>

        {/* Mobile Presentation: Central Visual + Stacked Interactive Protocol Cards */}
        <div className="md:hidden flex flex-col items-center space-y-6">
          {/* Central 3D Jaw */}
          <div className="relative w-64 sm:w-72 flex justify-center py-4">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-lime-accent/35 rounded-full blur-2xl" />
            <img
              src="/assets/reference/jaw_implant_transparent.png"
              alt="3D Dental Jaw and Implant"
              className="w-full h-auto object-contain relative z-10 filter drop-shadow-xl"
            />
          </div>

          {/* Stacked Cards for Mobile */}
          <div className="w-full space-y-3.5">
            {implantProtocols.map((protocol) => {
              const isActive = activeProtocolId === protocol.id;
              return (
                <div
                  key={protocol.id}
                  onClick={() => {
                    setActiveProtocolId(protocol.id);
                    onSelectProtocol(protocol);
                  }}
                  className={`p-4 sm:p-5 rounded-2xl sm:rounded-3xl border transition-all cursor-pointer ${
                    isActive
                      ? 'bg-white border-lime-accent shadow-md'
                      : 'bg-white/60 border-black/5 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-lime-accent ring-4 ring-lime-glow/30" />
                      <h4 className="font-bold text-sm sm:text-base text-neutral-900">
                        {protocol.name}
                      </h4>
                    </div>
                    <ChevronRight className="w-4 h-4 text-neutral-400" />
                  </div>

                  <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {protocol.shortDesc}
                  </p>

                  <div className="mt-3 flex items-center justify-between pt-2 border-t border-black/5">
                    <span className="text-[11px] font-semibold text-neutral-500">
                      {protocol.duration}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenBookingWithProtocol(protocol.id);
                      }}
                      className="text-xs font-bold text-neutral-950 hover:text-lime-dark flex items-center gap-1"
                    >
                      <span>Details</span>
                      <span className="text-lime-accent font-black">+</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

interface CalloutNodeProps {
  protocol: ImplantProtocol;
  isActive: boolean;
  onHover: () => void;
  onClick: () => void;
  align: 'left' | 'right';
}

const CalloutNode: React.FC<CalloutNodeProps> = ({
  protocol,
  isActive,
  onHover,
  onClick,
  align,
}) => {
  return (
    <div
      onMouseEnter={onHover}
      onClick={onClick}
      className={`cursor-pointer transition-all duration-300 p-4 rounded-2xl group ${
        isActive
          ? 'bg-white/95 backdrop-blur-md shadow-soft-md border border-lime-accent/60 -translate-y-1'
          : 'bg-transparent hover:bg-white/60'
      }`}
    >
      {/* Node Title with Bullet */}
      <div className={`flex items-center gap-2 mb-1.5 ${align === 'right' ? 'justify-end' : 'justify-start'}`}>
        <span className={`w-2 h-2 rounded-full shrink-0 ${isActive ? 'bg-lime-accent ring-4 ring-lime-glow/40' : 'bg-neutral-900'}`} />
        <h4 className="font-bold text-sm text-neutral-900 tracking-tight">
          {protocol.name}
        </h4>
      </div>

      {/* Description */}
      <p className={`text-[12px] text-neutral-600 leading-relaxed font-normal ${align === 'right' ? 'text-right' : 'text-left'}`}>
        {protocol.shortDesc}
      </p>

      {/* Action link */}
      <div className={`mt-2 flex ${align === 'right' ? 'justify-end' : 'justify-start'}`}>
        <span className="text-[11px] font-bold text-neutral-900 group-hover:text-lime-dark flex items-center gap-1 transition-colors">
          <span>Learn more</span>
          <span className="text-lime-accent font-extrabold">+</span>
        </span>
      </div>
    </div>
  );
};
