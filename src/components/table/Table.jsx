import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "./Table.scss";

const rows = [
  {
    id: 1,
    title: "Inproper Garbage Collection",
    date: "20-oct-2022 3:10PM",
  },
  {
    id: 2,
    title: "Bad Roads",
    date: "25-oct-2022 5:25PM",
  },
  {
    id: 3,
    title: "Animal is Dead ",
    date: "28-oct-2022 11:09AM",
  },
];

export default function BasicTable() {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" className="table">
        <TableHead>
          <TableRow>
            <TableCell className="tablehead">Id</TableCell>
            <TableCell className="tablehead">Title</TableCell>
            <TableCell className="tablehead">Arrived On</TableCell>
            <TableCell className="tablehead">Full Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell className="tablecell">{row.title}</TableCell>
              <TableCell className="tablecell">{row.date}</TableCell>
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
