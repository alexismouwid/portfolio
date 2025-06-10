import React from 'react';

const ServiceStatic = ({ refServicios }) => {
  return (
    <div className="services-static-container" >
      <h1 className="services-static-title">Servicios que ofrezco</h1>
      <div className="services-static-grid">
        <div className="services-static-box">
          <h3>Diseño de UI/UX de sitios web</h3>
          <p>
            Diseño interfaces atractivas y experiencias de usuario intuitivas que
            combinan estética y funcionalidad. Creo sitios web fáciles de usar,
            visualmente efectivos y adaptados a tus objetivos.
          </p>
        </div>
        <div className="services-static-box">
          <h3>Diseño de UI/UX de aplicaciones móviles</h3>
          <p>
            Diseño interfaces y experiencias de usuario para aplicaciones móviles,
            enfocadas en usabilidad, estética y rendimiento. Creo apps intuitivas,
            modernas y adaptadas a las necesidades de tus usuarios.
          </p>
        </div>
        <div className="services-static-box">
          <h3>Diseño de dashboards de control y software</h3>
          <p>
            Diseño dashboards y software personalizados con interfaces claras y
            funcionales. Ofrezco soluciones visuales que facilitan la gestión de
            datos y mejoran la experiencia del usuario en plataformas digitales.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceStatic;


