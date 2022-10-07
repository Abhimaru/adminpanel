import React from "react";
import LatestComplaint from "../../components/latestcomplaints/LatestComplaint";
// import ComplaintList from "../../pages/ComplaintList/ComplaintList";
import Widget from "../../components/widgets/Widget";
import "./Dashboard.scss";

const Dashboard = () => {
  return (
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
  );
};

export default Dashboard;
