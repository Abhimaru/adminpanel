import Dashboard from "../../pages/Dashboard/Dashboard";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default Home;
