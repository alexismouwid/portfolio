import React, { forwardRef , useRef, useEffect} from "react";
import "./Servicios.css";
import ScrollReveal from "scrollreveal";


const Servicios = forwardRef((_, ref) => {
  const servRef = useRef(null);
  const servicios1Ref = useRef(null);
  const servicios2Ref = useRef(null);
  const servicios3Ref = useRef(null);

  useEffect(() => {
    const config = {
      origin: 'left',
      duration: 1000,
      delay: 150,
      distance: '-200px',
      scale: 0,
      easing: 'ease',
      reset: true,
    };

    ScrollReveal().reveal(servRef.current, config);
  }, []);
  useEffect(() => {
    const config = {
      origin: 'right',
      duration: 1500,
      delay: 150,
      distance: '-200px',
      scale: 0,
      easing: 'ease',
      reset: true,
    };

    ScrollReveal().reveal(servicios1Ref.current, config);
    ScrollReveal().reveal(servicios2Ref.current,config);
    ScrollReveal().reveal(servicios3Ref.current, config);
  })

  
  return (
    <section className="servicios-container" ref={ref}>
      <h2 className="servicios-titulo" ref={servRef}>Servicios que ofrezco</h2>
      <div className="servicios-grid">
        <div className="servicio-box" ref={servicios1Ref}>
          <h3>Diseño de UI/UX de sitios web</h3>
          <p>
            Diseño interfaces atractivas y experiencias de usuario intuitivas que
            combinan estética y funcionalidad. Creo sitios web fáciles de usar,
            visualmente efectivos y adaptados a tus objetivos.
          </p>
        </div>
        <div className="servicio-box" ref={servicios2Ref}>
          <h3>Diseño de UI/UX de aplicaciones móviles</h3>
          <p>
            Diseño interfaces y experiencias de usuario para aplicaciones móviles,
            enfocadas en usabilidad, estética y rendimiento. Creo apps intuitivas,
            modernas y adaptadas a las necesidades de tus usuarios.
          </p>
        </div>
        <div className="servicio-box" ref={servicios3Ref}>
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

