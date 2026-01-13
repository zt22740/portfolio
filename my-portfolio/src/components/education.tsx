import { useState, useRef, useEffect } from "react";
// 1. IMPORT THIS
import { useSwipeable } from "react-swipeable";
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
  const isScrolling = useRef(false);

  // --- HELPER FUNCTION: Locks scroll, changes card, unlocks ---
  const triggerScroll = (nextIndex: number) => {
    if (isScrolling.current) return; // Prevent double-firing
    
    isScrolling.current = true;
    setCurrentIndex(nextIndex);

    setTimeout(() => {
      isScrolling.current = false;
    }, 800);
  };

  // --- 2. ADD SWIPE HANDLERS ---
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      // Swipe Left = Go Next
      if (currentIndex < educationData.length - 1) {
        triggerScroll(currentIndex + 1);
      }
    },
    onSwipedRight: () => {
      // Swipe Right = Go Back
      if (currentIndex > 0) {
        triggerScroll(currentIndex - 1);
      }
    },
    // IMPORTANT: Allow vertical scrolling while touching the card
    preventScrollOnSwipe: false,
    trackTouch: true,
    trackMouse: true, // Allows testing with mouse drag on laptop
  });

  // --- WHEEL LOGIC (Keep exactly as before) ---
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling.current) {
        e.preventDefault();
        return;
      }

      const { deltaY } = e;

      if (deltaY > 0) {
        if (currentIndex < educationData.length - 1) {
          e.preventDefault();
          triggerScroll(currentIndex + 1);
        }
      } else {
        if (currentIndex > 0) {
          e.preventDefault();
          triggerScroll(currentIndex - 1);
        }
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, [currentIndex]); // Re-run when index changes

  const goToCard = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="education" className="education-section">
      <h1 className="education-title">Education</h1>

      <div
        className="education-card-container"
        // 3. MERGE REFS & ATTACH HANDLERS
        {...handlers} 
        ref={(el) => {
          // This tricky part merges both refs so everything works
          handlers.ref(el); 
          scrollContainerRef.current = el;
        }}
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