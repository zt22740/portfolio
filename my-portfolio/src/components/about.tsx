import "../styles/about.css"; 
import useFadeUp from "./fadeUp";

const About: React.FC = () => {
  useFadeUp(); 
  return (
    <section id="about" className="about-section element-fade-up" data-animation="fade-up">
      <h1>About Me</h1>
      <p className="element-fade-up faster" data-animation="fade-up">
        I’m a final-year (Year 4) Computer Science student at the University of Bristol with interests in Artificial Intelligence, Machine Learning, and scalable software systems. I have experience building and evaluating deep learning models and enjoy applying technical concepts to real-world challenges. I’m currently seeking graduate and entry-level full-time roles in software engineering and AI-focused teams.
      </p>
    </section>
  );
};

export default About;
