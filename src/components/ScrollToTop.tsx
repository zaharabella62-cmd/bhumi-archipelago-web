import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // A small timeout ensures the DOM is painted before scrolling
    setTimeout(() => {
      if (hash) {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  }, [pathname, hash]);

  return null;
}
