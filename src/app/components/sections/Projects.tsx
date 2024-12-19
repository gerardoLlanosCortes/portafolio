import { useTranslations } from "next-intl";
import React from "react";
import ProjectCard from "../ProjectCard";
import { projects } from "../../../utils/projects";

const Projects = () => {
  const t = useTranslations("IndexPage");

  return (
    <div className="flex flex-col gap-12 items-center justify-center ">
      <h2 className="text-xl">{t("proyects")}</h2>
      <div className="w-full grid grid-cols-2 gap-8 gap-y-12">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
