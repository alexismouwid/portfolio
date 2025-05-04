import { useEffect } from 'react';

/**
 * Hook que aplica clases 'visible' y 'hidden' a los elementos que coincidan con el selector.
 * 
 * @param {string} selector - El selector de los elementos a observar.
 */
export const useVisibilityObserver = (selector) => {
  useEffect(() => {
    console.log(`useVisibilityObserver: ${selector}`);
    const elements = document.querySelectorAll(selector);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          entry.target.classList.remove('hidden');
        } else {
          entry.target.classList.remove('visible');
          entry.target.classList.add('hidden');
        }
      });
    }, {
      threshold: 0.1,
    });

    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, [selector]);
};

