import "../styles/sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <img
        src="https://via.placeholder.com/100"
        alt="Profile"
        className="profile-img"
      />
      <h2>Alex Walker</h2>
      <p className="role">UI/UX Designer & Frontend Developer</p>
      <p className="location">Odessa, Ukraine</p>
      <button className="cta-button">Let's Work Together</button>
    </aside>
  );
};

export default Sidebar;
