import React from "react";

// mui
import { CssBaseline, ThemeProvider } from "@mui/material";

// routes
import { BrowserRouter } from "react-router-dom";
import Router from "./routes";

// theme
import { theme } from "./theme";

// context
import CacheProvider from "./context/CacheContext";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CacheProvider>
        <BrowserRouter>
          <CssBaseline />
          <Router />
        </BrowserRouter>
      </CacheProvider>
    </ThemeProvider>
  );
}

export default App;
