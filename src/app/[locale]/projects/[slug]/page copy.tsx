import { projects } from "@/utils/projects";

import React from "react";

// Función utilitaria para acceder a una propiedad de un objeto basado en una clave segura
function getLocalizedValue<T extends Record<string, string>>(
  localizedObject: T,
  locale: string
): string {
  return localizedObject[locale as keyof T];
}

const tech = "ReactJS";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;

  // Encuentra el proyecto por su slug localizado
  const project = projects.find(
    (project) => project.slug[locale as keyof typeof project.slug] === slug
  );

  console.log(project);

  return (
    <div className="flex flex-col gap-10">
      {project && (
        <div>
          <div className="text-white pt-24 pb-24 relative flex flex-col gap-4 pl-16">
            <h1 className="text-5xl font-bold w-9/12 leading-[1.3] ">
              {/* función utilitaria para obtener el título */}
              {getLocalizedValue(project.title, locale)}
            </h1>
            <div className="w-full flex items-center justify-start gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className={`${
                    tech === "ReactJS"
                      ? "bg-sky-700"
                      : tech === "NodeJS"
                      ? "bg-green-600"
                      : tech === "MongoDB"
                      ? "bg-green-700"
                      : tech === "TailwindCSS"
                      ? "bg-sky-600"
                      : "bg-transparent"
                  } w-fit px-2 py-1 rounded-lg text-xs`}
                >
                  {tech}
                </span>
              ))}
            </div>

            <figure className="absolute top-0 left-auto right-0 -z-10 w-full h-full">
              <img
                src={project.image}
                alt=""
                className="w-full h-full block object-cover "
              />
              <span className="gradient-overlay--bg rounded-b-2xl"></span>
            </figure>
          </div>

          <div className="flex flex-col gap-12">
            {project.fullDescription?.map((description, i) => (
              <div className="flex flex-col gap-3" key={i}>
                <h2 className="text-xl font-semibold">
                  {getLocalizedValue(description.subtitle, locale)}
                </h2>
                {description.image && (
                  <picture className="w-full h-[300px] ">
                    <img
                      className="w-full h-full object-cover rounded-2xl shadow-test view"
                      src={"/assets/barber_miniatura.png"}
                      alt={""}
                    />
                  </picture>
                )}
                {description.content.map((content, i) => (
                  <p key={i}>{getLocalizedValue(content, locale)}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
