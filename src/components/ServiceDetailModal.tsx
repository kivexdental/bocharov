import React, { useEffect } from 'react';
import { X, Clock, ShieldCheck, Activity, CheckCircle2, ArrowRight } from 'lucide-react';
import { ServiceProblemItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceProblemItem | null;
  onClose: () => void;
  onBookService: (serviceId: string) => void;
  language?: 'ru' | 'en';
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookService,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && service) {
        onClose();
      }
    };
    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 shadow-2xl border border-black/10 overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Content */}
        <div className="space-y-6">
          
          {/* Header with image */}
          <div className="flex flex-col sm:flex-row gap-5 items-start">
            <div className="w-full sm:w-44 h-36 rounded-2xl overflow-hidden shrink-0 shadow-sm border border-neutral-200">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="space-y-1.5">
              <span className="inline-block px-3 py-1 rounded-full bg-lime-light text-lime-dark text-xs font-bold">
                {service.badge}
              </span>
              <h2 id="service-modal-title" className="text-2xl font-bold tracking-tight text-neutral-900">
                {service.title}
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>

          {/* Key Parameters */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-neutral-50 border border-neutral-100 text-xs">
            <div>
              <span className="text-neutral-400 block">Duration:</span>
              <span className="font-semibold text-neutral-900">{service.details.duration}</span>
            </div>
            <div>
              <span className="text-neutral-400 block">Anesthesia:</span>
              <span className="font-semibold text-neutral-900">{service.details.anesthesia}</span>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="text-neutral-400 block">Recovery:</span>
              <span className="font-semibold text-neutral-900">{service.details.recovery}</span>
            </div>
          </div>

          {/* Indications */}
          <div className="space-y-2.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-700">
              Clinical Indications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {service.details.indications.map((ind, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-neutral-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-lime-dark shrink-0 mt-0.5" />
                  <span>{ind}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Treatment Steps */}
          <div className="space-y-2.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-700">
              Procedure Workflow
            </h3>
            <div className="space-y-2">
              {service.details.steps.map((st, i) => (
                <div key={i} className="flex items-start gap-3 p-2.5 rounded-xl bg-neutral-50 text-xs text-neutral-700">
                  <span className="w-5 h-5 rounded-full bg-neutral-200 text-neutral-800 font-bold flex items-center justify-center text-[10px] shrink-0">
                    {i + 1}
                  </span>
                  <span>{st}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-2">
            <button
              onClick={() => {
                onClose();
                onBookService(service.id);
              }}
              className="w-full py-4 rounded-full bg-lime-accent hover:bg-lime-hover text-neutral-950 font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-transform active:scale-95"
            >
              <span>Book Consultation for {service.title}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
