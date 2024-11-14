import { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Mostrar el botón al hacer scrolldown
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Función para volver arriba
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        padding: "1rem",
        cursor: "pointer",
        transition: "all ease 0.5s",
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? "visible" : "hidden",
      }}
      className="btn btn-outline-dark d-none d-sm-block"
    >
      <i class="fa-solid fa-chevron-up"></i>
    </button>
  );
};

export default ScrollToTopButton;