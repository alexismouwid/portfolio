import React, { forwardRef } from 'react';
import './Hero-section.css';
 
const HeroSection = forwardRef((props, ref) => {
  return (
    <div className="hero-section" ref={ref}>
      <div className="hero-inner">
        <h1 style={{ fontSize: '3rem' }}>
          Yo puedo
          <p className="visualizar" style={{ color: '#BCDA05', fontSize: '2.9rem' }}>Visualizar </p>
          Su Idea
        </h1>
        <p style={{ color: 'white', fontSize: '1.2rem', position: 'relative', top: '2rem' }}>
          Cuento con el conocimiento y las herramientas necesarias
        </p>
        <a
          href="https://api.whatsapp.com/send?phone=573043405723&text=Hola%2C+quiero+más+informacion"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
        >
          Contactame Ahora
        </a>
      </div>
    </div>
  );
});

export default HeroSection;

