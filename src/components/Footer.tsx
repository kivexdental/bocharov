import React from 'react';
import { ArrowUp, Phone, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { LegalDocType } from './LegalModal';

interface FooterProps {
  onOpenBooking: () => void;
  language?: 'ru' | 'en';
  onOpenLegal: (doc: LegalDocType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenLegal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-black/5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
        
        {/* Brand Col */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-lime-accent text-neutral-950 flex items-center justify-center font-bold text-sm">
              B
            </div>
            <span className="font-bold text-lg text-neutral-900 tracking-tight">
              Dr. Bocharov
            </span>
          </div>

          <p className="text-xs sm:text-sm text-neutral-500 max-w-sm leading-relaxed">
            Center for maxillofacial surgery and digital dental implantology. Official Straumann partner and certified All-on-4 clinical ambassador.
          </p>

          <div className="flex items-center gap-2 pt-2">
            <button
              onClick={onOpenBooking}
              className="px-4 py-2 rounded-full bg-neutral-900 text-white hover:bg-black text-xs font-semibold tracking-wide transition-all active:scale-95"
            >
              Book Appointment
            </button>
          </div>
        </div>

        {/* Quick Nav */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900">
            Navigation
          </h4>
          <ul className="space-y-2 text-xs text-neutral-600">
            <li><a href="#services" className="hover:text-neutral-950 transition-colors">Services</a></li>
            <li><a href="#technologies" className="hover:text-neutral-950 transition-colors">Technologies</a></li>
            <li><a href="#total-restoration" className="hover:text-neutral-950 transition-colors">All-on-4 Protocol</a></li>
            <li><a href="#cases" className="hover:text-neutral-950 transition-colors">Clinical Cases</a></li>
            <li><a href="#doctor" className="hover:text-neutral-950 transition-colors">About Surgeon</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900">
            Contact
          </h4>
          <ul className="space-y-2.5 text-xs text-neutral-600">
            <li className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
              <a href="tel:+18004567890" className="hover:text-neutral-950 font-medium">+1 (800) 456-7890</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
              <a href="mailto:info@bocharov-dental.com" className="hover:text-neutral-950">info@bocharov-dental.com</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
              <span>Medical Plaza, Suite 400, Central City</span>
            </li>
          </ul>
        </div>

        {/* Working Hours */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900">
            Working Hours
          </h4>
          <div className="text-xs text-neutral-600 space-y-1.5">
            <p className="flex justify-between">
              <span>Mon – Sat:</span>
              <span className="font-semibold text-neutral-900">09:00 – 20:00</span>
            </p>
            <p className="flex justify-between">
              <span>Sun:</span>
              <span className="text-neutral-400">By Appointment</span>
            </p>
            <p className="pt-2 text-[11px] text-lime-dark font-medium flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>Emergency surgical on-call 24/7</span>
            </p>
          </div>
        </div>

      </div>

      {/* Middle Compliance & Legal Directory */}
      <div className="py-4 border-t border-black/5 flex flex-wrap items-center justify-between gap-y-2 gap-x-4 text-xs text-neutral-500">
        <span className="font-semibold text-neutral-700">
          Legal Standards & Patient Safety:
        </span>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
          <button
            onClick={() => onOpenLegal('privacy')}
            className="hover:text-neutral-950 underline transition-colors"
          >
            Privacy Policy
          </button>
          <button
            onClick={() => onOpenLegal('terms')}
            className="hover:text-neutral-950 underline transition-colors"
          >
            Terms of Use
          </button>
          <button
            onClick={() => onOpenLegal('disclaimer')}
            className="hover:text-neutral-950 underline transition-colors text-amber-700"
          >
            Medical Disclaimer
          </button>
          <button
            onClick={() => onOpenLegal('cookies')}
            className="hover:text-neutral-950 underline transition-colors"
          >
            Cookie Policy
          </button>
          <button
            onClick={() => onOpenLegal('cancellation')}
            className="hover:text-neutral-950 underline transition-colors"
          >
            Cancellation Policy
          </button>
          <button
            onClick={() => onOpenLegal('accessibility')}
            className="hover:text-neutral-950 underline transition-colors font-medium text-neutral-700"
          >
            Accessibility (WCAG 2.2)
          </button>
        </div>
      </div>

      {/* Bottom Legal bar */}
      <div className="pt-6 border-t border-black/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
        <p>© {new Date().getFullYear()} Dr. Maxim Bocharov Clinic. All medical rights reserved. Medical License № ЛО-77-01-019842.</p>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-1 text-neutral-600 hover:text-neutral-950 font-medium transition-colors"
          aria-label="Scroll back to top"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
