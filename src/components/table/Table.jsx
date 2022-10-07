import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useState, useEffect } from "react";
import "./Table.scss";
import axios from "axios";

/*const rows = [
  {
    _id: 1,
    title: "Inproper Garbage Collection",
    createdAt: "20-oct-2022 3:10PM",
    status: "pending",
  },
  {
    _id: 2,
    title: "Bad Roads",
    createdAt: "25-oct-2022 5:25PM",
    status: "Working",
  },
  {
    _id: 3,
    title: "Animal is Dead ",
    createdAt: "28-oct-2022 11:09AM",
    status: "Completed",
  },
]; */

export default function BasicTable() {
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
      setRes(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  let count = 0;
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" className="table">
        <TableHead>
          <TableRow>
            <TableCell className="tablehead">Id</TableCell>
            <TableCell className="tablehead">Title</TableCell>
            <TableCell className="tablehead">Arrived On</TableCell>
            <TableCell className="tablehead">Current Status</TableCell>
            <TableCell className="tablehead">Full Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {res.map((row) => (
            <TableRow key={row._id}>
              <TableCell className="tablecell">{++count}</TableCell>
              <TableCell className="tablecell">{row.title}</TableCell>
              <TableCell className="tablecell">{row.createdAt}</TableCell>
              <TableCell className="tablecell">
                {row.status == 0 ? "Pending" : "Working"}
              </TableCell>
              <TableCell className="tablecell">
                <a href="/">Click Here</a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
