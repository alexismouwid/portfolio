import React, { forwardRef } from 'react';

const HeroStatic = forwardRef((props, ref) => {
  return (
          <div className="heroe-static ejeY " >
          <h1 className="one-line">
            Yo puedo 
       
          <p className="second-line">Visualizar </p >
 <p className="three-line">Su idea</p>
 </h1> 
<p  className="four-line">
            Cuento con el conocimiento y las herramientas necesarias </p>
         <a href="https://api.whatsapp.com/send?phone=573043405723&text=Hola%2C+quiero+más+información" target="_blank" className="heroe-button">
  Contactame Ahora
</a>
        </div>

  );
});

export default HeroStatic;



