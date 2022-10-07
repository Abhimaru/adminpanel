import "./Sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LogoutIcon from "@mui/icons-material/Logout";
import KeyIcon from "@mui/icons-material/Key";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Admin Panel</span>
      </div>
      <hr />

      <div className="bottom">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <Link to="/" className="links">
              DashBoard
            </Link>
          </li>
          <p className="title">SERVICES</p>
          <li>
            <AssignmentIcon className="icon" />
            <Link to="/list" className="links">
              Complaints
            </Link>
          </li>
          <p className="title">ADMIN</p>
          <li>
            <KeyIcon className="icon" />
            <Link to="/changepass" className="links">
              Change Password
            </Link>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <Link to="logout" className="links">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
