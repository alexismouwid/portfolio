import React, { forwardRef , useRef, useEffect} from "react";
import "./Servicios.css";

const Servicios = forwardRef((_, ref) => {

 useEffect(() => {
    const elements = document.querySelectorAll('.ejeX');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          entry.target.classList.remove('hidden');
        } else {
          entry.target.classList.remove('visible');
          entry.target.classList.add('hidden');
        }
      });
    }, {
      threshold: 0.1,
    });

    elements.forEach(el => observer.observe(el));

    // Limpieza
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

   return (
    <section className="servicios-container" ref={ref}>
      <h2 className="servicios-titulo ejeX" >Servicios que ofrezco</h2>
      <div className="servicios-grid">
        <div className="servicio-box ejeX"  >
          <h3>Diseño de UI/UX de sitios web</h3>
          <p>
            Diseño interfaces atractivas y experiencias de usuario intuitivas que
            combinan estética y funcionalidad. Creo sitios web fáciles de usar,
            visualmente efectivos y adaptados a tus objetivos.
          </p>
        </div>
        <div className="servicio-box ejeX"  >
          <h3>Diseño de UI/UX de aplicaciones móviles</h3>
          <p>
            Diseño interfaces y experiencias de usuario para aplicaciones móviles,
            enfocadas en usabilidad, estética y rendimiento. Creo apps intuitivas,
            modernas y adaptadas a las necesidades de tus usuarios.
          </p>
        </div>
        <div className="servicio-box ejeX" >
          <h3>Diseño de dashboards de control y software</h3>
          <p>
            Diseño dashboards y software personalizados con interfaces claras y
            funcionales. Ofrezco soluciones visuales que facilitan la gestión de
            datos y mejoran la experiencia del usuario en plataformas digitales.
          </p>
        </div>
      </div>
      <div className="boton-container">
        <button className="boton-contacto" aria-label="Ir a la sección de contacto">
          Contáctame
        </button>
      </div>
    </section>
  );
});

export default Servicios;

