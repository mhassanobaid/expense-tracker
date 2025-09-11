import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Link,
} from "@mui/material";
import { styled } from "@mui/system";
import { useMediaQuery } from "react-responsive";

const FormBox = styled(Paper)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "1.2rem",
  padding: "2rem",
  maxWidth: "400px",
  margin: "auto",
  borderRadius: "16px",
  boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
}));

export default function AuthForm({ onLogin }) {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    const endpoint = isSignup ? "/api/users/signup" : "/api/users/signin";

    try {
      const res = await fetch("http://localhost:5000" + endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Error");

      alert(isSignup ? "Signed up successfully!" : "Logged in successfully!");
      localStorage.setItem("token", data.token); // save JWT
      onLogin(); // switch to app view
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <Box sx={{ mt: 6, px: isMobile ? 2 : 0 }}>
      <Typography
        variant={isMobile ? "h6" : "h5"}
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold" }}
      >
        {isSignup ? "Create an Account" : "Welcome Back"}
      </Typography>

      <FormBox component="form" onSubmit={handleSubmit}>
        <TextField
          label="Email"
          type="email"
          fullWidth
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            borderRadius: "12px",
            py: 1.2,
            fontWeight: "bold",
            width: "100%",
          }}
        >
          {isSignup ? "Sign Up" : "Login"}
        </Button>

        <Typography align="center" variant="body2">
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <Link
            component="button"
            variant="body2"
            onClick={() => setIsSignup(!isSignup)}
          >
            {isSignup ? "Login" : "Sign Up"}
          </Link>
        </Typography>
      </FormBox>
    </Box>
  );
}
