import React, { useState } from "react";
import { Box, Typography, Chip, IconButton } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

interface CalendarEvent {
  title: string;
  form: string;
  time: string;
  badge?: "Submit" | "Review";
  highlight?: boolean;
}

const events: Record<number, CalendarEvent> = {
  4: { title: "Demon", form: "Form A", time: "5 PM", highlight: true },
  10: {
    title: "Demon Categories",
    form: "Form B",
    time: "3 PM",
    badge: "Submit",
    highlight: true,
  },
  15: {
    title: "Demon Overview",
    form: "Monthly Review",
    time: "1 PM, Online",
    badge: "Review",
  },
  19: {
    title: "Submission",
    form: "Final meeting",
    time: "10 AM, Online",
    highlight: true,
  },
};

const daysOfWeek = ["", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
// July 2023 starts on Saturday (day 6 in 0-indexed), let's use Mon as start
// July 1 = Saturday. Week starting Monday: offset = 5
const offset = 5;
const totalDays = 31;

const DemonCalendar: React.FC = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h6" fontWeight={700}>
          Your Demon
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <CalendarTodayIcon sx={{ fontSize: 16 }} />
          <Typography variant="body2">July 01 - July 31, 2023</Typography>
          <IconButton size="small">
            <KeyboardArrowUpIcon fontSize="small" />
          </IconButton>
          <IconButton size="small">
            <KeyboardArrowDownIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          border: "1px solid #E0E0E0",
          borderRadius: 2,
          overflow: "hidden",
          backgroundColor: "#FFFFFF",
        }}
      >
        {/* Build grid cells */}
        {Array.from({ length: offset + totalDays }).map((_, idx) => {
          const day = idx - offset + 1;
          const isValidDay = day >= 1 && day <= totalDays;
          const event = isValidDay ? events[day] : undefined;

          return (
            <Box
              key={idx}
              sx={{
                minHeight: 80,
                p: 0.75,
                borderRight: (idx + 1) % 7 !== 0 ? "1px solid #E0E0E0" : "none",
                borderBottom: "1px solid #E0E0E0",
                backgroundColor: event?.highlight ? "#F1F8E9" : "transparent",
                position: "relative",
              }}
            >
              {isValidDay && (
                <>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 0.5,
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        fontWeight: event ? 700 : 400,
                        width: 20,
                        height: 20,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                        backgroundColor: event?.highlight
                          ? "#4CAF50"
                          : "transparent",
                        color: event?.highlight ? "#fff" : "text.primary",
                        fontSize: "0.72rem",
                      }}
                    >
                      {day}
                    </Typography>
                    {event?.badge && (
                      <Chip
                        label={event.badge}
                        size="small"
                        sx={{
                          height: 16,
                          fontSize: "0.6rem",
                          fontWeight: 600,
                          backgroundColor:
                            event.badge === "Submit" ? "#4CAF50" : "#E0E0E0",
                          color: event.badge === "Submit" ? "#fff" : "#424242",
                        }}
                      />
                    )}
                  </Box>
                  {event && (
                    <>
                      <Typography
                        variant="caption"
                        display="block"
                        fontWeight={700}
                        sx={{ lineHeight: 1.2 }}
                      >
                        {event.title}
                      </Typography>
                      <Typography
                        variant="caption"
                        display="block"
                        color="text.secondary"
                        sx={{ fontSize: "0.65rem" }}
                      >
                        {event.form}
                      </Typography>
                      <Typography
                        variant="caption"
                        display="block"
                        color="text.secondary"
                        sx={{ fontSize: "0.65rem" }}
                      >
                        {event.time}
                      </Typography>
                    </>
                  )}
                </>
              )}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default DemonCalendar;
