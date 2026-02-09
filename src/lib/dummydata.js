import { BulbImg, DeveImg, DeveloperImg, EarthImg, ProfileImg, ProgrammerImg } from "./resources";

const navItems = [
  {
    name: "About",
  },
  {
    name: "Projects",
  },
  {
    name: "Testimonials",
  },
  {
    name: "Contact",
  },
];

const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    description: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: EarthImg.src,
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://your-live-site.com",
  },
  {
    id: 2,
    title: "3D Solar System Planets to Explore",
    description: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: EarthImg.src,
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://your-live-site.com",
  },
  {
    id: 3,
    title: "3D Solar System Planets to Explore",
    description: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: EarthImg.src,
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://your-live-site.com",
  },
  {
    id: 4,
    title: "3D Solar System Planets to Explore",
    description: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: EarthImg.src,
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://your-live-site.com",
  },
  {
    id: 5,
    title: "3D Solar System Planets to Explore",
    description: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: EarthImg.src,
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://your-live-site.com",
  },
  {
    id: 6,
    title: "3D Solar System Planets to Explore",
    description: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: EarthImg.src,
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://your-live-site.com",
  },
];

const reviews = [
  {
    id: 1,
    name: "John Doe",
    title: "CEO, Company A",
    quote: "Working with Azan was a fantastic experience. He delivered high-quality work on time and exceeded our expectations.",
    img: ProfileImg.src,
  },
  {
    id: 2,
    name: "John Doe",
    title: "CEO, Company A",
    quote: "Working with Azan was a fantastic experience. He delivered high-quality work on time and exceeded our expectations.",
    img: ProfileImg.src,
  },
  {
    id: 3,
    name: "John Doe",
    title: "CEO, Company A",
    quote: "Working with Azan was a fantastic experience. He delivered high-quality work on time and exceeded our expectations.",
    img: ProfileImg.src,
  },
];

export const column1 = [
  "HTML5",
  "CSS3",
  "JavaScript(ES6)",
  "ReactJS",
  "NextJS",
  "Redux Toolkit/Thunk",
  "Zustand",
  "React Query",
  "RTK Query",
  "Rest API Intrgration",
  "Tawilwind CSS",
  "Bootstrap",
  "Material UI",
  "Ant Design",
  "Shadcn UI",
  "Responsive Design",
];

export const column2 = [
  "GSAP",
  "Framer Motion",
  "Firebase",
  "Supabase",
  "Vue Js",
  "Vuetify",
  "Vuex",
  "React Native",
  "Nest Js",
  "Mongo DB",
  "Git",
  "GitHub",
  "Vercel",
  "Netlify",
  "Figma",
];

const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    icon: DeveloperImg.src,
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    icon: DeveImg.src,
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    icon: BulbImg.src,
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    icon: ProgrammerImg.src,
  },
];

const approachData = [
  {
    phase: "Phase 1",
    title: "Planning & Strategy",
    desc: "We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, content requirements, and design direction.",
  },
  {
    phase: "Phase 2",
    title: "Development & Progress Update",
    desc: "Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way.",
  },
  {
    phase: "Phase 3",
    title: "Deployment & Launch",
    desc: "This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up.",
  },
];

export { navItems, projects, reviews, column1, column2, workExperience, approachData };
