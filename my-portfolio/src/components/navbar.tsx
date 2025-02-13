import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#resume">Resume</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
