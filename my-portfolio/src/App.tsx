import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import About from "./components/about";
import Projects from "./components/projects";
import Footer from "./components/footer";
import Education from "./components/education";
import Experience from "./components/experience";
import Skills from "./components/skills";
import Languages from "./components/languages";

function App() {
  // Load theme from localStorage or default to dark mode
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  // Function to toggle light/dark mode
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Apply theme to the body
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      // Check if we have scrolled to the bottom (within 50px)
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        
        // Find ALL elements that should fade up
        const hiddenElements = document.querySelectorAll(".element-fade-up");
        
        // Force them to show immediately
        hiddenElements.forEach((el) => {
          el.classList.add("triggered");
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Navbar toggleTheme={toggleTheme} theme={theme} />
        <div className="content-container">
          <About />
          <Experience />
          <Education />
          <Projects />
          <Skills />
          <Languages />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
