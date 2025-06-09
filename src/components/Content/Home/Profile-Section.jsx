// src/components/ContentSection/ProfileSection.jsx
import React from 'react';

const ProfileSection = () => (
  <div className="profile-section">

    <div className="profile-inner"> 

 <div className="profile-image">
      <img className="perfil" src="./test.jpg" alt="Perfil" />
    </div>
    <div className="profile-info">
      <h2>Alexis Vega</h2>
      <p className="profile-title">
        Desarrollador web en formación continua, con experiencia práctica y pasión por aprender. Busco crecer y aportar en un equipo con grandes desafíos.
      </p>
      <div className="skill-item-busqueda">
        <span className="buscame-en">Buscame en</span>
        <a href="https://www.linkedin.com/in/alexis-vega-3b4437333/" target="_blank" rel="noopener noreferrer" className="links-redes">
          <img width="45px" height="45px" src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="Linkedin" className="skill-icon" />
        </a>
        <a href="https://github.com/alexismouwid" target="_blank" rel="noopener noreferrer" className="links-redes">
          <img width="45px" height="45px" src="./git.png" alt="Github" className="skill-icon" />
        </a>
      </div>


    </div>
   

         </div>
  </div>
);

export default ProfileSection;

