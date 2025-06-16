
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
 {isMobile && ( 

            <div className="mobile-redes">
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

            <li className="li-mobile">
              <button onClick={() => handleScrollAndClose(scrollToHome)} className="btn1">Home</button>
            </li>
            <li className="li-mobile">
              <button onClick={() => handleScrollAndClose(scrollToServicios)} className="btn2">Servicios</button>
            </li>
            <li className="li-mobile">
              <button onClick={() => handleScrollAndClose(scrollToProyectos)} className="btn3">Proyectos</button>
              <span className="check">Recientes</span>
            </li>
            <li className="li-mobile">
              <button onClick={() => handleScrollAndClose(scrollToPreguntas)} className="btn4">Preguntas</button>
              <span className="check">Frecuentes</span>
            </li>
           
          </ul>
        ) : (
          <ul className="nav-links-desktop ">
            <div className="logo">
              <img src="./logo.png" alt="Logo" width="120px" />
            </div>

            <li className="li-desktop ejeL">
              <button onClick={scrollToHome} className="button1-desktop">Home</button>
            </li>
            <li className="li-desktop ejeL">
              <button onClick={scrollToServicios} className="button2-desktop">Servicios</button>
            </li>
            <li className="li-desktop ejeL">
              <button onClick={scrollToProyectos} className="button3-desktop">
                Proyectos
                <span className="check">Recientes</span>
              </button>
            </li>
            <li className="li-desktop ejeL">
              <button onClick={scrollToPreguntas} className="button4-desktop">Preguntas</button>
              <span className="check">Frecuentes</span>
            </li>

  <div className="header-contacto">
              <a 
                href="https://www.linkedin.com/in/alexis-vega-3b4437333/" 
                target="_blank"   
                rel="noopener noreferrer" 
                className='links-redes'> 
                <img 
                  width="45px" height="45px" 
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
                  width="45px" height="45px" 
                  src="./git.png" alt="Github" 
                  className="habilidad-icon" 
                />
              </a>
            </div> 
                     </ul>
        )}
      </div>
    </nav>
  );
};

export default Header;

