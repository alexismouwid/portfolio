import React, { useEffect, useState, forwardRef  } from "react";
import  { useIsMobile  } from "../../../utils/useIsMobile";
import './Proyectos.css';


const Proyectos = ({  isMobile }) => {

isMobile = useIsMobile();
  return (
    <section className="proyectos-container">
      
            
      <div className="proyectos-grid">
        {/* Proyecto 1 */}
<section className="proyecto1">
<h1 className="proyectos-titulo">Mis proyectos recientes</h1>
  
  {/* Proyecto 1 */}
        <div className="proyecto-box">
          <div className="imagen-placeholder">
            <img
              src="/paint.jpg"
              alt="paint"
              className="image-proyect"
            />
          </div>
          <div className="proyecto-desc">
            <span>
              Una aplicación que permite al usuario trazar y dibujar figuras geométricas.
            </span>
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


      </section>

        {/* Proyecto 2 */}
        <section className="proyecto2">
           <div className="proyecto-box">
          <div className="imagen-placeholder">
            <img
              src="/ecomerce.jpg"
              alt="e-commerce"
              className="image-proyect"
            />
          </div>
          <div className="proyecto-desc">
            <span>
              Tienda virtual con catálogos de productos, carrito de compras, login y registro,
              autenticación y encriptación.
            </span>
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



        </section>

                       {/* Proyecto 3 */}
      <section className="proyecto3"> 

 <div className="proyecto-box">
          <div className="imagen-placeholder">
            <img
              src="/avianca.jpg"
              alt="avianca"
              className="image-proyect"
            />
          </div>
          <div className="proyecto-descA">
            <span>
              Este es el clon de la web oficial de Avianca, tiene grandes detalles, animaciones y funcionalidades.
            </span>
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

      </section>
             </div>

      
    </section>
  );
};

export default Proyectos;

