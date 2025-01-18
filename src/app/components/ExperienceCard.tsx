import { Experience } from "@/utils/experience";
import { useLocale } from "next-intl";

const ExperienceCard = ({ experience }: { experience: Experience }) => {
  const locale = useLocale() as keyof typeof experience.role;

  return (
    <>
      <div className="flex flex-col gap-2 items-start justify-center w-full leading-relaxed">
        <div className="flex  justify-between w-full flex-col sm:flex-row sm:items-center">
          <h3>{experience.role[locale]}</h3>
          <span>{experience.period}</span>
        </div>
        <span className="">{experience.company}</span>
        <div>
          <p className="text-pretty">{experience.description[locale]}</p>
        </div>
        {/* <div className="w-full flex justify-end">
          <span>Ver más -></span>
        </div> */}
      </div>
      <hr className="border-1 border-whiteDarker border-opacity-35 w-full" />
    </>
  );
};

export default ExperienceCard;
