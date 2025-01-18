import { getMessages } from "next-intl/server";

import Header from "../components/sections/Header";

import { useTranslations } from "next-intl";
import Projects from "../components/sections/Projects";
import Experience from "../components/sections/Experience";
import About from "../components/sections/About";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const messages: any = await getMessages({ locale });
  const title = messages.NavbarLinks.homeTitle;

  return {
    title,
  };
}

export default function HomePage() {
  const t = useTranslations("IndexPage");
  return (
    <div className="w-10/12 lg:w-[850px] mx-auto ">
      <Header />
      {/* <div className="flex flex-col gap-6 items-center justify-center ">
        <h2 className="text-xl">{t("skills")}</h2>
        <div className="flex  items-center gap-8 ">
          <figure className="w-10 h-10 rounded-full">
            <FaReact size={"full"} />
          </figure>
          <figure className="w-10 h-10 rounded-full">
            <RiNextjsFill size={"full"} />
          </figure>
          <figure className="w-10 h-10 rounded-full">
            <FaNodeJs size={"full"} />
          </figure>
          <figure className="w-10 h-10 rounded-full">
            <DiMongodb size={"full"} />
          </figure>
          <figure className="w-10 h-10 rounded-full">
            <SiMysql size={"full"} />
          </figure>
          <figure className="w-10 h-10 rounded-full">
            <RiJavascriptFill size={"full"} />
          </figure>
          <figure className="w-10 h-10 rounded-full">
            <BiLogoTypescript size={"full"} />
          </figure>
          <figure className="w-10 h-10 rounded-full">
            <TiHtml5 size={"full"} />
          </figure>
          <figure className="w-10 h-10 rounded-full">
            <FaCss3Alt size={"full"} />
          </figure>
          <figure className="w-10 h-10 rounded-full">
            <RiTailwindCssFill size={"full"} />
          </figure>
          <figure className="w-10 h-10 rounded-full">
            <IoLogoFigma size={"full"} />
          </figure>
          <figure className="w-10 h-10 rounded-full">
            <FaGithub size={"full"} />
          </figure>
        </div>
      </div> */}
      <div className="flex flex-col gap-32">
        <Projects />
        <Experience />
        <About />
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
