import './App.css';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import About from './components/about';
import Projects from './components/projects';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Sidebar />
      <Navbar />
      <div className="content-container">
        <About />
        <Projects />
      </div>
      <Footer />
    </>
  );
}

export default App;
