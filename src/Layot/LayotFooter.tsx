import { Box, Paper, Typography, useTheme } from "@mui/material";

export const LayotFooter = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "100%",
      }}
    >
      <Paper
        sx={{
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
          width: "100%",
        }}
      >
        <Typography>
          {" "}
          Yan Jovencio Miranda LTD, ~Todos os direitos reservados
        </Typography>
      </Paper>
    </Box>
  );
};
