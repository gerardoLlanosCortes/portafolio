"use client";
import gsap from "gsap";
import { useEffect } from "react";

const Cursor = () => {
  useEffect(() => {
    const cursor = document.getElementById("custom-cursor");
    const links = document.querySelectorAll(".view");
    const cursorText = document.querySelector(".cursor-text") as HTMLElement;

    // Variable para controlar si el mouse está dentro de un enlace
    let isMouseInsideLink = false;

    // Función para manejar el movimiento del cursor
    const onMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      gsap.set(cursor, { x: clientX, y: clientY });
    };

    // Manejo de eventos cuando el mouse entra en un enlace o elemento con clase "view"
    const onMouseEnterLink = (event: MouseEvent) => {
      const link = event.target as HTMLElement;
      if (link && link.classList.contains("view")) {
        isMouseInsideLink = true;
        // Animación suave de cambio de tamaño y de opacidad
        gsap.to(cursor, { scale: 4, duration: 0.3, ease: "power1.out" });
        gsap.to(cursorText, { opacity: 1, duration: 0.3, ease: "power1.out" });
        cursorText.style.display = "block"; // Asegurarse de que el texto sea visible
      }
    };

    // Manejo de eventos cuando el mouse sale de un enlace o imagen
    const onMouseLeaveLink = () => {
      // Cuando el mouse salga de un enlace, si no está dentro de otro, ocultar el texto
      if (!isMouseInsideLink) {
        gsap.to(cursor, { scale: 1, duration: 0.3, ease: "power1.in" });
        gsap.to(cursorText, { opacity: 0, duration: 0.3, ease: "power1.in" });
        setTimeout(() => {
          if (!isMouseInsideLink) cursorText.style.display = "none"; // Ocultar texto después de la animación
        }, 300); // Esperar a que termine la animación
      }
    };

    // Manejo de eventos cuando el mouse entra y sale de los enlaces
    Array.from(links).forEach((link) => {
      link.addEventListener("mouseenter", onMouseEnterLink as EventListener);
      link.addEventListener("mouseleave", onMouseLeaveLink as EventListener);
    });

    // Manejamos el movimiento del cursor
    document.addEventListener("mousemove", onMouseMove);

    // Limpiar los event listeners cuando el componente se desmonte
    return () => {
      Array.from(links).forEach((link) => {
        link.removeEventListener(
          "mouseenter",
          onMouseEnterLink as EventListener
        );
        link.removeEventListener(
          "mouseleave",
          onMouseLeaveLink as EventListener
        );
      });
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div id="custom-cursor" className="custom-cursor">
      <span className="cursor-text">Ver Más</span>
    </div>
  );
};

export default Cursor;
