import Head from "next/head";

import { Montserrat } from "next/font/google";

import { Button, useTheme, Typography, CssBaseline, Box } from "@mui/material";

import Navbar from "@/components/Navbar";
import InputField from "@/components/InputField";

import styled from "@emotion/styled";
import { NextPage } from "next";

const montserrat = Montserrat({ subsets: ["latin"] });

const Home: NextPage = () => {
  const theme = useTheme();
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="MUI expamle " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <CssBaseline />
        <Navbar />
        <InputField />
        {/* <Button
          variant="contained"
          sx={{
            margin: theme.spacing(4),
            bgcolor: theme.palette.primary.main,
          }}
        >
          Primary Button
        </Button> */}
        {/* <Button
          className={montserrat.className}
          sx={{
            margin: theme.spacing(4),
            color: theme.palette.secondary.contrastText,
            bgcolor: theme.palette.secondary.main,
            ":hover": {
              color: theme.palette.secondary.contrastText,
              bgcolor: theme.palette.secondary.dark,
            },
          }}
        >
          Secondary Button
        </Button> */}

        {/* <Typography variant="h3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
          explicabo hic voluptate labore, dolorum beatae perferendis quaerat
          eveniet, repellat nam reprehenderit? Amet voluptate rem esse quibusdam
          quisquam illo dolorem enim?
        </Typography> */}
      </main>
    </>
  );
};
export default Home;
