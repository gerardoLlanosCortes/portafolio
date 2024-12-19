import { Project } from "@/utils/projects";
import { FaArrowRight } from "react-icons/fa";
import Icon from "./Icon";
import { useLocale } from "next-intl";

export default async function ProjectC({ project }: { project: Project }) {
  const locale = useLocale() as keyof typeof project.title;

  return (
    <div className="col-span-1 w-full h-[380px] flex flex-col items-center justify-between ">
      <picture className="w-full h-[300px] ">
        <img
          className="w-full h-full object-cover rounded-2xl shadow-test"
          src={project.image}
          alt={project.title[locale]}
        />
      </picture>
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
      <div className="w-full flex items-center justify-between">
        <span>{project.title[locale]}</span>
        <Icon
          size="3"
          customClass="rounded-full w-3 h-3"
          icon={<FaArrowRight size={"full"} />}
        />
      </div>
    </div>
  );
}
