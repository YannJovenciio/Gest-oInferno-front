import { Box, createTheme, ThemeProvider } from "@mui/material";
import { MouseEventHandler, ReactNode, useState } from "react";
import "./StyledLayot.css";
import { Link } from "react-router-dom";
export interface ButtonObject {
  icon?: ReactNode;
  text: string;
  clickHandler: MouseEventHandler<HTMLElement>;
  to: string;
}

interface StyledButtonProps {
  Buttons: ButtonObject[];
}
export const StyledButton: React.FC<StyledButtonProps> = ({ Buttons }) => {
  const theme = createTheme({
    typography: {
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
  });
  const handleClick = (
    idx: number,
    clickHandler: (event: React.MouseEvent<HTMLElement>) => void,
    e: React.MouseEvent<HTMLElement>
  ) => {
    clickHandler(e);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {Buttons &&
            Buttons.map((button, idx) => (
              <Box
                key={`${button.text}-${idx}`}
                sx={{ display: "flex", gap: "12px", alignItems: "center" }}
              >
                <div className="button">
                  {button.icon}

                  <Link
                    to={button.to}
                    onClick={(e) => handleClick(idx, button.clickHandler, e)}
                    style={{
                      fontFamily: "Helvetica Neue",
                      color: theme.palette.grey[600],
                      fontWeight: theme.typography.fontWeightMedium,
                      textDecoration: "none",
                    }}
                  >
                    {button.text}
                  </Link>
                </div>
              </Box>
            ))}
        </Box>
      </ThemeProvider>
    </>
  );
};
