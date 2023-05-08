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

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.success.main,
  padding: theme.spacing(1),
  margin: theme.spacing(1),

  "&: hover": {
    backgroundColor: theme.palette.success.light,
  },
}));

function SignUp() {
  const theme = useTheme();
  const router = useRouter();

  async function handleSignup(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push("/login");
  }

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

          <StyledButton
            type="submit"
            fullWidth
            sx={{
              margin: theme.spacing(2, 0, 2),
            }}
          >
            SignUp
          </StyledButton>
        </form>
      </Box>
    </Container>
  );
}

export default SignUp;
