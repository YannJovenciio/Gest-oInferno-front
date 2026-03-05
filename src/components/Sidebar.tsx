import React from "react";
import {
  Box,
  Avatar,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/SettingsOutlined";
import SignOutIcon from "@mui/icons-material/ExitToApp";
import { useLayotHeader } from "../Layot/useLayotHeader";
import { Link } from "react-router-dom";
import { AvatarDisplay } from "./AvatarDisplay";

const Sidebar: React.FC = () => {
  const { buttons } = useLayotHeader();
  return (
    <Box
      sx={{
        width: 220,
        minHeight: "100vh",
        backgroundColor: "#F0F0F0",
        display: "flex",
        flexDirection: "column",
        py: 2,
        px: 1.5,
        flexShrink: 0,
      }}
    >
      <Box>
        <AvatarDisplay />
      </Box>

      <List disablePadding sx={{ flex: 1 }}>
        {buttons.map((item) => (
          <ListItemButton
            key={item.label}
            component={Link}
            to={item.to}
            selected={item.active}
            sx={{ mb: 0.5, py: 1, px: 1.5 }}
          >
            <ListItemIcon
              sx={{
                minWidth: 32,
                color: item.active ? "text.primary" : "text.secondary",
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>

      <Divider sx={{ my: 1 }} />

      <List disablePadding>
        <ListItemButton sx={{ py: 1, px: 1.5 }}>
          <ListItemIcon sx={{ minWidth: 32 }}>
            <SettingsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Preferences" />
        </ListItemButton>
        <ListItemButton sx={{ py: 1, px: 1.5 }}>
          <ListItemIcon sx={{ minWidth: 32 }}>
            <SignOutIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Sign out" />
        </ListItemButton>
      </List>
    </Box>
  );
};

export default Sidebar;
