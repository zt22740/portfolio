import "../styles/projects.css";
import project1 from "../assets/gamejam_mystical.png";
import project2 from "../assets/EncodeAIhack1.gif";
import project3 from "../assets/haunted house.png";

const projects = [
  {
    id: 1,
    title: "GameJam 2023",
    image: project1,
    github: "https://github.com/hyoyeon27/GameJam_mystical.git",
  },
  {
    id: 2,
    title: "EncodeAI Hackathon",
    gif: project2,
    github: "https://github.com/fw22912/EncodeAIHack.git",
  },
  {
    id: 3,
    title: "GameJam 2024",
    image: project3,
    github: "https://github.com/rjimin/GameJam2024.git",
  },
];

const Projects = () => {
  return (
    <section className="projects">
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
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
