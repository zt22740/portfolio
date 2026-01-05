import "../styles/sidebar.css";
// import "../styles/rolling.css"; // Don't forget to import the new CSS!
import RollingLink from "./rollingLayout"; // Import your new component

import myImage from "../assets/DSCF9045.jpg"; 
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"; 
import myCV from "../assets/Xin_Yan_Lim_CV.pdf";
import useFadeUp from "./fadeUp";

const Sidebar: React.FC = () => {
  useFadeUp(); 
  
  return (
    <aside className="sidebar">
      <img src={myImage} alt="Profile" className="profile-img animate-on-load" style={{animationDelay: '0.1s'}} />
      <h2 className="animate-on-load" style={{animationDelay: '0.2s'}}>Xin Yan Lim</h2>
      <p className="role animate-on-load" style={{animationDelay: '0.3s'}}>Computer Science Student</p>
      <p className="location animate-on-load" style={{animationDelay: '0.4s'}}>Bristol, United Kingdom</p>

      {/* --- REUSED COMPONENTS HERE --- */}
      <div className="contact-icons animate-on-load" style={{animationDelay: '0.5s'}}>
        
        {/* Email Icon */}
        <RollingLink href="mailto:lxinyan03@gmail.com" target="_blank" className="square icon-skin">
           <FaEnvelope />
        </RollingLink>

        {/* GitHub Icon */}
        <RollingLink href="https://github.com/zt22740" target="_blank" className="square icon-skin">
           <FaGithub />
        </RollingLink>

        {/* LinkedIn Icon */}
        <RollingLink href="https://www.linkedin.com/in/xin-yan-lim-70200b265/" target="_blank" className="square icon-skin">
           <FaLinkedin />
        </RollingLink>

      </div>

      {/* CV Button (Same component, just wider!) */}
      <div className="animate-sidebar" style={{animationDelay: '0.6s'}}>
        <RollingLink href={myCV} download="XinYanLim_CV.pdf" className="wide cv-skin">
          Download CV
        </RollingLink>
      </div>

    </aside>
  );
};

export default Sidebar;