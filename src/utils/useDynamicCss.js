// utils/useDynamicCss.js
import { useEffect } from 'react';

export const useDynamicCss = (href, id) => {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.id = id;
    document.head.appendChild(link);

    return () => {
      const existingLink = document.getElementById(id);
      if (existingLink) existingLink.remove();
    };
  }, [href, id]);
};

