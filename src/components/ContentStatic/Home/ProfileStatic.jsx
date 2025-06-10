import React, { forwardRef } from 'react';

const ProfileStatic = forwardRef((props, ref) => {
  return (
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


  );
});

export default ProfileStatic;



