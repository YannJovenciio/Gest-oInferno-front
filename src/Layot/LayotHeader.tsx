import { Box, Grid, Typography, useTheme } from "@mui/material";
import { FlameIcon } from "lucide-react";
import { StyledButton } from "../components/StyledButton/StyledButton";
import { useLayotHeader } from "./useLayotHeader";

export const LayotHeader = () => {
  const theme = useTheme();

  const { buttons } = useLayotHeader();

  return (
    <Grid
      sx={{
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
        }}
      >
        <FlameIcon size={"38px"} />

        <Box sx={{ maxWidth: "200px", display: "flex", alignItems: "right" }}>
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
    </Grid>
  );
};
