import React from 'react';
import './ContentSection.css';

function ContentSection() {
  return (
    <>
    <div className="content-container">
      {/* Sección 1: Hero */}
      <div className="hero-section">
        <h1 style={{ fontSize: '3rem'}}>Yo puedo 
          <p style={{ color: '#FFC300' , fontSize: '3rem'}}>Visualizar </p>
        Su Idea</h1>
        <p style={{ fontSize: '1rem', position: 'relative', top: '2rem' }}>Cuento con el conocimiento y las herramientas necesarias</p>
        <button className="cta-button">Contactame Ahora</button>
      </div>

      {/* Sección 2: Perfil */}
      <div className="profile-section">
        <div className="profile-image">
          {/* Espacio para la imagen */}
        </div>
       

        <div className="profile-info">
          <h2>Alexis Vega</h2>
          <p className="profile-title">Desarrollador</p>
        </div>
      </div>

      {/* Sección 3: Habilidades */}
      <div className="skills-section">
        <h3>Software Experience</h3>
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
            <div className="skill-item-busqueda">
              <span className="skill-icon-busqueda">Buscame en</span>

              <a 
              href="https://www.linkedin.com/in/alexis-vega-3b4437333/" 
              target="_blank"   
              rel="noopener noreferrer" 
              className='links-redes'> 
              <img 
              width="30px" height="30px" 
              src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="Linkedin" 
              className="skill-icon"/> 
              </a>

            <a 
              href="https://github.com/alexismouwid" 
              target="_blank"   
              rel="noopener noreferrer" 
              className='links-redes'>
              <img 
              width="30px" height="30px" 
              src="./git.png" alt="Github" 
              className="skill-icon" />
 </a>
                                                 </div>
            
          </div>
        </div>
      </div>

    </div>
      <h2 style={{textAlign: "center", backgroundColor: "black", color: "white",margin: '0'}}> Cuenta con experiencia en el diseño de interfaces y experiencias 
         digitales para web, apps móviles y software a medida. </h2>
    </>
  );
}

export default ContentSection;
