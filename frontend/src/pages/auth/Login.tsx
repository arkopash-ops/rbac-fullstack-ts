import React, { useState } from "react";
import {
  Paper,
  Box,
  TextField,
  InputAdornment,
  Button,
  Typography,
  Link,
} from "@mui/material";
import { Email, Lock } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";

export interface LoginData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [form, setForm] = useState<LoginData>({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Logging in user:", form);
    alert("Login submitted!");
  };

  return (
    <Paper
      sx={{
        p: 5,
        width: 400,
        zIndex: 10,
        position: "relative",
        bgcolor: "transparent",
      }}
      elevation={10}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Welcome Back
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <TextField
          fullWidth
          label="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
          type="email"
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email />
              </InputAdornment>
            ),
          }}
          required
        />

        <TextField
          fullWidth
          label="Password"
          name="password"
          value={form.password}
          onChange={handleChange}
          type="password"
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock />
              </InputAdornment>
            ),
          }}
          required
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 3 }}
        >
          Login
        </Button>
      </Box>

      <Typography variant="body2" align="center" sx={{ mt: 2 }}>
        Don't have an account?{" "}
        <Link component={RouterLink} to="/register">
          Register here
        </Link>
      </Typography>
    </Paper>
  );
};

export default Login;
