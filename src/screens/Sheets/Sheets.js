import React, { useState } from "react";
import SheetForm from "./SheetForm";
import PageHeader from "../../components/PageHeader";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import {
  makeStyles,
  Paper,
  TableBody,
  TableCell,
  TableRow,
} from "@material-ui/core";
import useTable from "../../components/customHooks/useTable";
import * as sheetService from "../../services/sheetService";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

const headCells = [
  { id: "1", name: "fullName", label: "Sheet owner name" },
  { id: "2", name: "email", label: "Email" },
  { id: "3", name: "city", label: "City" },
  { id: "4", name: "phone", label: "Phone" },
  { id: "5", name: "department", label: "Department" },
];

export default function Sheets() {
  const classes = useStyles();

  const [records] = useState(sheetService.getAllSheets());
  const { TableContainer, TableHeader } = useTable(records, headCells);

  return (
    <>
      <PageHeader
        title="Adicionar Formulário"
        subTitle="Os campos com * são obrigatórios"
        icon={<LibraryBooksIcon fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        <SheetForm />
      </Paper>
      <Paper className={classes.pageContent}>
        <TableContainer>
          <TableHeader />
          <TableBody>
            {records.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.fullName}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.city}</TableCell>
                <TableCell>{item.phone}</TableCell>
                <TableCell>{item.departmendId}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableContainer>
      </Paper>
    </>
  );
}
