import "./App.css";
import Minter from "./Minter";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#BB86FC",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Minter></Minter>
      </div>
    </ThemeProvider>
  );
}

export default App;
