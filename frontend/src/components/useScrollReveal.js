// src/components/useScrollReveal.js — Custom React hook
// Replaces the scroll reveal animation from Static/js/main.js.
// It uses the IntersectionObserver API (more efficient than the scroll event listener
// used in the original Flask project).

import { useEffect } from "react";

export default function useScrollReveal() {
  useEffect(() => {
    // Select all elements that should animate in — same selectors as main.js
    const revealElements = document.querySelectorAll(
      ".card, .service-category, .project-card, .contact-grid > *, .about-grid > *"
    );

    // Add the "reveal" class so CSS starts them as hidden (opacity: 0)
    revealElements.forEach((el) => el.classList.add("reveal"));

    // IntersectionObserver fires when an element enters the viewport
    // Replaces the scroll event listener + getBoundingClientRect() in main.js
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active");
          }
        });
      },
      { threshold: 0.1 } // trigger when 10% of element is visible
    );

    revealElements.forEach((el) => observer.observe(el));

    // Cleanup when the component unmounts
    return () => observer.disconnect();
  }, []);
}
