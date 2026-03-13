import React from "react";
import {
  Box,
  Typography,
  InputBase,
  IconButton,
  Grid,
  useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/NotificationsNoneOutlined";
import EmailIcon from "@mui/icons-material/MailOutline";
import ChatIcon from "@mui/icons-material/ChatBubbleOutline";

import DemonCalendar from "../components/DemonCalendar";
import TaskCard from "../components/TaskCard";
import { useGetHellTasks } from "../Api/useGetHellTasks";

const Dashboard: React.FC = () => {
  const theme = useTheme();
  const {tasks} = useGetHellTasks();
  console.log("heltask",tasks)

  
  return (
    <Box sx={{ flex: 1, p: 3, overflow: "auto", backgroundColor: "#EBEBEB" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h4" color={theme.palette.text.primary}>Dashboard</Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderRadius: 2,
              px: 1.5,
              py: 0.5,
              width: 200,
              border: "1px solid #E0E0E0",
            }}
          >
            <SearchIcon sx={{ fontSize: 18, color: "text.secondary", mr: 1 }} />
            <InputBase
              placeholder="Search demons..."
              sx={{ fontSize: "0.85rem" }}
            />
          </Box>
          <IconButton size="small">
            <NotificationsIcon />
          </IconButton>
          <IconButton size="small">
            <EmailIcon />
          </IconButton>
          <IconButton size="small">
            <ChatIcon />
          </IconButton>
        </Box>
      </Box>

      <Grid container spacing={2} sx={{ mb: 3 }}>
        {tasks ? tasks.map((task) => (
          <Grid key={task.id}>
            <TaskCard task={task} />
          </Grid>
        )) : <Typography>No tasks for now</Typography>}
      </Grid>
      <DemonCalendar />
    </Box>
  );
};

export default Dashboard;
