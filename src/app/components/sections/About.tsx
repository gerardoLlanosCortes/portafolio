import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("IndexPage");
  const tAbout = useTranslations("About");

  return (
    <div className="flex flex-col gap-12 items-center justify-center ">
      <h2 className="text-xl">{t("about")}</h2>
      <div className="flex flex-col gap-12 items-center justify-center w-full">
        <picture className="w-48 h-48 rounded-full overflow-hidden">
          <img src="/assets/gerardo-llanos.jpg" alt="" />
        </picture>
        <div className="flex flex-col items-start  justify-start gap-3">
          <p>{tAbout("paragraph_one")}</p>
          <p>{tAbout("paragraph_two")}</p>
          <p>{tAbout("paragraph_three")}</p>
          <p>{tAbout("paragraph_four")}</p>
          <p>{tAbout("paragraph_five")}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
