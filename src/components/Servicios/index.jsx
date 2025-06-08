import React, { forwardRef , useRef, useEffect} from "react";
import "./Servicios.css";


const Servicios = forwardRef((_, ref) => {


   return (
    <section className="servicios-container" ref={ref}>
      <h2 className="servicios-titulo " >Servicios que ofrezco</h2>
      <div className="servicios-grid">
        <div className="servicio-box "  >
          <h3>Diseño de UI/UX de sitios web</h3>
          <p>
            Diseño interfaces atractivas y experiencias de usuario intuitivas que
            combinan estética y funcionalidad. Creo sitios web fáciles de usar,
            visualmente efectivos y adaptados a tus objetivos.
          </p>
        </div>
        <div className="servicio-box "  >
          <h3>Diseño de UI/UX de aplicaciones móviles</h3>
          <p>
            Diseño interfaces y experiencias de usuario para aplicaciones móviles,
            enfocadas en usabilidad, estética y rendimiento. Creo apps intuitivas,
            modernas y adaptadas a las necesidades de tus usuarios.
          </p>
        </div>
        <div className="servicio-box " >
          <h3>Diseño de dashboards de control y software</h3>
          <p>
            Diseño dashboards y software personalizados con interfaces claras y
            funcionales. Ofrezco soluciones visuales que facilitan la gestión de
            datos y mejoran la experiencia del usuario en plataformas digitales.
          </p>
        </div>
      </div>
      <div className="boton-container">
         <a href="https://api.whatsapp.com/send?phone=573043405723&text=Hola%2C+quiero+más+información" target="_blank" className="boton-contacto">
            Contactame 
            </a>            </div>
    </section>
  );
});

export default Servicios;

