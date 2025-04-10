
import { useState, useEffect } from "react";
import "./header.css";

const Header = ({ scrollToHome, scrollToServicios, scrollToProyectos, scrollToPreguntas }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) setMenuOpen(false);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [menuOpen]);
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {isMobile && (
          <button className="menu-button" onClick={toggleMenu}>
            ☰
          </button>
        )}

        <span className="logo-rtx">
          <img src="./logo.png" alt="Logo" width="140px" />
        </span>

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
              <button onClick={scrollToHome) className="btn1">Home</button>
            </li>
            <li className="li-mobile">
              <button onClick={scrollToServicios} className="btn2">Servicios</button>
            </li>
            <li className="li-mobile">
              <button onClick={scrollToProyectos} className="btn3">Proyectos</button>
              <span className="check">Recientes</span>
            </li>
            <li className="li-mobile">
              <button onClick={scrollToPreguntas} className="btn4">Preguntas</button>
              <span className="check">Frecuentes</span>
            </li>
            <li className="li-life">
              <button className="btn6">Contactame ahora</button>
            </li>
          </ul>
        ) : (
          <ul className="nav-links-desktop">
            <div className="logo">
              <img src="./logo.png" alt="Logo" width="120px" />
            </div>

            <li className="li-desktop">
              <button onClick={scrollToHome} className="button1-desktop">Home</button>
            </li>
            <li className="li-desktop">
              <button onClick={scrollToServicios} className="button2-desktop">Servicios</button>
            </li>
            <li className="li-desktop">
              <button onClick={scrollToProyectos} className="button3-desktop">
                Proyectos
                <span className="check">Recientes</span>
              </button>
            </li>
            <li className="li-desktop">
              <button onClick={scrollToPreguntas} className="button4-desktop">Preguntas</button>
              <span className="check">Frecuentes</span>
            </li>
            <li className="li-desktop">
              <button className="button6-desktop">Contactame ahora</button>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Header;

