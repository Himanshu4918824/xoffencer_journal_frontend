import React, { useContext, useEffect, useState } from "react";
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
import Header from "../../userinterface/homepage/Header";
import MainContext from "../../../context/maincontext";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const { login } = useContext(MainContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const token = localStorage.getItem('token');
  useEffect(() => { if (token && token !== 'undefined') { navigate('/dashboard') } }, [navigate , token])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login(form)
      if (data === "Login successful") {
        navigate('/dashboard')
      }
    }
    catch (e) {
      console.log(e)
    }

  };

  return (
    <>
      <Header />
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


        </Paper>
      </Container>
    </>
  );
}
