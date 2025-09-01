// src/components/ExpenseForm.jsx
import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  MenuItem,
} from "@mui/material";
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
  boxShadow: "none", // no shadow
}));

const categories = ["Travel", "Food", "Shopping", "Bills", "Other"];

export default function ExpenseForm() {
  const isMobile = useMediaQuery({ maxWidth: 960 });

  const handleSave = () => {
    alert('Expense Saved:\nCategory');
    // later you can lift this data up via props
  };

  return (
    <Box sx={{ mt: "20px", px: isMobile ? 2 : 0 }}>
      <Typography variant="h5" align="center" gutterBottom>
        Add Expense
      </Typography>

      <FormBox elevation={0}>
        {/* Category dropdown */}
        <TextField
          select
          label="Select Category"
          onChange={() => {}}
          fullWidth
        >
          {categories.map((cat) => (
            <MenuItem key={cat} value={cat}>
              {cat}
            </MenuItem>
          ))}
        </TextField>

        {/* Show custom input if 'Other' chosen
        {category === "Other" && (
          <TextField
            label="Enter Custom Category"
            onChange={() => {}}
            fullWidth
          />
        )} */}

        {/* Amount field */}
        <TextField
          label="Amount"
          type="number"
          onChange={() => {}}
          fullWidth
        />

        {/* Save button */}
        <Button
          variant="contained"
          color="primary"
          onClick={handleSave}
          sx={{ borderRadius: "12px", py: 1.2 }}
        >
          Save Expense
        </Button>
      </FormBox>
    </Box>
  );
}
