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
import Popup from "../../components/Popup";
import Button from "../../components/controls/Button";
import * as sheetService from "../../services/sheetService";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  newButton: {
    float: "right",
    right: "10px",
    bottom: "5px",
  },
}));

const headCells = [
  { id: "1", name: "fullName", label: "Sheet owner name" },
  { id: "2", name: "email", label: "Email" },
  { id: "3", name: "city", label: "City" },
  { id: "4", name: "phone", label: "Phone", disableSorting: true },
  { id: "5", name: "department", label: "Department", disableSorting: true },
];

export default function Sheets() {
  const classes = useStyles();
  const [openPopup, setOpenPopup] = useState(false);

  const [recordForEdit, setRecordForEdit] = useState(null);
  const [records, setRecords] = useState(sheetService.getAllSheets());

  console.log(openPopup);

  //const [records] = useState(sheetService.getAllSheets());
  const {
    TableContainer,
    TableHeader,
    TableCustomPagination,
    recordsAfterPagingAndSorting,
  } = useTable(records, headCells);

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
        <Button
          text="Adicionar"
          variant="outlined"
          startIcon={<AddIcon />}
          className={classes.newButton}
          // onClick={() => {
          //   setOpenModal(true);
          //   setRecordForEdit(null);
          // }}
          onClick={() => setOpenPopup(true)}
        />
        <TableContainer>
          <TableHeader />
          <TableBody>
            {recordsAfterPagingAndSorting().map((item) => (
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
        <TableCustomPagination />
      </Paper>
      {/* <SheetForm recordForEdit={recordForEdit} addOrEdit={addOrEdit} /> */}

      <Popup title="Form" openPopup={openPopup} setOpenPopup={setOpenPopup}>
        TAVARES
        {/* <SheetForm recordForEdit={recordForEdit} /> */}
      </Popup>
    </>
  );
}
