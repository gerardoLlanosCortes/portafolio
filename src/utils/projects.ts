export type Project = {
  id: string;
  image: string;
  technologies: string[];
  title: { en: string; es: string };
  description: { en: string; es: string };
  link: string;
  slug: { en: string; es: string };
  fullDescription?: {
    subtitle: { en: string; es: string };
    content: {
      en: string;
      es: string;
    };
    image?: string;
  }[];
};

export const projects: Project[] = [
  {
    id: "latebanbarber",
    image: "/assets/barber_miniatura.png",
    technologies: ["ReactJS", "NodeJS", "MongoDB", "TailwindCSS"],
    title: {
      en: "Website & Scheduler - LaTebanBarber",
      es: "Página web & Agenda - LaTebanBarber",
    },
    description: {
      en: "A web platform developed for appointment management and client optimization.",
      es: "Una plataforma web desarrollada para la gestión de citas y optimización de clientes.",
    },
    link: "https://latebanbarber.com",
    slug: {
      en: "latebanbarber",
      es: "latebanbarber",
    },
    fullDescription: [
      {
        subtitle: {
          en: "1. Introduction",
          es: "1. Introducción",
        },
        content: {
          en: `<a href="https://latebanbarber.com/" target="_blank" rel="noopener noreferrer" class="organization">LaTebanBarber</a> is a web platform designed to optimize appointment management and improve the customer experience.`,
          es: `
              <p>
                <a href="https://latebanbarber.com/" target="_blank" rel="noopener noreferrer" class="organization">LaTebanBarber</a> es una  plataforma web diseñada para optimizar la gestión de citas y mejorar la experiencia de los clientes.
              </p>
              <p>El objetivo principal fue crear una herramienta intuitiva y funcional que permitiera a la barbería reducir la carga administrativa</p>
            `,
        },
      },
      {
        subtitle: {
          en: "2. Problem Identification",
          es: "2. Identificación del Problema",
        },
        content: {
          en: "The barbershop managed appointments through social media and phone calls, which caused confusion, errors, and delays. Customers faced long waits to confirm schedules, while barbers dealt with disorganization and time loss, creating a clear opportunity to implement a more efficient and automated solution.",
          es: `
              <p>La barbería gestionaba citas a través de redes sociales y llamadas, lo que generaba confusiones, errores y retrasos. Los clientes enfrentaban largas esperas para confirmar horarios, mientras los barberos lidiaban con desorganización y pérdida de tiempo, surgiendo una oportunidad clara para implementar una solución más eficiente y automatizada.</p>

              <div class="list-container">
                <p>Principales problemas a solucionar:</p>
                <ul class="unordened-list-container">
                  <li class='list-style'>Mala gestión de citas</li>
                  <li class='list-style'>Dificultad para administrar múltiples reservas simultáneamente.</li>
                  <li class='list-style'>Falta de claridad para los clientes sobre los servicios disponibles y sus precios.</li>
                </ul>
              </div>
            `,
        },

        image: "/assets/projects/latebanbarber/agenda-antigua.png",
      },

      {
        subtitle: {
          en: "3. Initial Research",
          es: "3. Investigación Inicial",
        },
        content: {
          en: "To address the identified problems, the following activities were carried out:",
          es: `
            <div class="list-container">
              <p>Para abordar los problemas identificados, se realizaron las siguientes actividades:</p>

              <ul class="unordened-list-container">
                <li class='list-style'><strong>Análisis de la Competencia:</strong> Se revisaron plataformas de gestión de citas utilizadas por otras barberías. Esto permitió identificar funcionalidades clave como calendarios interactivos y notificaciones automáticas.</li>
                <li class='list-style'><strong>Entrevistas:</strong> Se realizaron entrevistas con los barberos y clientes para conocer sus puntos de dolor y necesidades específicas.</li>
                <li class='list-style'><strong>Definición de Requerimientos:</strong> Basado en los resultados, se definieron funcionalidades prioritarias como el agendamiento en tiempo real, recordatorios y una interfaz sencilla.</li>
              </ul>
            </div>
            `,
        },

        image: "/assets/projects/latebanbarber/inspiraciones.jpg",
      },
      {
        subtitle: {
          en: "4. Design and Planning",
          es: "4. Diseño y Planificación",
        },
        content: {
          en: "With all the data collected and analyzed, the design and planning phase began, which included the following steps:",
          es: `
            <div class="list-container">
              <p>Ya con todos los datos recogidos y analizados, se empezó con el diseño y planificación, que incluyó los siguientes pasos:</p>
              <ul class="unordened-list-container">
                <li class='list-style'><strong>Wireframes y Prototipos:</strong> Se diseñaron bocetos para mostrar el flujo de reservas desde la perspectiva del cliente y del barbero.</li>
                <li class='list-style'><strong>Decisiones de UX/UI:</strong> La interfaz fue diseñada para que los clientes pudieran agendar una cita en menos de tres pasos, con colores que reflejaran profesionalismo y modernidad.</li>
                <li class='list-style'>
                  <strong>Selección de Tecnologías:</strong>
                  <ul>
                    <li class='list-style-second'>Frontend: ReactJS con TailwindCSS para crear componentes reutilizables y un diseño responsive.</li>
                    <li class='list-style-second'>Backend: NodeJS con MongoDB para almacenar la información de citas y usuarios.</li>
                  </ul>
                </li>
              </ul>
            </div>`,
        },

        image: "/assets/projects/latebanbarber/prototipo-inicial.png",
      },
      {
        subtitle: {
          en: "5. Development",
          es: "5. Desarrollo",
        },
        content: {
          en: "With the designs and planning ready, we proceeded to the development stage, which included the following steps:",
          es: `
            <div class="list-container">
              <p>Con los diseños y planificación listos, se procedió a la etapa de desarrollo, que incluyó los siguientes pasos:</p>
              <ul class="unordened-list-container">
                <li class='list-style'><strong>Estructura del Backend:</strong> Se creó una API RESTful con Node.js y MongoDB para gestionar usuarios, servicios y reservas de citas. La base de datos fue optimizada para manejar múltiples barberos y horarios simultáneamente, lo que permitió un sistema de reservas eficiente y en tiempo real. Para la seguridad de la plataforma, se implementó JWT (JSON Web Tokens), proporcionando autenticación segura y protegiendo las rutas privadas de la API.</li>

                <li class='list-style'><strong>Implementación del Frontend:</strong> El desarrollo de la interfaz de usuario se realizó con ReactJS, utilizando TailwindCSS para lograr un diseño limpio, moderno y completamente responsivo. Para gestionar el estado global de la aplicación, se empleó Context API y Hooks, lo que permitió un manejo eficiente de las reservas y la experiencia del cliente. Además, se utilizó React Router para una navegación fluida entre las distintas secciones de la plataforma, como la reserva de citas, la visualización de servicios y la gestión de usuarios.</li>

                <li class='list-style ' >
                  <strong>Integraciones:</strong>
                  <ul class="unordened-list-container">
                    <li class='list-style-second'>Se implementaron notificaciones por correo para confirmar las citas a los usuarios, mejorando la comunicación.</li>
                    <li class='list-style-second'>Sincronización de calendarios con la API de Google Calendar, permitiendo a los barberos visualizar su agenda en tiempo real y evitando conflictos de horarios.</li>
                  </ul>
                </li>
              </ul>
            </div>`,
        },

        image: "/assets/projects/latebanbarber/code.jpg",
      },
      {
        subtitle: {
          en: "6. User Testing and Launch",
          es: "6. Pruebas con Usuarios",
        },
        content: {
          en: "With the main modules developed, user testing was conducted to validate the functionality and usability of the platform.",
          es: `
              <p>Ya con los módulos principales desarrollados, se realizaron pruebas con usuarios para validar la funcionalidad y usabilidad de la plataforma.</p>
              <ul class="unordened-list-container">
                <li class='list-style'><strong>Prueba Inicial:</strong> Los barberos comenzaron a usar la versión beta de la plataforma para familiarizarse con ella antes del lanzamiento oficial y se le pidió a diversos clientes probarla para verificar que no existieran errores.</li>
        
                <li class='list-style'><strong>Prueba de Lanzamiento:</strong> Se lanzó una versión de prueba durante 2 semanas para que tanto los clientes como los barberos pudieran ver el funcionamiento de la agenda, los cuales al final proporcionaron comentarios sobre la usabilidad y posibles mejoras.</li>

                <li class='list-style'><strong>Iteraciones:</strong> Se ajustó el diseño y la funcionalidad según los comentarios recibidos, como simplificar el proceso de agenda, poder agregar la hora agendada al calendario del cliente y mejorar el rendimiento del envío de correos.</li>
              </ul>`,
        },

        image: "/assets/projects/latebanbarber/test.svg",
      },
      {
        subtitle: {
          en: "7. Results",
          es: "7. Resultados",
        },
        content: {
          en: "The impact of the platform was significant:",
          es: `
            <div class="list-container">
              <p>El impacto de la plataforma fue notable, con mejoras sustanciales en la eficiencia operativa y en la experiencia del cliente:</p>
              <ul class="unordened-list-container">
                <li class='list-style'>
                  <strong>Beneficios Obtenidos:</strong>
                  <ul class="unordened-list-container sub-unordened-list-container">
                    <li class='list-style-second'>Reducción de más del 90% en el tiempo necesario para gestionar citas al eliminar la dependencia de mensajes de Instagram y llamadas telefónicas.</li>
                    <li class='list-style-second'>Mejor organización en la agenda de los barberos, reduciendo las confusiones de un 20% a menos del 5%.</li>
                    <li class='list-style-second'>Mejora significativa en la experiencia del cliente, quienes destacaron la rapidez y facilidad del sistema. Más del 95% de los usuarios prefirieron la nueva plataforma frente a la antigua gestión manual.</li>
                    <li class='list-style-second'>Optimización en la gestión de horarios: la transición de una agenda diaria a una semanal permitió un 50% más de eficiencia al distribuir las citas con mayor anticipación y visión a largo plazo.</li>
                  </ul>
                </li>
                <li class='list-style'>
                  <strong>Estadísticas del primer mes:</strong>
                  <ul class="unordened-list-container sub-unordened-list-container">
                    <li class='list-style-second'>Más de 300 citas gestionadas correctamente en el primer mes, sin errores ni duplicación de horarios.</li>
                    <li class='list-style-second'>Aumento del 30% en la cantidad de citas realizadas semanalmente, al permitir a los usuarios agendar en cualquier momento y desde cualquier dispositivo.</li>
                  </ul>
                </li>
              </ul>
              <p>Estos resultados evidencian una mejora considerable en la eficiencia operativa de la barbería y una experiencia mucho más fluida tanto para los clientes como para los barberos.</p>
            </div>`,
        },

        image: "/assets/projects/latebanbarber/results.svg",
      },
      {
        subtitle: {
          en: "8. Lessons Learned",
          es: "8. Lecciones Aprendidas",
        },
        content: {
          en: ` <ul>
                          <li class='list-style'><strong>Achieved Benefits:</strong> A RESTful API was created using Node.js and MongoDB to manage users, services, and appointment bookings. The database was optimized to handle multiple barbers and schedules simultaneously, enabling an efficient and real-time booking system.</li>
                          <li class='list-style'>Difficulty managing multiple simultaneous bookings.</li>
                          <li class='list-style'>Lack of clarity for clients regarding available times and services.</li>
                        </ul>`,
          es: ` <ul class="unordered-list-container">
                  <li class='list-style'>
                    <strong>Retos Técnicos:</strong>
                    <ul class="unordered-list-container sub-unordened-list-container">
                      <li class='list-style-second'>Optimización del backend y frontend para manejar múltiples usuarios simultáneamente.</li>
                      <li class='list-style-second'>Manejo de horas y fechas con JavaScript según localización.</li>
                      <li class='list-style-second'>Integración de Google Calendar en la agenda de horas.</li>
                      <li class='list-style-second'>Envío masivo de correos electrónicos.</li>
                      <li class='list-style-second'>Hosting del frontend y backend.</li>
                    </ul>
                  </li>
                  <li class='list-style'>
                    <strong>Impacto:</strong>
                    <ul class="unordered-list-container">
                      <li class='list-style-second'>La importancia de escuchar a los usuarios finales en cada etapa del desarrollo.</li>
                      <li class='list-style-second'>La necesidad de priorizar la simplicidad en las interfaces y asegurar un producto de calidad.</li>
                    </ul>
                  </li>
                </ul>`,
        },

        image: "/assets/projects/latebanbarber/lessons.svg",
      },
    ],
  },
];
