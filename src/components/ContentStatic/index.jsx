import React, { forwardRef, useRef , useEffect} from 'react';
import './ContentStatic.css';
import { useVisibilityObserver } from '../../utils/useVisibilityObserver';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const ContentStatic = forwardRef((props, ref) => {

  gsap.registerPlugin(useGSAP);

 
  useGSAP(() => {

     const text1 = new SplitText(".hero-static p", { type: "words, chars, lines" });

    const text2 = new SplitText(".hero-static h2", { type: "words, chars, lines" });
    
    const text3 = new SplitText(".profile-static", { type: "words, chars, lines" });
const tl = gsap.timeline();
   
    tl.from(text2.chars, {
        duration: 0.5,
        y: 20,
        stagger: 0.1,
        opacity: 0,
				filter: "blur(10px)",

     })
.from(".profile-image-static", {
	  	duration: 0.5,
			scale: .11,
	    opacity: 0,
    }, "<")


    .from(text1.words, {
        duration: 0.5,
        y: 10,
        stagger: 0.1,
        opacity: 0,
        filter: "blur(10px)",
     })

    

        .from(text3.words, {
        duration: 0.1,
        y: 20,
        stagger: 0.03,
        opacity: 0,
        filter: "blur(10px)",
    }, ">")
    .from(".grid-static", {
      x: 500,
      y: 500,
      opacity: 0,
      duration: 1,
      
    }, 2)
      .from(".skill-item", { 
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
      <div className="static-principal">
 <div className="static-content" ref={ref}>
        {/* Sección 1: Hero */}
        <div className="hero-static ejeY " >
          <h1 style={{ fontSize: '3rem' }}>
            Yo puedo 
            <h2 className="static-visu" style={{ color: ' #8CDA05', fontSize: '2.9rem' }}>Visualizar </h2>
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
        <div className="profile-static ejeY" >
          <div className="image-container">
            <img className="perfil" src="./test.jpg" alt="Perfil" />
          </div>
          <div className="details-container">
            <h2>Alexis Vega</h2>
            <span className="descripccion">Desarrollador web en formación continua, con experiencia práctica y pasión por aprender. Busco crecer y aportar en un equipo con grandes desafíos.</span>
            <div className="contacto">
              <span className="buscame-en">Buscame en</span>
              <a 
                href="https://www.linkedin.com/in/alexis-vega-3b4437333/" 
                target="_blank"   
                rel="noopener noreferrer" 
                className='links-redes'> 
                <img 
                  width="35px" height="35px" 
                  src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="Linkedin" 
                  className="skill-static" 
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
                  className="skill-static" 
                />
              </a>
            </div> 
          </div>
        </div>

        {/* Sección 3: Habilidades */}
        <div className="skills-static ejeY">
          <h3 className="software-experience">Software Experience</h3>
          <div className="grid-static">
            {/* Columna 1 */}
            <div className="skill-column-static">
              <div className="skill-item">
                <span className="skill-namej">Javascript</span>
                <img width="35px" height="35px" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" alt="Javascript" className="skill-static" />
              </div>
              <div className="skill-item">
                <span className="skill-nameh">HTML5</span>
                <img width="35px" height="35px" src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML5" className="skill-static" />
              </div>
              <div className="skill-item">
                <span className="skill-static">CSS</span>
                <img width="35px" height="35px" src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="CSS" className="skill-static" />
              </div>
              <div className="skill-item">
                <span className="skill-static">React</span>
                <img width="35px" height="35px" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-static.svg" alt="React" className="skill-icon" />
              </div>
              <div className="skill-item">
                <span className="skill-static">Node.js</span>
                <img width="35px" height="35px" src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Node.js" className="skill-static" />
              </div>
              <div className="skill-item">
                <span className="skill-static">MongoDB</span>
                <img width="35px" height="35px" src="./mongodb.png" alt="MongoDB" className="skill-static" />
              </div>
                          </div>

            {/* Columna 2 */}
            <div className="skill-column-static">
              <div className="skill-item">
                <span className="skill-static">Figma</span>
                <img width="35px" height="35px" src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" alt="Figma" className="skill-static" />
              </div>
              <div className="skill-item">
                <span className="skill-static">Github</span>
                <img width="35px" height="35px" src="./git.png" alt="Github" className="skill-static" />
              </div>
              <div className="skill-item">
                <span className="skill-static">Postman</span>
                <img width="35px" height="35px" src="./postman.png" alt="Postman" className="skill-static" />
              </div>
              <div className="skill-item">
                <span className="skill-static">Neovim</span>
                <img width="35px" height="35px" src="./neovim.png" alt="Nvim" className="skill-static" />
              </div>
              <div className="skill-item">
                <span className="skill-static">Linux</span>
                <img width="35px" height="35px" src="./linux.png" alt="Linux" className="skill-static" />
              </div>
<div className="skill-item">
                <span className="skill-static">Docker</span>
                <img width="35px" height="35px" src="./docker.png" alt="SQL" className="skill-static" />
              </div>

            </div>
          </div>
        </div>
      </div>
      </div>
              </>
  );
});

export default ContentStatic;
