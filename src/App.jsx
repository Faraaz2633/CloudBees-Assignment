import React from "react";

// mui
import { CssBaseline } from "@mui/material";

// routes
import { BrowserRouter } from "react-router-dom";
import Router from "./routes";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Router />
    </BrowserRouter>
  );
}

export default App;
