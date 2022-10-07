import "./Widget.scss";
import axios from "axios";
import { useEffect, useState } from "react";

const Widget = ({ type }) => {
  const token =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWRtaW4iLCJzZWNyZXQiOiIkYXJnb24yaWQkdj0xOSRtPTQwOTYsdD0zLHA9MSRwMFZOTDh1ZXk0MTZwTUZ5clFYOXF3JFdxd1hUanp4OEIwK1RNT0daOVVSRmtwTmcwQjBlbVNTakFNK3NsbHlHZjAiLCJpYXQiOjE2NjUxMzg3MTksImV4cCI6MTY2NTIyNTExOX0.CFPKutY61pHcHi1N62IxyLVSNZx-ZGyW4xX73ZDUHW0";

  const [res, setRes] = useState([]);
  const fetchData = async () => {
    try {
      const res = await axios.get(
        "https://complaint-booking.herokuapp.com/issue/get",
        {
          headers: {
            Authorization: token,
          },
          params: {
            area: "Naranpura",
          },
        }
      );
      setRes(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  let data;

  switch (type) {
    case "total":
      data = {
        title: "Completed Complaints",
        counter: res.countOfCompleted,
        cname: "c1",
      };
      break;
    case "pending":
      data = {
        title: "Pending Complaints",
        counter: res.countOfPending,
        cname: "c2",
      };
      break;
    case "working":
      data = {
        title: "Working On Complaints",
        counter: res.countOfWorking,
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
