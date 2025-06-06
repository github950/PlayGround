import { useEffect } from 'react';

export default function SmoothScroll() {
  useEffect(() => {
    const smoothScrollTo = (target, duration = 1000) => {
      const start = window.pageYOffset;
      const end = document.querySelector(target)?.offsetTop || 0;
      const distance = end - start;
      let startTime = null;

      function animation(currentTime) {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease =
          progress < 0.5
            ? 2 * progress * progress
            : -1 + (4 - 2 * progress) * progress;
        window.scrollTo(0, start + distance * ease);
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      }

      requestAnimationFrame(animation);
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        smoothScrollTo(this.getAttribute('href'), 1200);
      });
    });

    return () => {
      links.forEach((anchor) => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return null; // No UI output
}
