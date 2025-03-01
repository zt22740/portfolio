import useFadeUp from "./fadeUp";

const About: React.FC = () => {
  useFadeUp(); 
    return (
      <section id="about" className="p-10 bg-gray-100">
        <h1 className="text-3xl font-semibold element-fade-up" data-animation="fade-up">About Me</h1>
        <p className="mt-4 element-fade-up faster" data-animation="fade-up">
        Hello there! I'm a Year 3 student pursuing a degree in Computer Science at the University of Bristol. My passion lies in the fascinating world of Artificial Intelligence and Machine Learning. I'm on the lookout for opportunities to expand my horizons through work and vacation schemes, eager to apply my skills and knowledge to real-world challenges.
        </p>
      </section>
    );
  };
  
  export default About;
  