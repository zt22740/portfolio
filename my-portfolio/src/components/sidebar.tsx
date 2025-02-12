import "../styles/sidebar.css";
import myImage from "../assets/DSCF9045.jpg"; // Import the image

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <img src={myImage} alt="Profile" className="profile-img" /> {/* Use imported image */}
      <h2>Xin Yan Lim</h2>
      <p className="role">Computer Science Student</p>
      <p className="location">Bristol, United Kingdom</p>
      <button className="cta-button">Let's Work Together</button>
    </aside>
  );
};

export default Sidebar;
