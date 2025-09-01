// src/components/BudgetSetup.jsx
import { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import { styled } from "@mui/system";
import { useMediaQuery } from "react-responsive";

const FormBox = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",  
  padding: "1.5rem",
  maxWidth: "400px",
  margin: "auto",
  borderRadius: "16px",
  boxShadow: "none",
}));

export default function BudgetForm() {

  const isMobile = useMediaQuery({ maxWidth: 960 });

  const handleSave = () => {
    alert("Budget saved (static demo)!");
  };

  return (
    <Box sx={{ mt: "20px", px: isMobile ? 2 : 0 }}>
      <Typography variant="h5" align="center">
        Setup Your Budget
      </Typography>

      <FormBox>
        <TextField
          label="Enter Salary"
          type="number"
          onChange={() => {}}
          fullWidth
        />

        <TextField
          label="Enter Max Daily Expense"
          type="number"
          onChange={() => {}}
          fullWidth
        />

        <Button
          variant="contained"
          color="primary"
          onClick={handleSave}
          sx={{ borderRadius: "12px", py: 1.2 }}
        >
          Save
        </Button>
      </FormBox>
    </Box>
  );
}
