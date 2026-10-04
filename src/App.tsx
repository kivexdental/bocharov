import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemsServices } from './components/ProblemsServices';
import { ImplantTechSection } from './components/ImplantTechSection';
import { TotalRestoration } from './components/TotalRestoration';
import { DoctorExpertise } from './components/DoctorExpertise';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { TreatmentProcess } from './components/TreatmentProcess';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { VideoModal } from './components/VideoModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { LegalModal, LegalDocType } from './components/LegalModal';
import { CookieBanner } from './components/CookieBanner';
import { ErrorBoundary } from './components/ErrorBoundary';
import { KivexPreviewToolbar, PreviewDeviceMode } from './components/toolbar/KivexPreviewToolbar';
import { PreviewWorkspace } from './components/toolbar/PreviewWorkspace';
import { ServiceProblemItem, ImplantProtocol } from './types';

/**
 * 1. PURE PUBLIC DENTAL CLINIC WEBSITE (English Only)
 * Target preview application with zero toolbar branding or CRM logic.
 */
export function DentalWebsite() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingServiceId, setBookingServiceId] = useState('all-on-4');
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceProblemItem | null>(null);
  
  // Legal Policies State (WCAG 2.2 & Medical Compliance)
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [activeLegalDoc, setActiveLegalDoc] = useState<LegalDocType>('privacy');

  const handleOpenBooking = (serviceId = 'all-on-4') => {
    setBookingServiceId(serviceId);
    setIsBookingOpen(true);
  };

  const handleSelectProtocol = (protocol: ImplantProtocol) => {
    handleOpenBooking(protocol.id);
  };

  const handleOpenLegal = (doc: LegalDocType) => {
    setActiveLegalDoc(doc);
    setIsLegalOpen(true);
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-[#DFE2E6] flex flex-col items-center">
        {/* Main Content Container */}
        <div className="w-full bg-[#DFE2E6]">
          
          {/* 1. Header Navigation */}
          <Navbar
            onOpenBooking={() => handleOpenBooking()}
          />

          {/* 2. Main Public Dental Content */}
          <main id="main-content" tabIndex={-1} className="focus:outline-none">
            {/* Hero Section */}
            <Hero
              onOpenBooking={() => handleOpenBooking()}
            />

            {/* Problems Patients Face & Dental Services */}
            <ProblemsServices
              onSelectService={(srv) => setSelectedService(srv)}
            />

            {/* 3D Dental Implant Navigation & Protocols */}
            <ImplantTechSection
              onSelectProtocol={handleSelectProtocol}
              onOpenBookingWithProtocol={(id) => handleOpenBooking(id)}
            />

            {/* Total Restoration (All-on-4 Protocol) */}
            <TotalRestoration
              onOpenBooking={() => handleOpenBooking('all-on-4')}
            />

            {/* Doctor Credentials & Operating Room Video Tour */}
            <DoctorExpertise
              onOpenBooking={() => handleOpenBooking()}
              onOpenVideoTour={() => setIsVideoOpen(true)}
            />

            {/* Clinical Results: Before & After Rehab Slider */}
            <BeforeAfterSection
              onOpenBooking={() => handleOpenBooking()}
            />

            {/* 5-Step Treatment Protocol Roadmap */}
            <TreatmentProcess
              onOpenBooking={() => handleOpenBooking()}
            />

            {/* Final Surgical Consultation Call To Action */}
            <CTASection
              onOpenBooking={() => handleOpenBooking()}
            />
          </main>

          {/* 3. Minimal Editorial & Compliance Footer */}
          <Footer
            onOpenBooking={() => handleOpenBooking()}
            onOpenLegal={handleOpenLegal}
          />

        </div>

        {/* 4. Modals & Dialogs */}
        <BookingModal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
          initialServiceId={bookingServiceId}
          onOpenPrivacy={() => handleOpenLegal('privacy')}
        />

        <VideoModal
          isOpen={isVideoOpen}
          onClose={() => setIsVideoOpen(false)}
        />

        <ServiceDetailModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onBookService={(id) => handleOpenBooking(id)}
        />

        <LegalModal
          isOpen={isLegalOpen}
          onClose={() => setIsLegalOpen(false)}
          activeDoc={activeLegalDoc}
          setActiveDoc={setActiveLegalDoc}
        />

        {/* 5. Cookie Compliance Banner */}
        <CookieBanner
          onOpenLegal={handleOpenLegal}
        />

      </div>
    </ErrorBoundary>
  );
}

/**
 * 2. MAIN APPLICATION WRAPPER
 * Implements KIVEX Technology Website Preview Toolbar & true viewport architecture
 */
export function App() {
  const [isStandalone, setIsStandalone] = useState(false);
  const [previewMode, setPreviewMode] = useState<PreviewDeviceMode>('fullscreen');
  const [isToolbarVisible, setIsToolbarVisible] = useState(true);

  useEffect(() => {
    // Check if the current context is standalone or embedded inside the preview iframe
    const inIframe = window.self !== window.top;
    const urlParams = new URLSearchParams(window.location.search);
    const standaloneParam = urlParams.get('standalone') === 'true';

    if (inIframe || standaloneParam) {
      setIsStandalone(true);
    }
  }, []);

  // When embedded inside iframe or visited directly with ?standalone=true, render the pure dental website
  if (isStandalone) {
    return <DentalWebsite />;
  }

  // Top-level preview wrapper with permanent KIVEX Technology branding and true viewport workspace
  return (
    <div className="min-h-screen flex flex-col bg-[#1A1E26] overflow-hidden">
      {/* Permanent KIVEX Technology Toolbar (Section 2 & 6) */}
      {isToolbarVisible && (
        <KivexPreviewToolbar
          currentMode={previewMode}
          onSelectMode={(mode) => setPreviewMode(mode)}
          onCloseToolbar={() => setIsToolbarVisible(false)}
        />
      )}

      {/* True Viewport Preview Workspace (Section 20 & 22) */}
      <PreviewWorkspace
        currentMode={previewMode}
        isToolbarVisible={isToolbarVisible}
        onReopenToolbar={() => setIsToolbarVisible(true)}
      />
    </div>
  );
}

export default App;
