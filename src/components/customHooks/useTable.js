import { Table, TableCell, TableHead, TableRow } from "@material-ui/core";
import React from "react";

export default function useTable(records, headCells) {
  const TableContainer = (props) => <Table>{props.children}</Table>;

  const TableHeader = (props) => {
    return (
      <TableHead>
        <TableRow>
          {headCells.map((headCell) => (
            <TableCell key={headCell.id}>{headCell.label}</TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  };

  return {
    TableContainer,
    TableHeader,
  };
}
