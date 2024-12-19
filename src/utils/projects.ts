import { Technology } from "./technologies";

// projects.ts
export type Project = {
  id: string;
  image: string;
  technologies: Technology[];
  title: { en: string; es: string };
  description: { en: string; es: string };
  link: string;
};

export const projects: Project[] = [
  {
    id: "latebanbarber",
    image: "/assets/latebanbarber.png",
    technologies: ["ReactJS", "NodeJS", "MongoDB", "TailwindCSS"],
    title: {
      en: "Website & Scheduler - LaTebanBarber",
      es: "Página web & Agenda - LaTebanBarber",
    },
    description: {
      en: "A web platform developed for appointment management and client optimization.",
      es: "Una plataforma web desarrollada para la gestión de citas y optimización de clientes.",
    },
    link: "https://latebanbarber.com",
  },
  {
    id: "latebanbarber",
    image: "/assets/latebanbarber.png",
    technologies: ["ReactJS", "NodeJS", "MongoDB", "TailwindCSS"],
    title: {
      en: "Website & Scheduler - LaTebanBarber",
      es: "Página web & Agenda - LaTebanBarber",
    },
    description: {
      en: "A web platform developed for appointment management and client optimization.",
      es: "Una plataforma web desarrollada para la gestión de citas y optimización de clientes.",
    },
    link: "https://latebanbarber.com",
  },
];
