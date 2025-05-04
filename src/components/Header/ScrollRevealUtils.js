import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

// Configuraciones predeterminadas para dispositivos de escritorio
const desktopConfigs = {
  header: {
    origin: 'right',
    duration: 1200,
    delay: 150,
    distance: '-200px',
    scale: 0,
    easing: 'ease',
    reset: true,
  }};

// Configuraciones para dispositivos móviles
const mobileConfigs = {
  header: {
    origin: 'bottom',
    duration: 800,
    delay: 100,
    distance: '-100px',
    scale: 0,
    easing: 'ease',
    reset: true,
  }};

// Hook personalizado para aplicar ScrollReveal a un elemento
export const useScrollReveal = (ref, sectionType, isMobile) => {
  useEffect(() => {
    if (!ref.current) return;
    
    // Seleccionar la configuración adecuada según el tipo de dispositivo
    const configs = isMobile ? mobileConfigs : desktopConfigs;
    const config = configs[sectionType];
    
    if (config) {
      ScrollReveal().reveal(ref.current, config);
    }
    
    // Cleanup function
    return () => {
      // ScrollReveal no tiene un método claro de limpieza, pero si fuera necesario
      // se podría agregar aquí
    };
  }, [ref, sectionType, isMobile]);
};

// Hook para detectar si el dispositivo es móvil
export const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };
    
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [breakpoint]);
  
  return isMobile;
};

// Faltaba la importación de useState
import { useState } from 'react';

