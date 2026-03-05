import { Avatar, Box, Typography } from "@mui/material";

export const AvatarDisplay = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3, px: 1 }}>
      <Avatar
        src="https://api.dicebear.com/7.x/adventurer/svg?seed=Lucifer"
        sx={{ width: 40, height: 40 }}
      />
      <Box>
        <Typography variant="subtitle2" fontWeight={700}>
          Lucifer
        </Typography>
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ fontSize: "0.7rem" }}
        >
          l.morningstar@hell.co
        </Typography>
      </Box>
    </Box>
  );
};
