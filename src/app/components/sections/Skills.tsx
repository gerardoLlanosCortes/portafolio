import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFigma } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

import { useTranslations } from "next-intl";
import Icon from "../Icon";

const Skills = () => {
  const t = useTranslations("Header");

  return (
    <div className="flex flex-col gap-6 items-center justify-center ">
      <h2 className="text-xl">{t("skills")}</h2>
      <div className="flex  items-center gap-8 ">
        <Icon size="10" icon={<FaReact size={"full"} />} />
        <Icon size="10" icon={<RiNextjsFill size={"full"} />} />
        <Icon size="10" icon={<FaNodeJs size={"full"} />} />
        <Icon size="10" icon={<DiMongodb size={"full"} />} />
        <Icon size="10" icon={<SiMysql size={"full"} />} />
        <Icon size="10" icon={<RiJavascriptFill size={"full"} />} />
        <Icon size="10" icon={<BiLogoTypescript size={"full"} />} />
        <Icon size="10" icon={<FaHtml5 size={"full"} />} />
        <Icon size="10" icon={<FaCss3Alt size={"full"} />} />
        <Icon size="10" icon={<RiTailwindCssFill size={"full"} />} />
        <Icon size="10" icon={<IoLogoFigma size={"full"} />} />
        <Icon size="10" icon={<FaGithub size={"full"} />} />
      </div>
    </div>
  );
};

export default Skills;
