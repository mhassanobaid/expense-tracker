import { useState } from "react";
import { Box, Typography, TextField, Paper } from "@mui/material";
import { styled } from "@mui/system";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useMediaQuery } from "react-responsive";

import BudgetSetup from './components/BudgetForm'
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import AuthForm from "./components/AuthForm";

const PageBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  minHeight: "100vh",
  padding: "2rem 1rem",
  background: "#f9fafb",
}));

const ContentWrapper = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  width: "100%",
  maxWidth: "900px",
  padding: "2rem",
  borderRadius: "20px",
  boxShadow: "0px 6px 18px rgba(0,0,0,0.08)",
  background: "#fff",
}));

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <PageBox>
        <ContentWrapper>
          {!isLoggedIn ? (
              <AuthForm onLogin={() =>  (true)} />
            ) : (
              <>
                <Box textAlign="center">
                  <Typography
                    variant={isMobile ? "h5" : "h4"}
                    gutterBottom
                    sx={{ fontWeight: "bold", color: "#1976d2" }}
                  >
                    Welcome to Expense Tracker
                  </Typography>

                  <Typography
                    variant={isMobile ? "body1" : "h6"}
                    sx={{ color: "text.secondary" }}
                  >
                    Track your daily spending and manage your budget easily
                  </Typography>
                </Box>

                <Box
                  display="flex"
                  flexDirection={isMobile ? "column" : "row"}
                  alignItems={isMobile ? "stretch" : "center"}
                  justifyContent="center"
                  gap={2}
                >
                  <DatePicker
                    label="Select Date"
                    value={new Date()}
                    onChange={() => {}}
                    renderInput={(params) => (
                      <TextField {...params} fullWidth={isMobile} />
                    )}
                  />

                  <Typography
                    variant="body1"
                    sx={{ fontWeight: 500, textAlign: isMobile ? "center" : "left" }}
                  >
                    Selected Date: {new Date().toLocaleDateString()}
                  </Typography>
                </Box>

                {/* Budget Setup Form */}
                <BudgetSetup />

                {/* Expense Form */}
                <ExpenseForm />

                {/* Expense Table */}
                <ExpenseTable />
              </>
            )
          }
        </ContentWrapper>
      </PageBox>
    </LocalizationProvider>
  );
}
