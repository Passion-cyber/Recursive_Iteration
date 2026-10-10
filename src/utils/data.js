import userImage2 from "../assets/thepreptime.webp";
import userImage1 from "../assets/enugustatetechhubimageII.webp";
import userImage3 from "../assets/abiastateuniversityjournal.webp";
import userImage4 from "../assets/kalmlyhealth.webp";
import userImage5 from "../assets/igodowebsiteII.webp";
import userImage6 from "../assets/mekaria_portal.webp";
import userImage7 from "../assets/jelapetrafarmsltd.webp";
import userImage8 from "../assets/nailsbydera.webp";

export const SKILLS = [
  {
    cat: "Frontend",
    items: [
      { n: "React", w: "96%" },
      { n: "TypeScript", w: "94%" },
      { n: "Next.js", w: "82%" },
      { n: "JavaScript (ES6+)", w: "95%" },
    ],
  },
  {
    cat: "Backend",
    items: [
      { n: "Node.js", w: "84%" },
      { n: "Express", w: "84%" },
      { n: "REST API Design", w: "86%" },
      { n: "Auth & Security (JWT)", w: "80%" },
    ],
  },
  {
    cat: "Data & State",
    items: [
      { n: "PostgreSQL", w: "80%" },
      { n: "MongoDB", w: "78%" },
      { n: "Redux Toolkit", w: "90%" },
      { n: "WebSockets", w: "78%" },
    ],
  },
  {
    cat: "DevOps & Quality",
    items: [
      { n: "Version Control (Git / GitHub)", w: "96%" },
      { n: "CI/CD (GitHub Actions)", w: "85%" },
      { n: "Testing (Jest/RTL)", w: "86%" },
      { n: "Performance Optimization", w: "93%" },
    ],
  },
];

export const PROJECTS = [
  {
    id: "01",
    projectImage: userImage7,
    name: "Jelapetra Farms",
    desc: "A full-stack e-commerce platform for Jelapetra Farms, Nigeria's first at-scale plantain biscuit brand. Customers can browse and shop gluten-friendly, diabetic-friendly snacks and plantain flour, create accounts, and place orders, while the business manages its product catalogue, services, and impact stories from one centralized platform.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    preview: "#0a1a14",
    accentCol: "rgba(16,185,129,0.12)",
    github: "#",
    live: "https://www.jelapetrafarmsltd.com/",
  },
  {
    id: "02",
    projectImage: userImage8,
    name: "Nails by Dera",
    desc: "A full-stack booking platform for a luxury nail studio in Makurdi. Clients can explore an interactive 3D shade picker, browse services and the gallery, and book an appointment in under a minute, with user accounts and a backend that manages bookings, services, and availability for the studio.",
    tags: ["React", "Three.js", "Node.js", "Express", "MongoDB"],
    preview: "#140a14",
    accentCol: "rgba(236,72,153,0.12)",
    github: "#",
    live: "https://nailsbydera.vercel.app/",
  },
  {
    id: "03",
    projectImage: userImage1,
    name: "E-Governance Platform",
    desc: "A fully responsive collection of the Enugu State government's Ministries, Departments and Agencies (MDA's). This project aimed to provide the public with convenient and efficient access to a wide range of government services offered by these MDA's of the Enugu State government.",
    tags: ["React", "TypeScript", "Node.js", "WebSockets", "Redux Tolkit"],
    color: "from-blue-900/40 to-slate-900/60",
    preview: "#0a1628",
    accentCol: "rgba(13,138,255,0.15)",
    github: "https://enugustate.gov.ng/",
    live: "https://enugustate.gov.ng/",
    // stats: { stars: "2.4k", forks: "310" },
  },
  {
    id: "04",
    name: "Mekaria Portal",
    projectImage: userImage6,
    desc: "A comprehensive student information and administration system designed for a higher institution to digitize and streamline key academic operations. The platform provides prospective and current students with access to admission processing, school fee payments, course registration, programme information, and other essential academic services.",
    tags: ["React", "Canvas API", "Yjs/CRDT", "Node.js", "C#"],
    preview: "#081520",
    accentCol: "rgba(13,138,255,0.08)",
    github: "https://mekaria.edu.ng/",
    live: "https://mekaria.edu.ng/",
    // stats: { stars: "3.2k", forks: "445" },
  },
  {
    id: "05",
    projectImage: userImage2,
    name: "The PrepTime",
    desc: "An Al-powered educational application designed to assist students in their exam preparation and effective study. The application provides personalized learning experiences by tailoring Al algorithms to individual curriculums based on age and academic level. Integrated features for adaptive study materials, interactive practice, and performance tracking to enhance learning outcomes.",
    tags: ["React", "Storybook", "Radix UI", "TypeScript", "WCAG 2.2"],
    preview: "#0c1a2e",
    accentCol: "rgba(13,138,255,0.12)",
    github: "https://staging.thepreptime.com/",
    live: "https://staging.thepreptime.com/",
    // stats: { stars: "5.1k", forks: "870" },
  },
  {
    id: "06",
    projectImage: userImage5,
    name: "Igodo Cars",
    desc: "A modern car care platform that provides customers with access to premium automotive cleaning and maintenance services, including basic car wash, full detailing, deep interior cleaning, and leather treatment. The application is designed to deliver a seamless and intuitive booking experience, allowing users to explore service packages, schedule appointments, and maintain their vehicles in one centralized platform",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit"],
    preview: "#0d1e30",
    accentCol: "rgba(13,138,255,0.1)",
    github: "https://project-igodo.vercel.app/",
    live: "https://project-igodo.vercel.app/",
    // stats: { stars: "1.8k", forks: "224" },
  },

  {
    id: "07",
    projectImage: userImage3,
    name: "Absu Journal",
    desc: "A digital library platform that provides users with access to a curated collection of books, journals, newspapers, and magazines. The application is designed to offer a simple and intuitive browsing experience, allowing users to explore different categories of reading materials in one centralized place",
    tags: ["Next.js", "PostgreSQL", "Stripe", "Redis", "Vercel Edge"],
    preview: "#0d1e30",
    accentCol: "rgba(13,138,255,0.1)",
    github: "https://journal.abiastatepolytechnic.edu.ng/",
    live: "https://journal.abiastatepolytechnic.edu.ng/",
    // stats: { stars: "1.8k", forks: "224" },
  },
  {
    id: "08",
    name: "Kalmy Health",
    projectImage: userImage4,
    desc: "A mental healthcare web application that connects users with experts for emotional and psychological support. Users can schedule sessions and discuss their mental well-being in a safe and supportive environment. The platform is designed to make access to mental health care more accessible, private, and convenient through a simple and user-friendly interface.",
    tags: ["React", "Canvas API", "Yjs/CRDT", "Node.js", "WebRTC"],
    preview: "#081520",
    accentCol: "rgba(13,138,255,0.08)",
    github: "https://kalmly.vercel.app/",
    live: "https://kalmly.vercel.app/",
    // stats: { stars: "3.2k", forks: "445" },
  },
];

export const EXPERIENCE = [
  {
    company: "Lloydant Business Services",
    role: "Senior Frontend Engineer · Full-time",
    date: "Apr 2025 — Present",
    desc: "Architect and deliver end-to-end React and TypeScript features for a data-heavy fintech dashboard serving 8,000+ monthly active business users with sub-2s page load across all major breakpoints. Established a design system of 40+ reusable components with full Storybook documentation, cutting UI implementation time by 30% and eliminating 12 recurring design-inconsistency bugs. Introduced GitHub Actions CI/CD pipelines for automated linting, testing, and Vercel deployment, reducing manual release time from 3 hours to under 15 minutes per sprint.",
    tags: [
      "React",
      "Agile Methodologies",
      "Redux/Redux Toolkit",
      "Design Systems",
      "Web Vitals",
    ],
  },
  {
    company: "Aono Labs",
    role: "Frontend Developer · Full-time",
    date: "Jul 2023 — March 2025",
    desc: "Spearheaded frontend development of a Next.js B2B marketplace from zero to production, improving page-load performance by 35% through code splitting, image optimisation, and SSR tuning, resulting in a 25% uplift in user engagement within 90 days of launch. Designed a scalable component architecture using Redux Toolkit and Context API, reducing code duplication by 25% and enabling junior developers to ship new features with minimal guidance. Defined the platform-wide frontend technical roadmap and established UI/UX standards adopted across all product verticals, improving cross-team development consistency and velocity.",
    tags: [
      "React",
      "NextJs",
      "Software Testing",
      "WCAG",
      "Responsive Web Design",
      "CI/CD",
    ],
  },
  {
    company: "Enugu State Digital Tech Hub ",
    role: "Junior Frontend Developer · Contract",
    date: "Sep 2022 — Jun 2023",
    desc: "Delivered responsive web applications for enterprise clients at Enugu State Tech Hub. Collaborated with a cross-functional team of 8 to build full-stack e-governance applications using React, Node.js, Express, and PostgreSQL, reducing manual processing time for government staffs by 30%. Delivered the citizen-facing portal for enugustate.gov.ng, providing public access to 20+ MDA services with fully responsive, WCAG-compliant interfaces. Wrote comprehensive unit and integration tests using Jest and React Testing Library for public-facing financial workflows, reducing production bug rate by 45% over 4 months",
    tags: [
      "JavaScript",
      "React",
      "SCSS",
      "TypeScript",
      "Cross Browser Compatibility",
      "Version Cntrol",
    ],
  },
];

export const PROJ_GRADIENTS = [
  "linear-gradient(135deg,rgba(16,185,129,0.18),rgba(10,22,40,0.9))",
  "linear-gradient(135deg,rgba(236,72,153,0.18),rgba(10,22,40,0.9))",
  "linear-gradient(135deg,rgba(13,138,255,0.22),rgba(10,22,40,0.9))",
  "linear-gradient(135deg,rgba(99,102,241,0.2),rgba(10,22,40,0.9))",
  "linear-gradient(135deg,rgba(16,185,129,0.18),rgba(10,22,40,0.9))",
  "linear-gradient(135deg,rgba(245,158,11,0.18),rgba(10,22,40,0.9))",
  "linear-gradient(135deg,rgba(99,102,241,0.2),rgba(10,22,40,0.9))",
  "linear-gradient(135deg,rgba(16,185,129,0.18),rgba(10,22,40,0.9))",
];

export const STEPS = [
  { label: "Discovery & Tech Audit", done: true },
  { label: "Architecture & UI Design", done: true },
  { label: "React / Next.js Build", done: true },
  { label: "Performance Tuning", done: false, active: true },
  { label: "Launch & Optimisation", done: false },
];

export const STATS = [
  { val: "98", label: "Avg. Perf. Score" },
  { val: "3×", label: "Avg. Conversion Lift" },
  { val: "20+", label: "Happy Clients" },
];
