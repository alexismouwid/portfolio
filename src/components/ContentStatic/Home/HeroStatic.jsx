import React, { forwardRef } from 'react';

const HeroStatic = forwardRef((props, ref) => {
  return (
          <div className="heroe-static ejeY " >
          <h1 style={{ fontSize: '3rem' }}>
            Yo puedo 
            <h2 className="static-visu" style={{ color: ' #8CDA05', fontSize: '2.9rem' }}>Visualizar </h2>
            Su Idea
          </h1>
          <p style={{color: 'white', fontSize: '1.2rem', position: 'relative', top: '2rem' }}>
            Cuento con el conocimiento y las herramientas necesarias
          </p>
         <a href="https://api.whatsapp.com/send?phone=573043405723&text=Hola%2C+quiero+más+información" target="_blank" className="heroe-button">
  Contactame Ahora
</a>
        </div>

  );
});

export default HeroStatic;



