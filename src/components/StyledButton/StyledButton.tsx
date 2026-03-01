import { Box, ThemeProvider, useTheme } from "@mui/material";
import { MouseEventHandler, ReactNode, useState } from "react";
import "./StyledLayot.css";
import { Link } from "react-router-dom";
export interface ButtonObject {
  icon?: ReactNode;
  active: boolean;
  label: string;
  clickHandler: MouseEventHandler<HTMLElement>;
  to: string;
}

interface StyledButtonProps {
  Buttons: ButtonObject[];
}
export const StyledButton: React.FC<StyledButtonProps> = ({ Buttons }) => {
  const theme = useTheme();
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const handleClick = (
    idx: number,
    clickHandler: (event: React.MouseEvent<HTMLElement>) => void,
    e: React.MouseEvent<HTMLElement>,
  ) => {
    setActiveIdx(idx);
    clickHandler(e);
  };

  return (
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
        {Buttons?.map((button, idx) => (
          <Box
            key={`${button.label}-${idx}`}
            sx={{
              display: "flex",
              gap: "12px",
              alignItems: "center",
              backgroundColor: idx === activeIdx ? "#a33434" : "transparent",
              borderRadius: "8px",
              transition: "background-color 0.3s",
              padding: "8px 16px",
            }}
          >
            <div
              className={`button ${idx === activeIdx ? "active" : ""}`}
              style={{
                color: theme.palette.common.black,
                fontWeight: theme.typography.fontWeightBold,
              }}
            >
              {button.icon}

              <Link
                to={button.to}
                onClick={(e) => handleClick(idx, button.clickHandler, e)}
                style={{
                  fontFamily: "Helvetica Neue",
                  textDecoration: "none",
                  color: theme.palette.common.black,
                  fontWeight: theme.typography.fontWeightBold,
                }}
              >
                {button.label}
              </Link>
            </div>
          </Box>
        ))}
      </Box>
    </ThemeProvider>
  );
};
