// useContentSectionAnimation.js
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function useContentSectionAnimation() {
  useGSAP(() => {
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

    // Aparece la sección hero
    tl.fromTo(".hero-inner",
      { scale: 1.2, autoAlpha: 0 },
      { scale: 1, autoAlpha: 1, duration: 2 }
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
      { scale: 1, autoAlpha: 1, duration: 2 }
    );

    tl.to(".profile-inner", {
      scale: 2,
      autoAlpha: 0,
      duration: 2
    });

    // Aparece la sección habilidades justo después
    tl.fromTo(".skills-section",
      { scale: 1.2, autoAlpha: 0 },
      { scale: 1, autoAlpha: 1, duration: 2 }
    );

    tl.to(".skills-section", {
      scale: 2,
      autoAlpha: 0,
      duration: 3
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
    tl.fromTo(".proyectos-container", 
      { scale: 1.2, autoAlpha: 0 },
      { scale: 1, autoAlpha: 1, duration: 2 }
    );

    tl.to(".proyectos-container", {
      scale: 2,
      autoAlpha: 0,
      duration: 3
    });

    // Controles de la animación
    window.play.onclick = () => {
      tl.play();
      window.log.innerHTML += 'play <br>';
    };

    window.pause.onclick = () => {
      tl.pause();
      window.log.innerHTML += 'pause <br>';
    };

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

  }, []);
}

