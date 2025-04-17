import profileImage from "../assets/avatar-8.avif";
import aboutImage from "../assets/avatar-12.avif";
import resume from "../assets/Resume.pdf";

// Contact Icons Data:-
import { FaInstagram, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { CiLinkedin } from "react-icons/ci";

// Navbar List Data:-
export const NAVBARList = [
  {
    navTitle: "A-Portfolio",
    to: "/",
    items: [
      { id: 1, to: "/", listName: "Home" },
      { id: 2, to: "/about", listName: "About" },
      { id: 3, to: "/technologies", listName: "Technologies" },
      { id: 4, to: "/experiences", listName: "Experiences" },
      { id: 5, to: "/projects", listName: "Projects" },
      { id: 6, to: "/contact", listName: "Contact" },
    ],
  },
];

// Home Details Data:-
export const HOME = [
  {
    Username: "Akash Kashyap",
    designation: "Frontend Developer",
    bio: `I am passionate Frontend Developer with the knack for crafting robust
          and scalable web applications. As a fresher, I have honed my skills in
          frontend technologies like HTML, CSS, JavaScript, and React, as well
          as I have a little knowledge of backend technologies like Node.js,
          Express.js, and MongoDB. My goal is to leverage my expertise to create
          innovative solutions that drive business growth and deliver
          exceptional user experiences.`,
    profileImage: profileImage,
    resume: resume,
  },
];

// About Details Data:-
export const ABOUT = [
  {
    title: "About",
    description: `I am a dedicated and versatile frontend developer with a passion for
            creating efficient and user-friendly web applications. I have worked
            with a variety of technologies including React, Node.js, Express.js,
            and MongoDB. My journey with web development start with a deep
            curiosity for how things work, and it has evolved into a career
            where I continuously strive to learn and adapt to new challenges. I
            thrive in collaborative environments and enjoy solving complex
            problems to deliver high-quality solutions. Outside of coding, I
            enjoy staying active, exploring new technologies, and contributing
            to open-source projects.`,
    aboutImage: aboutImage,
  },
];

// Technologies Data:-
export const TECHNOLOGIES = {
  title: "Technologies",
  techList: [
    {
      id: "1",
      TechName: "HTML",
      TechLogo: "html",
    },
    {
      id: "2",
      TechName: "CSS",
      TechLogo: "css",
    },
    {
      id: "3",
      TechName: "JAVASCRIPT",
      TechLogo: "javascript",
    },
    {
      id: "4",
      TechName: "REACT",
      TechLogo: "react",
    },
    {
      id: "5",
      TechName: "TAILWIND",
      TechLogo: "Tailwind",
    },
    {
      id: "6",
      TechName: "BOOTSTRAP",
      TechLogo: "Bootstrap",
    },
  ],
};

// Experiences Data:-
export const EXPERIENCES = {
  title: "Experiences/Internship",
  list: [
    {
      id: 1,
      year: "02 January 2023 to 31 March 2023",
      role: "Intern",
      company: "Analyze InfoTech",
      description: `I completed my internship at Analyze InfoTech in 2023, where I gained experience working with Java/J2SE and enhanced my knowledge of the language. I also learned how server-side applications work with the same language.`,
      technologies: ["HTML", "CSS", "JavaSE"],
    },
    {
      id: 2,
      year: "05 April 2023 to 05 September 2023",
      role: "Intern",
      company: "Analyze InfoTech",
      description: `In April 2023, I completed my project on a vehicle renting service using Java/JavaEE for the frontend and MySQL for the backend. The project duration was 5 months, during which I gained a deeper understanding of the project and its complexities.`,
      technologies: ["HTML", "CSS", "JavaSE", "MySQL"],
    },
  ],
};

// Projects Data:-
export const PROJECTS = {
  title: "Projects",
  projectList: [
    {
      id: "1",
      pName: "Portfolio",
      // pImage: portfolioImage,
      pLink: "https://my-portfolio.com",
    },
    {
      id: "2",
      pName: "Tic Tac Toe",
      // pImage: ticTacToeImage,
      pLink: "https://tic-tac-toe-game.com",
    },
    {
      id: "3",
      pName: "E-Commerce",
      // pImage: eCommerceImage,
      pLink: "https://ecommerce-store.com",
    },
  ],
};

// Contact Data:-
export const CONTACT = {
  title: "Contact",
  contactInfo: [
    {
      id: 1,
      address: "Triveni Nagar III",
      phoneNumber: "7565078777, 6386420752",
      email: "akashkashyap0770@gmail.com",
    },
  ],
};

// Footer Data:-
export const FOOTERICONS = [
  {
    id: 1,
    Icon: SiGmail,
    href: "https://www.akashkashyap0770@gmail.com",
  },
  {
    id: 2,
    Icon: FaInstagram,
    href: "https://www.instagram.com/this_is_akash0770/",
  },
  {
    id: 3,
    Icon: CiLinkedin,
    href: "https://www.linkedin.com/in/akashkashyap0770/",
  },
  {
    id: 4,
    Icon: FaGithub,
    href: "https://github.com/akashkashyap0770",
  },
]
