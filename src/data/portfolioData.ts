/**
 * SINGLE SOURCE OF TRUTH for all personal content.
 * Edit this file to update the portfolio — components read from here.
 *
 * ⚠ LINKS: Every link below is intentionally `null` unless it really exists.
 * Set a value (e.g. github: "https://github.com/yourname") and the matching
 * button appears automatically. Leave it `null` and the button stays hidden.
 *
 * ⚠ FILES: place real files in `public/` at the paths listed and then flip the
 * corresponding `available: true` flag.
 */

import resumeAsset from "@/assets/Bharath_Resume.pdf.asset.json";
import farmingRobotImg from "@/assets/project-farming-robot.jpg";
import rfidEngineImg from "@/assets/project-rfid-engine.jpg";
import babyMonitorImg from "@/assets/project-baby-monitor.jpg";

/** Shared Google Drive folder holding project documents. */
const DRIVE_PROJECTS_LINK =
  "https://drive.google.com/drive/project/1gmYEGtSVuLNRaWV2apQJHsaV9ucMZMg_?usp=sharing";

export const profile = {
  name: "M. BHARATH",
  initial: "B",
  role: "ECE ENGINEER",
  techLine: "AI • IoT • EMBEDDED SYSTEMS",
  greeting: "HELLO, I'M",
  summary:
    "Electronics and Communication Engineering student at R.M.K Engineering College with a focus on AI, IoT and Embedded Systems. Built a Retrieval-Augmented Generation Q&A system as an AI Intern at Tata Consultancy Services, and worked on embedded system design and testing at Blue Star. Hands-on with IoT robotics, RFID-based embedded security and Raspberry Pi monitoring projects.",
  phone: "+91-9398191840",
  phoneHref: "tel:+919398191840",
  email: "mallarapubharathnaidu@gmail.com",
  emailHref: "mailto:mallarapubharathnaidu@gmail.com",
  linkedin: "https://www.linkedin.com/in/bharath-mallarapu" as string | null,
  github: "https://github.com/Mallarapu-Bharath" as string | null,
};

/** Resume PDF (uploaded, served from CDN). */
export const resume = {
  path: resumeAsset.url,
  available: true,
};


export const about = {
  heading: "ABOUT ME",
  paragraphs: [
    "I'm M. Bharath, an Electronics and Communication Engineering student at R.M.K Engineering College (2022–2026), interested in Artificial Intelligence, IoT and Embedded Systems.",
    "My internship experience spans Generative AI at Tata Consultancy Services — where I built a multi-document RAG Q&A system — and embedded system design and testing at Blue Star, Sri City. My academic projects combine microcontrollers, sensor networks and wireless telemetry into working hardware.",
  ],
  highlights: [
    { title: "AI / GenAI", detail: "RAG systems, LLM orchestration, confidence scoring" },
    { title: "IoT", detail: "Sensor arrays, wireless telemetry, remote monitoring" },
    { title: "Embedded Systems", detail: "Embedded design, testing, microcontrollers" },
    { title: "Electronics", detail: "Digital electronics fundamentals" },
    { title: "Robotics", detail: "Autonomous multi-operation farming robot" },
  ],
};

export const skills = [
  { group: "Programming", items: ["Python", "SQL"] },
  { group: "Tools", items: ["MATLAB", "VS Code"] },
  {
    group: "Technologies",
    items: ["Embedded Systems", "IoT", "Python Full Stack", "RAG Framework"],
  },
  { group: "Soft Skills", items: ["Leadership", "Problem Solving", "Communication", "Teamwork"] },
];

export const experience = [
  {
    company: "TATA CONSULTANCY SERVICES",
    role: "AI Intern — GenAI",
    points: [
      "Built a multi-document AI-powered Q&A system using Retrieval-Augmented Generation (RAG).",
      "Used hybrid semantic and keyword search over ChromaDB.",
      "Implemented confidence scoring.",
      "Implemented multi-PLM orchestration.",
      "Used log-probability analysis.",
      "Grounded answers in source documents.",
      "Worked to reduce hallucinations.",
    ],
    tags: ["RAG", "ChromaDB", "Hybrid Search", "GenAI", "LLM Orchestration"],
  },
  {
    company: "BLUE STAR — SRI CITY, TADA",
    role: "Embedded System Intern",
    points: [
      "AC system operations.",
      "Embedded System Design.",
      "Testing.",
      "Store management processes.",
    ],
    tags: ["Embedded Systems", "Testing"],
  },
];

export type ProjectDoc = {
  label: string;
  /** Public path, e.g. "/projects/farming-robot/report.pdf" */
  path: string;
  /** Flip to true only once the real file exists in /public. */
  available: boolean;
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  summary: string;
  tags: string[];
  overview: string;
  problem: string | null;
  solution: string | null;
  contribution: string | null;
  features: string[];
  architecture: string | null;
  /** Real screenshots only — leave empty to show the placeholder area. */
  images: { src: string; alt: string }[];
  docs: ProjectDoc[];
  github: string | null;
  liveDemo: string | null;
};

export const projects: Project[] = [
  {
    slug: "farming-robot",
    number: "01",
    title: "Smart Agriculture Using IoT-Based Multi-Operation Farming Robot",
    summary:
      "An autonomous agricultural robot performing seeding, ploughing and targeted pesticide spraying, with sensor arrays and wireless telemetry.",
    tags: ["IoT", "Microcontroller", "Robotics", "Sensors"],
    overview:
      "An IoT-based multi-operation farming robot that automates core field operations and reports back to the operator over a wireless link.",
    problem: null,
    solution: null,
    contribution: null,
    features: [
      "Autonomous agricultural robot",
      "Automated seeding",
      "Ploughing",
      "Targeted pesticide spraying",
      "Sensor arrays",
      "Wireless telemetry",
      "Real-time navigation mapping",
      "Remote operations tracking",
    ],
    architecture: null,
    images: [
      { src: farmingRobotImg, alt: "Autonomous IoT farming robot spraying crops in a field at night" },
    ],
    docs: [
      { label: "Project Files (Drive)", path: DRIVE_PROJECTS_LINK, available: true },
    ],
    github: "https://github.com/Mallarapu-Bharath",
    liveDemo: null,
  },
  {
    slug: "rfid-engine",
    number: "02",
    title: "Engine Locking System using RFID Authentication",
    summary:
      "An embedded vehicle security system that locks the engine until an authorised RFID credential is presented.",
    tags: ["Embedded Systems", "RFID", "Security"],
    overview:
      "An embedded engine locking system that uses RFID authentication to allow only authorised access to the vehicle engine.",
    problem: null,
    solution: null,
    contribution: null,
    features: [
      "RFID authentication",
      "Engine locking",
      "Authorized access",
      "Prevention of unauthorized access",
    ],
    architecture: null,
    images: [
      { src: rfidEngineImg, alt: "RFID card being tapped on a reader module wired near a car ignition" },
    ],
    docs: [{ label: "Project Files (Drive)", path: DRIVE_PROJECTS_LINK, available: true }],
    github: "https://github.com/Mallarapu-Bharath",
    liveDemo: null,
  },
  {
    slug: "baby-monitor",
    number: "03",
    title: "Smart Baby Monitoring System using Raspberry Pi",
    summary:
      "A Raspberry Pi based monitoring system streaming a live video feed with remote alerts for baby surveillance.",
    tags: ["Raspberry Pi", "IoT", "Sensors", "Monitoring"],
    overview:
      "A Raspberry Pi based smart baby monitoring system providing real-time video monitoring and remote alerts.",
    problem: null,
    solution: null,
    contribution: null,
    features: ["Real-time video monitoring", "Baby surveillance", "Live feed", "Remote alerts"],
    architecture: null,
    images: [
      { src: babyMonitorImg, alt: "Raspberry Pi camera beside a crib with a live baby video feed on a tablet" },
    ],
    docs: [{ label: "Project Files (Drive)", path: DRIVE_PROJECTS_LINK, available: true }],
    github: "https://github.com/Mallarapu-Bharath",
    liveDemo: null,
  },

];

export const education = [
  {
    institution: "R.M.K Engineering College",
    qualification: "B.E Electronics and Communication Engineering",
    period: "2022–2026",
  },
  {
    institution: "Sri Chaitanya Higher Secondary School",
    qualification: "Higher Secondary Education",
    period: "2020–2022",
  },
  {
    institution: "Bhashyam Secondary School",
    qualification: "Secondary Education",
    period: "2019–2020",
  },
];

export type Certification = {
  title: string;
  issuer: string;
  /** Real certificate URL or public file path — null hides the button. */
  url: string | null;
};

export const certifications: Certification[] = [
  { title: "Python for Data Science", issuer: "NPTEL", url: null },
  { title: "Industry 4.0 & IIoT", issuer: "NPTEL", url: null },
  { title: "Artificial Intelligence & Data Science", issuer: "Infosys Springboard", url: null },
  { title: "Oracle Cloud AI Foundations Associate", issuer: "Oracle", url: null },
  { title: "Introduction to Excel", issuer: "Coursera", url: null },
];

export const achievements = [
  { title: "IETE Zonal paper presentation competition", detail: null as string | null },
  { title: "Trip score in Ramanujan Mathematician Test", detail: null as string | null },
  {
    title: "Selected among Top 5 teams — SSH Internal Hackathon",
    detail: "R.M.K Engineering College",
  },
];

export const languages = [
  { name: "English", level: "Fluent", steps: 3 },
  { name: "Telugu", level: "Fluent", steps: 3 },
  { name: "Tamil", level: "Intermediate", steps: 2 },
  { name: "Hindi", level: "Basic", steps: 1 },
];

export const navLinks = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "PROJECTS", href: "#projects" },
  { label: "EDUCATION", href: "#education" },
  { label: "CERTIFICATIONS", href: "#certifications" },
  { label: "ACHIEVEMENTS", href: "#achievements" },
  { label: "CONTACT", href: "#contact" },
];
