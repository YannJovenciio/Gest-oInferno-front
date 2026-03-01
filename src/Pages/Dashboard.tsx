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
import { Task } from "../types";

const tasks: Task[] = [
  {
    id: 1,
    title: "Demon Registration",
    description: "Enter demon details",
    deadline: "Submit by 5 PM, Form A",
    formType: "Form A",
    entries: 15,
    progress: 20,
    formIndex: 1,
    totalForms: 5,
    status: "Submit",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&q=80",
  },
  {
    id: 2,
    title: "Demon",
    description: "What type of demon?",
    deadline: "Thursday 10/7, 3 PM, Form B",
    formType: "Form B",
    entries: 10,
    progress: 40,
    formIndex: 2,
    totalForms: 5,
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=200&q=80",
  },
  {
    id: 3,
    title: "Demon Overview",
    description: "Track all entities",
    deadline: "Friday 15/7, 1 PM",
    formType: "Monthly Data Review",
    entries: 0,
    progress: 10,
    formIndex: 3,
    totalForms: 5,
    status: "Review",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=200&q=80",
  },
  {
    id: 4,
    title: "Submission",
    description: "Verify with the Supervisor",
    deadline: "Monday 19/7, 10 AM",
    formType: "Final meeting Online",
    entries: 0,
    progress: 100,
    formIndex: 4,
    totalForms: 5,
    status: "Confirmed",
    image:
      "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=200&q=80",
  },
];

const Dashboard: React.FC = () => {
  const theme = useTheme();
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
        {tasks.map((task) => (
          <Grid key={task.id}>
            <TaskCard task={task} />
          </Grid>
        ))}
      </Grid>
      <DemonCalendar />
    </Box>
  );
};

export default Dashboard;
