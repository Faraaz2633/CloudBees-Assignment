import React from "react";

// mui
import { CssBaseline, ThemeProvider } from "@mui/material";

// routes
import { BrowserRouter } from "react-router-dom";
import Router from "./routes";

// theme
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
