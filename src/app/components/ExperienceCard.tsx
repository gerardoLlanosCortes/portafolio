import { Experience } from "@/utils/experience";
import { useLocale } from "next-intl";

const ExperienceCard = ({ experience }: { experience: Experience }) => {
  const locale = useLocale() as keyof typeof experience.role;

  return (
    <>
      <div className="flex flex-col gap-2 items-start justify-center w-full">
        <div className="flex items-center justify-between w-full">
          <h3>{experience.role[locale]}</h3>
          <span>{experience.period}</span>
        </div>
        <span className="">{experience.company}</span>
        <div>
          <p>{experience.description[locale]}</p>
        </div>
      </div>
      <hr className="border-1 border-whiteDarker border-opacity-35 w-full" />
    </>
  );
};

export default ExperienceCard;
