import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Chip,
  LinearProgress,
  Avatar,
  Divider,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import BarChartIcon from "@mui/icons-material/BarChart";
import CalculateIcon from "@mui/icons-material/Calculate";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CircleIcon from "@mui/icons-material/Circle";

const reports = [
  {
    title: "Demon Registration",
    subtitle: "Monthly Summary",
    percentage: 85,
    icon: "bar",
  },
  {
    title: "Entity Categories",
    subtitle: "Yearly Overview",
    percentage: 60,
    icon: "bar",
  },
  {
    title: "Data Accuracy",
    subtitle: "Quarterly Review",
    percentage: 90,
    icon: "calc",
  },
];

const getPercentageColor = (pct: number) => {
  if (pct >= 80) return "#4CAF50";
  if (pct >= 50) return "#FF9800";
  return "#F44336";
};

const RightPanel: React.FC = () => {
  return (
    <Box
      sx={{
        width: 260,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      {/* Current Tasks */}
      <Card>
        <CardContent sx={{ p: 2, "&:last-child": { pb: 2 } }}>
          <Typography variant="h6" sx={{ mb: 1.5, fontSize: "0.95rem" }}>
            Current Tasks
          </Typography>

          {/* Video thumbnail */}
          <Box
            sx={{
              width: "100%",
              height: 120,
              borderRadius: 2,
              overflow: "hidden",
              position: "relative",
              mb: 1.5,
              backgroundImage:
                "url(https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "grayscale(60%)",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(0,0,0,0.2)",
              }}
            >
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  backgroundColor: "rgba(255,255,255,0.8)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <PlayArrowIcon sx={{ color: "#212121", fontSize: 20 }} />
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <Box>
              <Typography variant="subtitle2" fontWeight={700}>
                Data Collection
              </Typography>
              <Typography
                variant="caption"
                color="text.secondary"
                display="flex"
                alignItems="center"
                gap={0.5}
                sx={{ mt: 0.5 }}
              >
                <CircleIcon sx={{ fontSize: 8, color: "#4CAF50" }} />
                Entities being processed: <b>25/50</b>
              </Typography>
              <Typography
                variant="caption"
                color="text.secondary"
                display="flex"
                alignItems="center"
                gap={0.5}
              >
                Status: <b>Active</b>
              </Typography>
            </Box>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ whiteSpace: "nowrap" }}
            >
              (Ends in: 30 min.)
            </Typography>
          </Box>
        </CardContent>
      </Card>

      {/* Reports */}
      <Card>
        <CardContent sx={{ p: 2, "&:last-child": { pb: 2 } }}>
          <Typography variant="h6" sx={{ mb: 1.5, fontSize: "0.95rem" }}>
            Reports
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
            {reports.map((r) => (
              <Box
                key={r.title}
                sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
              >
                <Box
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: 1.5,
                    backgroundColor: "#F5F5F5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {r.icon === "bar" ? (
                    <BarChartIcon sx={{ fontSize: 18 }} />
                  ) : (
                    <CalculateIcon sx={{ fontSize: 18 }} />
                  )}
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="body2" fontWeight={600}>
                    {r.title}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {r.subtitle}
                  </Typography>
                </Box>
                <Chip
                  label={`${r.percentage}%`}
                  size="small"
                  sx={{
                    backgroundColor: getPercentageColor(r.percentage) + "20",
                    color: getPercentageColor(r.percentage),
                    fontWeight: 700,
                    fontSize: "0.75rem",
                    height: 26,
                  }}
                />
              </Box>
            ))}
          </Box>
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card>
        <CardContent sx={{ p: 2, "&:last-child": { pb: 2 } }}>
          <Typography variant="h6" sx={{ mb: 1.5, fontSize: "0.95rem" }}>
            Notifications
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <Box>
              <Typography variant="body2" fontWeight={700}>
                New entity registration successful!
              </Typography>
              <Typography variant="caption" color="text.secondary">
                For assistance, contact the Demon Manager.
              </Typography>
            </Box>
            <Box
              sx={{
                width: 28,
                height: 28,
                borderRadius: 1,
                backgroundColor: "#F5F5F5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                flexShrink: 0,
                ml: 1,
              }}
            >
              <ArrowForwardIcon sx={{ fontSize: 14 }} />
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default RightPanel;
