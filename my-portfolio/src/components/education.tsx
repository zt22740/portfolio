import { useState, useRef, useEffect} from "react";
import "../styles/education.css";
import bristolLogo from "../assets/uob logo.jpg";
import intiLogo from "../assets/inti logo.jpg";
import pcghsLogo from "../assets/pcghs logo.jpeg";

const educationData = [
  {
    id: 1,
    title: "University of Bristol",
    logo: bristolLogo,
    degree: "MEng Computer Science",
    years: "2022 - 2026",
    honors: "Predicted First-Class Honours",
  },
  {
    id: 2,
    title: "Inti International College Penang",
    logo: intiLogo,
    years: "2021 - 2022",
    subjects: "Physics, Chemistry, Mathematics, Further Mathematics",
    grades: "A*, A*, A*, A*",
  },
  {
    id: 3,
    title: "Penang Chinese Girls' High School",
    logo: pcghsLogo,
    years: "2016 - 2020",
    grades: "9A+ 1A",
  },
];

const Education = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      const { deltaY } = e;

      if (deltaY > 0) {
        // --- USER SCROLLING DOWN ---
        if (currentIndex < educationData.length - 1) {
          e.preventDefault(); // Lock page
          // Move to next card immediately
          setCurrentIndex(currentIndex + 1); 
        }
      } else {
        // --- USER SCROLLING UP ---
        if (currentIndex > 0) {
          e.preventDefault(); // Lock page
          // Move to previous card immediately
          setCurrentIndex(currentIndex - 1);
        }
      }
    };

    // Attach listener
    container.addEventListener("wheel", handleWheel, { passive: false });

    // Clean up listener
    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, [currentIndex]); // Re-running this effect on index change ensures we always have the latest index

  // Handle dot click navigation
  const goToCard = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="education" className="education-section">
      <h1 className="education-title">Education</h1>

      {/* Remove onWheel prop, we handle it in useEffect */}
      <div
        className="education-card-container"
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