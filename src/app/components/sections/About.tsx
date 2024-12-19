import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("IndexPage");

  return (
    <div className="flex flex-col gap-12 items-center justify-center ">
      <h2 className="text-xl">{t("about")}</h2>
      <div className="flex flex-col gap-12 items-center justify-center w-full">
        <picture className="w-48 h-48 rounded-full overflow-hidden">
          <img src="/assets/gerardo-llanos.jpg" alt="" />
        </picture>
        <div className="flex flex-col items-start  justify-start gap-3">
          <p>
            Soy Gerardo Llanos, ingeniero informático y desarrollador web con
            experiencia en el desarrollo de aplicaciones completas utilizando
            tecnologías como ReactJS, Next.js, NodeJS y MongoDB.
          </p>
          <p>
            Mi enfoque está en crear soluciones funcionales y visualmente
            atractivas para resolver problemas reales.
          </p>
          <p>
            He trabajado en proyectos reales que optimizan procesos, como una
            plataforma de gestión de citas para una barbería, un sistema de
            administración de flotas vehiculares y una herramienta de control de
            gastos empresariales.
          </p>
          <p>
            Estas experiencias han fortalecido mis habilidades en frontend,
            backend y diseño de APIs REST.
          </p>
          <p>
            Me motiva aprender nuevas herramientas, enfrentar desafíos y
            colaborar en el desarrollo de productos que generen impacto.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
