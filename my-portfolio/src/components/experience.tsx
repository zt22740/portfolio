import "../styles/experience.css";
import keysightLogo from "../assets/KEYS-18a34669.png"; // Import the company logo

const experienceData = [
  {
    id: 1,
    company: "Keysight Technologies",
    logo: keysightLogo, // Add company logo
    role: "Software Engineering Intern",
    years: "Summer 2024",
    description: "As an intern in the Order Fulfillment department, I gained hands-on experience through a series of impactful projects. My first task involved automating the creation of driver folders based on order data, streamlining the workflow. I then developed a website that enabled test engineers to easily verify if they were using the latest software version, enhancing their efficiency. Additionally, I conducted practical testing on PCs and SIM cards, which provided me with real-world industrial exposure and experience. This internship has sharpened both my technical and problem-solving skills.",
  },
];

const Experience = () => {
    return (
      <section id="experience" className="experience-section">
        <h2>Experience</h2>
        <div className="timeline">
          {experienceData.map((exp, index) => (
            <div key={exp.id} className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}>
              <div className="timeline-content">
                <div className="experience-header">
                  <img src={exp.logo} alt={exp.company} className="company-logo" />
                  <h3>{exp.company}</h3>
                </div>
                <p><strong>Role:</strong> {exp.role}</p>
                <p><strong>Years:</strong> {exp.years}</p>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
export default Experience;
