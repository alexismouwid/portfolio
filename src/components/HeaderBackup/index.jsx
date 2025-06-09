
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
            <li className="li-desktop ejeL">
            <a href="https://api.whatsapp.com/send?phone=573043405723&text=Hola%2C+quiero+más+información" target="_blank" className="button6-desktop">
            Contactame Ahora
            </a> 
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Header;

