import React from "react";
import SheetForm from "./SheetForm";
import PageHeader from "../../components/PageHeader";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import { makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

export default function Sheets() {
  const classes = useStyles();

  return (
    <>
      <PageHeader
        title="Adicionar Formulário"
        subTitle="Os campos com * são obrigatório"
        icon={<LibraryBooksIcon fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        <SheetForm />
      </Paper>
    </>
  );
}
