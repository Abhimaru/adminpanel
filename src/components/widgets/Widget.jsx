import "./Widget.scss";

const Widget = ({ type }) => {
  let data;

  switch (type) {
    case "total":
      data = {
        title: "Total Complaints",
        counter: 80,
        cname: "c1",
      };
      break;
    case "pending":
      data = {
        title: "Pending Complaints",
        counter: 20,
        cname: "c2",
      };
      break;
    case "working":
      data = {
        title: "Working On Complaints",
        counter: 60,
        cname: "c3",
      };
      break;
    default:
      break;
  }
  return (
    <div className={`widget ${data.cname}`}>
      <span className="counter">{data.counter}</span>
      <span className="title">{data.title}</span>
    </div>
  );
};

export default Widget;
