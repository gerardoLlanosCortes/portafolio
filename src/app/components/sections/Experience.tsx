import { experiences } from "@/utils/experience";
import { useTranslations } from "next-intl";
import React from "react";
import ExperienceCard from "../ExperienceCard";

const Experience = () => {
  const t = useTranslations("IndexPage");
  return (
    <div className="flex flex-col gap-12 items-center justify-center ">
      <h2 className="text-xl">{t("experience")}</h2>
      {experiences.map((experience, i) => (
        <ExperienceCard key={i} experience={experience} />
      ))}
    </div>
  );
};

export default Experience;
