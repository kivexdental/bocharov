import React, { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';
import { LegalDocType } from './LegalModal';

interface CookieBannerProps {
  language?: 'ru' | 'en';
  onOpenLegal: (doc: LegalDocType) => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onOpenLegal }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('bocharov_cookie_consent');
      if (!consent) {
        const timer = setTimeout(() => setIsVisible(true), 1000);
        return () => clearTimeout(timer);
      }
    } catch {
      // Ignore if localStorage is disabled
    }
  }, []);

  const handleAccept = (type: 'all' | 'essential') => {
    try {
      localStorage.setItem('bocharov_cookie_consent', type);
    } catch {}
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent notice"
      className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-40 bg-white/95 backdrop-blur-md rounded-3xl p-5 border border-black/10 shadow-2xl animate-in slide-in-from-bottom-5 duration-300"
    >
      <div className="flex items-start gap-3.5">
        <div className="w-9 h-9 rounded-2xl bg-neutral-100 text-neutral-800 flex items-center justify-center shrink-0">
          <Cookie className="w-5 h-5 text-neutral-700" />
        </div>

        <div className="space-y-3 flex-1">
          <div>
            <h4 className="font-bold text-xs sm:text-sm text-neutral-900">
              Cookie & Privacy Preferences
            </h4>
            <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
              We use necessary cookies to remember interface preferences and provide optimal site presentation without third-party tracking.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-1">
            <button
              onClick={() => handleAccept('all')}
              className="px-4 py-2 rounded-full bg-neutral-900 hover:bg-black text-white text-xs font-semibold shadow-sm transition-all"
            >
              Accept All
            </button>
            <button
              onClick={() => handleAccept('essential')}
              className="px-3.5 py-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-xs font-medium transition-all"
            >
              Essential Only
            </button>
            <button
              onClick={() => onOpenLegal('cookies')}
              className="px-2 py-1 text-xs text-neutral-500 hover:text-neutral-900 underline transition-colors"
            >
              Learn More
            </button>
          </div>
        </div>

        <button
          onClick={() => setIsVisible(false)}
          className="text-neutral-400 hover:text-neutral-700 transition-colors p-1"
          aria-label="Dismiss cookie banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
