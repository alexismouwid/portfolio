// useContentSectionAnimation.js
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);


export default function useScrollTrigger() {
  useGSAP(() => {

    gsap.fromTo(".hero-inner",
      { scale: 1.2, autoAlpha: 0 },
      { scale: 1, 
        autoAlpha: 1,
        duration: 0.5,
        ease: "power3.out" 
      }

    )

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".content-container",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        pin: true,
        pinSpacing: false // <- esta línea es clave

      }
    });

    tl.fromTo(".hero-inner",
      { scale: 1.2, autoAlpha: 0 },
      { scale: 1, autoAlpha: 1, duration: 3 }
    );
    // Desaparece la sección hero
    tl.to(".hero-inner", {
      scale: 2,
      autoAlpha: 0,
      duration: 2
    });

    // Aparece la sección perfil justo después
    tl.fromTo(".profile-inner",
      { scale: 0.4, autoAlpha: 0 },
      { scale: 1, autoAlpha: 1, duration: 3 }
    );

    tl.to(".profile-inner", {
      scale: 2,
      autoAlpha: 0,
      duration: 2
    });

    // Aparece la sección habilidades justo después
    tl.fromTo(".skills-inner",
      { scale: 1.2, autoAlpha: 0 },
      { scale: 1, autoAlpha: 1, duration: 4 }
    );

    tl.to(".skills-inner", {
      scale: 2,
      autoAlpha: 0,
      duration: 4
    });

    // Aparece y desaparece el título de servicios
    tl.fromTo(".serv-title",
      { scale: 1.2, autoAlpha: 0 },
      { scale: 1, autoAlpha: 1, duration: 2 }
    );

    tl.to(".serv-title", {
      scale: 2,
      autoAlpha: 0,
      duration: 3
    });

    // Aparece y desaparece la sección de proyectos
    tl.fromTo(".proyecto1", 
      { scale: 1.2, autoAlpha: 0 },
      { scale: 1, autoAlpha: 1, duration: 2 }
    );

    tl.to(".proyecto1", {
      scale: 2,
      autoAlpha: 0,
      duration: 3
    });
// Aparece y desaparece la sección de proyectos
    tl.fromTo(".proyecto2", 
      { scale: 1.2, autoAlpha: 0 },
      { scale: 1, autoAlpha: 1, duration: 2 }
    );

    tl.to(".proyecto2", {
      scale: 2,
      autoAlpha: 0,
      duration: 3
    });
// Aparece y desaparece la sección de proyectos
    tl.fromTo(".proyecto3", 
      { scale: 1.2, autoAlpha: 0 },
      { scale: 1, autoAlpha: 1, duration: 2 }
    );

    tl.to(".proyecto3", {
      scale: 2,
      autoAlpha: 0,
      duration: 3
    });
    // Aparece y desaparece la sección de proyectos
    tl.fromTo(".preguntas-contenedor", 
      { scale: 1.2, autoAlpha: 0 },
      { scale: 1, autoAlpha: 1, duration: 2 }
    );

    tl.to(".preguntas-contenedor", {
      scale: 2,
      autoAlpha: 0,
      duration: 3
    });


    // MODO DEV Controles de la animación
    /*window.play.onclick = () => {
      tl.play();
      window.log.innerHTML += 'play <br>';
    };

    window.pause.onclick = () => {
      tl.pause();
      window.log.innerHTML += 'pause <br>';
    };
  /*
    window.resume.onclick = () => {
      tl.resume();
      window.log.innerHTML += 'resume <br>';
    };

    window.reverse.onclick = () => {
      tl.reverse();
      window.log.innerHTML += 'reverse <br>';
    };

    window.restart.onclick = () => {
      tl.restart();
      window.log.innerHTML += 'restart <br>';
    };

    window.turbo.onclick = () => {
      tl.timeScale(2);
      window.log.innerHTML += 'turbo <br>';
    }; 
     <footer>
          <button id="play">reproducir</button>
          <button id="pause">pausar</button>
          <button id="resume">resumir</button>
          <button id="reverse">revertir</button>
          <button id="restart">reiniciar</button>
          <button id="turbo">turbo</button>
        </footer> 
*/

   }, []);
}

