import { useTranslations } from "next-intl";
import ButtonCV from "../ButtonCV";
import { LuDownload } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import Skills from "./Skills";
import Icon from "../Icon";

const Header = () => {
  const t = useTranslations("Header");

  return (
    <header className="w-full h-screen flex flex-col items-center justify-center gap-32">
      <div className=" flex flex-col items-center justify-center gap-8 ">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-4xl text-whiteDarker">{t("name")}</h1>
          <h2 className="text-6xl text-skyBlue font-semibold">{t("job")}</h2>
        </div>
        <div className="flex items-center justify-center gap-3">
          <ButtonCV
            title={t("download-cv")}
            id="descargar-cv"
            rightIcon={<LuDownload />}
          />
          <Icon
            size="12"
            customClass="w-12 h-12 cursor-pointer"
            icon={<FaLinkedin size={"full"} />}
          />
          <Icon
            size="12"
            customClass="w-12 h-12 cursor-pointer"
            icon={<FaGithub size={"full"} />}
          />
        </div>
      </div>
      <Skills />
    </header>
  );
};

export default Header;
