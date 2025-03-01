import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import "../styles/education.css";
import bristolLogo from "../assets/uob logo.jpg";
import intiLogo from "../assets/inti logo.jpg";
import useFadeUp from "./fadeUp";

const educationData = [
  {
    id: 1,
    title: "University of Bristol",
    logo: bristolLogo,
    degree: "MEng Computer Science",
    years: "2022 - 2026",
    honors: "First-Class Honours",
  },
  {
    id: 2,
    title: "Inti International College Penang",
    logo: intiLogo,
    degree: "A-Levels",
    years: "2021 - 2022",
    subjects: "Physics, Chemistry, Mathematics, Further Mathematics",
    grades: "A*, A*, A*, A*",
  },
];

const Education: React.FC = () => {
  useFadeUp(); 
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(""); // Controls animation direction

  // Enable swiping gestures
  const handlers = useSwipeable({
    onSwipedLeft: () => nextCard(),
    onSwipedRight: () => prevCard(),
  });

  const nextCard = () => {
    if (currentIndex < educationData.length - 1) {
      setDirection("next");
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setDirection("prev");
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <section id="education" className="education-section element-fade-up" data-animation="fade-up" {...handlers}>
      <h1>Education</h1>

      {/* Swipeable Education Card */}
      <div className={`education-card ${direction} element-fade-up`} data-animation="fade-up">
        <img src={educationData[currentIndex].logo} alt={educationData[currentIndex].title} className="education-logo" />
        <h3>{educationData[currentIndex].title}</h3>
        <p><strong>Years:</strong> {educationData[currentIndex].years}</p>
        {educationData[currentIndex].degree && <p><strong>Degree:</strong> {educationData[currentIndex].degree}</p>}
        {educationData[currentIndex].honors && <p><strong>Honors:</strong> {educationData[currentIndex].honors}</p>}
        {educationData[currentIndex].subjects && <p><strong>Subjects:</strong> {educationData[currentIndex].subjects}</p>}
        {educationData[currentIndex].grades && <p><strong>Grades:</strong> {educationData[currentIndex].grades}</p>}
      </div>

      {/* Navigation Buttons */}
      <div className="education-nav element-fade-up faster" data-animation="fade-up">
        <button onClick={prevCard} className="nav-button" disabled={currentIndex === 0}>←</button>
        <div className="dot-container">
          {educationData.map((_, index) => (
            <span key={index} className={`dot ${index === currentIndex ? "active" : ""}`}></span>
          ))}
        </div>
        <button onClick={nextCard} className="nav-button" disabled={currentIndex === educationData.length - 1}>→</button>
      </div>
    </section>
  );
};

export default Education;
