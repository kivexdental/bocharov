export interface ServiceProblemItem {
  id: string;
  title: string;
  russianTitle: string;
  description: string;
  image: string;
  badge: string;
  tagColor?: string;
  details: {
    duration: string;
    anesthesia: string;
    recovery: string;
    indications: string[];
    steps: string[];
  };
}

export interface ImplantProtocol {
  id: string;
  name: string;
  russianName: string;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  desktopCoords: { top: string; left: string };
  shortDesc: string;
  fullDesc: string;
  duration: string;
  warranty: string;
  benefits: string[];
}

export interface RestorationIndication {
  id: string;
  title: string;
  russianTitle: string;
  description: string;
  urgency: string;
  treatmentSolution: string;
}

export interface DoctorProfile {
  name: string;
  russianName: string;
  role: string;
  specialty: string;
  experienceYears: number;
  annualSurgeries: number;
  partnerships: Array<{
    title: string;
    subtitle: string;
    logoType: 'straumann' | 'nobel' | 'all-on-4';
  }>;
  bio: string;
  certifications: string[];
  image: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  beforeImage: string;
  afterImage: string;
  age: string;
  duration: string;
  implantsCount: string;
  story: string;
}

export interface BookingState {
  serviceId: string;
  protocolId?: string;
  date: string;
  timeSlot: string;
  fullName: string;
  phone: string;
  comment: string;
}
