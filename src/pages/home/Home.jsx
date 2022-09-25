import LatestComplaint from "../../components/latestcomplaints/LatestComplaint";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widgets/Widget";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <div className="container">
          <div className="widgets">
            <Widget type="total" />
            <Widget type="pending" />
            <Widget type="working" />
          </div>

          <div className="latestcomplaints">
            <LatestComplaint />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
