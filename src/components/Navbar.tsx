import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  language?: 'ru' | 'en';
  onToggleLanguage?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Cases', href: '#cases' },
    { label: 'About', href: '#doctor' },
    { label: 'Technology', href: '#technologies' },
    { label: 'All-on-4', href: '#total-restoration' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Skip to Main Content Link for Keyboard Accessibility (WCAG 2.2) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:bg-lime-accent focus:text-neutral-950 focus:font-bold focus:rounded-full focus:shadow-xl"
      >
        Skip to main content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-[#DFE2E6]/90 backdrop-blur-md border-b border-black/5 shadow-sm'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Name */}
            <a
              href="#"
              className="flex items-center gap-3 group focus:outline-none"
              aria-label="Dr. Bocharov Clinic Home"
            >
              <div className="w-10 h-10 rounded-full bg-lime-accent text-neutral-950 flex items-center justify-center font-bold text-base shadow-sm group-hover:scale-105 transition-transform">
                <span>B</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-neutral-900 tracking-tight text-base sm:text-lg leading-none">
                  Dr. Bocharov
                </span>
                <span className="text-[11px] text-neutral-500 font-medium tracking-wide">
                  Surgical Implantology
                </span>
              </div>
            </a>

            {/* Center Navigation Links (Desktop) */}
            <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs uppercase tracking-wider font-semibold text-neutral-600 hover:text-neutral-950 transition-colors py-1 relative group focus:outline-none focus:text-neutral-950"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-lime-accent transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Right Action Buttons */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Book Appointment Pill Button */}
              <button
                onClick={onOpenBooking}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#14171E] text-white hover:bg-black font-medium text-xs tracking-wide shadow-sm hover:shadow transition-all group active:scale-95"
              >
                <span>Book Appointment</span>
                <span className="text-lime-accent font-bold group-hover:translate-x-0.5 transition-transform">+</span>
              </button>

              {/* Quick Phone Call Icon Pill */}
              <a
                href="tel:+18004567890"
                className="w-10 h-10 rounded-full bg-lime-accent text-neutral-950 flex items-center justify-center hover:bg-lime-hover shadow-sm hover:scale-105 active:scale-95 transition-all"
                aria-label="Call clinic"
              >
                <Phone className="w-4 h-4 fill-neutral-950" />
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden w-10 h-10 rounded-full bg-white/90 text-neutral-900 flex items-center justify-center hover:bg-white border border-black/5 transition-colors shadow-sm"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-nav-menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div id="mobile-nav-menu" className="lg:hidden mt-3 px-4 sm:px-6">
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-5 border border-black/10 shadow-2xl space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3.5 py-3 rounded-2xl text-neutral-800 font-medium hover:bg-neutral-100 transition-colors"
                  >
                    <span className="text-sm font-semibold">{link.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-neutral-400" />
                  </a>
                ))}
              </nav>

              <div className="pt-2 border-t border-neutral-100 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3.5 rounded-full bg-lime-accent text-neutral-950 font-bold text-sm shadow-sm flex items-center justify-center gap-2 active:scale-95 transition-transform"
                >
                  <span>Book Consultation</span>
                  <span>+</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
