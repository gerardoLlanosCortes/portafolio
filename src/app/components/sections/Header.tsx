import { useTranslations } from "next-intl";
import ButtonCV from "../ButtonCV";
import { LuDownload } from "react-icons/lu";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import Skills from "./Skills";
import Icon from "../Icon";
import Link from "next/link";

const Header = () => {
  const t = useTranslations("Header");

  return (
    <header className="w-full h-screen flex flex-col items-center justify-center gap-32">
      <div className=" flex flex-col items-center justify-center gap-8 ">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-whiteDarker text-center text-xl md:text-4xl ">
            {t("name")}
          </h1>
          <h2 className=" text-skyBlue font-semibold text-center text-3xl md:text-6xl ">
            {t("job")}
          </h2>
        </div>
        <div className="flex items-center justify-center flex-col gap-6 md:flex-row md:gap-3  ">
          <ButtonCV
            title={t("download-cv")}
            id="descargar-cv"
            rightIcon={<LuDownload />}
          />
          <div className="flex items-center justify-center gap-3">
            <Link
              href={"https://www.linkedin.com/in/gerardo-llanos-cortes/"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon
                size="12"
                customClass="w-8 h-8 md:w-12 md:h-12 cursor-pointer"
                icon={<FaLinkedin size={"full"} />}
              />
            </Link>

            <Link
              href={"https://github.com/gerardoLlanosCortes"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon
                size="12"
                customClass="w-8 h-8 md:w-12 md:h-12 cursor-pointer"
                icon={<FaGithub size={"full"} />}
              />
            </Link>

            <Link
              href={"https://www.youtube.com/@gerardollanosdev"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon
                size="12"
                customClass="w-8 h-8 md:w-12 md:h-12 cursor-pointer"
                icon={<FaYoutube size={"full"} />}
              />
            </Link>
          </div>
        </div>
      </div>
      <Skills />
    </header>
  );
};

export default Header;
