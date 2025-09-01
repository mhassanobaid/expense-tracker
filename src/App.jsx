import { Box, Button } from '@mui/material';
import { styled } from '@mui/system';
import { Typography, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker'; 
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import './App.css'
import BudgetForm from './components/BudgetForm';
import ExpenseForm from './components/ExpenseForm';
// import { useMediaQuery } from "react-responsive";

const PageBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center', // Vertically center the content
  alignItems: 'center',
  paddingTop: '2rem',
});

function App() {
  // const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <PageBox>
          <Typography variant="h4" gutterBottom>
            Welcome to Expense Tracker!
          </Typography>

          <Typography variant="h6" style={{ marginBottom: '20px' }}>
            Today's Date: {new Date().toLocaleDateString()}
          </Typography>

          {/* Date Picker for selecting a different date */}
          <DatePicker
            label="Select Date"
            value={new Date()}
            onChange={() => {}}
            renderInput={(params) => <TextField {...params} />}
          />

          {/* Display the selected date */}
          <Typography variant="h6" style={{ marginTop: '20px' }}>
            Selected Date: {new Date().toLocaleDateString()}
          </Typography>
          <BudgetForm />
          <ExpenseForm />
        </PageBox>
      </LocalizationProvider>
    </>
  )
}

export default App
