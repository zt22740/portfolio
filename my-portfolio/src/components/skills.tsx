import "../styles/skills.css";
import { FaPython, FaJs, FaReact, FaJava, FaHtml5, FaCss3, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiCplusplus, SiGoland, SiMysql } from "react-icons/si";
import { DiDatabase } from "react-icons/di";

const skillsData = [
  { id: 1, name: "Python", icon: <FaPython className="skill-icon" />, category: "Programming" },
  { id: 2, name: "JavaScript", icon: <FaJs className="skill-icon" />, category: "Programming" },
  { id: 3, name: "React", icon: <FaReact className="skill-icon" />, category: "Framework" },
  { id: 4, name: "Java", icon: <FaJava className="skill-icon" />, category: "Programming" },
  { id: 5, name: "C", icon: <SiCplusplus className="skill-icon" />, category: "Programming" },
  { id: 6, name: "C++", icon: <SiCplusplus className="skill-icon" />, category: "Programming" },
  { id: 7, name: "Golang", icon: <SiGoland className="skill-icon" />, category: "Programming" },
  { id: 8, name: "SQL", icon: <DiDatabase className="skill-icon" />, category: "Database" },
  { id: 9, name: "HTML", icon: <FaHtml5 className="skill-icon" />, category: "Web" },
  { id: 10, name: "CSS", icon: <FaCss3 className="skill-icon" />, category: "Web" },
  { id: 11, name: "Node.js", icon: <FaNodeJs className="skill-icon" />, category: "Backend" },
  { id: 12, name: "GitHub", icon: <FaGithub className="skill-icon" />, category: "Tools" },
];

const languages = [
  { id: 1, name: "English", level: "Fluent" },
  { id: 2, name: "Mandarin", level: "Fluent" },
  { id: 3, name: "Malay", level: "Intermediate" },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>

      {/* Programming Skills */}
      <div className="skills-grid">
        {skillsData.map((skill) => (
          <div key={skill.id} className="skill-card">
            {skill.icon}
            <p>{skill.name}</p>
          </div>
        ))}
      </div>

      {/* Human Languages */}
      <h3>Languages</h3>
      <ul className="language-list">
        {languages.map((lang) => (
          <li key={lang.id}>
            <strong>{lang.name}</strong>: {lang.level}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
