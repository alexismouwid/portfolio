import React, { forwardRef , useEffect, useState} from 'react';
import './ContentSection.css';

const ContentSection = forwardRef((props, ref) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) ;
    }; 

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <>
      <div className="content-container" ref={ref}>
        {/* Sección 1: Hero */}
        <div className="hero-section">
          <h1 style={{ fontSize: '3rem' }}>
            Yo puedo 
            <p style={{ color: '#FFC300', fontSize: '3rem' }}>Visualizar </p>
            Su Idea
          </h1>
          <p style={{color: 'white', fontSize: '1.2rem', position: 'relative', top: '2rem' }}>
            Cuento con el conocimiento y las herramientas necesarias
          </p>
          <button className="cta-button">Contactame Ahora</button>
        </div>

        {/* Sección 2: Perfil */}
        <div className="profile-section">
          <div className="profile-image">
            <img className="perfil" src="./test.jpg" alt="Perfil" />
          </div>
          <div className="profile-info">
            <h2>Alexis Vega</h2>
            <p className="profile-title">Desarrollador</p>

          </div>
          {isMobile && (
                        
              <div className="skill-item-busquedaMobile">
                <span className="skill-icon-busquedaMobile">Buscame en</span>
                <a 
                  href="https://www.linkedin.com/in/alexis-vega-3b4437333/" 
                  target="_blank"   
                  rel="noopener noreferrer" 
                  className='links-redesMobile'> 
                  <img 
                    width="80px" height="80px" 
                    src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="Linkedin" 
                    className="skill-icon" 
                  /> 
                </a>
                <a 
                  href="https://github.com/alexismouwid" 
                  target="_blank"   
                  rel="noopener noreferrer" 
                  className='links-redesMobile'>
                  <img 
                    width="80px" height="80px" 
                    src="./git.png" alt="Github" 
                    className="skill-icon" 
                  />
                </a>
              </div>
          )}
        </div>

        {/* Sección 3: Habilidades */}
        <div className="skills-section">
          <h3 className="skills-titulo">Software Experience</h3>
          <div className="skills-grid">
            {/* Columna 1 */}
            <div className="skill-column">
              <div className="skill-item">
                <span className="skill-namej">Javascript</span>
                <img width="30px" height="30px" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" alt="Javascript" className="skill-icon" />
              </div>
              <div className="skill-item">
                <span className="skill-nameh">HTML5</span>
                <img width="30px" height="30px" src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML5" className="skill-icon" />
              </div>
              <div className="skill-item">
                <span className="skill-icon">CSS</span>
                <img width="30px" height="30px" src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="CSS" className="skill-icon" />
              </div>
              <div className="skill-item">
                <span className="skill-icon">React</span>
                <img width="30px" height="30px" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" className="skill-icon" />
              </div>
              <div className="skill-item">
                <span className="skill-icon">Node.js</span>
                <img width="30px" height="30px" src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Node.js" className="skill-icon" />
              </div>
              <div className="skill-item">
                <span className="skill-icon">MongoDB</span>
                <img width="30px" height="30px" src="./mongodb.png" alt="MongoDB" className="skill-icon" />
              </div>
              <div className="skill-item">
                <span className="skill-icon">SQL</span>
                <img width="30px" height="30px" src="./sql.png" alt="SQL" className="skill-icon" />
              </div>
            </div>

            {/* Columna 2 */}
            <div className="skill-column">
              <div className="skill-item">
                <span className="skill-icon">Figma</span>
                <img width="30px" height="30px" src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" alt="Figma" className="skill-icon" />
              </div>
              <div className="skill-item">
                <span className="skill-icon">Github</span>
                <img width="30px" height="30px" src="./git.png" alt="Github" className="skill-icon" />
              </div>
              <div className="skill-item">
                <span className="skill-icon">Postman</span>
                <img width="30px" height="30px" src="./postman.png" alt="Postman" className="skill-icon" />
              </div>
              <div className="skill-item">
                <span className="skill-icon">Neovim</span>
                <img width="30px" height="30px" src="./neovim.png" alt="Nvim" className="skill-icon" />
              </div>
              <div className="skill-item">
                <span className="skill-icon">Linux</span>
                <img width="30px" height="30px" src="./linux.png" alt="Linux" className="skill-icon" />
              </div>
              {isMobile === false && (



              )}           </div>
          </div>
        </div>
      </div>
      <h2 className="subtexto-info">
        Cuenta con experiencia en el diseño de interfaces y experiencias 
        digitales para web, apps móviles y software a medida.
      </h2>
    </>
  );
});

export default ContentSection;

