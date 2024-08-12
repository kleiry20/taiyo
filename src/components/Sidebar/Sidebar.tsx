import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <>
      {/* <ul className="sidebar">
        <li className="sidebar-item">
          <a href="/">Contact</a>
        </li>
        <li className="sidebar-item">
          <a href="/map">Charts and Maps</a>
        </li>
      </ul> */}

      <aside className="sidebar">
        <nav>
          <ul>
            <li className="sidebar-item">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="sidebar-item">
              <Link to="/map">Charts and Maps</Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
