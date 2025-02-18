import "../styles/sidebar.css";
import myImage from "../assets/DSCF9045.jpg"; // Profile image
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"; // Import icons
import myCV from "../assets/Xin_Yan_Lim_CV.pdf"; // CV file
import useFadeUp from "./fadeUp";

const Sidebar: React.FC = () => {
  useFadeUp(); 
  return (
    <aside className="sidebar">
      <img src={myImage} alt="Profile" className="profile-img element-fade-up" data-animation="fade-up" />
      <h2 className="element-fade-up" data-animation="fade-up">Xin Yan Lim</h2>
      <p className="role element-fade-up" data-animation="fade-up">Computer Science Student</p>
      <p className="location element-fade-up" data-animation="fade-up">Bristol, United Kingdom</p>

      {/* Contact Icons - Side by Side */}
      <div className="contact-icons element-fade-up" data-animation="fade-up">
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

      <a href={myCV} download="XinYanLim_CV.pdf" className="cta-button element-fade-up slower" data-animation="fade-up">
        Download CV
      </a>
    </aside>
  );
};

export default Sidebar;
