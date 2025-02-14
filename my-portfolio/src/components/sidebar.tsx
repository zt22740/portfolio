import "../styles/sidebar.css";
import myImage from "../assets/DSCF9045.jpg"; // Profile image
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"; // Import icons
import myCV from "../assets/Xin_Yan_Lim_CV.pdf"; // CV file

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

      <a href={myCV} download="XinYanLim_CV.pdf" className="cta-button">
        Download CV
      </a>
    </aside>
  );
};

export default Sidebar;
