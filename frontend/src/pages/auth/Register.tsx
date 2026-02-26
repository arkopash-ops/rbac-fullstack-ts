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
import { Person, Email, Lock } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";

export interface User {
  name: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const [form, setForm] = useState<User>({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Registering user:", form);
    alert("User registered!");
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
        New Horizon
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Person />
              </InputAdornment>
            ),
          }}
          required
        />

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
          Register
        </Button>
      </Box>

      <Typography variant="body2" align="center" sx={{ mt: 2 }}>
        Already have an account?{" "}
        <Link component={RouterLink} to="/">
          Login here
        </Link>
      </Typography>
    </Paper>
  );
};

export default Register;
