import React from "react";
import { useRouter } from "next/navigation";
import LockOutlinedIcon from "@mui/icons-material/lockOutlined";
import { Avatar, Button, TextField, Typography, useTheme } from "@mui/material";
import { Box, Container } from "@mui/system";
import { styled } from "@mui/material/styles";
import Link from "next/link";

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    custom: true;
  }
}

const SignIn: React.FC = () => {
  const theme = useTheme();
  const router = useRouter();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/");
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
        <Avatar sx={{ backgroundColor: theme.palette.primary.main }}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography component="h1" variant="h6" color="inherit">
          Sign In
        </Typography>

        <form onSubmit={handleLogin}>
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

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              margin: theme.spacing(2, 0, 2),
            }}
          >
            Log In
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default SignIn;
