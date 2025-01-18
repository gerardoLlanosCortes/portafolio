// experiences.ts

import { Technology } from "./technologies";

export type Experience = {
  role: { en: string; es: string };
  company: string;
  period: string;
  description: { en: string; es: string };
  technologies: Technology[];
};

export const experiences: Experience[] = [
  {
    role: {
      es: "Desarrollador Web Full-Stack",
      en: "Full-Stack Web Developer",
    },
    company: "LaTebanBarber",
    period: "05/2024 – 08/2024",
    description: {
      es: "Diseño y desarrollo de una agenda flexible y personalizada para optimizar la gestión de citas y horarios, mejorando la eficiencia operativa para usuarios y barberos. Utilizando en el frontend ReactJS con TailwindCSS, gestionando estados mediante Context API, Hooks y Router. En el backend se desarrolló una API REST con NodeJS y MongoDB, integrando la API de Google Calendar e implementando seguridad con JWT. También se realizó el diseño en Figma y despliegue del proyecto en Hostinger (frontend) y Railway (backend).",
      en: "Design and development of a flexible and personalized scheduling system to optimize appointment and time management, improving operational efficiency for both users and barbers. The frontend was built using ReactJS with TailwindCSS, managing states with Context API, Hooks, and Router. On the backend, a REST API was developed with NodeJS and MongoDB, integrating the Google Calendar API and implementing security with JWT. The design was also created in Figma, and the project was deployed on Hostinger (frontend) and Railway (backend).",
    },
    technologies: ["ReactJS", "NodeJS", "MongoDB", "TailwindCSS"],
  },
  {
    role: {
      es: "Desarrollador Web Full-Stack",
      en: "Full-Stack Web Developer",
    },
    company: "MTA SERVICIOS INFORMATICOS SPA",
    period: "04/2024 – 06/2024",
    description: {
      es: "Desarrollo de una aplicación web para el control de una flota vehicular, mejorando la operatividad de repartos. Utilizando en el frontend NextJs y en el backend Ruby on Rails (enfocandome principalmente en el manejo de sesiones).",
      en: "Development of a web application for vehicle fleet management, improving delivery operations. Using Next.js on the frontend and Ruby on Rails on the backend (focusing primarily on session management).",
    },
    technologies: ["NextJs", "Ruby on Rails", "TailwindCSS"],
  },
  {
    role: {
      es: "Desarrollador Web Full-Stack",
      en: "Full-Stack Web Developer",
    },
    company: "E&D Consulting",
    period: "02/2023 – 03/2023",
    description: {
      es: "Desarrollo de una aplicación web para la gestión de gastos empresariales, optimizando la eficiencia financiera. Frontend con ReactJS y Bootstrap, integración con API privada, manejo de datos en MySQL y generación de resúmenes en PDF.",
      en: "Development of a web application for business expense management, optimizing financial efficiency. Frontend with ReactJS and Bootstrap, integration with a private API, data management in MySQL, and PDF summary generation",
    },
    technologies: ["ReactJS", "NodeJS", "MySQL"],
  },
];
