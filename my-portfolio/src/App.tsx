import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import About from "./components/about";
import Projects from "./components/projects";
import Footer from "./components/footer";
import Education from "./components/education";
import Experience from "./components/experience";

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
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
