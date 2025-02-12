import './App.css'
import Navbar from './components/navbar'
import Sidebar from './components/sidebar'
import About from './components/about'
import Projects from './components/projects'
import Contact from './components/contact'
import Footer from './components/footer'

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
