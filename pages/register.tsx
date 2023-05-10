import React from "react";
import { useRouter } from "next/navigation";
import LockOutlinedIcon from "@mui/icons-material/lockOutlined";
import {
  Avatar,
  Button,
  TextField,
  Typography,
  useTheme,
  Box,
  Container,
} from "@mui/material";

import { styled } from "@mui/material/styles";
import { NextPage } from "next";
import { StyledButtonSignUp } from "@/components/styledComponent";

const SignUp: NextPage = () => {
  const theme = useTheme();
  const router = useRouter();

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/login");
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          mt: theme.spacing(9),
          alignItems: "center",
        }}
      >
        <Avatar sx={{ backgroundColor: theme.palette.success.main }}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography component="h1" variant="h6" color="inherit">
          Sign In
        </Typography>

        <form onSubmit={handleSignup}>
          <TextField
            label="Name"
            name="name"
            fullWidth
            type="text"
            autoComplete="off"
            id="name"
            variant="outlined"
            margin="normal"
            required
          ></TextField>

          <TextField
            label="Email"
            name="email"
            fullWidth
            type="email"
            autoComplete="off"
            id="email"
            variant="outlined"
            margin="normal"
            required
          ></TextField>
          <TextField
            label="Password"
            name="password"
            fullWidth
            type="password"
            autoComplete="current-password"
            id="password"
            variant="outlined"
            margin="normal"
            required
          ></TextField>

          <StyledButtonSignUp
            type="submit"
            fullWidth
            sx={{
              margin: theme.spacing(2, 0, 2),
            }}
          >
            SignUp
          </StyledButtonSignUp>
        </form>
      </Box>
    </Container>
  );
};

export default SignUp;
