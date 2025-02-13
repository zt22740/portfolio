import React from "react";
import "../styles/navbar.css";
import { FaSun, FaMoon } from "react-icons/fa"; // Import sun and moon icons

interface NavbarProps {
  toggleTheme: () => void;
  theme: string;
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, theme }) => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="#experience">Experience</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#volunteering">Volunteering</a></li>
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
