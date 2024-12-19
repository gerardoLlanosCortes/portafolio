import { useTranslations } from "next-intl";
import React from "react";

const Experience = () => {
  const t = useTranslations("IndexPage");
  return (
    <div className="flex flex-col gap-12 items-center justify-center ">
      <h2 className="text-xl">{t("experience")}</h2>
      <div className="flex flex-col gap-2 items-start justify-center w-full">
        <div className="flex items-center justify-between w-full">
          <h3>Desarrollador Web Full-Stack</h3>
          <span> 05/2024 – 08/2024</span>
        </div>
        <span className="">LaTebanBarber</span>
        <div>
          <p>
            Diseño y desarrollo de una agenda flexible y personalizada para
            optimizar la gestión de citas y horarios, mejorando la eficiencia
            operativa para usuarios y barberos. utilizando en el frontend
            ReactJS con TailwindCSS, gestionando estados mediante Context API,
            Hooks y Router. En el backend se desarrolló una API REST con NodeJS
            y MongoDB, integrando la API de Google Calendar e implementando
            seguridad con JWT. También se realizó el diseño en Figma y
            despliegue el proyecto en Hostinger (frontend) y Railway (backend).
          </p>
        </div>
      </div>
      <hr className="border-1 border-whiteDarker border-opacity-35 w-full" />
      <div className="flex flex-col gap-2 items-start justify-center w-full">
        <div className="flex items-center justify-between w-full">
          <h3>Desarrollador Web Full-Stack</h3>
          <span> 05/2024 – 08/2024</span>
        </div>
        <span className="">LaTebanBarber</span>
        <div>
          <p>
            Diseño y desarrollo de una agenda flexible y personalizada para
            optimizar la gestión de citas y horarios, mejorando la eficiencia
            operativa para usuarios y barberos. utilizando en el frontend
            ReactJS con TailwindCSS, gestionando estados mediante Context API,
            Hooks y Router. En el backend se desarrolló una API REST con NodeJS
            y MongoDB, integrando la API de Google Calendar e implementando
            seguridad con JWT. También se realizó el diseño en Figma y
            despliegue el proyecto en Hostinger (frontend) y Railway (backend).
          </p>
        </div>
      </div>
      <hr className="border-1 border-whiteDarker border-opacity-35 w-full" />
      <div className="flex flex-col gap-2 items-start justify-center w-full">
        <div className="flex items-center justify-between w-full">
          <h3>Desarrollador Web Full-Stack</h3>
          <span> 05/2024 – 08/2024</span>
        </div>
        <span className="">LaTebanBarber</span>
        <div>
          <p>
            Diseño y desarrollo de una agenda flexible y personalizada para
            optimizar la gestión de citas y horarios, mejorando la eficiencia
            operativa para usuarios y barberos. utilizando en el frontend
            ReactJS con TailwindCSS, gestionando estados mediante Context API,
            Hooks y Router. En el backend se desarrolló una API REST con NodeJS
            y MongoDB, integrando la API de Google Calendar e implementando
            seguridad con JWT. También se realizó el diseño en Figma y
            despliegue el proyecto en Hostinger (frontend) y Railway (backend).
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
