import React from "react";
import {
  Card,
  CardContent,
  Box,
  Typography,
  LinearProgress,
  Chip,
} from "@mui/material";
import { Task } from "../types";

interface TaskCardProps {
  task: Task;
}

const statusColor: Record<string, "default" | "primary" | "warning"> = {
  Submit: "primary",
  Review: "default",
  Awaiting: "default",
  Confirmed: "default",
};

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "stretch",
        overflow: "hidden",
        borderRadius: 2,
      }}
    >
      {/* Image */}
      <Box
        sx={{
          width: 100,
          flexShrink: 0,
          backgroundImage: `url(${task.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(100%)",
        }}
      />
      {/* Content */}
      <CardContent sx={{ flex: 1, p: 1.5, "&:last-child": { pb: 1.5 } }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            mb: 0.5,
          }}
        >
          <Typography variant="subtitle2" fontWeight={700}>
            {task.title}
          </Typography>
          {task.status && (
            <Chip
              label={task.status}
              size="small"
              color={statusColor[task.status] || "default"}
              sx={{
                height: 20,
                fontSize: "0.65rem",
                fontWeight: 600,
                ...(task.status === "Submit" && {
                  backgroundColor: "#212121",
                  color: "#fff",
                }),
              }}
            />
          )}
        </Box>
        <Typography variant="caption" color="text.secondary">
          {task.description}
        </Typography>
        <Typography
          variant="caption"
          display="block"
          color="text.secondary"
          sx={{ mt: 0.3 }}
        >
          {task.deadline}
        </Typography>
        <Typography variant="caption" display="block" color="text.secondary">
          {task.entries} entries
        </Typography>
        <LinearProgress
          variant="determinate"
          value={task.progress}
          sx={{ mt: 1, mb: 0.5 }}
          color="primary"
        />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="caption" color="text.secondary">
            Form {task.formIndex}/{task.totalForms}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {task.progress}% completed
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
