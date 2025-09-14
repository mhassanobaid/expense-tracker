import { Box, Typography, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";

export default function DateSelector({ isMobile }) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <Box
      display="flex"
      flexDirection={isMobile ? "column" : "row"}
      alignItems={isMobile ? "stretch" : "center"}
      justifyContent="center"
      gap={2}
    >
      <DatePicker
        label="Select Date"
        value={selectedDate}
        onChange={(newValue) => setSelectedDate(newValue)}
        maxDate={new Date()}
        renderInput={(params) => <TextField {...params} fullWidth={isMobile} />}
      />

      <Typography variant="body1" sx={{ fontWeight: 500, textAlign: isMobile ? "center" : "left" }}>
        Selected Date: {selectedDate.toLocaleDateString()}
      </Typography>
    </Box>
  );
}
