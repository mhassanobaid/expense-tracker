import { Box, Typography } from "@mui/material";

export default function HeaderSection({ isMobile }) {
  return (
    <Box textAlign="center">
      <Typography
        variant={isMobile ? "h5" : "h4"}
        gutterBottom
        sx={{ fontWeight: "bold", color: "#1976d2" }}
      >
        Welcome to Expense Tracker
      </Typography>

      <Typography variant={isMobile ? "body1" : "h6"} sx={{ color: "text.secondary" }}>
        Track your daily spending and manage your budget easily
      </Typography>
    </Box>
  );
}
