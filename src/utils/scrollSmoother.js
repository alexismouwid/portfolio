// src/utils/gsapConfig.js
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollSmoother from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollSmoother);

export const useScrollSmoother = () => {
  useEffect(() => {
    console.log('useScrollSmoother');
    // Prevenir doble inicialización
    if (ScrollSmoother.get()) return;

    ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 16, // velocidad de suavizado
      effects: true, // activa data-speed y data-lag
    });
  }, []);
};

