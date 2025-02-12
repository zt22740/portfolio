const Navbar = () => {
    return (
      <nav className="w-3/4 mx-auto flex justify-center space-x-6 py-4 text-white">
        <a href="#home" className="hover:text-purple-400">Home</a>
        <a href="#portfolio" className="hover:text-purple-400">Portfolio</a>
        <a href="#about" className="hover:text-purple-400">About Me</a>
        <a href="#resume" className="hover:text-purple-400">Resume</a>
        <a href="#contact" className="hover:text-purple-400">Contact</a>
        <button className="ml-4 bg-purple-500 px-4 py-1 rounded-lg">Let's Talk</button>
      </nav>
    );
  };
  
  export default Navbar;
  