import React, { useEffect, useState, forwardRef , useRef} from "react";
import "./ProyectosRecientes.css";
import ScrollReveal from "scrollreveal";

const ProyectosRecientes = forwardRef((props, ref) => {
  const [isMobile, setIsMobile] = useState(false);
  const proyectosRef = useRef(null);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile(); // Check on mount

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  useEffect(() => {
    const config = {
      origin: 'bottom',
      duration: 1000,
      delay: 150,
      distance: '-200px',
      scale: 0,
      easing: 'ease',
      reset: false,
    };

    ScrollReveal().reveal(proyectosRef.current, config);
  })

  return (
    <section className="proyectos-container" >
      <h2 className="proyectos-titulo">Mis proyectos recientes</h2>
      <div  ref={ref} className="proyectos-grid" ref={proyectosRef}>
        {/* Proyecto 1 */}
        <div className="proyecto-box">
          <div className="imagen-placeholder">
            <img
              src={isMobile ? "/paint-mobile.jpg" : "/paint.jpg"}
              alt="paint"
              className="image-proyect"
            />
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
        <div className="proyecto-box">
          <div className="imagen-placeholder">
            <img
              src={isMobile ? "/ecomerce-mobile.jpg" : "/ecomerce.jpg"}
              alt="e-commerce"
              className="image-proyect"
            />
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
        <div className="proyecto-box">
          <div className="imagen-placeholder">
            <img
              src={isMobile ? "/avianca-mobile.jpg" : "/avianca.jpg"}
              alt="avianca"
              className="image-proyect"
            />
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
        <button className="proyecto-boton">
          ¡Empecemos a discutir sobre tu proyecto!
        </button>
      </div>
    </section>
  );
});

export default ProyectosRecientes;

