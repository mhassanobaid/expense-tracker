import React from "react";
import { useMediaQuery } from "react-responsive";
import { Box } from "@mui/material";

// Dummy static data
const expenses = {
  Travel: [
    { name: "Taxi", amount: 15 },
    { name: "Bus Ticket", amount: 5 },
  ],
  Food: [
    { name: "Burger", amount: 8 },
    { name: "Coffee", amount: 3 },
  ],
  Shopping: [
    { name: "Clothes", amount: 40 },
    { name: "Shoes", amount: 60 },
  ],
  Bills: [
    { name: "Electricity", amount: 100 },
    { name: "Internet", amount: 50 },
  ],
};

const ExpenseTable = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <Box
      sx={{
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>Expense Breakdown</h2>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: "1rem",
        }}
      >
        {Object.entries(expenses).map(([category, items]) => (
          <Box
            key={category}
            sx={{
              border: "1px solid #e0e0e0",
              borderRadius: "12px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
              padding: "1rem",
              backgroundColor: "#fff",
            }}
          >
            <h3
              style={{
                textAlign: "center",
                color: "#1976d2",
                marginBottom: "0.5rem",
              }}
            >
              {category}
            </h3>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "0.5rem",
                      fontWeight: "bold",
                    }}
                  >
                    Name
                  </th>
                  <th
                    style={{
                      textAlign: "right",
                      padding: "0.5rem",
                      fontWeight: "bold",
                    }}
                  >
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={index}>
                    <td style={{ padding: "0.5rem" }}>{item.name}</td>
                    <td
                      style={{
                        padding: "0.5rem",
                        textAlign: "right",
                        fontWeight: "500",
                      }}
                    >
                      ${item.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ExpenseTable;
