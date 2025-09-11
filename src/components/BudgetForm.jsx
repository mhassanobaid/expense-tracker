import { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import { styled } from "@mui/system";
import { useMediaQuery } from "react-responsive";

const FormBox = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "1.2rem",
  padding: "2rem",
  maxWidth: "500px",
  margin: "auto",
  borderRadius: "16px",
  boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
}));

export default function BudgetSetup() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const [salary, setSalary] = useState("");
  const [expense, setExpense] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (salary < 1 || expense < 1) {
      alert("Both Salary and Expense must be greater than 0");
      return;
    }

    alert("Budget saved (static demo)!");
  };

  return (
    <Box sx={{ mt: 4, px: isMobile ? 2 : 0 }}>
      <Typography
        variant={isMobile ? "h6" : "h5"}
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold" }}
      >
        Setup Your Budget
      </Typography>

      <FormBox component="form" onSubmit={handleSubmit}>
        {/* Salary */}
        <TextField
          label="Monthly Salary"
          type="number"
          fullWidth
          placeholder="e.g. 5000"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          error={salary !== "" && salary < 1}
          helperText={
            salary !== "" && salary < 1 ? "Salary must be greater than 0" : ""
          }
          required
        />

        {/* Max daily expense */}
        <TextField
          label="Max Daily Expense"
          type="number"
          fullWidth
          placeholder="e.g. 200"
          value={expense}
          onChange={(e) => setExpense(e.target.value)}
          error={expense !== "" && expense < 1}
          helperText={
            expense !== "" && expense < 1
              ? "Expense must be greater than 0"
              : ""
          }
          required
        />

        {/* Save button */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            borderRadius: "12px",
            py: 1.2,
            fontWeight: "bold",
            width: isMobile ? "100%" : "50%",
            alignSelf: isMobile ? "stretch" : "center",
          }}
        >
          Save Budget
        </Button>
      </FormBox>
    </Box>
  );
}
