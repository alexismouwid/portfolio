import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
  
        <div className="logo">
          <span className="logo-text">ALEXIS.IO</span>
        </div>

        {/* Menú de navegación */}
        <nav className="nav-menu">
          <ul className="nav-list">
            <li><a href="#home" className="nav-link active">Home</a></li>
            <li><a href="#servicios" className="nav-link">Servicios</a></li>
            <li><a href="#proyectos" className="nav-link">Proyectos</a></li>
            <li><a href="#contacto" className="nav-link">

<button  style={{ position: 'relative', top: '-0.5rem',fontweight: 'bold', color: 'black', backgroundColor: '#FFC300' }} className="cta-button">Contactame Ahora</button>

            </a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
