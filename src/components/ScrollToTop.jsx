import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash, scroll to that element
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Otherwise, scroll to top when route changes
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant' // Use 'smooth' for smooth scrolling, 'instant' for immediate
      });
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
