import Button from "../button/Button";
import BasicTable from "../table/Table";
import "./LatestComplaint.scss";

const LatestComplaint = () => {
  return (
    <div className="latest">
      <div className="main">
        <div className="left">
          <span className="listtitle">Latest Complaints</span>
        </div>
        <div className="right">
          {/* <span className="link">
            <a href="/">View All Complaints</a>
          </span> */}
          <Button title="View All Complaints" />
        </div>
      </div>
      <BasicTable />
    </div>
  );
};

export default LatestComplaint;
