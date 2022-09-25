import "./Sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LogoutIcon from "@mui/icons-material/Logout";
import KeyIcon from "@mui/icons-material/Key";

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
            <span>DashBoard</span>
          </li>
          <p className="title">SERVICES</p>
          <li>
            <AssignmentIcon className="icon" />
            <span>Complaints</span>
          </li>
          <p className="title">ADMIN</p>
          <li>
            <KeyIcon className="icon" />
            <span>Change Password</span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
