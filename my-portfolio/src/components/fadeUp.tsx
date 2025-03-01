import { useEffect } from "react";
import "../App.css";

const useFadeUp = () => {
  useEffect(() => {
    const winHeightPadded = window.innerHeight * 0.80;

    // Throttle function to optimize performance
    const throttle = (func: () => void, delay: number) => {
      let lastCall = 0;
      return () => {
        const now = new Date().getTime();
        if (now - lastCall >= delay) {
          lastCall = now;
          func();
        }
      };
    };

    // Scroll animation logic
    const fadeUpAnimation = () => {
      const elements = document.querySelectorAll<HTMLElement>(".element-fade-up:not(.triggered)");

      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const offsetTop = rect.top + window.scrollY;

        if (window.scrollY + winHeightPadded > offsetTop) {
          const timeout = parseInt(element.getAttribute("data-timeout") || "0", 10);
          setTimeout(() => {
            element.classList.add("triggered", element.getAttribute("data-animation") || "");
          }, timeout);
        }
      });
    };

    const throttledFadeUp = throttle(fadeUpAnimation, 100);
    window.addEventListener("scroll", throttledFadeUp);
    fadeUpAnimation(); // Run once on mount

    return () => {
      window.removeEventListener("scroll", throttledFadeUp);
    };
  }, []);
};

export default useFadeUp;
