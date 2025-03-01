import "../styles/skills.css";
import useFadeUp from "./fadeUp";
import { FaPython, FaJs, FaReact, FaJava, FaHtml5, FaCss3, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiCplusplus, SiGoland, SiMysql, SiUnity, SiSharp, SiHaskell, SiC, SiTypescript, SiDart, SiFlutter} from "react-icons/si";

const skillsData = [
    { id: 1, name: "Python", icon: <FaPython className="skill-icon" />, category: "Programming" },
    { id: 2, name: "JavaScript", icon: <FaJs className="skill-icon" />, category: "Programming" },
    { id: 3, name: "React", icon: <FaReact className="skill-icon" />, category: "Framework" },
    { id: 4, name: "Java", icon: <FaJava className="skill-icon" />, category: "Programming" },
    { id: 5, name: "C", icon: <SiC className="skill-icon" />, category: "Programming" },
    { id: 6, name: "C++", icon: <SiCplusplus className="skill-icon" />, category: "Programming" },
    { id: 7, name: "Golang", icon: <SiGoland className="skill-icon" />, category: "Programming" },
    { id: 8, name: "MySQL", icon: <SiMysql className="skill-icon" />, category: "Database" },
    { id: 9, name: "HTML", icon: <FaHtml5 className="skill-icon" />, category: "Web" },
    { id: 10, name: "CSS", icon: <FaCss3 className="skill-icon" />, category: "Web" },
    { id: 11, name: "Node.js", icon: <FaNodeJs className="skill-icon" />, category: "Backend" },
    { id: 12, name: "GitHub", icon: <FaGithub className="skill-icon" />, category: "Tools" },
    { id: 13, name: "C#", icon: <SiSharp className="skill-icon" />, category: "Programming" },
    { id: 14, name: "Unity", icon: <SiUnity className="skill-icon" />, category: "Game Development" },
    { id: 15, name: "Haskell", icon: <SiHaskell className="skill-icon" />, category: "Functional Programming" },
    { id: 16, name: "TypeScript", icon: <SiTypescript className="skill-icon" />, category: "Programming" },
    { id: 17, name: "Dart", icon: <SiDart className="skill-icon" />, category: "Programming" },
    { id: 18, name: "Flutter", icon: <SiFlutter className="skill-icon" />, category: "Framework" },
  ];

const languages = [
  { id: 1, name: "English", level: "Fluent" },
  { id: 2, name: "Mandarin", level: "Fluent" },
  { id: 3, name: "Malay", level: "Intermediate" },
];

const Skills: React.FC = () => {
  useFadeUp(); 
  return (
    <section id="skills" className="skills-section element-fade-up" data-animation="fade-up">
      <h1>Skills</h1>

      {/* Programming Skills */}
      <div className="skills-grid">
        {skillsData.map((skill) => (
          <div key={skill.id} className="skill-card element-fade-up faster" data-animation="fade-up">
            {skill.icon}
            <p>{skill.name}</p>
          </div>
        ))}
      </div>

      {/* Human Languages */}
      <h1 className="element-fade-up" data-animation="fade-up">Languages</h1>
      <ul className="language-list element-fade-up" data-animation="fade-up">
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
