import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#d5f2e3",
      main: "#8ecfb3",
      dark: "#5d9d83",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#e7d9c4",
      main: "#d4c4a8",
      dark: "#b9a688",
      contrastText: "#000000",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 992,
      xl: 1279,
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
    fontSize: 16,
  },
});

export default theme;
