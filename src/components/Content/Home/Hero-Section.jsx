import React, { forwardRef } from 'react';
import './Hero-section.css';
 
const HeroSection = forwardRef((props, ref) => {
  return (
    <div className="hero-section" ref={ref}>
      <div className="hero-inner">
        <h1 className="el-h1">
          Yo puedo
          <p className="visco" >Visualizar </p>
          Su Idea
        </h1>
        <p className="cuento">
          Cuento con el conocimiento y las herramientas necesarias
        </p>
        <a
          href="https://api.whatsapp.com/send?phone=573043405723&text=Hola%2C+quiero+más+informacion"
          target="_blank"
          rel="noopener noreferrer"
          className="button-static"
        >
          Contactame Ahora
        </a>
      </div>
    </div>
  );
});

export default HeroSection;

