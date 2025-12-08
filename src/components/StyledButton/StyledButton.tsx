import { Box, Button, createTheme, ThemeProvider } from "@mui/material";
import { MouseEventHandler, ReactNode } from "react";
import "./StyledLayot.css";
export interface ButtonObject {
  icon?: ReactNode;
  text: string;
  clickHandler: MouseEventHandler;
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
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box>
          {Buttons &&
            Buttons.map((button, idx) => (
              <Box sx={{ display: "flex", paddingLeft: "12%", gap: "22px" }}>
                <div className="button">
                  {button.icon}

                  <Button
                    key={`${button.text}-${idx}`}
                    onClick={button.clickHandler}
                    sx={{
                      fontFamily: "Helvetica Neue",
                      color: theme.palette.grey[600],
                      fontWeight: theme.typography.fontWeightMedium,
                    }}
                  >
                    {button.text}
                  </Button>
                </div>
              </Box>
            ))}
        </Box>
      </ThemeProvider>
    </>
  );
};
