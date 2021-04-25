import { Card, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";

export default function PageHeader(props) {
  const { title, subTitle, icon } = props;

  const useStyle = makeStyles((theme) => ({
    root: {
      backgroundColor: "#fdfdff",
    },
    pageHeader: {
      padding: theme.spacing(4),
      display: "flex",
      marginBottom: theme.spacing(2),
    },
    pageIcons: {
      display: "inline-block",
      padding: theme.spacing(2),
      color: "#3c44b1",
    },
    pageTitle: {
      paddingLeft: theme.spacing(4),
      "& .MuiTypography-subtitle2": {
        opacity: "0.6",
      },
    },
  }));

  const classes = useStyle();

  return (
    <Paper elevation={0} square className={classes.root}>
      <div className={classes.pageHeader}>
        <Card className={classes.pageIcons}>{icon}</Card>
        <div className={classes.pageTitle}>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="subtitle2" component="div">
            {subTitle}
          </Typography>
        </div>
      </div>
    </Paper>
  );
}
