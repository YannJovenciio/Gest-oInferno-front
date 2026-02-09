import { Box, Typography } from "@mui/material";
import { FlameIcon } from "lucide-react";
import { useLayotHeader } from "./useLayotHeader";
import { StyledButton } from "../components/StyledButton/StyledButton";
import "./LayotHeader.css";

export const LayotHeader = () => {
  const { buttons } = useLayotHeader();

  return (
    <div
      className="Layot"
      style={{
        display: "flex",
        justifyContent: "left",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "left",
          padding: "3%",
          gap: "10px",
          flexDirection: "row",
          borderRight: "2px solid  rgb(92, 4, 4)",
          borderBottom: "1px solid rgb(92, 4, 4)",
        }}
      >
        <FlameIcon size={"38px"} color="rgba(186, 84, 49, 1)" />

        <Box
          sx={{
            maxWidth: "100%",
            display: "flex",
            alignItems: "right",
            color: "rgba(186, 84, 49, 1)",
          }}
        >
          <Typography variant="h6">Sistema de Gestão do inferno</Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
        }}
      >
        <StyledButton Buttons={buttons} />
      </Box>
    </div>
  );
};
