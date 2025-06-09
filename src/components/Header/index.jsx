
import { useState, useEffect , useRef} from "react";
import "./header.css";
import { useIsMobile}  from "../../utils/useIsMobile";
import { useVisibilityObserver } from "../../utils/useVisibilityObserver";

const Header = ({ menuOpen, setMenuOpen, scrollToHome, scrollToServicios, scrollToProyectos, scrollToPreguntas }) => {

  useVisibilityObserver(".ejeL");
  useVisibilityObserver(".ejeX");

  const headerRef = useRef(null);

 const isMobile = useIsMobile();
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

 

  const handleScrollAndClose = (scrollFn) => {
    setMenuOpen(false); // cerrar menú
    setTimeout(() => {
      scrollFn(); // hacer scroll después de cerrar
    }, 300); // dar tiempo a la animación de cierre
  };

  return (
    <nav className="navbar " >
      <div className="navbar-container">
        {isMobile && (
          <button className="menu-button" onClick={toggleMenu}>
            ☰
          </button>
        )}

        

        {isMobile ? (
          <ul className={`nav-links-mobile ${menuOpen ? "active" : ""}`}>
            <div className="header-menu-mobile">
              <div className="logo-menu-mobile">
                <img src="./logo.png" alt="Logo" width="140px" />
              </div>
              <button className="button-close-menu" onClick={toggleMenu}>
                x
              </button>
            </div>

            <div className="mobile-search ">
        <a href="https://www.linkedin.com/in/alexis-vega-3b4437333/" target="_blank" rel="noopener noreferrer" className="links-redes">
          <img width="55px" height="55px" src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="Linkedin" className="skill-icon" />
        </a>
        <a href="https://github.com/alexismouwid" target="_blank" rel="noopener noreferrer" className="links-redes">
          <img width="55px" height="55px" src="./git.png" alt="Github" className="skill-icon" />
        </a>
      </div>
           
          </ul>
        ) : (
          <ul className="nav-links-desktop ">
            <div className="logo">
              <img src="./logo.png" alt="Logo" width="120px" />
            </div>

              <div className="searchhere ejeL">
        <a href="https://www.linkedin.com/in/alexis-vega-3b4437333/" target="_blank" rel="noopener noreferrer" className="links-redes">
          <img width="45px" height="45px" src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="Linkedin" className="skill-icon" />
        </a>
        <a href="https://github.com/alexismouwid" target="_blank" rel="noopener noreferrer" className="links-redes">
          <img width="45px" height="45px" src="./git.png" alt="Github" className="skill-icon" />
        </a>
      </div>
         </ul>
        )}
      </div>
    </nav>
  );
};

export default Header;

