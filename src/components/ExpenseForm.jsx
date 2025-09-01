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
  gap: "1.2rem",
  padding: "2rem",
  maxWidth: "500px",
  margin: "auto",
  borderRadius: "16px",
  boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
}));

const categories = ["Travel", "Food", "Shopping", "Bills", "Other"];

export default function ExpenseForm() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const handleSave = () => {
    alert("Expense Saved!");
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
        Add Expense
      </Typography>

      {/* Form container */}
      <FormBox>
        {/* Category dropdown */}
        <TextField select label="Category" fullWidth>
          {categories.map((cat) => (
            <MenuItem key={cat} value={cat}>
              {cat}
            </MenuItem>
          ))}
        </TextField>

        {/* Amount field */}
        <TextField label="Amount" type="number" fullWidth />

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
          Save Expense
        </Button>
      </FormBox>
    </Box>
  );
}
