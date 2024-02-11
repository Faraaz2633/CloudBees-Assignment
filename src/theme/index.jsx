import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: `"Lato", -apple-system, BlinkMacSystemFont, "Roboto","Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  palette: {
    background: '#F8FAFC'
  }
});
