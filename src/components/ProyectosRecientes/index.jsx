import React, { useEffect, useState, forwardRef  } from "react";
import "./ProyectosRecientes.css";
import { useVisibilityObserver } from "../../utils/useVisibilityObserver";

const ProyectosRecientes = forwardRef((props, ref) => {

  useVisibilityObserver(".ejeY");

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile(); // Check on mount

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  
   
  return (
    <section className="proyectos-container" >
      <h2 className="proyectos-titulo ejeY">Mis proyectos recientes</h2>
      <div  ref={ref} className="proyectos-grid" >
        {/* Proyecto 1 */}
        <div className="proyecto-box ejeY">
          <div className="imagen-placeholder">
            <img
              src={isMobile ? "/paint-mobile.jpg" : "/paint.jpg"}
              alt="paint"
              className="image-proyect"
            />
          </div>
          <div className="proyecto-desc"> 

            <span>Una aplicación que permite al usuario trazar y dibujar figuras geometricas. </span>
          </div>

          <div className="proyecto-detalle">

            <a
              href="https://new-paint-with-me.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="proyecto-link"
            >
              <img src="https://vercel.com/button" alt="Deploy with Vercel" />
            </a>
            <a
              href="https://github.com/alexismouwid/new-paint-with-me-?tab=readme-ov-file"
              target="_blank"
              rel="noopener noreferrer"
              className="proyecto-link github"
            >
              <img
                src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
                alt="GitHub"
              />
            </a>
          </div>
        </div>

        {/* Proyecto 2 */}
        <div className="proyecto-box ejeY">
          <div className="imagen-placeholder">
            <img
              src={isMobile ? "/ecomerce-mobile.jpg" : "/ecomerce.jpg"}
              alt="e-commerce"
              className="image-proyect"
            />
          </div>
<div className="proyecto-desc"> 

            <span>Tienda virtual con catalogos de productos, carrito de compras, login y register, autenticación y encriptación.</span>
          </div>

          <div className="proyecto-detalle">
            <a
              href="https://e-commerce-two-topaz-93.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="proyecto-link"
            >
              <img src="https://vercel.com/button" alt="Deploy with Vercel" />
            </a>
            <a
              href="https://github.com/alexismouwid/e-commerce"
              target="_blank"
              rel="noopener noreferrer"
              className="proyecto-link github"
            >
              <img
                src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
                alt="GitHub"
              />
            </a>
          </div>
        </div>

        {/* Proyecto 3 */}
        <div className="proyecto-box ejeY">
          <div className="imagen-placeholder">
            <img
              src={isMobile ? "/avianca-mobile.jpg" : "/avianca.jpg"}
              alt="avianca"
              className="image-proyect"
            />
          </div>
<div className="proyecto-descA"> 

            <span>Este es el clon de la web oficial de Avianca, tiene grandes detalles, animaciones y funcionalidades.</span>
          </div>


          <div className="proyecto-detalle">
            <a
              href="https://avianca-co-fn142.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="proyecto-link"
            >
              <img src="https://vercel.com/button" alt="Deploy with Vercel" />
            </a>
            <a
              href="https://github.com/alexismouwid/avianca.co"
              target="_blank"
              rel="noopener noreferrer"
              className="proyecto-link github"
            >
              <img
                src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
                alt="GitHub"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="proyecto-boton-container">
                <a href="https://api.whatsapp.com/send?phone=573043405723&text=Hola%2C+quiero+más+información" target="_blank" class="proyecto-boton ejeY">
            ¡Empecemos a discutir sobre tu proyecto!

            </a>
      </div>
    </section>
  );
});

export default ProyectosRecientes;

