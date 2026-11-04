import drJeswinImg from '../assets/speaker_dr_jeswin_joseph.png'
import drManojImg from '../assets/speaker_dr_manoj_kumar.png'
import drLaraImg from '../assets/speaker_dr_lara_dronjak.png'
import drLuYinImg from '../assets/speaker_dr_lu_yin.png'
import drNitinImg from '../assets/speaker_dr_nitin_muralidharan.png'
import heroGlobeImg from '../assets/img_p1_12_307_1639x1093.jpeg'
import crestEmblemImg from '../assets/sbce_crest_emblem.png'
import accreditationBadgesImg from '../assets/accreditation_badges.png'
import qrCodeImg from '../assets/registration_qr.png'

export const conferenceInfo = {
  title: "Smart and Green Materials for Sustainable Applications",
  series: "INTERNATIONAL CONFERENCE SERIES — III",
  acronym: "ICSGMSA 2026",
  mode: "Hybrid Mode",
  dates: "December 9–11, 2026",
  datesIsoStart: "2026-12-09T09:00:00+05:30",
  institution: "Sree Buddha College of Engineering, Pattoor, Alappuzha, Kerala (Autonomous)",
  department: "Department of Biotechnology and Biochemical Engineering",
  tagline: "An international platform for researchers, academicians, students, innovators, and industry professionals to exchange scientific knowledge and advance sustainable materials and technologies.",
  focalTheme: "Smart and Green Materials for Sustainable Applications",
  editionNote: "Building on the successful legacy of IC-SGMAT (Series I in 2023 & Series II in 2025)",
  registrationDeadline: "November 15, 2026",
  abstractDeadline: "November 5, 2026",
  acceptanceNotification: "November 10, 2026",
  
  links: {
    abstractSubmission: "https://forms.gle/CVarp7X9kpphr7Za7",
    registration: "https://forms.gle/CVarp7X9kpphr7Za7",
    institutionWebsite: "https://www.sbce.ac.in/",
    googleMapsDirections: "https://www.google.com/maps/search/?api=1&query=Sree+Buddha+College+of+Engineering+Pattoor+Alappuzha",
    abstractTemplateRef: "/documents/ICEMEST 2026 - Abstract Format.docx",
    brochurePdf: "/documents/ICSGMSA-2026-Brochure.pdf"
  },

  contact: {
    institution: "Sree Buddha College of Engineering",
    addressLine1: "Pattoor P.O., Padanilam, Nooranad",
    district: "Alappuzha District",
    state: "Kerala, India",
    pincode: "690529",
    fullAddress: "Sree Buddha College of Engineering, Pattoor P.O., Padanilam, Nooranad, Alappuzha District, Kerala, India – 690529",
    phoneDisplay: "+91 95440 16387",
    phoneTel: "+919544016387",
    emailClarification: "Official inquiries and registration coordination via the registered coordinator desk."
  },

  transit: {
    rail: [
      { station: "Kayamkulam Junction (KYJ)", distance: "Approx. 20 km" },
      { station: "Chengannur Railway Station (CNGR)", distance: "Approx. 22 km" },
      { station: "Adoor KSRTC Central Bus Station", distance: "Approx. 15 km" }
    ],
    air: [
      { airport: "Trivandrum International Airport (TRV)", distance: "Approx. 105 km" },
      { airport: "Cochin International Airport (COK)", distance: "Approx. 130 km" }
    ]
  },

  media: {
    heroVisual: heroGlobeImg,
    autonomousEmblem: crestEmblemImg,
    accreditationBadges: accreditationBadgesImg,
    qrCode: qrCodeImg
  }
}

export const highlights = [
  {
    id: 1,
    title: "Keynote Lectures",
    tag: "Global Perspectives",
    description: "In-depth keynote presentations delivered by renowned national and international materials scientists, biotechnologists, and environmental researchers."
  },
  {
    id: 2,
    title: "Oral & Poster Presentations",
    tag: "Scholarly Exchange",
    description: "Multidisciplinary technical sessions providing a global podium for scholars, engineers, and students to showcase novel experimental breakthroughs."
  },
  {
    id: 3,
    title: "Invited Expert Lectures",
    tag: "Domain Leadership",
    description: "Curated research talks by esteemed university faculties, principal scientists, and leading doctoral scholars addressing critical material challenges."
  },
  {
    id: 4,
    title: "Interdisciplinary Interaction",
    tag: "Cross-Pollination",
    description: "Constructive dialogue uniting academia, dedicated government research laboratories, and visionary industry enterprises on one collaborative stage."
  },
  {
    id: 5,
    title: "Networking & Collaborative Consortia",
    tag: "Partnerships",
    description: "Unprecedented opportunities to cultivate institutional research tie-ups, joint grant initiatives, co-authorships, and cross-border innovation."
  },
  {
    id: 6,
    title: "Best Paper Awards",
    tag: "Track Recognition",
    description: "Prestigious commendation recognizing outstanding scientific research, technical rigor, and impactful innovation in each conference track."
  },
  {
    id: 7,
    title: "Publication Opportunities",
    tag: "Peer-Reviewed Outlets",
    description: "Opportunities to publish peer-reviewed papers in ISBN-registered conference proceedings, Scopus-indexed partner journals, and the official abstract booklet."
  }
]

export const aboutContent = {
  conference: {
    title: "About ICSGMSA 2026",
    lead: "The third edition of the conference, ICSGMSA 2026, aims to bring together academicians, researchers, students, innovators, and industry professionals from diverse disciplines to exchange scientific knowledge, share industrial experiences, and disseminate recent research outcomes in the field of smart and sustainable materials and technologies.",
    paragraphs: [
      "ICSGMSA 2026 builds upon the successful legacy of the International Conference Series I and II on “Smart & Green Materials for Biotechnology, Biochemical and Mechanical Applications” (IC-SGMAT), organized in 2023 and 2025, respectively.",
      "The previous editions provided a valuable platform for academicians, researchers, and practicing engineers to exchange knowledge, share research findings, discuss emerging trends, and foster academic and professional collaborations and facilitated the publication of an ISBN-registered proceedings.",
      "Building on the success of these earlier conferences, ICSGMSA 2026 expands its scope to encompass smart and green materials for sustainable applications across multidisciplinary domains. The conference is envisioned as a vibrant platform for fostering interdisciplinary collaboration, encouraging innovation, promoting knowledge exchange, and exploring emerging technologies that contribute to sustainable scientific and technological development."
    ],
    features: [
      { label: "Edition", value: "3rd International Series" },
      { label: "Format", value: "Hybrid (In-person & Virtual)" },
      { label: "Legacy", value: "IC-SGMAT (2023, 2025)" },
      { label: "Proceedings", value: "ISBN Registered" }
    ],
    stats: [
      { number: "III", label: "Conference Series Edition" },
      { number: "6", label: "Multidisciplinary Tracks" },
      { number: "Hybrid", label: "Global Attendance Mode" },
      { number: "ISBN", label: "Official Registered Proceedings" }
    ]
  },
  institution: {
    title: "About Sree Buddha College of Engineering",
    locationBadge: "Pattoor, Alappuzha, Kerala (Autonomous)",
    body: "Sree Buddha College of Engineering, established in 2002 by the Sree Buddha Educational Society, a charitable organization promoted by the Sree Buddha Foundation, is an AICTE-approved institution affiliated to APJ Abdul Kalam Technological University. The institute offers UG and PG programmes in Biotechnology & Biochemical Engineering, Food Technology, Civil, Mechanical, Electrical and Electronics, Electronics and Communication, Computer Science and Engineering, Electronics and Computer Engineering, and Artificial Intelligence and Machine Learning. Besides receiving several honours, the college is also reaccredited by the National Assessment and Accreditation Council (NAAC) with 'A' grade, recognized under Section 2(f) of the UGC Act, and departments accredited with NBA.",
    highlights: [
      "Established in 2002 by Sree Buddha Educational Society",
      "Autonomous Institution affiliated to APJ Abdul Kalam Technological University",
      "AICTE Approved & NAAC 'A' Grade Re-accredited",
      "Recognized under Section 2(f) of the UGC Act & NBA Accredited Departments"
    ],
    stats: [
      { number: "2002", label: "Year Established" },
      { number: "NAAC A", label: "National Accreditation" },
      { number: "UGC 2(f)", label: "Autonomous Recognition" },
      { number: "NBA", label: "Accredited Programs" }
    ]
  },
  department: {
    title: "About the Department of BT & BCE",
    departmentName: "Department of Biotechnology & Biochemical Engineering",
    body: "The Department of BT & BCE started in 2002 and has established an unparalleled reputation in teaching and research. The department has been accredited by the National Board of Accreditation (NBA). We offer 4-year B.Tech (Biotechnology & Biochemical Engineering), 2-year M.Tech (BT & BCE), and PhD programs in Biotechnology and allied fields. The highly competent and experienced faculty members, with PhDs, have inspired excellence, innovation, and strong entrepreneurial skills. The department's key research & development areas focus on biosensors and nanobiotechnology, molecular diagnostics, genetic engineering, biochemical engineering, bioprocessing, and biofuel technology.",
    programs: [
      "B.Tech in Biotechnology & Biochemical Engineering (4 Years)",
      "M.Tech in Biotechnology & Biochemical Engineering (2 Years)",
      "Doctoral (Ph.D.) Research Programs in Biotechnology & Allied Fields"
    ],
    researchThrusts: [
      "Biosensors & Nanobiotechnology",
      "Molecular Diagnostics & Genetic Engineering",
      "Biochemical Engineering & Bioprocessing",
      "Biofuel Technology & Sustainable Biorenewables"
    ]
  }
}

export const conferenceTracks = [
  {
    number: "01",
    category: "materials",
    title: "Smart, Functional and Advanced Materials",
    description: "Stimuli-responsive polymeric systems, self-healing smart coatings, shape-memory matrices, biomimetic materials, and adaptive intelligent materials for advanced aerospace, biomedical, and industrial applications.",
    topics: ["Smart polymers & hydrogels", "Self-repairing materials", "Shape memory alloys", "Electroactive & magneto-responsive systems"]
  },
  {
    number: "02",
    category: "biobased",
    title: "Green, Sustainable and Bio-Based Materials",
    description: "Synthesis of bio-based plastics, bio-composites from renewable agricultural residues, circular lifecycle materials, non-toxic bio-resins, and low-footprint natural polymer synthesis.",
    topics: ["Biodegradable bioplastics", "Agricultural biomass valorization", "Bio-composites & cellulose fibers", "Life cycle assessment & green chemistry"]
  },
  {
    number: "03",
    category: "nano",
    title: "Nanomaterials, Nanotechnology and Biotechnology Applications",
    description: "Novel nanoscale architectures, functionalized nanocarriers for targeted drug delivery, ultra-sensitive biosensing interfaces, diagnostic platforms, and bio-nanomaterial formulations.",
    topics: ["Engineered nanoparticles", "Optical & electrochemical biosensors", "Diagnostic nanomaterials", "Nanobiocatalysis & enzyme immobilization"]
  },
  {
    number: "04",
    category: "engineering",
    title: "Sustainable Materials for Civil and Mechanical Engineering",
    description: "Geopolymer cementitious binders, supplementary cementitious materials, eco-efficient composites, recycled construction materials, structural health alloys, and low-carbon manufacturing.",
    topics: ["Low-carbon geopolymers", "Recycled aggregates & green concrete", "Corrosion-resistant sustainable alloys", "Eco-friendly mechanical fabrication"]
  },
  {
    number: "05",
    category: "environment",
    title: "Smart and Green Materials for Food Technology and Environmental Applications",
    description: "Bio-active barrier packaging, intelligent freshness indicators, advanced water purification sorbents, heavy metal remediation membranes, and soil-enriching biochar systems.",
    topics: ["Active & intelligent food packaging", "Adsorbents for water decontamination", "Membranes for wastewater treatment", "Soil conditioners & bio-fertilizers"]
  },
  {
    number: "06",
    category: "energy",
    title: "Energy Materials, Advanced Manufacturing and Emerging Technologies",
    description: "High-density electrode materials for sodium and lithium batteries, supercapacitor architectures, electrocatalysts for green hydrogen generation, photovoltaic perovskites, and additive 3D manufacturing.",
    topics: ["Battery electrodes & electrolytes", "Supercapacitors & fuel cells", "Electrocatalysis for green hydrogen", "Additive manufacturing of functional materials"]
  }
]

export const distinguishedSpeakers = [
  {
    id: "jeswin",
    name: "Dr. Jeswin Joseph",
    role: "Postdoctoral Researcher",
    lab: "Corbett Lab",
    institution: "Harvard T.H. Chan School of Public Health",
    location: "Boston, USA",
    flag: "🇺🇸",
    field: "Public Health & Nanomedicine",
    image: drJeswinImg
  },
  {
    id: "manoj",
    name: "Dr. Manoj Kumar",
    role: "Scientist D",
    lab: "Materials Science & Technology",
    institution: "CSIR–Institute of Minerals and Materials Technology (CSIR–IMMT)",
    location: "Bhubaneswar, India",
    flag: "🇮🇳",
    field: "Mineral Science & Advanced Materials",
    image: drManojImg
  },
  {
    id: "lara",
    name: "Dr. Lara Dronjak",
    role: "Researcher",
    lab: "Advanced Materials & Chemical Sciences",
    institution: "American University of Sharjah",
    location: "Sharjah, UAE",
    flag: "🇦🇪",
    field: "Functional Sustainable Materials",
    image: drLaraImg
  },
  {
    id: "luyin",
    name: "Dr. Lu Yin",
    role: "Post-Doctoral Fellow",
    lab: "Surface Science and Bio-nanomaterials Laboratory",
    institution: "University of Waterloo",
    location: "Waterloo, Canada",
    flag: "🇨🇦",
    field: "Surface Science & Bio-nanomaterials",
    image: drLuYinImg
  },
  {
    id: "nitin",
    name: "Dr. Nitin Muralidharan",
    role: "Assistant Professor",
    lab: "Department of Chemical Engineering",
    institution: "IIT Madras",
    location: "Chennai, India",
    flag: "🇮🇳",
    field: "Electrochemical Energy & Batteries",
    image: drNitinImg
  }
]

export const importantDates = [
  {
    id: 1,
    title: "Last Date for Abstract Submission",
    date: "November 5, 2026",
    isoDate: "2026-11-05",
    status: "Upcoming Deadline",
    isPrimary: true,
    step: "01",
    description: "Submit original abstracts of max 150 words via the official online submission form."
  },
  {
    id: 2,
    title: "Notification on Paper Acceptance",
    date: "November 10, 2026",
    isoDate: "2026-11-10",
    status: "Review Milestone",
    isPrimary: false,
    step: "02",
    description: "Peer-review outcomes and acceptance notifications sent to corresponding authors."
  },
  {
    id: 3,
    title: "Last Date for Registration",
    date: "November 15, 2026",
    isoDate: "2026-11-15",
    status: "Registration Closes",
    isPrimary: false,
    step: "03",
    description: "Final registration deadline for student, faculty, scholar, and industry delegates."
  },
  {
    id: 4,
    title: "Conference Dates (Hybrid Mode)",
    date: "December 9–11, 2026",
    isoDate: "2026-12-09",
    status: "Main Event",
    isPrimary: false,
    step: "04",
    description: "Three intensive days of keynote addresses, parallel oral sessions, and poster presentations."
  }
]

export const registrationPlans = [
  {
    id: "student-part",
    category: "Student Participation",
    inr: "₹500",
    usd: "$6",
    inrRaw: 500,
    usdRaw: 6,
    subtitle: "For undergraduate and postgraduate students attending sessions without paper presentation.",
    benefits: [
      "Access to all keynote and technical sessions",
      "Digital conference kit and session materials",
      "Official certificate of participation",
      "Interactive hybrid Q&A access"
    ]
  },
  {
    id: "student-pres",
    category: "Student Presentation",
    inr: "₹1,000",
    usd: "$12",
    inrRaw: 1000,
    usdRaw: 12,
    popular: true,
    subtitle: "For student primary authors presenting oral or poster research work.",
    benefits: [
      "Oral / Poster presentation slot in track",
      "Abstract publication in proceedings booklet",
      "Official presentation certificate",
      "Eligible for Best Paper Award in track",
      "Access to all conference sessions and keynotes"
    ]
  },
  {
    id: "faculty-scholar",
    category: "Faculty & Research Scholar",
    inr: "₹1,500",
    usd: "$18",
    inrRaw: 1500,
    usdRaw: 18,
    subtitle: "For university faculty members, post-docs, and doctoral research scholars.",
    benefits: [
      "Paper presentation in dedicated track",
      "Abstract included in ISBN registered proceedings",
      "Consideration for Scopus-indexed partner journals",
      "Certificate of paper presentation",
      "Networking forum with international delegates"
    ]
  },
  {
    id: "industrialist",
    category: "Industrialist & Corporate",
    inr: "₹2,000",
    usd: "$25",
    inrRaw: 2000,
    usdRaw: 25,
    subtitle: "For industry professionals, corporate R&D specialists, and technical entrepreneurs.",
    benefits: [
      "Full hybrid access to all conference tracks",
      "High-level networking with academic researchers",
      "Industry-academia collaboration forums",
      "Certificate of participation & proceedings access",
      "B2B innovation exchange opportunities"
    ]
  }
]

export const committeeData = {
  patrons: [
    {
      category: "Chief Patron",
      members: [
        { name: "Prof. K. Sasikumar", role: "Chairman, Sree Buddha Educational Society (SBES)" },
        { name: "Prof. V. Prasad", role: "Secretary, Sree Buddha Educational Society (SBES)" },
        { name: "Sri. A. Sunil Kumar", role: "Treasurer, Sree Buddha Educational Society (SBES)" }
      ]
    },
    {
      category: "Patron",
      members: [
        { name: "Dr. K. Krishnakumar", role: "Principal, Sree Buddha College of Engineering, Pattoor" },
        { name: "Dr. Saji Varghese", role: "Vice Principal, Sree Buddha College of Engineering, Pattoor" }
      ]
    }
  ],
  leadership: [
    { title: "Convenor", name: "Prof. Meera Bai S", role: "HoD, Department of Biotechnology & Biochemical Engineering" },
    { title: "Organising Secretary", name: "Dr. Shamnamol G K", role: "Associate Professor, Department of BT & BCE" },
    { title: "Joint Secretary", name: "Prof. Chinchu Elezebeth", role: "Assistant Professor, Department of BT & BCE" }
  ],
  organizingMembers: [
    { name: "Dr. Sibi Raj", role: "Assistant Professor, Dept. of BT & BCE" },
    { name: "Dr. Tamilmani J", role: "Assistant Professor, Dept. of BT & BCE" },
    { name: "Dr. Shilpalekshmi L", role: "Assistant Professor, Dept. of BT & BCE" },
    { name: "Dr. Archana Rajendran", role: "Assistant Professor, Dept. of BT & BCE" }
  ],
  internationalAdvisory: [
    { name: "Dr. Kumar Sudesh", affiliation: "Universiti Sains Malaysia, Malaysia", country: "Malaysia", flag: "🇲🇾" },
    { name: "Dr. Ashna Rajeev", affiliation: "University of Waterloo, Canada", country: "Canada", flag: "🇨🇦" },
    { name: "Dr. Surya Kannan", affiliation: "Qatar University, Qatar", country: "Qatar", flag: "🇶🇦" },
    { name: "Dr. Remya R", affiliation: "American University of Sharjah, UAE", country: "UAE", flag: "🇦🇪" },
    { name: "Mr. Vshunu S Kumar", affiliation: "Rus BioPharm, Russia", country: "Russia", flag: "🇷🇺" },
    { name: "Mr. Alen George", affiliation: "Novo Nordisk Engineering, Denmark", country: "Denmark", flag: "🇩🇰" }
  ],
  nationalAdvisory: [
    { name: "Dr. Sabu Thomas", affiliation: "Centre of Excellence in Microbiome, Thiruvananthapuram" },
    { name: "Dr. Sharon Mano Pappu", affiliation: "IIT, Varanasi" },
    { name: "Dr. V R Sinija", affiliation: "NIFTEM, Thanjavur" },
    { name: "Dr. Binod P", affiliation: "CSIR-NIIST, Thiruvananthapuram" },
    { name: "Dr. Biju Dharmapalan", affiliation: "National Institute of Advanced Studies–IISC, Bangalore" },
    { name: "Dr. Baiju G. Nair", affiliation: "NIT, Calicut" },
    { name: "Dr. Arjun Prasad", affiliation: "KSCSTE, Thiruvananthapuram" },
    { name: "Dr. Jaya Mary Jacob", affiliation: "KSCSTE, Thiruvananthapuram" },
    { name: "Mr. Eldhose P Kauma", affiliation: "Nitta Gelatin India Ltd, Ernakulam" },
    { name: "Dr. Vaishakh Nair", affiliation: "NIT, Surathkal" }
  ]
}

export const abstractGuidelines = {
  requirements: [
    { label: "Paper Title", rule: "Times New Roman, 16 pt, Bold, Title Case, Centered" },
    { label: "Author Names", rule: "Times New Roman, 12 pt, Bold, with superscripts for affiliations" },
    { label: "Affiliations", rule: "Times New Roman, 12 pt, Normal, department & institution details" },
    { label: "Corresponding Author", rule: "Designated with an asterisk (*), including working email address" },
    { label: "Abstract Body", rule: "Times New Roman, 12 pt, Regular, strictly maximum 150 words" },
    { label: "Keywords", rule: "Times New Roman, 12 pt, exactly 3 to 5 relevant keywords" }
  ],
  typesAccepted: [
    "Original empirical research papers",
    "Critical reviews and systematic meta-analyses",
    "Applied case studies and innovative industrial prototypes"
  ]
}
