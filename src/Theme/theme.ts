import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#4CAF50",
      light: "#81C784",
      dark: "#388E3C",
      contrastText: "#fff",
    },
    secondary: {
      main: "#616161",
      light: "#9E9E9E",
      dark: "#212121",
      contrastText: "#fff",
    },
    background: {
      default: "#EBEBEB",
      paper: "#F5F5F5",
    },
    text: {
      primary: "#212121",
      secondary: "#757575",
    },
    success: {
      main: "#4CAF50",
    },
    divider: "#E0E0E0",
  },
  typography: {
    fontFamily: '"DM Sans", "Helvetica Neue", Arial, sans-serif',
    h4: {
      fontWeight: 700,
      fontSize: "1.75rem",
    },
    h6: {
      fontWeight: 600,
    },
    body2: {
      fontSize: "0.8rem",
    },
    caption: {
      fontSize: "0.72rem",
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          border: "1px solid #E0E0E0",
          backgroundColor: "#FFFFFF",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          borderRadius: 8,
        },
        containedPrimary: {
          backgroundColor: "#4CAF50",
          "&:hover": {
            backgroundColor: "#388E3C",
          },
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          backgroundColor: "#E0E0E0",
          height: 6,
        },
        bar: {
          borderRadius: 4,
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          "&.Mui-selected": {
            backgroundColor: "#FFFFFF",
            fontWeight: 700,
          },
        },
      },
    },
  },
});
