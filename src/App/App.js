import React from "react";
import "./App.css";
import SideMenu from "../components/SideMenu";
import {
  createMuiTheme,
  CssBaseline,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import Header from "../components/Header";
import Sheets from "../screens/Sheets/Sheets";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1976d2",
      dark: "#253053",
      light: "#ffffff",
    },
    background: {
      default: "#f4f5fd",
    },
  },
  shape: {
    borderRadius: "8px",
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: "translateZ(0)",
      },
    },
  },
});

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "320px",
    width: "100%",
  },
});

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />

        <Sheets />
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
