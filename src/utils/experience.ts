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
    company: "LaTebanBarber",
    period: "05/2024 – 08/2024",
    description: {
      es: "Diseño y desarrollo de una agenda flexible y personalizada para optimizar la gestión de citas y horarios, mejorando la eficiencia operativa para usuarios y barberos. Utilizando en el frontend ReactJS con TailwindCSS, gestionando estados mediante Context API, Hooks y Router. En el backend se desarrolló una API REST con NodeJS y MongoDB, integrando la API de Google Calendar e implementando seguridad con JWT. También se realizó el diseño en Figma y despliegue del proyecto en Hostinger (frontend) y Railway (backend).",
      en: "Design and development of a flexible and personalized scheduling system to optimize appointment and time management, improving operational efficiency for both users and barbers. The frontend was built using ReactJS with TailwindCSS, managing states with Context API, Hooks, and Router. On the backend, a REST API was developed with NodeJS and MongoDB, integrating the Google Calendar API and implementing security with JWT. The design was also created in Figma, and the project was deployed on Hostinger (frontend) and Railway (backend).",
    },
    technologies: ["ReactJS", "NodeJS", "MongoDB", "TailwindCSS"],
  },
];
