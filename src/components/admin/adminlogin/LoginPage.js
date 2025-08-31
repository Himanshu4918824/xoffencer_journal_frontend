import React, { useState } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Avatar,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", form);
    // Call your API / auth logic here
  };

  return (
    <Container maxWidth="sm">
      <Paper
        elevation={6}
        sx={{
          p: 4,
          mt: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: 3,
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
          Login
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>
          <TextField
            margin="normal"
            fullWidth
            required
            label="Email Address"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            fullWidth
            required
            label="Password"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, py: 1.5, borderRadius: 2 }}
          >
            Sign In
          </Button>
        </Box>

        <Typography variant="body2" color="text.secondary">
          Don’t have an account? <a href="/signup">Sign Up</a>
        </Typography>
      </Paper>
    </Container>
  );
}
