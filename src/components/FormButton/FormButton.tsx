import { Box, Button, useTheme } from "@mui/material";
import { ReactNode } from "react";

interface FormButtonProps {
  text: ReactNode;
  BgColor: string;
  fontColor: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  fontWeight?: string | undefined;
}
export const FormButton: React.FC<FormButtonProps> = ({
  text,
  fontColor,
  BgColor,
  onClick,
  fontWeight,
}) => {
  return (
    <Box>
      <Button
        sx={{
          color: fontColor,
          backgroundColor: BgColor,
          fontWeight: fontWeight ?? "",
          borderRadius: "12px",
          "&:hover": {
            backgroundColor: BgColor,
            opacity: 0.9,
          },
        }}
        onClick={onClick}
      >
        {text}
      </Button>
    </Box>
  );
};
