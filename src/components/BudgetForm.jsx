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

  const handleSave = () => {
    alert("Budget saved (static demo)!");
  };

  return (
    <Box sx={{ mt: 4, px: isMobile ? 2 : 0 }}>
      {/* Heading */}
      <Typography
        variant={isMobile ? "h6" : "h5"}
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold" }}
      >
        Setup Your Budget
      </Typography>

      {/* Form container */}
      <FormBox>
        {/* Salary */}
        <TextField
          label="Monthly Salary"
          type="number"
          fullWidth
          placeholder="e.g. 5000"
        />

        {/* Max daily expense */}
        <TextField
          label="Max Daily Expense"
          type="number"
          fullWidth
          placeholder="e.g. 200"
        />

        {/* Save button */}
        <Button
          variant="contained"
          color="primary"
          onClick={handleSave}
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
