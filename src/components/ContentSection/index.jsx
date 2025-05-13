import React, { forwardRef, useRef , useEffect} from 'react';
import './ContentSection.css';
import { useVisibilityObserver } from '../../utils/useVisibilityObserver';


const ContentSection = forwardRef((props, ref) => {

  useVisibilityObserver(".ejeY");
  return (
    <>
      <div className="content-principal">
 <div className="content-container" ref={ref}>
        {/* Sección 1: Hero */}
        <div className="hero-section ejeY" >
          <h1 style={{ fontSize: '3rem' }}>
            Yo puedo 
            <p style={{ color: ' #8CDA05', fontSize: '3rem' }}>Visualizar </p>
            Su Idea
          </h1>
          <p style={{color: 'white', fontSize: '1.2rem', position: 'relative', top: '2rem' }}>
            Cuento con el conocimiento y las herramientas necesarias
          </p>
         <a href="https://api.whatsapp.com/send?phone=573043405723&text=Hola%2C+quiero+más+información" target="_blank" class="cta-button">
  Contactame Ahora
</a>
        </div>

        {/* Sección 2: Perfil */}
        <div className="profile-section ejeY" >
          <div className="profile-image">
            <img className="perfil" src="./test.jpg" alt="Perfil" />
          </div>
          <div className="profile-info">
            <h2>Alexis Vega</h2>
            <p className="profile-title">Desarrollador</p>
            <div className="skill-item-busqueda">
              <span className="buscame-en">Buscame en</span>
              <a 
                href="https://www.linkedin.com/in/alexis-vega-3b4437333/" 
                target="_blank"   
                rel="noopener noreferrer" 
                className='links-redes'> 
                <img 
                  width="45px" height="45px" 
                  src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="Linkedin" 
                  className="skill-icon" 
                /> 
              </a>
              <a 
                href="https://github.com/alexismouwid" 
                target="_blank"   
                rel="noopener noreferrer" 
                className='links-redes'>
                <img 
                  width="45px" height="45px" 
                  src="./git.png" alt="Github" 
                  className="skill-icon" 
                />
              </a>
            </div> 
          </div>
        </div>

        {/* Sección 3: Habilidades */}
        <div className="skills-section ejeY">
          <h3 className="software-experience">Software Experience</h3>
          <div className="skills-grid">
            {/* Columna 1 */}
            <div className="skill-column">
              <div className="skill-item">
                <span className="skill-namej">Javascript</span>
                <img width="40px" height="40px" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" alt="Javascript" className="skill-icon" />
              </div>
              <div className="skill-item">
                <span className="skill-nameh">HTML5</span>
                <img width="45px" height="45px" src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML5" className="skill-icon" />
              </div>
              <div className="skill-item">
                <span className="skill-icon">CSS</span>
                <img width="45px" height="45px" src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="CSS" className="skill-icon" />
              </div>
              <div className="skill-item">
                <span className="skill-icon">React</span>
                <img width="45px" height="45px" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" className="skill-icon" />
              </div>
              <div className="skill-item">
                <span className="skill-icon">Node.js</span>
                <img width="45px" height="45px" src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Node.js" className="skill-icon" />
              </div>
              <div className="skill-item">
                <span className="skill-icon">MongoDB</span>
                <img width="45px" height="45px" src="./mongodb.png" alt="MongoDB" className="skill-icon" />
              </div>
                          </div>

            {/* Columna 2 */}
            <div className="skill-column">
              <div className="skill-item">
                <span className="skill-icon">Figma</span>
                <img width="45px" height="45px" src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" alt="Figma" className="skill-icon" />
              </div>
              <div className="skill-item">
                <span className="skill-icon">Github</span>
                <img width="45px" height="45px" src="./git.png" alt="Github" className="skill-icon" />
              </div>
              <div className="skill-item">
                <span className="skill-icon">Postman</span>
                <img width="45px" height="45px" src="./postman.png" alt="Postman" className="skill-icon" />
              </div>
              <div className="skill-item">
                <span className="skill-icon">Neovim</span>
                <img width="45px" height="45px" src="./neovim.png" alt="Nvim" className="skill-icon" />
              </div>
              <div className="skill-item">
                <span className="skill-icon">Linux</span>
                <img width="45px" height="45px" src="./linux.png" alt="Linux" className="skill-icon" />
              </div>
<div className="skill-item">
                <span className="skill-icon">SQL</span>
                <img width="45px" height="45px" src="./sql.png" alt="SQL" className="skill-icon" />
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
