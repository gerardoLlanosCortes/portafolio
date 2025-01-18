import { projects } from "@/utils/projects";
import React from "react";
import ProjectDescription from "@/app/components/ProjectDescription";
import { getLocalizedValue } from "@/utils/utilities";
import Link from "next/link";

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

  return (
    <>
      {project && (
        <div className="flex flex-col gap-10">
          <div className="text-white pt-24 pb-24 relative flex flex-col gap-4 w-full lg:w-[850px] mx-auto ">
            <h1 className="text-2xl md:text-5xl font-bold w-10/12 mx-auto leading-[1.3] ">
              {/* función utilitaria para obtener el título */}
              {getLocalizedValue(project.title, locale)}
            </h1>
            <div className="flex items-center justify-start gap-2 flex-wrap w-10/12 mx-auto">
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

          <div className="flex flex-col gap-12 w-10/12 lg:w-[850px] mx-auto ">
            <Link href={"/"}>{"< Volver"}</Link>
            {project.fullDescription?.map((description, i) => (
              <div className="flex flex-col gap-3 w-full" key={i}>
                <h2 className="text-xl font-semibold">
                  {getLocalizedValue(description.subtitle, locale)}
                </h2>
                {description.image && (
                  <picture className="w-full h-[300px] ">
                    <img
                      className="w-full h-full object-cover object-center rounded-2xl shadow-test view"
                      src={description.image}
                      alt={""}
                    />
                  </picture>
                )}
                <ProjectDescription
                  description={description}
                  locale={locale}
                  key={i}
                />
                {/* {description.content.map((content, i) => (
                  <p
                    key={i}
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(
                        getLocalizedValue(content, locale)
                      ),
                    }}
                  />
                ))} */}
              </div>
            ))}
          </div>
        </div>
      )}

      <br />
      <br />
      <br />
    </>
  );
}
