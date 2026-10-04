import {
  ServiceProblemItem,
  ImplantProtocol,
  RestorationIndication,
  DoctorProfile,
  CaseStudy
} from '../types';

export const primaryDoctor: DoctorProfile = {
  name: "Dr. Maxim Bocharov",
  russianName: "Dr. Maxim Bocharov",
  role: "Chief Maxillofacial Surgeon & Implantologist",
  specialty: "Maxillofacial Surgeon",
  experienceYears: 20,
  annualSurgeries: 300,
  partnerships: [
    {
      title: "Official Straumann Partner",
      subtitle: "Official Straumann Partner & Excellence Center",
      logoType: "straumann"
    },
    {
      title: "All-on-4® & All-on-6 Ambassador",
      subtitle: "Certified All-on-4 Clinical Ambassador",
      logoType: "all-on-4"
    }
  ],
  bio: "Surgical dentistry where precision begins long before the operation. Specializing in complex navigated implantology, full-arch All-on-4 reconstructions, and atraumatic bone regeneration with international protocols.",
  certifications: [
    "Nobel Biocare Certified All-on-4 Clinical Master",
    "Straumann Pro Arch Surgical Specialist",
    "European Association for Osseointegration (EAO) Member",
    "Maxillofacial Surgery Board Certified Expert"
  ],
  image: "/assets/reference/dr_bocharov_hero.png"
};

export const serviceProblems: ServiceProblemItem[] = [
  {
    id: "gum-recession",
    title: "Gum Recession Closure",
    russianTitle: "Gum Recession Closure",
    description: "When root surfaces are exposed, causing acute tooth sensitivity and aesthetic compromise.",
    image: "/assets/reference/service_recession.png",
    badge: "Aesthetics & Comfort",
    details: {
      duration: "45–60 minutes",
      anesthesia: "Computerized painless local anesthesia",
      recovery: "2–4 days",
      indications: [
        "Exposed tooth roots and sensitive necks",
        "Loss of pink gum aesthetics when smiling",
        "Thin periodontal biotype prone to gum thinning",
        "Cervical defects and hypersensitivity to hot/cold"
      ],
      steps: [
        "Digital micro-scan of the recession zone",
        "Minimally invasive tunneling or coronally advanced flap",
        "Microsurgical suture placement with magnification optics",
        "Fast-healing PRF membrane stabilization"
      ]
    }
  },
  {
    id: "tooth-extraction",
    title: "Atraumatic Tooth Extraction",
    russianTitle: "Atraumatic Tooth Extraction",
    description: "When conservative therapy is ineffective and saving surrounding bone is critical.",
    image: "/assets/reference/service_surgery.png",
    badge: "Surgical Precision",
    details: {
      duration: "30–45 minutes",
      anesthesia: "Ultra-potent targeted anesthetic",
      recovery: "1–3 days",
      indications: [
        "Severe longitudinal root fractures",
        "Unsalvageable crown destruction below bone level",
        "Impacted wisdom teeth pressing on dentition",
        "Chronic periapical infection resisting endodontic care"
      ],
      steps: [
        "3D tomographic root canal & nerve mapping",
        "Piezosurgical ultrasonic separation of root ligaments",
        "Atraumatic socket extraction without bone damage",
        "Immediate socket preservation or instant implant placement"
      ]
    }
  },
  {
    id: "implant-placement",
    title: "Dental Implant Placement",
    russianTitle: "Dental Implant Placement",
    description: "Swiss & Swedish premium titanium implants with lifetime osseointegration warranty.",
    image: "/assets/reference/service_implant_screw.png",
    badge: "Permanent Solution",
    details: {
      duration: "30 minutes per implant",
      anesthesia: "Complete local analgesia / Sedation available",
      recovery: "2–3 days with minimal swelling",
      indications: [
        "Single missing tooth in aesthetic or chewing zone",
        "Multiple consecutive missing teeth",
        "Need to protect adjacent healthy teeth from being shaved for bridges",
        "Loss of chewing capability and bite collapse"
      ],
      steps: [
        "Virtual computer simulation of implant trajectory",
        "Painless osteotomy through micro-punch or flapless incision",
        "Installation of Straumann SLActive titanium screw",
        "Immediate temporary crown or healing abutment"
      ]
    }
  },
  {
    id: "bone-regeneration",
    title: "Guided Bone Regeneration",
    russianTitle: "Guided Bone Regeneration",
    description: "Restoring bone volume and sinus lift when bone atrophy prevents direct implant anchoring.",
    image: "/assets/reference/service_bone_matrix.png",
    badge: "Bio-Technology",
    details: {
      duration: "60 minutes",
      anesthesia: "Deep local sedation",
      recovery: "3–5 days",
      indications: [
        "Significant bone atrophy following long-past extractions",
        "Low maxillary sinus floor requiring sinus lift",
        "Narrow alveolar ridge unable to hold standard implant diameter",
        "Post-traumatic bone volume deficits"
      ],
      steps: [
        "Precision bone density 3D reconstruction",
        "Placement of osteoconductive biomaterial matrix",
        "Fixation of resorbable collagen barrier membrane",
        "Maturation for solid structural foundation"
      ]
    }
  },
  {
    id: "all-on-4-service",
    title: "All-on-4 Total Restoration",
    russianTitle: "All-on-4 Total Restoration",
    description: "Complete dental arch restoration on 4 implants with fixed teeth on surgery day.",
    image: "/assets/service section/04_dental_implant.png",
    badge: "Immediate Smiles",
    details: {
      duration: "2.5–3 hours for full arch",
      anesthesia: "Twilight sedation / Local anesthesia",
      recovery: "4–7 days",
      indications: [
        "Complete toothlessness (edentulism) in upper or lower jaw",
        "Loose, failing teeth affected by advanced periodontitis",
        "Intolerance to loose, uncomfortable acrylic dentures",
        "Desire to chew normally within 24 hours of surgery"
      ],
      steps: [
        "Complete 3D intraoral digital optical scanning",
        "Strategic placement of 2 straight and 2 angled posterior implants",
        "Screw-retained multi-unit abutment installation",
        "Fixation of reinforced aesthetic bridge on the exact same day"
      ]
    }
  },
  {
    id: "clear-aligners",
    title: "Digital Orthodontics & Aligners",
    russianTitle: "Digital Orthodontics & Aligners",
    description: "Subtle transparent aligner treatment to optimize occlusion before surgical restorations.",
    image: "/assets/service section/03_clear_aligners.png",
    badge: "Bite Correction",
    details: {
      duration: "Custom plan (6–14 months)",
      anesthesia: "Non-invasive",
      recovery: "Zero downtime",
      indications: [
        "Crowded teeth complicating implant placement",
        "Pathological bite alignment and joint strain",
        "Aesthetic smile line correction",
        "Pre-prosthetic space reopening"
      ],
      steps: [
        "AI 3D simulation of teeth movement from start to finish",
        "Custom 3D printing of medical polyurethane trays",
        "Bi-weekly progression checkups and remote tracking",
        "Permanent retainers for lifelong smile retention"
      ]
    }
  }
];

export const implantProtocols: ImplantProtocol[] = [
  {
    id: "all-on-4",
    name: "All-on-4® Protocol",
    russianName: "All-on-4® Protocol",
    position: "top-left",
    desktopCoords: { top: "22%", left: "14%" },
    shortDesc: "Complete dental arch restoration on 4 implants. Suitable for total tooth loss, eliminating removable dentures.",
    fullDesc: "The Nobel Biocare & Straumann All-on-4 technique utilizes two upright anterior implants and two angled posterior implants. By tilting posterior fixtures up to 45 degrees, we avoid anatomical structures like the sinus cavity, bypassing bone grafting.",
    duration: "1 day surgery & teeth",
    warranty: "Lifetime Manufacturer Warranty",
    benefits: [
      "Non-removable teeth fixed on the surgery day",
      "No extensive bone grafting required",
      "Full chewing ability restored immediately",
      "Natural gum and lip contour support"
    ]
  },
  {
    id: "immediate",
    name: "Immediate Implantation",
    russianName: "Immediate Implantation",
    position: "top-right",
    desktopCoords: { top: "18%", left: "68%" },
    shortDesc: "The implant is inserted right after tooth extraction in a single visit, reducing surgical stages and healing time.",
    fullDesc: "Single-stage implantation combines tooth extraction with titanium root insertion in one single surgical session. A temporary aesthetic crown is secured immediately, preserving natural gingival papillae and contour.",
    duration: "40 minutes in one visit",
    warranty: "Lifetime Warranty",
    benefits: [
      "Zero days walking without a tooth",
      "Only 1 surgical appointment instead of 2",
      "Preserves the natural pink gum scallops",
      "Accelerated osseointegration"
    ]
  },
  {
    id: "classical",
    name: "Classical 2-Stage Implantation",
    russianName: "Classical 2-Stage Implantation",
    position: "bottom-left",
    desktopCoords: { top: "72%", left: "16%" },
    shortDesc: "Two-stage gold-standard protocol: implant is installed first, followed by permanent crown after complete bone integration.",
    fullDesc: "The gold-standard protocol for complex clinical cases where maximum bone density integration is critical. The implant remains protected under the mucous membrane for 2 to 4 months before receiving masticatory load.",
    duration: "2 stages over 3 months",
    warranty: "Lifetime Warranty",
    benefits: [
      "Highest clinical success rate (99.4%)",
      "Ideal for compromised bone situations",
      "Complete protection against accidental chewing forces during healing",
      "Perfect emergence profile customization"
    ]
  },
  {
    id: "navigated",
    name: "3D Navigated Implantation",
    russianName: "3D Navigated Implantation",
    position: "bottom-right",
    desktopCoords: { top: "66%", left: "66%" },
    shortDesc: "Digital 3D surgical guide planning calculates optimal implant depth, angle, and trajectory before surgery begins.",
    fullDesc: "Using cone beam CT data and digital intraoral scans, our software designs a custom stereolithographic surgical template. Implants are inserted through precision titanium sleeves without large gum incisions.",
    duration: "Flapless 20-min placement",
    warranty: "Lifetime Warranty",
    benefits: [
      "Sub-millimeter accuracy and zero nerve damage risk",
      "Flapless surgery without scalpels or stitches",
      "Minimal postoperative swelling and discomfort",
      "Predictable aesthetic crown fit guaranteed"
    ]
  }
];

export const restorationIndications: RestorationIndication[] = [
  {
    id: "complete-absence",
    title: "Complete Absence of Teeth",
    russianTitle: "Complete Absence of Teeth",
    description: "All teeth lost on one or both arches, requiring stable non-removable teeth.",
    urgency: "High Priority",
    treatmentSolution: "All-on-4 or All-on-6 immediate fixed bridge"
  },
  {
    id: "majority-destroyed",
    title: "Most Teeth Severely Destroyed",
    russianTitle: "Most Teeth Severely Destroyed",
    description: "Remaining damaged teeth cannot support normal chewing or aesthetic smile function.",
    urgency: "Surgical route",
    treatmentSolution: "Single-day atraumatic extraction & immediate implant bridge"
  },
  {
    id: "untreatable-teeth",
    title: "Remaining Teeth Cannot Be Saved",
    russianTitle: "Remaining Teeth Cannot Be Saved",
    description: "Advanced periodontal mobility or terminal decay makes extraction and implant restoration the only viable solution.",
    urgency: "Preventative",
    treatmentSolution: "Flapless navigated implant protocol"
  },
  {
    id: "shorten-timeline",
    title: "Crucial to Shorten Treatment Time",
    russianTitle: "Crucial to Shorten Treatment Time",
    description: "Immediate fixed provisional teeth secured on the exact day of surgery.",
    urgency: "Immediate Load",
    treatmentSolution: "Same-day immediate loading protocol"
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: "case-1",
    title: "Total Upper Arch Rehabilitation All-on-4",
    category: "Full Arch Rehabilitation",
    beforeImage: "/assets/befor and after/dirty.png",
    afterImage: "/assets/befor and after/clean.png",
    age: "54 years old",
    duration: "3 days from consultation to final teeth",
    implantsCount: "4 Straumann SLActive Implants",
    story: "Patient presented with advanced mobility and inability to chew solid food. In a 2-hour surgery, unviable teeth were removed and 4 precision implants were placed with a screw-retained aesthetic bridge delivered on the exact same day."
  },
  {
    id: "case-2",
    title: "Aesthetic Zone Immediate Implant with Custom Zirconia",
    category: "Single Tooth Replacement",
    beforeImage: "/assets/Explore/e2.jpg",
    afterImage: "/assets/Explore/e1.jpg",
    age: "36 years old",
    duration: "1 day surgery + immediate provisional",
    implantsCount: "1 Straumann Roxolid Implant",
    story: "Central incisor fractured after sports injury. Flapless immediate implant placed with soft tissue preservation. Patient returned to work the next morning with zero aesthetic downtime."
  }
];

export const treatmentSteps = [
  {
    number: "01",
    title: "3D Diagnostics & CT Scanning",
    russianTitle: "3D Diagnostics & CT Scanning",
    description: "High-resolution cone-beam 3D computed tomography and optical intraoral scanner capture jawbone anatomy down to 50 microns.",
    timeline: "30 minutes"
  },
  {
    number: "02",
    title: "Virtual Surgical Guide Planning",
    russianTitle: "Virtual Surgical Guide Planning",
    description: "In surgical planning software, implants are positioned considering bone density, nerve pathways, and final tooth aesthetics.",
    timeline: "24 hours"
  },
  {
    number: "03",
    title: "Minimally Invasive Implantation",
    russianTitle: "Minimally Invasive Implantation",
    description: "The surgeon inserts implants through the custom 3D guide under sterile operating conditions with computerized anesthesia.",
    timeline: "30–60 minutes"
  },
  {
    number: "04",
    title: "Immediate Loading with Fixed Bridge",
    russianTitle: "Immediate Loading with Fixed Bridge",
    description: "Fixed teeth are secured onto multi-unit abutments on surgery day. You walk out of the clinic with a complete smile.",
    timeline: "Day of surgery"
  },
  {
    number: "05",
    title: "Final Aesthetic Zirconia Delivery",
    russianTitle: "Final Aesthetic Zirconia Delivery",
    description: "After complete bone osseointegration, permanent high-strength biocompatible zirconia teeth with natural translucency are fitted.",
    timeline: "3–6 months later"
  }
];

export const clinicFaqs = [
  {
    q: "Is dental implant surgery painful?",
    a: "No. With computerized local anesthesia and modern minimally invasive protocols, patients feel zero pain during the procedure. Post-operative discomfort is comparable to a mild extraction and is easily managed with standard analgesics for 1–2 days."
  },
  {
    q: "How does All-on-4 differ from conventional dentures?",
    a: "Conventional dentures rest loosely on gums, often cause bone resorption, slip when talking or eating, and cover the palate (reducing taste). All-on-4 is permanently screwed onto 4 titanium implants, leaves your palate completely free, and restores 95% of natural bite force."
  },
  {
    q: "Can implants be placed if I have bone loss or atrophy?",
    a: "Yes. The All-on-4 protocol was specifically engineered to tilt the back implants up to 45°, anchoring into dense frontal bone and bypassing the sinuses, avoiding bone grafting in over 90% of cases."
  },
  {
    q: "How long do Straumann implants last?",
    a: "Straumann implants boast a clinical success rate of over 99.2% across 30+ year clinical trials. With proper oral hygiene and annual checkups, they are designed to last a lifetime, supported by a global manufacturer warranty."
  }
];
