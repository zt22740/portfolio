import React, { useState, useEffect } from "react";
import "../styles/navbar.css";
import { FaSun, FaMoon } from "react-icons/fa";

interface NavbarProps {
  toggleTheme: () => void;
  theme: string;
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, theme }) => {
  const [activeSection, setActiveSection] = useState<string>("about");

  useEffect(() => {
    const handleScroll = () => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 2) {
        setActiveSection("languages");
        return;
      }

      if (window.scrollY < 100) {
        setActiveSection("about");
        return;
      }
      const sections = document.querySelectorAll("section");
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        
        // 100px offset helps highlight the link slightly BEFORE the section hits the top
        if (window.scrollY >= sectionTop - 150) {
          current = section.getAttribute("id") || "";
        }
      });

      setActiveSection(current);
    };

    handleScroll();
    // Attach listener
    window.addEventListener("scroll", handleScroll);
    
    // Cleanup listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault(); // Stop the URL from changing to #about
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Makes it glide up nicely
    });
    setActiveSection("about"); // Manually set active state
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <a 
            href="#about" 
            className={activeSection === "about" ? "active" : ""}
            onClick={scrollToTop}
          >
            Home
          </a>
        </li>
        <li>
          <a 
            href="#experience" 
            className={activeSection === "experience" ? "active" : ""}
          >
            Experience
          </a>
        </li>
        <li>
          <a 
            href="#education" 
            className={activeSection === "education" ? "active" : ""}
          >
            Education
          </a>
        </li>
        <li>
          <a 
            href="#projects" 
            className={activeSection === "projects" ? "active" : ""}
          >
            Projects
          </a>
        </li>
        <li>
          <a 
            href="#skills" 
            className={activeSection === "skills" ? "active" : ""}
          >
            Skills
          </a>
        </li>
        <li>
          <a 
            href="#languages" 
            className={activeSection === "languages" ? "active" : ""}
          >
            Languages
          </a>
        </li>
      </ul>
      <div className="theme-toggle-container">
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === "dark" ? <FaSun className="icon" /> : <FaMoon className="icon" />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;