
import { useState, useEffect } from "react";
import "./header.css";

const Header = () => {
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
               {/* Botón de menú hamburguesa solo en móvil */}
        {isMobile && (
          <button className="menu-button" onClick={toggleMenu}>
            ☰
          </button>
        
        )}
        <span className="logo-rtx"> <img src="./logo.png" alt="Logo" width="140px" />   </span>
       
        {/* Renderizado condicional de los menús */}
        {isMobile ? (
          <ul className={`nav-links-mobile ${menuOpen ? "active" : ""}`}> 
            

            <div className="header-menu-mobile"> 

              <div className="logo-menu-mobile"> <img src="./logo.png" alt="Logo" width="140px" />
                             </div>
          <button className="button-close-menu" onClick={toggleMenu}>
             x
          </button>
           </div>


            <li className="li-mobile">
              <button className="btn1">Home </button> 
            </li>
            <li className="li-mobile">
              <button className="btn2">Servicios</button>
            </li>
            <li className="li-mobile">
              <button className="btn3">Proyectos</button>
              <span className="check">Recientes</span>
            </li>
            
            
<li className="li-life">
 {/*Btn-6*/}<button className="btn6">Contactame ahora</button>
            </li>
            




                     </ul>
        ) : (
             
          <ul className="nav-links-desktop">
                      <div className="logo">
              <img src="./logo.png" alt="Logo" width="120px" />
            </div>

            <li className="li-desktop" >
 {/*Btn-1*/} <button className="button1-desktop">Home</button>
            </li>
            
              <li className="li-desktop">
 {/*Btn-2*/}<button className="button2-desktop">
              Servicios
             </button>
            </li>
            
                <li className="li-desktop">
 {/*Btn-3*/}   <button className="button3-desktop">Proyectos
              <span className="check">Recientes</span>
              </button>
            </li>
            
                       

              <li className="li-desktop">
 {/*Btn-6*/}<button className="button6-desktop">Contactame ahora</button>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Header;

