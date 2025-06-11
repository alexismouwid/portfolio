import React, { forwardRef, useRef , useEffect} from 'react';
import './ContentSection.css';
import { useVisibilityObserver } from '../../utils/useVisibilityObserver';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const ContentSection = forwardRef((props, ref) => {

  gsap.registerPlugin(useGSAP);

 
  useGSAP(() => {

     const splitText = new SplitText(".seccion-primaria p", { type: "words, chars, lines" });

    const splitText2 = new SplitText(".seccion-primaria h2", { type: "words, chars, lines" });
    
    const splitText3 = new SplitText(".perfil-title", { type: "words, chars, lines" });
const tl = gsap.timeline();
   
    tl.from(splitText2.chars, {
        duration: 0.5,
        y: 20,
        stagger: 0.1,
        opacity: 0,
				filter: "blur(10px)",

     })
.from(".perfil-image", {
	  	duration: 0.5,
			scale: .11,
	    opacity: 0,
    }, "<")


    .from(splitText.words, {
        duration: 0.5,
        y: 10,
        stagger: 0.1,
        opacity: 0,
        filter: "blur(10px)",
     })

      .from(".habilidad-column", {
      x: 500,
      y: 500,
      opacity: 0,
      duration: 1,
      
    }, "<")


        .from(splitText3.words, {
        duration: 0.1,
        y: 20,
        stagger: 0.1,
        opacity: 0,
        filter: "blur(10px)",
        }, ">")

        .from(".habilidad-item-busqueda", { 
        y: 500,
        opacity: 0,
        duration: 1,
        
      }, "<")
  }, []);
  useVisibilityObserver(".ejeY");
  useVisibilityObserver(".ejeL");
  useVisibilityObserver(".ejeX");
  return (
    <>
      <div className="home-space">
 <div className="home-contenedor" ref={ref}>
        {/* Sección 1: Hero */}
        <div className="seccion-primaria ejeY " >
          <h1 style={{ fontSize: '3rem' }}>
            Yo puedo 
            <h2 className="visualizar" style={{ color: ' #8CDA05', fontSize: '2.9rem' }}>Visualizar </h2>
            Su Idea
          </h1>
          <p style={{color: 'white', fontSize: '1.2rem', position: 'relative', top: '2rem' }}>
            Cuento con el conocimiento y las herramientas necesarias
          </p>
         <a href="https://api.whatsapp.com/send?phone=573043405723&text=Hola%2C+quiero+más+información" target="_blank" className="cta-button">
  Contactame Ahora
</a>
        </div>

        {/* Sección 2: Perfil */}
        <div className="static-perfil ejeY" >
          <div className="perfil-image">
            <img className="perfil" src="./test.jpg" alt="Perfil" />
          </div>
          <div className="perfil-info">
            <h2>Alexis Vega</h2>
            <p className="perfil-title">Desarrollador web en formación continua, con experiencia práctica y pasión por aprender. Busco crecer y aportar en un equipo con grandes desafíos.</p>
            <div className="habilidad-item-busqueda ">
              <span className="buscame-en">Buscame en</span>
              <a 
                href="https://www.linkedin.com/in/alexis-vega-3b4437333/" 
                target="_blank"   
                rel="noopener noreferrer" 
                className='links-redes'> 
                <img 
                  width="35px" height="35px" 
                  src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="Linkedin" 
                  className="habilidad-icon" 
                /> 
              </a>
              <a 
                href="https://github.com/alexismouwid" 
                target="_blank"   
                rel="noopener noreferrer" 
                className='links-redes'>
                <img 
                  width="35px" height="35px" 
                  src="./git.png" alt="Github" 
                  className="habilidad-icon" 
                />
              </a>
            </div> 
          </div>
        </div>

        {/* Sección 3: Habilidades */}
        <div className="habilidades-section ejeY">
          <h3 className="software-experience">Software Experience</h3>
          <div className="habilidades-grid">
            {/* Columna 1 */}
            <div className="habilidad-column">
              <div className="habilidad-item">
                <span className="habilidad-namej">Javascript</span>
                <img width="35px" height="35px" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" alt="Javascript" className="habilidad-icon" />
              </div>
              <div className="habilidad-item">
                <span className="habilidad-nameh">HTML5</span>
                <img width="35px" height="35px" src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML5" className="habilidad-icon" />
              </div>
              <div className="habilidad-item">
                <span className="habilidad-icon">CSS</span>
                <img width="35px" height="35px" src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="CSS" className="habilidad-icon" />
              </div>
              <div className="habilidad-item">
                <span className="habilidad-icon">React</span>
                <img width="35px" height="35px" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" className="habilidad-icon" />
              </div>
              <div className="habilidad-item">
                <span className="habilidad-icon">Node.js</span>
                <img width="35px" height="35px" src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Node.js" className="habilidad-icon" />
              </div>
              <div className="habilidad-item">
                <span className="habilidad-icon">MongoDB</span>
                <img width="35px" height="35px" src="./mongodb.png" alt="MongoDB" className="habilidad-icon" />
              </div>
                          </div>

            {/* Columna 2 */}
            <div className="habilidad-column">
              <div className="habilidad-item">
                <span className="habilidad-icon">Figma</span>
                <img width="35px" height="35px" src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" alt="Figma" className="habilidad-icon" />
              </div>
              <div className="habilidad-item">
                <span className="habilidad-icon">Github</span>
                <img width="35px" height="35px" src="./git.png" alt="Github" className="habilidad-icon" />
              </div>
              <div className="habilidad-item">
                <span className="habilidad-icon">Postman</span>
                <img width="35px" height="35px" src="./postman.png" alt="Postman" className="habilidad-icon" />
              </div>
              <div className="habilidad-item">
                <span className="habilidad-icon">Neovim</span>
                <img width="35px" height="35px" src="./neovim.png" alt="Nvim" className="habilidad-icon" />
              </div>
              <div className="habilidad-item">
                <span className="habilidad-icon">Linux</span>
                <img width="35px" height="35px" src="./linux.png" alt="Linux" className="habilidad-icon" />
              </div>
<div className="habilidad-item">
                <span className="habilidad-icon">Docker</span>
                <img width="35px" height="35px" src="./docker.png" alt="SQL" className="habilidad-icon" />
              </div>

            </div>
          </div>
        </div>
      </div>
      </div>
              </>
  );
});

export default ContentSection;
