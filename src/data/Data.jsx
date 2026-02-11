import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiRedux, SiFirebase, SiAuth0 } from "react-icons/si";

export const links = [
  { id: nanoid(), href: "#home", text: "Home" },
  { id: nanoid(), href: "#skills", text: "Skills" },
  { id: nanoid(), href: "#about", text: "About" },
  { id: nanoid(), href: "#projects", text: "Projects" },
  { id: nanoid(), href: "#contacts", text: "Contacts" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML & CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Strong foundation in HTML and CSS, building clean, responsive, and accessible web layouts.",
  },
  {
    id: nanoid(),
    title: "Tailwind CSS",
    icon: <SiTailwindcss className="h-16 w-16 text-sky-500" />,
    text: "Experienced in utility-first styling with Tailwind CSS.",
  },
  {
    id: nanoid(),
    title: "JavaScript",
    icon: <FaJs className="h-16 w-16 text-yellow-400" />,
    text: "Proficient in ES6+, DOM manipulation, and async programming.",
  },
  {
    id: nanoid(),
    title: "React.js",
    icon: <FaReact className="h-16 w-16 text-cyan-400" />,
    text: "Building reusable components and SPAs with React.",
  },
  {
    id: nanoid(),
    title: "Redux",
    icon: <SiRedux className="h-16 w-16 text-purple-500" />,
    text: "Basic understanding of Redux for global state management.",
  },
  {
    id: nanoid(),
    title: "Firebase",
    icon: <SiFirebase className="h-16 w-16 text-orange-400" />,
    text: "Experience with Firebase Auth and Firestore.",
  },
  {
    id: nanoid(),
    title: "Auth0",
    icon: <SiAuth0 className="h-16 w-16 text-gray-700" />,
    text: "Implemented secure authentication using Auth0.",
  },
  {
    id: nanoid(),
    title: "Git & GitHub",
    icon: <FaGitAlt className="h-16 w-16 text-red-500" />,
    text: "Version control and collaboration using GitHub.",
  },
];

export const projects = [
  {
    id: nanoid(),
    url: "https://a-portfolio-2025.netlify.app/",
    img: "https://i.ytimg.com/vi/TwYKwaEjJd4/maxresdefault.jpg",
    github: "https://github.com/akashkashyap0770/A-Portfolio-2025.git",
    title: "WebDev Portfolio",
    text: "Personal portfolio website showcasing UI components and small React projects.",
  },
  {
    id: nanoid(),
    url: "https://meditrack-react-2026.netlify.app/",
    img: "https://img.freepik.com/free-photo/insurance-application_1098-18311.jpg?semt=ais_hybrid&w=740&q=80",
    github: "https://github.com/akashkashyap0770/meditrack-react-2026.git",
    title: "Medicine Management",
    text: "A real‑time medicine management app that helps users track and organize meds.",
  },
  {
    id: nanoid(),
    url: "https://react-netflix-clone.netlify.app/",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSXLDjdHY3WtR5I8yKmCkICrCLW1usI3P5WA&s",
    github: "https://github.com/akashkashyap0770/React-Netflix-Cone.git",
    title: "Netflix Clone",
    text: "UI clone of Netflix built with React featuring movie layout and responsive design.",
  },
  {
    id: nanoid(),
    url: "https://chat-app-2025-6zvv.vercel.app/",
    img: "https://franticpro.com/resource/newHeader/images/chat-application.png",
    github: "https://github.com/akashkashyap0770/chat-app-2025.git",
    title: "Chat Application",
    text: "Real‑time chat app using React and Socket.IO for messaging between users.",
  },
  {
    id: nanoid(),
    url: "https://crud-api-operation-2025.netlify.app/",
    img: "https://miro.medium.com/1*KxvRS3FhPSQt_9zAQebCyQ.jpeg",
    github: "https://github.com/akashkashyap0770/crud-api-operation-2025.git",
    title: "Secure Dashboard",
    text: "Dashboard demonstrating CRUD operations and API data management in React.",
  },
  {
    id: nanoid(),
    url: "https://weather-react011.netlify.app/",
    img: "https://myradar.com/static/background-a089d87ba11e1a4c45a8efa960b86092.jpg",
    github: "https://github.com/akashkashyap0770/React_WeatherApp.git",
    title: "Weather Application",
    text: "Weather app fetching real‑time data using a weather API and React hooks.",
  },
  {
    id: nanoid(),
    url: "https://todo-react010.netlify.app/",
    img: "https://cdni.iconscout.com/illustration/premium/thumb/todo-list-illustration-svg-download-png-4609476.png",
    github: "https://github.com/akashkashyap0770/React-_Todo_List.git",
    title: "Todo List",
    text: "Todo list app with task management using React and local storage.",
  },
];
