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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
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
    company_name: "Upwork",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Dec 2022 - Present",
    points: [
      "Developed full-stack web applications, processed, analyzed, and rendered data visually usingHtml5, Css3, Javascript, Angular, React",
      "Collaborated and managed projects on Git, Github",
      "Built custom websites using Bootstrap including custom plug-ins and filters",
      "Designed and developed web applications across multiple APIs, third-party integrations and databases",
      "Used Figma UI to create websites, logos. Angrytools to create CSS gradients, animista to create CSS animations"
    ],
  },
  {
    title: "Software Engineer IV",
    company_name: "Photon",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Sep 2022 - Nov 2022",
    points: [
      "Managed non relational databases hoisting data on MongoDB servers & tested the backend API on Postman",
      "Developed a playlist app using MEAN stack technology & successfully transferred data from the UI to the database",
      "Used CORS, express, path, dotenv, body-parser, mongoose, http, port while writing server side backend code",
      "Used get, post, update, delete to perform CRUD operations on the RESTful APIs",
      "Made sure the entire code is optimized, reusable, simple for smooth user/ client experience"
    ],
  },
  {
    title: "Software Developer",
    company_name: "Larsen & Toubro",
    icon: shopify,
    iconBg: "#383E56",
    date: "May 2022 - Jul 2023",
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
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Sep 2018 - July 2022",
    points: [
      "Created MERN, MEAN stack projects using Angular, React frameworks, employee database list using Angular material table",
      "Created routing & stored, retrieved data form fake backend server & live server using Mlab database, tested Get, Post, Delete, Update APIs using Postman",
      "Worked on authentication, authorization using Node.js & stored it in Local, Session , Cookie storage",
      "Used Css techniques to create hamburger, accordion for various projects, forked, merged, transferred projects on Github",
      "Learnt Git version control commands"
    ],
  },
  {
    title: "Control Panel Engineer",
    company_name: "Energy Tec",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jun 2017 - Sep 2018",
    points: [
     "Fitting the electrical components on the panel as per manufacturers design, regulated the power supply with the help of auto transformer switches and circuit breaker",
     "Protection of electrical and mechanical systems, measured & Controlled different Electrical Parameters",
     "Power distribution to the electrical systems/machines, isolation of the electrical system",
     "Testing the control panel for proper functioning as per relevant specifications"
    ],
  },
  {
    title: "Student Intern",
    company_name: "Larsen & Toubro",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Dec 2014 - Jan 2015",
    points: [
"Interned at the shipbuilding section of Larsen & Toubro Ltd ",
"Got hands on experience on how the technology & designing section of the company worked on developing the ideas of manufacturing real time commercial & merchant ships & how the lighting system applied",
"Observed the work culture,Organizational behavior,team working skills"
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
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
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
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
