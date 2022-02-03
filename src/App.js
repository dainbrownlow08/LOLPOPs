import React, { Component } from "react";
import "./App.css";
import Minter from "./Minter";
import MobileMinter from "./Mobile-Minter";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#BB86FC",
    },
    secondary: {
      main: "#141414",
    },
  },
});

export default class App extends Component {
  render() {
    let width = window.innerWidth;
    if (width > 695) {
      return (
        <ThemeProvider theme={theme}>
          <Minter></Minter>
        </ThemeProvider>
      );
    } else {
      return (
        <ThemeProvider theme={theme}>
          <MobileMinter></MobileMinter>
        </ThemeProvider>
      );
    }
  }
}
