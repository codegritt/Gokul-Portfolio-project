import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React.js Developer",
    icon: mobile,
  },
  {
    title: "MEAN stack Developer",
    icon: backend,
  },
  {
    title: "MERN stack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Saaragh Solutions Private Limited",
    icon: "../assets/1624366052130.jpeg",
    iconBg: "#383E56",
    date: "Jul 2023 - Present",
    points: [
      "Working on code migration from Angular1 & 2 to React16 on a goal to merge YUVO & HReasily companies together",
      "Worked on modules such as Subsidiary companies, Audit logs, Reports, Group directory, Employee calendar by re-writing their functionalities using custom hooks extensively managing their states using React",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Freelance (Remote)",
    icon: "../assets/freelancer.png",
    iconBg: "#383E56",
    date: "Dec 2022 - Jun 2023",
    points: [
      "Developed full-stack web applications, processed, analyzed, and rendered data visually usingHtml5, Css3, Javascript, Angular, React",
      "Collaborated and managed projects on Git, Github",
      "Built custom websites using Bootstrap including custom plug-ins and filters",
      "Designed and developed web applications across multiple APIs, third-party integrations and databases",
      "Created an ecommerce, next.js, developer portfolio project and successfully deployed it",
    ],
  },
  {
    title: "Software Engineer IV",
    company_name: "Photon",
    icon: "../assets/photon.png",
    iconBg: "#E6DEDD",
    date: "Sep 2022 - Nov 2022",
    points: [
      "Managed non relational databases hoisting data on MongoDB servers & tested the backend API on Postman",
      "Developed a playlist app using MEAN stack technology & successfully transferred data from the UI to the database",
      "Used CORS, express, path, dotenv, body-parser, mongoose, http, port while writing server side backend code",
      "Used get, post, update, delete to perform CRUD operations on the RESTful APIs",
      "Made sure the entire code is optimized, reusable, simple for smooth user/ client experience",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Larsen & Toubro",
    icon: "../assets/lt.jpg",
    iconBg: "#383E56",
    date: "May 2022 - Jul 2022",
    points: [
      "Worked on ASSET MANAGEMENT SYSTEM (AMS4.0) movement module which enable users in the L&T community to move, transport, repair & buy new components for the asset",
      "Created various angular components for dispatching assets, generating challan, receipts & commissioning",
      "Created UI view part for Dispatch advice by databinding the DA numbers for the asset",
      "Created Asset creation UI page for creating vehicles' source, destination, transport, accessories & other details",
      "Optimized the written code lines to simplify as much as possible",
    ],
  },
  {
    title: "Software Consultant",
    company_name: "ISYS Technologies",
    icon: "../assets/isys.png",
    iconBg: "#E6DEDD",
    date: "Sep 2018 - July 2022",
    points: [
      "Created MERN, MEAN stack projects using Angular, React frameworks, employee database list using Angular material table",
      "Created routing & stored, retrieved data form fake backend server & live server using Mlab database, tested Get, Post, Delete, Update APIs using Postman",
      "Worked on authentication, authorization using Node.js & stored it in Local, Session , Cookie storage",
      "Used Css techniques to create hamburger, accordion for various projects, forked, merged, transferred projects on Github",
      "Learnt Git version control commands",
    ],
  },
  {
    title: "Control Panel Engineer",
    company_name: "Energy Tec",
    icon: "../assets/energytec.png",
    iconBg: "#E6DEDD",
    date: "Jun 2017 - Sep 2018",
    points: [
      "Fitting the electrical components on the panel as per manufacturers design, regulated the power supply with the help of auto transformer switches and circuit breaker",
      "Protection of electrical and mechanical systems, measured & Controlled different Electrical Parameters",
      "Power distribution to the electrical systems/machines, isolation of the electrical system",
      "Testing the control panel for proper functioning as per relevant specifications",
    ],
  },
  {
    title: "Student Intern",
    company_name: "Larsen & Toubro",
    icon: "../assets/lt.jpg",
    iconBg: "#E6DEDD",
    date: "Dec 2014 - Jan 2015",
    points: [
      "Interned at the shipbuilding section of Larsen & Toubro Ltd ",
      "Got hands on experience on how the technology & designing section of the company worked on developing the ideas of manufacturing real time commercial & merchant ships & how the lighting system applied",
      "Observed the work culture,Organizational behavior,team working skills",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Gokul optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Ecommerce App MERN stack project",
    description:
      "Created an Ecommerce page where I used react router, login auth maintained the state and dispatched the actions using Redux",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDB",
        color: "yellow-text-gradient",
      },
      {
        name: "express.js",
        color: "orange-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: "../assets/snapdeal.png",
    source_code_link: "https://github.com/codegritt/MERN-Redux-shop-master",
  },
  {
    name: "Expense Tracker App project",
    description:
      "Created a real time Expense tracker app using React.js as framework, Express.js, MongoDB to handle the database, Tailwind CSS, Styled components for styling, used useEffect(), useContext() hooks for API implementation",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDB",
        color: "yellow-text-gradient",
      },
      {
        name: "express.js",
        color: "orange-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: "../assets/MoneyManager.png",
    source_code_link:
      "https://github.com/codegritt/Expense-tracker-project---React-Vite",
  },
  {
    name: "Developer Portfolio project using Vite react",
    description:
      "A comprehensive developer portfolio I desined to showcase to resume displaying my frontend skills required for the industry",
    tags: [
      {
        name: "vite-react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "three.js",
        color: "yellow-text-gradient",
      },
      {
        name: "react-tilt",
        color: "orange-text-gradient",
      },
      {
        name: "framermotion",
        color: "pink-text-gradient",
      },
      {
        name: "threefiber",
        color: "pink-text-gradient",
      },
    ],
    image: "../assets/portfolio.png",
    source_code_link: "https://github.com/codegritt/Gokul-Portfolio-project",
  },
];

export { services, technologies, experiences, testimonials, projects };
