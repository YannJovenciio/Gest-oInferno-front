import { Box, useTheme } from "@mui/material";

export const DemonStyledIcon = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "50px",
        height: "50px",
        borderRadius: "55%",
        backgroundColor: theme.palette.grey[400],
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <img
        alt="A demon"
        style={{ width: "100%", height: "100%" }}
        src="/assets/DemonStyledIcon.png"
      />
    </Box>
  );
};
