import "../styles/sidebar.css";
import myImage from "../assets/DSCF9045.jpg"; // Profile image
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"; // Import icons

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <img src={myImage} alt="Profile" className="profile-img" />
      <h2>Xin Yan Lim</h2>
      <p className="role">Computer Science Student</p>
      <p className="location">Bristol, United Kingdom</p>

      {/* Contact Icons - Side by Side */}
      <div className="contact-icons">
        <a href="mailto:lxinyan03@gmail.com" className="icon-link" target="_blank">
          <FaEnvelope className="icon" />
        </a>
        <a href="https://github.com/zt22740" className="icon-link" target="_blank">
          <FaGithub className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/xin-yan-lim-70200b265/" className="icon-link" target="_blank">
          <FaLinkedin className="icon" />
        </a>
      </div>

      <button className="cta-button">Let's Work Together</button>
    </aside>
  );
};

export default Sidebar;
