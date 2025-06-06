import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return visible ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full backdrop-blur-md bg-white/10 border border-white/20 shadow-lg hover:bg-white/20 transition duration-300 cursor-pointer"
      aria-label="Scroll to top"
    >
      <FaArrowUp className="text-white text-xl" />
    </button>
  ) : null;
};

export default BackToTopButton;
