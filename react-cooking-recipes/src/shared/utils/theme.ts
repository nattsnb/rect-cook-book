import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#8f5a3c",
      main: "#4b2e1c",
      dark: "#2c1b14",
      contrastText: "#ffffff",
    },
    secondary: {
      lightest: "#f5ece1",
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
    pageTittle: {
      fontSize: "48px",
      lineHeight: 1.5,
      fontWeight: 600,
      fontFamily: `"Poppins", sans-serif`,
      color: "#2c1b14",
      "@media (max-width: 768px)": {
        fontSize: "32px",
      },
    },
    recipesBarTittle: {
      fontSize: "24px",
      lineHeight: 1.5,
      fontWeight: 600,
      fontFamily: `"Poppins", sans-serif`,
      color: "#2c1b14",
      marginTop: "10px",
      marginBottom: "8px",
      "@media (max-width: 768px)": {
        fontSize: "16px",
      },
    },
    recipeTittle: {
      marginRight: "14px",
      fontSize: "32px",
      lineHeight: 1.5,
      fontWeight: 600,
      fontFamily: `"Poppins", sans-serif`,
      color: "#2c1b14",
      "@media (max-width:  480px)": {
        fontSize: "24px",
      },
    },
    ingredientsTittle: {
      fontSize: "24px",
      lineHeight: 1.5,
      fontWeight: 600,
      fontFamily: `"Poppins", sans-serif`,
      color: "#2c1b14",
      "@media (max-width:  480px)": {
        fontSize: "18px",
      },
    },
    allergens: {
      fontSize: "14px",
      lineHeight: "30px",
      fontWeight: 400,
      fontFamily: `"Poppins", sans-serif`,
      color: "#ff0000",
      "@media (max-width:  480px)": {
        fontSize: "12px",
      },
    },
    recipeSteps: {
      fontSize: "20px",
      lineHeight: "30px",
      fontWeight: 600,
      fontFamily: `"Poppins", sans-serif`,
      color: "#2c1b14",
      "@media (max-width: 480px)": {
        fontSize: "16px",
      },
    },
    stepsCounter: {
      fontSize: "20px",
      lineHeight: "30px",
      fontWeight: 600,
      fontFamily: `"Poppins", sans-serif`,
      color: "#2c1b14",
      "@media (max-width:  480px)": {
        fontSize: "16px",
      },
    },
    formSection: {
      fontSize: "20px",
      lineHeight: "30px",
      fontWeight: 600,
      fontFamily: `"Poppins", sans-serif`,
      color: "#2c1b14",
      "@media (max-width:  480px)": {
        fontSize: "22px",
      },
    },
    formErrorMessage: {
      fontSize: "12px",
      lineHeight: "16px",
      fontFamily: `"Poppins", sans-serif`,
      color: "#2c1b14",
      "@media (max-width:  480px)": {
        fontSize: "10px",
      },
    },
    fontFamily: `"Poppins", sans-serif`,
  },
  components: {
    MuiListItemText: {
      styleOverrides: {
        root: ({ theme }) => ({
          ...theme.typography.recipeSteps,
        }),
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: ({ theme }) => ({
          ...theme.typography.stepsCounter,
        }),
      },
    },
    MuiDivider: {
      variants: [
        {
          props: { variant: "custom" },
          style: {
            borderColor: "#8f5a3c",
            borderWidth: "1px",
            borderStyle: "solid",
            marginBottom: "16px",
          },
        },
      ],
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            backgroundColor: "#f5ece1", // Set background color
            "&.Mui-disabled": {
              backgroundColor: "#e7d9c4", // Lighter background for disabled
            },
            "& fieldset": {
              borderColor: "#d4c4a8", // Border color for normal state
            },
            "&.Mui-focused fieldset": {
              borderColor: "#4b2e1c", // Border color when focused
            },
          },
        },
      },
    },
  },
});

export default theme;
