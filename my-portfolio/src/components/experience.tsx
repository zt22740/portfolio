import "../styles/experience.css";
import keysightLogo from "../assets/KEYS-18a34669.png"; // Import the company logo
import useFadeUp from "./fadeUp";

const experienceData = [
  {
    id: 1,
    company: "Keysight Technologies",
    logo: keysightLogo,
    role: "Software Engineering Intern",
    years: "Summer 2024",
    description: [
      "Automated the creation of driver folders based on order data, streamlining the workflow.",
      "Developed a website that allowed test engineers to verify the latest software versions.",
      "Conducted practical testing on PCs and SIM cards, gaining real-world industrial exposure.",
    ],
  },
];

const Experience: React.FC = () => {
  useFadeUp(); 
  return (
    <section id="experience" className="experience-section element-fade-up" data-animation="fade-up">
      <h1>Experience</h1>
      <div className="timeline element-fade-up faster" data-animation="fade-up">
        {experienceData.map((exp, index) => (
          <div key={exp.id} className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}>
            <div className="timeline-content">
              <div className="experience-header">
                <img src={exp.logo} alt={exp.company} className="company-logo" />
                <h3>{exp.company}</h3>
              </div>
              <p><strong>Role:</strong> {exp.role}</p>
              <p><strong>Years:</strong> {exp.years}</p>
              <ul className="experience-list">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
