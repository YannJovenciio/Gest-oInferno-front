import { createTheme } from "@mui/material/styles";

export const infernoTheme = createTheme({
  palette: {
    primary: {
      main: "#d32f2f", // Vermelho Infernal
      light: "#ff6e40", // Laranja Queimado
      dark: "#7d0000", // Vermelho Escuro
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#ffd700", // Ouro Demoníaco
      light: "#ffed4e", // Ouro Claro
      dark: "#b8860b", // Ouro Escuro
      contrastText: "#000000",
    },
    background: {
      default: "#0a0a0a", // Preto Profundo
      paper: "#1a1a1a", // Cinza Muito Escuro
    },
    text: {
      primary: "#ffffff", // Branco Principal
      secondary: "#b0bec5", // Cinza Claro
      disabled: "#757575", // Cinza Médio
    },
    divider: "#424242",
    error: {
      main: "#f44336",
      light: "#e57373",
      dark: "#c62828",
    },
    warning: {
      main: "#ff9800",
      light: "#ffb74d",
      dark: "#e65100",
    },
    info: {
      main: "#2196f3",
      light: "#64b5f6",
      dark: "#1565c0",
    },
    success: {
      main: "#4caf50",
      light: "#81c784",
      dark: "#2e7d32",
    },
  },
  typography: {
    fontFamily: [
      "Merriweather",
      "Playfair Display",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
    h1: {
      fontFamily: "Playfair Display, serif",
      fontWeight: 700,
      fontSize: "3rem",
      letterSpacing: "-1px",
    },
    h2: {
      fontFamily: "Playfair Display, serif",
      fontWeight: 700,
      fontSize: "2.5rem",
    },
    h3: {
      fontFamily: "Playfair Display, serif",
      fontWeight: 600,
      fontSize: "2rem",
    },
    h4: {
      fontFamily: "Playfair Display, serif",
      fontWeight: 600,
      fontSize: "1.5rem",
    },
    h5: {
      fontFamily: "Playfair Display, serif",
      fontWeight: 500,
      fontSize: "1.25rem",
    },
    h6: {
      fontFamily: "Playfair Display, serif",
      fontWeight: 500,
      fontSize: "1rem",
    },
    body1: {
      fontFamily: "Merriweather, serif",
      fontSize: "1rem",
      lineHeight: 1.6,
    },
    body2: {
      fontFamily: "Merriweather, serif",
      fontSize: "0.875rem",
      lineHeight: 1.5,
    },
    button: {
      fontFamily: "Playfair Display, serif",
      fontWeight: 600,
      letterSpacing: "0.5px",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          padding: "10px 24px",
          fontSize: "0.95rem",
          transition: "all 0.3s ease",
          textTransform: "none",
          fontWeight: 600,
        },
        contained: {
          boxShadow: "0 4px 20px 0 rgba(211, 47, 47, 0.3)",
          ":hover": {
            boxShadow: "0 6px 30px 0 rgba(211, 47, 47, 0.5)",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            color: "#ffffff",
            "& fieldset": {
              borderColor: "#424242",
            },
            ":hover fieldset": {
              borderColor: "#d32f2f",
            },
            ":focus-within fieldset": {
              borderColor: "#d32f2f",
            },
          },
          "& .MuiInputBase-input::placeholder": {
            color: "#757575",
            opacity: 1,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: "#1a1a1a",
          borderColor: "#424242",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: "#000000",
          boxShadow: "0 4px 20px 0 rgba(211, 47, 47, 0.2)",
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          backgroundColor: "#1a1a1a",
          backgroundImage: "none",
        },
        option: {
          "&[aria-selected='true']": {
            backgroundColor: "rgba(211, 47, 47, 0.5) !important",
          },
          ":hover": {
            backgroundColor: "rgba(211, 47, 47, 0.3) !important",
          },
        },
      },
    },
  },
});

// Paleta de cores adicionais para uso direto
export const colors = {
  // Principais (Inferno)
  primary: "#d32f2f",
  primaryLight: "#ff6e40",
  primaryDark: "#7d0000",

  // Secundárias (Ouro)
  secondary: "#ffd700",
  secondaryLight: "#ffed4e",
  secondaryDark: "#b8860b",

  // Neutros
  white: "#ffffff",
  black: "#000000",
  darkGray: "#0a0a0a",
  mediumGray: "#1a1a1a",
  lightGray: "#b0bec5",

  // Accentos
  error: "#f44336",
  warning: "#ff9800",
  info: "#2196f3",
  success: "#4caf50",

  // Dividers e Borders
  border: "#424242",
  disabled: "#757575",
};
