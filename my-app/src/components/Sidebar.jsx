
const Sidebar = ({ isOpen, toggle }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button className="toggle-btn" onClick={toggle}>☰</button>
      <ul className="sidebar-links">
        <li>Saved Links:</li>
        <li><a href="#">Saved 1</a></li>
        <li><a href="#">Saved 2</a></li>
        <li><a href="#">Saved 3</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
