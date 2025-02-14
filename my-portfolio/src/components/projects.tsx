import "../styles/projects.css";
import project1 from "../assets/gamejam_mystical.png";
import project2 from "../assets/brishack.gif";
import project3 from "../assets/EncodeAIhack1.gif";
import project4 from "../assets/haunted house.png";
import project5 from "../assets/medic recall.png";
import project6 from "../assets/cg.gif";
import project7 from "../assets/mekdi pipeline.png";

const projects = [
  {
    id: 1,
    title: "Contaminated Pixel",
    image: project1,
    github: "https://github.com/hyoyeon27/GameJam_mystical.git",
  },
  {
    id: 2,
    title: "Mood Tracker",
    gif: project2,
    github: "https://github.com/averyryu/BrisHack.git",
  },
  {
    id: 3,
    title: "Therago",
    gif: project3,
    github: "https://github.com/fw22912/EncodeAIHack.git",
  },
  {
    id: 4,
    title: "Haunted Escape",
    image: project4,
    github: "https://github.com/rjimin/GameJam2024.git",
  },
  {
    id: 5,
    title: "Medic Recall Web App",
    image: project5,
    github: "",
  },
  {
    id: 6,
    title: "Computer Graphics",
    gif: project6,
    github: "https://github.com/zt22740/CGCW.git",
  },
  {
    id: 7,
    title: "Mekdi Pipeline",
    gif: project7,
    github: "https://github.com/kaungzhan/eth-crypto-game.git",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
            <div key={project.id} className="project-card">
              {/* Conditionally Render GIF or Image */}
              {project.gif ? (
                <img src={project.gif} alt={project.title} className="project-media" />
              ) : (
                <img src={project.image} alt={project.title} className="project-media" />
              )}
            <h3>{project.title}</h3>
            {project.github ? (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                View on GitHub
              </a>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
