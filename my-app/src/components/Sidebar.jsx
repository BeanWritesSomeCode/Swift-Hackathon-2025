import { Link } from 'react-router-dom'
const Sidebar = ({ isOpen, toggle }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button className="toggle-btn" onClick={toggle}>☰</button>
      <ul className="sidebar-links">
        <li>Saved Links:</li>
          <li><Link to='/community/cat'><button>Community - Cat</button></Link></li>
        <li><Link to='/knowledge/js'><button>Knowledge - JS</button></Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
