import BasicTable from "../../components/table/Table";
import Sidebar from "../../components/sidebar/Sidebar";
import React from "react";
import "./ComplaintList.scss";

const ComplaintList = () => {
  return (
    <div className="home">
      <Sidebar className="sidebar" />
      <div className="homeContainer">
        <div className="list">
          <div className="titlehead">ALL COMPLAINTS</div>
          <BasicTable className="table" />
        </div>
      </div>
    </div>
  );
};

export default ComplaintList;
