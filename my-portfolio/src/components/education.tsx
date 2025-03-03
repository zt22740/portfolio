import { useState, useRef } from "react";
import "../styles/education.css";
import bristolLogo from "../assets/uob logo.jpg";

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
    title: "A-Levels",
    institution: "Inti International College Penang",
    years: "2021 - 2022",
    subjects: "Physics, Chemistry, Mathematics, Further Mathematics",
    grades: "A*, A*, A*, A*",
  },
];

const Education = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = (event: React.WheelEvent<HTMLDivElement>) => {
    event.stopPropagation(); // Prevents page scrolling
    const { deltaY } = event;
    if (deltaY > 0 && currentIndex < educationData.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else if (deltaY < 0 && currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  // Handle dot click navigation
  const goToCard = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="education" className="education-section">
      <h2 className="education-title">Education</h2>

      {/* Scrollable Cards */}
      <div
        className="education-card-container"
        onWheel={handleScroll}
        ref={scrollContainerRef}
      >
        {educationData.map((edu, index) => (
          <div key={edu.id} className={`education-card ${index === currentIndex ? "active blink" : ""}`}>
            {edu.logo && <img src={edu.logo} alt={edu.title} />}
            <h3>{edu.title}</h3>
            <p><strong>Years:</strong> {edu.years}</p>
            {edu.degree && <p><strong>Degree:</strong> {edu.degree}</p>}
            {edu.honors && <p><strong>Honors:</strong> {edu.honors}</p>}
            {edu.subjects && <p><strong>Subjects:</strong> {edu.subjects}</p>}
            {edu.grades && <p><strong>Grades:</strong> {edu.grades}</p>}
          </div>
        ))}
      </div>

      {/* 📌 Vertical Navigation Dots (Right Side) */}
      <div className="education-nav">
        {educationData.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToCard(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Education;
