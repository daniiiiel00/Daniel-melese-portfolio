import {
  Project,
  Experience,
  SkillCategory,
  Certification,
  Education,
} from "../types";

export const personalInfo = {
  name: "Daniel Melese",
  title: "Full Stack Developer & Startup Founder",
  subtitle: "React.js, Next.js, TypeScript, Laravel, Three.js & DevOps",
  location: "Addis Ababa, Ethiopia",
  email: "danielmelese240@gmail.com",
  phone: "+251 939 846 753",
  telegram: "https://t.me/Andro_medaaaaa",
  github: "https://github.com/daniiiiel00",
  linkedin: "https://linkedin.com/in/daniel-melese-897a4b339",
  resumeUrl: "./assets/Daniel_Melese_Resume.pdf",
  summary: `Full stack web developer with 3+ years of experience building and shipping production web applications. I work daily with React.js, Next.js, TypeScript, Laravel and Node.js, and I'm comfortable owning a project end to end: database design, REST API development, frontend UI, CI/CD pipelines and server configuration. Delivered 50+ projects for clients in the USA and Ethiopia, including marketplaces, e-learning platforms and directory websites, and I run my own e-commerce startup. National Skill Competition winner in Web Development.`,
  stats: [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Delivered", value: "50+" },
    { label: "Startup Founded", value: "1" },
    { label: "National Awards", value: "2" },
  ],
};

export const experiences: Experience[] = [
  {
    id: "cdiwork",
    company: "CDIWork",
    location: "USA-based Software Company (Full Time, Remote)",
    role: "Frontend Developer",
    period: "Dec 2025 – Present",
    type: "Full Time",
    description: [
      "Deliver frontend architecture and features across 50+ projects using React.js, Next.js, TypeScript, and modern ecosystems.",
      "Built and maintained high-traffic production platforms: SeeNBuy (classifieds marketplace), Addis Chapter (e-learning for grades 1–12), and Ethiopedia (travel/hotel directory).",
      "Architected Addis Chapter web app and admin dashboard: multi-role access for students, parents, and instructors, authentication, protected routes, and payment flows.",
      "Closely integrated REST APIs with Laravel backend developers and configured automated CI/CD deployment workflows.",
      "Collaborate continuously with US-based engineering teams following agile code reviews, PRs, and QA cycles.",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Laravel REST API",
      "CI/CD",
      "GitHub Actions",
    ],
  },
  // {
  //   id: "afriwork",
  //   company: "Afriwork",
  //   location: "Addis Ababa (Full Time, Onsite)",
  //   role: "Frontend Developer",
  //   period: "Feb 2026 – Present",
  //   type: "Full Time",
  //   description: [
  //     "Hired through Afriwork to build and scale user interfaces with React.js, modern JavaScript, and CSS.",
  //     "Translate design systems and Figma prototypes into responsive, accessible, pixel-perfect web experiences across mobile, tablet, and desktop devices.",
  //   ],
  //   technologies: [
  //     "React.js",
  //     "TypeScript",
  //     "Responsive Design",
  //     "CSS3",
  //     "Web Accessibility",
  //   ],
  // },
  {
    id: "ihope",
    company: "iHope Solutions",
    location: "Software Development Company (Full Time, Onsite)",
    role: "Full Stack Developer",
    period: "Dec 2025 – Present",
    type: "Full Time",
    description: [
      "Engineered full stack applications with Laravel and Filament admin panels, Node.js services, and Next.js / React / TypeScript frontends.",
      "Handled complete DevOps lifecycle: CI/CD pipelines, Nginx/Linux server configuration, and continuous deployment.",
      "Designed relational database schemas, modeled high-performance REST APIs, and optimized frontend performance with code-splitting and asset caching.",
    ],
    technologies: [
      "Laravel",
      "Filament",
      "Node.js",
      "Next.js",
      "React.js",
      "PostgreSQL",
      "Docker",
      "Linux",
    ],
  },
  {
    id: "ahadu-gebeya",
    company: "Ahadu Gebeya (E-commerce Startup)",
    location: "Addis Ababa, Ethiopia",
    role: "Founder & Senior Developer",
    period: "Feb 2023 – Present",
    type: "Founder",
    description: [
      "Founded and spearheaded an active e-commerce startup, directing product vision, system architecture, and operations.",
      "Built the entire digital platform: product catalog, real-time inventory, shopping cart, customer checkout, order management, and secure payment integrations.",
      "Manage production cloud infrastructure, Linux servers, version control, and database maintenance.",
    ],
    technologies: [
      "React.js",
      "PHP",
      "Laravel",
      "MySQL",
      "Payment Gateways",
      "Linux",
      "DevOps",
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    description:
      "Modern, reactive, and responsive interfaces with 3D & animation capabilities",
    skills: [
      { name: "React.js", level: "Expert" },
      { name: "Next.js", level: "Senior" },
      { name: "TypeScript", level: "Expert" },
      { name: "JavaScript (ES6+)", level: "Expert" },
      { name: "Three.js / 3D Web", level: "Senior" },
      { name: "Tailwind CSS", level: "Expert" },
      { name: "HTML5 & CSS3", level: "Expert" },
      { name: "Framer Motion", level: "Senior" },
      { name: "Redux & State Mgmt", level: "Senior" },
      { name: "Vite", level: "Expert" },
    ],
  },
  {
    title: "Backend & APIs",
    description:
      "Robust server architecture, microservices, and database modeling",
    skills: [
      { name: "Laravel", level: "Senior" },
      { name: "PHP", level: "Expert" },
      { name: "Node.js & Express", level: "Intermediate" },
      { name: "Filament Admin", level: "Senior" },
      { name: "RESTful API Architecture", level: "Expert" },
      { name: "JWT & OAuth Authentication", level: "Expert" },
    ],
  },
  {
    title: "Databases & Storage",
    description: "Scalable data structures, relational integrity, and caching",
    skills: [
      { name: "SQL & Database Design", level: "Expert" },
      { name: "MySQL & MariaDB", level: "Expert" },
      { name: "PostgreSQL", level: "Senior" },
      { name: "Supabase", level: "Senior" },
      { name: "Firebase", level: "Intermediate" },
      { name: "Prisma ORM", level: "Intermediate" },
    ],
  },
  {
    title: "DevOps, Cloud & Tooling",
    description: "Automation, containerization, and infrastructure management",
    skills: [
      { name: "CI/CD Pipelines (GitHub Actions)", level: "Senior" },
      { name: "Git & GitHub Workflow", level: "Expert" },
      { name: "Linux Server Administration", level: "Senior" },
      { name: "Docker", level: "Intermediate" },
      { name: "Nginx & Apache", level: "Senior" },
      { name: "Vercel, Netlify & Cloudflare", level: "Expert" },
    ],
  },
];

export const projects: Project[] = [
  {
    id: "seetobuy",
    title: "See To Buy",
    description:
      "High-scale classifieds marketplace for vehicle, car, and real-estate listings in Ethiopia with search filters, real-time messaging, and multi-category indexing.",
    tags: ["React", "TypeScript", "REST API", "Tailwind CSS"],
    image: "./assets/images/projects/seetobuy.png",
    liveUrl: "https://seetobuy.com",
    featured: true,
  },
  {
    id: "addis-chapter",
    title: "Addis Chapter",
    description:
      "Comprehensive digital learning management platform for grades 1–12 featuring customized portals for students, parents, and instructors with quiz & payment flows.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    image: "./assets/images/projects/adisschapter.png",
    liveUrl: "https://addischapter.com",
    featured: true,
  },
  {
    id: "ethiopedia",
    title: "Ethiopedia",
    description:
      "Hotel, lodge, and cultural travel directory website inspired by TripAdvisor, featuring verified business listings, geo-location search, ratings, and user reviews.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    image: "./assets/images/projects/ethiopidia.png",
    liveUrl: "https://ethiopedia.com",
    featured: true,
  },
  {
    id: "ahadu-gebeya",
    title: "Ahadu Gebeya",
    description:
      "Complete online retail store and merchant ERP engine featuring product catalogs, live inventory tracking, dynamic shopping cart, and automated order fulfillment.",
    tags: ["JavaScript", "PHP", "Laravel", "SQL", "Payment Gateway"],
    image: "./assets/images/projects/ahadugebeya.png",
    liveUrl: "https://ahadugebeya1.unaux.com",
    featured: true,
  },
  {
    id: "ethiopian-coffee-foundation",
    title: "Ethiopian Coffee Foundation",
    description:
      "Non-profit foundation platform promoting Ethiopian coffee origin traceability, farmer empowerment programs, and international partnership initiatives.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Filament Admin", "Laravel"],
    image: "./assets/images/projects/ethiopiancoffeefoundation.png",
    liveUrl: "https://ethiopiancoffeefoundation.org",
    featured: true,
  },
  {
    id: "chef-henok-portfolio",
    title: "Chef Henok Portfolio",
    description:
      "High-end culinary showcase website for renowned private chef Henok, featuring bespoke fine-dining menus, press features, and catering reservation bookings.",
    tags: ["React", "TypeScript", "Framer Motion", "Filament Admin", "Laravel"],
    image: "./assets/images/projects/chefhenokportfolio.png",
    liveUrl: "http://chefhenok.com/",
    featured: false,
  },
  {
    id: "flower-company",
    title: "Flower Company",
    description:
      "B2B horticulture and fresh-cut flower export showcase platform featuring product varieties, cold-chain distribution info, and international procurement orders.",
    tags: ["React", "JavaScript", "Tailwind CSS", "Responsive Design"],
    image: "./assets/images/projects/floowercompmany .png",
    liveUrl: "https://tinaw.ihopesolutions.com/",
    featured: false,
  },
  {
    id: "college-management-system",
    title: "College Management System",
    description:
      "Institutional academic portal managing student admissions, course registrations, department grading records, and role-based faculty access.",
    tags: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    image: "./assets/images/projects/collegemanagemntsystem.jpg",
    liveUrl: "https://github.com/daniiiiel00",
    featured: false,
  },
  {
    id: "chat-app",
    title: "Chat App",
    description:
      "High-speed real-time messaging application with instant channel streaming, presence detection, emoji reactions, and WebSocket connectivity.",
    tags: ["React", "Node.js", "WebSockets", "CSS3", "Socket.io"],
    image: "./assets/images/projects/chatapp.jpg",
    liveUrl: "https://github.com/daniiiiel00",
    featured: false,
  },
  {
    id: "weather-app",
    title: "Weather App",
    description:
      "Interactive meteorological forecast application connecting to live weather APIs with animated condition maps, radar alerts, and location search.",
    tags: ["JavaScript", "API Integration", "CSS3", "HTML5"],
    image: "./assets/images/projects/wetherapp.jpg",
    liveUrl: "https://github.com/daniiiiel00",
    featured: false,
  },
];

export const certifications: Certification[] = [
  {
    id: "cert-1",
    title: "Winner, National Skill Competition in Web Development",
    issuer:
      "Ministry of Labor and Skills, Federal Democratic Republic of Ethiopia",
    date: "July 2025",
    highlight: "1st Place National Champion",
    certificateImage:
      "./assets/images/certficates/Winner, National Skill Competition in Web Development.png",
  },
  {
    id: "cert-2",
    title: "Gold Medalist, ICT Innovators Competition",
    issuer: "Addis Ababa Education Bureau",
    date: "June 2022",
    highlight: "Gold Medalist",
    certificateImage:
      "./assets/images/certficates/Gold Medalist, ICT Innovators Competition.png",
  },
  {
    id: "cert-3",
    title: "Addis Ababa Education Bureau 1st Place Award, ICT Competition",
    issuer: "Addis Ababa Education Bureau",
    date: "Accredited Honors",
    highlight: "1st Place Award",
    certificateImage:
      "./assets/images/certficates/Addis abeba education beru 1st place award ict compitition .png",
  },
  {
    id: "cert-4",
    title: "High School Innovation Honor Award (School Net System)",
    issuer: "High School Administration & ICT Department",
    date: "Innovation Honors",
    highlight: "System Innovation Award",
    certificateImage:
      "./assets/images/certficates/in HIgh school for fixing scholl net system inovattion honor award .png",
  },
  {
    id: "cert-5",
    title: "Artificial Intelligence Fundamentals Nanodegree",
    issuer: "Udacity",
    date: "August 2025",
    highlight: "AI & Machine Learning",
  },
];

export const education: Education = {
  institution: "Misrak Polytechnic College, Addis Ababa",
  degree: "TVET Diploma in Web Development and Database Administration",
  period: "February 2023 – September 2025",
  location: "Addis Ababa, Ethiopia",
};
