const Sidebar = ({ isOpen, toggle }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button className="toggle-btn" onClick={toggle}>☰</button>
      
      {/* always there regardless */}
      <div className="saved-pages-label">
        Saved Pages
      </div>

      {/* when sidebar is open */}
      {isOpen && (
        <ul className="sidebar-links">
          <li><a href="#">Saved 1</a></li>
          <li><a href="#">Saved 2</a></li>
          <li><a href="#">Saved 3</a></li>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;