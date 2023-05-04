import Head from "next/head";

import { Montserrat } from "next/font/google";

import { Button, useTheme, Typography, CssBaseline, Box } from "@mui/material";

import Navbar from "@/components/Navbar";

const montserrat = Montserrat({ subsets: ["latin"] });

const Home = () => {
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
        <Button
          variant="contained"
          sx={{
            margin: theme.spacing(4),
            bgcolor: theme.palette.primary.main,
          }}
        >
          Primary Button
        </Button>
        <Button
          className={montserrat.className}
          variant="contained"
          sx={{
            margin: theme.spacing(4),
            bgcolor: theme.palette.secondary.main,
          }}
        >
          Secondary Button
        </Button>
        <Button
          variant="contained"
          sx={{
            margin: theme.spacing(4),
            backgroundColor: theme.palette.custom.main,
          }}
        >
          Custom Button
        </Button>
        <Typography
          variant="h1Bold"
          component={"h1"}
          sx={{ fontFamily: theme.typography.fontFamily }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem, nesciunt. Modi, officiis placeat porro et enim
          deserunt quidem assumenda nulla consequuntur voluptatem nam temporibus
          voluptatum maiores, cumque consectetur ipsum dolorum.
        </Typography>
        <Typography variant="h3" component="h5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          recusandae, repellat animi voluptas aliquam quibusdam, tempore quas ab
          voluptatibus atque dolore perferendis blanditiis facere. Voluptatem
          sapiente magnam sunt ex eveniet.
        </Typography>

        <Typography sx={{ fontFamily: "montserrat" }}>lorem5</Typography>
        <Box sx={{ color: "secondary.main" }}>Sessions</Box>
        <Box
          sx={{
            color: "primary.main",
            fontSize: 20,
            fontWeight: "medium",
            fontFamily: "montserrat",
          }}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius fugiat
          ipsa esse obcaecati sequi molestiae in velit illum mollitia tempore
          iure odit sed ratione perferendis, quaerat molestias voluptate
          accusantium magni?
        </Box>
      </main>
    </>
  );
};
export default Home;
