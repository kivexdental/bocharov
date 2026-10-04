import React, { useEffect } from 'react';
import { X, ShieldCheck, FileText, AlertTriangle, Cookie, CalendarX, Eye } from 'lucide-react';

export type LegalDocType =
  | 'privacy'
  | 'terms'
  | 'disclaimer'
  | 'cookies'
  | 'cancellation'
  | 'accessibility';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeDoc: LegalDocType;
  setActiveDoc: (doc: LegalDocType) => void;
  language?: 'ru' | 'en';
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  onClose,
  activeDoc,
  setActiveDoc,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const docs = [
    {
      id: 'privacy' as LegalDocType,
      label: 'Privacy Policy',
      icon: ShieldCheck,
    },
    {
      id: 'terms' as LegalDocType,
      label: 'Terms of Use',
      icon: FileText,
    },
    {
      id: 'disclaimer' as LegalDocType,
      label: 'Medical Disclaimer',
      icon: AlertTriangle,
    },
    {
      id: 'cookies' as LegalDocType,
      label: 'Cookie Policy',
      icon: Cookie,
    },
    {
      id: 'cancellation' as LegalDocType,
      label: 'Booking & Cancellation',
      icon: CalendarX,
    },
    {
      id: 'accessibility' as LegalDocType,
      label: 'Accessibility (WCAG 2.2)',
      icon: Eye,
    },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-3xl bg-white rounded-[32px] sm:rounded-[40px] shadow-2xl border border-black/10 flex flex-col max-h-[88vh] overflow-hidden">
        
        {/* Header */}
        <div className="p-6 sm:p-7 border-b border-black/5 flex items-center justify-between bg-neutral-50/80">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-lime-dark bg-lime-light px-2.5 py-1 rounded-full">
              Legal & Compliance
            </span>
            <h2 id="legal-modal-title" className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight mt-1.5">
              {docs.find((d) => d.id === activeDoc)?.label}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-neutral-200/80 hover:bg-neutral-300 text-neutral-700 flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab navigation */}
        <div className="flex items-center gap-1.5 px-6 py-2.5 bg-neutral-100/70 border-b border-black/5 overflow-x-auto text-xs no-scrollbar">
          {docs.map((doc) => {
            const Icon = doc.icon;
            const isActive = activeDoc === doc.id;
            return (
              <button
                key={doc.id}
                onClick={() => setActiveDoc(doc.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full whitespace-nowrap font-medium transition-all ${
                  isActive
                    ? 'bg-neutral-900 text-white shadow-sm'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-white/80'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{doc.label}</span>
              </button>
            );
          })}
        </div>

        {/* Document Content */}
        <div className="p-6 sm:p-8 overflow-y-auto text-xs sm:text-sm text-neutral-700 space-y-4 leading-relaxed">
          {activeDoc === 'privacy' && (
            <div className="space-y-4">
              <h3 className="text-base font-bold text-neutral-900">
                1. Privacy Policy & Patient Data Protection
              </h3>
              <p>
                The surgical clinic of Dr. Maxim Bocharov adheres to international patient confidentiality principles, HIPAA security standards, and GDPR regulations regarding the processing of personal data.
              </p>
              <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-2">
                <h4 className="font-semibold text-neutral-900">
                  Public Showcase Disclaimer
                </h4>
                <p className="text-neutral-600">
                  This public-facing dental website functions as an educational and procedural demonstration showcase. Demonstration consultation booking forms do not store, profile, or transmit sensitive biometric patient data to unverified external services.
                </p>
              </div>
              <p>
                Contact details provided during consultation inquiry requests are used strictly for coordinator callback and are never sold or shared with third-party commercial marketing entities.
              </p>
            </div>
          )}

          {activeDoc === 'terms' && (
            <div className="space-y-4">
              <h3 className="text-base font-bold text-neutral-900">
                2. Terms & Conditions of Website Use
              </h3>
              <p>
                All textual, 3D graphical, and interactive assets including All-on-4 protocol diagrams and verified before/after cases are protected medical intellectual property of Dr. Maxim Bocharov.
              </p>
              <p>
                Usage of this portal implies agreement with educational browsing terms. Unauthorized reproduction of surgical documentation without prior written authorization is strictly prohibited.
              </p>
            </div>
          )}

          {activeDoc === 'disclaimer' && (
            <div className="space-y-4">
              <h3 className="text-base font-bold text-neutral-900">
                3. Medical & Diagnostic Disclaimer
              </h3>
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 space-y-2">
                <div className="flex items-center gap-2 font-bold">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>Notice: Clinical Verification Required</span>
                </div>
                <p>
                  Information on this website is for educational and informational purposes only. It does not constitute formal medical diagnosis, tele-medicine prescription, or an irrevocable public contract.
                </p>
              </div>
              <p>
                Surgical implant decisions (All-on-4, bone grafting, sinus elevation) require an in-person clinical examination, 3D Cone Beam Computed Tomography (CBCT) scan, and health history assessment.
              </p>
            </div>
          )}

          {activeDoc === 'cookies' && (
            <div className="space-y-4">
              <h3 className="text-base font-bold text-neutral-900">
                4. Cookie Policy & Local Storage
              </h3>
              <p>
                We utilize technical cookies and browser local storage to preserve your UI preferences, modal states, and responsive preview settings.
              </p>
              <p>
                You may clear local cookie data at any time via your browser security settings. Disabling non-essential cookies does not impede basic site navigation.
              </p>
            </div>
          )}

          {activeDoc === 'cancellation' && (
            <div className="space-y-4">
              <h3 className="text-base font-bold text-neutral-900">
                5. Consultation Booking & Cancellation
              </h3>
              <p>
                Because surgical suites and sterile preparation are reserved specifically for each patient slot, we respectfully request at least 24 hours prior notice for appointment rescheduling.
              </p>
              <p>
                In urgent surgical conditions (acute trauma or sudden prosthesis displacement), emergency clinical assistance is prioritized immediately.
              </p>
            </div>
          )}

          {activeDoc === 'accessibility' && (
            <div className="space-y-4">
              <h3 className="text-base font-bold text-neutral-900">
                6. Digital Accessibility Commitment (WCAG 2.2 AA)
              </h3>
              <p>
                Our clinic is committed to digital inclusivity, striving to meet or exceed Web Content Accessibility Guidelines (WCAG 2.2 Level AA).
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-neutral-600">
                <li>Full keyboard-only navigation support across all controls (TAB, Shift+TAB, Enter, Esc).</li>
                <li>High-contrast text ratios and scalable fluid typography.</li>
                <li>Semantic landmark regions for screen readers.</li>
                <li>Strict compliance with prefers-reduced-motion system settings.</li>
              </ul>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-black/5 bg-neutral-50 flex items-center justify-between">
          <p className="text-[11px] text-neutral-400">
            Medical License № ЛО-77-01-019842 • Dr. Maxim Bocharov
          </p>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-neutral-900 text-white font-medium text-xs hover:bg-black transition-colors"
          >
            Understood
          </button>
        </div>

      </div>
    </div>
  );
};
